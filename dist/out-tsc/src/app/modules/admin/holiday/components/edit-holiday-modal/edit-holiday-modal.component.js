import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { HolidayService } from '../../../../../core/services/holiday.service';
var EditHolidayModalComponent = /** @class */ (function () {
    function EditHolidayModalComponent(translate, bsModalRef, formBuilder, toastr, holidayService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.holidayService = holidayService;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    EditHolidayModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForms();
    };
    EditHolidayModalComponent.prototype.loadForms = function () {
        this.editHolidayForm = this.formBuilder.group({
            id: [this.holiday.id],
            event_name: [this.holiday.event_name, [Validators.required, Validators.maxLength(50)]],
            description: [this.holiday.description],
            date: [new Date(this.holiday.date), Validators.required],
            location: [this.holiday.location],
            color: [this.holiday.color]
        });
    };
    Object.defineProperty(EditHolidayModalComponent.prototype, "holidayControl", {
        get: function () { return this.editHolidayForm.controls; },
        enumerable: false,
        configurable: true
    });
    EditHolidayModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editHolidayForm.invalid) {
            return;
        }
        this.holidayService.update(this.editHolidayForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('holidays.messages.update'), _this.translate.instant('holidays.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    EditHolidayModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    EditHolidayModalComponent = __decorate([
        Component({
            selector: 'app-edit-holiday-modal',
            templateUrl: './edit-holiday-modal.component.html',
            styleUrls: ['./edit-holiday-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            HolidayService])
    ], EditHolidayModalComponent);
    return EditHolidayModalComponent;
}());
export { EditHolidayModalComponent };
//# sourceMappingURL=edit-holiday-modal.component.js.map