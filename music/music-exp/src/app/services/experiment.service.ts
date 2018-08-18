import { Injectable } from "@angular/core";
import {Howl} from 'howler';
import * as _ from 'lodash';
import { Subscription } from "rxjs";

const NUM_OF_DUMMY_TRIALS:number = 0;

const THEME_AND_VARIATIONS: Array<Composition> = [
    {
        prime1: "stimuli/variations32Cminor/theme.mp3",
        prime2: "stimuli/variations32Cminor/var6.mp3",
        stim1: "stimuli/variations32Cminor/var3.mp3",
        stim2: "stimuli/variations32Cminor/var4.mp3"
    },
    {
        prime1: "stimuli/variationsD/theme.mp3",
        prime2: "stimuli/variationsD/var2.mp3",
        stim1: "stimuli/variationsD/var3.mp3",
        stim2: "stimuli/variationsD/var4.mp3"
    },
    {
        prime1: "stimuli/variationsF/theme.mp3",
        prime2: "stimuli/variationsF/var2.mp3",
        stim1: "stimuli/variationsF/var3.mp3",
        stim2: "stimuli/variationsF/var4.mp3"
    },
    {
        prime1: "stimuli/variations6WOO70/theme.mp3",
        prime2: "stimuli/variations6WOO70/var2.mp3",
        stim1: "stimuli/variations6WOO70/var3.mp3",
        stim2: "stimuli/variations6WOO70/var5.mp3"
    },
    {
        prime1: "stimuli/variationsA/thema.mp3",
        prime2: "stimuli/variationsA/var2.mp3",
        stim1: "stimuli/variationsA/var3.mp3",
        stim2: "stimuli/variationsA/var5.mp3"
    }
];

const POLONEZ: Array<Composition> = [
    {
        prime1: "",
        prime2: "stimuli/polonez1/A12.mp3",
        stim1: "stimuli/polonez1/Areprise.mp3",
        stim2: "stimuli/polonez1/Avariation.mp3"
    },
    {
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

    constructor() {
        // add theme and variations trials
        var trialTypeArray: Array<boolean> = _.shuffle(THEME_AND_VARIATIONS.map((x, i) => i % 2 == 0));
        THEME_AND_VARIATIONS.forEach((x, i) => {
            this.trials.push(new Trial(x, trialTypeArray[i]));
        });

        // add polonez trials
        this.trials.push(new Trial(POLONEZ[0], false));
        this.trials.push(new Trial(POLONEZ[1], true));

        this.trials = _.shuffle(this.trials)

        // asdd dummy trials in the beginning and shuffle again 
        for (var i = 0; i < NUM_OF_DUMMY_TRIALS; i++) {
        }
        if (NUM_OF_DUMMY_TRIALS > 0)
            this.trials = _.shuffle(this.trials)
    }

    getTrial(id: number): Trial {
        return this.trials[id];
    }

    isLastTrial(id: number): boolean {
        return id >= this.trials.length - 1;
    }
}

interface Composition {
    prime1: string;
    prime2: string;
    stim1: string;
    stim2: string;
}

export class Trial {
    private id: number;
    private prime: Howl;
    private stimuli: Array<Howl> = new Array<Howl>();

    constructor (composition: Composition, takePrime1: boolean) {
        this.prime = new Howl({
            src: [ (takePrime1) ? composition.prime1 : composition.prime2],
            preload: true
          });

        var stim1Src: string = "";
        var stim2Src: string = "";
        // switch between input with chance probability
        if (Math.random() > 0.5) {
            stim1Src = composition.stim1;
            stim2Src = composition.stim2;
        } else {
            stim1Src = composition.stim2;
            stim2Src = composition.stim1;
        }

        this.stimuli.push(new Howl({
            src: [stim1Src],
            preload: true
          }));

        this.stimuli.push(new Howl({
            src: [stim2Src],
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