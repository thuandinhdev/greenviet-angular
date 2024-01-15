import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxRolesService } from 'ngx-permissions';
import { AuthenticationService } from '../services/authentication.service';
var UserGuard = /** @class */ (function () {
    /**
     *	@class UserGuard
     *	@constructor
    */
    function UserGuard(route, authenticationService, ngxRolesService) {
        var _this = this;
        this.route = route;
        this.authenticationService = authenticationService;
        this.ngxRolesService = ngxRolesService;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    /**
     *	Returns boolean value for user have authorize access or not to access files/resources
     *
     *	@class UserGuard
     *	@method canActivate
     *	@param {next} activeurl
     *	@param {state} route state
    */
    UserGuard.prototype.canActivate = function (next, state) {
        if (this.loginUser.is_client == 1) {
            return false;
        }
        else {
            return true;
        }
    };
    UserGuard = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Router,
            AuthenticationService,
            NgxRolesService])
    ], UserGuard);
    return UserGuard;
}());
export { UserGuard };
//# sourceMappingURL=user.guard.js.map