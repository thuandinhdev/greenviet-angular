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
import { TranslationService } from '../../../../core/services/translation.service';
import { HelperService } from '../../../../core/services/helper.service';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { CreateTranslationComponent } from './components/create-translation/create-translation.component';
import { EditTranslationComponent } from './components/edit-translation/edit-translation.component';
import { environment } from '../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
var TranslationsSettingsComponent = /** @class */ (function () {
    function TranslationsSettingsComponent(translate, http, toastr, modalService, exportAsService, translationService, helperService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.toastr = toastr;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.translationService = translationService;
        this.helperService = helperService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.translations = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'translation_table',
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
    TranslationsSettingsComponent.prototype.ngOnInit = function () {
        this.loadTranslationDatatable();
    };
    TranslationsSettingsComponent.prototype.loadTranslationDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: this.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [1, 'asc'],
            columns: [{
                    'sortable': false,
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
                    'width': "5%",
                    'target': [3]
                }
            ],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('settings.translations.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('settings.translations.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('settings.translations.title'),
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
                    .post(_this.apiUrl + '/api/all-translations', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.translations = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    TranslationsSettingsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, 'translations').subscribe(function () { });
    };
    TranslationsSettingsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    TranslationsSettingsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    TranslationsSettingsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.translations.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    TranslationsSettingsComponent.prototype.openTranslationCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(CreateTranslationComponent, this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    TranslationsSettingsComponent.prototype.openTranslationEditModal = function (translation) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered animated fadeIn",
            initialState: {
                translation: translation
            }
        };
        this.modalRef = this.modalService.show(EditTranslationComponent, modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    TranslationsSettingsComponent.prototype.setActiveInactiveTranslation = function (value, translation) {
        var _this = this;
        translation.status = value;
        this.translationService.update(translation)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.translations.messages.status'), _this.translate.instant('settings.translations.title'));
            _this.rerender();
        });
    };
    TranslationsSettingsComponent.prototype.translationDelete = function (id) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('settings.translations.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                // --
                // this.toastr.error(this.translate.instant('common.not_allowed'));
                // return;
                _this.translationService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('settings.translations.messages.delete'), _this.translate.instant('settings.translations.title'));
                    _this.rerender();
                });
            }
        });
    };
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], TranslationsSettingsComponent.prototype, "dtElement", void 0);
    TranslationsSettingsComponent = __decorate([
        Component({
            selector: 'app-translations-settings',
            templateUrl: './translations-settings.component.html',
            styleUrls: ['./translations-settings.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            HttpClient,
            ToastrService,
            BsModalService,
            ExportAsService,
            TranslationService,
            HelperService,
            AuthenticationService])
    ], TranslationsSettingsComponent);
    return TranslationsSettingsComponent;
}());
export { TranslationsSettingsComponent };
//# sourceMappingURL=translations-settings.component.js.map