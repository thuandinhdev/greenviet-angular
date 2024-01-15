import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalendarListComponent } from './pages/calendar-list/calendar-list.component';
var routes = [
    {
        path: '',
        component: CalendarListComponent
    }
];
var CalendarPmRoutingModule = /** @class */ (function () {
    function CalendarPmRoutingModule() {
    }
    CalendarPmRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], CalendarPmRoutingModule);
    return CalendarPmRoutingModule;
}());
export { CalendarPmRoutingModule };
//# sourceMappingURL=calendar-pm-routing.module.js.map