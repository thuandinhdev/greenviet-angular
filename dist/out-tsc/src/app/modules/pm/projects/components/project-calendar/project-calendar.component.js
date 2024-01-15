import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { addDays, subDays, startOfDay, isSameDay, isSameMonth } from 'date-fns';
import { Subject } from 'rxjs';
import { colors } from './../../../../../core/helpers/pm-helper';
var ProjectCalendarComponent = /** @class */ (function () {
    function ProjectCalendarComponent() {
        this.today = new Date();
        this.isCalendarLoaded = false;
        this.view = CalendarView.Month;
        this.CalendarView = CalendarView;
        this.viewDate = new Date();
        this.refresh = new Subject();
        this.events = this.AllCalendarEvents;
        this.activeDayIsOpen = true;
    }
    ProjectCalendarComponent.prototype.ngOnInit = function () {
        this.setCalendarData();
    };
    ProjectCalendarComponent.prototype.dayClicked = function (_a) {
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
    ProjectCalendarComponent.prototype.addEvent = function (tasks) {
        this.events = tasks;
        this.isCalendarLoaded = true;
        this.refreshView();
    };
    ProjectCalendarComponent.prototype.refreshView = function () {
        this.refresh.next();
    };
    ProjectCalendarComponent.prototype.setView = function (view) {
        this.view = view;
    };
    ProjectCalendarComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    ProjectCalendarComponent.prototype.setCalendarData = function () {
        var eventsAll = [];
        eventsAll.push({
            start: subDays(startOfDay(new Date(this.project.start_date)), 0),
            end: addDays(new Date(this.project.end_date), 0),
            title: "Project:- " + this.project.project_name,
            color: colors.red,
            allDay: true
        });
        this.project.tasks.forEach(function (element) {
            eventsAll.push({
                start: subDays(startOfDay(new Date(element.task_start_date)), 0),
                end: addDays(new Date(element.task_end_date), 0),
                title: "Task:- " + element.name,
                color: colors.blue,
                allDay: true
            });
        });
        this.project.defects.forEach(function (element) {
            eventsAll.push({
                start: subDays(startOfDay(new Date(element.start_date)), 0),
                end: addDays(new Date(element.end_date), 0),
                title: "Defect:- " + element.defect_name,
                color: colors.orange,
                allDay: true
            });
        });
        this.project.incidents.forEach(function (element) {
            eventsAll.push({
                start: subDays(startOfDay(new Date(element.start_date)), 0),
                end: addDays(new Date(element.end_date), 0),
                title: "Incident:- " + element.incident_name,
                color: colors.purple,
                allDay: true
            });
        });
        this.addEvent(eventsAll);
        this.AllCalendarEvents = eventsAll;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectCalendarComponent.prototype, "project", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectCalendarComponent.prototype, "loginUser", void 0);
    __decorate([
        ViewChild('modalContent', { static: true }),
        __metadata("design:type", TemplateRef)
    ], ProjectCalendarComponent.prototype, "modalContent", void 0);
    ProjectCalendarComponent = __decorate([
        Component({
            selector: 'app-project-calendar',
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: './project-calendar.component.html',
            styleUrls: ['./project-calendar.component.scss']
        })
    ], ProjectCalendarComponent);
    return ProjectCalendarComponent;
}());
export { ProjectCalendarComponent };
//# sourceMappingURL=project-calendar.component.js.map