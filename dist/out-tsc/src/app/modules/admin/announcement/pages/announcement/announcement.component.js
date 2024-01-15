import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { ExportAsService } from 'ngx-export-as';
import { ToastrService } from 'ngx-toastr';
import { NgxRolesService } from 'ngx-permissions';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { AnnouncementService } from '../../../../../core/services/announcement.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { environment } from '../../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
var AnnouncementComponent = /** @class */ (function () {
    function AnnouncementComponent(translate, ngxRolesService, datePipe, http, exportAsService, toastr, announcementService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.datePipe = datePipe;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.announcementService = announcementService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.announcements = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'announcement_table',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    AnnouncementComponent.prototype.ngOnInit = function () {
        this.loadAnnouncementDatatable();
    };
    AnnouncementComponent.prototype.getCheckPermission = function (annoucement) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        else if (this.loginUser.id == annoucement.user_id) {
            return true;
        }
        else {
            return false;
        }
    };
    AnnouncementComponent.prototype.loadAnnouncementDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            columns: [
                {
                    'sortable': false,
                    'width': "1%",
                    'target': [0]
                },
                {
                    'sortable': true,
                    'width': "50%",
                    'target': [1]
                },
                {
                    'sortable': true,
                    'width': "18%",
                    'target': [2]
                },
                {
                    'sortable': true,
                    'width': "18%",
                    'target': [3]
                },
                {
                    'sortable': true,
                    'width': "18%",
                    'target': [4]
                },
                {
                    'sortable': true,
                    'width': "10%",
                    'target': [5]
                },
                {
                    'sortable': false,
                    'width': "5%",
                    'target': [6]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('announcements.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('announcements.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('announcements.title'),
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
                    .post(_this.apiUrl + '/api/all-announcements', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.announcements = resp.data;
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
    AnnouncementComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('announcements.title')).subscribe(function () { });
    };
    AnnouncementComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    AnnouncementComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    AnnouncementComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.announcements.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    AnnouncementComponent.prototype.deleteAnnouncement = function (id) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.announcementService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('announcements.messages.delete'), _this.translate.instant('announcements.title'));
                    _this.rerender();
                });
            }
        });
    };
    AnnouncementComponent.prototype.saveAnnouncementDetail = function (index, name, value) {
        var _this = this;
        if (value instanceof Date) {
            value = this.datePipe.transform(value, "yyyy-MM-dd h:mm:ss a");
        }
        this.announcements[index][name] = value;
        this.announcementService.update(this.announcements[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('announcements.messages.update'), _this.translate.instant('announcements.title'));
            _this.rerender();
        });
    };
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], AnnouncementComponent.prototype, "dtElement", void 0);
    AnnouncementComponent = __decorate([
        Component({
            selector: 'app-announcement',
            templateUrl: './announcement.component.html',
            styleUrls: ['./announcement.component.scss'],
            providers: [DatePipe]
        }),
        __metadata("design:paramtypes", [TranslateService,
            NgxRolesService,
            DatePipe,
            HttpClient,
            ExportAsService,
            ToastrService,
            AnnouncementService,
            AuthenticationService])
    ], AnnouncementComponent);
    return AnnouncementComponent;
}());
export { AnnouncementComponent };
//# sourceMappingURL=announcement.component.js.map