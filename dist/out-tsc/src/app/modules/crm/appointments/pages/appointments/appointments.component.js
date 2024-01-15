import { __decorate, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { NgxRolesService } from 'ngx-permissions';
import { CalendarEventTitleFormatter, CalendarView } from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import { CustomEventTitleFormatter } from '../../../../../core/helpers/custom-event-title-formatter.provider';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { AppointmentsService } from '../../../../../core/services/appointments.service';
import { ProviderService } from '../../../../../core/services/provider.service';
import { AuthenticationService } from '../../../../../core//services/authentication.service';
import { CreateAppointmentComponent } from '../../components/create-appointment/create-appointment.component';
import { EditAppointmentComponent } from '../../components/edit-appointment/edit-appointment.component';
import * as moment from 'moment';
var AppointmentsComponent = /** @class */ (function () {
    function AppointmentsComponent(translate, ngxRolesService, http, toastr, modalService, providerService, appointmentsService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.toastr = toastr;
        this.modalService = modalService;
        this.providerService = providerService;
        this.appointmentsService = appointmentsService;
        this.authenticationService = authenticationService;
        this.isCalendarLoaded = false;
        this.view = CalendarView.Month;
        this.CalendarView = CalendarView;
        this.viewDate = new Date();
        this.refresh = new Subject();
        this.events = this.AllCalendarEvents;
        this.activeDayIsOpen = true;
        this.minMode = 'month';
        this.appoitmentFilterKey = 0;
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    AppointmentsComponent.prototype.ngOnInit = function () {
        this.filterDate = moment(this.year).format('YYYY-MM');
        this.getProviders();
    };
    AppointmentsComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (isSameMonth(date, this.viewDate)) {
            if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    };
    AppointmentsComponent.prototype.addEvent = function (tasks) {
        this.events = tasks;
        this.refreshView();
    };
    AppointmentsComponent.prototype.refreshView = function () {
        this.refresh.next();
    };
    AppointmentsComponent.prototype.setView = function (view) {
        this.view = view;
    };
    AppointmentsComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    AppointmentsComponent.prototype.getAppointments = function (status, date) {
        var _this = this;
        if (status === void 0) { status = 0; }
        this.appointmentsService.getAll(status, date)
            .subscribe(function (data) {
            _this.appointments = data;
            _this.isCalendarLoaded = true;
            _this.setCalendarData();
        });
    };
    AppointmentsComponent.prototype.filterByStatus = function (status) {
        this.appoitmentFilterKey = status;
        this.getAppointments(status, this.filterDate);
    };
    AppointmentsComponent.prototype.appointmentYearChange = function ($event) {
        this.filterDate = moment($event).format('YYYY-MM');
        this.getAppointments(this.appoitmentFilterKey, this.filterDate);
    };
    AppointmentsComponent.prototype.setCalendarData = function () {
        var _this = this;
        var eventsAll = [];
        var roleName = this.ngxRolesService.getRole('admin');
        var isAllowed = false;
        if ((roleName && roleName.name == 'admin') || this.loginUser.is_super_admin) {
            isAllowed = true;
        }
        this.appointments['data'].forEach(function (element) {
            var provider = _this.getProvider(element.provider_id);
            if (provider) {
                if (element.user_id == _this.loginUser.id) {
                    isAllowed = true;
                }
                if (isAllowed) {
                    eventsAll.push({
                        start: new Date(element.start_date_time),
                        end: new Date(element.end_date_time),
                        title: '(' + moment(element.start_date_time).format('h:m A') + '-' + moment(element.end_date_time).format('h:m A') + ') ' + provider.firstname + ' ' + provider.lastname + ' / ' + element.title,
                        allDay: true,
                        cssClass: "event_" + element.id,
                        color: {
                            primary: provider.color,
                            secondary: provider.color
                        },
                        actions: [
                            {
                                label: '<i class="fa fa-fw fa-pencil"></i>',
                                onClick: function (_a) {
                                    var event = _a.event;
                                    _this.openAppointmentEditModal(event);
                                }
                            }, {
                                label: '<i class="fa fa-fw fa-times"></i>',
                                onClick: function (_a) {
                                    var event = _a.event;
                                    _this.deleteAppointment(event);
                                }
                            }
                        ]
                    });
                }
                else {
                    eventsAll.push({
                        start: new Date(element.start_date_time),
                        end: new Date(element.end_date_time),
                        title: '(' + moment(element.start_date_time).format('h:m A') + '-' + moment(element.end_date_time).format('h:m A') + ') ' + provider.firstname + ' ' + provider.lastname + ' / ' + element.title,
                        allDay: true,
                        cssClass: "event_" + element.id,
                        color: {
                            primary: provider.color,
                            secondary: provider.color
                        },
                        actions: []
                    });
                }
            }
        });
        this.addEvent(eventsAll);
        this.AllCalendarEvents = eventsAll;
    };
    AppointmentsComponent.prototype.getProvider = function (providerId) {
        for (var iRow in this.providers) {
            if (this.providers[iRow].id == providerId) {
                return this.providers[iRow];
            }
        }
    };
    AppointmentsComponent.prototype.getAppointment = function (id) {
        for (var iRow in this.appointments['data']) {
            if (this.appointments['data'][iRow].id == id) {
                return this.appointments['data'][iRow];
            }
        }
    };
    AppointmentsComponent.prototype.getProviders = function () {
        var _this = this;
        this.providerService.getAll()
            .subscribe(function (data) {
            _this.providers = data;
            _this.getAppointments(_this.appoitmentFilterKey, _this.filterDate);
        });
    };
    AppointmentsComponent.prototype.openAppointmentCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(CreateAppointmentComponent, this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getAppointments(_this.appoitmentFilterKey, _this.filterDate);
        });
    };
    AppointmentsComponent.prototype.openAppointmentEditModal = function (event) {
        var _this = this;
        var appointment = this.getAppointment(parseInt(this.getSecondPartString(event.cssClass)));
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
            _this.getAppointments(_this.appoitmentFilterKey, _this.filterDate);
        });
    };
    AppointmentsComponent.prototype.deleteAppointment = function (event) {
        var _this = this;
        var appointmentId = parseInt(this.getSecondPartString(event.cssClass));
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.appointmentsService.delete(appointmentId)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('appointments.messages.delete'), _this.translate.instant('appointments.title'));
                    _this.getAppointments(_this.appoitmentFilterKey, _this.filterDate);
                });
            }
        });
    };
    AppointmentsComponent.prototype.getSecondPartString = function (str) {
        return str.split('_')[1];
    };
    AppointmentsComponent = __decorate([
        Component({
            selector: 'app-appointments',
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: './appointments.component.html',
            styleUrls: ['./appointments.component.scss'],
            providers: [{
                    provide: CalendarEventTitleFormatter,
                    useClass: CustomEventTitleFormatter
                }]
        }),
        __metadata("design:paramtypes", [TranslateService,
            NgxRolesService,
            HttpClient,
            ToastrService,
            BsModalService,
            ProviderService,
            AppointmentsService,
            AuthenticationService])
    ], AppointmentsComponent);
    return AppointmentsComponent;
}());
export { AppointmentsComponent };
//# sourceMappingURL=appointments.component.js.map