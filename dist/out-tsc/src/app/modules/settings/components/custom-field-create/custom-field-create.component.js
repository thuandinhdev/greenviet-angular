import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { CustomFieldsService } from '../../../../core/services/custom-fields.service';
import { HelperService } from '../../../../core/services/helper.service';
var CustomFieldCreateComponent = /** @class */ (function () {
    function CustomFieldCreateComponent(translate, bsModalRef, formBuilder, toastr, customFieldsService, helperService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.customFieldsService = customFieldsService;
        this.helperService = helperService;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
    }
    CustomFieldCreateComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForms();
        this.getAllFormFields();
    };
    CustomFieldCreateComponent.prototype.loadForms = function () {
        this.createCustomFieldForm = this.formBuilder.group({
            form_id: [null, Validators.required],
            field_label: [null, Validators.required],
            help_text: [null],
            is_required: [false],
            // show_on_details: [true],
            field_type: [null, Validators.required],
            default_value: [null],
            select_options: this.formBuilder.array([]),
            status: [true, Validators.required],
        });
    };
    Object.defineProperty(CustomFieldCreateComponent.prototype, "customFieldControl", {
        get: function () { return this.createCustomFieldForm.controls; },
        enumerable: false,
        configurable: true
    });
    CustomFieldCreateComponent.prototype.addOption = function () {
        var control = this.createCustomFieldForm.controls.select_options;
        control.push(this.formBuilder.group({
            value: [null, Validators.required],
            label: [null, Validators.required],
        }));
    };
    CustomFieldCreateComponent.prototype.deleteOption = function (index) {
        var control = this.createCustomFieldForm.controls.select_options;
        control.removeAt(index);
    };
    CustomFieldCreateComponent.prototype.onChange = function (event) {
        if (event.value == 'dropdown') {
            this.addOption();
            return;
        }
        var arr = this.createCustomFieldForm.controls.select_options;
        arr.controls = [];
        arr.removeAt(0);
        arr.reset();
    };
    CustomFieldCreateComponent.prototype.getAllFormFields = function () {
        var _this = this;
        this.customFieldsService.getFormTables()
            .subscribe(function (data) {
            _this.formTables = data;
        });
    };
    CustomFieldCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createCustomFieldForm.invalid) {
            return;
        }
        if (this.createCustomFieldForm.value.field_type == 'dropdown') {
            this.createCustomFieldForm.patchValue({ default_value: this.createCustomFieldForm.value.select_options });
        }
        if (this.createCustomFieldForm.value.field_type == 'checkbox') {
            this.createCustomFieldForm.patchValue({ is_required: false });
        }
        this.customFieldsService.create(this.createCustomFieldForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.custom_fields.messages.create'), _this.translate.instant('settings.custom_fields.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    CustomFieldCreateComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    CustomFieldCreateComponent = __decorate([
        Component({
            selector: 'app-custom-field-create',
            templateUrl: './custom-field-create.component.html',
            styleUrls: ['./custom-field-create.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            CustomFieldsService,
            HelperService])
    ], CustomFieldCreateComponent);
    return CustomFieldCreateComponent;
}());
export { CustomFieldCreateComponent };
//# sourceMappingURL=custom-field-create.component.js.map