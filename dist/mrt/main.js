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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n -->\n<app-main></app-main>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mrt';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_result_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/result/result.component */ "./src/app/component/result/result.component.ts");
/* harmony import */ var _component_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/main/main.component */ "./src/app/component/main/main.component.ts");
/* harmony import */ var _component_selection_selection_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/selection/selection.component */ "./src/app/component/selection/selection.component.ts");
/* harmony import */ var _service_mrt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/mrt.service */ "./src/app/service/mrt.service.ts");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_solution_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/solution.service */ "./src/app/service/solution.service.ts");








// service



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _component_result_result_component__WEBPACK_IMPORTED_MODULE_5__["ResultComponent"],
                _component_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _component_selection_selection_component__WEBPACK_IMPORTED_MODULE_7__["SelectionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_service_mrt_service__WEBPACK_IMPORTED_MODULE_8__["MRTService"], _service_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"], _service_solution_service__WEBPACK_IMPORTED_MODULE_10__["SolutionService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/main/main.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/main/main.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='wrapper'>\n  <div class='selection'>\n    <app-selection (queryNow)='query($event)'></app-selection>\n  </div>\n  <div class='selection'>\n    <app-result></app-result>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/main/main.component.scss":
/*!****************************************************!*\
  !*** ./src/app/component/main/main.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tYWluL21haW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/component/main/main.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/main/main.component.ts ***!
  \**************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_mrt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/mrt.service */ "./src/app/service/mrt.service.ts");



