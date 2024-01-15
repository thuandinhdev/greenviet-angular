import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import * as moment from 'moment';
var HoursPipe = /** @class */ (function () {
    function HoursPipe() {
    }
    HoursPipe.prototype.transform = function (value, args) {
        var hours = moment(value.end_date).diff(moment(value.start_date), 'hours'), minutes = moment(value.end_date).diff(moment(value.start_date), 'minutes');
        return hours + ":" + minutes % 60;
    };
    HoursPipe = __decorate([
        Pipe({
            name: 'hours'
        })
    ], HoursPipe);
    return HoursPipe;
}());
export { HoursPipe };
//# sourceMappingURL=hours.pipe.js.map