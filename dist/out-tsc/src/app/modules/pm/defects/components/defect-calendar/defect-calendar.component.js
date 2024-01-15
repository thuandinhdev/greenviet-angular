import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { startOfDay, isSameDay, isSameMonth } from 'date-fns';
import { Subject } from 'rxjs';
import { colors } from './../../../../../core/helpers/pm-helper';
var DefectCalendarComponent = /** @class */ (function () {
    function DefectCalendarComponent() {
        this.isCalendarLoaded = false;
        this.view = CalendarView.Month;
        this.CalendarView = CalendarView;
        this.viewDate = new Date();
        this.refresh = new Subject();
        this.events = this.AllCalendarEvents;
        this.activeDayIsOpen = true;
    }
    DefectCalendarComponent.prototype.ngOnInit = function () {
        this.setCalendarData();
        this.viewDate = new Date(this.defect.created_at);
    };
    DefectCalendarComponent.prototype.dayClicked = function (_a) {
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
    DefectCalendarComponent.prototype.addEvent = function (tasks) {
        this.events = tasks;
        this.isCalendarLoaded = true;
        this.refreshView();
    };
    DefectCalendarComponent.prototype.refreshView = function () {
        this.refresh.next();
    };
    DefectCalendarComponent.prototype.setView = function (view) {
        this.view = view;
    };
    DefectCalendarComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    DefectCalendarComponent.prototype.setCalendarData = function () {
        var eventsAll = [];
        eventsAll.push({
            start: startOfDay(new Date(this.defect.created_at)),
            title: this.defect.defect_name,
            color: colors.orange
        });
        this.addEvent(eventsAll);
        this.AllCalendarEvents = eventsAll;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DefectCalendarComponent.prototype, "defect", void 0);
    __decorate([
        ViewChild('modalContent', { static: true }),
        __metadata("design:type", TemplateRef)
    ], DefectCalendarComponent.prototype, "modalContent", void 0);
    DefectCalendarComponent = __decorate([
        Component({
            selector: 'app-defect-calendar',
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: './defect-calendar.component.html',
            styleUrls: ['./defect-calendar.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], DefectCalendarComponent);
    return DefectCalendarComponent;
}());
export { DefectCalendarComponent };
//# sourceMappingURL=defect-calendar.component.js.map