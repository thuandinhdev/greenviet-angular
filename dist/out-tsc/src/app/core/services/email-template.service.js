import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var EmailTemplateService = /** @class */ (function () {
    function EmailTemplateService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    EmailTemplateService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/email-templates");
    };
    EmailTemplateService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/email-templates/" + id);
    };
    EmailTemplateService.prototype.create = function (emailTemplate) {
        return this.http.post(this.apiUrl + "/api/email-templates", emailTemplate);
    };
    EmailTemplateService.prototype.update = function (emailTemplate) {
        return this.http.put(this.apiUrl + "/api/email-templates/" + emailTemplate.id, emailTemplate);
    };
    EmailTemplateService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/email-templates/" + id);
    };
    EmailTemplateService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], EmailTemplateService);
    return EmailTemplateService;
}());
export { EmailTemplateService };
//# sourceMappingURL=email-template.service.js.map