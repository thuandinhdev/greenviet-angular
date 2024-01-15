import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { CustomFieldsService } from '../../../../core/services/custom-fields.service';
import { HelperService } from '../../../../core/services/helper.service';
var CustomFieldEditComponent = /** @class */ (function () {
    function CustomFieldEditComponent(translate, bsModalRef, formBuilder, toastr, customFieldsService, helperService) {
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
    CustomFieldEditComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForms();
        this.getAllFormFields();
    };
    CustomFieldEditComponent.prototype.loadForms = function () {
        this.editCustomFieldForm = this.formBuilder.group({
            id: [this.customField.id],
            form_id: [this.customField.form_id, Validators.required],
            field_label: [this.customField.field_label, Validators.required],
            help_text: [this.customField.help_text],
            is_required: [this.customField.is_required],
            // show_on_details: [this.customField.show_on_details],
            field_type: [this.customField.field_type],
            default_value: [null],
            select_options: this.formBuilder.array([]),
            status: [this.customField.status, Validators.required],
        });
        this.isPageLoaded = true;
        this.editCustomFieldForm.controls.form_id.disable();
        this.editCustomFieldForm.controls.field_type.disable();
        if (this.editCustomFieldForm.get('field_type').value == 'dropdown' && this.customField.default_value != []) {
            this.addDynamicOptions(this.customField.default_value);
        }
    };
    Object.defineProperty(CustomFieldEditComponent.prototype, "customFieldControl", {
        get: function () { return this.editCustomFieldForm.controls; },
        enumerable: false,
        configurable: true
    });
    CustomFieldEditComponent.prototype.addDynamicOptions = function (options) {
        var that = this;
        options = JSON.parse(options);
        options.forEach(function (element) {
            var control = that.editCustomFieldForm.controls.select_options;
            control.push(that.formBuilder.group({
                value: [element.value, Validators.required],
                label: [element.label, Validators.required],
            }));
        });
    };
    CustomFieldEditComponent.prototype.addOption = function () {
        var control = this.editCustomFieldForm.controls.select_options;
        control.push(this.formBuilder.group({
            value: [null, Validators.required],
            label: [null, Validators.required],
        }));
    };
    CustomFieldEditComponent.prototype.deleteOption = function (index) {
        var control = this.editCustomFieldForm.controls.select_options;
        control.removeAt(index);
    };
    CustomFieldEditComponent.prototype.onChange = function (event) {
        if (event.value == 'dropdown') {
            this.addOption();
            return;
        }
        var arr = this.editCustomFieldForm.controls.select_options;
        arr.controls = [];
        arr.removeAt(0);
        arr.reset();
    };
    CustomFieldEditComponent.prototype.getAllFormFields = function () {
        var _this = this;
        this.customFieldsService.getFormTables()
            .subscribe(function (data) {
            _this.formTables = data;
        });
    };
    CustomFieldEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editCustomFieldForm.invalid) {
            return;
        }
        this.editCustomFieldForm.controls.form_id.enable();
        this.editCustomFieldForm.controls.field_type.enable();
        if (this.editCustomFieldForm.value.field_type == 'dropdown') {
            this.editCustomFieldForm.patchValue({ default_value: this.editCustomFieldForm.value.select_options });
        }
        if (this.editCustomFieldForm.value.field_type == 'checkbox') {
            this.editCustomFieldForm.patchValue({ is_required: false });
        }
        this.customFieldsService.update(this.editCustomFieldForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.custom_fields.messages.update'), _this.translate.instant('settings.custom_fields.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    CustomFieldEditComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    CustomFieldEditComponent = __decorate([
        Component({
            selector: 'app-custom-field-edit',
            templateUrl: './custom-field-edit.component.html',
            styleUrls: ['./custom-field-edit.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            CustomFieldsService,
            HelperService])
    ], CustomFieldEditComponent);
    return CustomFieldEditComponent;
}());
export { CustomFieldEditComponent };
//# sourceMappingURL=custom-field-edit.component.js.map