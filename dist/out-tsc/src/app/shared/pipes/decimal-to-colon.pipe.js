import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var DecimalToColonPipe = /** @class */ (function () {
    function DecimalToColonPipe() {
    }
    DecimalToColonPipe.prototype.transform = function (value, args) {
        if (value == '0') {
            return "00:00";
        }
        if (value == 0) {
            return "00:00";
        }
        var before = '00', after = '00';
        if (value) {
            before = value.toString().split(".")[0],
                after = value.toString().split(".")[1];
            if (Number.isInteger(value)) {
                if (value.toString().length == 1) {
                    before = "0" + before;
                    after = "00";
                }
                else {
                    before = before;
                    after = "00";
                }
            }
            else {
                if (before.length == 1) {
                    before = "0" + before;
                }
                if (after.length == 1) {
                    after = after + "0";
                }
            }
        }
        return before + ":" + after;
    };
    DecimalToColonPipe = __decorate([
        Pipe({
            name: 'decimalToColon'
        })
    ], DecimalToColonPipe);
    return DecimalToColonPipe;
}());
export { DecimalToColonPipe };
//# sourceMappingURL=decimal-to-colon.pipe.js.map