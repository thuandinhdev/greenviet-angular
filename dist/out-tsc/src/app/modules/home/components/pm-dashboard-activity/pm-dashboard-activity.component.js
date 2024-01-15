import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var PmDashboardActivityComponent = /** @class */ (function () {
    function PmDashboardActivityComponent() {
        this.scrollConfig = {};
    }
    PmDashboardActivityComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardActivityComponent.prototype, "todaysActivity", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardActivityComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardActivityComponent.prototype, "apiUrl", void 0);
    PmDashboardActivityComponent = __decorate([
        Component({
            selector: 'app-pm-dashboard-activity',
            templateUrl: './pm-dashboard-activity.component.html',
            styleUrls: ['./pm-dashboard-activity.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PmDashboardActivityComponent);
    return PmDashboardActivityComponent;
}());
export { PmDashboardActivityComponent };
//# sourceMappingURL=pm-dashboard-activity.component.js.map