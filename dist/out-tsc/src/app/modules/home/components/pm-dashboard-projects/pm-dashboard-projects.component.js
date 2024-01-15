import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { project_status_key_class } from "./../../../../core/helpers/pm-helper";
var PmDashboardProjectsComponent = /** @class */ (function () {
    function PmDashboardProjectsComponent() {
        this.scrollConfig = {};
        this.projectstatusKeyClass = project_status_key_class;
    }
    PmDashboardProjectsComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardProjectsComponent.prototype, "projects", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardProjectsComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardProjectsComponent.prototype, "userLists", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardProjectsComponent.prototype, "apiUrl", void 0);
    PmDashboardProjectsComponent = __decorate([
        Component({
            selector: 'app-pm-dashboard-projects',
            templateUrl: './pm-dashboard-projects.component.html',
            styleUrls: ['./pm-dashboard-projects.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PmDashboardProjectsComponent);
    return PmDashboardProjectsComponent;
}());
export { PmDashboardProjectsComponent };
//# sourceMappingURL=pm-dashboard-projects.component.js.map