import { __decorate, __metadata } from "tslib";
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
var PmDashboardAnnouncementsComponent = /** @class */ (function () {
    function PmDashboardAnnouncementsComponent() {
        this.scrollConfig = {};
    }
    PmDashboardAnnouncementsComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardAnnouncementsComponent.prototype, "announcements", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardAnnouncementsComponent.prototype, "loginUser", void 0);
    PmDashboardAnnouncementsComponent = __decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'app-pm-dashboard-announcements',
            templateUrl: './pm-dashboard-announcements.component.html',
            styleUrls: ['./pm-dashboard-announcements.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PmDashboardAnnouncementsComponent);
    return PmDashboardAnnouncementsComponent;
}());
export { PmDashboardAnnouncementsComponent };
//# sourceMappingURL=pm-dashboard-announcements.component.js.map