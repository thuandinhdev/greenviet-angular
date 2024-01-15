import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from '../../core/services/authentication.service';
import { SettingService } from 'src/app/core/services/setting.service';
import { environment } from 'src/environments/environment';
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(translate, router, formBuilder, toastr, authenticationService, settingService) {
        this.translate = translate;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.settingService = settingService;
        this.apiUrl = environment.apiUrl;
        this.isFormSubmitted = false;
        this.isSettingsLoad = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.getSettings();
        this.loadForm();
    };
    ForgotPasswordComponent.prototype.loadForm = function () {
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    };
    Object.defineProperty(ForgotPasswordComponent.prototype, "userControl", {
        get: function () { return this.forgotPasswordForm.controls; },
        enumerable: false,
        configurable: true
    });
    ForgotPasswordComponent.prototype.getSettings = function () {
        var _this = this;
        this.settingService.getSettings()
            .subscribe(function (data) {
            _this.settings = data;
            _this.setBGImage();
            _this.isSettingsLoad = true;
        });
    };
    ForgotPasswordComponent.prototype.setBGImage = function () {
        if (this.settings.login_background) {
            this.backgroundImage = this.apiUrl + '/uploads/login_bg/' + this.settings.login_background;
        }
        else {
            this.backgroundImage = 'assets/img/login-bg-2.png';
        }
    };
    ForgotPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.forgotPasswordForm.invalid) {
            return;
        }
        this.authenticationService.forgotPassword(this.forgotPasswordForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('forgot_password.messages.success'), _this.translate.instant('forgot_password.title'));
            _this.router.navigate(['login']);
        });
    };
    ForgotPasswordComponent = __decorate([
        Component({
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./forgot-password.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            Router,
            FormBuilder,
            ToastrService,
            AuthenticationService,
            SettingService])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
export { ForgotPasswordComponent };
//# sourceMappingURL=forgot-password.component.js.map