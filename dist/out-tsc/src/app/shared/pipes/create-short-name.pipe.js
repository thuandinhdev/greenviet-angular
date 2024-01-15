import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var CreateShortNamePipe = /** @class */ (function () {
    function CreateShortNamePipe() {
    }
    CreateShortNamePipe.prototype.transform = function (value, args) {
        if (value && value.match(/\b(\w)/g)) {
            var matches = value.match(/\b(\w)/g), str1 = matches.toString(), str2 = str1.replace(/\,/g, "");
            return str2.toUpperCase();
        }
    };
    CreateShortNamePipe = __decorate([
        Pipe({
            name: 'createShortName'
        })
    ], CreateShortNamePipe);
    return CreateShortNamePipe;
}());
export { CreateShortNamePipe };
//# sourceMappingURL=create-short-name.pipe.js.map