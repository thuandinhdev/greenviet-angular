import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var DepartmentService = /** @class */ (function () {
    function DepartmentService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    DepartmentService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/departments");
    };
    DepartmentService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/departments/" + id);
    };
    DepartmentService.prototype.create = function (department) {
        return this.http.post(this.apiUrl + "/api/departments", department);
    };
    DepartmentService.prototype.update = function (department) {
        return this.http.put(this.apiUrl + "/api/departments/" + department.id, department);
    };
    DepartmentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/departments/" + id);
    };
    DepartmentService.prototype.deleteDepartmentRole = function (id, roleId) {
        return this.http.delete(this.apiUrl + "/api/departments/" + id + "/" + roleId);
    };
    DepartmentService.prototype.getDepartmentDetail = function (id, roleId) {
        return this.http.get(this.apiUrl + "/api/departments/" + id + "/" + roleId);
    };
    DepartmentService.prototype.updateDepartmentDetail = function (id, roleId, menu) {
        return this.http.put(this.apiUrl + "/api/departments/" + id + "/" + roleId, menu);
    };
    DepartmentService.prototype.getDepartmentsClientsRoles = function () {
        return this.http.get(this.apiUrl + "/api/departments/clients-roles");
    };
    DepartmentService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], DepartmentService);
    return DepartmentService;
}());
export { DepartmentService };
//# sourceMappingURL=department.service.js.map