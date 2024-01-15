import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { IncidentService } from '../../../../../core/services/incident.service';
import { ProjectService } from '../../../../../core/services/project.service';
import { environment } from '../../../../../../environments/environment';
var IncidentKanbanComponent = /** @class */ (function () {
    function IncidentKanbanComponent(translate, toastr, authenticationService, incidentService, projectService) {
        var _this = this;
        this.translate = translate;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.incidentService = incidentService;
        this.projectService = projectService;
        this.apiUrl = environment.apiUrl;
        this.filter = "my";
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    IncidentKanbanComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    IncidentKanbanComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getMyProjects()
            .subscribe(function (data) {
            _this.projects = data;
            _this.getIncidents();
        });
    };
    IncidentKanbanComponent.prototype.getIncidents = function (projectId, filter) {
        var _this = this;
        if (projectId === void 0) { projectId = null; }
        if (filter === void 0) { filter = "my"; }
        var params = {};
        if (projectId == null) {
            params = {
                'filter': filter
            };
        }
        else {
            params = {
                'project_id': projectId,
                'filter': filter
            };
        }
        this.projectId = projectId;
        this.incidentService.getIncidentForKanban(params).subscribe(function (data) {
            _this.setIncidents(data);
        });
    };
    IncidentKanbanComponent.prototype.setIncidents = function (incidents) {
        this.assignedIncidents = [];
        this.inprogressIncidents = [];
        this.openIncidents = [];
        this.completedIncidents = [];
        for (var iRow in incidents) {
            switch (incidents[iRow].status) {
                case 1:
                    this.assignedIncidents.push(incidents[iRow]);
                    break;
                case 3:
                    this.inprogressIncidents.push(incidents[iRow]);
                    break;
                case 4:
                case 6:
                    this.openIncidents.push(incidents[iRow]);
                    break;
                case 2:
                case 5:
                case 7:
                    this.completedIncidents.push(incidents[iRow]);
                    break;
                default:
                    break;
            }
        }
    };
    IncidentKanbanComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        var statusTask = [{
                status: 1,
                list: this.converToArray(this.assignedIncidents)
            }, {
                status: 3,
                list: this.converToArray(this.inprogressIncidents)
            }, {
                status: 4,
                list: this.converToArray(this.openIncidents)
            }, {
                status: 5,
                list: this.converToArray(this.completedIncidents)
            }];
        this.updateStatusList(statusTask);
    };
    IncidentKanbanComponent.prototype.converToArray = function (list) {
        var status_list = [];
        list.forEach(function (element) {
            status_list.push(parseInt(element.id));
        });
        return status_list;
    };
    IncidentKanbanComponent.prototype.updateStatusList = function (task) {
        var _this = this;
        this.incidentService.updateKanbanStatusList(task)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('incidents.messages.status'), _this.translate.instant('incidents.title'));
        });
    };
    IncidentKanbanComponent = __decorate([
        Component({
            selector: 'app-incident-kanban',
            templateUrl: './incident-kanban.component.html',
            styleUrls: ['./incident-kanban.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            AuthenticationService,
            IncidentService,
            ProjectService])
    ], IncidentKanbanComponent);
    return IncidentKanbanComponent;
}());
export { IncidentKanbanComponent };
//# sourceMappingURL=incident-kanban.component.js.map