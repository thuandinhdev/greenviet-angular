import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var HolidayService = /** @class */ (function () {
    function HolidayService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    HolidayService.prototype.getAll = function (year) {
        return this.http.get(this.apiUrl + "/api/holidays?year=" + year);
    };
    HolidayService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/holidays/" + id);
    };
    HolidayService.prototype.create = function (holiday) {
        return this.http.post(this.apiUrl + "/api/holidays", holiday);
    };
    HolidayService.prototype.update = function (holiday) {
        return this.http.put(this.apiUrl + "/api/holidays/" + holiday.id, holiday);
    };
    HolidayService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/holidays/" + id);
    };
    HolidayService.prototype.yearAllHolidays = function (year) {
        return this.http.post(this.apiUrl + "/api/all-year-holidays", { year: year });
    };
    HolidayService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], HolidayService);
    return HolidayService;
}());
export { HolidayService };
//# sourceMappingURL=holiday.service.js.map