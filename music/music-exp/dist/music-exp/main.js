(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    ניסוי בהאזנה ליצירות מוזיקליות\n  </h1>\n  <hr>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'music-exp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _similarity_rank_similarity_rank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./similarity-rank/similarity-rank.component */ "./src/app/similarity-rank/similarity-rank.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _stimulus_player_stimulus_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stimulus-player/stimulus-player.component */ "./src/app/stimulus-player/stimulus-player.component.ts");
/* harmony import */ var mat_progress_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mat-progress-buttons */ "./node_modules/mat-progress-buttons/index.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _services_experiment_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/experiment.service */ "./src/app/services/experiment.service.ts");
/* harmony import */ var _services_blockRefresh_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/blockRefresh.service */ "./src/app/services/blockRefresh.service.ts");
/* harmony import */ var _thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./thankyou/thankyou.component */ "./src/app/thankyou/thankyou.component.ts");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/_guards/auth.guard */ "./src/app/auth/_guards/auth.guard.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/_services/authentication.service */ "./src/app/auth/_services/authentication.service.ts");
/* harmony import */ var src_app_auth_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/auth/_helpers/jwt.interceptor */ "./src/app/auth/_helpers/jwt.interceptor.ts");
/* harmony import */ var src_app_auth_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _final_survey_final_survey_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./final-survey/final-survey.component */ "./src/app/final-survey/final-survey.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var appRoutes = [
    {
        path: 'similarity-rank/:id',
        component: _similarity_rank_similarity_rank_component__WEBPACK_IMPORTED_MODULE_3__["SimilarityRankComponent"],
        canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _services_blockRefresh_service__WEBPACK_IMPORTED_MODULE_13__["BlockRefresh"]]
    },
    {
        path: 'similarity-rank',
        redirectTo: 'similarity-rank/0',
        canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]]
    },
    {
        path: 'final-survey',
        component: _final_survey_final_survey_component__WEBPACK_IMPORTED_MODULE_26__["FinalSurveyComponent"],
        canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]]
    },
    {
        path: 'thankyou',
        component: _thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_14__["ThankyouComponent"],
    },
    {
        path: 'register',
        component: src_app_auth_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
    },
    {
        path: 'login',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
    },
    {
        path: '',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"],
        pathMatch: 'full',
        canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]]
    },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"],
                _similarity_rank_similarity_rank_component__WEBPACK_IMPORTED_MODULE_3__["SimilarityRankComponent"],
                _stimulus_player_stimulus_player_component__WEBPACK_IMPORTED_MODULE_5__["StimulusPlayerComponent"],
                _thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_14__["ThankyouComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                src_app_auth_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
                _final_survey_final_survey_component__WEBPACK_IMPORTED_MODULE_26__["FinalSurveyComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                ),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                // MatProgressBarModule,
                // MatProgressSpinnerModule,
                mat_progress_buttons__WEBPACK_IMPORTED_MODULE_6__["MatProgressButtons"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatOptionModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__["BidiModule"]
            ],
            providers: [
                _services_experiment_service__WEBPACK_IMPORTED_MODULE_12__["ExperimentService"],
                _services_blockRefresh_service__WEBPACK_IMPORTED_MODULE_13__["BlockRefresh"],
                _auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_18__["AuthenticationService"],
                _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
                    useClass: src_app_auth_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_19__["JwtInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/_guards/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/auth/_guards/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['register'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/_helpers/jwt.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/_helpers/jwt.interceptor.ts ***!
  \**************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token.accessToken
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/_services/authentication.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/_services/authentication.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.register = function (user) {
        return this.http.post('/v1/auth/register', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post('/v1/auth/login', { email: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.sendResult = function (result) {
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        console.log('logout');
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Login</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/auth/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            console.error(error);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\" #regForm=\"ngForm\">\r\n    <div class=\"form-container\">\r\n        <h3>:) ...שאלון פרטים אישים קצר לפני שנתחיל</h3>\r\n        <mat-form-field dir=\"rtl\">\r\n            <input matInput type=\"number\" placeholder=\"גיל\" formControlName=\"age\">\r\n        </mat-form-field>\r\n        <br/>\r\n        <!-- <mat-form-field dir=\"rtl\">\r\n            <textarea matInput placeholder=\"Textarea\"></textarea>\r\n        </mat-form-field> -->\r\n        <mat-form-field dir=\"rtl\">\r\n            <mat-select placeholder=\"מין\" formControlName=\"gender\">\r\n                <mat-option value=\"Male\">זכר</mat-option>\r\n                <mat-option value=\"Female\">נקבה</mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n        <br />\r\n        <p>.האם למדת נגינה/שירה או עיסוק מוזיקאלי אחר באופן מסודר? אם כן, במשך כמה שנים</p>\r\n        <mat-radio-group dir=\"rtl\" formControlName=\"isMusicalExp\"> \r\n            <mat-radio-button style=\"padding-left: 20px;\" [value]=\"true\">כן</mat-radio-button>\r\n            <mat-radio-button [value]=\"false\">לא</mat-radio-button>\r\n        </mat-radio-group>\r\n        <mat-form-field dir=\"rtl\">\r\n            <input matInput type=\"number\" placeholder=\"שנות לימוד מוזיקאלי\" formControlName=\"musicalExperience\">\r\n        </mat-form-field>\r\n        <br />\r\n        <p>.האם למדת תיאוריה מוזיקאלית או ניתוח מוזיקאלי? אם כן, ציין במשך כמה שנים</p>\r\n        <mat-radio-group dir=\"rtl\" formControlName=\"isMusicalTheory\"> \r\n            <mat-radio-button style=\"padding-left: 20px;\" [value]=\"true\">כן</mat-radio-button>\r\n            <mat-radio-button [value]=\"false\">לא</mat-radio-button>\r\n        </mat-radio-group>\r\n        <mat-form-field dir=\"rtl\">\r\n            <input matInput type=\"number\" placeholder=\"שנות לימוד תיאוריה\" formControlName=\"theoryExperience\">\r\n        </mat-form-field>\r\n        <br/>\r\n        <p>.(באיזו תכיפות אתה מאזין למוזיקה ״קלאסית״? (0 - בכלל  לא; 7 - כמעט בכל יום</p>\r\n        <mat-radio-group layout=\"row\" formControlName=\"classicalMusicFreq\" dir=\"rtl\">\r\n            <mat-radio-button \r\n                *ngFor=\"let freq of [0, 1, 2, 3, 4, 5, 6, 7]\"\r\n                [value]=\"freq\" \r\n                style=\"padding-left: 12px;\">\r\n                {{freq}}\r\n            </mat-radio-button>\r\n        </mat-radio-group>\r\n      <br/>\r\n        <button \r\n            mat-raised-button color=\"primary\" \r\n            style=\"width: 65px; align-self: center;\" \r\n            type=\"submit\" \r\n            [disabled]=\"isLoading || !regForm.form.valid\">התחל בניסוי</button>\r\n    </div>\r\n  </form>"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/auth/_services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.loading = false;
        this.registerForm = fb.group({
            age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(99)]],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            musicalExperience: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)],
            isMusicalExp: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            theoryExperience: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)],
            isMusicalTheory: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            classicalMusicFreq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        var model = this.registerForm.getRawValue();
        console.log(model);
        var d = new Date();
        model = Object.assign(model, { email: d.getTime() + "@music.com", password: '123456' });
        this.authService.register(model)
            .subscribe(function (data) {
            console.log('Registration successful');
            _this.router.navigate(['/']);
        }, function (error) {
            console.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.css */ "./src/app/auth/register/register.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.css":
/*!********************************************!*\
  !*** ./src/app/auth/register/register.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\r\n    display: flex;\r\n    margin-right: 20%;\r\n    margin-left: 20%;\r\n    flex-direction: column;\r\n}\r\n\r\n.form-container > * {\r\n    text-align: right;\r\n}\r\n"

/***/ }),

/***/ "./src/app/final-survey/final-survey.component.html":
/*!**********************************************************!*\
  !*** ./src/app/final-survey/final-survey.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\r\n    <h3>שאלה</h3>\r\n    <mat-form-field dir=\"rtl\">\r\n        <mat-select placeholder=\"אנא בחרו\" [(ngModel)]=\"answer\">\r\n            <mat-option value=\"Melody\">מלודיה</mat-option>\r\n            <mat-option value=\"Rhythm\">מקצב</mat-option>\r\n            <mat-option value=\"Harmony\">הרמוניה</mat-option>\r\n            <mat-option value=\"Volume\">עוצמה</mat-option>\r\n            <mat-option value=\"Color\">צבע</mat-option>\r\n            <mat-option value=\"Character\">אופי כולל</mat-option>\r\n            <mat-option value=\"Other\">(היבט אחר (אנא פרטו</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <mat-form-field dir=\"rtl\">\r\n        <textarea  [(ngModel)]=\"comments\" matInput placeholder=\"הערות נוספות\"></textarea>\r\n    </mat-form-field>\r\n    <br/>\r\n    <button  mat-raised-button color=\"primary\" (click)=send()>\r\n        המשיכו לשלב הבא    \r\n    </button>\r\n</div>"

/***/ }),

/***/ "./src/app/final-survey/final-survey.component.ts":
/*!********************************************************!*\
  !*** ./src/app/final-survey/final-survey.component.ts ***!
  \********************************************************/
/*! exports provided: FinalSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalSurveyComponent", function() { return FinalSurveyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FinalSurveyComponent = /** @class */ (function () {
    function FinalSurveyComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    FinalSurveyComponent.prototype.send = function () {
        var _this = this;
        this.http.post('/v1/exp', {
            exp: 'music',
            world: 'survey',
            stage: 0,
            data: {
                answer: this.answer,
                comments: this.comments
            }
        }).subscribe(function (data) {
            console.log('Report trial successful');
            _this.router.navigate(['thankyou']);
        }, function (error) {
            console.error(error);
            _this.router.navigate(['thankyou']);
        });
    };
    FinalSurveyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-finaly-survey',
            template: __webpack_require__(/*! ./final-survey.component.html */ "./src/app/final-survey/final-survey.component.html"),
            styles: [__webpack_require__(/*! ./final.css */ "./src/app/final-survey/final.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FinalSurveyComponent);
    return FinalSurveyComponent;
}());



/***/ }),

/***/ "./src/app/final-survey/final.css":
/*!****************************************!*\
  !*** ./src/app/final-survey/final.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\r\n    display: flex;\r\n    margin-right: 20%;\r\n    margin-left: 20%;\r\n    flex-direction: column;\r\n}\r\n\r\n.form-container > * {\r\n    text-align: right;\r\n}\r\n"

/***/ }),

/***/ "./src/app/services/blockRefresh.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/blockRefresh.service.ts ***!
  \**************************************************/
/*! exports provided: BlockRefresh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockRefresh", function() { return BlockRefresh; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
var BlockRefresh = /** @class */ (function () {
    // I initialize the secondary-view route guard.
    function BlockRefresh(router) {
        this.router = router;
        window.onbeforeunload = function (ev) {
            // finally return the message to browser api.
            var dialogText = 'Changes that you made may not be saved.';
            ev.returnValue = dialogText;
            return dialogText;
        };
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // I determine if the requested route can be activated (ie, navigated to).
    BlockRefresh.prototype.canActivate = function (activatedRouteSnapshot, routerStateSnapshot) {
        // We don't want to render this secondary view on page-refresh. As such, if this
        // is a page-refresh, we'll navigate to the same URL less the secondary outlet.
        if (this.isPageRefresh()) {
            console.warn("refresh not allowed");
            location.href = '/music';
            return (false);
        }
        return (true);
    };
    // I determine if the current route-request is part of a page refresh.
    BlockRefresh.prototype.isPageRefresh = function () {
        // If the router has yet to establish a single navigation, it means that this
        // navigation is the first attempt to reconcile the application state with the
        // URL state. Meaning, this is a page refresh.
        return (!this.router.navigated);
    };
    BlockRefresh = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BlockRefresh);
    return BlockRefresh;
}());



/***/ }),

