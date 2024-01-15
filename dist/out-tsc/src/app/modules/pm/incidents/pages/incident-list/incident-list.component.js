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
import { IncidentService } from '../../../../../core/services/incident.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { incident_status_key_value, incident_severity_key_value } from "./../../../../../core/helpers/pm-helper";
import { environment } from '../../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
var IncidentListComponent = /** @class */ (function () {
    function IncidentListComponent(translate, ngxRolesService, router, http, route, modalService, exportAsService, toastr, incidentService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.router = router;
        this.http = http;
        this.route = route;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.incidentService = incidentService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.incidents = [];
        this.isPageLoaded = false;
        this.incidentstatusKeyValue = incident_status_key_value;
        this.incidentSeveritiesKeyValue = incident_severity_key_value;
        this.incidentFilterKey = 'selected';
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'incident_table',
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
    IncidentListComponent.prototype.ngOnInit = function () {
        this.loadIncidentDatatable();
    };
    IncidentListComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.incidentstatusKeyValue[statusKey];
    };
    IncidentListComponent.prototype.getTranslatePriorities = function (statusKey) {
        return this.incidentSeveritiesKeyValue[statusKey];
    };
    IncidentListComponent.prototype.loadIncidentDatatable = function () {
        var _this = this;
        this.statusfilterId = 0;
        if (this.route.snapshot.params['status'])
            this.statusfilterId = this.route.snapshot.params['status'];
        if (this.route.snapshot.params['incidentFilterKey'])
            this.incidentFilterKey = this.route.snapshot.params['incidentFilterKey'];
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
                    'target': [7],
                    'width': "10%"
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
                    filter: _this.incidentFilterKey
                };
                _this.http
                    .post(_this.apiUrl + '/api/all-incident', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.isPageLoaded = true;
                    _this.incidents = resp.data;
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
    IncidentListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    IncidentListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    IncidentListComponent.prototype.rerender = function () {
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
    IncidentListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('incidents.title')).subscribe(function () { });
    };
    IncidentListComponent.prototype.getCheckPermission = function (incident) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        else if (incident.assign_to == this.loginUser.id || incident.create_user_id == this.loginUser.id) {
            return true;
        }
        else {
            return false;
        }
    };
    IncidentListComponent.prototype.changeIncidentStatus = function (id, status) {
        var _this = this;
        var changeIncident = {
            id: id,
            status: status.id
        };
        this.incidentService.changeStatus(changeIncident)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('incidents.messages.status'), _this.translate.instant('incidents.title'));
            _this.rerender();
        });
    };
    IncidentListComponent.prototype.changeIncidentSeverity = function (incidentId, priority) {
        var _this = this;
        this.incidentService.changeSeverity({
            id: incidentId,
            priority: priority.id
        }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('incidents.messages.priority'), _this.translate.instant('incidents.title'));
            _this.rerender();
        });
    };
    IncidentListComponent.prototype.filterByStatus = function (statusID, incidentFilterKey) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.navigate(['incidents', statusID, incidentFilterKey]);
    };
    IncidentListComponent.prototype.deleteIncident = function (id) {
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
                _this.incidentService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('incidents.messages.delete'), _this.translate.instant('incidents.title'));
                    _this.rerender();
                });
            }
        });
    };
    IncidentListComponent.prototype.saveIncidentDetail = function (index, name, value) {
        var _this = this;
        this.incidents[index][name] = value;
        this.incidentService.update(this.incidents[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('incidents.messages.update'), _this.translate.instant('incidents.title'));
            _this.rerender();
        });
    };
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], IncidentListComponent.prototype, "dtElement", void 0);
    IncidentListComponent = __decorate([
        Component({
            selector: 'app-incident-list',
            templateUrl: './incident-list.component.html',
            styleUrls: ['./incident-list.component.scss'],
            preserveWhitespaces: true
        }),
        __metadata("design:paramtypes", [TranslateService,
            NgxRolesService,
            Router,
            HttpClient,
            ActivatedRoute,
            BsModalService,
            ExportAsService,
            ToastrService,
            IncidentService,
            AuthenticationService])
    ], IncidentListComponent);
    return IncidentListComponent;
}());
export { IncidentListComponent };
//# sourceMappingURL=incident-list.component.js.map