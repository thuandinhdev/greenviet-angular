import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../../../../core/services/user.service';
var DefectHistoryComponent = /** @class */ (function () {
    function DefectHistoryComponent(translate, route, userService) {
        this.translate = translate;
        this.route = route;
        this.userService = userService;
        this.dtOptions = {};
        this.userData = [];
        this.userLists = [];
    }
    DefectHistoryComponent.prototype.ngOnInit = function () {
        this.getUserIdName();
        this.loadDatatable();
    };
    DefectHistoryComponent.prototype.loadDatatable = function () {
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: false,
            processing: false,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0, 'desc'],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('histories.title'),
                    className: "btn btn-datatable-gredient",
                }, {
                    extend: 'excel',
                    title: this.translate.instant('histories.title'),
                    className: "btn btn-datatable-gredient",
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('histories.title'),
                    className: "btn btn-datatable-gredient",
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
            }
        };
    };
    DefectHistoryComponent.prototype.getUserIdName = function () {
        var _this = this;
        this.userService.getUserIdName().subscribe(function (data) {
            _this.userData = data;
            _this.setUsers();
        });
    };
    DefectHistoryComponent.prototype.setUsers = function () {
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
    ], DefectHistoryComponent.prototype, "defect", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DefectHistoryComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DefectHistoryComponent.prototype, "apiUrl", void 0);
    DefectHistoryComponent = __decorate([
        Component({
            selector: 'app-defect-history',
            templateUrl: './defect-history.component.html',
            styleUrls: ['./defect-history.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ActivatedRoute,
            UserService])
    ], DefectHistoryComponent);
    return DefectHistoryComponent;
}());
export { DefectHistoryComponent };
//# sourceMappingURL=defect-history.component.js.map