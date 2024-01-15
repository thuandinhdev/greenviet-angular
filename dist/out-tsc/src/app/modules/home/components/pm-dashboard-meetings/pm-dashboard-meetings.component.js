import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var PmDashboardMeetingsComponent = /** @class */ (function () {
    function PmDashboardMeetingsComponent() {
        this.scrollConfig = {};
    }
    PmDashboardMeetingsComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardMeetingsComponent.prototype, "meetings", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardMeetingsComponent.prototype, "loginUser", void 0);
    PmDashboardMeetingsComponent = __decorate([
        Component({
            selector: 'app-pm-dashboard-meetings',
            templateUrl: './pm-dashboard-meetings.component.html',
            styleUrls: ['./pm-dashboard-meetings.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PmDashboardMeetingsComponent);
    return PmDashboardMeetingsComponent;
}());
export { PmDashboardMeetingsComponent };
//# sourceMappingURL=pm-dashboard-meetings.component.js.map