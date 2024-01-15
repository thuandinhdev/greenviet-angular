import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var RoundNumberPipe = /** @class */ (function () {
    function RoundNumberPipe() {
    }
    RoundNumberPipe.prototype.transform = function (value) {
        return Math.round(value);
    };
    RoundNumberPipe = __decorate([
        Pipe({
            name: 'roundNumber'
        })
    ], RoundNumberPipe);
    return RoundNumberPipe;
}());
export { RoundNumberPipe };
//# sourceMappingURL=round-number.pipe.js.map