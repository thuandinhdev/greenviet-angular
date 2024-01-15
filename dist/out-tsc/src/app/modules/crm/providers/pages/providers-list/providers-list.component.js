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
import { ProviderService } from '../../../../../core/services/provider.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { CreateProviderComponent } from '../../components/create-provider/create-provider.component';
import { EditProviderComponent } from '../../components/edit-provider/edit-provider.component';
import { environment } from '../../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
var ProvidersListComponent = /** @class */ (function () {
    function ProvidersListComponent(translate, ngxRolesService, http, toastr, modalService, exportAsService, authenticationService, providerService) {
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.toastr = toastr;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.authenticationService = authenticationService;
        this.providerService = providerService;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.providers = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'provider_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn"
        };
    }
    ProvidersListComponent.prototype.ngOnInit = function () {
        this.loadProviderDatatable();
    };
    ProvidersListComponent.prototype.loadProviderDatatable = function () {
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
                    'target': [2]
                }, {
                    'sortable': true,
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
                    .post(_this.apiUrl + '/api/all-providers', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.providers = resp.data;
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
    ProvidersListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('providers.title')).subscribe(function () { });
    };
    ProvidersListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ProvidersListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ProvidersListComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.providers.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    ProvidersListComponent.prototype.openProviderCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(CreateProviderComponent, this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    ProvidersListComponent.prototype.openProviderEditModal = function (provider) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                provider: provider
            }
        };
        this.modalRef = this.modalService.show(EditProviderComponent, modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    ProvidersListComponent.prototype.deleteProvider = function (id) {
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
                _this.providerService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('providers.messages.delete'), _this.translate.instant('providers.title'));
                    _this.rerender();
                });
            }
        });
    };
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], ProvidersListComponent.prototype, "dtElement", void 0);
    ProvidersListComponent = __decorate([
        Component({
            selector: 'app-providers-list',
            templateUrl: './providers-list.component.html',
            styleUrls: ['./providers-list.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            NgxRolesService,
            HttpClient,
            ToastrService,
            BsModalService,
            ExportAsService,
            AuthenticationService,
            ProviderService])
    ], ProvidersListComponent);
    return ProvidersListComponent;
}());
export { ProvidersListComponent };
//# sourceMappingURL=providers-list.component.js.map