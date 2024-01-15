import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { startOfDay, isSameDay, isSameMonth } from 'date-fns';
import { Subject } from 'rxjs';
import { LeaveService } from '../../../../../core/services/leave.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
var CalendarViewComponent = /** @class */ (function () {
    function CalendarViewComponent(leaveService, authenticationService) {
        var _this = this;
        this.leaveService = leaveService;
        this.authenticationService = authenticationService;
        this.isCalendarLoaded = false;
        this.view = CalendarView.Month;
        this.CalendarView = CalendarView;
        this.viewDate = new Date();
        this.refresh = new Subject();
        this.events = this.allCalendarEvents;
        this.activeDayIsOpen = true;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    CalendarViewComponent.prototype.ngOnInit = function () {
        this.getLeaves();
    };
    CalendarViewComponent.prototype.dayClicked = function (_a) {
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
    CalendarViewComponent.prototype.addEvent = function (tasks) {
        this.events = tasks;
        this.isCalendarLoaded = true;
        this.refreshView();
    };
    CalendarViewComponent.prototype.refreshView = function () {
        this.refresh.next();
    };
    CalendarViewComponent.prototype.setView = function (view) {
        this.view = view;
    };
    CalendarViewComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    CalendarViewComponent.prototype.getLeaves = function () {
        var _this = this;
        this.leaveService.getCalendarLeaves().subscribe(function (data) {
            _this.leaves = data;
            _this.setCalendarData();
        });
    };
    CalendarViewComponent.prototype.setCalendarData = function () {
        var eventsAll = [];
        this.leaves.forEach(function (element) {
            eventsAll.push({
                start: startOfDay(new Date(element.leave_date)),
                title: element.reason,
                color: {
                    primary: element.color,
                    secondary: element.color
                }
            });
        });
        this.addEvent(eventsAll);
        this.allCalendarEvents = eventsAll;
    };
    CalendarViewComponent = __decorate([
        Component({
            selector: 'app-calendar-view',
            templateUrl: './calendar-view.component.html',
            styleUrls: ['./calendar-view.component.scss']
        }),
        __metadata("design:paramtypes", [LeaveService,
            AuthenticationService])
    ], CalendarViewComponent);
    return CalendarViewComponent;
}());
export { CalendarViewComponent };
//# sourceMappingURL=calendar-view.component.js.map