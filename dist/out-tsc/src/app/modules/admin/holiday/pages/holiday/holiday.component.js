import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ExportAsService } from 'ngx-export-as';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { HolidayService } from '../../../../../core/services/holiday.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { CreateHolidayModalComponent } from '../../components/create-holiday-modal/create-holiday-modal.component';
import { EditHolidayModalComponent } from '../../components/edit-holiday-modal/edit-holiday-modal.component';
import { environment } from '../../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
import * as moment from 'moment';
var HolidayComponent = /** @class */ (function () {
    function HolidayComponent(translate, modalService, http, datePipe, exportAsService, toastr, holidayService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.modalService = modalService;
        this.http = http;
        this.datePipe = datePipe;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.holidayService = holidayService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.minMode = 'month';
        this.dtOptions = {};
        this.holidays = [];
        this.holidayTab = 'all';
        this.isPageLoaded = false;
        this.datepickerConfigs = { dateInputFormat: 'YYYY-MM-DD' };
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'holiday_table',
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
    HolidayComponent.prototype.ngOnInit = function () {
        this.loadHolidayDatatable();
        this.year = new Date();
        this.getHolidays(moment(this.year).format('YYYY'));
    };
    HolidayComponent.prototype.setHolidayTab = function ($event) {
        this.holidayTab = $event.id;
        if ($event.id == 'all') {
            this.rerender();
        }
    };
    HolidayComponent.prototype.getActiveHolidayTab = function (tab) {
        return this.holidayTab === tab;
    };
    HolidayComponent.prototype.getHolidays = function (year) {
        var _this = this;
        this.holidayService.getAll(year)
            .subscribe(function (data) {
            _this.holidayLists = data;
            _this.isPageLoaded = true;
        });
    };
    HolidayComponent.prototype.loadHolidayDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [1, 'asc'],
            columns: [
                {
                    'sortable': true,
                    'target': [0]
                },
                {
                    'sortable': true,
                    'width': "15%",
                    'target': [1]
                },
                {
                    'sortable': false,
                    'width': "5%",
                    'target': [2]
                },
                {
                    'sortable': false,
                    'width': "5%",
                    'target': [3]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('holidays.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('holidays.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('holidays.title'),
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
                    .post(that.apiUrl + '/api/all-holidays', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.holidays = resp.data;
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
    HolidayComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('holidays.title')).subscribe(function () { });
    };
    HolidayComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    HolidayComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    HolidayComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.holidays.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    HolidayComponent.prototype.holidayYearChange = function ($event) {
        this.getHolidays(moment($event).format('YYYY'));
    };
    HolidayComponent.prototype.openHolidayCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(CreateHolidayModalComponent, this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getHolidays(moment(_this.year).format('YYYY'));
            _this.rerender();
        });
    };
    HolidayComponent.prototype.openHolidayEditModal = function (holiday) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                holiday: holiday
            }
        };
        this.modalRef = this.modalService.show(EditHolidayModalComponent, modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getHolidays(moment(_this.year).format('YYYY'));
            _this.rerender();
        });
    };
    HolidayComponent.prototype.removeHoliday = function (id) {
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
                _this.holidayService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('holidays.messages.delete'), _this.translate.instant('holidays.title'));
                    _this.getHolidays(moment(_this.year).format('YYYY'));
                    _this.rerender();
                });
            }
        });
    };
    HolidayComponent.prototype.saveHolidayDetail = function (key, index, name, value) {
        var _this = this;
        this.holidayLists.years[key][index][name] = value;
        this.holidayService.update(this.holidayLists.years[key][index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('holidays.messages.update'), _this.translate.instant('holidays.title'));
            _this.getHolidays(moment(_this.year).format('YYYY'));
        });
    };
    HolidayComponent.prototype.saveHolidayListDetail = function (index, name, value) {
        var _this = this;
        if (value instanceof Date) {
            value = this.datePipe.transform(value, "yyyy-MM-dd h:mm:ss a");
        }
        this.holidays[index][name] = value;
        this.holidayService.update(this.holidays[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('holidays.messages.update'), _this.translate.instant('holidays.title'));
            _this.rerender();
        });
    };
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], HolidayComponent.prototype, "dtElement", void 0);
    HolidayComponent = __decorate([
        Component({
            selector: 'app-holiday',
            templateUrl: './holiday.component.html',
            styleUrls: ['./holiday.component.scss'],
            providers: [DatePipe]
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalService,
            HttpClient,
            DatePipe,
            ExportAsService,
            ToastrService,
            HolidayService,
            AuthenticationService])
    ], HolidayComponent);
    return HolidayComponent;
}());
export { HolidayComponent };
//# sourceMappingURL=holiday.component.js.map