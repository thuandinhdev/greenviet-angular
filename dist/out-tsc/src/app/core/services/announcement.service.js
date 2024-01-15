import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var AnnouncementService = /** @class */ (function () {
    function AnnouncementService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    AnnouncementService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/announcements");
    };
    AnnouncementService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/announcements/" + id);
    };
    AnnouncementService.prototype.create = function (announcement) {
        return this.http.post(this.apiUrl + "/api/announcements", announcement);
    };
    AnnouncementService.prototype.update = function (announcement) {
        return this.http.put(this.apiUrl + "/api/announcements/" + announcement.id, announcement);
    };
    AnnouncementService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/announcements/" + id);
    };
    AnnouncementService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], AnnouncementService);
    return AnnouncementService;
}());
export { AnnouncementService };
//# sourceMappingURL=announcement.service.js.map