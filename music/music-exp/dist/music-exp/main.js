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
/* harmony import */ var src_app_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var src_app_services_experiment_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/experiment.service */ "./src/app/services/experiment.service.ts");
/* harmony import */ var src_app_services_blockRefresh_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/blockRefresh.service */ "./src/app/services/blockRefresh.service.ts");
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
        canActivate: [src_app_services_blockRefresh_service__WEBPACK_IMPORTED_MODULE_13__["BlockRefresh"]]
    },
    {
        path: 'similarity-rank',
        redirectTo: 'similarity-rank/0',
    },
    {
        path: '',
        component: src_app_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"],
        pathMatch: 'full'
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                src_app_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"],
                _similarity_rank_similarity_rank_component__WEBPACK_IMPORTED_MODULE_3__["SimilarityRankComponent"],
                _stimulus_player_stimulus_player_component__WEBPACK_IMPORTED_MODULE_5__["StimulusPlayerComponent"]
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [src_app_services_experiment_service__WEBPACK_IMPORTED_MODULE_12__["ExperimentService"], src_app_services_blockRefresh_service__WEBPACK_IMPORTED_MODULE_13__["BlockRefresh"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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




var NUM_OF_DUMMY_TRIALS = 0;
var THEME_AND_VARIATIONS = [
    {
        prime1: "stimuli/variations32Cminor/theme.mp3",
        prime2: "stimuli/variations32Cminor/var6.mp3",
        stim1: "stimuli/variations32Cminor/var3.mp3",
        stim2: "stimuli/variations32Cminor/var4.mp3"
    },
    {
        prime1: "stimuli/variationsD/theme.mp3",
        prime2: "stimuli/variationsD/var2.mp3",
        stim1: "stimuli/variationsD/var3.mp3",
        stim2: "stimuli/variationsD/var4.mp3"
    },
    {
        prime1: "stimuli/variationsF/theme.mp3",
        prime2: "stimuli/variationsF/var2.mp3",
        stim1: "stimuli/variationsF/var3.mp3",
        stim2: "stimuli/variationsF/var4.mp3"
    },
    {
        prime1: "stimuli/variations6WOO70/theme.mp3",
        prime2: "stimuli/variations6WOO70/var2.mp3",
        stim1: "stimuli/variations6WOO70/var3.mp3",
        stim2: "stimuli/variations6WOO70/var5.mp3"
    },
    {
        prime1: "stimuli/variationsA/thema.mp3",
        prime2: "stimuli/variationsA/var2.mp3",
        stim1: "stimuli/variationsA/var3.mp3",
        stim2: "stimuli/variationsA/var5.mp3"
    }
];
var POLONEZ = [
    {
        prime1: "",
        prime2: "stimuli/polonez1/A12.mp3",
        stim1: "stimuli/polonez1/Areprise.mp3",
        stim2: "stimuli/polonez1/Avariation.mp3"
    },
    {
        prime1: "stimuli/polonez2/A.mp3",
        prime2: "",
        stim1: "stimuli/polonez2/Alight.mp3",
        stim2: "stimuli/polonez2/Avariation.mp3"
    },
];
var ExperimentService = /** @class */ (function () {
    function ExperimentService(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
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
        return id >= this.trials.length;
    };
    ExperimentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ExperimentService);
    return ExperimentService;
}());

var Trial = /** @class */ (function () {
    function Trial(composition, takePrime1) {
        this.stimuli = new Array();
        this.prime = new howler__WEBPACK_IMPORTED_MODULE_1__["Howl"]({
            src: [(takePrime1) ? composition.prime1 : composition.prime2],
            preload: true
        });
        var stim1Src = "";
        var stim2Src = "";
        // switch between input with chance probability
        if (Math.random() > 0.5) {
            stim1Src = composition.stim1;
            stim2Src = composition.stim2;
        }
        else {
            stim1Src = composition.stim2;
            stim2Src = composition.stim1;
        }
        this.stimuli.push(new howler__WEBPACK_IMPORTED_MODULE_1__["Howl"]({
            src: [stim1Src],
            preload: true
        }));
        this.stimuli.push(new howler__WEBPACK_IMPORTED_MODULE_1__["Howl"]({
            src: [stim2Src],
            preload: true
        }));
    }
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

module.exports = "<div class=\"trial-number-container\">\n  {{ trialId + 1}} / 7\n</div>\n<div>\n  <h3>:ראשית, קטע להאזנה בלבד</h3>\n  <stimulus-player title=\"\" [stimulusType]=\"stimulusTypes.Prime\" \n          [disabled]=\"isPlaying || listenedToPrime\" \n          [maxPlays]=\"1\"\n          (musicStarted)=\"isPlaying=true\"\n          (musicOver)=\"isPlaying=false; listenedToPrime=true;\"></stimulus-player>\n  <ng-container *ngIf=\"listenedToPrime\">\n    <br/><br/><br/>\n    <h3>:כעת, האזינו לשני הקטעים שאת מידת הדמיון ביניהם תתבקשו לדרג</h3>\n    <div class=\"two-stimuli-container\">\n        <stimulus-player style=\"margin: 0px 20px;\" title=\"'קטע ב\" [stimulusType]=\"stimulusTypes.Left\"  \n          [disabled]=\"isPlaying\" \n          [maxPlays]=\"1\"\n          (musicStarted)=\"isPlaying=true;\"\n          (musicOver)=\"isPlaying=false; listenedTo1=true;\"></stimulus-player>\n        <stimulus-player style=\"margin: 0px 20px;\" title=\"'קטע א\" [stimulusType]=\"stimulusTypes.Right\" \n        [disabled]=\"isPlaying\" \n        [maxPlays]=\"1\"\n        (musicStarted)=\"isPlaying=true\"\n        (musicOver)=\"isPlaying=false; listenedTo2=true;\"></stimulus-player>  \n    </div>\n  <!-- </ng-container>\n  <ng-container *ngIf=\"listenedTo1 && listenedTo2\"> -->\n    <br/><br/><br/><br/>\n    <h3>:'דרגו את מידת הדמיון בין קטע א' לקטע ב</h3>\n    <mat-radio-group\n      [disabled]=\"!listenedTo1 || !listenedTo2\" \n      class=\"similarity-radio-group\" layout=\"row\" \n      [(ngModel)]=\"similarityRank\">\n        מאוד לא דומה\n        <mat-radio-button \n        *ngFor=\"let rank of similarityOptions\"\n          class=\"similarity-radio-button\"\n          [value]=\"rank\"\n          [disabled]=\"!listenedTo1 || !listenedTo2\"\n          (click)=\"similarityRank = (listenedTo1 && listenedTo2)? rank: ''; selectionMade = listenedTo1 && listenedTo2;\">\n          {{rank}}\n        </mat-radio-button>\n        מאוד דומה\n      </mat-radio-group>\n      <br/><br/><br/>\n      <div>\n        <button mat-button [disabled]=\"!selectionMade\" (click)=next()>\n          המשיכו לצעד הבא\n        </button>\n      </div>\n    </ng-container>\n</div>\n"

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
        this.selectionMade = false;
        this.similarityRank = null;
    };
    SimilarityRankComponent.prototype.next = function () {
        if (this.experimentService.isLastTrial(this.trialId)) {
            this.router.navigate(['/']);
        }
        else {
            this.router.navigate(['similarity-rank', this.trialId + 1]);
        }
    };
    SimilarityRankComponent.prototype.ngOnInit = function () {
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

module.exports = "<div>\n  <h4>{{ title }}</h4>\n  <progress-bar-button [options]=\"barButtonOptions\" (onClick)=\"play()\"></progress-bar-button>\n</div>"

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
                this.barButtonOptions.disabled = changedProp.currentValue;
            }
        }
    };
    StimulusPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSubscription = this.route.params.subscribe(function (params) {
            _this.initializeState();
            var trialId = +params['id']; // (+) converts string 'id' to a number
            console.log("getting sound for trial " + trialId + " player id: " + _this.stimulusType.toString());
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
        this.timerSubscription && this.timerSubscription.unsubscribe();
        this.paramsSubscription && this.paramsSubscription.unsubscribe();
    };
    StimulusPlayerComponent.prototype.whenTheMusicIsOver = function () {
        this.playCount += 1;
        this.musicOver.emit(this.playCount);
        if (this.maxPlays == -1 || this.playCount < this.maxPlays)
            this.barButtonOptions.active = false;
    };
    StimulusPlayerComponent.prototype.play = function () {
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