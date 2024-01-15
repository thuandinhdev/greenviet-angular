import { __decorate, __metadata } from "tslib";
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { startOfDay, isSameDay, isSameMonth } from 'date-fns';
import { Subject } from 'rxjs';
import { colors } from './../../../../../core/helpers/pm-helper';
var IncidentCalendarComponent = /** @class */ (function () {
    function IncidentCalendarComponent() {
        this.isCalendarLoaded = false;
        this.view = CalendarView.Month;
        this.CalendarView = CalendarView;
        this.viewDate = new Date();
        this.refresh = new Subject();
        this.events = this.AllCalendarEvents;
        this.activeDayIsOpen = true;
    }
    IncidentCalendarComponent.prototype.ngOnInit = function () {
        this.setCalendarData();
        this.viewDate = new Date(this.incident.created_at);
    };
    IncidentCalendarComponent.prototype.dayClicked = function (_a) {
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
    IncidentCalendarComponent.prototype.addEvent = function (tasks) {
        this.events = tasks;
        this.isCalendarLoaded = true;
        this.refreshView();
    };
    IncidentCalendarComponent.prototype.refreshView = function () {
        this.refresh.next();
    };
    IncidentCalendarComponent.prototype.setView = function (view) {
        this.view = view;
    };
    IncidentCalendarComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    IncidentCalendarComponent.prototype.setCalendarData = function () {
        var eventsAll = [];
        eventsAll.push({
            start: startOfDay(new Date(this.incident.created_at)),
            title: this.incident.incident_name,
            color: colors.purple
        });
        this.addEvent(eventsAll);
        this.AllCalendarEvents = eventsAll;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IncidentCalendarComponent.prototype, "incident", void 0);
    IncidentCalendarComponent = __decorate([
        Component({
            selector: 'app-incident-calendar',
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: './incident-calendar.component.html',
            styleUrls: ['./incident-calendar.component.scss']
        })
    ], IncidentCalendarComponent);
    return IncidentCalendarComponent;
}());
export { IncidentCalendarComponent };
//# sourceMappingURL=incident-calendar.component.js.map