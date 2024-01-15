import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var StrToFirstLetterPipe = /** @class */ (function () {
    function StrToFirstLetterPipe() {
    }
    StrToFirstLetterPipe.prototype.transform = function (value, args) {
        return value.split(' ').map(function (i) { return i.charAt(0); }).join('').toUpperCase();
    };
    StrToFirstLetterPipe = __decorate([
        Pipe({
            name: 'strToFirstLetter'
        })
    ], StrToFirstLetterPipe);
    return StrToFirstLetterPipe;
}());
export { StrToFirstLetterPipe };
//# sourceMappingURL=str-to-first-letter.pipe.js.map