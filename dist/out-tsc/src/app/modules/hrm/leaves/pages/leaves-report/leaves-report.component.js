import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { TranslateService } from '@ngx-translate/core';
import { ExportAsService } from 'ngx-export-as';
import { NgxRolesService } from 'ngx-permissions';
import { Subject } from 'rxjs';
import { LeaveService } from '../../../../../core/services/leave.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { leaves_status, leave_status_key_value } from '../../../../../core/helpers/hrm.helper';
import { environment } from '../../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
var LeavesReportComponent = /** @class */ (function () {
    function LeavesReportComponent(translate, ngxRolesService, http, exportAsService, authenticationService, leaveService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.exportAsService = exportAsService;
        this.authenticationService = authenticationService;
        this.leaveService = leaveService;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.leavesStatus = leaves_status;
        this.leaveStatusKeyValue = leave_status_key_value;
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'leaves_table',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    LeavesReportComponent.prototype.ngOnInit = function () {
        this.loadLeaveDatatable();
    };
    LeavesReportComponent.prototype.loadLeaveDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0, 'desc'],
            columns: [{
                    'sortable': true,
                    'width': "2%",
                    'target': [0]
                }, {
                    'sortable': true,
                    'target': [1]
                }, {
                    'sortable': true,
                    'width': "10%",
                    'target': [2]
                }, {
                    'sortable': true,
                    'width': "10%",
                    'target': [3]
                }
            ],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('providers.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('providers.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('providers.title'),
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
                console.log('===', dataTablesParameters);
                _this.http
                    .post(_this.apiUrl + '/api/leaves/report', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.leaves = resp.data;
                    }
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    LeavesReportComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('providers.title')).subscribe(function () { });
    };
    LeavesReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    LeavesReportComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    LeavesReportComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.leaves.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], LeavesReportComponent.prototype, "dtElement", void 0);
    LeavesReportComponent = __decorate([
        Component({
            selector: 'app-leaves-report',
            templateUrl: './leaves-report.component.html',
            styleUrls: ['./leaves-report.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            NgxRolesService,
            HttpClient,
            ExportAsService,
            AuthenticationService,
            LeaveService])
    ], LeavesReportComponent);
    return LeavesReportComponent;
}());
export { LeavesReportComponent };
//# sourceMappingURL=leaves-report.component.js.map