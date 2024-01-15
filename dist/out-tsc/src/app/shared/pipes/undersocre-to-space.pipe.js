import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var UndersocreToSpacePipe = /** @class */ (function () {
    function UndersocreToSpacePipe() {
    }
    UndersocreToSpacePipe.prototype.transform = function (value, args) {
        return value.replace("_", " ");
    };
    UndersocreToSpacePipe = __decorate([
        Pipe({
            name: 'undersocreToSpace'
        })
    ], UndersocreToSpacePipe);
    return UndersocreToSpacePipe;
}());
export { UndersocreToSpacePipe };
//# sourceMappingURL=undersocre-to-space.pipe.js.map