import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import 'datatables.net';
import 'datatables.net-bs4';
var ProjectTasksComponent = /** @class */ (function () {
    function ProjectTasksComponent(translate) {
        this.translate = translate;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
    }
    ProjectTasksComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    ProjectTasksComponent.prototype.loadDatatable = function () {
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            dom: '<"html5buttons"B>lTfgtip',
            paging: true,
            responsive: false,
            autoWidth: false,
            order: [0],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('tasks.title'),
                    className: "btn btn-datatable-gredient",
                }, {
                    extend: 'excel',
                    title: this.translate.instant('tasks.title'),
                    className: "btn btn-datatable-gredient",
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('tasks.title'),
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
            },
            columnDefs: [
                { width: "8%", targets: [0] },
                { width: "42%", targets: [1] },
                { width: "10%", targets: [2] },
                { width: "10%", targets: [3] },
                { width: "10%", targets: [4] },
                { width: "10%", targets: [5] },
                { width: "10%", targets: [6] }
            ]
        };
    };
    ProjectTasksComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ProjectTasksComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectTasksComponent.prototype, "project", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectTasksComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectTasksComponent.prototype, "apiUrl", void 0);
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], ProjectTasksComponent.prototype, "dtElement", void 0);
    ProjectTasksComponent = __decorate([
        Component({
            selector: 'app-project-tasks',
            templateUrl: './project-tasks.component.html',
            styleUrls: ['./project-tasks.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService])
    ], ProjectTasksComponent);
    return ProjectTasksComponent;
}());
export { ProjectTasksComponent };
//# sourceMappingURL=project-tasks.component.js.map