import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ClientService } from '../../../../../core/services/client.service';
import { ProviderService } from '../../../../../core/services/provider.service';
import { AppointmentsService } from '../../../../../core/services/appointments.service';
import * as moment from 'moment';
var EditAppointmentComponent = /** @class */ (function () {
    function EditAppointmentComponent(translate, bsEditModalRef, formBuilder, toastr, clientService, providerService, appointmentsService) {
        this.translate = translate;
        this.bsEditModalRef = bsEditModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.clientService = clientService;
        this.providerService = providerService;
        this.appointmentsService = appointmentsService;
        this.event = new EventEmitter();
        this.clients = [];
        this.isFormSubmitted = false;
        this.isPageLoad = false;
    }
    EditAppointmentComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.getClients();
    };
    EditAppointmentComponent.prototype.loadForm = function () {
        this.editAppointmentForm = this.formBuilder.group({
            id: [this.appointment.id],
            title: [this.appointment.title, [Validators.required, Validators.maxLength(255)]],
            client_id: [this.appointment.client_id],
            provider_id: [this.appointment.provider_id, Validators.required],
            attendees: [this.appointment.attendees, Validators.required],
            start_date_time: [new Date(this.appointment.start_date_time), Validators.required],
            end_date_time: [new Date(this.appointment.end_date_time), Validators.required],
            status: [this.appointment.status, Validators.required],
            location: [this.appointment.location],
            note: [this.appointment.note]
        });
        this.checkAvailabilities();
        this.isPageLoad = true;
    };
    Object.defineProperty(EditAppointmentComponent.prototype, "appointmentControl", {
        get: function () { return this.editAppointmentForm.controls; },
        enumerable: false,
        configurable: true
    });
    EditAppointmentComponent.prototype.startDateChange = function (start_date) {
        this.editAppointmentForm.patchValue({ end_date_time: new Date(start_date.value) });
        this.checkAvailabilities();
    };
    EditAppointmentComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getAll()
            .subscribe(function (data) {
            _this.clients = data;
            _this.getProviders();
        });
    };
    EditAppointmentComponent.prototype.getProviders = function () {
        var _this = this;
        this.providerService.getAll()
            .subscribe(function (data) {
            _this.providers = data;
            _this.loadForm();
        });
    };
    EditAppointmentComponent.prototype.changeProvider = function () {
        this.editAppointmentForm.patchValue({ start_date_time: null });
        this.editAppointmentForm.patchValue({ end_date_time: null });
        this.availabileSlots = [];
    };
    EditAppointmentComponent.prototype.checkAvailabilities = function () {
        var _this = this;
        if (!this.editAppointmentForm.value.provider_id) {
            this.toastr.error(this.translate.instant('appointments.create.error_messages.message9'), this.translate.instant('appointments.title'));
            return false;
        }
        this.editAppointmentForm.value.start_date_time = moment(this.editAppointmentForm.value.start_date_time).format('YYYY-MM-DD HH:mm:ss');
        this.appointmentsService.getAppointmentAvailabilities(this.editAppointmentForm.value)
            .subscribe(function (data) {
            _this.availabileSlots = data;
        });
    };
    EditAppointmentComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editAppointmentForm.invalid) {
            return;
        }
        this.editAppointmentForm.value.start_date_time = moment(this.editAppointmentForm.value.start_date_time).format('YYYY-MM-DD HH:mm:ss');
        this.editAppointmentForm.value.end_date_time = moment(this.editAppointmentForm.value.end_date_time).format('YYYY-MM-DD HH:mm:ss');
        this.appointmentsService.update(this.editAppointmentForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('appointments.messages.edit'), _this.translate.instant('appointments.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    EditAppointmentComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditModalRef.hide();
    };
    EditAppointmentComponent = __decorate([
        Component({
            selector: 'app-edit-appointment',
            templateUrl: './edit-appointment.component.html',
            styleUrls: ['./edit-appointment.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            ClientService,
            ProviderService,
            AppointmentsService])
    ], EditAppointmentComponent);
    return EditAppointmentComponent;
}());
export { EditAppointmentComponent };
//# sourceMappingURL=edit-appointment.component.js.map