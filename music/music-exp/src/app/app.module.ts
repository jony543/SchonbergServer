import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimilarityRankComponent } from './similarity-rank/similarity-rank.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StimulusPlayerComponent } from './stimulus-player/stimulus-player.component';
import { MatProgressButtons } from 'mat-progress-buttons';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import {MatButtonModule} from '@angular/material/button';
import { ExperimentService } from './services/experiment.service';
import { BlockRefresh } from './services/blockRefresh.service';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AuthGuard } from './auth/_guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './auth/_services/authentication.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from 'src/app/auth/_helpers/jwt.interceptor';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material';
import {BidiModule} from '@angular/cdk/bidi';
import { FinalSurveyComponent } from './final-survey/final-survey.component';

const appRoutes: Routes = [
  { 
    path: 'similarity-rank/:id',      
    component: SimilarityRankComponent,
    canActivate: [AuthGuard, BlockRefresh]
  },
  { 
    path: 'similarity-rank',
    redirectTo: 'similarity-rank/0',
    canActivate: [AuthGuard]
  },
  { 
    path: 'final-survey',      
    component: FinalSurveyComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'thankyou',
    component: ThankyouComponent,
  },
  { 
    path: 'register', 
    component: RegisterComponent,
  },
  { 
    path: 'login', 
    component: LoginComponent,
  },
  { 
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
    
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SimilarityRankComponent,
    StimulusPlayerComponent,
    ThankyouComponent,
    LoginComponent,
    RegisterComponent,
    FinalSurveyComponent
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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    BidiModule
  ],
  providers: [
    ExperimentService,  
    BlockRefresh, 
    AuthenticationService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
