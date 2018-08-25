import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/_services/authentication.service';
import { ExperimentService } from 'src/app/services/experiment.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finaly-survey',
  templateUrl: './final-survey.component.html',
  styleUrls: ['./final.css']
})
export class FinalSurveyComponent {

  answer: string;
  comments: string;
  familiarity: number;

  constructor( private http: HttpClient, private router: Router) {
   }

  send() {
    this.http.post<any>('/v1/exp', {
        exp: 'music',
        world: 'survey',
        stage: 0,
        data: {
          answer: this.answer,
          comments: this.comments,
          familiarity: this.familiarity
        }
    }).subscribe(
        data => {
            console.log('Report trial successful');
            this.router.navigate(['thankyou']);
          },
        error => {
            console.error(error);
            this.router.navigate(['thankyou']);
        });
  }
}
