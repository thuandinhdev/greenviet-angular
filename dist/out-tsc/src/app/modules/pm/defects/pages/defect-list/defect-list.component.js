import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ExportAsService } from 'ngx-export-as';
import { ToastrService } from 'ngx-toastr';
import { NgxRolesService } from 'ngx-permissions';
import { TranslateService } from '@ngx-translate/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { DefectService } from '../../../../../core/services/defect.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { defect_status_key_value } from "./../../../../../core/helpers/pm-helper";
import { environment } from '../../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
var DefectListComponent = /** @class */ (function () {
    function DefectListComponent(translate, ngxRolesService, router, route, http, modalService, exportAsService, toastr, defectService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.router = router;
        this.route = route;
        this.http = http;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.defectService = defectService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.defects = [];
        this.defectstatusKeyValue = defect_status_key_value;
        this.defectFilterKey = 'selected';
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'defects_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    DefectListComponent.prototype.ngOnInit = function () {
        this.loadDefectDatatable();
    };
    DefectListComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.defectstatusKeyValue[statusKey];
    };
    DefectListComponent.prototype.loadDefectDatatable = function () {
        var _this = this;
        this.statusfilterId = 0;
        if (this.route.snapshot.params['status'])
            this.statusfilterId = this.route.snapshot.params['status'];
        if (this.route.snapshot.params['defectFilterKey'])
            this.defectFilterKey = this.route.snapshot.params['defectFilterKey'];
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0],
            columns: [
                {
                    'sortable': true,
                    'width': "8%",
                    'target': [0]
                },
                {
                    'sortable': true,
                    'target': [1]
                },
                {
                    'sortable': true,
                    'width': "8%",
                    'target': [2]
                },
                {
                    'sortable': true,
                    'width': "8%",
                    'target': [3]
                },
                {
                    'sortable': true,
                    'width': "8%",
                    'target': [4]
                },
                {
                    'sortable': true,
                    'width': "10%",
                    'target': [5]
                },
                {
                    'sortable': true,
                    'width': "10%",
                    'target': [6]
                },
                {
                    'sortable': true,
                    'width': "10%",
                    'target': [7]
                },
                {
                    'sortable': false,
                    'target': [8],
                    'width': "5%"
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('defects.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('defects.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('defects.title'),
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
                dataTablesParameters = {
                    columns: dataTablesParameters.columns,
                    draw: dataTablesParameters.draw,
                    length: dataTablesParameters.length,
                    order: dataTablesParameters.order,
                    search: dataTablesParameters.search,
                    start: dataTablesParameters.start,
                    status: _this.statusfilterId,
                    filter: _this.defectFilterKey
                };
                _this.http
                    .post(_this.apiUrl + '/api/all-defects', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.isPageLoaded = true;
                    _this.defects = resp.data;
                    _this.countStatus = resp;
                    _this.countStatus = _this.countStatus.statusCount;
                    if (_this.countStatus.all == 0) {
                        _this.countStatus.open = 0;
                        _this.countStatus.in_progress = 0;
                        _this.countStatus.assigned = 0;
                        _this.countStatus.solved = 0;
                        _this.countStatus.deferred = 0;
                        _this.countStatus.re_open = 0;
                        _this.countStatus.closed = 0;
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
    DefectListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    DefectListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    DefectListComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.defects.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    DefectListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('defects.title')).subscribe(function () { });
    };
    DefectListComponent.prototype.filterByStatus = function (statusID, defectFilterKey) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.navigate(['defects', statusID, defectFilterKey]);
    };
    DefectListComponent.prototype.getCheckPermission = function (defect) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        else if (defect.assign_member == this.loginUser.id || defect.create_user_id == this.loginUser.id) {
            return true;
        }
        else {
            return false;
        }
    };
    DefectListComponent.prototype.deleteDefect = function (id) {
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
                _this.defectService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('defects.messages.delete'), _this.translate.instant('defects.title'));
                    _this.rerender();
                });
            }
        });
    };
    DefectListComponent.prototype.changeDefectStatus = function (defectId, status) {
        var _this = this;
        var changeDefect = {
            id: defectId,
            status: status.id
        };
        this.defectService.changeStatus(changeDefect)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('defects.messages.status'), _this.translate.instant('defects.title'));
            _this.rerender();
        });
    };
    DefectListComponent.prototype.saveDefectDetail = function (index, name, value) {
        var _this = this;
        this.defects[index][name] = value;
        this.defectService.update(this.defects[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('defects.messages.update'), _this.translate.instant('defects.title'));
            _this.rerender();
        });
    };
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], DefectListComponent.prototype, "dtElement", void 0);
    DefectListComponent = __decorate([
        Component({
            selector: 'app-defect-list',
            templateUrl: './defect-list.component.html',
            styleUrls: ['./defect-list.component.scss'],
            preserveWhitespaces: true
        }),
        __metadata("design:paramtypes", [TranslateService,
            NgxRolesService,
            Router,
            ActivatedRoute,
            HttpClient,
            BsModalService,
            ExportAsService,
            ToastrService,
            DefectService,
            AuthenticationService])
    ], DefectListComponent);
    return DefectListComponent;
}());
export { DefectListComponent };
//# sourceMappingURL=defect-list.component.js.map