var MainComponent = /** @class */ (function () {
    function MainComponent(mrtSvc) {
        this.mrtSvc = mrtSvc;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.mrtSvc.check();
    };
    MainComponent.prototype.query = function (evt) {
        console.log(evt);
        this.mrtSvc.findRoutes(evt);
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/component/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/component/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_mrt_service__WEBPACK_IMPORTED_MODULE_2__["MRTService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/component/result/result.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/result/result.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  {{solutionArr}}\n</p>\n"

/***/ }),

/***/ "./src/app/component/result/result.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/result/result.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/result/result.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/result/result.component.ts ***!
  \******************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_solution_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/solution.service */ "./src/app/service/solution.service.ts");


// import { Subscriber } from 'rxjs';

var ResultComponent = /** @class */ (function () {
    function ResultComponent(solutionSvc) {
        this.solutionSvc = solutionSvc;
    }
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.solutionSvc.solutions$.subscribe(function (data) {
            _this.solutionArr = data;
        });
    };
    ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/component/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.scss */ "./src/app/component/result/result.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_solution_service__WEBPACK_IMPORTED_MODULE_2__["SolutionService"]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/component/selection/selection.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/selection/selection.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='wrapper'>\n  <div class='flexline'>\n    <div class='box'>\n      <p>\n        departure station\n      </p>\n      <select [(ngModel)]='fromMRT'>\n        <option *ngFor='let station of allStation' value='{{station.id}}'>{{station.name}}</option>\n      </select>\n    </div>\n    <div class='box'>\n      <p>\n        destiny station\n      </p>\n      <select [(ngModel)]='toMRT'>\n        <option *ngFor='let station of allStation' value='{{station.id}}'>{{station.name}}</option>\n      </select>\n    </div>\n    <div class='box'>\n      <p>\n        <label><input type='radio' name='pathtype' [(ngModel)]='pathType' value='minDist' /> Shortest Distance</label>\n      </p>\n      <p>\n        <label><input type='radio' name='pathtype' [(ngModel)]='pathType' value='minChange' />Minimum Change</label>\n      </p>\n    </div>\n    <div class='box'>\n      <p>\n        Top best\n      </p>\n      <select [(ngModel)]='numBest'>\n        <option *ngFor='let best of bestOptions' value='{{best}}'>{{best}}</option>\n      </select>\n    </div>\n    <div class='box'>\n      <button (click)='sendQuery()'>query</button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/component/selection/selection.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/component/selection/selection.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flexline {\n  display: flex;\n  flex-direction: row nowrap; }\n  .flexline .box {\n    flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3NlbGVjdGlvbi9EOlxcd29ya3NwYWNlXFxtcnQvc3JjXFxhcHBcXGNvbXBvbmVudFxcc2VsZWN0aW9uXFxzZWxlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsMkJBQTBCLEVBSzNCO0VBUEQ7SUFLSSxRQUFPLEVBQ1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvc2VsZWN0aW9uL3NlbGVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4bGluZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93IG5vd3JhcDtcclxuXHJcbiAgLmJveCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/component/selection/selection.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/selection/selection.component.ts ***!
  \************************************************************/
/*! exports provided: SelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionComponent", function() { return SelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_mrt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/mrt.service */ "./src/app/service/mrt.service.ts");



var SelectionComponent = /** @class */ (function () {
    function SelectionComponent(mrtSvc) {
        this.mrtSvc = mrtSvc;
        this.allStation = [];
        this.pathType = 'minDist';
        this.bestOptions = [3, 5, 10, 20];
        this.numBest = this.bestOptions[0];
        this.queryNow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SelectionComponent.prototype.ngOnInit = function () {
        var mrtObj = this.mrtSvc.getAllStation();
        this.allStation = Object.keys(mrtObj).map(function (a) {
            mrtObj[a].id = a;
            return mrtObj[a];
        });
        this.fromMRT = this.allStation[0].id;
        this.toMRT = this.allStation[0].id;
    };
    SelectionComponent.prototype.sendQuery = function () {
        this.queryNow.emit({
            from: this.fromMRT,
            to: this.toMRT,
            type: this.pathType,
            best: this.numBest
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('queryNow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectionComponent.prototype, "queryNow", void 0);
    SelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selection',
            template: __webpack_require__(/*! ./selection.component.html */ "./src/app/component/selection/selection.component.html"),
            styles: [__webpack_require__(/*! ./selection.component.scss */ "./src/app/component/selection/selection.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_mrt_service__WEBPACK_IMPORTED_MODULE_2__["MRTService"]])
    ], SelectionComponent);
    return SelectionComponent;
}());



/***/ }),

/***/ "./src/app/model/route.ts":
/*!********************************!*\
  !*** ./src/app/model/route.ts ***!
  \********************************/
/*! exports provided: Route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
var Route = /** @class */ (function () {
    function Route(path) {
        this.path = Array.from(path);
        this.numChange = 0;
    }
    Route.prototype.containsStation = function (staId) {
        return this.path.includes(staId);
    };
    Route.prototype.addStaToPath = function (staId) {
        this.path.push(staId);
    };
    return Route;
}());



/***/ }),

/***/ "./src/app/model/solution.ts":
/*!***********************************!*\
  !*** ./src/app/model/solution.ts ***!
  \***********************************/
/*! exports provided: Solution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Solution", function() { return Solution; });
/* harmony import */ var _station__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./station */ "./src/app/model/station.ts");

var Solution = /** @class */ (function () {
    function Solution(path) {
        this.path = path.slice(0);
    }
    Solution.createRouteText = function (staArr) {
        // add mid station to handle the case that jurong east and raffles place are in both NS and EW line.
        var generateReObj = function (start, mid, end, numStop, type) {
            var str = '';
            var resObj = {
                type: type,
                from: start,
                to: end,
                numStops: numStop,
                line: _station__WEBPACK_IMPORTED_MODULE_0__["Station"].getCommonLine(start, mid, end)
            };
            // if (type === 'Take') {
            //   str += `Take ${Station.getCommonLine(start, mid, end)} from ${start.name}, take ${numStop} stop(s) `;
            // } else if (type === 'Change') {
            //   str += `Change to line ${Station.getCommonLine(start, mid, end)}, take ${numStop} stop(s) `;
            // }
            // str += `to ${end.name}`;
            return resObj;
        };
        var resArr = [];
        var startIdx = 0;
        for (var idx = 1; idx < staArr.length - 1; idx++) {
            if (staArr[idx - 1] && staArr[idx + 1]
                && !_station__WEBPACK_IMPORTED_MODULE_0__["Station"].isSameLine(staArr[startIdx], staArr[idx + 1])) {
                // is interchange
                resArr.push(generateReObj(staArr[startIdx], staArr[Math.round(startIdx / 2 + idx / 2)], staArr[idx], idx - startIdx, startIdx === 0 ? 'Take' : 'Change'));
                startIdx = idx;
            }
        }
        if (startIdx !== 0) {
            resArr.push(generateReObj(staArr[startIdx], staArr[Math.round(startIdx / 2 + staArr.length / 2 - 0.5)], staArr[staArr.length - 1], staArr.length - 1 - startIdx, 'Change'));
        }
        else {
            resArr.push(generateReObj(staArr[0], staArr[Math.round(staArr.length / 2 - 0.5)], staArr[staArr.length - 1], staArr.length - 1, 'Take'));
        }
        return resArr;
    };
    return Solution;
}());



/***/ }),

