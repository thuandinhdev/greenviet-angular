import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import * as _ from 'lodash';
var FilterUniquePipe = /** @class */ (function () {
    function FilterUniquePipe() {
    }
    FilterUniquePipe.prototype.transform = function (value) {
        if (value !== undefined && value !== null) {
            return _.uniqBy(value, ['user_id', 'role_id', 'department_id']);
        }
        return value;
    };
    FilterUniquePipe = __decorate([
        Pipe({
            name: 'filterUnique',
            pure: false
        })
    ], FilterUniquePipe);
    return FilterUniquePipe;
}());
export { FilterUniquePipe };
//# sourceMappingURL=filter-unique.pipe.js.map