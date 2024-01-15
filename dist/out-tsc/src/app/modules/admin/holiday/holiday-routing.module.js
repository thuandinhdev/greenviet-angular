import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HolidayComponent } from './pages/holiday/holiday.component';
var routes = [
    {
        path: '',
        component: HolidayComponent
    }
];
var HolidayRoutingModule = /** @class */ (function () {
    function HolidayRoutingModule() {
    }
    HolidayRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], HolidayRoutingModule);
    return HolidayRoutingModule;
}());
export { HolidayRoutingModule };
//# sourceMappingURL=holiday-routing.module.js.map