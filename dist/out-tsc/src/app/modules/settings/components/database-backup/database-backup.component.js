import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { DatabaseBackupService } from '../../../../core/services/database-backup.service';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { environment } from '../../../../../environments/environment';
var DatabaseBackupComponent = /** @class */ (function () {
    function DatabaseBackupComponent(translate, toastr, databaseBackupService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.toastr = toastr;
        this.databaseBackupService = databaseBackupService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.databases = [];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    DatabaseBackupComponent.prototype.ngOnInit = function () {
        this.getDatabaseBackups();
    };
    DatabaseBackupComponent.prototype.getDatabaseBackups = function () {
        var _this = this;
        this.databaseBackupService.getAll()
            .subscribe(function (data) {
            _this.databases = data;
            setTimeout(function () {
                if (_this.databases.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    DatabaseBackupComponent.prototype.backupDatabase = function () {
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // return;
        var _this = this;
        this.databaseBackupService.create({})
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.database_backups.messages.create'), _this.translate.instant('settings.database_backups.title'));
            _this.getDatabaseBackups();
        });
    };
    DatabaseBackupComponent.prototype.restoreDatabase = function (database) {
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // return;
        var _this = this;
        this.databaseBackupService.update(database)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.database_backups.messages.restore'), _this.translate.instant('settings.database_backups.title'));
        });
    };
    DatabaseBackupComponent.prototype.deleteDatatabase = function (id) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('settings.database_backups.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.databaseBackupService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('settings.database_backups.messages.delete'), _this.translate.instant('settings.database_backups.title'));
                    _this.getDatabaseBackups();
                });
            }
        });
    };
    DatabaseBackupComponent = __decorate([
        Component({
            selector: 'app-database-backup',
            templateUrl: './database-backup.component.html',
            styleUrls: ['./database-backup.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            DatabaseBackupService,
            AuthenticationService])
    ], DatabaseBackupComponent);
    return DatabaseBackupComponent;
}());
export { DatabaseBackupComponent };
//# sourceMappingURL=database-backup.component.js.map