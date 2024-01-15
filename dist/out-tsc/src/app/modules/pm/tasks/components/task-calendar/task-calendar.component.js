import { __decorate, __metadata } from "tslib";
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { addDays, subDays, startOfDay, isSameDay, isSameMonth } from 'date-fns';
import { Subject } from 'rxjs';
import { colors } from './../../../../../core/helpers/pm-helper';
var TaskCalendarComponent = /** @class */ (function () {
    function TaskCalendarComponent() {
        this.isCalendarLoaded = false;
        this.view = CalendarView.Month;
        this.CalendarView = CalendarView;
        this.viewDate = new Date();
        this.refresh = new Subject();
        this.events = this.AllCalendarEvents;
        this.activeDayIsOpen = true;
    }
    TaskCalendarComponent.prototype.ngOnInit = function () {
        this.setCalendarData();
        this.viewDate = new Date(this.task.task_start_date);
    };
    TaskCalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (isSameMonth(date, this.viewDate)) {
            if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    };
    TaskCalendarComponent.prototype.addEvent = function (tasks) {
        this.events = tasks;
        this.isCalendarLoaded = true;
        this.refreshView();
    };
    TaskCalendarComponent.prototype.refreshView = function () {
        this.refresh.next();
    };
    TaskCalendarComponent.prototype.setView = function (view) {
        this.view = view;
    };
    TaskCalendarComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    TaskCalendarComponent.prototype.setCalendarData = function () {
        var eventsAll = [];
        eventsAll.push({
            start: subDays(startOfDay(new Date(this.task.task_start_date)), 0),
            end: addDays(new Date(this.task.task_end_date), 0),
            title: this.task.name,
            color: colors.blue,
            allDay: true
        });
        this.addEvent(eventsAll);
        this.AllCalendarEvents = eventsAll;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TaskCalendarComponent.prototype, "task", void 0);
    TaskCalendarComponent = __decorate([
        Component({
            selector: 'app-task-calendar',
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: './task-calendar.component.html',
            styleUrls: ['./task-calendar.component.scss']
        })
    ], TaskCalendarComponent);
    return TaskCalendarComponent;
}());
export { TaskCalendarComponent };
//# sourceMappingURL=task-calendar.component.js.map