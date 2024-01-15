import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { ExportAsService } from 'ngx-export-as';
import { TranslateService } from '@ngx-translate/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { IncidentService } from './../../../../../core/services/incident.service';
import 'datatables.net';
import 'datatables.net-bs4';
var UserIncidentsComponent = /** @class */ (function () {
    function UserIncidentsComponent(translate, http, exportAsService, incidentService, route) {
        this.translate = translate;
        this.http = http;
        this.exportAsService = exportAsService;
        this.incidentService = incidentService;
        this.route = route;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.incidents = [];
        this.userId = this.route.snapshot.paramMap.get('id');
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'incidents_table',
        };
    }
    UserIncidentsComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    UserIncidentsComponent.prototype.loadDatatable = function () {
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
                    title: this.translate.instant('incidents.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('incidents.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('incidents.title'),
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
                _this.http.post(_this.apiUrl + '/api/all-incident', dataTablesParameters, {}).subscribe(function (resp) {
                    _this.incidents = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    UserIncidentsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('incidents.title')).subscribe(function () { });
    };
    UserIncidentsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    UserIncidentsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    UserIncidentsComponent.prototype.rerender = function () {
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
    ], UserIncidentsComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UserIncidentsComponent.prototype, "apiUrl", void 0);
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], UserIncidentsComponent.prototype, "dtElement", void 0);
    UserIncidentsComponent = __decorate([
        Component({
            selector: 'app-user-incidents',
            templateUrl: './user-incidents.component.html',
            styleUrls: ['./user-incidents.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            HttpClient,
            ExportAsService,
            IncidentService,
            ActivatedRoute])
    ], UserIncidentsComponent);
    return UserIncidentsComponent;
}());
export { UserIncidentsComponent };
//# sourceMappingURL=user-incidents.component.js.map