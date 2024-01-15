import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
var AuthGuard = /** @class */ (function () {
    /**
     *	@class AuthGuard
     *	@constructor
    */
    function AuthGuard(authenticationService, route) {
        this.authenticationService = authenticationService;
        this.route = route;
    }
    /**
     *	Returns boolean value for user login or not
     *
     *	@class AuthGuard
     *	@method canActivate
     *	@param {next} next
     *	@param {state} route state
    */
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }
        else {
            this.route.navigate(["login"]);
            return false;
        }
    };
    AuthGuard = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AuthenticationService,
            Router])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map