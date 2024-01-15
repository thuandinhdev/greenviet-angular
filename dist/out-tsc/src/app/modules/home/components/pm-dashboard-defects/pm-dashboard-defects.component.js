import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { defect_status_key_class } from "./../../../../core/helpers/pm-helper";
var PmDashboardDefectsComponent = /** @class */ (function () {
    function PmDashboardDefectsComponent() {
        this.scrollConfig = {};
        this.defectStatusKeyColor = defect_status_key_class;
    }
    PmDashboardDefectsComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardDefectsComponent.prototype, "defects", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardDefectsComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardDefectsComponent.prototype, "apiUrl", void 0);
    PmDashboardDefectsComponent = __decorate([
        Component({
            selector: 'app-pm-dashboard-defects',
            templateUrl: './pm-dashboard-defects.component.html',
            styleUrls: ['./pm-dashboard-defects.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PmDashboardDefectsComponent);
    return PmDashboardDefectsComponent;
}());
export { PmDashboardDefectsComponent };
//# sourceMappingURL=pm-dashboard-defects.component.js.map