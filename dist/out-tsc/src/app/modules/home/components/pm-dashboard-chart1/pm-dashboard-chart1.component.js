import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
var PmDashboardChart1Component = /** @class */ (function () {
    function PmDashboardChart1Component(translate) {
        this.translate = translate;
        this.polarAreaChartLabels = [];
        this.polarAreaChartData = [0, 0, 0];
        this.polarAreaLegend = true;
        this.ploarChartColors = [{
                backgroundColor: ["#1cbcd8", "#ffb136", "#2ecc71"]
            }];
        this.polarAreaChartType = 'polarArea';
        this.polarChartOptions = {
            animation: false,
            responsive: true,
            maintainAspectRatio: false
        };
        this.polarAreaChartLabels = [
            this.translate.instant('common.status.open'),
            this.translate.instant('common.status.in_progress'),
            this.translate.instant('common.status.completed')
        ];
    }
    PmDashboardChart1Component.prototype.ngOnInit = function () {
        this.polarAreaChartData = [
            this.projectChartReport.open,
            this.projectChartReport.in_progress + this.projectChartReport.on_hold,
            this.projectChartReport.cancel + this.projectChartReport.completed,
        ];
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardChart1Component.prototype, "projectChartReport", void 0);
    PmDashboardChart1Component = __decorate([
        Component({
            selector: 'app-pm-dashboard-chart1',
            templateUrl: './pm-dashboard-chart1.component.html',
            styleUrls: ['./pm-dashboard-chart1.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService])
    ], PmDashboardChart1Component);
    return PmDashboardChart1Component;
}());
export { PmDashboardChart1Component };
//# sourceMappingURL=pm-dashboard-chart1.component.js.map