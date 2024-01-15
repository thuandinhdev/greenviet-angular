import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
        this.activeActiveReportTab = '1';
    }
    ReportsComponent.prototype.ngOnInit = function () { };
    ReportsComponent.prototype.setActiveReportTab = function ($event) {
        this.activeActiveReportTab = $event.id;
    };
    ReportsComponent.prototype.getActiveReportTab = function (tab) {
        return this.activeActiveReportTab === tab;
    };
    ReportsComponent = __decorate([
        Component({
            selector: 'app-reports',
            templateUrl: './reports.component.html',
            styleUrls: ['./reports.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());
export { ReportsComponent };
//# sourceMappingURL=reports.component.js.map