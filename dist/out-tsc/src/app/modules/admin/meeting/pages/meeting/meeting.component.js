import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ExportAsService } from 'ngx-export-as';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { MeetingService } from '../../../../../core/services/meeting.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { CreateMeetingModalComponent } from '../../components/create-meeting-modal/create-meeting-modal.component';
import { EditMeetingModalComponent } from '../../components/edit-meeting-modal/edit-meeting-modal.component';
import { meeting_status_key_value } from "../../../../../core/helpers/admin.helper";
import { environment } from '../../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
var MeetingComponent = /** @class */ (function () {
    function MeetingComponent(translate, datePipe, http, router, route, modalService, exportAsService, toastr, meetingService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.datePipe = datePipe;
        this.http = http;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.meetingService = meetingService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.meetings = [];
        this.members = [];
        this.meetingstatusKeyValue = meeting_status_key_value;
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'meeting_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    MeetingComponent.prototype.ngOnInit = function () {
        this.loadMeetingDatatable();
    };
    MeetingComponent.prototype.loadMeetingDatatable = function () {
        var _this = this;
        this.statusfilterId = 0;
        if (this.route.snapshot.params['statusId'])
            this.statusfilterId = this.route.snapshot.params['statusId'];
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
                    'width': "9%",
                    'target': [0]
                },
                {
                    'sortable': true,
                    'width': "20%",
                    'target': [1]
                },
                {
                    'sortable': true,
                    'width': "8%",
                    'target': [2]
                },
                {
                    'sortable': false,
                    'width': "15%",
                    'target': [3]
                },
                {
                    'sortable': true,
                    'width': "14%",
                    'target': [4]
                },
                {
                    'sortable': true,
                    'width': "14%",
                    'target': [5]
                },
                {
                    'sortable': true,
                    'width': "5%",
                    'target': [6]
                },
                {
                    'sortable': true,
                    'width': "10%",
                    'target': [7]
                },
                {
                    'sortable': false,
                    'width': "5%",
                    'target': [8]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('meetings.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('meetings.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('meetings.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }
            ],
            language: {
                sLengthMenu: "Show _MENU_",
                sSearch: "",
                sSearchPlaceholder: "Search ..."
            },
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters = {
                    columns: dataTablesParameters.columns,
                    draw: dataTablesParameters.draw,
                    length: dataTablesParameters.length,
                    order: dataTablesParameters.order,
                    search: dataTablesParameters.search,
                    start: dataTablesParameters.start,
                    statusId: _this.statusfilterId,
                };
                _this.http
                    .post(that.apiUrl + '/api/all-meetings', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.meetings = resp.data;
                        _this.countStatus = resp;
                        _this.countStatus = _this.countStatus.statusCount;
                        _this.isPageLoaded = true;
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
    MeetingComponent.prototype.filterByStatus = function (statusID) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.navigate(['meetings', statusID]);
    };
    MeetingComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('meetings.title')).subscribe(function () { });
    };
    MeetingComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    MeetingComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    MeetingComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.meetings.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    MeetingComponent.prototype.openMeetingCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(CreateMeetingModalComponent, this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    MeetingComponent.prototype.openMeetingEditModal = function (meeting) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                meeting: meeting
            }
        };
        this.modalRef = this.modalService.show(EditMeetingModalComponent, modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    MeetingComponent.prototype.removeMeeting = function (id) {
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
                _this.meetingService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('meetings.messages.delete'), _this.translate.instant('meetings.title'));
                    _this.rerender();
                });
            }
        });
    };
    MeetingComponent.prototype.saveMeetingDetail = function (index, name, value) {
        var _this = this;
        if (value instanceof Date) {
            value = this.datePipe.transform(value, "yyyy-MM-dd h:mm:ss a");
        }
        this.meetings[index][name] = value;
        for (var iRow in this.meetings[index].members) {
            this.members.push(this.meetings[index].members[iRow].member_id);
        }
        this.meetings[index].members = this.members;
        this.meetingService.update(this.meetings[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('meetings.messages.update'), _this.translate.instant('meetings.title'));
            _this.rerender();
        }, function (error) {
            _this.rerender();
        });
    };
    MeetingComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.meetingstatusKeyValue[statusKey];
    };
    MeetingComponent.prototype.changeMeetingStatus = function (meetingIDs, status) {
        var _this = this;
        var params = {
            ids: meetingIDs,
            status: status.id
        };
        this.meetingService.changeStatus(params).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('meetings.messages.status'), _this.translate.instant('meetings.title'));
            _this.rerender();
        });
    };
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], MeetingComponent.prototype, "dtElement", void 0);
    MeetingComponent = __decorate([
        Component({
            selector: 'app-meeting',
            templateUrl: './meeting.component.html',
            styleUrls: ['./meeting.component.scss'],
            providers: [DatePipe]
        }),
        __metadata("design:paramtypes", [TranslateService,
            DatePipe,
            HttpClient,
            Router,
            ActivatedRoute,
            BsModalService,
            ExportAsService,
            ToastrService,
            MeetingService,
            AuthenticationService])
    ], MeetingComponent);
    return MeetingComponent;
}());
export { MeetingComponent };
//# sourceMappingURL=meeting.component.js.map