import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var PmDashboardWidgetsComponent = /** @class */ (function () {
    function PmDashboardWidgetsComponent() {
    }
    PmDashboardWidgetsComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardWidgetsComponent.prototype, "dashboardLists", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardWidgetsComponent.prototype, "dashboardLists1", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardWidgetsComponent.prototype, "loginUser", void 0);
    PmDashboardWidgetsComponent = __decorate([
        Component({
            selector: 'app-pm-dashboard-widgets',
            templateUrl: './pm-dashboard-widgets.component.html',
            styleUrls: ['./pm-dashboard-widgets.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PmDashboardWidgetsComponent);
    return PmDashboardWidgetsComponent;
}());
export { PmDashboardWidgetsComponent };
//# sourceMappingURL=pm-dashboard-widgets.component.js.map