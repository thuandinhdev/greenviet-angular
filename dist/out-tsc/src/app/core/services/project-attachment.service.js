import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var ProjectAttachmentService = /** @class */ (function () {
    function ProjectAttachmentService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    ProjectAttachmentService.prototype.getAllAttachmentById = function (projectId) {
        return this.http.get(this.apiUrl + "/api/project-attachment/" + projectId);
    };
    ProjectAttachmentService.prototype.create = function (projectAttachment) {
        return this.http.post(this.apiUrl + "/api/project-attachment", projectAttachment);
    };
    ProjectAttachmentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/project-attachment/" + id);
    };
    ProjectAttachmentService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ProjectAttachmentService);
    return ProjectAttachmentService;
}());
export { ProjectAttachmentService };
//# sourceMappingURL=project-attachment.service.js.map