/***/ "./src/app/model/station.ts":
/*!**********************************!*\
  !*** ./src/app/model/station.ts ***!
  \**********************************/
/*! exports provided: Station */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Station", function() { return Station; });
var Station = /** @class */ (function () {
    function Station() {
        // line: String;
        // order: Number;
        this.stationNames = [];
        this.links = [];
    }
    Station.isSameLine = function (sta1, sta2) {
        if (!sta1 || !sta2) {
            return false;
        }
        var name1 = sta1.stationNames.map(function (name) { return name.slice(0, 2); });
        var name2 = sta2.stationNames.map(function (name) { return name.slice(0, 2); });
        return name1.some(function (name) { return name2.indexOf(name) !== -1; });
    };
    Station.getCommonLine = function (sta1, sta2, sta3) {
        if (!sta1 || !sta2 || !sta3) {
            return '';
        }
        var name1 = sta1.stationNames.map(function (name) { return name.slice(0, 2); });
        var name2 = sta2.stationNames.map(function (name) { return name.slice(0, 2); });
        var name3 = sta3.stationNames.map(function (name) { return name.slice(0, 2); });
        var common = [name1, name2, name3].reduce(function (p, c) { return p.filter(function (e) { return c.includes(e); }); });
        return common;
    };
    return Station;
}());



/***/ }),

/***/ "./src/app/service/mrt.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/mrt.service.ts ***!
  \****************************************/
/*! exports provided: MRTService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MRTService", function() { return MRTService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_stations_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/stations.json */ "./src/assets/stations.json");
var _assets_stations_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/stations.json */ "./src/assets/stations.json", 1);
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _model_station__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/station */ "./src/app/model/station.ts");
/* harmony import */ var _model_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/route */ "./src/app/model/route.ts");
/* harmony import */ var _model_solution__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../model/solution */ "./src/app/model/solution.ts");
/* harmony import */ var _solution_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./solution.service */ "./src/app/service/solution.service.ts");








