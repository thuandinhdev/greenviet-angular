import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ProjectService } from '../../../../../core/services/project.service';
import { ClientService } from '../../../../../core/services/client.service';
import { project_status_key_value } from "./../../../../../core/helpers/pm-helper";
var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent(translate, projectService, clientService, toastr) {
        this.translate = translate;
        this.projectService = projectService;
        this.clientService = clientService;
        this.toastr = toastr;
        this.projectSourceKeyValue = [];
        this.clients = [];
        this.projectstatusKeyValue = project_status_key_value;
        this.datepickerConfigs = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        if (!this.loginUser.is_client) {
            this.getClient();
        }
    };
    ProjectDetailsComponent.prototype.getClient = function () {
        var that = this;
        that.clientService.getClientsWithTrashed().subscribe(function (data) {
            for (var iRow in data) {
                that.clients.push({
                    label: data[iRow].firstname + " " + data[iRow].lastname,
                    value: data[iRow].id
                });
            }
        });
    };
    ProjectDetailsComponent.prototype.changeProjectStatus = function (projectIDs, status) {
        var _this = this;
        var changeProject = {
            ids: projectIDs,
            status: status.id
        };
        this.projectService.changeStatus(changeProject)
            .subscribe(function (data) {
            _this.getProjectById(_this.project.id);
            _this.toastr.success(_this.translate.instant('projects.messages.status'), _this.translate.instant('projects.title'));
        });
    };
    ProjectDetailsComponent.prototype.getParseArray = function (string) {
        return JSON.parse(string);
    };
    ProjectDetailsComponent.prototype.saveProjectDetail = function (name, value) {
        var _this = this;
        this.project[name] = value;
        if (name == 'start_date' && this.project.end_date < this.project.start_date) {
            this.project.end_date = new Date(value);
        }
        this.projectService.update(this.project)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('projects.messages.update'), _this.translate.instant('projects.title'));
            _this.getProjectById(_this.project.id);
        });
    };
    ProjectDetailsComponent.prototype.getProjectById = function (projectId) {
        var _this = this;
        this.projectService.getById(projectId)
            .subscribe(function (data) {
            _this.project = data;
        });
    };
    ProjectDetailsComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.projectstatusKeyValue[statusKey];
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectDetailsComponent.prototype, "project", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectDetailsComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectDetailsComponent.prototype, "permissions", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectDetailsComponent.prototype, "apiUrl", void 0);
    ProjectDetailsComponent = __decorate([
        Component({
            selector: 'app-project-details',
            templateUrl: './project-details.component.html',
            styleUrls: ['./project-details.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ProjectService,
            ClientService,
            ToastrService])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());
export { ProjectDetailsComponent };
//# sourceMappingURL=project-details.component.js.map