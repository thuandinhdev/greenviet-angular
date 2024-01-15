import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var DatabaseBackupService = /** @class */ (function () {
    function DatabaseBackupService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    DatabaseBackupService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/database-backups");
    };
    DatabaseBackupService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/database-backups/" + id);
    };
    DatabaseBackupService.prototype.create = function (backupDatabase) {
        return this.http.post(this.apiUrl + "/api/database-backups", backupDatabase);
    };
    DatabaseBackupService.prototype.update = function (backupDatabase) {
        return this.http.put(this.apiUrl + "/api/database-backups/" + backupDatabase.id, backupDatabase);
    };
    DatabaseBackupService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/database-backups/" + id);
    };
    DatabaseBackupService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], DatabaseBackupService);
    return DatabaseBackupService;
}());
export { DatabaseBackupService };
//# sourceMappingURL=database-backup.service.js.map