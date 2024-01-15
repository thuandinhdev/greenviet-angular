import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { ExportAsService } from 'ngx-export-as';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from './../../../../../core/services/helper.service';
import { AuthenticationService } from './../../../../../core/services/authentication.service';
var UserTimecardsComponent = /** @class */ (function () {
    function UserTimecardsComponent(translate, route, datePipe, exportAsService, authenticationService, helperService) {
        var _this = this;
        this.translate = translate;
        this.route = route;
        this.datePipe = datePipe;
        this.exportAsService = exportAsService;
        this.authenticationService = authenticationService;
        this.helperService = helperService;
        this.dtOptions = {};
        this.projectData = [];
        this.taskData = [];
        this.meetingData = [];
        this.userId = this.route.snapshot.paramMap.get('id');
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'timecard_datatable'
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    UserTimecardsComponent.prototype.ngOnInit = function () {
        this.timecard_date = new Date();
        this.loadDatatable();
        this.getTimecard();
    };
    UserTimecardsComponent.prototype.loadDatatable = function () {
        var that = this;
        this.dtOptions = {
            dom: '<"html5buttons"B>lTfgtip',
            pagingType: 'full_numbers',
            paging: true,
            pageLength: that.loginUser.settings.tables_pagination_limit,
            responsive: false,
            autoWidth: false,
            order: [],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('timecards.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('timecards.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('timecards.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }
            ],
            language: {
                "sEmptyTable": this.translate.instant('common.datatable.sEmptyTable'),
                "sInfo": this.translate.instant('common.datatable.sInfo'),
                "sInfoEmpty": this.translate.instant('common.datatable.sInfoEmpty'),
                "sSearch": "",
                "sInfoPostFix": this.translate.instant('common.datatable.sInfoPostFix'),
                "sInfoThousands": this.translate.instant('common.datatable.sInfoThousands'),
                "sLengthMenu": this.translate.instant('common.datatable.sLengthMenu'),
                "sLoadingRecords": this.translate.instant('common.datatable.sLoadingRecords'),
                "sProcessing": this.translate.instant('common.datatable.sProcessing'),
                "sZeroRecords": this.translate.instant('common.datatable.sZeroRecords'),
                "sSearchPlaceholder": this.translate.instant('common.datatable.sSearchPlaceholder'),
                "oPaginate": {
                    "sFirst": this.translate.instant('common.datatable.oPaginate.sFirst'),
                    "sLast": this.translate.instant('common.datatable.oPaginate.sLast'),
                    "sNext": this.translate.instant('common.datatable.oPaginate.sNext'),
                    "sPrevious": this.translate.instant('common.datatable.oPaginate.sPrevious')
                },
                "oAria": {
                    "sSortAscending": this.translate.instant('common.datatable.oAria.sSortAscending'),
                    "sSortDescending": this.translate.instant('common.datatable.oAria.sSortDescending')
                }
            },
            columnDefs: [
                { sortable: false, targets: [2] },
                { width: "10%", targets: [0] },
                { width: "20%", targets: [1] },
                { width: "10%", targets: [2] },
                { width: "10%", targets: [3] },
            ]
        };
    };
    UserTimecardsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('timecards.title')).subscribe(function () { });
    };
    UserTimecardsComponent.prototype.onOpenCalendar = function (container) {
        container.monthSelectHandler = function (event) {
            container._store.dispatch(container._actions.select(event.date));
        };
        container.setViewMode('month');
    };
    UserTimecardsComponent.prototype.getTimecard = function () {
        var _this = this;
        this.helperService.getTimeCardReports(this.userId, this.datePipe.transform(this.timecard_date, 'yyyy-MM'))
            .subscribe(function (data) {
            _this.timeCards = data;
            _this.projectData = _this.timeCards.projects;
            _this.taskData = _this.timeCards.tasks;
            _this.meetingData = _this.timeCards.meeting;
        });
    };
    UserTimecardsComponent = __decorate([
        Component({
            selector: 'app-user-timecards',
            templateUrl: './user-timecards.component.html',
            styleUrls: ['./user-timecards.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ActivatedRoute,
            DatePipe,
            ExportAsService,
            AuthenticationService,
            HelperService])
    ], UserTimecardsComponent);
    return UserTimecardsComponent;
}());
export { UserTimecardsComponent };
//# sourceMappingURL=user-timecards.component.js.map