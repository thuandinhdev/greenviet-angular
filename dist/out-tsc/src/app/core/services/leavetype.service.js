import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var LeavetypeService = /** @class */ (function () {
    function LeavetypeService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    LeavetypeService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/leave-type");
    };
    LeavetypeService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/leave-type/" + id);
    };
    LeavetypeService.prototype.create = function (leavetype) {
        return this.http.post(this.apiUrl + "/api/leave-type", leavetype);
    };
    LeavetypeService.prototype.update = function (leavetype) {
        return this.http.put(this.apiUrl + "/api/leave-type/" + leavetype.id, leavetype);
    };
    LeavetypeService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/leave-type/" + id);
    };
    LeavetypeService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], LeavetypeService);
    return LeavetypeService;
}());
export { LeavetypeService };
//# sourceMappingURL=leavetype.service.js.map