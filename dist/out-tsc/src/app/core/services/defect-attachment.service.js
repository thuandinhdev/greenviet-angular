import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var DefectAttachmentService = /** @class */ (function () {
    function DefectAttachmentService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    DefectAttachmentService.prototype.getAllAttachmentById = function (defectId) {
        return this.http.get(this.apiUrl + "/api/defect-attachment/" + defectId);
    };
    DefectAttachmentService.prototype.create = function (defectAttachment) {
        return this.http.post(this.apiUrl + "/api/defect-attachment", defectAttachment);
    };
    DefectAttachmentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/defect-attachment/" + id);
    };
    DefectAttachmentService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], DefectAttachmentService);
    return DefectAttachmentService;
}());
export { DefectAttachmentService };
//# sourceMappingURL=defect-attachment.service.js.map