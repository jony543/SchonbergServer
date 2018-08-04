import { Component, OnInit } from '@angular/core';
import { StimulusType, ExperimentService } from 'src/app/services/experiment.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'similarity-rank',
  templateUrl: './similarity-rank.component.html',
  styleUrls: ['./similarity-rank.component.css']
})
export class SimilarityRankComponent implements OnInit, OnDestroy {
  isPlaying: boolean = false;

  listenedToPrime: boolean = false;
  listenedTo1: boolean = false;
  listenedTo2: boolean = false;

  stimulusTypes: any;

  selectionMade: boolean = false;

  similarityRank: number;
  similarityOptions: Array<number> = [1, 2, 3, 4, 5, 6, 7];

  trialId: number;

  private paramsSubscription: Subscription;

  constructor(private experimentService: ExperimentService, private route: ActivatedRoute, private router: Router) {
    this.stimulusTypes = StimulusType;

    this.paramsSubscription = this.route.params.subscribe(params => {
        this.trialId = +params['id']; // (+) converts string 'id' to a number
        this.initialiseState(); // reset and set based on new parameter this time
    });
   }

   ngOnDestroy() {
    this.paramsSubscription && this.paramsSubscription.unsubscribe();
  }


   initialiseState() {
     this.isPlaying = false;
     
     const isDebug: boolean = true;

     this.listenedToPrime = false || isDebug;
     this.listenedTo1 = false || isDebug;
     this.listenedTo2 = false || isDebug;

     this.selectionMade = false;
     this.similarityRank = null;
   }

   next() {
     if (this.experimentService.isLastTrial(this.trialId)) {
       this.router.navigate(['thankyou']);
     } else {
      this.router.navigate(['similarity-rank', this.trialId + 1 ]);
    }
   }

  ngOnInit() {
  }

}