/***/ "./src/app/services/experiment.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/experiment.service.ts ***!
  \************************************************/
/*! exports provided: ExperimentService, Trial, StimulusType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentService", function() { return ExperimentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trial", function() { return Trial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StimulusType", function() { return StimulusType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NUM_OF_DUMMY_TRIALS = 0;
var THEME_AND_VARIATIONS = [
    {
        id: 1,
        prime1: "stimuli/variations32Cminor/theme.mp3",
        prime2: "stimuli/variations32Cminor/var6.mp3",
        stim1: "stimuli/variations32Cminor/var3.mp3",
        stim2: "stimuli/variations32Cminor/var4.mp3"
    },
    {
        id: 2,
        prime1: "stimuli/variationsD/theme.mp3",
        prime2: "stimuli/variationsD/var2.mp3",
        stim1: "stimuli/variationsD/var3.mp3",
        stim2: "stimuli/variationsD/var4.mp3"
    },
    {
        id: 3,
        prime1: "stimuli/variationsF/theme.mp3",
        prime2: "stimuli/variationsF/var2.mp3",
        stim1: "stimuli/variationsF/var3.mp3",
        stim2: "stimuli/variationsF/var4.mp3"
    },
    {
        id: 4,
        prime1: "stimuli/variations6WOO70/theme.mp3",
        prime2: "stimuli/variations6WOO70/var2.mp3",
        stim1: "stimuli/variations6WOO70/var3.mp3",
        stim2: "stimuli/variations6WOO70/var5.mp3"
    },
    {
        id: 5,
        prime1: "stimuli/variationsA/thema.mp3",
        prime2: "stimuli/variationsA/var2.mp3",
        stim1: "stimuli/variationsA/var3.mp3",
        stim2: "stimuli/variationsA/var5.mp3"
    }
];
var POLONEZ = [
    {
        id: 6,
        prime1: "",
        prime2: "stimuli/polonez1/A12.mp3",
        stim1: "stimuli/polonez1/Areprise.mp3",
        stim2: "stimuli/polonez1/Avariation.mp3"
    },
    {
        id: 7,
        prime1: "stimuli/polonez2/A.mp3",
        prime2: "",
        stim1: "stimuli/polonez2/Alight.mp3",
        stim2: "stimuli/polonez2/Avariation.mp3"
    },
];
var ExperimentService = /** @class */ (function () {
    function ExperimentService(http) {
        var _this = this;
        this.http = http;
        this.trials = new Array();
        // add theme and variations trials
        var trialTypeArray = lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"](THEME_AND_VARIATIONS.map(function (x, i) { return i % 2 == 0; }));
        THEME_AND_VARIATIONS.forEach(function (x, i) {
            _this.trials.push(new Trial(x, trialTypeArray[i]));
        });
        // add polonez trials
        this.trials.push(new Trial(POLONEZ[0], false));
        this.trials.push(new Trial(POLONEZ[1], true));
        this.trials = lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"](this.trials);
        // asdd dummy trials in the beginning and shuffle again 
        for (var i = 0; i < NUM_OF_DUMMY_TRIALS; i++) {
        }
        if (NUM_OF_DUMMY_TRIALS > 0)
            this.trials = lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"](this.trials);
    }
    ExperimentService.prototype.getTrial = function (id) {
        return this.trials[id];
    };
    ExperimentService.prototype.isLastTrial = function (id) {
        return id >= this.trials.length - 1;
    };
    ExperimentService.prototype.setSimilarityRank = function (id, rank) {
        this.trials[id].similarityRank = rank;
        return this.http.post('/v1/exp', {
            exp: 'music',
            world: 'similarity',
            stage: id,
            data: this.trials[id].getResult()
        });
    };
    ExperimentService.prototype.reportExpFinalResult = function () {
        return this.http.post('/v1/exp', {
            exp: 'music',
            world: 'similarity',
            stage: 99,
            data: this.trials.map(function (t) { return t.getResult(); })
        });
    };
    ExperimentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ExperimentService);
    return ExperimentService;
}());

