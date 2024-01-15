import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../core/services/authentication.service';
import { SettingService } from 'src/app/core/services/setting.service';
import { MustMatch } from './../../core/helpers/must-match.validator';
import { environment } from 'src/environments/environment';
var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(translate, router, route, formBuilder, toastr, authenticationService, settingService) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.settingService = settingService;
        this.apiUrl = environment.apiUrl;
        this.isFormSubmitted = false;
        this.isSettingsLoad = false;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.getVerifyToken(params.get('email'), params.get('token'));
            _this.loadForm(params);
        });
        this.getSettings();
    };
    ResetPasswordComponent.prototype.loadForm = function (params) {
        this.resetPasswordForm = this.formBuilder.group({
            email: [params.get('email')],
            token: [params.get('token')],
            password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            password_confirmation: ['', Validators.required],
        }, {
            validator: MustMatch('password', 'password_confirmation')
        });
    };
    ResetPasswordComponent.prototype.getVerifyToken = function (email, token) {
        var _this = this;
        this.authenticationService.getVerifyUserToken({ email: email, token: token })
            .subscribe(function (data) { }, function (error) {
            _this.toastr.success(_this.translate.instant('reset_password.create.error_messages.message5'), _this.translate.instant('reset_password.title'));
            _this.router.navigate(['login']);
        });
    };
    Object.defineProperty(ResetPasswordComponent.prototype, "userControl", {
        get: function () { return this.resetPasswordForm.controls; },
        enumerable: false,
        configurable: true
    });
    ResetPasswordComponent.prototype.getSettings = function () {
        var _this = this;
        this.settingService.getSettings()
            .subscribe(function (data) {
            _this.settings = data;
            _this.setBGImage();
            _this.isSettingsLoad = true;
        });
    };
    ResetPasswordComponent.prototype.setBGImage = function () {
        if (this.settings.login_background) {
            this.backgroundImage = this.apiUrl + '/uploads/login_bg/' + this.settings.login_background;
        }
        else {
            this.backgroundImage = 'assets/img/login-bg-2.png';
        }
    };
    ResetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.resetPasswordForm.invalid) {
            return;
        }
        this.authenticationService.resetPassword(this.resetPasswordForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('reset_password.messages.success'), _this.translate.instant('reset_password.title'));
            _this.router.navigate(['login']);
        });
    };
    ResetPasswordComponent = __decorate([
        Component({
            selector: 'app-reset-password',
            templateUrl: './reset-password.component.html',
            styleUrls: ['./reset-password.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            Router,
            ActivatedRoute,
            FormBuilder,
            ToastrService,
            AuthenticationService,
            SettingService])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
export { ResetPasswordComponent };
//# sourceMappingURL=reset-password.component.js.map