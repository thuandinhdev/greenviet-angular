import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ExportAsService } from 'ngx-export-as';
import { ToastrService } from 'ngx-toastr';
import { NgxRolesService } from 'ngx-permissions';
import { TranslateService } from '@ngx-translate/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { TimesheetService } from '../../../../core/services/timesheet.service';
import { ProjectService } from '../../../../core/services/project.service';
import { ClientService } from '../../../../core/services/client.service';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { CreateTimesheetModalComponent } from '../../components/create-timesheet-modal/create-timesheet-modal.component';
import { EditTimesheetModalComponent } from '../../components/edit-timesheet-modal/edit-timesheet-modal.component';
import { environment } from '../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
var MyTimesheetComponent = /** @class */ (function () {
    function MyTimesheetComponent(translate, ngxRolesService, formBuilder, modalService, http, exportAsService, toastr, timesheetService, projectService, clientService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.timesheetService = timesheetService;
        this.projectService = projectService;
        this.clientService = clientService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.timesheets = [];
        this.clients = [];
        this.isPageLoaded = false;
        this.isFormSubmitted = false;
        this.range = [
            { id: "today", label: this.translate.instant('timesheet.range.today') },
            { id: "this_month", label: this.translate.instant('timesheet.range.this_month') },
            { id: "last_month", label: this.translate.instant('timesheet.range.last_month') },
            { id: "this_week", label: this.translate.instant('timesheet.range.this_week') },
            { id: "last_week", label: this.translate.instant('timesheet.range.last_week') },
            { id: "period", label: this.translate.instant('timesheet.range.period') }
        ];
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'timesheets_table',
        };
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    MyTimesheetComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.getClients();
        this.loadForms();
        this.loadTimesheetDatatable();
    };
    MyTimesheetComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getMyProjects().subscribe(function (data) {
            _this.projects = data;
        });
    };
    MyTimesheetComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getClientsWithTrashed().subscribe(function (data) {
            _this.clients = data;
        });
    };
    MyTimesheetComponent.prototype.loadForms = function () {
        this.timesheetFilterForm = this.formBuilder.group({
            range: [this.range[0].id, [Validators.required]],
            period_from: [null],
            period_to: [null],
            project_ids: [null],
            client_id: [null],
        });
    };
    MyTimesheetComponent.prototype.rangeChange = function (event) {
        var fromControl = this.timesheetFilterForm.get('period_from');
        var toControl = this.timesheetFilterForm.get('period_to');
        if (event.id === 'period') {
            fromControl.setValidators([Validators.required]);
            toControl.setValidators([Validators.required]);
            $('.btn_apply').removeClass('d-none');
        }
        else {
            fromControl.clearValidators();
            toControl.clearValidators();
            $('.btn_apply').addClass('d-none');
            this.onSubmit();
        }
        fromControl.updateValueAndValidity();
        toControl.updateValueAndValidity();
    };
    MyTimesheetComponent.prototype.periodFromDateChange = function (event) {
        this.timesheetFilterForm.patchValue({ period_to: event });
    };
    Object.defineProperty(MyTimesheetComponent.prototype, "filterControl", {
        get: function () { return this.timesheetFilterForm.controls; },
        enumerable: false,
        configurable: true
    });
    MyTimesheetComponent.prototype.onSubmit = function () {
        this.isFormSubmitted = true;
        if (this.timesheetFilterForm.invalid) {
            return;
        }
        this.rerender();
    };
    MyTimesheetComponent.prototype.loadTimesheetDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            order: [0],
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            columns: [
                {
                    'sortable': true,
                    'target': [0]
                },
                {
                    'sortable': false,
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
                    'sortable': false,
                    'target': [6]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('timesheet.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('timesheet.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('timesheet.title'),
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
                    range: _this.timesheetFilterForm.value.range,
                    period_from: _this.timesheetFilterForm.value.period_from,
                    period_to: _this.timesheetFilterForm.value.period_to,
                    project_ids: _this.timesheetFilterForm.value.project_ids,
                    client_id: _this.timesheetFilterForm.value.client_id,
                };
                _this.http.post(_this.apiUrl + '/api/my-timesheets', dataTablesParameters, {}).subscribe(function (resp) {
                    _this.isPageLoaded = true;
                    that.timesheets = resp.data;
                    _this.totalHours = resp;
                    _this.totalHours = _this.totalHours.total;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                    setTimeout(function () {
                        _this.setMessage();
                    });
                });
            }
        };
    };
    MyTimesheetComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    MyTimesheetComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    MyTimesheetComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                _this.setMessage();
            }, 200);
        });
    };
    MyTimesheetComponent.prototype.setMessage = function () {
        if (this.timesheets.length > 0) {
            $('.tfoot_dt').addClass('d-none');
        }
        else {
            $('.tfoot_dt').removeClass('d-none');
        }
    };
    MyTimesheetComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('timesheet.title')).subscribe(function () { });
    };
    MyTimesheetComponent.prototype.openTimesheetCreateModal = function () {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                params: {
                    module_id: 6,
                    module_related_id: null,
                    project_id: null
                }
            }
        };
        this.modalRef = this.modalService.show(CreateTimesheetModalComponent, modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    MyTimesheetComponent.prototype.openTimesheetEditModal = function (timesheet) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                timesheet: timesheet
            }
        };
        this.modalRef = this.modalService.show(EditTimesheetModalComponent, modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    MyTimesheetComponent.prototype.deleteTimesheet = function (id) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + this.translate.instant('timesheet.title').toLowerCase() + '!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.timesheetService.delete(id).subscribe(function (data) {
                    _this.rerender();
                    _this.toastr.success(_this.translate.instant('timesheet.messages.delete'), _this.translate.instant('timesheet.title'));
                });
            }
        });
    };
    MyTimesheetComponent.prototype.saveTimesheetDetail = function (index, name, value) {
        var _this = this;
        this.timesheets[index][name] = value;
        this.timesheetService.update(this.timesheets[index]).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('timesheet.messages.update'), _this.translate.instant('timesheet.title'));
            _this.rerender();
        });
    };
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], MyTimesheetComponent.prototype, "dtElement", void 0);
    MyTimesheetComponent = __decorate([
        Component({
            selector: 'app-my-timesheet',
            templateUrl: './my-timesheet.component.html',
            styleUrls: ['./my-timesheet.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            NgxRolesService,
            FormBuilder,
            BsModalService,
            HttpClient,
            ExportAsService,
            ToastrService,
            TimesheetService,
            ProjectService,
            ClientService,
            AuthenticationService])
    ], MyTimesheetComponent);
    return MyTimesheetComponent;
}());
export { MyTimesheetComponent };
//# sourceMappingURL=my-timesheet.component.js.map