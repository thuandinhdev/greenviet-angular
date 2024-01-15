import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { DefectService } from '../../../../../core/services/defect.service';
import { ProjectService } from '../../../../../core/services/project.service';
import { environment } from '../../../../../../environments/environment';
var DefectKanbanComponent = /** @class */ (function () {
    function DefectKanbanComponent(translate, toastr, authenticationService, defectService, projectService) {
        var _this = this;
        this.translate = translate;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.defectService = defectService;
        this.projectService = projectService;
        this.apiUrl = environment.apiUrl;
        this.filter = "my";
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    DefectKanbanComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    DefectKanbanComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getMyProjects()
            .subscribe(function (data) {
            _this.projects = data;
            _this.getDefects();
        });
    };
    DefectKanbanComponent.prototype.getDefects = function (projectId, filter) {
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
        this.defectService.getDefectForKanban(params).subscribe(function (data) {
            _this.setDefects(data);
        });
    };
    DefectKanbanComponent.prototype.setDefects = function (defects) {
        this.assignedDefects = [];
        this.inprogressDefects = [];
        this.openDefects = [];
        this.completedDefects = [];
        for (var iRow in defects) {
            switch (defects[iRow].status) {
                case 1:
                    this.assignedDefects.push(defects[iRow]);
                    break;
                case 3:
                    this.inprogressDefects.push(defects[iRow]);
                    break;
                case 4:
                case 6:
                    this.openDefects.push(defects[iRow]);
                    break;
                case 2:
                case 7:
                case 5:
                    this.completedDefects.push(defects[iRow]);
                    break;
                default:
                    break;
            }
        }
    };
    DefectKanbanComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        var statusTask = [{
                status: 1,
                list: this.converToArray(this.assignedDefects)
            }, {
                status: 3,
                list: this.converToArray(this.inprogressDefects)
            }, {
                status: 4,
                list: this.converToArray(this.openDefects)
            }, {
                status: 5,
                list: this.converToArray(this.completedDefects)
            }];
        this.updateStatusList(statusTask);
    };
    DefectKanbanComponent.prototype.converToArray = function (list) {
        var status_list = [];
        list.forEach(function (element) {
            status_list.push(parseInt(element.id));
        });
        return status_list;
    };
    DefectKanbanComponent.prototype.updateStatusList = function (task) {
        var _this = this;
        this.defectService.updateKanbanStatusList(task)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('defects.messages.status'), _this.translate.instant('defects.title'));
        });
    };
    DefectKanbanComponent = __decorate([
        Component({
            selector: 'app-defect-kanban',
            templateUrl: './defect-kanban.component.html',
            styleUrls: ['./defect-kanban.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            AuthenticationService,
            DefectService,
            ProjectService])
    ], DefectKanbanComponent);
    return DefectKanbanComponent;
}());
export { DefectKanbanComponent };
//# sourceMappingURL=defect-kanban.component.js.map