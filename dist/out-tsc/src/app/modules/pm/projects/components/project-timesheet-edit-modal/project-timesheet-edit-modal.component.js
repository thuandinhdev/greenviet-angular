import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { TimesheetService } from '../../../../../core/services/timesheet.service';
var ProjectTimesheetEditModalComponent = /** @class */ (function () {
    function ProjectTimesheetEditModalComponent(translate, bsEditRoleModalRef, formBuilder, toastr, timesheetService) {
        this.translate = translate;
        this.bsEditRoleModalRef = bsEditRoleModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.timesheetService = timesheetService;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
    }
    ProjectTimesheetEditModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForm();
    };
    ProjectTimesheetEditModalComponent.prototype.loadForm = function () {
        this.editTimesheetForm = this.formBuilder.group({
            id: [this.timesheet.id],
            start_time: [new Date(this.timesheet.start_time), Validators.required],
            end_time: [new Date(this.timesheet.end_time), Validators.required],
            note: [this.timesheet.note, Validators.required],
        });
    };
    Object.defineProperty(ProjectTimesheetEditModalComponent.prototype, "timesheetControl", {
        get: function () { return this.editTimesheetForm.controls; },
        enumerable: false,
        configurable: true
    });
    ProjectTimesheetEditModalComponent.prototype.startTimeChange = function (start_time) {
        this.editTimesheetForm.patchValue({ end_time: new Date(start_time.value) });
    };
    ProjectTimesheetEditModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editTimesheetForm.invalid) {
            return;
        }
        this.editTimesheetForm.value.start_time = moment(this.editTimesheetForm.value.start_time).format('YYYY-MM-DD HH:mm:ss');
        this.editTimesheetForm.value.end_time = moment(this.editTimesheetForm.value.end_time).format('YYYY-MM-DD HH:mm:ss');
        // --
        // Check dates
        if ((this.editTimesheetForm.value.start_time == this.editTimesheetForm.value.end_time) || (this.editTimesheetForm.value.start_time > this.editTimesheetForm.value.end_time)) {
            this.toastr.error(this.translate.instant('timesheet.create.error_messages.message3'), this.translate.instant('timesheet.title'));
            return false;
        }
        this.timesheetService.update(this.editTimesheetForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('timesheet.messages.update'), _this.translate.instant('timesheet.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    ProjectTimesheetEditModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditRoleModalRef.hide();
    };
    ProjectTimesheetEditModalComponent = __decorate([
        Component({
            selector: 'app-project-timesheet-edit-modal',
            templateUrl: './project-timesheet-edit-modal.component.html',
            styleUrls: ['./project-timesheet-edit-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            TimesheetService])
    ], ProjectTimesheetEditModalComponent);
    return ProjectTimesheetEditModalComponent;
}());
export { ProjectTimesheetEditModalComponent };
//# sourceMappingURL=project-timesheet-edit-modal.component.js.map