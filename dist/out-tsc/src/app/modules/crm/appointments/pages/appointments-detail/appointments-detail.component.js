import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AppointmentsService } from '../../../../../core/services/appointments.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { appointment_status_key_value } from "./../../../../../core/helpers/crm-helper";
var AppointmentsDetailComponent = /** @class */ (function () {
    function AppointmentsDetailComponent(translate, toastr, route, appointmentsService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.toastr = toastr;
        this.route = route;
        this.appointmentsService = appointmentsService;
        this.authenticationService = authenticationService;
        this.isPageLoaded = false;
        this.appointmentStatusKeyValue = appointment_status_key_value;
        this.route.paramMap.subscribe(function (params) {
            _this.getById(params.get('id'));
        });
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    AppointmentsDetailComponent.prototype.ngOnInit = function () {
    };
    AppointmentsDetailComponent.prototype.getById = function (appointmentId) {
        var _this = this;
        this.appointmentsService.getById(appointmentId).subscribe(function (data) {
            _this.appointment = data;
            _this.isPageLoaded = true;
        });
    };
    AppointmentsDetailComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.appointmentStatusKeyValue[statusKey];
    };
    AppointmentsDetailComponent.prototype.changeAppointmentStatus = function (appointmentId, status) {
        var _this = this;
        this.appointmentsService.changeStatus({ id: appointmentId, status: status.id }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('appointments.messages.status'), _this.translate.instant('appointments.title'));
        });
    };
    AppointmentsDetailComponent = __decorate([
        Component({
            selector: 'app-appointments-detail',
            templateUrl: './appointments-detail.component.html',
            styleUrls: ['./appointments-detail.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            ActivatedRoute,
            AppointmentsService,
            AuthenticationService])
    ], AppointmentsDetailComponent);
    return AppointmentsDetailComponent;
}());
export { AppointmentsDetailComponent };
//# sourceMappingURL=appointments-detail.component.js.map