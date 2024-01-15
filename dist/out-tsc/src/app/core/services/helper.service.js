import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var HelperService = /** @class */ (function () {
    function HelperService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    HelperService.prototype.getCountries = function () {
        return this.http.get(this.apiUrl + "/api/helper/countries");
    };
    HelperService.prototype.getLocals = function () {
        return this.http.get(this.apiUrl + "/api/helper/locals");
    };
    HelperService.prototype.getLanguages = function () {
        return this.http.get(this.apiUrl + "/api/helper/languages");
    };
    HelperService.prototype.getCurrencies = function () {
        return this.http.get(this.apiUrl + "/api/helper/currencies");
    };
    HelperService.prototype.getTimezones = function () {
        return this.http.get(this.apiUrl + "/api/helper/timezone");
    };
    HelperService.prototype.getDays = function () {
        return this.http.get(this.apiUrl + "/api/helper/days");
    };
    HelperService.prototype.getFormTables = function () {
        return this.http.get(this.apiUrl + "/api/helper/formtables");
    };
    HelperService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], HelperService);
    return HelperService;
}());
export { HelperService };
//# sourceMappingURL=helper.service.js.map