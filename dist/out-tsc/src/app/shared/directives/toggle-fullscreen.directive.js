import { __decorate, __metadata } from "tslib";
import { Directive, HostListener } from '@angular/core';
import * as screenfull from 'screenfull';
var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    };
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToggleFullscreenDirective.prototype, "onClick", null);
    ToggleFullscreenDirective = __decorate([
        Directive({
            selector: '[appToggleFullscreen]'
        }),
        __metadata("design:paramtypes", [])
    ], ToggleFullscreenDirective);
    return ToggleFullscreenDirective;
}());
export { ToggleFullscreenDirective };
//# sourceMappingURL=toggle-fullscreen.directive.js.map