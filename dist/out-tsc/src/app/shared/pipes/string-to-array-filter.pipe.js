import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var StringToArrayFilterPipe = /** @class */ (function () {
    function StringToArrayFilterPipe() {
    }
    StringToArrayFilterPipe.prototype.transform = function (value, args) {
        value = value.replace('[', '');
        value = value.replace(']', '');
        while (value.indexOf('"') > -1) {
            value = value.replace('"', '');
        }
        return value.split(',');
    };
    StringToArrayFilterPipe = __decorate([
        Pipe({
            name: 'stringToArrayFilter'
        })
    ], StringToArrayFilterPipe);
    return StringToArrayFilterPipe;
}());
export { StringToArrayFilterPipe };
//# sourceMappingURL=string-to-array-filter.pipe.js.map