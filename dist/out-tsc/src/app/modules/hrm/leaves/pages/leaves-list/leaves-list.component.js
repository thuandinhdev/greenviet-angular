import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ExportAsService } from 'ngx-export-as';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { NgxRolesService } from 'ngx-permissions';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { LeaveService } from '../../../../../core/services/leave.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { LeavetypeService } from '../../../../../core/services/leavetype.service';
import { CreateLeaveComponent } from '../../components/create-leave/create-leave.component';
import { EditLeaveComponent } from '../../components/edit-leave/edit-leave.component';
import { leaves_status, leave_status_key_value } from '../../../../../core/helpers/hrm.helper';
import { environment } from '../../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
var LeavesListComponent = /** @class */ (function () {
    function LeavesListComponent(translate, ngxRolesService, http, toastr, modalService, exportAsService, authenticationService, leaveService, leavetypeService) {
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.toastr = toastr;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.authenticationService = authenticationService;
        this.leaveService = leaveService;
        this.leavetypeService = leavetypeService;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.leaves = [];
        this.leavesStatus = leaves_status;
        this.leaveStatusKeyValue = leave_status_key_value;
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'leaves_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn"
        };
    }
    LeavesListComponent.prototype.ngOnInit = function () {
        this.getLeaveTypes();
        this.loadLeaveDatatable();
    };
    LeavesListComponent.prototype.loadLeaveDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0, 'desc'],
            columns: [{
                    'sortable': true,
                    'width': "2%",
                    'target': [0]
                }, {
                    'sortable': true,
                    'target': [1]
                }, {
                    'sortable': true,
                    'width': "10%",
                    'target': [2]
                }, {
                    'sortable': false,
                    'width': "15%",
                    'target': [3]
                }, {
                    'sortable': false,
                    'target': [4]
                }, {
                    'sortable': false,
                    'width': "5%",
                    'target': [5]
                }
            ],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('providers.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('providers.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('providers.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }],
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
                _this.http
                    .post(_this.apiUrl + '/api/my-leaves', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.leaves = resp.data;
                    }
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    LeavesListComponent.prototype.getLeaveTypes = function () {
        var _this = this;
        this.leavetypeService.getAll()
            .subscribe(function (data) {
            _this.leavetypes = data;
        });
    };
    LeavesListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('providers.title')).subscribe(function () { });
    };
    LeavesListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    LeavesListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    LeavesListComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.leaves.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    LeavesListComponent.prototype.openLeaveCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(CreateLeaveComponent, this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    LeavesListComponent.prototype.openLeaveEditModal = function (leave) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                leave: leave
            }
        };
        this.modalRef = this.modalService.show(EditLeaveComponent, modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    LeavesListComponent.prototype.changeLeaveStatus = function (leaveId, status) {
        var _this = this;
        var changeLeave = {
            id: leaveId,
            status: status.id
        };
        this.leaveService.changeStatus(changeLeave)
            .subscribe(function (data) {
            _this.toastr.success('Status Changed Successfully.', 'Leaves');
            _this.rerender();
        });
    };
    LeavesListComponent.prototype.deleteLeave = function (id) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.leaveService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success('Leave Deleted Successfully.', 'Leaves');
                    _this.rerender();
                });
            }
        });
    };
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], LeavesListComponent.prototype, "dtElement", void 0);
    LeavesListComponent = __decorate([
        Component({
            selector: 'app-leaves-list',
            templateUrl: './leaves-list.component.html',
            styleUrls: ['./leaves-list.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            NgxRolesService,
            HttpClient,
            ToastrService,
            BsModalService,
            ExportAsService,
            AuthenticationService,
            LeaveService,
            LeavetypeService])
    ], LeavesListComponent);
    return LeavesListComponent;
}());
export { LeavesListComponent };
//# sourceMappingURL=leaves-list.component.js.map