var Trial = /** @class */ (function () {
    function Trial(composition, takePrime1) {
        this.stimuli = new Array();
        this.stim1Src = "";
        this.stim2Src = "";
        this.prime = new howler__WEBPACK_IMPORTED_MODULE_1__["Howl"]({
            src: [(takePrime1) ? composition.prime1 : composition.prime2],
            preload: true
        });
        this.compositionId = composition.id;
        // switch between input with chance probability
        if (Math.random() > 0.5) {
            this.stim1Src = composition.stim1;
            this.stim2Src = composition.stim2;
        }
        else {
            this.stim1Src = composition.stim2;
            this.stim2Src = composition.stim1;
        }
        this.stimuli.push(new howler__WEBPACK_IMPORTED_MODULE_1__["Howl"]({
            src: [this.stim1Src],
            preload: true
        }));
        this.stimuli.push(new howler__WEBPACK_IMPORTED_MODULE_1__["Howl"]({
            src: [this.stim2Src],
            preload: true
        }));
    }
    Trial.prototype.getResult = function () {
        return {
            compositionId: this.compositionId,
            stim1: this.stim1Src.substring("stimuli/".length),
            stim2: this.stim2Src.substring("stimuli/".length),
            isPrime1Taken: this.isPrime1Take,
            similarityRank: this.similarityRank
        };
    };
    Trial.prototype.getStimulus = function (stimulusType) {
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
    };
    return Trial;
}());

