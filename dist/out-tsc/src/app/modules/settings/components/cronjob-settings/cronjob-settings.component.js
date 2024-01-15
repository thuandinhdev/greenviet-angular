import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { SettingService } from '../../../../core/services/setting.service';
import { environment } from '../../../../../environments/environment';
var CronjobSettingsComponent = /** @class */ (function () {
    function CronjobSettingsComponent(translate, toastr, settingService) {
        this.translate = translate;
        this.toastr = toastr;
        this.settingService = settingService;
        this.apiUrl = environment.apiUrl;
    }
    CronjobSettingsComponent.prototype.ngOnInit = function () { };
    CronjobSettingsComponent.prototype.saveCronjobSettings = function () {
        var _this = this;
        this.settingService.create(this.settings)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.messages.update'), _this.translate.instant('settings.title'));
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CronjobSettingsComponent.prototype, "settings", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CronjobSettingsComponent.prototype, "loginUser", void 0);
    CronjobSettingsComponent = __decorate([
        Component({
            selector: 'app-cronjob-settings',
            templateUrl: './cronjob-settings.component.html',
            styleUrls: ['./cronjob-settings.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            SettingService])
    ], CronjobSettingsComponent);
    return CronjobSettingsComponent;
}());
export { CronjobSettingsComponent };
//# sourceMappingURL=cronjob-settings.component.js.map