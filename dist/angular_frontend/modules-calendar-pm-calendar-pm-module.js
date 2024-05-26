(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-calendar-pm-calendar-pm-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/calendar-pm/pages/calendar-list/calendar-list.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/calendar-pm/pages/calendar-list/calendar-list.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card pl-2 pr-2 pb-3\">\n\t\t\t\t<h4 class=\"main-title pt-2 mt-2\"><span>{{'calendar.title' | translate}}</span></h4>\n\t\t\t\t<div class=\"card-body pt-3\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"row text-center\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 d-flex mb-lg-0 mb-2 ml-lg-0 ml-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"btn calender-day\" mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\" (viewDateChange)=\"closeOpenMonthViewDay()\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"calendar-icon fa fa-chevron-left\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"ml-2 mr-2\"><h3>{{ viewDate | calendarDate:(view + 'ViewTitle'): loginUser.language }}</h3></div>\n\t\t\t\t\t\t\t\t\t<div class=\"btn calender-day\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\" (viewDateChange)=\"closeOpenMonthViewDay()\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"calendar-icon fa fa-chevron-right\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb-lg-0 mb-2 text-lg-right\">\n\t\t\t\t\t\t\t\t\t<div class=\"btn-view-date\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn calender-today mb-1\" mwlCalendarToday [(viewDate)]=\"viewDate\">{{'calendar.today' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn calender-today mb-1\" (click)=\"setView(CalendarView.Month)\" [class.active]=\"view === CalendarView.Month\">{{'calendar.month' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn calender-today mb-1\" (click)=\"setView(CalendarView.Week)\" [class.active]=\"view === CalendarView.Week\">{{'calendar.week' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn calender-today mb-1\" (click)=\"setView(CalendarView.Day)\" [class.active]=\"view === CalendarView.Day\">{{'calendar.day' | translate}}</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<div [ngSwitch]=\"view\">\n\t\t\t\t\t\t\t\t<mwl-calendar-month-view *ngSwitchCase=\"CalendarView.Month\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\" (dayClicked)=\"dayClicked($event.day)\" [locale]=\"loginUser.language\"></mwl-calendar-month-view>\n\t\t\t\t\t\t\t\t<mwl-calendar-week-view *ngSwitchCase=\"CalendarView.Week\" [viewDate]=\"viewDate\" [events]=\"events\"[refresh]=\"refresh\" [locale]=\"loginUser.language\"></mwl-calendar-week-view>\n\t\t\t\t\t\t\t\t<mwl-calendar-day-view *ngSwitchCase=\"CalendarView.Day\" [viewDate]=\"viewDate\" [events]=\"events\"[refresh]=\"refresh\" [locale]=\"loginUser.language\"></mwl-calendar-day-view>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>");

/***/ }),

/***/ "./src/app/core/services/meeting.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/meeting.service.ts ***!
  \**************************************************/
/*! exports provided: MeetingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingService", function() { return MeetingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var MeetingService = /** @class */ (function () {
    function MeetingService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    MeetingService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/meetings");
    };
    MeetingService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/meetings/" + id);
    };
    MeetingService.prototype.create = function (meeting) {
        return this.http.post(this.apiUrl + "/api/meetings", meeting);
    };
    MeetingService.prototype.update = function (meeting) {
        return this.http.put(this.apiUrl + "/api/meetings/" + meeting.id, meeting);
    };
    MeetingService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/meetings/" + id);
    };
    MeetingService.prototype.changeStatus = function (params) {
        return this.http.post(this.apiUrl + "/api/meetings/" + params.ids + "/change-status", { "status": params.status });
    };
    MeetingService.prototype.getCalendarMeetings = function () {
        return this.http.get(this.apiUrl + "/api/meetings/calendar");
    };
    MeetingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MeetingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MeetingService);
    return MeetingService;
}());



/***/ }),

