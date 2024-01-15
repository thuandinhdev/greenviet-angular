import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    TaskService.prototype.create = function (task) {
        return this.http.post(this.apiUrl + "/api/tasks", task);
    };
    TaskService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/tasks");
    };
    TaskService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/tasks/" + id);
    };
    TaskService.prototype.update = function (task) {
        return this.http.put(this.apiUrl + "/api/tasks/" + task.id, task);
    };
    TaskService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/tasks/" + id);
    };
    TaskService.prototype.getTaskActivity = function (id) {
        return this.http.get(this.apiUrl + "/api/activities/Task/" + id);
    };
    TaskService.prototype.changeStatus = function (task) {
        return this.http.post(this.apiUrl + "/api/tasks/" + task.id + "/change-status", { "status": task.status });
    };
    TaskService.prototype.changePriority = function (task) {
        return this.http.post(this.apiUrl + "/api/tasks/" + task.id + "/change-priority", { "priority": task.priority });
    };
    TaskService.prototype.updateNotes = function (task) {
        return this.http.put(this.apiUrl + "/api/tasks/notes/" + task.id, task);
    };
    TaskService.prototype.getGeneratedId = function () {
        return this.http.get(this.apiUrl + "/api/tasks/get-generated-id");
    };
    TaskService.prototype.getParentTask = function (id) {
        return this.http.get(this.apiUrl + "/api/tasks/" + id + "/parent-task", {});
    };
    TaskService.prototype.getsubTaskCountByParent = function (id) {
        return this.http.get(this.apiUrl + "/api/tasks/" + id + "/subtask-count-by-parent", {});
    };
    TaskService.prototype.getTaskForTaskBoard = function (params) {
        return this.http.post(this.apiUrl + "/api/taskboard", params);
    };
    TaskService.prototype.updateStatusList = function (task) {
        return this.http.post(this.apiUrl + "/api/tasks/status-list", task);
    };
    TaskService.prototype.getTaskPermission = function (id, type) {
        return this.http.get(this.apiUrl + "/api/tasks/" + id + "/permission/" + type, {});
    };
    TaskService.prototype.getCalendarTasks = function () {
        return this.http.get(this.apiUrl + "/api/tasks/calendar");
    };
    TaskService.prototype.convertSprintTaskToTask = function (task) {
        return this.http.post(this.apiUrl + "/api/tasks/convertsprinttask-to-task", task);
    };
    TaskService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], TaskService);
    return TaskService;
}());
export { TaskService };
//# sourceMappingURL=task.service.js.map