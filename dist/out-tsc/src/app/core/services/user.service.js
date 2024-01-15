import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/users");
    };
    UserService.prototype.getUserIdName = function () {
        return this.http.get(this.apiUrl + "/api/get-users");
    };
    UserService.prototype.getUserkeyBy = function () {
        return this.http.get(this.apiUrl + "/api/get-users-keyby");
    };
    UserService.prototype.getMailUsers = function () {
        return this.http.get(this.apiUrl + "/api/mail-users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/users/" + id);
    };
    UserService.prototype.create = function (user) {
        return this.http.post(this.apiUrl + "/api/users", user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this.apiUrl + "/api/users/" + user.id, user);
    };
    UserService.prototype.delete = function (id, params) {
        return this.http.post(this.apiUrl + "/api/users/delete/" + id, params);
    };
    UserService.prototype.getUserPermissions = function () {
        return this.http.get(this.apiUrl + "/api/users/permissions");
    };
    UserService.prototype.setActiveDeactiveUser = function (user) {
        return this.http.put(this.apiUrl + "/api/users/status-change/" + user.id, user);
    };
    UserService.prototype.getUserGeneratedId = function () {
        return this.http.get(this.apiUrl + "/api/users/get-generated-id");
    };
    UserService.prototype.changePassword = function (user) {
        return this.http.post(this.apiUrl + "/api/users/change-password/" + user.id, user);
    };
    UserService.prototype.changeEmail = function (user) {
        return this.http.post(this.apiUrl + "/api/users/change-email/" + user.id, user);
    };
    UserService.prototype.sendInviteUserMail = function (id) {
        return this.http.get(this.apiUrl + "/api/users/invite/" + id);
    };
    UserService.prototype.import = function (importUsers) {
        return this.http.post(this.apiUrl + "/api/users/import", importUsers);
    };
    UserService.prototype.changeLocale = function (locale) {
        return this.http.get(this.apiUrl + "/api/user/change-locale/" + locale);
    };
    UserService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map