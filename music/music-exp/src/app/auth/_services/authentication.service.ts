import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    register(user: User) {
        return this.http.post<any>('/v1/auth/register', user)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            })
        );
    }

    login(username: string, password: string) {
        return this.http.post<any>('/v1/auth/login', { email: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            })
        );
    }

    sendResult(result: any) {

    }

    logout() {
        // remove user from local storage to log user out
        console.log('logout');
        localStorage.removeItem('currentUser');
    }
}