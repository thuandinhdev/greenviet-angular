import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { SettingService } from '../../../../core/services/setting.service';
var EmailSettingsComponent = /** @class */ (function () {
    function EmailSettingsComponent(translate, formBuilder, toastr, settingService) {
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.settingService = settingService;
        this.isSubmitted = false;
        this.smtpHosts = [
            { value: 'smtp', label: 'SMTP' },
        ];
        this.mailEncryption = [
            { value: 'ssl', label: 'SSL' },
            { value: 'tls', label: 'TLS' },
        ];
    }
    EmailSettingsComponent.prototype.ngOnInit = function () {
        this.settingsForm = this.formBuilder.group({
            form_for: ['email_setting'],
            company_from_email: [this.settings.company_from_email, [Validators.required, Validators.email]],
            post_mark: [this.settings.post_mark],
            smtp_protocol: [this.settings.smtp_protocol, Validators.required],
            smtp_host: [this.settings.smtp_host, Validators.required],
            smtp_user: [this.settings.smtp_user, [Validators.required, Validators.email]],
            smtp_password: [this.settings.smtp_password, Validators.required],
            smtp_port: [this.settings.smtp_port, Validators.required],
            smtp_encryption: [this.settings.smtp_encryption],
            sparkpost_secret: [this.settings.sparkpost_secret],
            mailgun_domain: [this.settings.mailgun_domain],
            mailgun_secret: [this.settings.mailgun_secret],
            mandrill_secret: [this.settings.mandrill_secret]
        });
    };
    Object.defineProperty(EmailSettingsComponent.prototype, "emailSettings", {
        get: function () { return this.settingsForm.controls; },
        enumerable: false,
        configurable: true
    });
    EmailSettingsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.settingsForm.invalid) {
            return;
        }
        this.settingService.create(this.settingsForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.messages.update'), _this.translate.instant('settings.title'));
        });
    };
    EmailSettingsComponent.prototype.sendTestEmail = function () {
        var _this = this;
        this.settingService.sendTestEmail().subscribe(function (data) {
            _this.res = data;
            if (_this.res.status) {
                _this.toastr.success(_this.translate.instant('settings.email_settings.title1') + _this.res.email, _this.translate.instant('settings.title'));
            }
            else {
                _this.toastr.error(_this.res.msg);
            }
        }, function (error) { });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], EmailSettingsComponent.prototype, "settings", void 0);
    EmailSettingsComponent = __decorate([
        Component({
            selector: 'app-email-settings',
            templateUrl: './email-settings.component.html',
            styleUrls: ['./email-settings.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            FormBuilder,
            ToastrService,
            SettingService])
    ], EmailSettingsComponent);
    return EmailSettingsComponent;
}());
export { EmailSettingsComponent };
//# sourceMappingURL=email-settings.component.js.map