import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var TaskCommentsService = /** @class */ (function () {
    function TaskCommentsService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    TaskCommentsService.prototype.create = function (taskComment) {
        return this.http.post(this.apiUrl + "/api/task-comment", taskComment);
    };
    TaskCommentsService.prototype.update = function (taskComment) {
        return this.http.put(this.apiUrl + "/api/task-comment/" + taskComment.id, taskComment);
    };
    TaskCommentsService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/task-comment/" + id);
    };
    TaskCommentsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], TaskCommentsService);
    return TaskCommentsService;
}());
export { TaskCommentsService };
//# sourceMappingURL=task-comments.service.js.map