import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ExportAsService } from 'ngx-export-as';
import { TranslateService } from '@ngx-translate/core';
import { NgxRolesService } from 'ngx-permissions';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { UserService } from '../../../../../core/services/user.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { ImportUserComponent } from '../../components/import-user/import-user.component';
import { UserAvatars } from '../../../../../core/helpers/admin.helper';
import { environment } from '../../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
var UserComponent = /** @class */ (function () {
    function UserComponent(translate, ngxRolesService, router, route, http, exportAsService, modalService, toastr, authenticationService, userService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.router = router;
        this.route = route;
        this.http = http;
        this.exportAsService = exportAsService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.users = [];
        this.departments = [];
        this.departments_roles = [];
        this.avatars = UserAvatars;
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'users_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.getAssignUserPermissions();
    }
    UserComponent.prototype.ngOnInit = function () {
        this.loadUserDatatable();
    };
    UserComponent.prototype.loadUserDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            columns: [
                {
                    'sortable': false,
                    'width': "1%",
                    'target': [0]
                },
                {
                    'sortable': true,
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
                    'width': "8%",
                    'target': [4]
                },
                {
                    'sortable': false,
                    'width': "30%",
                    'target': [5]
                },
                {
                    'sortable': false,
                    'width': "5%",
                    'target': [6]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('users.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('users.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('users.title'),
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
                _this.http
                    .post(_this.apiUrl + '/api/all-users', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.users = resp.data;
                        _this.loadUserDepartments();
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
    UserComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    UserComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.users.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    UserComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('users.title')).subscribe(function () { });
    };
    UserComponent.prototype.loadUserDepartments = function () {
        for (var iRow in this.users) {
            this.checkUserHavePermission(iRow, this.users[iRow].permission);
            for (var jRow in this.users[iRow].roles) {
                for (var kRow in this.users[iRow].roles[jRow].user_departments) {
                    if ((this.users[iRow].roles[jRow].user_departments[kRow].pivot.role_id == this.users[iRow].roles[jRow].id) && (this.users[iRow].roles[jRow].user_departments[kRow].pivot.user_id == this.users[iRow].id)) {
                        if (!this.departments_roles[this.users[iRow].roles[jRow].user_departments[kRow].pivot.user_id + '_' + this.users[iRow].roles[jRow].user_departments[kRow].pivot.role_id + '_' + this.users[iRow].roles[jRow].user_departments[kRow].pivot.department_id]) {
                            this.departments_roles[this.users[iRow].roles[jRow].user_departments[kRow].pivot.user_id + '_' + this.users[iRow].roles[jRow].user_departments[kRow].pivot.role_id + '_' + this.users[iRow].roles[jRow].user_departments[kRow].pivot.department_id] = [];
                            if (!this.departments[this.users[iRow].id]) {
                                this.departments[this.users[iRow].id] = [];
                            }
                            this.departments[this.users[iRow].id].push({
                                user_id: this.users[iRow].roles[jRow].user_departments[kRow].pivot.user_id,
                                role_id: this.users[iRow].roles[jRow].user_departments[kRow].pivot.role_id,
                                department_id: this.users[iRow].roles[jRow].user_departments[kRow].pivot.department_id,
                                role_name: this.users[iRow].roles[jRow].name,
                                department_name: this.users[iRow].roles[jRow].user_departments[kRow].name
                            });
                        }
                    }
                }
            }
        }
    };
    UserComponent.prototype.getAssignUserPermissions = function () {
        var _this = this;
        this.userService.getUserPermissions()
            .subscribe(function (data) {
            _this.assignUserPermissions = data;
        });
    };
    UserComponent.prototype.setActiveDeactiveUser = function (value, user) {
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // return;
        var _this = this;
        user.is_active = value;
        this.userService.setActiveDeactiveUser(user)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('users.messages.status'), _this.translate.instant('users.title'));
            _this.rerender();
        }, function (error) {
            _this.rerender();
        });
    };
    UserComponent.prototype.sendInviteUserMail = function (id) {
        var _this = this;
        this.userService.sendInviteUserMail(id)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('users.messages.invite'), _this.translate.instant('users.title'));
            _this.rerender();
        });
    };
    UserComponent.prototype.checkUserHavePermission = function (iRow, userPermissions) {
        var roleName = this.ngxRolesService.getRole('admin');
        var allowedPermission = {
            isEditable: false,
            isDeletable: false
        };
        if (roleName && roleName.name == 'admin' || this.loginUser.is_super_admin) {
            allowedPermission = {
                isEditable: true,
                isDeletable: true
            };
        }
        if (!userPermissions) {
            allowedPermission = {
                isEditable: false,
                isDeletable: false
            };
        }
        else {
            if (userPermissions == 'all') {
                for (var iRow_1 in this.assignUserPermissions) {
                    if (this.assignUserPermissions[iRow_1].id == this.loginUser.id) {
                        allowedPermission = {
                            isEditable: true,
                            isDeletable: true
                        };
                    }
                }
            }
            else {
                var loginUserPermissions = JSON.parse(userPermissions);
                if (loginUserPermissions[this.loginUser.id]) {
                    for (var iRow_2 in loginUserPermissions[this.loginUser.id]) {
                        if (loginUserPermissions[this.loginUser.id][iRow_2] == "edit") {
                            allowedPermission.isEditable = true;
                        }
                        if (loginUserPermissions[this.loginUser.id][iRow_2] == "delete") {
                            allowedPermission.isDeletable = true;
                        }
                    }
                }
            }
        }
        this.users[iRow].department_role_perm = allowedPermission;
    };
    UserComponent.prototype.openUserImportModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(ImportUserComponent, this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('users.messages.import'), _this.translate.instant('users.title'));
            _this.rerender();
        });
    };
    UserComponent.prototype.userDelete = function (userId) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text2'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                // --
                // this.toastr.error(this.translate.instant('common.not_allowed'));
                // return;
                _this.userService.delete(userId, { 'UserAvatars': _this.avatars }).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('users.messages.delete'), _this.translate.instant('users.title'));
                    _this.rerender();
                });
            }
        });
    };
    UserComponent.prototype.saveUserDetail = function (index, name, value) {
        var _this = this;
        this.users[index][name] = value;
        this.users[index]["type"] = "list";
        this.userService.update(this.users[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('users.messages.update'), _this.translate.instant('users.title'));
            _this.rerender();
        });
    };
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], UserComponent.prototype, "dtElement", void 0);
    UserComponent = __decorate([
        Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            NgxRolesService,
            Router,
            ActivatedRoute,
            HttpClient,
            ExportAsService,
            BsModalService,
            ToastrService,
            AuthenticationService,
            UserService])
    ], UserComponent);
    return UserComponent;
}());
export { UserComponent };
//# sourceMappingURL=user.component.js.map