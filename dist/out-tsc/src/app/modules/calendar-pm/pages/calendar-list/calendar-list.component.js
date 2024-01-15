import { __decorate, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarDateFormatter, CalendarView } from 'angular-calendar';
import { addDays, subDays, startOfDay, isSameDay, isSameMonth } from 'date-fns';
import { Subject } from 'rxjs';
import { MeetingService } from './../../../../core/services/meeting.service';
import { HolidayService } from './../../../../core/services/holiday.service';
import { ProjectService } from './../../../../core/services/project.service';
import { DefectService } from './../../../../core/services/defect.service';
import { IncidentService } from './../../../../core/services/incident.service';
import { TaskService } from './../../../../core/services/task.service';
import { AuthenticationService } from './../../../../core/services/authentication.service';
import { colors } from './../../../../core/helpers/pm-helper';
import { CustomDateFormatter } from './../../../../core/helpers/custom-event-title-formatter.provider';
var CalendarListComponent = /** @class */ (function () {
    function CalendarListComponent(projectService, taskService, holidayService, MeetingService, authenticationService, defectService, incidentService) {
        var _this = this;
        this.projectService = projectService;
        this.taskService = taskService;
        this.holidayService = holidayService;
        this.MeetingService = MeetingService;
        this.authenticationService = authenticationService;
        this.defectService = defectService;
        this.incidentService = incidentService;
        this.isCalendarLoaded = false;
        this.view = CalendarView.Month;
        this.CalendarView = CalendarView;
        this.viewDate = new Date();
        this.refresh = new Subject();
        this.events = this.AllCalendarEvents;
        this.activeDayIsOpen = true;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    CalendarListComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    CalendarListComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (isSameMonth(date, this.viewDate)) {
            if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
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
        var eventsAll = [];
        this.tasks.forEach(function (element) {
            eventsAll.push({
                start: subDays(startOfDay(new Date(element.task_start_date)), 0),
                end: addDays(new Date(element.task_end_date), 0),
                title: "Task:- " + element.name,
                color: colors.blue,
                allDay: true
            });
        });
        this.defects.forEach(function (element) {
            eventsAll.push({
                start: subDays(startOfDay(new Date(element.start_date)), 0),
                end: addDays(new Date(element.end_date), 0),
                title: "Defect:- " + element.defect_name,
                color: colors.orange,
                allDay: true
            });
        });
        this.incidents.forEach(function (element) {
            eventsAll.push({
                start: subDays(startOfDay(new Date(element.start_date)), 0),
                end: addDays(new Date(element.end_date), 0),
                title: "Incident:- " + element.incident_name,
                color: colors.purple,
                allDay: true
            });
        });
        this.meetings.forEach(function (element) {
            eventsAll.push({
                start: subDays(startOfDay(new Date(element.start_date)), 0),
                end: addDays(new Date(element.end_date), 0),
                title: "Meeting:- " + element.title,
                color: colors.yellow,
                allDay: true
            });
        });
        this.holidays.forEach(function (element) {
            eventsAll.push({
                start: startOfDay(new Date(element.date)),
                title: "Holiday:- " + element.event_name,
                color: {
                    primary: element.color,
                    secondary: element.color
                }
            });
        });
        this.addEvent(eventsAll);
        this.AllCalendarEvents = eventsAll;
    };
    CalendarListComponent = __decorate([
        Component({
            selector: 'app-calendar-list',
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: './calendar-list.component.html',
            styleUrls: ['./calendar-list.component.scss'],
            providers: [{
                    provide: CalendarDateFormatter,
                    useClass: CustomDateFormatter
                }]
        }),
        __metadata("design:paramtypes", [ProjectService,
            TaskService,
            HolidayService,
            MeetingService,
            AuthenticationService,
            DefectService,
            IncidentService])
    ], CalendarListComponent);
    return CalendarListComponent;
}());
export { CalendarListComponent };
//# sourceMappingURL=calendar-list.component.js.map