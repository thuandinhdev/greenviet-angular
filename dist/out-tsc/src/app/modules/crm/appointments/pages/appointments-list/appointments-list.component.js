import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';
import { ExportAsService } from 'ngx-export-as';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { AppointmentsService } from '../../../../../core/services/appointments.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { CreateAppointmentComponent } from '../../components/create-appointment/create-appointment.component';
import { EditAppointmentComponent } from '../../components/edit-appointment/edit-appointment.component';
import { appointment_status_key_value } from "./../../../../../core/helpers/crm-helper";
import { environment } from '../../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
var AppointmentsListComponent = /** @class */ (function () {
    function AppointmentsListComponent(translate, router, route, http, exportAsService, toastr, modalService, appointmentsService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.modalService = modalService;
        this.appointmentsService = appointmentsService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.appointments = [];
        this.appointmentStatusKeyValue = appointment_status_key_value;
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'appointments_table',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    AppointmentsListComponent.prototype.ngOnInit = function () {
        this.loadAppointmentDatatable();
    };
    AppointmentsListComponent.prototype.loadAppointmentDatatable = function () {
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
                    'sortable': true,
                    'width': "8%",
                    'target': [0]
                },
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
                    'sortable': true,
                    'width': "8%",
                    'target': [2]
                },
                {
                    'sortable': true,
                    'width': "8%",
                    'target': [3]
                },
                {
                    'sortable': true,
                    'width': "12%",
                    'target': [4]
                },
                {
                    'sortable': true,
                    'width': "12%",
                    'target': [5]
                },
                {
                    'sortable': false,
                    'target': [6],
                    'width': "5%"
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('appointments.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('appointments.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('appointments.title'),
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
                    status: _this.statusfilterId
                };
                _this.http
                    .post(_this.apiUrl + '/api/all-appointments', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.isPageLoaded = true;
                    _this.appointments = resp.data;
                    _this.statusCount = resp;
                    _this.statusCount = _this.statusCount.statusCount;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    AppointmentsListComponent.prototype.filterByStatus = function (statusID) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.navigate(['appointments/list', statusID]);
    };
    AppointmentsListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    AppointmentsListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    AppointmentsListComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.appointments.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    AppointmentsListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('appointments.title')).subscribe(function () { });
    };
    AppointmentsListComponent.prototype.openAppointmentCreateModal = function () {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn"
        };
        this.modalRef = this.modalService.show(CreateAppointmentComponent, modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    AppointmentsListComponent.prototype.openAppointmentEditModal = function (appointment) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                appointment: appointment
            }
        };
        this.modalRef = this.modalService.show(EditAppointmentComponent, modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    AppointmentsListComponent.prototype.deleteAppointment = function (id) {
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
                _this.appointmentsService.delete(id).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('appointments.messages.delete'), _this.translate.instant('appointments.title'));
                    _this.rerender();
                });
            }
        });
    };
    AppointmentsListComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.appointmentStatusKeyValue[statusKey];
    };
    AppointmentsListComponent.prototype.changeAppointmentStatus = function (appointmentId, status) {
        var _this = this;
        this.appointmentsService.changeStatus({ id: appointmentId, status: status.id }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('appointments.messages.status'), _this.translate.instant('appointments.title'));
            _this.rerender();
        });
    };
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], AppointmentsListComponent.prototype, "dtElement", void 0);
    AppointmentsListComponent = __decorate([
        Component({
            selector: 'app-appointments-list',
            templateUrl: './appointments-list.component.html',
            styleUrls: ['./appointments-list.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            Router,
            ActivatedRoute,
            HttpClient,
            ExportAsService,
            ToastrService,
            BsModalService,
            AppointmentsService,
            AuthenticationService])
    ], AppointmentsListComponent);
    return AppointmentsListComponent;
}());
export { AppointmentsListComponent };
//# sourceMappingURL=appointments-list.component.js.map