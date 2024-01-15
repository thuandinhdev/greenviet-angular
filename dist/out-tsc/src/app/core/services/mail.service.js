import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var MailService = /** @class */ (function () {
    function MailService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    MailService.prototype.create = function (emailCompose) {
        return this.http.post(this.apiUrl + "/api/mailbox", emailCompose);
    };
    MailService.prototype.getAll = function (reqObj) {
        return this.http.post(this.apiUrl + "/api/all-mailbox", reqObj);
    };
    MailService.prototype.findById = function (id) {
        return this.http.get(this.apiUrl + "/api/mailbox/" + id);
    };
    MailService.prototype.destroy = function (id) {
        return this.http.delete(this.apiUrl + "/api/mailbox/" + id);
    };
    MailService.prototype.markAsRead = function (mailObj) {
        return this.http.post(this.apiUrl + "/api/mailbox/reads", mailObj);
    };
    MailService.prototype.markAsFavourite = function (mailObj) {
        return this.http.post(this.apiUrl + "/api/mailbox/favourite", mailObj);
    };
    MailService.prototype.removeMarkMails = function (mailObj) {
        return this.http.post(this.apiUrl + "/api/mailbox/remove", mailObj);
    };
    MailService.prototype.removeAttachments = function (dataObj) {
        return this.http.post(this.apiUrl + "/api/mailbox/attachment/remove", dataObj);
    };
    MailService.prototype.setUnFavouriteMail = function (dataObj) {
        return this.http.post(this.apiUrl + "/api/mailbox/unfavourite", dataObj);
    };
    MailService.prototype.getUnReadMails = function (length) {
        return this.http.post(this.apiUrl + "/api/mailbox/unread-emails", { length: length });
    };
    MailService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], MailService);
    return MailService;
}());
export { MailService };
//# sourceMappingURL=mail.service.js.map