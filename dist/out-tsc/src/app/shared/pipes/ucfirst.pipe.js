import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var UcfirstPipe = /** @class */ (function () {
    function UcfirstPipe() {
    }
    UcfirstPipe.prototype.transform = function (value, args) {
        value = value.toLowerCase();
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    UcfirstPipe = __decorate([
        Pipe({
            name: 'ucfirst'
        })
    ], UcfirstPipe);
    return UcfirstPipe;
}());
export { UcfirstPipe };
//# sourceMappingURL=ucfirst.pipe.js.map