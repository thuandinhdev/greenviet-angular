import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { SettingService } from '../../../../core/services/setting.service';
import { HelperService } from '../../../../core/services/helper.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settingService, helperService, authenticationService) {
        var _this = this;
        this.settingService = settingService;
        this.helperService = helperService;
        this.authenticationService = authenticationService;
        this.activeSettingTab = '1';
        this.isSettingsLoad = false;
        this.settings = [];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    SettingsComponent.prototype.ngOnInit = function () {
        // this.tabset.tabs[0].active = true;
        this.getCountries();
    };
    SettingsComponent.prototype.setSettingTab = function ($event) {
        this.activeSettingTab = $event.id;
    };
    SettingsComponent.prototype.getActiveSettingTab = function (tab) {
        return this.activeSettingTab === tab;
    };
    SettingsComponent.prototype.getCountries = function () {
        var _this = this;
        this.helperService.getCountries()
            .subscribe(function (data) {
            _this.countries = data;
            _this.getSettings();
        });
    };
    SettingsComponent.prototype.getSettings = function () {
        var _this = this;
        this.settingService.getAll()
            .subscribe(function (data) {
            _this.settings = data;
            _this.isSettingsLoad = true;
        });
    };
    __decorate([
        ViewChild('tabset', { static: true }),
        __metadata("design:type", TabsetComponent)
    ], SettingsComponent.prototype, "tabset", void 0);
    SettingsComponent = __decorate([
        Component({
            selector: 'app-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [SettingService,
            HelperService,
            AuthenticationService])
    ], SettingsComponent);
    return SettingsComponent;
}());
export { SettingsComponent };
//# sourceMappingURL=settings.component.js.map