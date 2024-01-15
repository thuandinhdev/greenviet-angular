import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { task_status_key_class } from "./../../../../core/helpers/pm-helper";
var PmDashboardTasksComponent = /** @class */ (function () {
    function PmDashboardTasksComponent() {
        this.scrollConfig = {};
        this.taskStatusKeyClass = task_status_key_class;
    }
    PmDashboardTasksComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardTasksComponent.prototype, "tasks", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardTasksComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardTasksComponent.prototype, "apiUrl", void 0);
    PmDashboardTasksComponent = __decorate([
        Component({
            selector: 'app-pm-dashboard-tasks',
            templateUrl: './pm-dashboard-tasks.component.html',
            styleUrls: ['./pm-dashboard-tasks.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PmDashboardTasksComponent);
    return PmDashboardTasksComponent;
}());
export { PmDashboardTasksComponent };
//# sourceMappingURL=pm-dashboard-tasks.component.js.map