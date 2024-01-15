import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var DefectCommentsService = /** @class */ (function () {
    function DefectCommentsService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    DefectCommentsService.prototype.create = function (defectComment) {
        return this.http.post(this.apiUrl + "/api/defect-comment", defectComment);
    };
    DefectCommentsService.prototype.update = function (defectComment) {
        return this.http.put(this.apiUrl + "/api/defect-comment/" + defectComment.id, defectComment);
    };
    DefectCommentsService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/defect-comment/" + id);
    };
    DefectCommentsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], DefectCommentsService);
    return DefectCommentsService;
}());
export { DefectCommentsService };
//# sourceMappingURL=defect-comments.service.js.map