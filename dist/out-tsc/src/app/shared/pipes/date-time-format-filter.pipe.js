import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import * as moment from 'moment';
var DateTimeFormatFilterPipe = /** @class */ (function () {
    function DateTimeFormatFilterPipe() {
    }
    DateTimeFormatFilterPipe.prototype.transform = function (date, format) {
        if (date) {
            return moment(date).format(format);
        }
    };
    DateTimeFormatFilterPipe = __decorate([
        Pipe({
            name: 'dateTimeFormatFilter'
        })
    ], DateTimeFormatFilterPipe);
    return DateTimeFormatFilterPipe;
}());
export { DateTimeFormatFilterPipe };
//# sourceMappingURL=date-time-format-filter.pipe.js.map