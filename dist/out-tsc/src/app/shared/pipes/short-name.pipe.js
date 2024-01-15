import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var ShortNamePipe = /** @class */ (function () {
    function ShortNamePipe() {
    }
    ShortNamePipe.prototype.transform = function (value, args) {
        var shortName = '';
        if (value.created_firstname && value.created_lastname) {
            var created_first = value.created_firstname.substring(0, 1), created_second = value.created_lastname.substring(0, 1);
            shortName = created_first + created_second;
            return shortName;
        }
        else if (value.firstname && value.lastname) {
            var first = value.firstname.substring(0, 1), second = value.lastname.substring(0, 1);
            shortName = first + second;
            return shortName.toUpperCase();
        }
        else {
            return 'Unknown';
        }
    };
    ShortNamePipe = __decorate([
        Pipe({
            name: 'shortName'
        })
    ], ShortNamePipe);
    return ShortNamePipe;
}());
export { ShortNamePipe };
//# sourceMappingURL=short-name.pipe.js.map