import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DashboardService } from './../../../../core/services/dashboard.service';
var data = { "series": [] };
var PmDashboardChartsComponent = /** @class */ (function () {
    function PmDashboardChartsComponent(translate, dashboardService) {
        this.translate = translate;
        this.dashboardService = dashboardService;
        this.taskChartData = [0, 0, 0, 0, 0, 0];
        this.totalPercetangeValue = 0;
    }
    PmDashboardChartsComponent.prototype.ngOnInit = function () {
        this.getTaskCountByStatus();
    };
    PmDashboardChartsComponent.prototype.getTaskCountByStatus = function () {
        var _this = this;
        this.taskReport.forEach(function (element) {
            _this.taskChartData[element.status - 1] = element.total;
        });
        this.totalPercetangeValue = this.taskChartData[0] + this.taskChartData[1] + this.taskChartData[2] + this.taskChartData[3] + this.taskChartData[4] + this.taskChartData[5];
        var that = this, inProgressTotal = this.taskChartData[1] + this.taskChartData[2] + this.taskChartData[3], totalCounts = this.getPercentage(this.taskChartData[0]) + this.getPercentage(inProgressTotal) + this.getPercentage(this.taskChartData[4]) + this.getPercentage(this.taskChartData[5]);
        data.series = [
            {
                "name": this.translate.instant('common.status.open'),
                "className": "ct-open",
                "value": this.getPercentage(this.taskChartData[0])
            },
            {
                "name": this.translate.instant('common.status.in_progress'),
                "className": "ct-progress",
                "value": this.getPercentage(inProgressTotal)
            },
            {
                "name": this.translate.instant('common.status.cancel'),
                "className": "ct-cancel",
                "value": this.getPercentage(this.taskChartData[4])
            },
            {
                "name": this.translate.instant('common.status.completed'),
                "className": "ct-completed",
                "value": this.getPercentage(this.taskChartData[5])
            }
        ];
        this.donutChart = [{
                type: 'Pie',
                data: data,
                options: {
                    donut: true,
                    startAngle: 0,
                    labelInterpolationFnc: function (value) {
                        var total = data.series.reduce(function (prev, series) {
                            return prev + series.value;
                        }, 0);
                        if (isNaN(Math.round(totalCounts))) {
                            return '0%';
                        }
                        else {
                            return Math.round(totalCounts) + '%';
                        }
                    }
                },
                events: {
                    draw: function (data) {
                        if (data.type === 'label') {
                            if (data.index === 0) {
                                data.element.attr({
                                    dx: data.element.root().width() / 2,
                                    dy: data.element.root().height() / 2
                                });
                            }
                            else {
                                data.element.remove();
                            }
                        }
                    }
                }
            }];
    };
    PmDashboardChartsComponent.prototype.getPercentage = function (num) {
        if (num === void 0) { num = 0; }
        if (isNaN((100 * num) / this.totalPercetangeValue)) {
            return 0;
        }
        else {
            return (100 * num) / this.totalPercetangeValue;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardChartsComponent.prototype, "taskReport", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardChartsComponent.prototype, "projectChartReport", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardChartsComponent.prototype, "monthlyReport", void 0);
    PmDashboardChartsComponent = __decorate([
        Component({
            selector: 'app-pm-dashboard-charts',
            templateUrl: './pm-dashboard-charts.component.html',
            styleUrls: ['./pm-dashboard-charts.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            DashboardService])
    ], PmDashboardChartsComponent);
    return PmDashboardChartsComponent;
}());
export { PmDashboardChartsComponent };
//# sourceMappingURL=pm-dashboard-charts.component.js.map