import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    RoleService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/roles");
    };
    RoleService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/roles/" + id);
    };
    RoleService.prototype.create = function (role) {
        return this.http.post(this.apiUrl + "/api/roles", role);
    };
    RoleService.prototype.update = function (role) {
        return this.http.put(this.apiUrl + "/api/roles/" + role.id, role);
    };
    RoleService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/roles/" + id);
    };
    RoleService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], RoleService);
    return RoleService;
}());
export { RoleService };
//# sourceMappingURL=role.service.js.map