import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../core/services/authentication.service';
import { SettingService } from 'src/app/core/services/setting.service';
import { environment } from 'src/environments/environment';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, formBuilder, toastr, authenticationService, settingService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.settingService = settingService;
        this.apiUrl = environment.apiUrl;
        this.isFormSubmitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.getSettings();
        this.loadForm();
    };
    LoginComponent.prototype.loadForm = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]]
        });
    };
    LoginComponent.prototype.getSettings = function () {
        var _this = this;
        this.settingService.getSettings()
            .subscribe(function (data) {
            _this.settings = data;
            _this.setBGImage();
            _this.isSettingsLoad = true;
        });
    };
    Object.defineProperty(LoginComponent.prototype, "userControl", {
        get: function () { return this.loginForm.controls; },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.setBGImage = function () {
        if (this.settings && this.settings.login_background) {
            this.backgroundImage = this.apiUrl + '/uploads/login_bg/' + this.settings.login_background;
        }
        else {
            this.backgroundImage = 'assets/img/login-bg-2.png';
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.authenticationService.login(this.userControl.email.value, this.userControl.password.value)
            .pipe(first())
            .subscribe(function (data) {
            _this.router.navigate(['dashboard']);
        });
    };
    LoginComponent.prototype.instantLogin = function (email, password) {
        this.loginForm.patchValue({ email: email });
        this.loginForm.patchValue({ password: password });
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [Router,
            FormBuilder,
            ToastrService,
            AuthenticationService,
            SettingService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map