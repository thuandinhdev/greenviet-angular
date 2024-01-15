import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { SettingService } from '../../../../core/services/setting.service';
import { HelperService } from '../../../../core/services/helper.service';
import { date_formats } from "../../../../core/helpers/pm-helper";
var SystemSettingsComponent = /** @class */ (function () {
    function SystemSettingsComponent(translate, formBuilder, toastr, settingService, helperService) {
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.settingService = settingService;
        this.helperService = helperService;
        this.timezones = [];
        this.dateFormates = date_formats;
        this.timeFormates = [
            { value: 'hh:mm A', label: this.translate.instant('common.12_hours') },
            { value: 'HH:mm', label: this.translate.instant('common.24_hours') }
        ];
        this.isSubmitted = false;
        this.isFormLoaded = false;
    }
    SystemSettingsComponent.prototype.ngOnInit = function () {
        this.slackAuthURl = 'https://slack.com/oauth/v2/authorize?client_id=' + this.settings.slack_client_id + '&scope=incoming-webhook&user_scope=admin,chat:write&redirect_uri=' + this.settings.slack_redirect_URL + '&state=' + this.loginUser.id;
        this.getTimezones();
        this.getCurrencies();
        // this.getLanguages();
        this.settingsForm = this.formBuilder.group({
            form_for: ['system_setting'],
            timezone: [this.settings.timezone],
            tables_pagination_limit: [this.settings.tables_pagination_limit, [Validators.required]],
            date_format: [this.settings.date_format, [Validators.required]],
            time_format: [this.settings.time_format, [Validators.required]],
            slack_client_id: this.settings.slack_client_id,
            slack_client_secret: this.settings.slack_client_secret,
            slack_redirect_URL: this.settings.slack_redirect_URL,
            currency_id: [this.settings.currency_id, [Validators.required]]
        });
    };
    Object.defineProperty(SystemSettingsComponent.prototype, "systemSetting", {
        get: function () { return this.settingsForm.controls; },
        enumerable: false,
        configurable: true
    });
    SystemSettingsComponent.prototype.getTimezones = function () {
        var _this = this;
        this.helperService.getTimezones()
            .subscribe(function (data) {
            for (var iRow in data) {
                _this.timezones.push({
                    key: iRow,
                    value: data[iRow]
                });
            }
            _this.isFormLoaded = true;
        });
    };
    SystemSettingsComponent.prototype.getCurrencies = function () {
        var _this = this;
        this.helperService.getCurrencies().subscribe(function (data) {
            _this.currencies = data;
        });
    };
    // getLanguages() {
    // 	this.helperService.getLanguages()
    // 		.subscribe(
    // 			data => {
    // 				this.defaultLanguages = data;
    // 			});
    // }
    SystemSettingsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.settingsForm.invalid) {
            return;
        }
        this.settingsForm.value.date_time_format = this.settingsForm.value.date_format + ' ' + this.settingsForm.value.time_format;
        this.settingService.create(this.settingsForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.messages.update'), _this.translate.instant('settings.title'));
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SystemSettingsComponent.prototype, "settings", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SystemSettingsComponent.prototype, "loginUser", void 0);
    SystemSettingsComponent = __decorate([
        Component({
            selector: 'app-system-settings',
            templateUrl: './system-settings.component.html',
            styleUrls: ['./system-settings.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            FormBuilder,
            ToastrService,
            SettingService,
            HelperService])
    ], SystemSettingsComponent);
    return SystemSettingsComponent;
}());
export { SystemSettingsComponent };
//# sourceMappingURL=system-settings.component.js.map