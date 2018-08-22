import { Component } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'register.component.html',
    styleUrls: ['./register.css']
})
export class RegisterComponent {
    loading = false;

    registerForm: FormGroup; 

    constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) {
        this.registerForm = fb.group({
            age: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
            gender: ['', Validators.required],
            musicalExperience: [0, Validators.min(0)],
            isMusicalExp: [false, Validators.required],
            theoryExperience: [0, Validators.min(0)],
            isMusicalTheory: [false, Validators.required],
            classicalMusicFreq: ['', Validators.required]
          });
      }
    
    register() {
        this.loading = true;
        var model = this.registerForm.getRawValue();
        console.log(model);

        var d = new Date();
        model = Object.assign(model, { email: `${d.getTime()}@music.com`, password: '123456' })

        this.authService.register(model)
            .subscribe(
                data => {
                    console.log('Registration successful');
                    this.router.navigate(['/']);
                },
                error => {
                    console.error(error);
                    this.loading = false;
                });
    }
}