var StimulusType;
(function (StimulusType) {
    StimulusType[StimulusType["Prime"] = 0] = "Prime";
    StimulusType[StimulusType["Left"] = 1] = "Left";
    StimulusType[StimulusType["Right"] = 2] = "Right";
})(StimulusType || (StimulusType = {}));


/***/ }),

/***/ "./src/app/similarity-rank/similarity-rank.component.css":
/*!***************************************************************!*\
  !*** ./src/app/similarity-rank/similarity-rank.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".two-stimuli-container {\r\n    display: flex; \r\n    flex-direction: row;\r\n    justify-content: center;\r\n  }\r\n\r\n  .similarity-radio-group {\r\n    display: inline-flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n  }\r\n\r\n  .similarity-radio-button {\r\n    margin: 15px;\r\n  }\r\n\r\n  .trial-number-container {\r\n      padding-left: 20px;\r\n      display: flex;\r\n      justify-content: left;\r\n  }"

/***/ }),

/***/ "./src/app/similarity-rank/similarity-rank.component.html":
/*!****************************************************************!*\
  !*** ./src/app/similarity-rank/similarity-rank.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"trial-number-container\">\n  {{ trialId + 1}} / 7\n</div>\n<div>\n  <h3>:ראשית, קטע להאזנה בלבד</h3>\n  <stimulus-player title=\"\" [stimulusType]=\"stimulusTypes.Prime\" \n          [disabled]=\"isPlaying || listenedToPrime\" \n          [maxPlays]=\"1\"\n          (musicStarted)=\"isPlaying=true\"\n          (musicOver)=\"isPlaying=false; listenedToPrime=true;\"></stimulus-player>\n  <ng-container *ngIf=\"listenedToPrime\">\n    <br/><br/><br/>\n    <h3>:כעת, האזינו לשני הקטעים שאת מידת הדמיון ביניהם תתבקשו לדרג</h3>\n    <div class=\"two-stimuli-container\">\n        <stimulus-player style=\"margin: 0px 20px;\" title=\"'קטע ב\" [stimulusType]=\"stimulusTypes.Left\"  \n          [disabled]=\"isPlaying || listenedTo1\" \n          [maxPlays]=\"1\"\n          (musicStarted)=\"isPlaying=true;\"\n          (musicOver)=\"isPlaying=false; listenedTo1=true;\"></stimulus-player>\n        <stimulus-player style=\"margin: 0px 20px;\" title=\"'קטע א\" [stimulusType]=\"stimulusTypes.Right\" \n        [disabled]=\"isPlaying || listenedTo2\" \n        [maxPlays]=\"1\"\n        (musicStarted)=\"isPlaying=true\"\n        (musicOver)=\"isPlaying=false; listenedTo2=true;\"></stimulus-player>  \n    </div>\n  <!-- </ng-container>\n  <ng-container *ngIf=\"listenedTo1 && listenedTo2\"> -->\n    <br/><br/><br/><br/>\n    <h3>:'דרגו את מידת הדמיון בין קטע א' לקטע ב</h3>\n    <mat-radio-group\n      [disabled]=\"!listenedTo1 || !listenedTo2\" \n      class=\"similarity-radio-group\" layout=\"row\" \n      [(ngModel)]=\"similarityRank\">\n        מאוד לא דומה\n        <mat-radio-button \n        *ngFor=\"let rank of similarityOptions\"\n          class=\"similarity-radio-button\"\n          [value]=\"rank\"\n          [disabled]=\"!listenedTo1 || !listenedTo2\"\n          (click)=\"similarityRank = (listenedTo1 && listenedTo2)? rank: ''; selectionMade = listenedTo1 && listenedTo2;\">\n          {{rank}}\n        </mat-radio-button>\n        מאוד דומה\n      </mat-radio-group>\n      <br/><br/><br/>\n      <div>\n        <button mat-button [disabled]=\"!selectionMade || nextClicked\" (click)=next()>\n          המשיכו לצעד הבא\n        </button>\n      </div>\n    </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/similarity-rank/similarity-rank.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/similarity-rank/similarity-rank.component.ts ***!
  \**************************************************************/
