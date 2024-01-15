import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var LeaveService = /** @class */ (function () {
    function LeaveService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    LeaveService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/leaves");
    };
    LeaveService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/leaves/" + id);
    };
    LeaveService.prototype.create = function (leave) {
        return this.http.post(this.apiUrl + "/api/leaves", leave);
    };
    LeaveService.prototype.update = function (leave) {
        return this.http.put(this.apiUrl + "/api/leaves/" + leave.id, leave);
    };
    LeaveService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/leaves/" + id);
    };
    LeaveService.prototype.getCalendarLeaves = function () {
        return this.http.get(this.apiUrl + "/api/leaves/calendar");
    };
    LeaveService.prototype.changeStatus = function (leave) {
        return this.http.post(this.apiUrl + "/api/leaves/change-status/" + leave.id, { "status": leave.status });
    };
    LeaveService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], LeaveService);
    return LeaveService;
}());
export { LeaveService };
//# sourceMappingURL=leave.service.js.map