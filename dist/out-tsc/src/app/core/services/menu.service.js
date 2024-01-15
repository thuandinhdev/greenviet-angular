import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var MenuService = /** @class */ (function () {
    function MenuService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    MenuService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/menu");
    };
    MenuService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/menu/" + id);
    };
    MenuService.prototype.create = function (menu) {
        return this.http.post(this.apiUrl + "/api/menu", menu);
    };
    MenuService.prototype.update = function (menu) {
        return this.http.put(this.apiUrl + "/api/menu/" + menu.id, menu);
    };
    MenuService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/menu/" + id);
    };
    MenuService.prototype.getSidebarMenu = function () {
        return this.http.get(this.apiUrl + "/api/sidebar-menu");
    };
    MenuService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], MenuService);
    return MenuService;
}());
export { MenuService };
//# sourceMappingURL=menu.service.js.map