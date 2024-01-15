import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { TimesheetService } from '../../../../core/services/timesheet.service';
var CreateTimesheetModalComponent = /** @class */ (function () {
    function CreateTimesheetModalComponent(translate, bsModalRef, formBuilder, toastr, timesheetService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.timesheetService = timesheetService;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
    }
    CreateTimesheetModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForms();
    };
    CreateTimesheetModalComponent.prototype.loadForms = function () {
        this.createTimesheetForm = this.formBuilder.group({
            project_id: [this.params.project_id],
            module_id: [this.params.module_id, Validators.required],
            module_related_id: [this.params.module_related_id],
            start_time: [new Date(), Validators.required],
            end_time: [new Date(), Validators.required],
            note: [null],
        });
    };
    Object.defineProperty(CreateTimesheetModalComponent.prototype, "timesheetControl", {
        get: function () { return this.createTimesheetForm.controls; },
        enumerable: false,
        configurable: true
    });
    CreateTimesheetModalComponent.prototype.startTimeChange = function (start_time) {
        this.createTimesheetForm.patchValue({ end_time: new Date(start_time.value) });
    };
    CreateTimesheetModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createTimesheetForm.invalid) {
            return;
        }
        this.createTimesheetForm.value.start_time = moment(this.createTimesheetForm.value.start_time).format('YYYY-MM-DD HH:mm:ss');
        this.createTimesheetForm.value.end_time = moment(this.createTimesheetForm.value.end_time).format('YYYY-MM-DD HH:mm:ss');
        // Check dates.
        if ((this.createTimesheetForm.value.start_time == this.createTimesheetForm.value.end_time) || (this.createTimesheetForm.value.start_time > this.createTimesheetForm.value.end_time)) {
            this.toastr.error(this.translate.instant('timesheet.create.error_messages.message3'), this.translate.instant('timesheet.title'));
            return false;
        }
        this.timesheetService.create(this.createTimesheetForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('timesheet.messages.create'), _this.translate.instant('timesheet.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    CreateTimesheetModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    CreateTimesheetModalComponent = __decorate([
        Component({
            selector: 'app-create-timesheet-modal',
            templateUrl: './create-timesheet-modal.component.html',
            styleUrls: ['./create-timesheet-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            TimesheetService])
    ], CreateTimesheetModalComponent);
    return CreateTimesheetModalComponent;
}());
export { CreateTimesheetModalComponent };
//# sourceMappingURL=create-timesheet-modal.component.js.map