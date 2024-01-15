import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(router, http, toastrService, ngxRolesService, ngxPermissionsService) {
        this.router = router;
        this.http = http;
        this.toastrService = toastrService;
        this.ngxRolesService = ngxRolesService;
        this.ngxPermissionsService = ngxPermissionsService;
        this.apiUrl = environment.apiUrl;
        if (localStorage.getItem('loginUser')) {
            this.loginCurrentUser = JSON.parse(localStorage.getItem('loginUser'));
            this.userAccessToken = JSON.parse(localStorage.getItem('access_token'));
        }
        this.currentUserSubject = new BehaviorSubject(this.loginCurrentUser);
        this.currentTokenSubject = new BehaviorSubject(this.userAccessToken);
        this.loginUser = this.currentUserSubject.asObservable();
        this.loginToken = this.currentTokenSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "currentTokenValue", {
        get: function () {
            return this.currentTokenSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    AuthenticationService.prototype.setLoginUser = function (user) {
        localStorage.setItem('loginUser', JSON.stringify(user));
        this.setUserPermissions(user);
        this.currentUserSubject.next(user);
    };
    AuthenticationService.prototype.setUserPermissions = function (user) {
        this.ngxRolesService.flushRoles();
        this.ngxPermissionsService.flushPermissions();
        localStorage.setItem("permissions", JSON.stringify(user));
        for (var iRow in user.permissions) {
            this.ngxPermissionsService.addPermission(user.permissions[iRow]);
        }
        this.ngxRolesService.addRoles(user.permissions);
    };
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem("access_token");
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return this.getToken() !== null;
    };
    AuthenticationService.prototype.register = function (user) {
        return this.http.post(this.apiUrl + "/api/register", user);
    };
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(this.apiUrl + "/api/login", { email: email, password: password })
            .pipe(map(function (user) {
            if (user) {
                localStorage.setItem('access_token', JSON.stringify(user));
                _this.currentTokenSubject.next(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.forgotPassword = function (email) {
        return this.http.post(this.apiUrl + "/api/forgot-password", email);
    };
    AuthenticationService.prototype.getVerifyUser = function (data) {
        return this.http.post(this.apiUrl + "/api/verify/user", data);
    };
    AuthenticationService.prototype.getVerifyUserToken = function (data) {
        return this.http.post(this.apiUrl + "/api/verify/token", data);
    };
    AuthenticationService.prototype.resetPassword = function (data) {
        return this.http.post(this.apiUrl + "/api/reset-password", data);
    };
    AuthenticationService.prototype.logout = function (isheader) {
        var _this = this;
        if (isheader === void 0) { isheader = true; }
        this.http.get(this.apiUrl + "/api/logout")
            .subscribe(function (data) {
            localStorage.removeItem('loginUser');
            localStorage.removeItem('access_token');
            if (isheader) {
                _this.toastrService.success('You have successfully logged out.');
            }
            if (localStorage.getItem("permissions") != 'undefined' && localStorage.getItem("permissions") != null) {
                localStorage.removeItem("permissions");
            }
            _this.router.navigate(['/login']);
        });
    };
    AuthenticationService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Router,
            HttpClient,
            ToastrService,
            NgxRolesService,
            NgxPermissionsService])
    ], AuthenticationService);
    return AuthenticationService;
}());
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map