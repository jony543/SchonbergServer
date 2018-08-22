import { Injectable } from "@angular/core";
import {Howl} from 'howler';
import * as _ from 'lodash';
import { Subscription } from "rxjs";
import { HttpClient } from '@angular/common/http';

const NUM_OF_DUMMY_TRIALS:number = 0;

const THEME_AND_VARIATIONS: Array<Composition> = [
    {
        id: 1,
        prime1: "stimuli/variations32Cminor/theme.mp3",
        prime2: "stimuli/variations32Cminor/var6.mp3",
        stim1: "stimuli/variations32Cminor/var3.mp3",
        stim2: "stimuli/variations32Cminor/var4.mp3"
    },
    {
        id: 2,
        prime1: "stimuli/variationsD/theme.mp3",
        prime2: "stimuli/variationsD/var2.mp3",
        stim1: "stimuli/variationsD/var3.mp3",
        stim2: "stimuli/variationsD/var4.mp3"
    },
    {
        id: 3,
        prime1: "stimuli/variationsF/theme.mp3",
        prime2: "stimuli/variationsF/var2.mp3",
        stim1: "stimuli/variationsF/var3.mp3",
        stim2: "stimuli/variationsF/var4.mp3"
    },
    {
        id: 4,
        prime1: "stimuli/variations6WOO70/theme.mp3",
        prime2: "stimuli/variations6WOO70/var2.mp3",
        stim1: "stimuli/variations6WOO70/var3.mp3",
        stim2: "stimuli/variations6WOO70/var5.mp3"
    },
    {
        id: 5,
        prime1: "stimuli/variationsA/thema.mp3",
        prime2: "stimuli/variationsA/var2.mp3",
        stim1: "stimuli/variationsA/var3.mp3",
        stim2: "stimuli/variationsA/var5.mp3"
    }
];

const POLONEZ: Array<Composition> = [
    {
        id: 6,
        prime1: "",
        prime2: "stimuli/polonez1/A12.mp3",
        stim1: "stimuli/polonez1/Areprise.mp3",
        stim2: "stimuli/polonez1/Avariation.mp3"
    },
    {
        id: 7,
        prime1: "stimuli/polonez2/A.mp3",
        prime2: "",
        stim1: "stimuli/polonez2/Alight.mp3",
        stim2: "stimuli/polonez2/Avariation.mp3"
    },
]


@Injectable()
export class ExperimentService {
    private trials: Array<Trial> = new Array<Trial>();

    private paramsSubscription: Subscription;

    constructor(private http: HttpClient) {
        var themAndVariatoins: Composition[] = _.shuffle(THEME_AND_VARIATIONS);
        var dummyVariations: Composition[] = themAndVariatoins.splice(0, 3);
        
        if (Math.random() > 0.5) {
            var temp = dummyVariations[0].stim1;
            dummyVariations[0].stim1 = dummyVariations[1].stim1;
            dummyVariations[1].stim1 = dummyVariations[2].stim1;
            dummyVariations[2].stim1 = temp;
        } else {
            var temp = dummyVariations[0].stim2;
            dummyVariations[0].stim2 = dummyVariations[1].stim2;
            dummyVariations[1].stim2 = dummyVariations[2].stim2;
            dummyVariations[2].stim2 = temp;
        }

        dummyVariations.forEach((v, i) => {
            this.trials.push(new Trial(v, i % 2 == 0, true));
        });
        themAndVariatoins.forEach((v, i) => {
            this.trials.push(new Trial(v, i % 2 == 0, false));
        });

        // add theme and variations trials
        // var trialTypeArray: Array<boolean> = themAndVariatoins.map((x, i) => i % 2 == 0);
        // THEME_AND_VARIATIONS.forEach((x, i) => {
        //     this.trials.push(new Trial(x, trialTypeArray[i]));
        // });

        // add polonez trials
        this.trials.push(new Trial(POLONEZ[0], false, false));
        this.trials.push(new Trial(POLONEZ[1], true, false));

        this.trials = _.shuffle(this.trials)

        var trialsLog = this.trials.map(t => t.getResult());
        console.log(trialsLog);
        console.log(trialsLog.map(x => x.isDummy? '' : x.prime))
    }

    getTrial(id: number): Trial {
        return this.trials[id];
    }

    isLastTrial(id: number): boolean {
        return id >= this.trials.length - 1;
    }

    setSimilarityRank(id: number, rank: number) {
        this.trials[id].similarityRank = rank;

        return this.http.post<any>('/v1/exp', {
            exp: 'music',
            world: 'similarity',
            stage: id,
            data: this.trials[id].getResult() 
        });
    }

    reportExpFinalResult() {
        return this.http.post<any>('/v1/exp', {
            exp: 'music',
            world: 'similarity',
            stage: 99,
            data: this.trials.map(t => t.getResult())
        });
    }
}

interface Composition {
    id: number;
    prime1: string;
    prime2: string;
    stim1: string;
    stim2: string;
}

export class Trial {
    private id: number;
    private prime: Howl;
    private stimuli: Array<Howl> = new Array<Howl>();
    
    private primeSrc: string = "";
    private stim1Src: string = "";
    private stim2Src: string = "";
    private compositionId: number;
    private isPrime1Take: boolean;
    private isDummy: boolean;
    
    public similarityRank: number;

    public getResult() {
        return {
            compositionId: this.compositionId,
            prime: this.primeSrc.substring("stimuli/".length),
            stim1: this.stim1Src.substring("stimuli/".length),
            stim2: this.stim2Src.substring("stimuli/".length),
            isDummy: this.isDummy,
            isPrime1Taken: this.isPrime1Take,
            similarityRank: this.similarityRank
        }
    }

    constructor (composition: Composition, takePrime1: boolean, isDummy: boolean) {
        this.isDummy = isDummy;
        this.isPrime1Take = takePrime1;
        this.compositionId = composition.id;

        this.primeSrc = (takePrime1) ? composition.prime1 : composition.prime2;

        this.prime = new Howl({
            src: [ this.primeSrc ],
            preload: true
          });

        // switch between input with chance probability
        if (Math.random() > 0.5) {
            this.stim1Src = composition.stim1;
            this.stim2Src = composition.stim2;
        } else {
            this.stim1Src = composition.stim2;
            this.stim2Src = composition.stim1;
        }

        this.stimuli.push(new Howl({
            src: [this.stim1Src],
            preload: true
          }));

        this.stimuli.push(new Howl({
            src: [this.stim2Src],
            preload: true
          }));
    }

    getStimulus(stimulusType: StimulusType) : Howl {
        switch (stimulusType) {
            case StimulusType.Prime: { 
                return this.prime;
             } 

             case StimulusType.Left: { 
                return this.stimuli[0];
             } 

             case StimulusType.Right: { 
                return this.stimuli[1];
             } 
        }
    }
}

export enum StimulusType {
    Prime,
    Left,
    Right
}