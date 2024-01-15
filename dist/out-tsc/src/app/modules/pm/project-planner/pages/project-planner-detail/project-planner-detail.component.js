import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgxRolesService } from 'ngx-permissions';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { UserService } from '../../../../../core/services/user.service';
import { ClientService } from '../../../../../core/services/client.service';
import { ProjectService } from '../../../../../core/services/project.service';
import { ProjectPlannerSprintService } from './../../../.././../core/services/project-planner-sprint.service';
import { project_status_key_value } from "./../../../../../core/helpers/pm-helper";
import { EditProjectModalComponent } from './../../components/edit-project-modal/edit-project-modal.component';
import { CreateSprintModalComponent } from './../../components/create-sprint-modal/create-sprint-modal.component';
import { EditSprintModalComponent } from "./../../components/edit-sprint-modal/edit-sprint-modal.component";
import { CreateSprintTaskModalComponent } from './../../components/create-sprint-task-modal/create-sprint-task-modal.component';
import { EditSprintTaskModalComponent } from './../../components/edit-sprint-task-modal/edit-sprint-task-modal.component';
import { CreateTaskModalComponent } from './../../components/create-task-modal/create-task-modal.component';
import { EditTaskModalComponent } from "./../../components/edit-task-modal/edit-task-modal.component";
import { MoveTaskModalComponent } from "./../../components/move-task-modal/move-task-modal.component";
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { environment } from '../../../../../../environments/environment';
var ProjectPlannerDetailComponent = /** @class */ (function () {
    function ProjectPlannerDetailComponent(ngxRolesService, translate, toastr, route, router, modalService, userService, clientService, projectService, projectPlannerSprintService, authenticationService) {
        var _this = this;
        this.ngxRolesService = ngxRolesService;
        this.translate = translate;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.userService = userService;
        this.clientService = clientService;
        this.projectService = projectService;
        this.projectPlannerSprintService = projectPlannerSprintService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.permissions = [];
        this.hideElementsChild = [];
        this.clients = [];
        this.userLists = [];
        this.projectstatusKeyValue = project_status_key_value;
        this.dtOptions = {};
        this.isPageLoaded = false;
        this.datepickerConfigs = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.projectId = params.get('id');
        });
    }
    ProjectPlannerDetailComponent.prototype.ngOnInit = function () {
        if (!this.loginUser.is_client) {
            this.getClient();
        }
        this.getUserkeyBy();
        this.getCheckPermission();
    };
    ProjectPlannerDetailComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ProjectPlannerDetailComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    // rerender(): void {
    // 	setTimeout(() => {
    // 		this.dtTrigger.next();
    // 	});
    // }
    // rerender(): void {
    // 	this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    // 		dtInstance.destroy();
    // 		this.dtTrigger.next();
    // 	});
    // }
    ProjectPlannerDetailComponent.prototype.getClient = function () {
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
    ProjectPlannerDetailComponent.prototype.getUserkeyBy = function () {
        var _this = this;
        this.userService.getUserkeyBy().subscribe(function (data) {
            _this.userLists = data;
        });
    };
    ProjectPlannerDetailComponent.prototype.getCheckPermission = function () {
        var _this = this;
        var role = this.ngxRolesService.getRole('admin');
        this.permissions['project_permission'] = false;
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            this.permissions['project_permission'] = true;
            this.permissions['edit_delete_permission'] = {
                view: true,
                edit: true,
                delete: true
            };
        }
        else {
            this.projectService.getProjectPermission(this.projectId).subscribe(function (res) {
                _this.permissions['edit_delete_permission'] = res;
                if (!_this.permissions.edit_delete_permission.view) {
                    _this.router.navigate(['projects-planner']);
                }
            }, function (error) {
                _this.router.navigate(['projects-planner']);
            });
        }
        this.getProjectById(true);
    };
    ProjectPlannerDetailComponent.prototype.getProjectById = function (isLoad) {
        var _this = this;
        if (isLoad === void 0) { isLoad = false; }
        this.projectService.getProjectById(this.projectId).subscribe(function (data) {
            _this.project = data;
            _this.getSprintByProject(isLoad);
        });
    };
    ProjectPlannerDetailComponent.prototype.getSprintByProject = function (isLoad) {
        var _this = this;
        if (isLoad === void 0) { isLoad = false; }
        this.projectPlannerSprintService.getSprintByProject(this.projectId).subscribe(function (data) {
            _this.sprints = data;
            if (isLoad) {
                _this.loadDatatable();
            }
            _this.isPageLoaded = true;
        });
    };
    ProjectPlannerDetailComponent.prototype.loadDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            paging: true,
            pageLength: that.loginUser.settings.tables_pagination_limit,
            responsive: false,
            autoWidth: false,
            order: [0],
            language: {
                "sEmptyTable": this.translate.instant('common.datatable.sEmptyTable'),
                "sInfo": this.translate.instant('common.datatable.sInfo'),
                "sInfoEmpty": this.translate.instant('common.datatable.sInfoEmpty'),
                "sSearch": "",
                "sInfoPostFix": this.translate.instant('common.datatable.sInfoPostFix'),
                "sInfoThousands": this.translate.instant('common.datatable.sInfoThousands'),
                "sLengthMenu": this.translate.instant('common.datatable.sLengthMenu'),
                "sLoadingRecords": this.translate.instant('common.datatable.sLoadingRecords'),
                "sProcessing": this.translate.instant('common.datatable.sProcessing'),
                "sZeroRecords": this.translate.instant('common.datatable.sZeroRecords'),
                "sSearchPlaceholder": this.translate.instant('common.datatable.sSearchPlaceholder'),
                "oPaginate": {
                    "sFirst": this.translate.instant('common.datatable.oPaginate.sFirst'),
                    "sLast": this.translate.instant('common.datatable.oPaginate.sLast'),
                    "sNext": this.translate.instant('common.datatable.oPaginate.sNext'),
                    "sPrevious": this.translate.instant('common.datatable.oPaginate.sPrevious')
                },
                "oAria": {
                    "sSortAscending": this.translate.instant('common.datatable.oAria.sSortAscending'),
                    "sSortDescending": this.translate.instant('common.datatable.oAria.sSortDescending')
                }
            },
            columnDefs: [
                { width: "30%", targets: [0] },
                { width: "20%", targets: [1] },
                { width: "10%", targets: [2] },
                { width: "10%", targets: [3] },
                { width: "10%", targets: [4] },
                { width: "10%", targets: [5] },
                { width: "10%", targets: [6], sortable: false }
            ]
        };
        setTimeout(function () {
            _this.dtTrigger.next();
        });
    };
    ProjectPlannerDetailComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.projectstatusKeyValue[statusKey];
    };
    ProjectPlannerDetailComponent.prototype.changeProjectStatus = function (projectIDs, status) {
        var _this = this;
        var changeProject = {
            ids: projectIDs,
            status: status.id
        };
        this.projectService.changeStatus(changeProject).subscribe(function (data) {
            _this.getProjectById();
            _this.toastr.success(_this.translate.instant('projects.messages.status'), _this.translate.instant('projects.title'));
        });
    };
    ProjectPlannerDetailComponent.prototype.saveProjectDetail = function (name, value) {
        var _this = this;
        this.project[name] = value;
        if (name == 'start_date' && this.project.end_date < this.project.start_date) {
            this.project.end_date = new Date(value);
        }
        this.projectService.update(this.project).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('projects.messages.update'), _this.translate.instant('projects.title'));
            _this.getProjectById();
        });
    };
    ProjectPlannerDetailComponent.prototype.changeSprintId = function (index) {
        this.hideElementsChild[index] = !this.hideElementsChild[index];
    };
    ProjectPlannerDetailComponent.prototype.openEditProjectModal = function (projectID) {
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
            _this.getProjectById();
        });
    };
    ProjectPlannerDetailComponent.prototype.openCreateSprintModal = function () {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn",
            initialState: {
                project: this.project,
            }
        };
        this.modalRef = this.modalService.show(CreateSprintModalComponent, modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getSprintByProject();
        });
    };
    ProjectPlannerDetailComponent.prototype.openEditSprintModal = function (project, sprintID) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn",
            initialState: {
                project: project,
                sprintId: sprintID,
            }
        };
        this.modalRef = this.modalService.show(EditSprintModalComponent, modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getSprintByProject();
        });
    };
    ProjectPlannerDetailComponent.prototype.deleteSprint = function (sprintId) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('project_planner.sprint.title').toLowerCase(),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.projectPlannerSprintService.delete(sprintId).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('project_planner.sprint.messages.delete'), _this.translate.instant('project_planner.sprint.title'));
                    _this.getSprintByProject();
                });
            }
        });
    };
    ProjectPlannerDetailComponent.prototype.openCreateSprintTaskModal = function (sprintData, type) {
        var _this = this;
        sprintData.type = type;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn",
            initialState: {
                sprint: sprintData
            }
        };
        this.modalRef = this.modalService.show(CreateSprintTaskModalComponent, modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getSprintByProject();
        });
    };
    ProjectPlannerDetailComponent.prototype.openEditSprintTaskModal = function (sprint, taskID) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn",
            initialState: {
                sprint: sprint,
                taskId: taskID,
            }
        };
        this.modalRef = this.modalService.show(EditSprintTaskModalComponent, modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getSprintByProject();
        });
    };
    ProjectPlannerDetailComponent.prototype.openCreateTaskModal = function (project, type) {
        var _this = this;
        project.type = type;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn",
            initialState: {
                project: project
            }
        };
        this.modalRef = this.modalService.show(CreateTaskModalComponent, modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getSprintByProject();
        });
    };
    ProjectPlannerDetailComponent.prototype.openEditTaskModal = function (project, taskID) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn",
            initialState: {
                taskId: taskID,
                project: project
            }
        };
        this.modalRef = this.modalService.show(EditTaskModalComponent, modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getSprintByProject();
        });
    };
    ProjectPlannerDetailComponent.prototype.openMoveTaskModal = function (taskID, sprintID) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                taskId: taskID,
                sprintId: sprintID,
                sprints: this.sprints.sprint_tasks
            }
        };
        this.modalRef = this.modalService.show(MoveTaskModalComponent, modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getSprintByProject();
        });
    };
    ProjectPlannerDetailComponent.prototype.deleteTask = function (taskId) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('project_planner.sprint_task.title4').toLowerCase(),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.projectPlannerSprintService.deleteTask(taskId).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('project_planner.sprint_task.messages.task_delete'), _this.translate.instant('project_planner.sprint_task.title'));
                    _this.getSprintByProject();
                });
            }
        });
    };
    ProjectPlannerDetailComponent.prototype.deleteStory = function (taskId) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('project_planner.sprint_task.title5').toLowerCase(),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.projectPlannerSprintService.deleteTask(taskId).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('project_planner.sprint_task.messages.story_delete'), _this.translate.instant('project_planner.sprint_task.title'));
                    _this.getSprintByProject();
                });
            }
        });
    };
    __decorate([
        ViewChild(DataTableDirective, { static: false }),
        __metadata("design:type", DataTableDirective)
    ], ProjectPlannerDetailComponent.prototype, "dtElement", void 0);
    ProjectPlannerDetailComponent = __decorate([
        Component({
            selector: 'app-project-planner-detail',
            templateUrl: './project-planner-detail.component.html',
            styleUrls: ['./project-planner-detail.component.scss']
        }),
        __metadata("design:paramtypes", [NgxRolesService,
            TranslateService,
            ToastrService,
            ActivatedRoute,
            Router,
            BsModalService,
            UserService,
            ClientService,
            ProjectService,
            ProjectPlannerSprintService,
            AuthenticationService])
    ], ProjectPlannerDetailComponent);
    return ProjectPlannerDetailComponent;
}());
export { ProjectPlannerDetailComponent };
//# sourceMappingURL=project-planner-detail.component.js.map