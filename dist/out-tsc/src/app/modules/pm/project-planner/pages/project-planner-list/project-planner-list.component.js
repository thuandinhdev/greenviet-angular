import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxRolesService } from 'ngx-permissions';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ProjectPlannerSprintService } from './../../../.././../core/services/project-planner-sprint.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { ProjectService } from './../../../.././../core/services/project.service';
import { UserService } from '../../../../../core/services/user.service';
import { CreateProjectModalComponent } from './../../components/create-project-modal/create-project-modal.component';
import { EditProjectModalComponent } from './../../components/edit-project-modal/edit-project-modal.component';
import { ProjectLogos } from "../../../../../core/helpers/pm-helper";
import { environment } from '../../../../../../environments/environment';
var ProjectPlannerListComponent = /** @class */ (function () {
    function ProjectPlannerListComponent(translate, toastr, ngxRolesService, modalService, http, projectPlannerService, userService, projectService, route, router, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.toastr = toastr;
        this.ngxRolesService = ngxRolesService;
        this.modalService = modalService;
        this.http = http;
        this.projectPlannerService = projectPlannerService;
        this.userService = userService;
        this.projectService = projectService;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.userLists = [];
        this.isPageLoaded = false;
        this.statusfilterId = 0;
        this.logos = ProjectLogos;
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    ProjectPlannerListComponent.prototype.ngOnInit = function () {
        this.getUserkeyBy();
        this.getAllProjectPlanner();
    };
    ProjectPlannerListComponent.prototype.getCheckPermission = function (project, action) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        if (project.pivot[action]) {
            return true;
        }
        else {
            return false;
        }
    };
    ProjectPlannerListComponent.prototype.getAllProjectPlanner = function () {
        var _this = this;
        this.projectPlannerService.getAll({ 'statusId': this.statusfilterId }).subscribe(function (data) {
            _this.projectPlanners = data;
            _this.isPageLoaded = true;
        });
    };
    ProjectPlannerListComponent.prototype.filterByStatus = function (statusfilterId) {
        this.statusfilterId = statusfilterId;
        this.getAllProjectPlanner();
    };
    ProjectPlannerListComponent.prototype.getUserkeyBy = function () {
        var _this = this;
        this.userService.getUserkeyBy().subscribe(function (data) {
            _this.userLists = data;
        });
    };
    ProjectPlannerListComponent.prototype.openCreateProjectModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(CreateProjectModalComponent, this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getAllProjectPlanner();
        });
    };
    ProjectPlannerListComponent.prototype.openEditProjectModal = function (projectID) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn",
            initialState: {
                projectId: projectID,
            }
        };
        this.modalRef = this.modalService.show(EditProjectModalComponent, modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getAllProjectPlanner();
        });
    };
    ProjectPlannerListComponent.prototype.deleteProject = function (projectId) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text4'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.projectService.delete(projectId, { 'ProjectLogos': _this.logos }).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('projects.messages.delete'), _this.translate.instant('project_planner.title'));
                    _this.getAllProjectPlanner();
                });
            }
        });
    };
    ProjectPlannerListComponent = __decorate([
        Component({
            selector: 'app-project-planner-list',
            templateUrl: './project-planner-list.component.html',
            styleUrls: ['./project-planner-list.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            NgxRolesService,
            BsModalService,
            HttpClient,
            ProjectPlannerSprintService,
            UserService,
            ProjectService,
            ActivatedRoute,
            Router,
            AuthenticationService])
    ], ProjectPlannerListComponent);
    return ProjectPlannerListComponent;
}());
export { ProjectPlannerListComponent };
//# sourceMappingURL=project-planner-list.component.js.map