var MRTService = /** @class */ (function () {
    function MRTService(util, solutionSvc) {
        var _this = this;
        this.util = util;
        this.solutionSvc = solutionSvc;
        this.stationData = {};
        this.stationNametoId = {};
        this.srcObj = _assets_stations_json__WEBPACK_IMPORTED_MODULE_2__;
        var possibleStation = new Set();
        var lineMinMax = {};
        // initilise data
        Object.keys(this.srcObj).forEach(function (stationName, idx) {
            var dataObj = _this.srcObj[stationName];
            var newStation = new _model_station__WEBPACK_IMPORTED_MODULE_4__["Station"]();
            var stationId = idx + 1;
            newStation.name = stationName;
            Object.keys(dataObj).forEach(function (line) {
                var order = dataObj[line];
                lineMinMax[line] = lineMinMax[line] || { min: 10000, max: -1 };
                if (Array.isArray(order)) {
                    order.forEach(function (num) {
                        lineMinMax[line].min = Math.min(lineMinMax[line].min, num);
                        lineMinMax[line].max = Math.max(lineMinMax[line].max, num);
                        _this.stationNametoId[line + num] = stationId;
                        possibleStation.add(line + num);
                        newStation.stationNames.push(line + num);
                        newStation.isInterChange = true;
                    });
                }
                else {
                    lineMinMax[line].min = Math.min(lineMinMax[line].min, order);
                    lineMinMax[line].max = Math.max(lineMinMax[line].max, order);
                    possibleStation.add(line + order);
                    newStation.stationNames.push(line + order);
                    _this.stationNametoId[line + order] = stationId;
                    newStation.isInterChange = false;
                }
            });
            _this.stationData[stationId] = newStation;
            // this.stationObj[] = '';
        });
        // console.log(this.stationData, possibleStation, lineMinMax, this.stationNametoId);
        // setup links
        Object.keys(this.stationData).forEach(function (id) {
            _this.stationData[id].stationNames.forEach(function (thisMRT) {
                var line = thisMRT.slice(0, 2);
                var num = Number(thisMRT.slice(2));
                var num1 = num - 1;
                while (num1 >= lineMinMax[line].min) {
                    if (possibleStation.has(line + num1)) {
                        _this.stationData[id].links.push(_this.stationNametoId[line + num1]);
                        break;
                    }
                    num1--;
                }
                var num2 = num + 1;
                while (num2 <= lineMinMax[line].max) {
                    if (possibleStation.has(line + num2)) {
                        _this.stationData[id].links.push(_this.stationNametoId[line + num2]);
                        break;
                    }
                    num2++;
                }
            });
        });
        Object.keys(this.stationData).forEach(function (id) {
            _this.stationData[id].links = Array.from(new Set(_this.stationData[id].links));
        });
        console.log(this.stationData, possibleStation, lineMinMax);
    }
    MRTService.prototype.getAllStation = function () {
        return this.stationData;
    };
    MRTService.prototype.check = function () {
        console.log('sss', this.srcObj);
    };
    MRTService.prototype.findRoutes = function (query) {
        var _this = this;
        var solutionArr;
        if (query.type === 'minDist') {
            solutionArr = this.getShortestPath(query.from, query.to, query.best);
            console.log(solutionArr);
        }
        else if (query.type === 'minDist') {
            solutionArr = this.getShortestPath(query.from, query.to, query.best);
            console.log(solutionArr);
            this.solutionSvc.updateSolution(solutionArr);
        }
        solutionArr.map(function (path) {
            var solution = new _model_solution__WEBPACK_IMPORTED_MODULE_6__["Solution"](path);
            var text = _model_solution__WEBPACK_IMPORTED_MODULE_6__["Solution"].createRouteText(path.map(function (a) { return _this.stationData[a]; }));
            console.log(text);
        });
    };
    MRTService.prototype.getShortestPath = function (from, to, max) {
        if (max === void 0) { max = 5; }
        console.log(from, to, max);
        var allPaths = [];
        allPaths.push(new _model_route__WEBPACK_IMPORTED_MODULE_5__["Route"]([Number(from)]));
        return this.loopPath([], allPaths, {}, to, max, 'dist');
    };
    MRTService.prototype.loopPath = function (solutionArr, allPaths, hitMap, to, max, type) {
        var _this = this;
        // if (max <= 0) {
        //   // console.log(allPaths);
        //   allPaths.forEach(a => {
        //     console.log(
        //       a.path.map(id =>
        //         this.stationData[id].name).join(', '));
        //   })
        //   return;
        // }
        var newPathtoAdd = [];
        allPaths.filter(function (route) { return !route['tbd']; }).forEach(function (route) {
            var lastStaId = route.path[route.path.length - 1];
            if (lastStaId != to) {
                _this.stationData[lastStaId].links.forEach(function (newStaId) {
                    if (hitMap[newStaId] > max) {
                        // console.log(this.stationData[newStaId].name, ' exceeds');
                        return false;
                    }
                    if (!route.containsStation(newStaId)) {
                        hitMap[newStaId] = hitMap[newStaId] || 0;
                        hitMap[newStaId]++;
                        var newRoute = new _model_route__WEBPACK_IMPORTED_MODULE_5__["Route"](route.path);
                        newRoute.addStaToPath(newStaId);
                        newPathtoAdd.push(newRoute);
                        // console.log('a');
                    }
                });
                // route['tbd'] = true;
            }
            else {
                solutionArr.push(route.path);
                console.log(solutionArr.length, route.path.map(function (id) {
                    return _this.stationData[id].name;
                }).join(', '));
            }
        });
        // if (newPathtoAdd.length > 5000) {
        //   return;
        // }
        // console.log(newPathtoAdd.length);
        // newPathtoAdd.forEach(a => {
        //   console.log(
        //     a.path.map(id =>
        //       this.stationData[id].name).join(', '));
        // })
        if (solutionArr.length >= max) {
            return solutionArr.slice(0, max);
        }
        if (newPathtoAdd.length === 0) {
            return solutionArr;
        }
        return this.loopPath(solutionArr, newPathtoAdd, hitMap, to, max, type);
    };
    MRTService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _solution_service__WEBPACK_IMPORTED_MODULE_7__["SolutionService"]])
    ], MRTService);
    return MRTService;
}());



/***/ }),

/***/ "./src/app/service/solution.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/solution.service.ts ***!
  \*********************************************/
