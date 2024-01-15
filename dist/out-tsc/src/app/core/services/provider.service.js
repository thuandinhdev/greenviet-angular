import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var ProviderService = /** @class */ (function () {
    function ProviderService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    ProviderService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/providers");
    };
    ProviderService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/providers/" + id);
    };
    ProviderService.prototype.create = function (providers) {
        return this.http.post(this.apiUrl + "/api/providers", providers);
    };
    ProviderService.prototype.update = function (providers) {
        return this.http.put(this.apiUrl + "/api/providers/" + providers.id, providers);
    };
    ProviderService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/providers/" + id);
    };
    ProviderService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ProviderService);
    return ProviderService;
}());
export { ProviderService };
//# sourceMappingURL=provider.service.js.map