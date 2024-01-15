import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { SettingService } from '../../../../core/services/setting.service';
var DashboardSettingsComponent = /** @class */ (function () {
    function DashboardSettingsComponent(translate, toastr, settingService) {
        this.translate = translate;
        this.toastr = toastr;
        this.settingService = settingService;
    }
    DashboardSettingsComponent.prototype.ngOnInit = function () { };
    DashboardSettingsComponent.prototype.saveDashboardSettings = function () {
        var _this = this;
        this.settingService.create(this.settings)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.messages.update'), _this.translate.instant('settings.title'));
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DashboardSettingsComponent.prototype, "settings", void 0);
    DashboardSettingsComponent = __decorate([
        Component({
            selector: 'app-dashboard-settings',
            templateUrl: './dashboard-settings.component.html',
            styleUrls: ['./dashboard-settings.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            SettingService])
    ], DashboardSettingsComponent);
    return DashboardSettingsComponent;
}());
export { DashboardSettingsComponent };
//# sourceMappingURL=dashboard-settings.component.js.map