/*! exports provided: SolutionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionService", function() { return SolutionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SolutionService = /** @class */ (function () {
    function SolutionService() {
        this.solutions$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    SolutionService.prototype.updateSolution = function (solu) {
        console.log('recei', solu);
        this.solutions$.next(solu);
    };
    SolutionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SolutionService);
    return SolutionService;
}());



/***/ }),

/***/ "./src/app/service/util.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/util.service.ts ***!
  \*****************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UtilService = /** @class */ (function () {
    function UtilService() {
    }
    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/assets/stations.json":
/*!**********************************!*\
  !*** ./src/assets/stations.json ***!
  \**********************************/
/*! exports provided: Admiralty, Aljunied, Ang Mo Kio, Bahar Junction, Bakau, Bangkit, Bartley, Bayfront, Bayshore, Beauty World, Bedok, Bedok North, Bedok Reservoir, Bedok South, Bencoolen, Bendemeer, Bishan, Boon Keng, Boon Lay, Botanic Gardens, Braddell, Bras Basah, Bright Hill, Buangkok, Bugis, Bukit Batok, Bukit Batok West, Bukit Gombak, Bukit Panjang, Buona Vista, Caldecott, Canberra, Cantonment, Cashew, Changi Airport, Cheng Lim, Chinatown, Chinese Garden, Choa Chu Kang, Choa Chu Kang West, City Hall, Clarke Quay, Clementi, Commonwealth, Compassvale, Coral Edge, Corporation, Cove, Dakota, Damai, Dhoby Ghaut, Dover, Downtown, Enterprise, Esplanade, Eunos, Expo, Fajar, Farmway, Farrer Park, Farrer Road, Fernvale, Fort Canning, Gardens by the Bay, Gek Poh, Geylang Bahru, Great World, Gul Circle, HarbourFront, Havelock, Haw Par Villa, Hillview, Holland Village, Hong Kah, Hougang, Jalan Besar, Jelapang, Joo Koon, Jurong East, Jurong Hill, Jurong Pier, Jurong Town Hall, Jurong West, Kadaloor, Kaki Bukit, Kallang, Kangkar, Katong Park, Keat Hong, Kembangan, Kent Ridge, Keppel, Khatib, King Albert Park, Kovan, Kranji, Kupang, Labrador Park, Lakeside, Lavender, Layar, Lentor, Little India, Lorong Chuan, MacPherson, Marina Bay, Marina South, Marina South Pier, Marine Parade, Marine Terrace, Marsiling, Marymount, Mattar, Maxwell, Mayflower, Meridian, Mount Pleasant, Mountbatten, Nanyang Crescent, Nanyang Gateway, Napier, Newton, Nibong, Nicoll Highway, Novena, Oasis, one-north, Orchard, Orchard Boulevard, Outram Park, Pandan Reservoir, Pasir Panjang, Pasir Ris, Paya Lebar, Pending, Peng Kang Hill, Petir, Phoenix, Pioneer, Potong Pasir, Prince Edward Road, Promenade, Punggol, Punggol Coast, Punggol Point, Queenstown, Raffles Place, Ranggung, Redhill, Renjong, Riviera, Rochor, Rumbia, Sam Kee, Samudera, Segar, Sembawang, Sengkang, Senja, Serangoon, Shenton Way, Siglap, Simei, Sixth Avenue, Somerset, Soo Teck, South View, Springleaf, Stadium, Stevens, Sumang, Sungei Bedok, Tai Seng, Tampines, Tampines East, Tampines West, Tan Kah Kee, Tanah Merah, Tanjong Katong, Tanjong Pagar, Tanjong Rhu, Tawas, Teck Lee, Teck Whye, Telok Ayer, Telok Blangah, Tengah, Tengah Park, Tengah Plantation, Thanggam, Tiong Bahru, Toa Payoh, Toh Guan, Tongkang, Tuas Crescent, Tuas Link, Tuas West Road, Tukang, Ubi, Upper Changi, Upper Thomson, Woodlands, Woodlands North, Woodlands South, Woodleigh, Xilin, Yew Tee, Yio Chu Kang, Yishun, default */
/***/ (function(module) {

module.exports = {"Admiralty":{"NS":10},"Aljunied":{"EW":9},"Ang Mo Kio":{"NS":16},"Bahar Junction":{"JS":7},"Bakau":{"SE":3},"Bangkit":{"BP":9},"Bartley":{"CC":12,"CE":12},"Bayfront":{"CE":3,"DT":16},"Bayshore":{"TE":29},"Beauty World":{"DT":5},"Bedok":{"EW":5},"Bedok North":{"DT":29},"Bedok Reservoir":{"DT":30},"Bedok South":{"TE":30},"Bencoolen":{"DT":21},"Bendemeer":{"DT":23},"Bishan":{"NS":17,"CC":15,"CE":15},"Boon Keng":{"NE":9},"Boon Lay":{"EW":27,"JS":8},"Botanic Gardens":{"CC":19,"CE":19,"DT":9},"Braddell":{"NS":18},"Bras Basah":{"CC":2},"Bright Hill":{"TE":7},"Buangkok":{"NE":15},"Bugis":{"EW":12,"DT":14},"Bukit Batok":{"NS":2},"Bukit Batok West":{"JE":3},"Bukit Gombak":{"NS":3},"Bukit Panjang":{"BP":[6,14],"DT":1},"Buona Vista":{"EW":21,"CC":22,"CE":22},"Caldecott":{"CC":17,"CE":17,"TE":9},"Canberra":{"NS":12},"Cantonment":{"CC":31,"CE":31},"Cashew":{"DT":2},"Changi Airport":{"CG":2},"Cheng Lim":{"SW":1},"Chinatown":{"NE":4,"DT":19},"Chinese Garden":{"EW":25},"Choa Chu Kang":{"NS":4,"JS":1,"BP":[1,19]},"Choa Chu Kang West":{"JS":2},"City Hall":{"NS":25,"EW":13},"Clarke Quay":{"NE":5},"Clementi":{"EW":23},"Commonwealth":{"EW":20},"Compassvale":{"SE":1},"Coral Edge":{"PE":3},"Corporation":{"JS":5},"Cove":{"PE":1},"Dakota":{"CC":8,"CE":8},"Damai":{"PE":7},"Dhoby Ghaut":{"NS":24,"NE":6,"CC":1},"Dover":{"EW":22},"Downtown":{"DT":17},"Enterprise":{"JS":9},"Esplanade":{"CC":3},"Eunos":{"EW":7},"Expo":{"CG":1,"DT":35},"Fajar":{"BP":10},"Farmway":{"SW":2},"Farrer Park":{"NE":8},"Farrer Road":{"CC":20,"CE":20},"Fernvale":{"SW":5},"Fort Canning":{"DT":20},"Gardens by the Bay":{"TE":22},"Gek Poh":{"JW":1},"Geylang Bahru":{"DT":24},"Great World":{"TE":15},"Gul Circle":{"EW":30},"HarbourFront":{"NE":1,"CC":29,"CE":29},"Havelock":{"TE":16},"Haw Par Villa":{"CC":25,"CE":25},"Hillview":{"DT":3},"Holland Village":{"CC":21,"CE":21},"Hong Kah":{"JS":4},"Hougang":{"NE":14},"Jalan Besar":{"DT":22},"Jelapang":{"BP":12},"Joo Koon":{"EW":29},"Jurong East":{"NS":1,"EW":24,"JE":5},"Jurong Hill":{"JS":11},"Jurong Pier":{"JS":12},"Jurong Town Hall":{"JE":6},"Jurong West":{"JS":6},"Kadaloor":{"PE":5},"Kaki Bukit":{"DT":28},"Kallang":{"EW":10},"Kangkar":{"SE":4},"Katong Park":{"TE":24},"Keat Hong":{"BP":[3,17]},"Kembangan":{"EW":6},"Kent Ridge":{"CC":24,"CE":24},"Keppel":{"CC":30,"CE":30},"Khatib":{"NS":14},"King Albert Park":{"DT":6},"Kovan":{"NE":13},"Kranji":{"NS":7},"Kupang":{"SW":3},"Labrador Park":{"CC":27,"CE":27},"Lakeside":{"EW":26},"Lavender":{"EW":11},"Layar":{"SW":6},"Lentor":{"TE":5},"Little India":{"NE":7,"DT":12},"Lorong Chuan":{"CC":14,"CE":14},"MacPherson":{"CC":10,"CE":10,"DT":26},"Marina Bay":{"CE":[2,33],"NS":27,"TE":20,"CC":33},"Marina South":{"TE":21},"Marina South Pier":{"NS":28},"Marine Parade":{"TE":26},"Marine Terrace":{"TE":27},"Marsiling":{"NS":8},"Marymount":{"CC":16,"CE":16},"Mattar":{"DT":25},"Maxwell":{"TE":18},"Mayflower":{"TE":6},"Meridian":{"PE":2},"Mount Pleasant":{"TE":10},"Mountbatten":{"CC":7,"CE":7},"Nanyang Crescent":{"JW":4},"Nanyang Gateway":{"JW":3},"Napier":{"TE":12},"Newton":{"NS":21,"DT":11},"Nibong":{"PW":5},"Nicoll Highway":{"CC":5,"CE":5},"Novena":{"NS":20},"Oasis":{"PE":6},"one-north":{"CC":23,"CE":23},"Orchard":{"NS":22,"TE":14},"Orchard Boulevard":{"TE":13},"Outram Park":{"EW":16,"NE":3,"TE":17},"Pandan Reservoir":{"JE":7},"Pasir Panjang":{"CC":26,"CE":26},"Pasir Ris":{"EW":1},"Paya Lebar":{"EW":8,"CC":9,"CE":9},"Pending":{"BP":8},"Peng Kang Hill":{"JW":5},"Petir":{"BP":7},"Phoenix":{"BP":[5,15]},"Pioneer":{"EW":28},"Potong Pasir":{"NE":10},"Prince Edward Road":{"CC":32,"CE":32},"Promenade":{"CC":4,"CE":4,"DT":15},"Punggol":{"NE":17,"PE":[0,8],"PW":[0,8]},"Punggol Coast":{"NE":18},"Punggol Point":{"PW":3},"Queenstown":{"EW":19},"Raffles Place":{"NS":26,"EW":14},"Ranggung":{"SE":5},"Redhill":{"EW":18},"Renjong":{"SW":8},"Riviera":{"PE":4},"Rochor":{"DT":13},"Rumbia":{"SE":2},"Sam Kee":{"PW":1},"Samudera":{"PW":4},"Segar":{"BP":11},"Sembawang":{"NS":11},"Sengkang":{"NE":16,"SE":[0,6],"SW":[0,9]},"Senja":{"BP":13},"Serangoon":{"NE":12,"CC":13,"CE":13},"Shenton Way":{"TE":19},"Siglap":{"TE":28},"Simei":{"EW":3},"Sixth Avenue":{"DT":7},"Somerset":{"NS":23},"Soo Teck":{"PW":7},"South View":{"BP":[2,18]},"Springleaf":{"TE":4},"Stadium":{"CC":6,"CE":6},"Stevens":{"DT":10,"TE":11},"Sumang":{"PW":6},"Sungei Bedok":{"DT":37,"TE":31},"Tai Seng":{"CC":11,"CE":11},"Tampines":{"EW":2,"DT":32},"Tampines East":{"DT":33},"Tampines West":{"DT":31},"Tan Kah Kee":{"DT":8},"Tanah Merah":{"EW":4,"CG":0},"Tanjong Katong":{"TE":25},"Tanjong Pagar":{"EW":15},"Tanjong Rhu":{"TE":23},"Tawas":{"JW":2},"Teck Lee":{"PW":2},"Teck Whye":{"BP":[4,16]},"Telok Ayer":{"DT":18},"Telok Blangah":{"CC":28,"CE":28},"Tengah":{"JS":3},"Tengah Park":{"JE":2},"Tengah Plantation":{"JE":1},"Thanggam":{"SW":4},"Tiong Bahru":{"EW":17},"Toa Payoh":{"NS":19},"Toh Guan":{"JE":4},"Tongkang":{"SW":7},"Tuas Crescent":{"EW":31},"Tuas Link":{"EW":33},"Tuas West Road":{"EW":32},"Tukang":{"JS":10},"Ubi":{"DT":27},"Upper Changi":{"DT":34},"Upper Thomson":{"TE":8},"Woodlands":{"NS":9,"TE":2},"Woodlands North":{"TE":1},"Woodlands South":{"TE":3},"Woodleigh":{"NE":11},"Xilin":{"DT":36},"Yew Tee":{"NS":5},"Yio Chu Kang":{"NS":15},"Yishun":{"NS":13}};

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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\workspace\mrt\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map