import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var ProjectPlannerSprintService = /** @class */ (function () {
    function ProjectPlannerSprintService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    ProjectPlannerSprintService.prototype.getAll = function (params) {
        return this.http.post(this.apiUrl + "/api/projects/projectsprinttasks", params);
    };
    ProjectPlannerSprintService.prototype.create = function (projectPlanner) {
        return this.http.post(this.apiUrl + "/api/projectplannersprint", projectPlanner);
    };
    ProjectPlannerSprintService.prototype.createTask = function (projectPlanner) {
        return this.http.post(this.apiUrl + "/api/projectsprinttask", projectPlanner);
    };
    ProjectPlannerSprintService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/projectplannersprint/" + id);
    };
    ProjectPlannerSprintService.prototype.deleteTask = function (id) {
        return this.http.delete(this.apiUrl + "/api/projectsprinttask/" + id);
    };
    ProjectPlannerSprintService.prototype.update = function (projectPlanner) {
        return this.http.put(this.apiUrl + "/api/projectplannersprint/" + projectPlanner.id, projectPlanner);
    };
    ProjectPlannerSprintService.prototype.updateTask = function (projectPlanner) {
        return this.http.put(this.apiUrl + "/api/projectsprinttask/" + projectPlanner.id, projectPlanner);
    };
    ProjectPlannerSprintService.prototype.getProjectSprintById = function (id) {
        return this.http.get(this.apiUrl + "/api/projectplannersprint/" + id);
    };
    ProjectPlannerSprintService.prototype.getSprintTaskById = function (id) {
        return this.http.get(this.apiUrl + "/api/projectsprinttask/" + id);
    };
    ProjectPlannerSprintService.prototype.moveTask = function (projectPlanner) {
        return this.http.put(this.apiUrl + "/api/projectsprinttask/move/" + projectPlanner.task_id, projectPlanner);
    };
    ProjectPlannerSprintService.prototype.getSprintByProject = function (id) {
        return this.http.get(this.apiUrl + "/api/projectplannersprint/sprintbyproject/" + id);
    };
    ProjectPlannerSprintService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ProjectPlannerSprintService);
    return ProjectPlannerSprintService;
}());
export { ProjectPlannerSprintService };
//# sourceMappingURL=project-planner-sprint.service.js.map