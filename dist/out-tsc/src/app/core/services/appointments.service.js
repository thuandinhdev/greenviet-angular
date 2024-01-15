import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var AppointmentsService = /** @class */ (function () {
    function AppointmentsService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    AppointmentsService.prototype.getAll = function (status, date) {
        return this.http.get(this.apiUrl + "/api/appointments?status=" + status + "&date=" + date);
    };
    AppointmentsService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/appointments/" + id);
    };
    AppointmentsService.prototype.create = function (appointments) {
        return this.http.post(this.apiUrl + "/api/appointments", appointments);
    };
    AppointmentsService.prototype.update = function (appointments) {
        return this.http.put(this.apiUrl + "/api/appointments/" + appointments.id, appointments);
    };
    AppointmentsService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/appointments/" + id);
    };
    AppointmentsService.prototype.changeStatus = function (appointments) {
        return this.http.post(this.apiUrl + "/api/appointments/" + appointments.id + "/change-status", { status: appointments.status });
    };
    AppointmentsService.prototype.getAppointmentAvailabilities = function (appointments) {
        return this.http.get(this.apiUrl + "/api/appointments/availabilities/" + appointments.provider_id + "/" + appointments.start_date_time);
    };
    AppointmentsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], AppointmentsService);
    return AppointmentsService;
}());
export { AppointmentsService };
//# sourceMappingURL=appointments.service.js.map