/***/ "./src/app/core/services/project.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/project.service.ts ***!
  \**************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ProjectService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/projects");
    };
    ProjectService.prototype.getMyProjects = function () {
        return this.http.get(this.apiUrl + "/api/projects/my");
    };
    ProjectService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/projects/" + id);
    };
    ProjectService.prototype.getProjectById = function (id) {
        return this.http.get(this.apiUrl + "/api/projects/getbyid/" + id);
    };
    ProjectService.prototype.create = function (project) {
        return this.http.post(this.apiUrl + "/api/projects", project);
    };
    ProjectService.prototype.update = function (project) {
        return this.http.put(this.apiUrl + "/api/projects/" + project.id, project);
    };
    ProjectService.prototype.delete = function (id, params) {
        return this.http.post(this.apiUrl + "/api/projects/delete/" + id, params);
    };
    ProjectService.prototype.updateNotes = function (project) {
        return this.http.put(this.apiUrl + "/api/projects/notes/" + project.id, project);
    };
    ProjectService.prototype.changeStatus = function (project) {
        return this.http.post(this.apiUrl + "/api/projects/" + project.ids + "/change-status", { "status": project.status });
    };
    ProjectService.prototype.getReleasePlanner = function () {
        return this.http.get(this.apiUrl + "/api/projects/release-planner");
    };
    ProjectService.prototype.getProject = function () {
        return this.http.get(this.apiUrl + "/api/projects/projectmembers", {});
    };
    ProjectService.prototype.getProjectPermission = function (id) {
        return this.http.get(this.apiUrl + "/api/projects/" + id + "/permission", {});
    };
    ProjectService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/modules/calendar-pm/calendar-pm-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/calendar-pm/calendar-pm-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CalendarPmRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPmRoutingModule", function() { return CalendarPmRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_calendar_list_calendar_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/calendar-list/calendar-list.component */ "./src/app/modules/calendar-pm/pages/calendar-list/calendar-list.component.ts");




var routes = [
    {
        path: '',
        component: _pages_calendar_list_calendar_list_component__WEBPACK_IMPORTED_MODULE_3__["CalendarListComponent"]
    }
];
var CalendarPmRoutingModule = /** @class */ (function () {
    function CalendarPmRoutingModule() {
    }
    CalendarPmRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CalendarPmRoutingModule);
    return CalendarPmRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/calendar-pm/calendar-pm.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/calendar-pm/calendar-pm.module.ts ***!
  \***********************************************************/
/*! exports provided: CalendarPmModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPmModule", function() { return CalendarPmModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _calendar_pm_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calendar-pm-routing.module */ "./src/app/modules/calendar-pm/calendar-pm-routing.module.ts");
/* harmony import */ var _pages_calendar_list_calendar_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/calendar-list/calendar-list.component */ "./src/app/modules/calendar-pm/pages/calendar-list/calendar-list.component.ts");












var CalendarPmModule = /** @class */ (function () {
    function CalendarPmModule() {
    }
    CalendarPmModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_calendar_list_calendar_list_component__WEBPACK_IMPORTED_MODULE_11__["CalendarListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _calendar_pm_routing_module__WEBPACK_IMPORTED_MODULE_10__["CalendarPmRoutingModule"],
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"],
                angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__["adapterFactory"]
                }),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
            ]
        })
    ], CalendarPmModule);
    return CalendarPmModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/calendar-pm/pages/calendar-list/calendar-list.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/calendar-pm/pages/calendar-list/calendar-list.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FsZW5kYXItcG0vcGFnZXMvY2FsZW5kYXItbGlzdC9jYWxlbmRhci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/calendar-pm/pages/calendar-list/calendar-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/calendar-pm/pages/calendar-list/calendar-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: CalendarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarListComponent", function() { return CalendarListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../core/services/meeting.service */ "./src/app/core/services/meeting.service.ts");
/* harmony import */ var _core_services_holiday_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../core/services/holiday.service */ "./src/app/core/services/holiday.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_defect_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../core/services/defect.service */ "./src/app/core/services/defect.service.ts");
/* harmony import */ var _core_services_incident_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../core/services/incident.service */ "./src/app/core/services/incident.service.ts");
/* harmony import */ var _core_services_task_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../core/services/task.service */ "./src/app/core/services/task.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../../core/helpers/pm-helper */ "./src/app/core/helpers/pm-helper.ts");
/* harmony import */ var _core_helpers_custom_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../../../core/helpers/custom-event-title-formatter.provider */ "./src/app/core/helpers/custom-event-title-formatter.provider.ts");















