import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxRolesService } from 'ngx-permissions';
import { ToastrService } from 'ngx-toastr';
import { ExportAsService } from 'ngx-export-as';
import { TranslateService } from '@ngx-translate/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { TimesheetService } from '../../../../../core/services/timesheet.service';
import { ProjectTimesheetEditModalComponent } from '../../components/project-timesheet-edit-modal/project-timesheet-edit-modal.component';
var ProjectTimesheetComponent = /** @class */ (function () {
    function ProjectTimesheetComponent(translate, http, toastr, exportAsService, ngxRolesService, modalService, timesheetService) {
        this.translate = translate;
        this.http = http;
        this.toastr = toastr;
        this.exportAsService = exportAsService;
        this.ngxRolesService = ngxRolesService;
        this.modalService = modalService;
        this.timesheetService = timesheetService;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.timesheets = [];
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'timesheets_table',
        };
    }
    ProjectTimesheetComponent.prototype.ngOnInit = function () {
        this.loadTimesheetDatatable();
    };
    ProjectTimesheetComponent.prototype.loadTimesheetDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [3],
            columns: [
                {
                    'sortable': true,
                    'target': [0]
                },
                {
                    'sortable': false,
                    'target': [1]
                },
                {
                    'sortable': true,
                    'target': [2]
                },
                {
                    'sortable': true,
                    'target': [3]
                },
                {
                    'sortable': true,
                    'target': [4]
                },
                {
                    'sortable': true,
                    'target': [5]
                },
                {
                    'sortable': false,
                    'target': [6]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('timesheet.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('timesheet.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('timesheet.title'),
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
                    project_ids: _this.project.id,
                };
                _this.http.post(_this.apiUrl + '/api/project-timesheets', dataTablesParameters, {}).subscribe(function (resp) {
                    _this.isPageLoaded = true;
                    _this.timesheets = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    ProjectTimesheetComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('timesheet.title')).subscribe(function () { });
    };
    ProjectTimesheetComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ProjectTimesheetComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ProjectTimesheetComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    ProjectTimesheetComponent.prototype.getCheckPermission = function (timesheet) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        else if (timesheet.created_user_id == this.loginUser.id) {
            return true;
        }
        else {
            return false;
        }
    };
    ProjectTimesheetComponent.prototype.saveTimesheetDetail = function (index, name, value) {
        var _this = this;
        this.timesheets[index][name] = value;
        this.timesheetService.update(this.timesheets[index]).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('timesheet.messages.update'), _this.translate.instant('timesheet.title'));
            _this.rerender();
        });
    };
    ProjectTimesheetComponent.prototype.editTimesheet = function (timesheet) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                timesheet: timesheet
            }
        };
        this.modalRef = this.modalService.show(ProjectTimesheetEditModalComponent, modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    ProjectTimesheetComponent.prototype.deleteTimesheet = function (id) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + this.translate.instant('timesheet.title').toLowerCase() + '!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.timesheetService.delete(id).subscribe(function (data) {
                    _this.rerender();
                    _this.toastr.success(_this.translate.instant('timesheet.messages.delete'), _this.translate.instant('timesheet.title'));
                });
            }
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectTimesheetComponent.prototype, "project", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectTimesheetComponent.prototype, "apiUrl", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectTimesheetComponent.prototype, "loginUser", void 0);
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], ProjectTimesheetComponent.prototype, "dtElement", void 0);
    ProjectTimesheetComponent = __decorate([
        Component({
            selector: 'app-project-timesheet',
            templateUrl: './project-timesheet.component.html',
            styleUrls: ['./project-timesheet.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            HttpClient,
            ToastrService,
            ExportAsService,
            NgxRolesService,
            BsModalService,
            TimesheetService])
    ], ProjectTimesheetComponent);
    return ProjectTimesheetComponent;
}());
export { ProjectTimesheetComponent };
//# sourceMappingURL=project-timesheet.component.js.map