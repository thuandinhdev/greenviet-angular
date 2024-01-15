import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var ImportTaskService = /** @class */ (function () {
    function ImportTaskService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    ImportTaskService.prototype.create = function (importTask) {
        return this.http.post(this.apiUrl + "/api/tasks/import", importTask);
    };
    ImportTaskService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ImportTaskService);
    return ImportTaskService;
}());
export { ImportTaskService };
//# sourceMappingURL=import-task.service.js.map