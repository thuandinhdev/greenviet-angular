import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ExportAsService } from 'ngx-export-as';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { TimesheetService } from '../../../../core/services/timesheet.service';
import { ProjectService } from '../../../../core/services/project.service';
import { ClientService } from '../../../../core/services/client.service';
import { UserService } from '../../../../core/services/user.service';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { environment } from '../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
var TimesheetComponent = /** @class */ (function () {
    function TimesheetComponent(translate, formBuilder, http, exportAsService, toastr, timesheetService, projectService, clientService, userService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.timesheetService = timesheetService;
        this.projectService = projectService;
        this.clientService = clientService;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.timesheets = [];
        this.clients = [];
        this.users = [];
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
    TimesheetComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.getClients();
        this.getUsers();
        this.loadForms();
        this.loadTimesheetDatatable();
    };
    TimesheetComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getAll().subscribe(function (data) {
            _this.projects = data;
        });
    };
    TimesheetComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getClientsWithTrashed().subscribe(function (data) {
            _this.clients = data;
        });
    };
    TimesheetComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (data) {
            _this.users = data;
        });
    };
    TimesheetComponent.prototype.loadForms = function () {
        this.timesheetFilterForm = this.formBuilder.group({
            range: [this.range[3].id, [Validators.required]],
            period_from: [null],
            period_to: [null],
            user_id: [null],
            project_ids: [null],
            client_id: [null],
        });
    };
    TimesheetComponent.prototype.rangeChange = function (event) {
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
    TimesheetComponent.prototype.periodFromDateChange = function (event) {
        this.timesheetFilterForm.patchValue({ period_to: event });
    };
    Object.defineProperty(TimesheetComponent.prototype, "filterControl", {
        get: function () { return this.timesheetFilterForm.controls; },
        enumerable: false,
        configurable: true
    });
    TimesheetComponent.prototype.onSubmit = function () {
        this.isFormSubmitted = true;
        if (this.timesheetFilterForm.invalid) {
            return;
        }
        this.rerender();
    };
    TimesheetComponent.prototype.loadTimesheetDatatable = function () {
        var _this = this;
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
                    'target': [0]
                },
                {
                    'sortable': true,
                    'target': [1]
                },
                {
                    'sortable': false,
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
                    user_id: _this.timesheetFilterForm.value.user_id,
                    project_ids: _this.timesheetFilterForm.value.project_ids,
                    client_id: _this.timesheetFilterForm.value.client_id,
                };
                _this.http.post(_this.apiUrl + '/api/timesheets-report', dataTablesParameters, {}).subscribe(function (resp) {
                    _this.isPageLoaded = true;
                    _this.timesheets = resp.data;
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
    TimesheetComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    TimesheetComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    TimesheetComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                _this.setMessage();
            }, 200);
        });
    };
    TimesheetComponent.prototype.setMessage = function () {
        if (this.timesheets.length > 0) {
            $('.tfoot_dt').addClass('d-none');
        }
        else {
            $('.tfoot_dt').removeClass('d-none');
        }
    };
    TimesheetComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('timesheet.title')).subscribe(function () { });
    };
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], TimesheetComponent.prototype, "dtElement", void 0);
    TimesheetComponent = __decorate([
        Component({
            selector: 'app-timesheet',
            templateUrl: './timesheet.component.html',
            styleUrls: ['./timesheet.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            FormBuilder,
            HttpClient,
            ExportAsService,
            ToastrService,
            TimesheetService,
            ProjectService,
            ClientService,
            UserService,
            AuthenticationService])
    ], TimesheetComponent);
    return TimesheetComponent;
}());
export { TimesheetComponent };
//# sourceMappingURL=timesheet.component.js.map