/*! exports provided: SimilarityRankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarityRankComponent", function() { return SimilarityRankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_experiment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/experiment.service */ "./src/app/services/experiment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SimilarityRankComponent = /** @class */ (function () {
    function SimilarityRankComponent(experimentService, route, router) {
        var _this = this;
        this.experimentService = experimentService;
        this.route = route;
        this.router = router;
        this.isPlaying = false;
        this.listenedToPrime = false;
        this.listenedTo1 = false;
        this.listenedTo2 = false;
        this.selectionMade = false;
        this.nextClicked = false;
        this.similarityOptions = [1, 2, 3, 4, 5, 6, 7];
        this.stimulusTypes = src_app_services_experiment_service__WEBPACK_IMPORTED_MODULE_1__["StimulusType"];
        this.paramsSubscription = this.route.params.subscribe(function (params) {
            _this.trialId = +params['id']; // (+) converts string 'id' to a number
            _this.initialiseState(); // reset and set based on new parameter this time
        });
    }
    SimilarityRankComponent.prototype.ngOnDestroy = function () {
        this.paramsSubscription && this.paramsSubscription.unsubscribe();
    };
    SimilarityRankComponent.prototype.initialiseState = function () {
        this.isPlaying = false;
        var isDebug = false;
        this.listenedToPrime = false || isDebug;
        this.listenedTo1 = false || isDebug;
        this.listenedTo2 = false || isDebug;
        this.nextClicked = false;
        this.selectionMade = false;
        this.similarityRank = null;
    };
    SimilarityRankComponent.prototype.next = function () {
        var _this = this;
        this.nextClicked = true;
        this.experimentService.setSimilarityRank(this.trialId, this.similarityRank)
            .subscribe(function (data) {
            console.log('Report trial successful');
            _this.nextInternal();
        }, function (error) {
            console.error(error);
            _this.nextInternal();
        });
    };
    SimilarityRankComponent.prototype.nextInternal = function () {
        if (this.experimentService.isLastTrial(this.trialId)) {
            this.router.navigate(['thankyou']);
        }
        else {
            this.router.navigate(['similarity-rank', this.trialId + 1]);
        }
    };
    SimilarityRankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'similarity-rank',
            template: __webpack_require__(/*! ./similarity-rank.component.html */ "./src/app/similarity-rank/similarity-rank.component.html"),
            styles: [__webpack_require__(/*! ./similarity-rank.component.css */ "./src/app/similarity-rank/similarity-rank.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_experiment_service__WEBPACK_IMPORTED_MODULE_1__["ExperimentService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SimilarityRankComponent);
    return SimilarityRankComponent;
}());



