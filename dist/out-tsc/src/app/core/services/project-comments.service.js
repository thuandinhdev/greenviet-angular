import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var ProjectCommentsService = /** @class */ (function () {
    function ProjectCommentsService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    ProjectCommentsService.prototype.create = function (projectComment) {
        return this.http.post(this.apiUrl + "/api/project-comment", projectComment);
    };
    ProjectCommentsService.prototype.update = function (projectComment) {
        return this.http.put(this.apiUrl + "/api/project-comment/" + projectComment.id, projectComment);
    };
    ProjectCommentsService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/project-comment/" + id);
    };
    ProjectCommentsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ProjectCommentsService);
    return ProjectCommentsService;
}());
export { ProjectCommentsService };
//# sourceMappingURL=project-comments.service.js.map