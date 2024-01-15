import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { IncidentService } from '../../../../../core/services/incident.service';
import { incident_status_key_value, incident_severity_key_value } from "./../../../../../core/helpers/pm-helper";
var IncidentDetailsComponent = /** @class */ (function () {
    function IncidentDetailsComponent(translate, toastr, incidentService) {
        this.translate = translate;
        this.toastr = toastr;
        this.incidentService = incidentService;
        this.incidentstatusKeyValue = incident_status_key_value;
        this.incidentSeveritiesKeyValue = incident_severity_key_value;
        this.isPageLoaded = false;
        this.isIncidentTab = 1;
        this.activeIncidentTab = '1';
    }
    IncidentDetailsComponent.prototype.ngOnInit = function () {
        this.getIncidentById(this.incident.id);
    };
    IncidentDetailsComponent.prototype.setActiveIncidentTab = function ($event) {
        this.isIncidentTab = $event.id;
    };
    IncidentDetailsComponent.prototype.getActiveIncidentTab = function (tab) {
        return this.isIncidentTab === tab;
    };
    IncidentDetailsComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.incidentstatusKeyValue[statusKey];
    };
    IncidentDetailsComponent.prototype.getTranslatePriorities = function (statusKey) {
        return this.incidentSeveritiesKeyValue[statusKey];
    };
    IncidentDetailsComponent.prototype.getIncidentById = function (incidentId) {
        var _this = this;
        this.incidentService.getById(incidentId)
            .subscribe(function (data) {
            _this.incident = data;
            _this.isPageLoaded = true;
        });
    };
    IncidentDetailsComponent.prototype.getUsername = function (assignedUser) {
        return assignedUser.firstname + ' ' + assignedUser.lastname;
    };
    IncidentDetailsComponent.prototype.getParseArray = function (string) {
        return JSON.parse(string);
    };
    IncidentDetailsComponent.prototype.changeIncidentStatus = function (incidentId, status) {
        var _this = this;
        var changeIncident = {
            id: incidentId,
            status: status.id
        };
        this.incidentService.changeStatus(changeIncident)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('incidents.messages.status'), _this.translate.instant('incidents.title'));
            _this.getIncidentById(_this.incident.id);
        });
    };
    IncidentDetailsComponent.prototype.changeIncidentSeverity = function (incidentId, priority) {
        var _this = this;
        this.incidentService.changeSeverity({
            id: incidentId,
            priority: priority.id
        }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('incidents.messages.priority'), _this.translate.instant('incidents.title'));
            _this.getIncidentById(_this.incident.id);
        });
    };
    IncidentDetailsComponent.prototype.saveIncidentDetail = function (name, value) {
        var _this = this;
        this.incident[name] = value;
        this.incidentService.update(this.incident)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('incidents.messages.update'), _this.translate.instant('incidents.title'));
            _this.getIncidentById(_this.incident.id);
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IncidentDetailsComponent.prototype, "incident", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IncidentDetailsComponent.prototype, "permission", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IncidentDetailsComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IncidentDetailsComponent.prototype, "apiUrl", void 0);
    IncidentDetailsComponent = __decorate([
        Component({
            selector: 'app-incident-details',
            templateUrl: './incident-details.component.html',
            styleUrls: ['./incident-details.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            IncidentService])
    ], IncidentDetailsComponent);
    return IncidentDetailsComponent;
}());
export { IncidentDetailsComponent };
//# sourceMappingURL=incident-details.component.js.map