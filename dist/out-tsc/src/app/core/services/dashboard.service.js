import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    DashboardService.prototype.getDashboardCounts = function (length) {
        return this.http.post(this.apiUrl + "/api/helper/dashboard", { length: length });
    };
    DashboardService.prototype.getDashboardLists = function (length) {
        return this.http.post(this.apiUrl + "/api/helper/pm/dashboard", { length: length });
    };
    DashboardService.prototype.getTodayActivities = function (length) {
        return this.http.post(this.apiUrl + "/api/get-today-activity", { length: length });
    };
    DashboardService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], DashboardService);
    return DashboardService;
}());
export { DashboardService };
//# sourceMappingURL=dashboard.service.js.map