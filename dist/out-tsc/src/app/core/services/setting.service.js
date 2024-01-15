import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var SettingService = /** @class */ (function () {
    function SettingService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    SettingService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/settings");
    };
    SettingService.prototype.getSettings = function () {
        return this.http.get(this.apiUrl + "/api/settings/get-settings");
    };
    SettingService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/settings/" + id);
    };
    SettingService.prototype.create = function (setting) {
        return this.http.post(this.apiUrl + "/api/settings", setting);
    };
    SettingService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/settings/" + id);
    };
    SettingService.prototype.saveWorkingDays = function (data) {
        return this.http.post(this.apiUrl + "/api/working-days", data);
    };
    SettingService.prototype.getWorkingDays = function () {
        return this.http.get(this.apiUrl + "/api/working-days");
    };
    SettingService.prototype.sendTestEmail = function () {
        return this.http.get(this.apiUrl + "/api/settings/sent-test-email");
    };
    SettingService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], SettingService);
    return SettingService;
}());
export { SettingService };
//# sourceMappingURL=setting.service.js.map