import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var IncidentCommentService = /** @class */ (function () {
    function IncidentCommentService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    IncidentCommentService.prototype.create = function (incidentComment) {
        return this.http.post(this.apiUrl + "/api/incidentcomment", incidentComment);
    };
    IncidentCommentService.prototype.update = function (incidentComment) {
        return this.http.put(this.apiUrl + "/api/incidentcomment/" + incidentComment.id, incidentComment);
    };
    IncidentCommentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/incidentcomment/" + id);
    };
    IncidentCommentService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], IncidentCommentService);
    return IncidentCommentService;
}());
export { IncidentCommentService };
//# sourceMappingURL=incident-comment.service.js.map