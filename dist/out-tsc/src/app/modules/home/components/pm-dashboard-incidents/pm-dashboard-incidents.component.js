import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { incident_status_key_class } from "./../../../../core/helpers/pm-helper";
var PmDashboardIncidentsComponent = /** @class */ (function () {
    function PmDashboardIncidentsComponent() {
        this.scrollConfig = {};
        this.incidentStatusKeyClass = incident_status_key_class;
    }
    PmDashboardIncidentsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardIncidentsComponent.prototype, "incidents", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardIncidentsComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardIncidentsComponent.prototype, "apiUrl", void 0);
    PmDashboardIncidentsComponent = __decorate([
        Component({
            selector: 'app-pm-dashboard-incidents',
            templateUrl: './pm-dashboard-incidents.component.html',
            styleUrls: ['./pm-dashboard-incidents.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PmDashboardIncidentsComponent);
    return PmDashboardIncidentsComponent;
}());
export { PmDashboardIncidentsComponent };
//# sourceMappingURL=pm-dashboard-incidents.component.js.map