import { __decorate, __extends, __metadata, __param } from "tslib";
import { LOCALE_ID, Inject, Injectable } from '@angular/core';
import { CalendarEventTitleFormatter, CalendarDateFormatter } from 'angular-calendar';
import { DatePipe } from '@angular/common';
var CustomEventTitleFormatter = /** @class */ (function (_super) {
    __extends(CustomEventTitleFormatter, _super);
    function CustomEventTitleFormatter(locale) {
        var _this = _super.call(this) || this;
        _this.locale = locale;
        return _this;
    }
    // you can override any of the methods defined in the parent class
    CustomEventTitleFormatter.prototype.month = function (event) {
        return "<b>" + new DatePipe(this.locale).transform(event.start, 'h:m a', this.locale) + "</b> " + event.title;
    };
    CustomEventTitleFormatter.prototype.week = function (event) {
        return "<b>" + new DatePipe(this.locale).transform(event.start, 'h:m a', this.locale) + "</b> " + event.title;
    };
    CustomEventTitleFormatter.prototype.day = function (event) {
        return "<b>" + new DatePipe(this.locale).transform(event.start, 'h:m a', this.locale) + "</b> " + event.title;
    };
    CustomEventTitleFormatter = __decorate([
        Injectable(),
        __param(0, Inject(LOCALE_ID)),
        __metadata("design:paramtypes", [String])
    ], CustomEventTitleFormatter);
    return CustomEventTitleFormatter;
}(CalendarEventTitleFormatter));
export { CustomEventTitleFormatter };
var CustomDateFormatter = /** @class */ (function (_super) {
    __extends(CustomDateFormatter, _super);
    function CustomDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // you can override any of the methods defined in the parent class
    CustomDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new DatePipe(locale).transform(date, 'HH:mm', locale);
    };
    CustomDateFormatter.prototype.weekViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.dayViewHour({ date: date, locale: locale });
    };
    return CustomDateFormatter;
}(CalendarDateFormatter));
export { CustomDateFormatter };
//# sourceMappingURL=custom-event-title-formatter.provider.js.map