var CalendarListComponent = /** @class */ (function () {
    function CalendarListComponent(translate, projectService, taskService, holidayService, MeetingService, authenticationService, defectService, incidentService) {
        var _this = this;
        this.translate = translate;
        this.projectService = projectService;
        this.taskService = taskService;
        this.holidayService = holidayService;
        this.MeetingService = MeetingService;
        this.authenticationService = authenticationService;
        this.defectService = defectService;
        this.incidentService = incidentService;
        this.isCalendarLoaded = false;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"];
        this.viewDate = new Date();
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.events = this.AllCalendarEvents;
        this.activeDayIsOpen = true;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    CalendarListComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    CalendarListComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    };
    CalendarListComponent.prototype.addEvent = function (tasks) {
        this.events = tasks;
        this.isCalendarLoaded = true;
        this.refreshView();
    };
    CalendarListComponent.prototype.refreshView = function () {
        this.refresh.next();
    };
    CalendarListComponent.prototype.setView = function (view) {
        this.view = view;
    };
    CalendarListComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    CalendarListComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getCalendarTasks().subscribe(function (data) {
            _this.tasks = data;
            _this.getDefects();
        });
    };
    CalendarListComponent.prototype.getDefects = function () {
        var _this = this;
        this.defectService.getDefectForCalendar()
            .subscribe(function (data) {
            _this.defects = data;
            _this.getIncidents();
        });
    };
    CalendarListComponent.prototype.getIncidents = function () {
        var _this = this;
        this.incidentService.getIncidentForCalendar()
            .subscribe(function (data) {
            _this.incidents = data;
            _this.getMeetings();
        });
    };
    CalendarListComponent.prototype.getMeetings = function () {
        var _this = this;
        this.MeetingService.getCalendarMeetings().subscribe(function (data) {
            _this.meetings = data;
            _this.getHolidays();
        });
    };
    CalendarListComponent.prototype.getHolidays = function () {
        var _this = this;
        this.holidayService.yearAllHolidays(new Date().getFullYear()).subscribe(function (data) {
            _this.holidays = data;
            _this.setCalendarData();
        });
    };
    CalendarListComponent.prototype.setCalendarData = function () {
        var _this = this;
        var eventsAll = [];
        this.tasks.forEach(function (element) {
            eventsAll.push({
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date(element.task_start_date)), 0),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(element.task_end_date), 0),
                title: element.generated_id + " - " + element.name,
                color: _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_13__["colors"].blue,
                allDay: true
            });
        });
        this.defects.forEach(function (element) {
            eventsAll.push({
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date(element.start_date)), 0),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(element.end_date), 0),
                title: element.generated_id + " - " + element.defect_name,
                color: _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_13__["colors"].orange,
                allDay: true
            });
        });
        this.incidents.forEach(function (element) {
            eventsAll.push({
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date(element.start_date)), 0),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(element.end_date), 0),
                title: element.generated_id + " - " + element.incident_name,
                color: _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_13__["colors"].purple,
                allDay: true
            });
        });
        this.meetings.forEach(function (element) {
            eventsAll.push({
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date(element.start_date)), 0),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(element.end_date), 0),
                title: element.generated_id + " - " + element.title,
                color: _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_13__["colors"].yellow,
                allDay: true
            });
        });
        this.holidays.forEach(function (element) {
            eventsAll.push({
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date(element.date)),
                title: _this.translate.instant('holidays.title') + " - " + element.event_name,
                color: {
                    primary: element.color,
                    secondary: element.color
                }
            });
        });
        this.addEvent(eventsAll);
        this.AllCalendarEvents = eventsAll;
    };
    CalendarListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"] },
        { type: _core_services_task_service__WEBPACK_IMPORTED_MODULE_11__["TaskService"] },
        { type: _core_services_holiday_service__WEBPACK_IMPORTED_MODULE_7__["HolidayService"] },
        { type: _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_6__["MeetingService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] },
        { type: _core_services_defect_service__WEBPACK_IMPORTED_MODULE_9__["DefectService"] },
        { type: _core_services_incident_service__WEBPACK_IMPORTED_MODULE_10__["IncidentService"] }
    ]; };
    CalendarListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar-list',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calendar-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/calendar-pm/pages/calendar-list/calendar-list.component.html")).default,
            providers: [{
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarDateFormatter"],
                    useClass: _core_helpers_custom_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_14__["CustomDateFormatter"]
                }],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calendar-list.component.scss */ "./src/app/modules/calendar-pm/pages/calendar-list/calendar-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"],
            _core_services_task_service__WEBPACK_IMPORTED_MODULE_11__["TaskService"],
            _core_services_holiday_service__WEBPACK_IMPORTED_MODULE_7__["HolidayService"],
            _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_6__["MeetingService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
            _core_services_defect_service__WEBPACK_IMPORTED_MODULE_9__["DefectService"],
            _core_services_incident_service__WEBPACK_IMPORTED_MODULE_10__["IncidentService"]])
    ], CalendarListComponent);
    return CalendarListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-calendar-pm-calendar-pm-module.js.map