(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pm-team-board-team-board-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/team-board/pages/team-board/team-board.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/team-board/pages/team-board/team-board.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"team-boards\" *ngIf=\"isPageLoaded\">\n\t<div class=\"row\" *ngIf=\"teams?.length != 0\">\n\t\t<div class=\"col-md-6\" *ngFor=\"let team of teams; let i = index\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"team-boards-head d-flex justify-content-between mb-3\">\n\t\t\t\t\t<h4 class=\"sub-title\">{{i + 1}} - {{team.team_name}}</h4>\n\t\t\t\t\t<div class=\"people-lists ml-4 mr-3\">\n\t\t\t\t\t\t<span *ngFor=\"let member of team.members index as i; odd as isOdd; even as isEven\">\n\t\t\t\t\t\t\t<a class=\"btn btn-profile-info rounded-circle text-dark popover-item images\" [routerLink]=\"['/users/profile', member.id]\"  *ngIf=\"team.team_leader == member.id\" placement=\"top\" tooltip=\"{{'teams.title2' | translate}} - {{member.firstname}} {{member.lastname}}\">\n\t\t\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/profile/{{member.avatar}}\" alt=\"Profile\" *ngIf=\"member.avatar && team.team_leader == member.id\" >\n\t\t\t\t\t\t\t\t<img src=\"../assets/img/profile_small.jpg\" alt=\"Profile\" *ngIf=\"!member.avatar && team.team_leader == member.id\">\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"people-lists\">\n\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', member.id]\" tooltip=\"{{member.firstname}} {{member.lastname}}\" class=\"btn rounded-circle text-dark\" placement=\"top\" *ngFor=\"let member of team.members index as i; odd as isOdd; even as isEven\" [ngClass]=\"{'btn-profile-info popover-item': isOdd, 'btn-profile-danger': isEven, 'popover-item': i!=0}\">\n\t\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/profile/{{member.avatar}}\" alt=\"Profile\" *ngIf=\"member.avatar\">\n\t\t\t\t\t\t\t<img src=\"../assets/img/profile_small.jpg\" alt=\"Profile\" *ngIf=\"!member.avatar\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"team-details\">\n\t\t\t\t\t<p [innerHTML]=\"team.description\"></p>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-12 col-xl-6\">\n\t\t\t\t\t\t\t<div class=\"team-details-box\">\n\t\t\t\t\t\t\t\t<h6>{{'projects.title' | translate}}</h6>\n\t\t\t\t\t\t\t\t<span *ngIf=\"team.project\">{{team.project?.length || '0'}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-12 col-xl-6\">\n\t\t\t\t\t\t\t<div class=\"team-details-box\">\n\t\t\t\t\t\t\t\t<h6>{{'teams.create.fields.members' | translate}}</h6>\n\t\t\t\t\t\t\t\t<span>{{team.members.length}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row\" *ngIf=\"teams?.length == 0\">\n\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t<img src=\"assets/img/norecord-img.png\" width=\"50\">\n\t\t\t<p class=\"mt-1\">{{ 'common.empty_message.teams' | translate }}</p>\n\t\t</div>\n\t</div>\n</section>");

/***/ }),

/***/ "./src/app/modules/pm/team-board/pages/team-board/team-board.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/pm/team-board/pages/team-board/team-board.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vdGVhbS1ib2FyZC9wYWdlcy90ZWFtLWJvYXJkL3RlYW0tYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/team-board/pages/team-board/team-board.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/pm/team-board/pages/team-board/team-board.component.ts ***!
  \********************************************************************************/
/*! exports provided: TeamBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamBoardComponent", function() { return TeamBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_services_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../core/services/team.service */ "./src/app/core/services/team.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");





var TeamBoardComponent = /** @class */ (function () {
    function TeamBoardComponent(teamService, http) {
        this.teamService = teamService;
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.isPageLoaded = false;
    }
    TeamBoardComponent.prototype.ngOnInit = function () {
        this.getTeamForTeamBoard();
    };
    TeamBoardComponent.prototype.getTeamForTeamBoard = function () {
        var _this = this;
        this.teamService.getTeamForTeamBoard()
            .subscribe(function (data) {
            _this.teams = data;
            _this.isPageLoaded = true;
        });
    };
    TeamBoardComponent.ctorParameters = function () { return [
        { type: _core_services_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TeamBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-board',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./team-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/team-board/pages/team-board/team-board.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./team-board.component.scss */ "./src/app/modules/pm/team-board/pages/team-board/team-board.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TeamBoardComponent);
    return TeamBoardComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/team-board/team-board-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/pm/team-board/team-board-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: TeamBoardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamBoardRoutingModule", function() { return TeamBoardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_team_board_team_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/team-board/team-board.component */ "./src/app/modules/pm/team-board/pages/team-board/team-board.component.ts");





var routes = [
    {
        path: '',
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
        component: _pages_team_board_team_board_component__WEBPACK_IMPORTED_MODULE_4__["TeamBoardComponent"],
        data: {
            permissions: {
                only: ['teams_view']
            }
        }
    }
];
var TeamBoardRoutingModule = /** @class */ (function () {
    function TeamBoardRoutingModule() {
    }
    TeamBoardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TeamBoardRoutingModule);
    return TeamBoardRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/pm/team-board/team-board.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/pm/team-board/team-board.module.ts ***!
  \************************************************************/
/*! exports provided: TeamBoardModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamBoardModule", function() { return TeamBoardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _team_board_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./team-board-routing.module */ "./src/app/modules/pm/team-board/team-board-routing.module.ts");
/* harmony import */ var _pages_team_board_team_board_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/team-board/team-board.component */ "./src/app/modules/pm/team-board/pages/team-board/team-board.component.ts");










var TeamBoardModule = /** @class */ (function () {
    function TeamBoardModule() {
    }
    TeamBoardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_team_board_team_board_component__WEBPACK_IMPORTED_MODULE_9__["TeamBoardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _team_board_routing_module__WEBPACK_IMPORTED_MODULE_8__["TeamBoardRoutingModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]
        })
    ], TeamBoardModule);
    return TeamBoardModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=modules-pm-team-board-team-board-module.js.map