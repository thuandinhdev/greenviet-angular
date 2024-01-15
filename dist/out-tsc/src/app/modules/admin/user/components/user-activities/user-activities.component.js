import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { ExportAsService } from 'ngx-export-as';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
var UserActivitiesComponent = /** @class */ (function () {
    function UserActivitiesComponent(translate, http, exportAsService, toastr) {
        this.translate = translate;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.activities = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'activities_table',
        };
    }
    UserActivitiesComponent.prototype.ngOnInit = function () {
        this.loadRoleDatatable();
    };
    UserActivitiesComponent.prototype.loadRoleDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0],
            columns: [{
                    'sortable': true,
                    'width': "18%",
                    'target': [0]
                }, {
                    'sortable': true,
                    'width': "20%",
                    'target': [1]
                }, {
                    'sortable': true,
                    'width': "62%",
                    'target': [3]
                }
            ],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('activities.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('activities.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('activities.title'),
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
                dataTablesParameters.userId = _this.user.id;
                _this.http
                    .post(_this.apiUrl + '/api/all-activities', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.activities = resp.data;
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
    UserActivitiesComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('activities.title')).subscribe(function () { });
    };
    UserActivitiesComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    UserActivitiesComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UserActivitiesComponent.prototype, "user", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UserActivitiesComponent.prototype, "loginUser", void 0);
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], UserActivitiesComponent.prototype, "dtElement", void 0);
    UserActivitiesComponent = __decorate([
        Component({
            selector: 'app-user-activities',
            templateUrl: './user-activities.component.html',
            styleUrls: ['./user-activities.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            HttpClient,
            ExportAsService,
            ToastrService])
    ], UserActivitiesComponent);
    return UserActivitiesComponent;
}());
export { UserActivitiesComponent };
//# sourceMappingURL=user-activities.component.js.map