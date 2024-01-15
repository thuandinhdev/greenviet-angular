import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ExportAsService } from 'ngx-export-as';
import { ToastrService } from 'ngx-toastr';
import { NgxRolesService } from 'ngx-permissions';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { RoleService } from '../../../../../core/services/role.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { CreateRoleModalComponent } from '../../components/create-role-modal/create-role-modal.component';
import { EditRoleModalComponent } from '../../components/edit-role-modal/edit-role-modal.component';
import { environment } from '../../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
var RoleComponent = /** @class */ (function () {
    function RoleComponent(translate, ngxRolesService, http, toastr, modalService, exportAsService, authenticationService, roleService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.toastr = toastr;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.authenticationService = authenticationService;
        this.roleService = roleService;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.roles = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'role_table',
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
    RoleComponent.prototype.ngOnInit = function () {
        this.loadRoleDatatable();
    };
    RoleComponent.prototype.loadRoleDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            columns: [{
                    'sortable': true,
                    'width': "2%",
                    'target': [0]
                }, {
                    'sortable': true,
                    'target': [1]
                }, {
                    'sortable': true,
                    'target': [2]
                }, {
                    'sortable': false,
                    'target': [3]
                }, {
                    'sortable': false,
                    'width': "5%",
                    'target': [4]
                }
            ],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('roles.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('roles.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('roles.title'),
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
                    .post(_this.apiUrl + '/api/all-roles', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.roles = resp.data;
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
    RoleComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('roles.title')).subscribe(function () { });
    };
    RoleComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    RoleComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    RoleComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.roles.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    RoleComponent.prototype.getCheckRole = function (role) {
        var permission = false, rolePerm = this.ngxRolesService.getRole('admin');
        if (role.id == 1 || role.id == 2 || role.id == 3 || role.id == 4) {
            return false;
        }
        if (rolePerm.name == 'admin' || this.loginUser.is_super_admin) {
            return true;
        }
        else {
            return false;
        }
    };
    RoleComponent.prototype.openRoleCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(CreateRoleModalComponent, this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    RoleComponent.prototype.openRoleEditModal = function (role) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                role: role
            }
        };
        this.modalRef = this.modalService.show(EditRoleModalComponent, modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    RoleComponent.prototype.roleDelete = function (roleId) {
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
                _this.roleService.delete(roleId)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('roles.messages.delete'), _this.translate.instant('roles.title'));
                    _this.rerender();
                });
            }
        });
    };
    RoleComponent.prototype.saveRoleDetail = function (index, name, value) {
        var _this = this;
        this.roles[index][name] = value;
        this.roleService.update(this.roles[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('roles.messages.update'), _this.translate.instant('roles.title'));
            _this.rerender();
        });
    };
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], RoleComponent.prototype, "dtElement", void 0);
    RoleComponent = __decorate([
        Component({
            selector: 'app-role',
            templateUrl: './role.component.html',
            styleUrls: ['./role.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            NgxRolesService,
            HttpClient,
            ToastrService,
            BsModalService,
            ExportAsService,
            AuthenticationService,
            RoleService])
    ], RoleComponent);
    return RoleComponent;
}());
export { RoleComponent };
//# sourceMappingURL=role.component.js.map