/***/ }),

/***/ "./src/app/stimulus-player/stimulus-player.component.css":
/*!***************************************************************!*\
  !*** ./src/app/stimulus-player/stimulus-player.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stimulus-player/stimulus-player.component.html":
/*!****************************************************************!*\
  !*** ./src/app/stimulus-player/stimulus-player.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h4>{{ title }}</h4>\n  <progress-bar-button [options]=\"barButtonOptions\" (click)=\"play()\"></progress-bar-button>\n</div>"

/***/ }),

/***/ "./src/app/stimulus-player/stimulus-player.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/stimulus-player/stimulus-player.component.ts ***!
  \**************************************************************/
/*! exports provided: StimulusPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StimulusPlayerComponent", function() { return StimulusPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_experiment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/experiment.service */ "./src/app/services/experiment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StimulusPlayerComponent = /** @class */ (function () {
    function StimulusPlayerComponent(route, experimentService) {
        this.route = route;
        this.experimentService = experimentService;
        this.maxPlays = -1;
        this.disabled = false;
        this.musicOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.musicStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.playCount = 0;
        this.barButtonOptions = {
            active: false,
            text: 'נגן',
            buttonColor: 'accent',
            barColor: 'primary',
            raised: true,
            mode: 'determinate',
            value: 0,
            disabled: this.disabled
        };
        this.whenTheMusicIsOver = this.whenTheMusicIsOver.bind(this);
    }
    StimulusPlayerComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            if (propName == 'disabled') {
                var changedProp = changes[propName];
                this.barButtonOptions.disabled = this.isMaxPlays() || changedProp.currentValue;
            }
        }
    };
    StimulusPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSubscription = this.route.params.subscribe(function (params) {
            _this.initializeState();
            var trialId = +params['id']; // (+) converts string 'id' to a number
            _this.sound = _this.experimentService.getTrial(trialId).getStimulus(_this.stimulusType);
            _this.sound.on('end', _this.whenTheMusicIsOver);
            console.log("sound " + _this.sound._src + " initialized for trial " + trialId + " player id: " + _this.stimulusType.toString());
            _this.timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(100, 100).subscribe(function () {
                if (_this.sound.playing()) {
                    _this.barButtonOptions.value = (_this.sound.seek() / _this.sound.duration()) * 100;
                }
            });
        });
    };
    StimulusPlayerComponent.prototype.initializeState = function () {
        this.sound && this.sound.stop();
        this.playCount = 0;
        this.barButtonOptions.value = 0;
        this.barButtonOptions.active = false;
    };
    StimulusPlayerComponent.prototype.ngOnDestroy = function () {
        this.sound && this.sound.stop();
        this.timerSubscription && this.timerSubscription.unsubscribe();
        this.paramsSubscription && this.paramsSubscription.unsubscribe();
    };
    StimulusPlayerComponent.prototype.whenTheMusicIsOver = function () {
        this.playCount += 1;
        this.musicOver.emit(this.playCount);
        if (!this.isMaxPlays())
            this.barButtonOptions.active = false;
    };
    StimulusPlayerComponent.prototype.isMaxPlays = function () {
        return this.maxPlays != -1 && this.playCount >= this.maxPlays;
    };
    StimulusPlayerComponent.prototype.play = function () {
        if (this.isMaxPlays() || this.disabled || this.barButtonOptions.disabled || this.sound.playing())
            return;
        this.barButtonOptions.active = true;
        this.soundId = this.sound.play();
        this.musicStarted.emit(this.playCount + 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StimulusPlayerComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StimulusPlayerComponent.prototype, "stimulusType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StimulusPlayerComponent.prototype, "maxPlays", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StimulusPlayerComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StimulusPlayerComponent.prototype, "musicOver", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StimulusPlayerComponent.prototype, "musicStarted", void 0);
    StimulusPlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'stimulus-player',
            template: __webpack_require__(/*! ./stimulus-player.component.html */ "./src/app/stimulus-player/stimulus-player.component.html"),
            styles: [__webpack_require__(/*! ./stimulus-player.component.css */ "./src/app/stimulus-player/stimulus-player.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_experiment_service__WEBPACK_IMPORTED_MODULE_3__["ExperimentService"]])
    ], StimulusPlayerComponent);
    return StimulusPlayerComponent;
}());



