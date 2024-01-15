import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
var InlineMultiDatepickerComponent = /** @class */ (function () {
    function InlineMultiDatepickerComponent() {
        this.dateSelected = [];
        this.selectedClass = [];
    }
    InlineMultiDatepickerComponent.prototype.ngOnInit = function () { };
    InlineMultiDatepickerComponent.prototype.getDateItem = function (date) {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    };
    InlineMultiDatepickerComponent.prototype.onValueChange = function (event) {
        var _this = this;
        if (event.length === undefined) {
            var date_1 = this.getDateItem(event);
            var index = this.dateSelected.findIndex(function (item) {
                var testDate = _this.getDateItem(item);
                return testDate === date_1;
            });
            console.log('Date', date_1, index);
            if (index < 0) {
                this.dateSelected.push(event);
            }
            else {
                this.dateSelected.splice(index, 1);
            }
        }
        if (this.dateSelected.length > 0) {
            this.selectedClass = this.dateSelected.map(function (date) {
                return {
                    date: date,
                    classes: ['custom-selected-date']
                };
            });
        }
    };
    InlineMultiDatepickerComponent = __decorate([
        Component({
            selector: 'inline-multi-datepicker',
            templateUrl: './inline-multi-datepicker.component.html',
            styleUrls: ['./inline-multi-datepicker.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], InlineMultiDatepickerComponent);
    return InlineMultiDatepickerComponent;
}());
export { InlineMultiDatepickerComponent };
//# sourceMappingURL=inline-multi-datepicker.component.js.map