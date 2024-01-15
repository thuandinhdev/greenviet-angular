import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var TimesheetService = /** @class */ (function () {
    function TimesheetService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    TimesheetService.prototype.getTimesheetsByModule = function (params) {
        return this.http.post(this.apiUrl + "/api/get-timesheets", params);
    };
    TimesheetService.prototype.create = function (params) {
        return this.http.post(this.apiUrl + "/api/timesheets", params);
    };
    TimesheetService.prototype.update = function (timesheet) {
        return this.http.put(this.apiUrl + "/api/timesheets/" + timesheet.id, timesheet);
    };
    TimesheetService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/timesheets/" + id);
    };
    TimesheetService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], TimesheetService);
    return TimesheetService;
}());
export { TimesheetService };
//# sourceMappingURL=timesheet.service.js.map