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
import { WelcomeComponent } from './welcome/welcome.component';
import {MatButtonModule} from '@angular/material/button';
import { ExperimentService } from './services/experiment.service';
import { BlockRefresh } from './services/blockRefresh.service';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AuthGuard } from './auth/_guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './auth/_services/authentication.service';
import { AlertService } from './auth/_services/alert.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from 'src/app/auth/_helpers/jwt.interceptor';
import { RegisterComponent } from 'src/app/auth/register/register.component';

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
    path: 'thankyou',
    component: ThankyouComponent,
  },
  { 
    path: 'register', 
    component: RegisterComponent,
  },
  { 
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
];
    
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SimilarityRankComponent,
    StimulusPlayerComponent,
    ThankyouComponent,
    LoginComponent,
    RegisterComponent
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
    FormsModule
  ],
  providers: [
    ExperimentService,  
    BlockRefresh, 
    AuthenticationService,
    AlertService,
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
