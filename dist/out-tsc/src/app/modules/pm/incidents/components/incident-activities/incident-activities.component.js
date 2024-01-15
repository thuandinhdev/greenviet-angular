import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var IncidentActivitiesComponent = /** @class */ (function () {
    function IncidentActivitiesComponent() {
        this.scrollConfig = {};
    }
    IncidentActivitiesComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IncidentActivitiesComponent.prototype, "incident", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IncidentActivitiesComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IncidentActivitiesComponent.prototype, "apiUrl", void 0);
    IncidentActivitiesComponent = __decorate([
        Component({
            selector: 'app-incident-activities',
            templateUrl: './incident-activities.component.html',
            styleUrls: ['./incident-activities.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], IncidentActivitiesComponent);
    return IncidentActivitiesComponent;
}());
export { IncidentActivitiesComponent };
//# sourceMappingURL=incident-activities.component.js.map