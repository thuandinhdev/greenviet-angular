import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../core/services/authentication.service';
import { SettingService } from '../../core/services/setting.service';
import { MustMatch } from './../../core/helpers/must-match.validator';
import { environment } from 'src/environments/environment';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(translate, router, formBuilder, toastr, authenticationService, settingService) {
        this.translate = translate;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.settingService = settingService;
        this.apiUrl = environment.apiUrl;
        this.isSettingsLoad = false;
        this.isFormSubmitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.getSettings();
        this.loadForm();
    };
    RegisterComponent.prototype.loadForm = function () {
        this.registerForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^\S*$/)]],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            password_confirmation: ['', Validators.required],
        }, {
            validator: MustMatch('password', 'password_confirmation')
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "userControl", {
        get: function () { return this.registerForm.controls; },
        enumerable: false,
        configurable: true
    });
    RegisterComponent.prototype.getSettings = function () {
        var _this = this;
        this.settingService.getSettings()
            .subscribe(function (data) {
            _this.settings = data;
            _this.setBGImage();
            _this.isSettingsLoad = true;
        });
    };
    RegisterComponent.prototype.setBGImage = function () {
        if (this.settings.login_background) {
            this.backgroundImage = this.apiUrl + '/uploads/login_bg/' + this.settings.login_background;
        }
        else {
            this.backgroundImage = 'assets/img/login-bg-2.png';
        }
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.authenticationService.register(this.registerForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('register.messages.success'), _this.translate.instant('register.title'));
            _this.router.navigate(['login']);
        });
    };
    RegisterComponent = __decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            Router,
            FormBuilder,
            ToastrService,
            AuthenticationService,
            SettingService])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map