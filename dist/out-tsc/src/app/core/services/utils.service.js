import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
var UtilsService = /** @class */ (function () {
    function UtilsService(userService) {
        this.userService = userService;
        this.users = [];
    }
    UtilsService.prototype.getusers = function () {
        return this.userService.getAll().subscribe(function (users) {
            return users;
        });
    };
    UtilsService.prototype.getUserIdNames = function () { };
    UtilsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [UserService])
    ], UtilsService);
    return UtilsService;
}());
export { UtilsService };
//# sourceMappingURL=utils.service.js.map