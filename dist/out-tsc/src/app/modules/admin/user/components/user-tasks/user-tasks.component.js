import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { ExportAsService } from 'ngx-export-as';
import { TranslateService } from '@ngx-translate/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { TaskService } from './../../../../../core/services/task.service';
import { environment } from '../../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
var UserTasksComponent = /** @class */ (function () {
    function UserTasksComponent(translate, http, exportAsService, taskService, route) {
        this.translate = translate;
        this.http = http;
        this.exportAsService = exportAsService;
        this.taskService = taskService;
        this.route = route;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.tasks = [];
        this.userId = this.route.snapshot.paramMap.get('id');
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'tasks_table',
        };
    }
    UserTasksComponent.prototype.ngOnInit = function () {
        this.loadTaskDatatable();
    };
    UserTasksComponent.prototype.loadTaskDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            select: true,
            order: [0],
            columns: [{
                    'sortable': true,
                    'width': "7%",
                    'target': [0]
                }, {
                    'sortable': true,
                    'target': [1]
                }, {
                    'sortable': true,
                    'width': "12%",
                    'target': [2]
                }, {
                    'sortable': true,
                    'width': "12%",
                    'target': [3]
                }, {
                    'sortable': true,
                    'width': "11%",
                    'target': [4]
                }, {
                    'sortable': true,
                    'width': "10%",
                    'target': [5]
                }, {
                    'sortable': true,
                    'width': "10%",
                    'target': [6]
                }],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('tasks.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('tasks.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('tasks.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }],
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
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters = {
                    columns: dataTablesParameters.columns,
                    draw: dataTablesParameters.draw,
                    length: dataTablesParameters.length,
                    order: dataTablesParameters.order,
                    search: dataTablesParameters.search,
                    start: dataTablesParameters.start,
                    isUserProfile: 1,
                    user_id: _this.userId
                };
                _this.http
                    .post(_this.apiUrl + '/api/all-tasks', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.tasks = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    UserTasksComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('tasks.title')).subscribe(function () { });
    };
    UserTasksComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    UserTasksComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    UserTasksComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
            });
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UserTasksComponent.prototype, "loginUser", void 0);
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], UserTasksComponent.prototype, "dtElement", void 0);
    UserTasksComponent = __decorate([
        Component({
            selector: 'app-user-tasks',
            templateUrl: './user-tasks.component.html',
            styleUrls: ['./user-tasks.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            HttpClient,
            ExportAsService,
            TaskService,
            ActivatedRoute])
    ], UserTasksComponent);
    return UserTasksComponent;
}());
export { UserTasksComponent };
//# sourceMappingURL=user-tasks.component.js.map