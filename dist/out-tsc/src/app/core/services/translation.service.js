import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var TranslationService = /** @class */ (function () {
    function TranslationService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    TranslationService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/translations");
    };
    TranslationService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/translations/" + id);
    };
    TranslationService.prototype.create = function (translation) {
        return this.http.post(this.apiUrl + "/api/translations", translation);
    };
    TranslationService.prototype.update = function (translation) {
        return this.http.put(this.apiUrl + "/api/translations/" + translation.id, translation);
    };
    TranslationService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/translations/" + id);
    };
    TranslationService.prototype.getAllActiveTranslations = function () {
        return this.http.get(this.apiUrl + "/api/translations/active");
    };
    TranslationService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], TranslationService);
    return TranslationService;
}());
export { TranslationService };
//# sourceMappingURL=translation.service.js.map