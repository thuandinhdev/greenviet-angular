import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxRolesService } from 'ngx-permissions';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { TimesheetService } from '../../../../core/services/timesheet.service';
import { MeetingService } from '../../../../core/services/meeting.service';
import { CreateTimesheetModalComponent } from '../../components/create-timesheet-modal/create-timesheet-modal.component';
import { EditTimesheetModalComponent } from '../../components/edit-timesheet-modal/edit-timesheet-modal.component';
var TimesheetListComponent = /** @class */ (function () {
    function TimesheetListComponent(translate, modalService, toastr, ngxRolesService, timesheetService, meetingService) {
        this.translate = translate;
        this.modalService = modalService;
        this.toastr = toastr;
        this.ngxRolesService = ngxRolesService;
        this.timesheetService = timesheetService;
        this.meetingService = meetingService;
        this.isPageLoaded = false;
    }
    TimesheetListComponent.prototype.ngOnInit = function () {
        this.getTimesheet();
    };
    TimesheetListComponent.prototype.getTimesheet = function () {
        var _this = this;
        var params = { "module_id": this.module_id, "module_related_id": this.module_related_id };
        this.timesheetService.getTimesheetsByModule(params).subscribe(function (data) {
            _this.timesheets = data;
            _this.isPageLoaded = true;
        });
    };
    TimesheetListComponent.prototype.openTimesheetCreateModal = function () {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                params: {
                    module_id: this.module_id,
                    module_related_id: this.module_related_id,
                    project_id: this.project_id
                }
            }
        };
        this.modalRef = this.modalService.show(CreateTimesheetModalComponent, modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTimesheet();
        });
    };
    TimesheetListComponent.prototype.editTimesheet = function (timesheet) {
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
            _this.getTimesheet();
        });
    };
    TimesheetListComponent.prototype.deleteTimesheet = function (id, index) {
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
                    _this.timesheets.splice(index, 1);
                    _this.toastr.success(_this.translate.instant('timesheet.messages.delete'), _this.translate.instant('timesheet.title'));
                });
            }
        });
    };
    TimesheetListComponent.prototype.saveTimesheetDetail = function (index, name, value) {
        var _this = this;
        this.timesheets[index][name] = value;
        this.timesheetService.update(this.timesheets[index]).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('timesheet.messages.update'), _this.translate.instant('timesheet.title'));
            _this.getTimesheet();
        });
    };
    TimesheetListComponent.prototype.getCheckPermission = function (timesheet) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        else if (timesheet.created_user_id == this.loginUser.id) {
            return true;
        }
        else {
            return false;
        }
    };
    TimesheetListComponent.prototype.addTimesheet = function () {
        var _this = this;
        if (this.module_id == 5) {
            this.meetingService.getById(this.module_related_id).subscribe(function (data) {
                var meeting = data;
                var params = {
                    project_id: null,
                    module_id: _this.module_id,
                    module_related_id: _this.module_related_id,
                    start_time: meeting.start_date,
                    end_time: meeting.end_date,
                    note: null
                };
                _this.timesheetService.create(params).subscribe(function (data) {
                    _this.getTimesheet();
                    _this.toastr.success(_this.translate.instant('timesheet.messages.create'), _this.translate.instant('timesheet.title'));
                }, function (error) {
                    _this.toastr.error(_this.translate.instant('common.error_messages.message5'));
                });
            }, function (error) {
                _this.toastr.error(_this.translate.instant('common.error_messages.message5'));
            });
        }
        else {
            this.toastr.error(this.translate.instant('common.error_messages.message5'));
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TimesheetListComponent.prototype, "module_id", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TimesheetListComponent.prototype, "module_related_id", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TimesheetListComponent.prototype, "project_id", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TimesheetListComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TimesheetListComponent.prototype, "apiUrl", void 0);
    TimesheetListComponent = __decorate([
        Component({
            selector: 'app-timesheet-list',
            templateUrl: './timesheet-list.component.html',
            styleUrls: ['./timesheet-list.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalService,
            ToastrService,
            NgxRolesService,
            TimesheetService,
            MeetingService])
    ], TimesheetListComponent);
    return TimesheetListComponent;
}());
export { TimesheetListComponent };
//# sourceMappingURL=timesheet-list.component.js.map