import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimilarityRankComponent } from './similarity-rank/similarity-rank.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StimulusPlayerComponent } from './stimulus-player/stimulus-player.component';
import { MatProgressButtons } from 'mat-progress-buttons';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from 'src/app/welcome/welcome.component';
import {MatButtonModule} from '@angular/material/button';
import { ExperimentService } from 'src/app/services/experiment.service';
import { BlockRefresh } from 'src/app/services/blockRefresh.service';
import { ThankyouComponent } from './thankyou/thankyou.component';

const appRoutes: Routes = [
  { 
    path: 'similarity-rank/:id',      
    component: SimilarityRankComponent,
    canActivate: [BlockRefresh]
  },
  { 
    path: 'similarity-rank',
    redirectTo: 'similarity-rank/0',
  },
  { 
    path: 'thankyou',
    component: ThankyouComponent,
  },
  { 
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full'
  },
];
    
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SimilarityRankComponent,
    StimulusPlayerComponent,
    ThankyouComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    MatProgressButtons,
    MatRadioModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [ExperimentService, BlockRefresh],
  bootstrap: [AppComponent]
})
export class AppModule { }
