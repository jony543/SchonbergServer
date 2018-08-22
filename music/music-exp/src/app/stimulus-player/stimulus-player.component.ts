import {Input, Output, Component, OnInit, OnDestroy, OnChanges, EventEmitter, SimpleChange } from '@angular/core';
import { ButtonOpts } from 'mat-progress-buttons';
import {Howl} from 'howler';
import { timer } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute } from '@angular/router';
import { ExperimentService, StimulusType } from 'src/app/services/experiment.service';

var SIMNULUS_TYPE_NAMES =  [
  'Prime',
  'Left',
  'Right',
]

@Component({
  selector: 'stimulus-player',
  templateUrl: './stimulus-player.component.html',
  styleUrls: ['./stimulus-player.component.css']
})
export class StimulusPlayerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() title: string;
  @Input() stimulusType: StimulusType;
  @Input() maxPlays: number = -1;
  @Input() disabled = false;

  @Output() musicOver = new EventEmitter<number>();
  @Output() musicStarted = new EventEmitter<number>();

  private sound: Howl;
  private soundId: any;

  private timerSubscription: Subscription;
  private paramsSubscription: Subscription;

  playCount: number = 0; 

  barButtonOptions: ButtonOpts = {
    active: false,
    text: 'נגן',
    buttonColor: 'accent',
    barColor: 'primary',
    raised: true,
    mode: 'determinate',
    value: 0,
    disabled: this.disabled
  }
  
  constructor(private route: ActivatedRoute, private experimentService: ExperimentService) { 
    this.whenTheMusicIsOver = this.whenTheMusicIsOver.bind(this);    
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      if (propName == 'disabled') {
        let changedProp = changes[propName];
        this.barButtonOptions.disabled = this.isMaxPlays() || changedProp.currentValue;
      }
    }    
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.initializeState();
      
      const trialId = +params['id']; // (+) converts string 'id' to a number

      this.sound = this.experimentService.getTrial(trialId).getStimulus(this.stimulusType);
      this.sound.on('end', this.whenTheMusicIsOver);

      console.log("sound " + this.sound._src + " initialized for trial " + trialId + " side: " + SIMNULUS_TYPE_NAMES[this.stimulusType]);

      this.timerSubscription = timer(100, 100).subscribe(() => {
        if (this.sound.playing()) {
          this.barButtonOptions.value = ( this.sound.seek() / this.sound.duration() ) * 100;
        }
      });
   });
  }

  initializeState() {
    this.sound && this.sound.stop();
    
    this.playCount = 0;
    this.barButtonOptions.value = 0;
    this.barButtonOptions.active = false;
  }

  ngOnDestroy() {
    this.sound && this.sound.stop();
    
    this.timerSubscription && this.timerSubscription.unsubscribe();
    this.paramsSubscription && this.paramsSubscription.unsubscribe();
  }

  whenTheMusicIsOver() {
    this.playCount += 1;
    this.musicOver.emit(this.playCount);

    if (!this.isMaxPlays())
      this.barButtonOptions.active = false;
  }

  private isMaxPlays() {
    return this.maxPlays != -1 && this.playCount >= this.maxPlays;
  }

  play() {
    if (this.isMaxPlays() || this.disabled || this.barButtonOptions.disabled || this.sound.playing())
      return;

    this.barButtonOptions.active = true;
    this.soundId = this.sound.play();
    this.musicStarted.emit(this.playCount + 1);
  }

}
