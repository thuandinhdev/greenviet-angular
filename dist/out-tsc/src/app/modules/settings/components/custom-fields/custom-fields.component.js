import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import { ExportAsService } from 'ngx-export-as';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { CustomFieldsService } from '../../../../core/services/custom-fields.service';
import { HelperService } from '../../../../core/services/helper.service';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { CustomFieldCreateComponent } from './../custom-field-create/custom-field-create.component';
import { CustomFieldEditComponent } from './../custom-field-edit/custom-field-edit.component';
import { environment } from '../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
var CustomFieldsComponent = /** @class */ (function () {
    function CustomFieldsComponent(translate, modalService, http, exportAsService, toastr, authenticationService, customFieldsService, helperService) {
        var _this = this;
        this.translate = translate;
        this.modalService = modalService;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.customFieldsService = customFieldsService;
        this.helperService = helperService;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.customFields = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'custom_field_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    CustomFieldsComponent.prototype.ngOnInit = function () {
        this.getAllFormFields();
        this.loadCustomFieldDatatable();
    };
    CustomFieldsComponent.prototype.loadCustomFieldDatatable = function () {
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
                    'target': [4]
                }, {
                    'sortable': false,
                    'width': "5%",
                    'target': [5]
                }],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('settings.custom_fields.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('settings.custom_fields.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('settings.custom_fields.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }],
            language: {
                sLengthMenu: "Show _MENU_",
                sSearch: "",
                sSearchPlaceholder: "Search ..."
            },
            ajax: function (dataTablesParameters, callback) {
                _this.http
                    .post(_this.apiUrl + '/api/all-customfields', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.customFields = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    CustomFieldsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, 'customField').subscribe(function () { });
    };
    CustomFieldsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    CustomFieldsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    CustomFieldsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.customFields.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    CustomFieldsComponent.prototype.getAllFormFields = function () {
        var _this = this;
        this.customFieldsService.getFormTables()
            .subscribe(function (data) {
            _this.formTables = data;
            var keyValue = [];
            for (var iRow = 0; iRow < _this.formTables.length; iRow++) {
                keyValue[_this.formTables[iRow].id] = _this.formTables[iRow].name;
            }
            _this.formTables = keyValue;
        });
    };
    CustomFieldsComponent.prototype.changeStatus = function (event, id) {
        var _this = this;
        this.customFieldsService.changeStatus({ id: id, status: event })
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.custom_fields.messages.status'), _this.translate.instant('settings.custom_fields.title'));
            _this.rerender();
        });
    };
    CustomFieldsComponent.prototype.openCustomFieldCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(CustomFieldCreateComponent, this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    CustomFieldsComponent.prototype.openCustomFieldEditModal = function (CustomField) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered animated fadeIn",
            initialState: {
                customField: CustomField
            }
        };
        this.modalRef = this.modalService.show(CustomFieldEditComponent, modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    CustomFieldsComponent.prototype.removeCustomField = function (id) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('settings.custom_fields.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.customFieldsService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('settings.custom_fields.messages.delete'), _this.translate.instant('settings.custom_fields.title'));
                    _this.rerender();
                });
            }
        });
    };
    CustomFieldsComponent.prototype.saveCustomFieldDetail = function (index, name, value) {
        var _this = this;
        this.customFields[index][name] = value;
        this.customFieldsService.update(this.customFields[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.custom_fields.messages.update'), _this.translate.instant('settings.custom_fields.title'));
            _this.rerender();
        });
    };
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], CustomFieldsComponent.prototype, "dtElement", void 0);
    CustomFieldsComponent = __decorate([
        Component({
            selector: 'app-custom-fields',
            templateUrl: './custom-fields.component.html',
            styleUrls: ['./custom-fields.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalService,
            HttpClient,
            ExportAsService,
            ToastrService,
            AuthenticationService,
            CustomFieldsService,
            HelperService])
    ], CustomFieldsComponent);
    return CustomFieldsComponent;
}());
export { CustomFieldsComponent };
//# sourceMappingURL=custom-fields.component.js.map