import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { ExportAsService } from 'ngx-export-as';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { environment } from '../../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
var IncidentReportsComponent = /** @class */ (function () {
    function IncidentReportsComponent(translate, http, authenticationService, exportAsService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.authenticationService = authenticationService;
        this.exportAsService = exportAsService;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.incidents = [];
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'incidents_table',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    IncidentReportsComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    IncidentReportsComponent.prototype.loadDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            responsive: true,
            searching: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0],
            columns: [
                {
                    'sortable': true,
                    'target': [0]
                },
                {
                    'sortable': true,
                    'target': [1]
                },
                {
                    'sortable': true,
                    'target': [2]
                },
                {
                    'sortable': true,
                    'target': [3]
                },
                {
                    'sortable': true,
                    'target': [4]
                },
                {
                    'sortable': true,
                    'target': [5]
                },
                {
                    'sortable': true,
                    'target': [6]
                },
                {
                    'sortable': true,
                    'target': [7]
                },
                {
                    'sortable': true,
                    'target': [8]
                },
                {
                    'sortable': true,
                    'target': [9]
                },
                {
                    'sortable': true,
                    'target': [10]
                },
                {
                    'sortable': true,
                    'target': [11]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('reports.headings.incident_report'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('reports.headings.incident_report'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('reports.headings.incident_report'),
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
            ajax: function (dataTablesParameters, callback) {
                _this.http
                    .post(_this.apiUrl + '/api/incident/incident-report', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.incidents = resp.data;
                    _this.isPageLoaded = true;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    IncidentReportsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('reports.headings.incident_report')).subscribe(function () { });
    };
    IncidentReportsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    IncidentReportsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.incidents.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    IncidentReportsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.columns().every(function () {
                var that = this;
                $('input', this.footer()).on('keyup change', function () {
                    if (that.search() !== this['value']) {
                        that.search(this['value']).draw();
                    }
                });
            });
        });
    };
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], IncidentReportsComponent.prototype, "dtElement", void 0);
    IncidentReportsComponent = __decorate([
        Component({
            selector: 'app-incident-reports',
            templateUrl: './incident-reports.component.html',
            styleUrls: ['./incident-reports.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            HttpClient,
            AuthenticationService,
            ExportAsService])
    ], IncidentReportsComponent);
    return IncidentReportsComponent;
}());
export { IncidentReportsComponent };
//# sourceMappingURL=incident-reports.component.js.map