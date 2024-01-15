import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var DefectService = /** @class */ (function () {
    function DefectService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    DefectService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/defect");
    };
    DefectService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/defect/" + id);
    };
    DefectService.prototype.create = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect", defect);
    };
    DefectService.prototype.update = function (defect) {
        return this.http.put(this.apiUrl + "/api/defect/" + defect.id, defect);
    };
    DefectService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/defect/" + id);
    };
    DefectService.prototype.updateNotes = function (defect) {
        return this.http.put(this.apiUrl + "/api/defect/notes/" + defect.id, defect);
    };
    DefectService.prototype.changeStatus = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect/" + defect.id + "/change-status", { "status": defect.status });
    };
    DefectService.prototype.changeSeverity = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect/" + defect.id + "/change-severity", { "severity": defect.severity });
    };
    DefectService.prototype.getDefectGeneratedId = function () {
        return this.http.get(this.apiUrl + "/api/defect/get-generated-id");
    };
    DefectService.prototype.getDefectPermission = function (id, type) {
        return this.http.get(this.apiUrl + "/api/defect/" + id + "/permission/" + type, {});
    };
    DefectService.prototype.getDefectForKanban = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect/kanban", defect);
    };
    DefectService.prototype.updateKanbanStatusList = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect/update-kanban", defect);
    };
    DefectService.prototype.getDefectForCalendar = function (obj) {
        if (obj === void 0) { obj = {}; }
        return this.http.post(this.apiUrl + "/api/defect/calendar", obj);
    };
    DefectService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], DefectService);
    return DefectService;
}());
export { DefectService };
//# sourceMappingURL=defect.service.js.map