import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var TaskAttachmentService = /** @class */ (function () {
    function TaskAttachmentService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    TaskAttachmentService.prototype.getAllAttachmentById = function (taskId) {
        return this.http.get(this.apiUrl + "/api/task-attachment/" + taskId);
    };
    TaskAttachmentService.prototype.create = function (taskAttachment) {
        return this.http.post(this.apiUrl + "/api/task-attachment", taskAttachment);
    };
    TaskAttachmentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/task-attachment/" + id);
    };
    TaskAttachmentService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], TaskAttachmentService);
    return TaskAttachmentService;
}());
export { TaskAttachmentService };
//# sourceMappingURL=task-attachment.service.js.map