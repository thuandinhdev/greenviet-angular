import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var ObjToArPipe = /** @class */ (function () {
    function ObjToArPipe() {
    }
    ObjToArPipe.prototype.transform = function (value, args) {
        var arr = [];
        value = JSON.parse(value);
        value.forEach(function (element) {
            arr.push(element);
        });
        return arr;
    };
    ObjToArPipe = __decorate([
        Pipe({
            name: 'objToAr'
        })
    ], ObjToArPipe);
    return ObjToArPipe;
}());
export { ObjToArPipe };
//# sourceMappingURL=obj-to-ar.pipe.js.map