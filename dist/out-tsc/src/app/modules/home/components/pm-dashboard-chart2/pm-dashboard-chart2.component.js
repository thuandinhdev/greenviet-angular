import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
var PmDashboardChart2Component = /** @class */ (function () {
    function PmDashboardChart2Component(translate) {
        this.translate = translate;
        this.barChartLabels = [];
        this.currentDate = new Date();
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.tasks = [];
        this.defects = [];
        this.incidents = [];
        this.barChartData = [];
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            maintainAspectRatio: false
        };
        this.barChartColors = [{
                backgroundColor: 'rgba(255, 141, 96, 0.8)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }, {
                backgroundColor: 'rgba(0, 157, 160, 0.8)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.barChartLabels = this.translate.instant('months');
    }
    PmDashboardChart2Component.prototype.ngOnInit = function () {
        this.renderChart();
    };
    PmDashboardChart2Component.prototype.renderChart = function () {
        for (var iRow in this.monthlyReport) {
            this.tasks.push(this.monthlyReport[iRow].tasks);
            this.defects.push(this.monthlyReport[iRow].defects);
            this.incidents.push(this.monthlyReport[iRow].incidents);
        }
        this.barChartData = [
            { data: this.tasks, label: this.translate.instant('tasks.title') },
            { data: this.defects, label: this.translate.instant('defects.title') },
            { data: this.incidents, label: this.translate.instant('incidents.title') }
        ];
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardChart2Component.prototype, "monthlyReport", void 0);
    PmDashboardChart2Component = __decorate([
        Component({
            selector: 'app-pm-dashboard-chart2',
            templateUrl: './pm-dashboard-chart2.component.html',
            styleUrls: ['./pm-dashboard-chart2.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService])
    ], PmDashboardChart2Component);
    return PmDashboardChart2Component;
}());
export { PmDashboardChart2Component };
//# sourceMappingURL=pm-dashboard-chart2.component.js.map