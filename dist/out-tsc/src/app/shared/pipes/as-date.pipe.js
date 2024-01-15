import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var AsDatePipe = /** @class */ (function () {
    function AsDatePipe() {
    }
    AsDatePipe.prototype.transform = function (value, args) {
        return new Date(value);
    };
    AsDatePipe = __decorate([
        Pipe({
            name: 'asDate'
        })
    ], AsDatePipe);
    return AsDatePipe;
}());
export { AsDatePipe };
//# sourceMappingURL=as-date.pipe.js.map