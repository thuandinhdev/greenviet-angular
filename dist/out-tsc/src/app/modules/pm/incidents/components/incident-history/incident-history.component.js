import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../../../../core/services/user.service';
import 'datatables.net';
import 'datatables.net-bs4';
var IncidentHistoryComponent = /** @class */ (function () {
    function IncidentHistoryComponent(translate, userService) {
        this.translate = translate;
        this.userService = userService;
        this.dtOptions = {};
        this.userLists = [];
    }
    IncidentHistoryComponent.prototype.ngOnInit = function () {
        this.getUserIdName();
        this.loadDatatable();
    };
    IncidentHistoryComponent.prototype.loadDatatable = function () {
        var that = this;
        this.dtOptions = {
            dom: '<"html5buttons"B>lTfgtip',
            pagingType: 'full_numbers',
            paging: true,
            pageLength: that.loginUser.settings.tables_pagination_limit,
            responsive: false,
            autoWidth: false,
            order: [],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('histories.title'),
                    className: "btn btn-datatable-gredient"
                }, {
                    extend: 'excel',
                    title: this.translate.instant('histories.title'),
                    className: "btn btn-datatable-gredient"
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('histories.title'),
                    className: "btn btn-datatable-gredient"
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
            columnDefs: [
                { sortable: true, targets: [6] },
                { width: "8%", targets: [0] },
                { width: "30%", targets: [1] },
                { width: "8%", targets: [2] },
                { width: "8%", targets: [3] },
                { width: "8%", targets: [4] },
                { width: "8%", targets: [5] },
                { width: "10%", targets: [6] },
            ]
        };
    };
    IncidentHistoryComponent.prototype.getUserIdName = function () {
        var _this = this;
        this.userService.getUserIdName().subscribe(function (data) {
            _this.userData = data;
            _this.setUsers();
        });
    };
    IncidentHistoryComponent.prototype.setUsers = function () {
        this.userLists = [];
        for (var iRow in this.userData) {
            this.userLists[this.userData[iRow].id] = {
                "name": this.userData[iRow].firstname + " " + this.userData[iRow].lastname,
                "avatar": this.userData[iRow].avatar,
            };
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IncidentHistoryComponent.prototype, "incident", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IncidentHistoryComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IncidentHistoryComponent.prototype, "apiUrl", void 0);
    IncidentHistoryComponent = __decorate([
        Component({
            selector: 'app-incident-history',
            templateUrl: './incident-history.component.html',
            styleUrls: ['./incident-history.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            UserService])
    ], IncidentHistoryComponent);
    return IncidentHistoryComponent;
}());
export { IncidentHistoryComponent };
//# sourceMappingURL=incident-history.component.js.map