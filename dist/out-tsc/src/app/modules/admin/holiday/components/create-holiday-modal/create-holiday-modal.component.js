import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { HolidayService } from '../../../../../core/services/holiday.service';
var CreateHolidayModalComponent = /** @class */ (function () {
    function CreateHolidayModalComponent(translate, datepipe, bsModalRef, formBuilder, toastr, holidayService) {
        this.translate = translate;
        this.datepipe = datepipe;
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
    CreateHolidayModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForms();
    };
    CreateHolidayModalComponent.prototype.loadForms = function () {
        this.createHolidayForm = this.formBuilder.group({
            event_name: [null, [Validators.required, Validators.maxLength(50)]],
            description: [''],
            date: [null, Validators.required],
            location: [''],
            color: ['#1ab394']
        });
    };
    Object.defineProperty(CreateHolidayModalComponent.prototype, "holidayControl", {
        get: function () { return this.createHolidayForm.controls; },
        enumerable: false,
        configurable: true
    });
    CreateHolidayModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createHolidayForm.invalid) {
            return;
        }
        this.createHolidayForm.value.date = this.datepipe.transform(this.createHolidayForm.value.date, 'yyyy-MM-dd');
        this.holidayService.create(this.createHolidayForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('holidays.messages.create'), _this.translate.instant('holidays.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    CreateHolidayModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    CreateHolidayModalComponent = __decorate([
        Component({
            selector: 'app-create-holiday-modal',
            templateUrl: './create-holiday-modal.component.html',
            styleUrls: ['./create-holiday-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            DatePipe,
            BsModalRef,
            FormBuilder,
            ToastrService,
            HolidayService])
    ], CreateHolidayModalComponent);
    return CreateHolidayModalComponent;
}());
export { CreateHolidayModalComponent };
//# sourceMappingURL=create-holiday-modal.component.js.map