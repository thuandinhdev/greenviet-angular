import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var ImportProjectService = /** @class */ (function () {
    function ImportProjectService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    ImportProjectService.prototype.create = function (importProject) {
        return this.http.post(this.apiUrl + "/api/projects/import", importProject);
    };
    ImportProjectService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ImportProjectService);
    return ImportProjectService;
}());
export { ImportProjectService };
//# sourceMappingURL=import-project.service.js.map