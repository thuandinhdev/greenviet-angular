import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var IncidentService = /** @class */ (function () {
    function IncidentService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    IncidentService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/incident");
    };
    IncidentService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/incident/" + id);
    };
    IncidentService.prototype.create = function (incident) {
        return this.http.post(this.apiUrl + "/api/incident", incident);
    };
    IncidentService.prototype.update = function (incident) {
        return this.http.put(this.apiUrl + "/api/incident/" + incident.id, incident);
    };
    IncidentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/incident/" + id);
    };
    IncidentService.prototype.updateNotes = function (incident) {
        return this.http.put(this.apiUrl + "/api/incident/notes/" + incident.id, incident);
    };
    IncidentService.prototype.changeStatus = function (incident) {
        return this.http.post(this.apiUrl + "/api/incident/" + incident.id + "/change-status", { "status": incident.status });
    };
    IncidentService.prototype.changeSeverity = function (incident) {
        return this.http.post(this.apiUrl + "/api/incident/" + incident.id + "/change-severity", { "priority": incident.priority });
    };
    IncidentService.prototype.getIncidentGeneratedId = function () {
        return this.http.get(this.apiUrl + "/api/incident/get-generated-id");
    };
    IncidentService.prototype.getIncidentPermission = function (id, type) {
        return this.http.get(this.apiUrl + "/api/incident/" + id + "/permission/" + type, {});
    };
    IncidentService.prototype.getIncidentForKanban = function (incident) {
        return this.http.post(this.apiUrl + "/api/incident/kanban", incident);
    };
    IncidentService.prototype.updateKanbanStatusList = function (incident) {
        return this.http.post(this.apiUrl + "/api/incident/update-kanban", incident);
    };
    IncidentService.prototype.getIncidentForCalendar = function (obj) {
        if (obj === void 0) { obj = {}; }
        return this.http.post(this.apiUrl + "/api/incident/calendar", obj);
    };
    IncidentService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], IncidentService);
    return IncidentService;
}());
export { IncidentService };
//# sourceMappingURL=incident.service.js.map