import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/_services/authentication.service';
import { ExperimentService } from 'src/app/services/experiment.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  constructor( private authService: AuthenticationService, private experimentService: ExperimentService) {
   }

  ngOnInit() {
    this.experimentService.reportExpFinalResult()
      .subscribe(
          data => {
              console.log('Report successful');
              this.authService.logout();
          },
          error => {
              console.error(error);
              this.authService.logout();
          });
  }
}
