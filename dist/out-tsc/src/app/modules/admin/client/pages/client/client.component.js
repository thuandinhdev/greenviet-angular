import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExportAsService } from 'ngx-export-as';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { ClientService } from '../../../../../core/services/client.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { UserAvatars } from '../../../../../core/helpers/admin.helper';
import { environment } from '../../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
var ClientComponent = /** @class */ (function () {
    function ClientComponent(translate, http, exportAsService, toastr, authenticationService, clientService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.clientService = clientService;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.clients = [];
        this.departments = [];
        this.departments_roles = [];
        this.avatars = UserAvatars;
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'clients_table',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    ClientComponent.prototype.ngOnInit = function () {
        this.loadClientDatatable();
    };
    ClientComponent.prototype.loadClientDatatable = function () {
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
                    'width': "10%",
                    'target': [1]
                },
                {
                    'sortable': true,
                    'width': "10%",
                    'target': [2]
                },
                {
                    'sortable': true,
                    'target': [3]
                },
                {
                    'sortable': false,
                    'target': [4]
                },
                {
                    'sortable': false,
                    'target': [5]
                },
                {
                    'sortable': true,
                    'target': [6]
                },
                {
                    'sortable': false,
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
                    title: this.translate.instant('clients.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('clients.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('clients.title'),
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
                    .post(_this.apiUrl + '/api/all-clients', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.clients = resp.data;
                    _this.loadUserDepartments();
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    ClientComponent.prototype.loadUserDepartments = function () {
        for (var iRow in this.clients) {
            for (var jRow in this.clients[iRow].roles) {
                for (var kRow in this.clients[iRow].roles[jRow].userdepartments) {
                    if ((this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.role_id == this.clients[iRow].roles[jRow].id) && (this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.user_id == this.clients[iRow].id)) {
                        if (!this.departments_roles[this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.user_id + '_' + this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.role_id + '_' + this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.department_id]) {
                            this.departments_roles[this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.user_id + '_' + this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.role_id + '_' + this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.department_id] = [];
                            if (!this.departments[this.clients[iRow].id]) {
                                this.departments[this.clients[iRow].id] = [];
                            }
                            this.departments[this.clients[iRow].id].push({
                                user_id: this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.user_id,
                                role_id: this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.role_id,
                                department_id: this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.department_id,
                                role_name: this.clients[iRow].roles[jRow].name,
                                department_name: this.clients[iRow].roles[jRow].userdepartments[kRow].name
                            });
                        }
                    }
                }
            }
        }
    };
    ClientComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ClientComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ClientComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
            });
            if (_this.clients.length > 0) {
                $('.tfoot_dt').addClass('d-none');
            }
            else {
                $('.tfoot_dt').removeClass('d-none');
            }
        });
    };
    ClientComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, 'clients').subscribe(function () { });
    };
    ClientComponent.prototype.setActiveDeactiveUser = function (value, client) {
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // return;
        var _this = this;
        client.is_active = value;
        this.clientService.setActiveDeactiveUser(client)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('clients.messages.status'), _this.translate.instant('clients.title'));
            _this.rerender();
        }, function (error) {
            _this.rerender();
        });
    };
    ClientComponent.prototype.sendInviteUserMail = function (id) {
        var _this = this;
        this.clientService.sendInviteUserMail(id)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('clients.messages.invite'), _this.translate.instant('clients.title'));
            _this.rerender();
        });
    };
    ClientComponent.prototype.deleteClient = function (id) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text3'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                // --
                // this.toastr.error(this.translate.instant('common.not_allowed'));
                // return;
                _this.clientService.delete(id, { 'UserAvatars': _this.avatars }).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('clients.messages.delete'), _this.translate.instant('clients.title'));
                    _this.rerender();
                });
            }
        });
    };
    ClientComponent.prototype.saveClientDetail = function (index, name, value) {
        var _this = this;
        this.clients[index][name] = value;
        this.clients[index]["type"] = "list";
        this.clientService.update(this.clients[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('clients.messages.update'), _this.translate.instant('clients.title'));
            _this.rerender();
        });
    };
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], ClientComponent.prototype, "dtElement", void 0);
    ClientComponent = __decorate([
        Component({
            selector: 'app-client',
            templateUrl: './client.component.html',
            styleUrls: ['./client.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            HttpClient,
            ExportAsService,
            ToastrService,
            AuthenticationService,
            ClientService])
    ], ClientComponent);
    return ClientComponent;
}());
export { ClientComponent };
//# sourceMappingURL=client.component.js.map