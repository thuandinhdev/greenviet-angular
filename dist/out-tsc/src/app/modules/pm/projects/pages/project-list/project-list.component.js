import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ExportAsService } from 'ngx-export-as';
import { ToastrService } from 'ngx-toastr';
import { NgxRolesService } from 'ngx-permissions';
import { TranslateService } from '@ngx-translate/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { ProjectService } from '../../../../../core/services/project.service';
import { UserService } from '../../../../../core/services/user.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { ProjectImportComponent } from './../../components/project-import/project-import.component';
import { project_status_key_value, ProjectLogos } from "./../../../../../core/helpers/pm-helper";
import { environment } from '../../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent(translate, ngxRolesService, modalService, http, router, route, exportAsService, toastr, projectService, userService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.modalService = modalService;
        this.http = http;
        this.router = router;
        this.route = route;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.projectService = projectService;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.projects = [];
        this.userLists = [];
        this.isPageLoaded = false;
        this.projectstatusKeyValue = project_status_key_value;
        this.logos = ProjectLogos;
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'projects_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        this.getUserkeyBy();
        this.loadProjectDatatable();
    };
    ProjectListComponent.prototype.getUserkeyBy = function () {
        var _this = this;
        this.userService.getUserkeyBy().subscribe(function (data) {
            _this.userLists = data;
        });
    };
    ProjectListComponent.prototype.loadProjectDatatable = function () {
        var _this = this;
        this.statusfilterId = 0;
        if (this.route.snapshot.params['statusId'])
            this.statusfilterId = this.route.snapshot.params['statusId'];
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0],
            columns: [
                {
                    'sortable': false,
                    'width': "5%",
                    'target': [0]
                },
                {
                    'sortable': true,
                    'width': "10%",
                    'target': [1]
                },
                {
                    'sortable': true,
                    'width': "21%",
                    'target': [2]
                },
                {
                    'sortable': true,
                    'width': "22%",
                    'target': [3]
                },
                {
                    'sortable': true,
                    'width': "5%",
                    'target': [4]
                },
                {
                    'sortable': true,
                    'width': "5%",
                    'target': [5]
                },
                {
                    'sortable': false,
                    'width': "17%",
                    'target': [6]
                },
                {
                    'sortable': true,
                    'width': "10%",
                    'target': [7]
                },
                {
                    'sortable': false,
                    'width': "5%",
                    'target': [8]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('projects.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('projects.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('projects.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }
            ],
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
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters = {
                    columns: dataTablesParameters.columns,
                    draw: dataTablesParameters.draw,
                    length: dataTablesParameters.length,
                    order: dataTablesParameters.order,
                    search: dataTablesParameters.search,
                    start: dataTablesParameters.start,
                    statusId: _this.statusfilterId,
                };
                _this.http
                    .post(_this.apiUrl + '/api/all-projects', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.isPageLoaded = true;
                    _this.projects = resp.data;
                    _this.countStatus = resp;
                    _this.countStatus = _this.countStatus.statusCount;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    ProjectListComponent.prototype.getCheckPermission = function (project, action) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        if (action == 'view') {
            for (var iRow in project.users) {
                if (project.users[iRow].id == this.loginUser.id) {
                    return true;
                }
            }
        }
        // if(project.pivot[action] && !this.loginUser.is_client) {
        if (project.pivot[action]) {
            return true;
        }
        else {
            return false;
        }
    };
    ProjectListComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.projectstatusKeyValue[statusKey];
    };
    ProjectListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ProjectListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ProjectListComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.projects.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    ProjectListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('projects.title')).subscribe(function () { });
    };
    ProjectListComponent.prototype.deleteProject = function (id) {
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
                _this.projectService.delete(id, { 'ProjectLogos': _this.logos }).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('projects.messages.delete'), _this.translate.instant('projects.title'));
                    _this.rerender();
                });
            }
        });
    };
    ProjectListComponent.prototype.changeProjectStatus = function (projectIDs, status) {
        var _this = this;
        var changeProject = {
            ids: projectIDs,
            status: status.id
        };
        this.projectService.changeStatus(changeProject)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('projects.messages.status'), _this.translate.instant('projects.title'));
            _this.rerender();
        });
    };
    ProjectListComponent.prototype.filterByStatus = function (statusID) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.navigate(['projects', statusID]);
    };
    ProjectListComponent.prototype.openProjectImportModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(ProjectImportComponent, this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('projects.messages.import'), _this.translate.instant('projects.title'));
            _this.rerender();
        });
    };
    ProjectListComponent.prototype.saveProjectDetail = function (index, name, value) {
        var _this = this;
        this.projects[index][name] = value;
        this.projectService.update(this.projects[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('projects.messages.update'), _this.translate.instant('projects.title'));
            _this.rerender();
        });
    };
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], ProjectListComponent.prototype, "dtElement", void 0);
    ProjectListComponent = __decorate([
        Component({
            selector: 'app-project-list',
            templateUrl: './project-list.component.html',
            styleUrls: ['./project-list.component.scss'],
            preserveWhitespaces: true
        }),
        __metadata("design:paramtypes", [TranslateService,
            NgxRolesService,
            BsModalService,
            HttpClient,
            Router,
            ActivatedRoute,
            ExportAsService,
            ToastrService,
            ProjectService,
            UserService,
            AuthenticationService])
    ], ProjectListComponent);
    return ProjectListComponent;
}());
export { ProjectListComponent };
//# sourceMappingURL=project-list.component.js.map