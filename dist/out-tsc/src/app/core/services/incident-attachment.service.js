import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var IncidentAttachmentService = /** @class */ (function () {
    function IncidentAttachmentService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    IncidentAttachmentService.prototype.getAllAttachmentById = function (incidentId) {
        return this.http.get(this.apiUrl + "/api/incidentattachment/" + incidentId);
    };
    IncidentAttachmentService.prototype.create = function (incidentAttachment) {
        return this.http.post(this.apiUrl + "/api/incidentattachment", incidentAttachment);
    };
    IncidentAttachmentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/incidentattachment/" + id);
    };
    IncidentAttachmentService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], IncidentAttachmentService);
    return IncidentAttachmentService;
}());
export { IncidentAttachmentService };
//# sourceMappingURL=incident-attachment.service.js.map