/***/ }),

/***/ "./src/app/thankyou/thankyou.component.css":
/*!*************************************************!*\
  !*** ./src/app/thankyou/thankyou.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/thankyou/thankyou.component.html":
/*!**************************************************!*\
  !*** ./src/app/thankyou/thankyou.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>!תודה</h2>"

/***/ }),

/***/ "./src/app/thankyou/thankyou.component.ts":
/*!************************************************!*\
  !*** ./src/app/thankyou/thankyou.component.ts ***!
  \************************************************/
/*! exports provided: ThankyouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouComponent", function() { return ThankyouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/_services/authentication.service */ "./src/app/auth/_services/authentication.service.ts");
/* harmony import */ var src_app_services_experiment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/experiment.service */ "./src/app/services/experiment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThankyouComponent = /** @class */ (function () {
    function ThankyouComponent(authService, experimentService) {
        this.authService = authService;
        this.experimentService = experimentService;
    }
    ThankyouComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.experimentService.reportExpFinalResult()
            .subscribe(function (data) {
            console.log('Report successful');
            _this.authService.logout();
        }, function (error) {
            console.error(error);
            _this.authService.logout();
        });
    };
    ThankyouComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thankyou',
            template: __webpack_require__(/*! ./thankyou.component.html */ "./src/app/thankyou/thankyou.component.html"),
            styles: [__webpack_require__(/*! ./thankyou.component.css */ "./src/app/thankyou/thankyou.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], src_app_services_experiment_service__WEBPACK_IMPORTED_MODULE_2__["ExperimentService"]])
    ], ThankyouComponent);
    return ThankyouComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"font-size: larger;\">\r\n    .הניסוי שלפניכם עוסק במידת הדמיון בין קטעים מוזיקליים\r\n    <br/>\r\n    .כל הקטעים לקוחים מיצירות לפסנתר מהתקופה הקלאסית והרומנטית\r\n    <br/><br/>\r\n    .\r\n    בכל צעד, יושמע לכם קטע אחד\r\n    <b>להאזנה בלבד</b>\r\n    <br/>\r\n    .לאחר שתאזינו לקטע הראשון, יופיעו על המסך שני קטעים נוספים להאזנה\r\n    <br/>\r\n    .לאחר שתאזינו לשני הקטעים האלו, תתבקשו לדרג את מידת הדמיון ביניהם\r\n    <br/><br/>\r\n    .כשתסיימו לדרג את מידת הדמיון, תוכלו לעבור לצעד הבא\r\n    <br/>\r\n    .בסך הכל תתבקשו לדרג שבעה זוגות של קטעים\r\n    <br/>\r\n    .\r\n    <b>שימו לב</b>\r\n     - לא תוכלו להאזין לאותו קטע יותר מפעם אחת\r\n    <br/><br/>\r\n    <b>    !בהצלחה        </b>\r\n</p>\r\n<a routerLink=\"/similarity-rank\" routerLinkActive=\"active\"><h2>התחל</h2></a>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Development\sadna-server\music\music-exp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map