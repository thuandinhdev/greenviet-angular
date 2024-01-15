import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { MenuService } from './menu.service';
var MenuResolver = /** @class */ (function () {
    function MenuResolver(menuService) {
        this.menuService = menuService;
    }
    MenuResolver.prototype.resolve = function (route, state) {
        return this.menuService.getSidebarMenu();
    };
    MenuResolver = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [MenuService])
    ], MenuResolver);
    return MenuResolver;
}());
export { MenuResolver };
//# sourceMappingURL=menu-resolver.js.map