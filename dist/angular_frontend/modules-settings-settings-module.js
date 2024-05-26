(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/company-detail/company-detail.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/company-detail/company-detail.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\n\t<h4 class=\"sub-title mt-2\"><span>{{'settings.company_details.title' | translate}}</span></h4>\n</div>\n<form [formGroup]=\"settingsForm\" (ngSubmit)=\"onSubmit()\">\n\t<div class=\"form-body\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"company_name\">{{'settings.company_details.create.fields.company_name' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"company_name\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && companyDetail.company_name.errors }\" placeholder=\"{{'settings.company_details.create.placeholders.placeholder1' | translate}}\" id=\"company_name\" />\n\t\t\t\t\t<div *ngIf=\"isFormSubmitted && companyDetail.company_name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"companyDetail.company_name.errors.required\">{{'settings.company_details.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"company_legal_name\">{{'settings.company_details.create.fields.legal_name' | translate}}</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"company_legal_name\" id=\"company_legal_name\" placeholder=\"{{'settings.company_details.create.placeholders.placeholder2' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && companyDetail.company_legal_name.errors }\" />\n\t\t\t\t\t<div *ngIf=\"isFormSubmitted && companyDetail.company_legal_name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"companyDetail.company_legal_name.errors.required\">{{'settings.company_details.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"company_short_name\">{{'settings.company_details.create.fields.short_name' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"company_short_name\" id=\"company_short_name\" placeholder=\"{{'settings.company_details.create.placeholders.placeholder3' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && companyDetail.company_short_name.errors }\" />\n\t\t\t\t\t<div *ngIf=\"isFormSubmitted && companyDetail.company_short_name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"companyDetail.company_short_name.errors.required\">{{'settings.company_details.create.error_messages.message3' | translate}}</div>\n\t\t\t\t\t\t<div *ngIf=\"companyDetail.company_short_name.errors.maxlength\">{{'settings.company_details.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"company_email\">{{'settings.company_details.create.fields.company_email' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" formControlName=\"company_email\" id=\"company_email\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && companyDetail.company_email.errors }\" placeholder=\"{{'settings.company_details.create.placeholders.placeholder4' | translate}}\" />\n\t\t\t\t\t<div *ngIf=\"isFormSubmitted && companyDetail.company_email.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"companyDetail.company_email.errors.required\">{{'settings.company_details.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t\t<div *ngIf=\"companyDetail.company_email.errors.email\">{{'settings.company_details.create.error_messages.message6' | translate}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"company_phone\">{{'settings.company_details.create.fields.company_phone' | translate}}</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"company_phone\" id=\"company_phone\" placeholder=\"{{'settings.company_details.create.placeholders.placeholder5' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && companyDetail.company_phone.errors }\" />\n\t\t\t\t\t<div *ngIf=\"isFormSubmitted && companyDetail.company_phone.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"companyDetail.company_phone.errors.pattern\">{{'settings.company_details.create.error_messages.message7' | translate}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"company_website\">{{'settings.company_details.create.fields.company_website' | translate}}</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"company_website\" id=\"company_website\" placeholder=\"{{'settings.company_details.create.placeholders.placeholder6' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && companyDetail.company_website.errors }\" />\n\t\t\t\t\t<div *ngIf=\"isFormSubmitted && companyDetail.company_website.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"companyDetail.company_website.errors.pattern\">{{'settings.company_details.create.error_messages.message8' | translate}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"company_country\">{{'settings.company_details.create.fields.company_country' | translate}}</label>\n\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t[items]=\"countries\"\n\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\tlabelForId=\"country\"\n\t\t\t\t\t\tplaceholder=\"{{'settings.company_details.create.placeholders.placeholder7' | translate}}\"\n\t\t\t\t\t\tformControlName=\"company_country\">\n\t\t\t\t\t</ng-select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"company_city\">{{'settings.company_details.create.fields.city' | translate}}</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"company_city\" id=\"company_city\" placeholder=\"{{'settings.company_details.create.placeholders.placeholder8' | translate}}\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"company_zipcode\">{{'settings.company_details.create.fields.company_zipcode' | translate}}</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"company_zipcode\" placeholder=\"{{'settings.company_details.create.placeholders.placeholder9' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && companyDetail.company_zipcode.errors }\" id=\"company_zipcode\" />\n\t\t\t\t\t<div *ngIf=\"isFormSubmitted && companyDetail.company_zipcode.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"companyDetail.company_zipcode.errors.required\">{{'settings.company_details.create.error_messages.message9' | translate}}</div>\n\t\t\t\t\t\t<div *ngIf=\"companyDetail.company_zipcode.errors.pattern\">{{'settings.company_details.create.error_messages.message10' | translate}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"contact_person\">{{'settings.company_details.create.fields.contact_person' | translate}}</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"contact_person\" id=\"contact_person\" placeholder=\"{{'settings.company_details.create.placeholders.placeholder10' | translate}}\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"company_address\">{{'settings.company_details.create.fields.company_address' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"company_address\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && companyDetail.company_address.errors }\" id=\"company_address\" placeholder=\"{{'settings.company_details.create.placeholders.placeholder11' | translate}}\"></textarea>\n\t\t\t\t\t<div *ngIf=\"isFormSubmitted && companyDetail.company_address.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"companyDetail.company_address.errors.required\">{{'settings.company_details.create.error_messages.message11' | translate}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12 text-right\">\n\t\t\t\t<a [routerLink]=\"['/']\" class=\"btn btn-cancel\">{{'common.cancel' | translate}}</a>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-submit\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'companydetail_create', 'companydetail_edit']\">{{'common.save' | translate}}</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/cronjob-settings/cronjob-settings.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/cronjob-settings/cronjob-settings.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\n    <h4 class=\"sub-title mt-2\"><span>{{'settings.cronjob.title' | translate}}</span></h4>\n</div>\n<form class=\"form\">\n\t<div class=\"form-body\">\t\t\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"active_cronjob\">{{'settings.cronjob.create.fields.active_cronjob' | translate}}</label>\n\t\t\t\t\t<label class=\"checkbox-container d-block\">\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-control\" [(ngModel)]=\"settings.active_cronjob\" name=\"active_cronjob\" id=\"active_cronjob\" />\n\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t</label><br />\n\t\t\t\t\t<small>{{'settings.cronjob.create.messages.message1' | translate}}</small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"automatic_backup\">{{'settings.cronjob.create.fields.automatic_backup' | translate}}</label>\n\t\t\t\t\t<label class=\"checkbox-container d-block\">\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-control\" [(ngModel)]=\"settings.automatic_backup\" name=\"automatic_backup\" id=\"automatic_backup\" />\n\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t</label><br />\n\t\t\t\t\t<small>{{'settings.cronjob.create.messages.message2' | translate}}</small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"reminder_alert_before_hours\">{{'settings.cronjob.create.fields.reminder_alert_before_hours' | translate}}</label>\n\t\t\t\t\t<span class=\"ml-2\"><i class=\"fa fa-lightbulb-o fa-1\" placement=\"top\" tooltip=\"{{'settings.cronjob.create.messages.message3' | translate}}\"></i></span>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"settings.reminder_alert_before_hours\" name=\"reminder_alert_before_hours\" id=\"reminder_alert_before_hours\" placeholder=\"6,12,24\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"reminder_alert_before_days\">{{'settings.cronjob.create.fields.reminder_alert_before_days' | translate}}</label>\n\t\t\t\t\t<span class=\"ml-2\"><i class=\"fa fa-lightbulb-o fa-1\" placement=\"top\" tooltip=\"{{'settings.cronjob.create.messages.message4' | translate}}\"></i></span>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"settings.reminder_alert_before_days\" name=\"reminder_alert_before_days\" id=\"reminder_alert_before_days\" placeholder=\"1,2,3\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"automatic_backup\">{{'settings.cronjob.create.fields.daily_report_emails' | translate}}</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"settings.daily_report_emails\" name=\"daily_report_emails\" id=\"daily_report_emails\" placeholder=\"{{'settings.cronjob.create.placeholders.placeholder1' | translate}}\" />\n\t\t\t\t\t<small>Ex. admin@demo.com,user@demo.com</small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"last_cronjob_run\">{{'settings.cronjob.create.fields.last_cronjob_run' | translate}}</label><br>\n\t\t\t\t\t<small>{{settings.last_cronjob_run | dateTimeFormatFilter: loginUser.settings.date_time_format }}</small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12 text-right\">\n\t\t\t\t<a [routerLink]=\"['/']\" class=\"btn btn-cancel\">{{'common.cancel' | translate}}</a>\n\t\t\t\t<button type=\"button\" class=\"btn btn-submit\" (click)=\"saveCronjobSettings()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'cronjob_create', 'cronjob_edit']\">{{'common.save' | translate}}</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/custom-field-create/custom-field-create.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/custom-field-create/custom-field-create.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;{{'settings.custom_fields.title' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form [formGroup]=\"createCustomFieldForm\" (ngSubmit)=\"onSubmit()\" class=\"bs4-forms\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && customFieldControl.form_id.errors }\">\n\t\t\t\t\t\t<label for=\"form_id\">{{'settings.custom_fields.create.fields.custom_field_for' | translate}}</label>&nbsp;<span class=\"text-danger\">*</span>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"formTables\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\tplaceholder=\"{{'settings.custom_fields.create.placeholders.placeholder1' | translate}}\"\n\t\t\t\t\t\t\tformControlName=\"form_id\">\n\t\t\t\t\t\t</ng-select> \n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && customFieldControl.form_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"customFieldControl.form_id.errors.required\">{{'settings.custom_fields.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"field_label\">{{'settings.custom_fields.create.fields.field_label' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"{{'settings.custom_fields.create.placeholders.placeholder2' | translate}}\" class=\"form-control\" id=\"field_label\" formControlName=\"field_label\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && customFieldControl.field_label.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && customFieldControl.field_label.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"customFieldControl.field_label.errors.required\">{{'settings.custom_fields.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"help_text\">{{'settings.custom_fields.create.fields.help_text' | translate}}</label>\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"{{'settings.custom_fields.create.placeholders.placeholder3' | translate}}\" class=\"form-control\" id=\"help_text\" formControlName=\"help_text\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && customFieldControl.help_text.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && customFieldControl.help_text.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"customFieldControl.help_text.errors.required\">{{'settings.custom_fields.create.error_messages.message3' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\" *ngIf=\"createCustomFieldForm.get('field_type').value != 'checkbox'\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"is_required\">{{'settings.custom_fields.create.fields.is_required_field' | translate}}</label>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<label class=\"checkbox-container col-form-label\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-control\" formControlName=\"is_required\" id=\"is_required\" />\n\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"show_on_details\">{{'settings.custom_fields.create.fields.show_on_detail' | translate}}</label>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<label class=\"checkbox-container col-form-label\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-control\" formControlName=\"show_on_details\" id=\"show_on_details\" />\n\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && customFieldControl.field_type.errors }\">\n\t\t\t\t\t\t<label for=\"field_type\">{{'settings.custom_fields.create.fields.field_type' | translate}}</label>&nbsp;<span class=\"text-danger\">*</span>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"('customFieldsType' | translate)\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindValue=\"value\"\n\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\tplaceholder=\"{{'settings.custom_fields.create.placeholders.placeholder4' | translate}}\"\n\t\t\t\t\t\t\tformControlName=\"field_type\"\n\t\t\t\t\t\t\t(change)=\"onChange($event)\">\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && customFieldControl.field_type.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"customFieldControl.field_type.errors.required\">{{'settings.custom_fields.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\" *ngIf=\"createCustomFieldForm.get('field_type').value == 'dropdown'\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t<ng-container formArrayName=\"select_options\">\n\t\t\t\t\t\t\t<table class=\"table table-bordered table-hover b4-datatable\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th colspan=\"3\" text-align=\"center\">{{'settings.custom_fields.headings.head1' | translate}}</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th class=\"width-200\">{{'settings.custom_fields.columns.label' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th class=\"width-200\">{{'settings.custom_fields.columns.value' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th><button type=\"button\" class=\"btn btn-raised mint-gradient white mb-0\" (click)=\"addOption()\"><i class=\"fa fa-plus\"></i></button></th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody *ngIf=\"createCustomFieldForm.get('select_options').controls?.length != 0\">\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let option of createCustomFieldForm.get('select_options').controls; let j = index\">\n\t\t\t\t\t\t\t\t\t\t<ng-container [formGroupName]=\"j\">\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"label\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && customFieldControl.select_options.controls[j].controls.label.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted &&  customFieldControl.select_options.controls[j].controls.label.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"customFieldControl.select_options.controls[j].controls.label.errors.required\">{{'settings.custom_fields.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"value\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && customFieldControl.select_options.controls[j].controls.value.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted &&  customFieldControl.select_options.controls[j].controls.value.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"customFieldControl.select_options.controls[j].controls.value.errors.required\">{{'settings.custom_fields.create.error_messages.message6' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-raised mint-gradient white\" (click)=\"deleteOption(j)\"><i class=\"fa fa-close\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\"><span>{{'common.create' | translate}}</span></button>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/custom-field-edit/custom-field-edit.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/custom-field-edit/custom-field-edit.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;{{'settings.custom_fields.title' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form [formGroup]=\"editCustomFieldForm\" (ngSubmit)=\"onSubmit()\" class=\"bs4-forms\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && customFieldControl.form_id.errors }\">\n\t\t\t\t\t\t<label for=\"form_id\">{{'settings.custom_fields.create.fields.custom_field_for' | translate}}</label>&nbsp;<span class=\"text-danger\">*</span>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"formTables\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\tplaceholder=\"{{'settings.custom_fields.create.placeholders.placeholder1' | translate}}\"\n\t\t\t\t\t\t\tformControlName=\"form_id\">\n\t\t\t\t\t\t</ng-select> \n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && customFieldControl.form_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"customFieldControl.form_id.errors.required\">{{'settings.custom_fields.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"field_label\">{{'settings.custom_fields.create.fields.field_label' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"{{'settings.custom_fields.create.placeholders.placeholder2' | translate}}\" class=\"form-control\" id=\"field_label\" formControlName=\"field_label\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && customFieldControl.field_label.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && customFieldControl.field_label.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"customFieldControl.field_label.errors.required\">{{'settings.custom_fields.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"help_text\">{{'settings.custom_fields.create.fields.help_text' | translate}}</label>\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"{{'settings.custom_fields.create.placeholders.placeholder3' | translate}}\" class=\"form-control\" id=\"help_text\" formControlName=\"help_text\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && customFieldControl.help_text.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && customFieldControl.help_text.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"customFieldControl.help_text.errors.required\">{{'settings.custom_fields.create.error_messages.message3' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\" *ngIf=\"editCustomFieldForm.get('field_type').value != 'checkbox'\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"is_required\">{{'settings.custom_fields.create.fields.is_required_field' | translate}}</label>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<label class=\"checkbox-container col-form-label\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-control\" formControlName=\"is_required\" id=\"is_required\" />\n\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"show_on_details\">{{'settings.custom_fields.create.fields.show_on_detail' | translate}}</label>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<label class=\"checkbox-container col-form-label\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-control\" formControlName=\"show_on_details\" id=\"show_on_details\" />\n\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && customFieldControl.field_type.errors }\">\n\t\t\t\t\t\t<label for=\"field_type\">{{'settings.custom_fields.create.fields.field_type' | translate}}</label>&nbsp;<span class=\"text-danger\">*</span>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"('customFieldsType' | translate)\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindValue=\"value\"\n\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\tplaceholder=\"{{'settings.custom_fields.create.placeholders.placeholder4' | translate}}\"\n\t\t\t\t\t\t\tformControlName=\"field_type\"\n\t\t\t\t\t\t\t(change)=\"onChange($event)\">\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && customFieldControl.field_type.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"customFieldControl.field_type.errors.required\">{{'settings.custom_fields.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\" *ngIf=\"editCustomFieldForm.get('field_type').value == 'dropdown'\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t<ng-container formArrayName=\"select_options\">\n\t\t\t\t\t\t\t<table class=\"table table-bordered table-hover b4-datatable\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th colspan=\"3\" text-align=\"center\">{{'settings.custom_fields.headings.head1' | translate}}</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th class=\"width-200\">{{'settings.custom_fields.columns.label' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th class=\"width-200\">{{'settings.custom_fields.columns.value' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th><button type=\"button\" class=\"btn btn-raised mint-gradient white mb-0\" (click)=\"addOption()\"><i class=\"fa fa-plus\"></i></button></th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody *ngIf=\"editCustomFieldForm.get('select_options').controls?.length != 0\">\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let option of editCustomFieldForm.get('select_options').controls; let j = index\">\n\t\t\t\t\t\t\t\t\t\t<ng-container [formGroupName]=\"j\">\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"label\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && customFieldControl.select_options.controls[j].controls.label.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted &&  customFieldControl.select_options.controls[j].controls.label.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"customFieldControl.select_options.controls[j].controls.label.errors.required\">{{'settings.custom_fields.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"value\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && customFieldControl.select_options.controls[j].controls.value.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted &&  customFieldControl.select_options.controls[j].controls.value.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"customFieldControl.select_options.controls[j].controls.value.errors.required\">{{'settings.custom_fields.create.error_messages.message6' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-raised mint-gradient white\" (click)=\"deleteOption(j)\"><i class=\"fa fa-close\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\"><span>{{'common.update' | translate}}</span></button>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/custom-fields/custom-fields.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/custom-fields/custom-fields.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\n\t<h4 class=\"sub-title mt-3\"><span>{{'settings.custom_fields.title' | translate}}</span></h4>\n\t<button type=\"button\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'customfields_create']\" class=\"btn btn-create mb-0\" (click)=\"openCustomFieldCreateModal()\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></button>\n</div>\n<div class=\"card-content pl-2 pr-2 pb-2\">\n\t<div class=\"card-body\">\n\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" id=\"custom_field_table\" width=\"100%\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t<th>{{'settings.custom_fields.columns.label' | translate}}</th>\n\t\t\t\t\t\t<th>{{'settings.custom_fields.columns.custom_field_for' | translate}}</th>\n\t\t\t\t\t\t<th>{{'settings.custom_fields.columns.type' | translate}}</th>\n\t\t\t\t\t\t<th>{{'settings.custom_fields.columns.status' | translate}}</th>\n\t\t\t\t\t\t<th>{{'settings.custom_fields.columns.actions' | translate}}</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody *ngIf=\"customFields?.length != 0\">\n\t\t\t\t\t<tr *ngFor=\"let customField of customFields; index as i\">\n\t\t\t\t\t\t<td>{{i + 1}}</td>\n\t\t\t\t\t\t<td>{{customField.field_label}}</td>\n\t\t\t\t\t\t<td>{{formTables[customField.form_id]}}</td>\n\t\t\t\t\t\t<td>{{customField.field_type}}</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div *ngxPermissionsOnly=\"['admin', 'super_admin', 'customfields_edit']; else elseBlock1; then thenBlock1\"></div>\n\t\t\t\t\t\t\t<ng-template #elseBlock1>\n\t\t\t\t\t\t\t\t<div class=\"budges-status\">\n\t\t\t\t\t\t\t\t\t<span class=\"completed\" *ngIf=\"customField.status == '1'\">{{'common.status.active' | translate}}</span>\n\t\t\t\t\t\t\t\t\t<span class=\"cancel\" *ngIf=\"customField.status == '0'\">{{'common.status.inactive' | translate}}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t<ng-template #thenBlock1>\n\t\t\t\t\t\t\t\t<ui-switch [checked]=\"customField.status == '1' ? true : false\" (valueChange)=\"changeStatus($event, customField.id)\"></ui-switch>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"actions-dropdown\">\n\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'customfields_edit']\">\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"openCustomFieldEditModal(customField)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\" placement=\"top\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'customfields_delete']\">\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"removeCustomField(customField.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\" placement=\"top\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t\t<tfoot *ngIf=\"customFields?.length == 0\" class=\"tfoot_dt\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td colspan=\"6\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tfoot>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/dashboard-settings/dashboard-settings.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/dashboard-settings/dashboard-settings.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\n    <h4 class=\"sub-title mt-2\"><span>{{'settings.dashboard_settings.title' | translate}}</span></h4>\n</div>\n<form class=\"form\">\n    <div class=\"form-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                    <table class=\"table table-bordered table-hover\">\n                        <thead>\n                            <tr>\n                                <th>{{'settings.dashboard_settings.columns.settings' | translate}}</th>\n                                <th class=\"width-100\"></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>{{'settings.dashboard_settings.title1' | translate}}</td>\n                                <td>\n                                    <div class=\"onoffswitch\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'dashboardsettings_create', 'dashboardsettings_edit']\">\n                                        <input type=\"checkbox\" class=\"onoffswitch-checkbox\" id=\"is_announcement_dashboard\" name=\"is_announcement_dashboard\" [(ngModel)]=\"settings.is_announcement_dashboard\" (change)=\"saveDashboardSettings()\" />\n                                        <label class=\"onoffswitch-label m-b-none\" for=\"is_announcement_dashboard\">\n                                            <span class=\"onoffswitch-inner\"></span>\n                                            <span class=\"onoffswitch-switch\"></span>\n                                        </label>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'settings.dashboard_settings.title2' | translate}}</td>\n                                <td>\n                                    <div class=\"onoffswitch\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'dashboardsettings_create', 'dashboardsettings_edit']\">\n                                        <input type=\"checkbox\" class=\"onoffswitch-checkbox\" id=\"is_activities_dashboard\" name=\"is_activities_dashboard\" [(ngModel)]=\"settings.is_activities_dashboard\" (change)=\"saveDashboardSettings()\" />\n                                        <label class=\"onoffswitch-label m-b-none\" for=\"is_activities_dashboard\">\n                                            <span class=\"onoffswitch-inner\"></span>\n                                            <span class=\"onoffswitch-switch\"></span>\n                                        </label>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'settings.dashboard_settings.title3' | translate}}</td>\n                                <td>\n                                    <div class=\"onoffswitch\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'dashboardsettings_create', 'dashboardsettings_edit']\">\n                                        <input type=\"checkbox\" class=\"onoffswitch-checkbox\" id=\"is_todos_dashboard\" name=\"is_todos_dashboard\" [(ngModel)]=\"settings.is_todos_dashboard\" (change)=\"saveDashboardSettings()\" />\n                                        <label class=\"onoffswitch-label m-b-none\" for=\"is_todos_dashboard\">\n                                            <span class=\"onoffswitch-inner\"></span>\n                                            <span class=\"onoffswitch-switch\"></span>\n                                        </label>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'settings.dashboard_settings.title4' | translate}}</td>\n                                <td>\n                                    <div class=\"onoffswitch\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'dashboardsettings_create', 'dashboardsettings_edit']\">\n                                        <input type=\"checkbox\" class=\"onoffswitch-checkbox\" id=\"is_meetings_dashboard\" name=\"is_meetings_dashboard\" [(ngModel)]=\"settings.is_meetings_dashboard\" (change)=\"saveDashboardSettings()\" />\n                                        <label class=\"onoffswitch-label m-b-none\" for=\"is_meetings_dashboard\">\n                                            <span class=\"onoffswitch-inner\"></span>\n                                            <span class=\"onoffswitch-switch\"></span>\n                                        </label>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'settings.dashboard_settings.title5' | translate}}</td>\n                                <td>\n                                    <div class=\"onoffswitch\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'dashboardsettings_create', 'dashboardsettings_edit']\">\n                                        <input type=\"checkbox\" class=\"onoffswitch-checkbox\" id=\"is_projects_dashboard\" name=\"is_projects_dashboard\" [(ngModel)]=\"settings.is_projects_dashboard\" (change)=\"saveDashboardSettings()\" />\n                                        <label class=\"onoffswitch-label m-b-none\" for=\"is_projects_dashboard\">\n                                            <span class=\"onoffswitch-inner\"></span>\n                                            <span class=\"onoffswitch-switch\"></span>\n                                        </label>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'settings.dashboard_settings.title6' | translate}}</td>\n                                <td>\n                                    <div class=\"onoffswitch\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'dashboardsettings_create', 'dashboardsettings_edit']\">\n                                        <input type=\"checkbox\" class=\"onoffswitch-checkbox\" id=\"is_tasks_dashboard\" name=\"is_tasks_dashboard\" [(ngModel)]=\"settings.is_tasks_dashboard\" (change)=\"saveDashboardSettings()\" />\n                                        <label class=\"onoffswitch-label m-b-none\" for=\"is_tasks_dashboard\">\n                                            <span class=\"onoffswitch-inner\"></span>\n                                            <span class=\"onoffswitch-switch\"></span>\n                                        </label>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'settings.dashboard_settings.title7' | translate}}</td>\n                                <td>\n                                    <div class=\"onoffswitch\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'dashboardsettings_create', 'dashboardsettings_edit']\">\n                                        <input type=\"checkbox\" class=\"onoffswitch-checkbox\" id=\"is_defects_dashboard\" name=\"is_defects_dashboard\" [(ngModel)]=\"settings.is_defects_dashboard\" (change)=\"saveDashboardSettings()\" />\n                                        <label class=\"onoffswitch-label m-b-none\" for=\"is_defects_dashboard\">\n                                            <span class=\"onoffswitch-inner\"></span>\n                                            <span class=\"onoffswitch-switch\"></span>\n                                        </label>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'settings.dashboard_settings.title8' | translate}}</td>\n                                <td>\n                                    <div class=\"onoffswitch\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'dashboardsettings_create', 'dashboardsettings_edit']\">\n                                        <input type=\"checkbox\" class=\"onoffswitch-checkbox\" id=\"is_incidents_dashboard\" name=\"is_incidents_dashboard\" [(ngModel)]=\"settings.is_incidents_dashboard\" (change)=\"saveDashboardSettings()\" />\n                                        <label class=\"onoffswitch-label m-b-none\" for=\"is_incidents_dashboard\">\n                                            <span class=\"onoffswitch-inner\"></span>\n                                            <span class=\"onoffswitch-switch\"></span>\n                                        </label>\n                                    </div>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/database-backup/database-backup.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/database-backup/database-backup.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\n\t<h4 class=\"sub-title mt-2\"><span>{{'settings.database_backups.title' | translate}}</span></h4>\n\t<a class=\"btn btn-create mb-0\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'backupdatabase_create']\" (click)=\"backupDatabase()\" placement=\"top\" tooltip=\"{{'settings.database_backups.title2' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n</div>\n<div class=\"row\">\n\t<div class=\"col-md-12\">\n\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t<table class=\"table table-bordered table-hover b4-datatable\" id=\"database_table\" width=\"100%\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>{{'settings.database_backups.columns.date' | translate}}</th>\n\t\t\t\t\t\t<th>{{'settings.database_backups.columns.file_name' | translate}}</th>\n\t\t\t\t\t\t<th class=\"width-50\">{{'settings.database_backups.columns.actions' | translate}}</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody *ngIf=\"databases?.length != 0\">\n\t\t\t\t\t<tr *ngFor=\"let database of databases; index as i\">\n\t\t\t\t\t\t<td>{{database.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}</td>\n\t\t\t\t\t\t<td>{{database.file_name}}</td>\n\t\t\t\t\t\t<td class=\"actions-dropdown\">\n\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'backupdatabase_view']\">\n\t\t\t\t\t\t\t\t\t\t<a target=\"_blank\" tooltip=\"{{'common.download' | translate}}\" download=\"{{database.file_name}}\" href=\"{{apiUrl}}/database_backup/{{database.file_name}}\" class=\"dropdown-item btn btn-download btn-raised\"><i class=\"fa fa-download\"></i></a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'backupdatabase_edit']\">\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"restoreDatabase(database)\" tooltip=\"{{'common.restore' | translate}}\" class=\"dropdown-item btn btn-restore btn-raised\"><i class=\"fa fa-undo\"></i></a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'backupdatabase_delete']\">\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"deleteDatatabase(database.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t\t<tfoot *ngIf=\"databases?.length == 0\" class=\"tfoot_dt\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td colspan=\"3\" class=\"text-center\">\n\t\t\t\t\t\t\t<img src=\"assets/img/norecord-img.png\" width=\"50\">\n\t\t\t\t\t\t\t<p class=\"mt-1\">{{'common.empty_message.database_backups' | translate}}</p>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tfoot>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/email-notifications/email-notifications.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/email-notifications/email-notifications.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\n    <h4 class=\"sub-title mt-2\"><span>{{'settings.email_notification.title' | translate}}</span></h4>\n</div>\n<form class=\"form\">\n    <div class=\"form-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                    <table class=\"table table-bordered table-hover\">\n                        <thead>\n                            <tr>\n                                <th>{{'settings.email_notification.columns.notification' | translate}}</th>\n                                <th class=\"width-100\"></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>{{'settings.email_notification.title1' | translate}}</td>\n                                <td>\n                                    <ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'emailnotifications_create', 'emailnotifications_edit']\">\n                                        <div class=\"onoffswitch\">\n                                            <input type=\"checkbox\" class=\"onoffswitch-checkbox\" id=\"is_announcement_notification\" name=\"is_announcement_notification\" [(ngModel)]=\"settings.is_announcement_notification\" (change)=\"saveNotification()\" />\n                                            <label class=\"onoffswitch-label m-b-none\" for=\"is_announcement_notification\">\n                                                <span class=\"onoffswitch-inner\"></span>\n                                                <span class=\"onoffswitch-switch\"></span>\n                                            </label>\n                                        </div>\n                                    </ng-container>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/email-settings/email-settings.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/email-settings/email-settings.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\n    <h4 class=\"sub-title mt-2\"><span>{{'settings.email_settings.title' | translate}}</span></h4>\n</div>\n<form [formGroup]=\"settingsForm\" (ngSubmit)=\"onSubmit()\" class=\"form\">\n    <div class=\"form-body\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                    <label for=\"company_from_email\">{{'settings.email_settings.create.fields.company_email' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                    <input type=\"email\" class=\"form-control\" formControlName=\"company_from_email\" id=\"company_from_email\" [ngClass]=\"{ 'is-invalid': isSubmitted && emailSettings.company_from_email.errors }\" placeholder=\"{{'settings.email_settings.create.placeholders.placeholder1' | translate}}\" />\n                    <div *ngIf=\"isSubmitted && emailSettings.company_from_email.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"emailSettings.company_from_email.errors.required\">{{'settings.email_settings.create.error_messages.message1' | translate}}</div>\n                        <div *ngIf=\"emailSettings.company_from_email.errors.email\">{{'settings.email_settings.create.error_messages.message2' | translate}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                    <label for=\"smtp_host\">{{'settings.email_settings.create.fields.mail_from_name' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"{{'settings.email_settings.create.placeholders.placeholder9' | translate}}\" formControlName=\"mail_from_name\" id=\"mail_from_name\" [ngClass]=\"{ 'is-invalid': isSubmitted && emailSettings.mail_from_name.errors }\" />\n                    <div *ngIf=\"isSubmitted && emailSettings.mail_from_name.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"emailSettings.mail_from_name.errors.required\">{{'settings.email_settings.create.error_messages.message9' | translate}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isSubmitted && emailSettings.smtp_protocol.errors }\">\n                    <label for=\"smtp_protocol\">{{'settings.email_settings.create.fields.email_protocol' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                    <ng-select [searchable]=\"true\" [items]=\"smtpHosts\" [selectOnTab]=\"true\" bindValue=\"value\" labelForId=\"smtp_protocol\" placeholder=\"{{'settings.email_settings.create.placeholders.placeholder2' | translate}}\" formControlName=\"smtp_protocol\">\n                    </ng-select>\n                    <div *ngIf=\"isSubmitted && emailSettings.smtp_protocol.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"emailSettings.smtp_protocol.errors.required\">{{'settings.email_settings.create.error_messages.message3' | translate}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                    <label for=\"smtp_host\">{{'settings.email_settings.create.fields.smtp_host' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"smtp.domain.com\" formControlName=\"smtp_host\" id=\"smtp_host\" [ngClass]=\"{ 'is-invalid': isSubmitted && emailSettings.smtp_host.errors }\" />\n                    <div *ngIf=\"isSubmitted && emailSettings.smtp_host.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"emailSettings.smtp_host.errors.required\">{{'settings.email_settings.create.error_messages.message4' | translate}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                    <label for=\"smtp_user\">{{'settings.email_settings.create.fields.smtp_user' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                    <input type=\"email\" class=\"form-control\" placeholder=\"info@gmail.com\" formControlName=\"smtp_user\" id=\"smtp_user\" [ngClass]=\"{ 'is-invalid': isSubmitted && emailSettings.smtp_user.errors }\" />\n                    <div *ngIf=\"isSubmitted && emailSettings.smtp_user.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"emailSettings.smtp_user.errors.required\">{{'settings.email_settings.create.error_messages.message5' | translate}}</div>\n                        <div *ngIf=\"emailSettings.smtp_user.errors.email\">{{'settings.email_settings.create.error_messages.message6' | translate}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                    <label for=\"smtp_password\">{{'settings.email_settings.create.fields.smtp_password' | translate}}</label>\n                    <input type=\"password\" class=\"form-control\" formControlName=\"smtp_password\" id=\"smtp_password\" placeholder=\"{{'settings.email_settings.create.placeholders.placeholder3' | translate}}\" [ngClass]=\"{ 'is-invalid': isSubmitted && emailSettings.smtp_password.errors }\" />\n                    <div *ngIf=\"isSubmitted && emailSettings.smtp_password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"emailSettings.smtp_password.errors.required\">{{'settings.email_settings.create.error_messages.message7' | translate}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                    <label for=\"smtp_port\">{{'settings.email_settings.create.fields.smtp_port' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"587\" formControlName=\"smtp_port\" id=\"smtp_port\" [ngClass]=\"{ 'is-invalid': isSubmitted && emailSettings.smtp_port.errors }\" />\n                    <div *ngIf=\"isSubmitted && emailSettings.smtp_port.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"emailSettings.smtp_port.errors.required\">{{'settings.email_settings.create.error_messages.message8' | translate}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                    <label for=\"smtp_encryption\">{{'settings.email_settings.create.fields.email_encryption' | translate}}</label>\n                    <ng-select [searchable]=\"true\" [items]=\"mailEncryption\" [selectOnTab]=\"true\" bindValue=\"value\" labelForId=\"smtp_encryption\" placeholder=\"{{'settings.email_settings.create.placeholders.placeholder4' | translate}}\" formControlName=\"smtp_encryption\">\n                    </ng-select>\n                </div>\n            </div>\n            <div class=\"col-md-3\" *ngIf=\"settingsForm.value.smtp_protocol == 'sparkpost'\">\n                <div class=\"form-group\">\n                    <label for=\"sparkpost_secret\">{{'settings.email_settings.create.fields.sparkpost_secret' | translate}}</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"{{'settings.email_settings.create.placeholders.placeholder5' | translate}}\" formControlName=\"sparkpost_secret\" id=\"sparkpost_secret\" />\n                </div>\n            </div>\n            <ng-container *ngIf=\"settingsForm.value.smtp_protocol == 'mailgun'\">\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"mailgun_domain\">{{'settings.email_settings.create.fields.mailgun_domain' | translate}}</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"{{'settings.email_settings.create.placeholders.placeholder6' | translate}}\" formControlName=\"mailgun_domain\" id=\"mailgun_domain\" />\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"mailgun_secret\">{{'settings.email_settings.create.fields.mailgun_secret' | translate}}</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"{{'settings.email_settings.create.placeholders.placeholder7' | translate}}\" formControlName=\"mailgun_secret\" id=\"mailgun_secret\" />\n                    </div>\n                </div>\n            </ng-container>\n            <div class=\"col-md-3\" *ngIf=\"settingsForm.value.smtp_protocol == 'mandrill'\">\n                <div class=\"form-group\">\n                    <label for=\"mandrill_secret\">{{'settings.email_settings.create.fields.mandrill_secret' | translate}}</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"{{'settings.email_settings.create.placeholders.placeholder8' | translate}}\" formControlName=\"mandrill_secret\" id=\"mandrill_secret\" />\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12 text-right\">\n                <a [routerLink]=\"['/']\" class=\"btn btn-cancel\">{{'common.cancel' | translate}}</a>\n                <button type=\"submit\" class=\"btn btn-submit\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'emailsettings_create', 'emailsettings_edit']\">{{'common.save' | translate}}</button>\n                <button type=\"button\" (click)=\"sendTestEmail();\" class=\"btn btn-submit\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'emailsettings_create', 'emailsettings_edit']\">{{'common.test' | translate}}</button>\n            </div>\n        </div>\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/email-templates/email-templates.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/email-templates/email-templates.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t<h4 class=\"sub-title mt-2\"><span>{{'settings.email_templates.title' | translate}}</span></h4>\n\t<div class=\"width-300 mt-2\">\n\t\t<ng-select [searchable]=\"true\" [items]=\"emailGroups\" [selectOnTab]=\"true\" bindLabel=\"email_group_name\" bindValue=\"id\" labelForId=\"email_group_id\" placeholder=\"{{'settings.email_templates.create.placeholders.placeholder1' | translate}}\" [(ngModel)]=\"email_group_id\" [ngModelOptions]=\"{standalone: true}\"></ng-select>\n\t</div>\n</div>\n<form class=\"form\">\n\t<div class=\"form-body\">\n\t\t<div class=\"row email-templates-navs\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<tabset class=\"email-templates-tab\">\n\t\t\t\t\t<tab heading=\"{{emailTemplate.template_name | translate}}\" id=\"tab-{{emailTemplate.id}}\" *ngFor=\"let emailTemplate of emailGroupTemplates[email_group_id];\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"subject_{{emailTemplate.id}}\">{{'settings.email_templates.create.fields.subject' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"subject_{{emailTemplate.id}}\" id=\"subject_{{emailTemplate.id}}\" placeholder=\"{{'settings.email_templates.create.placeholders.placeholder2' | translate}}\" [(ngModel)]=\"emailTemplate.template_subject\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"description_{{emailTemplate.template_body}}\">{{'settings.email_templates.create.fields.body' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t<app-ngx-editor name=\"description_{{emailTemplate.template_body}}\" height=\"200px\" minHeight=\"50px\" [placeholder]=\"''\" [spellcheck]=\"true\" id=\"description_{{emailTemplate.template_body}}\" [(ngModel)]=\"emailTemplate.template_body\"></app-ngx-editor>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-submit\" (click)=\"saveEmailtemplate(emailTemplate)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'emailtemplates_create', 'emailtemplates_edit']\">{{'common.save' | translate}}</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</tab>\n\t\t\t\t</tabset>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/estimate-settings/estimate-settings.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/estimate-settings/estimate-settings.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\n    <h4 class=\"sub-title mt-2\"><span>{{'settings.estimate_settings.title' | translate}}</span></h4>\n</div>\n<form [formGroup]=\"estimateSettingsForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isFormLoaded\">\n    <div class=\"form-body\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label for=\"estimate_prefix\">{{'settings.estimate_settings.create.fields.estimate_prefix' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"estimate_prefix\" id=\"estimate_prefix\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && estimateSetting.estimate_prefix.errors }\" placeholder=\"{{'settings.estimate_settings.create.placeholders.placeholder1' | translate}}\" />\n                    <div *ngIf=\"isFormSubmitted && estimateSetting.estimate_prefix.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"estimateSetting.estimate_prefix.errors.required\">{{'settings.estimate_settings.create.error_messages.message1' | translate}}</div>\n                        <div *ngIf=\"estimateSetting.estimate_prefix.errors.maxlength\">{{'settings.estimate_settings.create.error_messages.message2' | translate }}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label for=\"due_after\">{{'settings.estimate_settings.create.fields.due_after' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                    <input type=\"number\" class=\"form-control\" formControlName=\"due_after\" id=\"due_after\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && estimateSetting.due_after.errors }\" placeholder=\"{{'settings.estimate_settings.create.placeholders.placeholder2' | translate}}\" />\n                    <div *ngIf=\"isFormSubmitted && estimateSetting.due_after.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"estimateSetting.due_after.errors.required\">{{'settings.estimate_settings.create.error_messages.message3' | translate}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4 mb-2\">\n                <div class=\"form-group\">\n                    <label for=\"auto_remind\">{{'settings.estimate_settings.create.fields.auto_remind' | translate}}</label>\n                    <label class=\"checkbox-container d-block\">\n                        <input type=\"checkbox\" class=\"form-control\" formControlName=\"auto_remind\" id=\"auto_remind\" />\n                        <span class=\"checkbox-checkmark\"></span>\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label for=\"auto_remind_before\">{{'settings.estimate_settings.create.fields.auto_remind_before' | translate}}</label>\n                    <input type=\"number\" class=\"form-control\" formControlName=\"auto_remind_before\" id=\"auto_remind_before\" placeholder=\"{{'settings.estimate_settings.create.placeholders.placeholder5' | translate}}\" />\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label for=\"client_note\">{{'settings.estimate_settings.create.fields.client_note' | translate}}</label>\n                    <textarea rows=\"3\" class=\"form-control\" formControlName=\"client_note\" id=\"client_note\" placeholder=\"{{'settings.estimate_settings.create.placeholders.placeholder3' | translate}}\"></textarea>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label for=\"terms_conditions\">{{'settings.estimate_settings.create.fields.terms_conditions' | translate}}</label>\n                    <textarea rows=\"3\" class=\"form-control\" formControlName=\"terms_conditions\" id=\"terms_conditions\" placeholder=\"{{'settings.estimate_settings.create.placeholders.placeholder4' | translate}}\"></textarea>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label>{{'settings.estimate_settings.create.fields.estimate_logo' | translate }}</label>\n                    <input type=\"hidden\" formControlName=\"estimate_logo\">\n                    <div class=\"dropzone dz-clickable\" #logodropzone>\n                        <div class=\"dz-preview dz-image-preview\" *ngIf=\"isLogoLoaded && setting.estimate_logo\">\n                            <div class=\"dz-image\">\n                                <img src=\"{{apiUrl}}/uploads/estimate_logo/{{setting.estimate_logo}}\" height=\"100\" width=\"100\" />\n                            </div>\n                            <a class=\"btn btn-sm btn-block\" (click)=\"removeDropzoneImage()\">{{ 'common.remove_file' | translate }}</a>\n                        </div>\n                        <div class=\"dz-default dz-message\">\n                            <span *ngIf=\"!setting.estimate_logo\"><strong>{{ 'settings.estimate_settings.create.error_messages.message4' | translate }}</strong></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12 text-right\">\n                <a [routerLink]=\"['/']\" class=\"btn btn-cancel\">{{'common.cancel' | translate}}</a>\n                <button type=\"submit\" class=\"btn btn-submit\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'estimatesettings_edit']\">{{'common.save' | translate}}</button>\n            </div>\n        </div>\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/invoice-settings/invoice-settings.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/invoice-settings/invoice-settings.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\n    <h4 class=\"sub-title mt-2\"><span>{{'settings.invoice_settings.title' | translate}}</span></h4>\n</div>\n<form [formGroup]=\"invoiceSettingsForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isFormLoaded\">\n    <div class=\"form-body\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label for=\"invoice_prefix\">{{'settings.invoice_settings.create.fields.invoice_prefix' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"invoice_prefix\" id=\"invoice_prefix\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && invoiceSetting.invoice_prefix.errors }\" placeholder=\"{{'settings.invoice_settings.create.placeholders.placeholder1' | translate}}\" />\n                    <div *ngIf=\"isFormSubmitted && invoiceSetting.invoice_prefix.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"invoiceSetting.invoice_prefix.errors.required\">{{'settings.invoice_settings.create.error_messages.message1' | translate}}</div>\n                        <div *ngIf=\"invoiceSetting.invoice_prefix.errors.maxlength\">{{'settings.invoice_settings.create.error_messages.message2' | translate }}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label for=\"due_after\">{{'settings.invoice_settings.create.fields.due_after' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                    <input type=\"number\" class=\"form-control\" formControlName=\"due_after\" id=\"due_after\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && invoiceSetting.due_after.errors }\" placeholder=\"{{'settings.invoice_settings.create.placeholders.placeholder2' | translate}}\" />\n                    <div *ngIf=\"isFormSubmitted && invoiceSetting.due_after.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"invoiceSetting.due_after.errors.required\">{{'settings.invoice_settings.create.error_messages.message3' | translate}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4 mb-2\">\n                <div class=\"form-group\">\n                    <label for=\"auto_remind\">{{'settings.invoice_settings.create.fields.auto_remind' | translate}}</label>\n                    <label class=\"checkbox-container d-block\">\n                        <input type=\"checkbox\" class=\"form-control\" formControlName=\"auto_remind\" id=\"auto_remind\" />\n                        <span class=\"checkbox-checkmark\"></span>\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label for=\"auto_remind_after\">{{'settings.invoice_settings.create.fields.auto_remind_after' | translate}}</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"auto_remind_after\" id=\"auto_remind_after\" placeholder=\"{{'settings.invoice_settings.create.placeholders.placeholder5' | translate}}\" />\n                </div>\n            </div>\n            <div class=\"col-md-4 mb-2\">\n                <div class=\"form-group\">\n                    <label for=\"show_gst_number\">{{'settings.invoice_settings.create.fields.show_gst_number' | translate}}</label>\n                    <label class=\"checkbox-container d-block\">\n                        <input type=\"checkbox\" class=\"form-control\" formControlName=\"show_gst_number\" id=\"show_gst_number\" />\n                        <span class=\"checkbox-checkmark\"></span>\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label for=\"gst_number\">{{'settings.invoice_settings.create.fields.gst_number' | translate}}</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"gst_number\" id=\"gst_number\" placeholder=\"{{'settings.invoice_settings.create.placeholders.placeholder6' | translate}}\" />\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label for=\"client_note\">{{'settings.invoice_settings.create.fields.client_note' | translate}}</label>\n                    <textarea rows=\"3\" class=\"form-control\" formControlName=\"client_note\" id=\"client_note\" placeholder=\"{{'settings.invoice_settings.create.placeholders.placeholder3' | translate}}\"></textarea>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label for=\"terms_conditions\">{{'settings.invoice_settings.create.fields.terms_conditions' | translate}}</label>\n                    <textarea rows=\"3\" class=\"form-control\" formControlName=\"terms_conditions\" id=\"terms_conditions\" placeholder=\"{{'settings.invoice_settings.create.placeholders.placeholder4' | translate}}\"></textarea>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label>{{'settings.invoice_settings.create.fields.invoice_logo' | translate }}</label>\n                    <input type=\"hidden\" formControlName=\"invoice_logo\">\n                    <div class=\"dropzone dz-clickable d-flex justify-content-center\" #logodropzone>\n                        <div class=\"dz-preview dz-image-preview\" *ngIf=\"isLogoLoaded && setting.invoice_logo\">\n                            <div class=\"dz-image\">\n                                <img src=\"{{apiUrl}}/uploads/invoice_logo/{{setting.invoice_logo}}\" height=\"100\" width=\"100\" />\n                            </div>\n                            <a class=\"btn btn-sm btn-block\" (click)=\"removeDropzoneImage()\">{{ 'common.remove_file' | translate }}</a>\n                        </div>\n                        <div class=\"dz-default dz-message\">\n                            <span *ngIf=\"!setting.invoice_logo\"><strong>{{ 'settings.invoice_settings.create.error_messages.message4' | translate }}</strong></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12 text-right\">\n                <a [routerLink]=\"['/']\" class=\"btn btn-cancel\">{{'common.cancel' | translate}}</a>\n                <button type=\"submit\" class=\"btn btn-submit\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'invoicesettings_edit']\">{{'common.save' | translate}}</button>\n            </div>\n        </div>\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/menu-allocation/menu-allocation.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/menu-allocation/menu-allocation.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\n\t<h4 class=\"sub-title mt-2\"><span>{{'settings.menu_allocation.title' | translate}}</span></h4>\n</div>\n<form class=\"form\">\n\t<div class=\"form-body\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<div id=\"nestable-menu\">\n\t\t\t\t\t<button type=\"button\" (click)=\"expandAll()\" class=\"btn btn-outline-info mr-1 btn-round\">{{'settings.menu_allocation.title1' | translate}}</button>\n\t\t\t\t\t<button type=\"button\" (click)=\"collapseAll()\" class=\"btn btn-outline-info mr-1 btn-round\">{{'settings.menu_allocation.title2' | translate}}</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<div class=\"ibox \">\n\t\t\t\t\t<div class=\"ibox-title\">\n\t\t\t\t\t\t<h5>{{'common.status.active' | translate}}</h5>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ibox-content\">\n\t\t\t\t\t\t<div class=\"dd\" id=\"nestable\">\n\t\t\t\t\t\t\t<div class=\"dd-empty\" *ngIf=\"activeInactiveMenu.active_menu?.length == 0\"></div>\n\t\t\t\t\t\t\t<ol class=\"dd-list\" *ngIf=\"activeInactiveMenu.active_menu?.length > 0\">\n\t\t\t\t\t\t\t\t<li class=\"dd-item dd-nochildren\" [attr.data-id]=\"active_menu.id\" *ngFor=\"let active_menu of activeInactiveMenu.active_menu\">\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"!active_menu.children\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"dd-handle\"><i class=\"fa fa-folder\"></i>&nbsp;{{active_menu.text | translate}}</div>\n\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"active_menu.children?.length > 0\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"dd-handle\"><i class=\"fa fa-folder\"></i>&nbsp;{{active_menu.text | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t<ol class=\"dd-list\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"dd-item\" [attr.data-id]=\"children.id\" *ngFor=\"let children of active_menu.children\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dd-handle\">&nbsp;{{children.text | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<div class=\"ibox\">\n\t\t\t\t\t<div class=\"ibox-title\">\n\t\t\t\t\t\t<h5>{{'common.status.inactive' | translate}}</h5>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ibox-content\">\n\t\t\t\t\t\t<div class=\"dd\" id=\"nestable2\">\n\t\t\t\t\t\t\t<div class=\"dd-empty\" *ngIf=\"activeInactiveMenu.inactive_menu?.length == 0\"></div>\n\t\t\t\t\t\t\t<ol class=\"dd-list\" *ngIf=\"activeInactiveMenu.inactive_menu?.length > 0\">\n\t\t\t\t\t\t\t\t<li class=\"dd-item dd-nochildren\" [attr.data-id]=\"inactive_menu.id\" *ngFor=\"let inactive_menu of activeInactiveMenu.inactive_menu\">\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"!inactive_menu.children\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"dd-handle\"><i class=\"fa fa-folder\"></i>&nbsp;{{inactive_menu.text | translate}}</div>\n\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"inactive_menu.children?.length > 0\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"dd-handle\"><i class=\"fa fa-folder\"></i>&nbsp;{{inactive_menu.text | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t<ol class=\"dd-list\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"dd-item\" [attr.data-id]=\"children.id\" *ngFor=\"let children of inactive_menu.children\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dd-handle\">&nbsp;{{children.text | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id=\"nestable-output\" class=\"d-none\"></div>\n\t\t\t<div id=\"nestable2-output\" class=\"d-none\"></div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t<button type=\"submit\" class=\"btn btn-submit\" (click)=\"saveMenu()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'menuallocation_create', 'menuallocation_edit']\">{{'common.save' | translate}}</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/paypal-gateway/paypal-gateway.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/paypal-gateway/paypal-gateway.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\n\t<h4 class=\"sub-title mt-2\"><span>{{'settings.payment_gateway_settings.title' | translate}}</span></h4>\n</div>\n<form [formGroup]=\"settingsForm\" (ngSubmit)=\"onSubmit()\" class=\"form\" *ngIf=\"isFormLoad\">\n\t<div class=\"form-body\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"paypal_checkout_label\">{{'settings.paypal_settings.create.fields.paypal_checkout_label' | translate}}&nbsp;&nbsp;</label>\n\t\t\t\t\t<span><a href=\"https://developer.paypal.com/docs/platforms/checkout/reference/style-guide/\" target=\"_blank\"><i class=\"fa fa-lightbulb-o fa-1\" placement=\"top\" tooltip=\"{{'settings.custom_fields.create.fields.help_text' | translate}}\"></i></a></span>\n\t\t\t\t\t<input type=\"input\" class=\"form-control\" formControlName=\"paypal_checkout_label\" id=\"paypal_checkout_label\" placeholder=\"{{'settings.paypal_settings.create.placeholders.placeholder1' | translate}}\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"paypal_checkout_client_id\">{{'settings.paypal_settings.create.fields.paypal_checkout_client_id' | translate}}</label>\n\t\t\t\t\t<input type=\"input\" class=\"form-control\" formControlName=\"paypal_checkout_client_id\" id=\"paypal_checkout_client_id\" placeholder=\"{{'settings.paypal_settings.create.placeholders.placeholder2' | translate}}\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>{{'settings.paypal_settings.create.fields.paypal_checkout_status' | translate}}</label>\n\t\t\t\t\t<div class=\"onoffswitch\">\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"onoffswitch-checkbox\" id=\"paypal_checkout_status\" name=\"paypal_checkout_status\" formControlName=\"paypal_checkout_status\" />\n\t\t\t\t\t\t<label class=\"onoffswitch-label m-b-none\" for=\"paypal_checkout_status\">\n\t\t\t\t\t\t\t<span class=\"onoffswitch-inner\"></span>\n\t\t\t\t\t\t\t<span class=\"onoffswitch-switch\"></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row border-top pt-2\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"stripe_label\">{{'settings.stripe_settings.create.fields.stripe_label' | translate}}</label>\n\t\t\t\t\t<input type=\"input\" class=\"form-control\" formControlName=\"stripe_label\" id=\"stripe_label\" placeholder=\"{{'settings.stripe_settings.create.placeholders.placeholder1' | translate}}\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"stripe_api_key\">{{'settings.stripe_settings.create.fields.stripe_api_key' | translate}}</label>\n\t\t\t\t\t<input type=\"input\" class=\"form-control\" formControlName=\"stripe_api_key\" id=\"stripe_api_key\" placeholder=\"{{'settings.stripe_settings.create.placeholders.placeholder2' | translate}}\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"stripe_secret_key\">{{'settings.stripe_settings.create.fields.stripe_secret_key' | translate}}</label>\n\t\t\t\t\t<input type=\"input\" class=\"form-control\" formControlName=\"stripe_secret_key\" id=\"stripe_secret_key\" placeholder=\"{{'settings.stripe_settings.create.placeholders.placeholder3' | translate}}\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>{{'settings.stripe_settings.create.fields.stripe_status' | translate}}</label>\n\t\t\t\t\t<div class=\"onoffswitch\">\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"onoffswitch-checkbox\" id=\"stripe_status\" name=\"stripe_status\" formControlName=\"stripe_status\" />\n\t\t\t\t\t\t<label class=\"onoffswitch-label m-b-none\" for=\"stripe_status\">\n\t\t\t\t\t\t\t<span class=\"onoffswitch-inner\"></span>\n\t\t\t\t\t\t\t<span class=\"onoffswitch-switch\"></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t<a [routerLink]=\"['/']\" class=\"btn btn-cancel\">{{'common.cancel' | translate}}</a>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-submit\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'paymentgatewaysettings_create', 'paymentgatewaysettings_edit']\"><span>{{'common.save' | translate}}</span></button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/slack-settings/slack-settings.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/slack-settings/slack-settings.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\n    <h4 class=\"sub-title mt-2\"><span>{{'settings.slack_settings.title' | translate}}</span></h4>\n</div>\n<form [formGroup]=\"slackSettingsForm\" (ngSubmit)=\"onSubmit()\" class=\"form\" *ngIf=\"isFormLoad\">\n    <div class=\"form-body\">\n        <div class=\"row\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'slacksettings_create', 'slacksettings_edit']\">\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"slack_client_id\">{{'settings.slack_settings.create.fields.slack_client_id' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                    <input type=\"input\" class=\"form-control\" formControlName=\"slack_client_id\" id=\"slack_client_id\" placeholder=\"{{'settings.slack_settings.create.placeholders.placeholder1' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && slackSetting.slack_client_id.errors }\" />\n                    <div *ngIf=\"isFormSubmitted && slackSetting.slack_client_id.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"slackSetting.slack_client_id.errors.required\">{{'settings.slack_settings.create.error_messages.message1' | translate}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"slack_client_secret\">{{'settings.slack_settings.create.fields.slack_client_secret' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                    <input type=\"input\" class=\"form-control\" formControlName=\"slack_client_secret\" id=\"slack_client_secret\" placeholder=\"{{'settings.slack_settings.create.placeholders.placeholder2' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && slackSetting.slack_client_secret.errors }\" />\n                    <div *ngIf=\"isFormSubmitted && slackSetting.slack_client_secret.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"slackSetting.slack_client_secret.errors.required\">{{'settings.slack_settings.create.error_messages.message2' | translate}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"slack_redirect_URL\">{{'settings.slack_settings.create.fields.slack_redirect_url' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                    <input type=\"input\" class=\"form-control\" formControlName=\"slack_redirect_URL\" id=\"slack_redirect_URL\" placeholder=\"{{'settings.slack_settings.create.placeholders.placeholder3' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && slackSetting.slack_redirect_URL.errors }\" />\n                    <div *ngIf=\"isFormSubmitted && slackSetting.slack_redirect_URL.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"slackSetting.slack_redirect_URL.errors.required\">{{'settings.slack_settings.create.error_messages.message3' | translate}}</div>\n                    </div>\n                    <small>{{apiUrl}}/api/slack/auth/redirect</small>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label>{{'settings.slack_settings.create.fields.slack_status' | translate}}</label>\n                    <div class=\"onoffswitch\">\n                        <input type=\"checkbox\" class=\"onoffswitch-checkbox\" id=\"slack_status\" name=\"slack_status\" formControlName=\"slack_status\" />\n                        <label class=\"onoffswitch-label m-b-none\" for=\"slack_status\">\n                            <span class=\"onoffswitch-inner\"></span>\n                            <span class=\"onoffswitch-switch\"></span>\n                        </label>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\" *ngIf=\"slackSettingsForm.get('slack_client_id').value && slackSettingsForm.get('slack_client_secret').value && slackSettingsForm.get('slack_redirect_URL').value\">\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <a href=\"https://slack.com/oauth/v2/authorize?client_id={{slackSettingsForm.get('slack_client_id').value}}&scope=incoming-webhook&user_scope=admin,chat:write&redirect_uri={{slackSettingsForm.get('slack_redirect_URL').value}}&state={{loginUser.id}}\" target=\"_blank\"><img alt=\"Add to Sng servelack\" height=\"40\" width=\"139\" src=\"https://platform.slack-edge.com/img/add_to_slack.png\" srcSet=\"https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x\" /></a>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-12 text-right\">\n                <a [routerLink]=\"['/']\" class=\"btn btn-cancel\">{{'common.cancel' | translate}}</a>\n                <button type=\"submit\" class=\"btn btn-submit\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'slacksettings_create', 'slacksettings_edit']\"><span>{{'common.save' | translate}}</span></button>\n            </div>\n        </div>\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/system-settings/system-settings.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/system-settings/system-settings.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\n\t<h4 class=\"sub-title mt-2\"><span>{{'settings.system_settings.title' | translate}}</span></h4>\n</div>\n<form [formGroup]=\"settingsForm\" (ngSubmit)=\"onSubmit()\" class=\"form\" *ngIf=\"isFormLoaded\">\n\t<div class=\"form-body\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"timezone\">{{'settings.system_settings.create.fields.timezone' | translate}}<span class=\"text-danger\"></span></label>\n\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t[items]=\"timezones\"\n\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\tbindLabel=\"value\"\n\t\t\t\t\t\tbindValue=\"key\"\n\t\t\t\t\t\tlabelForId=\"timezone\"\n\t\t\t\t\t\tplaceholder=\"{{'settings.system_settings.create.placeholders.placeholder3' | translate}}\"\n\t\t\t\t\t\tformControlName=\"timezone\">\n\t\t\t\t\t</ng-select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isSubmitted && systemSetting.default_language.errors }\">\n\t\t\t\t\t<label for=\"default_language\">{{'settings.system_settings.create.fields.default_language' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t[items]=\"languages\"\n\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\tbindValue=\"language\"\n\t\t\t\t\t\tlabelForId=\"default_language\"\n\t\t\t\t\t\tplaceholder=\"{{'settings.system_settings.create.placeholders.placeholder1' | translate}}\"\n\t\t\t\t\t\tformControlName=\"default_language\">\n\t\t\t\t\t</ng-select>\n\t\t\t\t\t<div *ngIf=\"isSubmitted && systemSetting.default_language.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"systemSetting.default_language.errors.required\">{{'settings.system_settings.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n            <div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isSubmitted && systemSetting.currency_id.errors }\">\n\t\t\t\t\t<label for=\"currency_id\">{{'settings.system_settings.create.fields.default_currency' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t[items]=\"currencies\"\n\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\tlabelForId=\"currency_id\"\n\t\t\t\t\t\tplaceholder=\"{{'settings.system_settings.create.placeholders.placeholder7' | translate}}\" \n\t\t\t\t\t\tformControlName=\"currency_id\">\n\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t{{item.symbol}} - {{item.name}}\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</ng-select>\n\t\t\t\t\t<div *ngIf=\"isSubmitted && systemSetting.currency_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"systemSetting.currency_id.errors.required\">{{'settings.system_settings.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"tables_pagination_limit\">{{'settings.system_settings.create.fields.tables_pagination_limit' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t<input type=\"number\" class=\"form-control\" formControlName=\"tables_pagination_limit\" id=\"tables_pagination_limit\" [ngClass]=\"{ 'is-invalid': isSubmitted && systemSetting.tables_pagination_limit.errors }\" placeholder=\"{{'settings.system_settings.create.placeholders.placeholder4' | translate}}\" />\n\t\t\t\t\t<div *ngIf=\"isSubmitted && systemSetting.tables_pagination_limit.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"systemSetting.tables_pagination_limit.errors.required\">{{'settings.system_settings.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isSubmitted && systemSetting.date_format.errors }\">\n\t\t\t\t\t<label for=\"date_format\">{{'settings.system_settings.create.fields.date_format' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t[items]=\"dateFormates\"\n\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\tbindValue=\"value\"\n\t\t\t\t\t\tlabelForId=\"date_format\"\n\t\t\t\t\t\tplaceholder=\"{{'settings.system_settings.create.placeholders.placeholder5' | translate}}\"\n\t\t\t\t\t\tformControlName=\"date_format\">\n\t\t\t\t\t</ng-select>\n\t\t\t\t\t<div *ngIf=\"isSubmitted && systemSetting.date_format.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"systemSetting.date_format.errors.required\">{{'settings.system_settings.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isSubmitted && systemSetting.time_format.errors }\">\n\t\t\t\t\t<label for=\"time_format\">{{'settings.system_settings.create.fields.time_format' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t[items]=\"timeFormates\"\n\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\tbindValue=\"value\"\n\t\t\t\t\t\tlabelForId=\"time_format\"\n\t\t\t\t\t\tplaceholder=\"{{'settings.system_settings.create.placeholders.placeholder6' | translate}}\"\n\t\t\t\t\t\tformControlName=\"time_format\">\n\t\t\t\t\t</ng-select>\n\t\t\t\t\t<div *ngIf=\"isSubmitted && systemSetting.time_format.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"systemSetting.time_format.errors.required\">{{'settings.system_settings.create.error_messages.message3' | translate}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4 mb-2\">\n                <div class=\"form-group\">\n                    <label for=\"allowed_for_registration\">{{'settings.system_settings.create.fields.allowed_for_registration' | translate}}</label>\n                    <label class=\"checkbox-container d-block\">\n                        <input type=\"checkbox\" class=\"form-control\" formControlName=\"allowed_for_registration\" id=\"allowed_for_registration\" />\n                        <span class=\"checkbox-checkmark\"></span>\n                    </label>\n                </div>\n            </div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t<a [routerLink]=\"['/']\" class=\"btn btn-cancel\">{{'common.cancel' | translate}}</a>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-submit\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'systemsettings_create', 'systemsettings_edit']\"><span>{{'common.save' | translate}}</span></button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/theme-settings/theme-settings.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/theme-settings/theme-settings.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\n\t<h4 class=\"sub-title mt-2\"><span>{{'settings.theme_settings.title' | translate}}</span></h4>\n</div>\n<div class=\"row\">\n\t<div class=\"col-sm-6\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"compnay_logo\">{{'settings.theme_settings.create.fields.compnay_logo' | translate}}</label>\n\t\t\t<div class=\"dropzone dz-clickable d-flex justify-content-center\" #logodropzone>\n\t\t\t\t<div class=\"dz-preview dz-image-preview\" *ngIf=\"settings.company_logo && isCompanyLogoUploaded\" id=\"logo_image\">\n\t\t\t\t\t<div class=\"dz-image\">\n\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/company_logo/{{settings.company_logo}}\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<a class=\"btn btn-sm btn-block\" (click)=\"removeCompanyLogo()\">{{'common.remove_file' | translate}}</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"dz-default dz-message\">\n\t\t\t\t\t<span><strong>{{'settings.theme_settings.create.error_messages.message1' | translate}}</strong></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-sm-6\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"login_bg\">{{'settings.theme_settings.create.fields.login_background' | translate}}</label>\n\t\t\t<div class=\"dropzone dz-clickable d-flex justify-content-center\" #loginbg>\n\t\t\t\t<div class=\"dz-preview dz-image-preview\" *ngIf=\"settings.login_background && isLoginBgUploaded\" id=\"bg_image\">\n\t\t\t\t\t<div class=\"dz-image\">\n\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/login_bg/{{settings.login_background}}\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<a class=\"btn btn-sm btn-block\" (click)=\"removeLoginBg()\">{{'common.remove_file' | translate}}</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"dz-default dz-message\">\n\t\t\t\t\t<span><strong>{{'settings.theme_settings.create.error_messages.message1' | translate}}</strong></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-sm-6\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"compnay_sidebar_logo\">{{'settings.theme_settings.create.fields.compnay_sidebar_logo' | translate}}</label>\n\t\t\t<div class=\"dropzone dz-clickable d-flex justify-content-center\" #sidebardropzone>\n\t\t\t\t<div class=\"dz-preview dz-image-preview\" *ngIf=\"settings.company_sidebar_logo && isCompanySidebarLogoUploaded\" id=\"company_sidebar_logo\">\n\t\t\t\t\t<div class=\"dz-image\">\n\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/company_sidebar_logo/{{settings.company_sidebar_logo}}\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<a class=\"btn btn-sm btn-block\" (click)=\"removeCompanySidebarLogo()\">{{'common.remove_file' | translate}}</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"dz-default dz-message\">\n\t\t\t\t\t<span><strong>{{'settings.theme_settings.create.error_messages.message1' | translate}}</strong></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-sm-6\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"sidebar_background_images\">{{'settings.theme_settings.create.fields.sidebar_background_images' | translate}}</label>\n\t\t\t<div class=\"dropzone dz-clickable\" #colorpaletts>\n\t\t\t\t<div class=\"dz-preview dz-image-preview d-flex\" *ngIf=\"settings.sidebar_background_images && settings.sidebar_background_images.length > 0 && isSidebarBgsUploaded\" id=\"sidebar_bg_images\">\n\t\t\t\t\t<ng-container *ngFor=\"let sidebarImg of settings.sidebar_background_images; index as i\">\n\t\t\t\t\t\t<div class=\"dz-image-custom\" *ngIf=\"sidebarImg\">\n\t\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/sidebar_background_images/{{sidebarImg}}\" />\n\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-block\" (click)=\"removeSidebarBgImage(sidebarImg)\">{{'common.remove_file' | translate}}</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"dz-default dz-message\">\n\t\t\t\t\t<span><strong>{{'settings.theme_settings.create.error_messages.message1' | translate}}</strong></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-sm-3\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"sidebar-width\">{{'theme_setting.header.head14' | translate}}</label>\n\t\t\t<div>\n\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t[items]=\"('theme_setting.width_options' | translate)\"\n\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\tbindLabel=\"value\"\n\t\t\t\t\tbindValue=\"key\"\n\t\t\t\t\tlabelForId=\"sidebarWidth\"\n\t\t\t\t\tplaceholder=\"{{'theme_setting.placeholders.placeholder2' | translate}}\"\n\t\t\t\t\t[(ngModel)]=\"settings.sidebar_width\"\n\t\t\t\t\t(change)=\"changeSidebarWidth($event)\">\n\t\t\t\t</ng-select>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-sm-3\">\n\t\t<div class=\"form-group\">\n\t\t\t<label>{{'theme_setting.header.head13' | translate}}</label>\n\t\t\t<div class=\"onoffswitch\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'dashboardsettings_create', 'dashboardsettings_edit']\">\n\t\t\t\t<input type=\"checkbox\" class=\"onoffswitch-checkbox\" id=\"is_collapsed_menu\" name=\"is_collapsed_menu\" [(ngModel)]=\"settings.is_collapsed_menu\" (change)=\"changeCollapsedMenu($event)\" />\n\t\t\t\t<label class=\"onoffswitch-label m-b-none\" for=\"is_collapsed_menu\">\n\t\t\t\t\t<span class=\"onoffswitch-inner\"></span>\n\t\t\t\t\t<span class=\"onoffswitch-switch\"></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-sm-12 text-right\">\n\t\t<a [routerLink]=\"['/']\" class=\"btn btn-cancel\">{{'common.cancel' | translate}}</a>\n\t\t<button type=\"button\" class=\"btn btn-submit\" (click)=\"onSubmit()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'themesettings_create', 'themesettings_edit']\"><span>{{'common.save' | translate}}</span></button>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/translations-settings/components/create-translation/create-translation.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/translations-settings/components/create-translation/create-translation.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-language\" aria-hidden=\"true\"></i>&nbsp;{{'settings.translations.title' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form [formGroup]=\"createTranslationForm\" (ngSubmit)=\"onSubmit()\" class=\"bs4-forms\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && getTranslationControl.language.errors }\">\n\t\t\t\t\t\t<label for=\"language\">{{'settings.translations.create.fields.language' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"languages\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\tbindValue=\"code\"\n\t\t\t\t\t\t\tlabelForId=\"language\"\n\t\t\t\t\t\t\tplaceholder=\"{{'settings.translations.create.placeholders.placeholder1' | translate}}\"\n\t\t\t\t\t\t\tformControlName=\"language\">\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && getTranslationControl.language.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"getTranslationControl.language.errors.required\">{{'settings.translations.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && getTranslationControl.icon.errors }\">\n\t\t\t\t\t\t<label for=\"icon\">{{'settings.translations.create.fields.icon' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<input type=\"hidden\" formControlName=\"icon\">\n\t\t\t\t\t\t<div class=\"dropzone dz-clickable\" #translateDropzone>\n\t\t\t\t\t\t\t<div class=\"dz-default dz-message\"><span><strong>{{'settings.translations.create.error_messages.message3' | translate}}</strong></span></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && getTranslationControl.icon.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"getTranslationControl.icon.errors.required\">{{'settings.translations.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.cancel' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.create' | translate}}</button>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/translations-settings/components/edit-translation/edit-translation.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/translations-settings/components/edit-translation/edit-translation.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-language\" aria-hidden=\"true\"></i>&nbsp;{{'settings.translations.title' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form [formGroup]=\"editTranslationForm\" (ngSubmit)=\"onSubmit()\" class=\"bs4-forms\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<!-- <div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && getTranslationControl.language.errors }\">\n\t\t\t\t\t\t<label for=\"language\">{{'settings.translations.create.fields.language' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\" \n\t\t\t\t\t\t\t[items]=\"languages\" \n\t\t\t\t\t\t\t[selectOnTab]=\"true\" \n\t\t\t\t\t\t\tbindLabel=\"name\" \n\t\t\t\t\t\t\tbindValue=\"code\" \n\t\t\t\t\t\t\tlabelForId=\"language\" \n\t\t\t\t\t\t\tplaceholder=\"{{'settings.translations.create.placeholders.placeholder1' | translate}}\"\n\t\t\t\t\t\t\tformControlName=\"language\">\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && getTranslationControl.language.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"getTranslationControl.language.errors.required\">{{'settings.translations.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && getTranslationControl.icon.errors }\">\n\t\t\t\t\t\t<label for=\"icon\">{{'settings.translations.create.fields.icon' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<input type=\"hidden\" formControlName=\"icon\">\n\t\t\t\t\t\t<div class=\"dropzone dz-clickable\" #translateDropzone>\n\t\t\t\t\t\t\t<div class=\"dz-default dz-message\" *ngIf=\"isProfileUploded\">\n\t\t\t\t\t\t\t\t<span><strong></strong></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"dz-preview dz-image-preview\" *ngIf=\"isProfileLoaded && translation.icon\">\n\t\t\t\t\t\t\t\t<div class=\"dz-image\">\n\t\t\t\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/translation/{{translation.icon}}\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<a class=\"btn btn-sm btn-block\" (click)=\"removeDropzoneImage()\">{{'common.remove_file' | translate}}</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && getTranslationControl.icon.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"getTranslationControl.icon.errors.required\">{{'settings.translations.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.update' | translate}}</button>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/translations-settings/translations-settings.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/translations-settings/translations-settings.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pr-0 mb-3 border-bottom\">\n\t<h4 class=\"sub-title mt-2\"><span>{{'settings.translations.title' | translate}}</span></h4>\n\t<!-- <a class=\"btn btn-create mb-0\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'translations_create']\" (click)=\"openTranslationCreateModal()\" placement=\"top\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a> -->\n</div>\n<div class=\"card-content pl-2 pr-2 pb-2 hide_empty_message\">\n\t<div class=\"card-body\">\n\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" id=\"translation_table\" width=\"100%\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>{{'settings.translations.columns.icon' | translate}}</th>\n\t\t\t\t\t\t<th>{{'settings.translations.columns.language' | translate}}</th>\n\t\t\t\t\t\t<th>{{'settings.translations.columns.status' | translate}}</th>\n\t\t\t\t\t\t<th>{{'settings.translations.columns.actions' | translate}}</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody *ngIf=\"translations?.length != 0\">\n\t\t\t\t\t<tr *ngFor=\"let translation of translations; index as i\">\n\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/translation/{{translation.icon}}\" height=\"30\" width=\"30\">\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>{{translation.name}}</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'translations_edit']; else elseBlock1; then thenBlock1\"></ng-container>\n\t\t\t\t\t\t\t<ng-template #elseBlock1>\n\t\t\t\t\t\t\t\t<div class=\"budges-status\">\n\t\t\t\t\t\t\t\t\t<span class=\"completed\" *ngIf=\"translation.status == '1'\">{{'common.status.active' | translate}}</span>\n\t\t\t\t\t\t\t\t\t<span class=\"cancel\" *ngIf=\"translation.status == '0'\">{{'common.status.deactive' | translate}}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t<ng-template #thenBlock1>\n\t\t\t\t\t\t\t\t<ui-switch [checked]=\"translation.status == '1' ? true : false\" (valueChange)=\"setActiveInactiveTranslation($event, translation)\"></ui-switch>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"actions-dropdown\">\n\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n\t\t\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin', 'translations_edit']\" (click)=\"openTranslationEditModal(translation)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\" placement=\"top\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin', 'translations_delete']\" (click)=\"translationDelete(translation.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\" placement=\"top\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t\t<tfoot *ngIf=\"translations?.length == 0\" class=\"tfoot_dt\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td colspan=\"4\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tfoot>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/pages/settings/settings.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/pages/settings/settings.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card pl-2 pr-2\">\n\t\t\t\t<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t\t\t\t\t<h4 class=\"main-title mb-0 mt-0\"><span>{{'settings.title' | translate}}</span></h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-content custom-nav-tabs mt-3\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<tabset [vertical]=\"false\" type=\"pills\" #tabset>\n\t\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'companydetail_view']\">\n\t\t\t\t\t\t\t\t<tab heading=\"{{'settings.company_details.title' | translate}}\" id=\"1\" (selectTab)=\"setSettingTab($event)\">\n\t\t\t\t\t\t\t\t\t<app-company-detail [settings]=\"settings\" [countries]=\"countries\" *ngIf=\"getActiveSettingTab('1') && isSettingsLoad\"></app-company-detail>\n\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'systemsettings_view']\">\n\t\t\t\t\t\t\t\t<tab heading=\"{{'settings.system_settings.title' | translate}}\" id=\"2\" (selectTab)=\"setSettingTab($event)\">\n\t\t\t\t\t\t\t\t\t<app-system-settings [settings]=\"settings\" [loginUser]=\"loginUser\" *ngIf=\"getActiveSettingTab('2')\"></app-system-settings>\n\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'slacksettings_view']\">\n\t\t\t\t\t\t\t\t<tab heading=\"{{'settings.slack_settings.title' | translate}}\" id=\"3\" (selectTab)=\"setSettingTab($event)\">\n\t\t\t\t\t\t\t\t\t<app-slack-settings [loginUser]=\"loginUser\" *ngIf=\"getActiveSettingTab('3')\"></app-slack-settings>\n\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'emailsettings_view']\">\n\t\t\t\t\t\t\t\t<tab heading=\"{{'settings.email_settings.title' | translate}}\" id=\"4\" (selectTab)=\"setSettingTab($event)\">\n\t\t\t\t\t\t\t\t\t<app-email-settings [settings]=\"settings\" *ngIf=\"getActiveSettingTab('4')\"></app-email-settings>\n\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'emailtemplates_view']\">\n\t\t\t\t\t\t\t\t<tab heading=\"{{'settings.email_templates.title' | translate}}\" id=\"5\" (selectTab)=\"setSettingTab($event)\">\n\t\t\t\t\t\t\t\t\t<app-email-templates *ngIf=\"getActiveSettingTab('5')\"></app-email-templates>\n\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'emailnotifications_view']\">\n\t\t\t\t\t\t\t\t<tab heading=\"{{'settings.email_notification.title' | translate}}\" id=\"6\" (selectTab)=\"setSettingTab($event)\">\n\t\t\t\t\t\t\t\t\t<app-email-notifications [settings]=\"settings\" *ngIf=\"getActiveSettingTab('6')\"></app-email-notifications>\n\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'cronjob_view']\">\n\t\t\t\t\t\t\t\t<tab heading=\"{{'settings.cronjob.title' | translate}}\" id=\"7\" (selectTab)=\"setSettingTab($event)\">\n\t\t\t\t\t\t\t\t\t<app-cronjob-settings [settings]=\"settings\" [loginUser]=\"loginUser\" *ngIf=\"getActiveSettingTab('7')\"></app-cronjob-settings>\n\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'menuallocation_view']\">\n\t\t\t\t\t\t\t\t<tab heading=\"{{'settings.menu_allocation.title' | translate}}\" id=\"8\" (selectTab)=\"setSettingTab($event)\">\n\t\t\t\t\t\t\t\t\t<app-menu-allocation *ngIf=\"getActiveSettingTab('8')\"></app-menu-allocation>\n\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'themesettings_view']\">\n\t\t\t\t\t\t\t\t<tab heading=\"{{'settings.theme_settings.title' | translate}}\" id=\"9\" (selectTab)=\"setSettingTab($event)\">\n\t\t\t\t\t\t\t\t\t<app-theme-settings [settings]=\"settings\" *ngIf=\"getActiveSettingTab('9')\"></app-theme-settings>\n\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<!-- <ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'dashboardsettings_view']\">\n\t\t\t\t\t\t\t\t<tab heading=\"{{'settings.dashboard_settings.title' | translate}}\" id=\"10\" (selectTab)=\"setSettingTab($event)\">\n\t\t\t\t\t\t\t\t\t<app-dashboard-settings [settings]=\"settings\" *ngIf=\"getActiveSettingTab('10')\"></app-dashboard-settings>\n\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t</ng-container> -->\n\t\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'backupdatabase_view']\">\n\t\t\t\t\t\t\t\t<tab heading=\"{{'settings.database_backups.title' | translate}}\" id=\"11\" (selectTab)=\"setSettingTab($event)\">\n\t\t\t\t\t\t\t\t\t<app-database-backup *ngIf=\"getActiveSettingTab('11')\"></app-database-backup>\n\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'customfields_view']\">\n\t\t\t\t\t\t\t\t<tab heading=\"{{'settings.custom_fields.title' | translate}}\" id=\"12\" (selectTab)=\"setSettingTab($event)\">\n\t\t\t\t\t\t\t\t\t<app-custom-fields *ngIf=\"getActiveSettingTab('12')\"></app-custom-fields>\n\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'translations_view']\">\n\t\t\t\t\t\t\t\t<tab heading=\"{{'settings.translations.title' | translate}}\" id=\"13\" (selectTab)=\"setSettingTab($event)\">\n\t\t\t\t\t\t\t\t\t<app-translations-settings *ngIf=\"getActiveSettingTab('13')\"></app-translations-settings>\n\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'estimatesettings_view']\">\n\t\t\t\t\t\t\t\t<tab heading=\"{{'settings.estimate_settings.title' | translate}}\" id=\"14\" (selectTab)=\"setSettingTab($event)\">\n\t\t\t\t\t\t\t\t\t<app-estimate-settings *ngIf=\"getActiveSettingTab('14')\"></app-estimate-settings>\n\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'invoicesettings_view']\">\n\t\t\t\t\t\t\t\t<tab heading=\"{{'settings.invoice_settings.title' | translate}}\" id=\"15\" (selectTab)=\"setSettingTab($event)\">\n\t\t\t\t\t\t\t\t\t<app-invoice-settings *ngIf=\"getActiveSettingTab('15')\"></app-invoice-settings>\n\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'paymentgatewaysettings_view']\">\n\t\t\t\t\t\t\t\t<tab heading=\"{{'settings.payment_gateway_settings.title' | translate}}\" id=\"16\" (selectTab)=\"setSettingTab($event)\">\n\t\t\t\t\t\t\t\t\t<app-paypal-gateway *ngIf=\"getActiveSettingTab('16')\"></app-paypal-gateway>\n\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</tabset>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n");

/***/ }),

/***/ "./src/app/core/services/custom-fields.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/custom-fields.service.ts ***!
  \********************************************************/
/*! exports provided: CustomFieldsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFieldsService", function() { return CustomFieldsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var CustomFieldsService = /** @class */ (function () {
    function CustomFieldsService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    CustomFieldsService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/customfields");
    };
    CustomFieldsService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/customfields/" + id);
    };
    CustomFieldsService.prototype.create = function (customField) {
        return this.http.post(this.apiUrl + "/api/customfields", customField);
    };
    CustomFieldsService.prototype.update = function (customField) {
        return this.http.put(this.apiUrl + "/api/customfields/" + customField.id, customField);
    };
    CustomFieldsService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/customfields/" + id);
    };
    CustomFieldsService.prototype.changeStatus = function (customField) {
        return this.http.post(this.apiUrl + "/api/customfields/" + customField.id + "/change-status", { status: customField.status });
    };
    CustomFieldsService.prototype.getFormTables = function () {
        return this.http.get(this.apiUrl + "/api/customfields/form");
    };
    CustomFieldsService.prototype.getCustomFieldByForm = function (formId) {
        return this.http.get(this.apiUrl + "/api/customfields/form/" + formId);
    };
    CustomFieldsService.prototype.getCustomFieldDetailByForm = function (formId, isView) {
        return this.http.get(this.apiUrl + "/api/customfields/form/" + formId + "/1");
    };
    CustomFieldsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CustomFieldsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CustomFieldsService);
    return CustomFieldsService;
}());



/***/ }),

/***/ "./src/app/core/services/database-backup.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/database-backup.service.ts ***!
  \**********************************************************/
/*! exports provided: DatabaseBackupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseBackupService", function() { return DatabaseBackupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var DatabaseBackupService = /** @class */ (function () {
    function DatabaseBackupService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    DatabaseBackupService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/database-backups");
    };
    DatabaseBackupService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/database-backups/" + id);
    };
    DatabaseBackupService.prototype.create = function (backupDatabase) {
        return this.http.post(this.apiUrl + "/api/database-backups", backupDatabase);
    };
    DatabaseBackupService.prototype.update = function (backupDatabase) {
        return this.http.put(this.apiUrl + "/api/database-backups/" + backupDatabase.id, backupDatabase);
    };
    DatabaseBackupService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/database-backups/" + id);
    };
    DatabaseBackupService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DatabaseBackupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DatabaseBackupService);
    return DatabaseBackupService;
}());



/***/ }),

/***/ "./src/app/core/services/email-template.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/email-template.service.ts ***!
  \*********************************************************/
/*! exports provided: EmailTemplateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateService", function() { return EmailTemplateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var EmailTemplateService = /** @class */ (function () {
    function EmailTemplateService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    EmailTemplateService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/email-templates");
    };
    EmailTemplateService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/email-templates/" + id);
    };
    EmailTemplateService.prototype.create = function (emailTemplate) {
        return this.http.post(this.apiUrl + "/api/email-templates", emailTemplate);
    };
    EmailTemplateService.prototype.update = function (emailTemplate) {
        return this.http.put(this.apiUrl + "/api/email-templates/" + emailTemplate.id, emailTemplate);
    };
    EmailTemplateService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/email-templates/" + id);
    };
    EmailTemplateService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EmailTemplateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmailTemplateService);
    return EmailTemplateService;
}());



/***/ }),

/***/ "./src/app/core/services/invoice-setting.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/invoice-setting.service.ts ***!
  \**********************************************************/
/*! exports provided: InvoiceSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceSettingService", function() { return InvoiceSettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var InvoiceSettingService = /** @class */ (function () {
    function InvoiceSettingService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    InvoiceSettingService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/invoice-setting");
    };
    InvoiceSettingService.prototype.create = function (params) {
        return this.http.post(this.apiUrl + "/api/invoice-setting", params);
    };
    InvoiceSettingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    InvoiceSettingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InvoiceSettingService);
    return InvoiceSettingService;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/company-detail/company-detail.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/settings/components/company-detail/company-detail.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9jb21wYW55LWRldGFpbC9jb21wYW55LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/settings/components/company-detail/company-detail.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/settings/components/company-detail/company-detail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CompanyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailComponent", function() { return CompanyDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/setting.service */ "./src/app/core/services/setting.service.ts");






var CompanyDetailComponent = /** @class */ (function () {
    function CompanyDetailComponent(translate, formBuilder, toastr, settingService) {
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.settingService = settingService;
        this.isFormSubmitted = false;
    }
    CompanyDetailComponent.prototype.ngOnInit = function () {
        this.loadForm();
    };
    CompanyDetailComponent.prototype.loadForm = function () {
        this.settingsForm = this.formBuilder.group({
            form_for: ['company_detail'],
            company_name: [this.settings.company_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            company_legal_name: [this.settings.company_legal_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            company_short_name: [this.settings.company_short_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
            company_address: [this.settings.company_address, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            company_country: [this.settings.company_country],
            company_city: [this.settings.company_city],
            company_zipcode: [this.settings.company_zipcode],
            company_email: [this.settings.company_email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            company_website: [this.settings.company_website, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/)],
            company_phone: [this.settings.company_phone, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
            contact_person: [this.settings.contact_person],
        });
    };
    Object.defineProperty(CompanyDetailComponent.prototype, "companyDetail", {
        get: function () { return this.settingsForm.controls; },
        enumerable: true,
        configurable: true
    });
    CompanyDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.settingsForm.invalid) {
            return;
        }
        this.settingService.create(this.settingsForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.messages.update'), _this.translate.instant('settings.title'));
        });
    };
    CompanyDetailComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CompanyDetailComponent.prototype, "settings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CompanyDetailComponent.prototype, "countries", void 0);
    CompanyDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/company-detail/company-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-detail.component.scss */ "./src/app/modules/settings/components/company-detail/company-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"]])
    ], CompanyDetailComponent);
    return CompanyDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/cronjob-settings/cronjob-settings.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/settings/components/cronjob-settings/cronjob-settings.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9jcm9uam9iLXNldHRpbmdzL2Nyb25qb2Itc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/settings/components/cronjob-settings/cronjob-settings.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/settings/components/cronjob-settings/cronjob-settings.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CronjobSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CronjobSettingsComponent", function() { return CronjobSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/setting.service */ "./src/app/core/services/setting.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");






var CronjobSettingsComponent = /** @class */ (function () {
    function CronjobSettingsComponent(translate, toastr, settingService) {
        this.translate = translate;
        this.toastr = toastr;
        this.settingService = settingService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
    }
    CronjobSettingsComponent.prototype.ngOnInit = function () { };
    CronjobSettingsComponent.prototype.saveCronjobSettings = function () {
        var _this = this;
        this.settingService.create(this.settings)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.messages.update'), _this.translate.instant('settings.title'));
        });
    };
    CronjobSettingsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _core_services_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CronjobSettingsComponent.prototype, "settings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CronjobSettingsComponent.prototype, "loginUser", void 0);
    CronjobSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cronjob-settings',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cronjob-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/cronjob-settings/cronjob-settings.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cronjob-settings.component.scss */ "./src/app/modules/settings/components/cronjob-settings/cronjob-settings.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"]])
    ], CronjobSettingsComponent);
    return CronjobSettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/custom-field-create/custom-field-create.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/settings/components/custom-field-create/custom-field-create.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9jdXN0b20tZmllbGQtY3JlYXRlL2N1c3RvbS1maWVsZC1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/settings/components/custom-field-create/custom-field-create.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/settings/components/custom-field-create/custom-field-create.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CustomFieldCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFieldCreateComponent", function() { return CustomFieldCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/custom-fields.service */ "./src/app/core/services/custom-fields.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");









var CustomFieldCreateComponent = /** @class */ (function () {
    function CustomFieldCreateComponent(translate, bsModalRef, formBuilder, toastr, customFieldsService, helperService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.customFieldsService = customFieldsService;
        this.helperService = helperService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
    }
    CustomFieldCreateComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
        this.getAllFormFields();
    };
    CustomFieldCreateComponent.prototype.loadForms = function () {
        this.createCustomFieldForm = this.formBuilder.group({
            form_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            field_label: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            help_text: [null],
            is_required: [false],
            // show_on_details: [true],
            field_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            default_value: [null],
            select_options: this.formBuilder.array([]),
            status: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    Object.defineProperty(CustomFieldCreateComponent.prototype, "customFieldControl", {
        get: function () { return this.createCustomFieldForm.controls; },
        enumerable: true,
        configurable: true
    });
    CustomFieldCreateComponent.prototype.addOption = function () {
        var control = this.createCustomFieldForm.controls.select_options;
        control.push(this.formBuilder.group({
            value: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            label: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
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
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // this.onCancel();
        // return;
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
    CustomFieldCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_7__["CustomFieldsService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] }
    ]; };
    CustomFieldCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custom-field-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-field-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/custom-field-create/custom-field-create.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-field-create.component.scss */ "./src/app/modules/settings/components/custom-field-create/custom-field-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_7__["CustomFieldsService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"]])
    ], CustomFieldCreateComponent);
    return CustomFieldCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/custom-field-edit/custom-field-edit.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/settings/components/custom-field-edit/custom-field-edit.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9jdXN0b20tZmllbGQtZWRpdC9jdXN0b20tZmllbGQtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/settings/components/custom-field-edit/custom-field-edit.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/settings/components/custom-field-edit/custom-field-edit.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CustomFieldEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFieldEditComponent", function() { return CustomFieldEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/custom-fields.service */ "./src/app/core/services/custom-fields.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");









var CustomFieldEditComponent = /** @class */ (function () {
    function CustomFieldEditComponent(translate, bsModalRef, formBuilder, toastr, customFieldsService, helperService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.customFieldsService = customFieldsService;
        this.helperService = helperService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
    }
    CustomFieldEditComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
        this.getAllFormFields();
    };
    CustomFieldEditComponent.prototype.loadForms = function () {
        this.editCustomFieldForm = this.formBuilder.group({
            id: [this.customField.id],
            form_id: [this.customField.form_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            field_label: [this.customField.field_label, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            help_text: [this.customField.help_text],
            is_required: [this.customField.is_required],
            // show_on_details: [this.customField.show_on_details],
            field_type: [this.customField.field_type],
            default_value: [null],
            select_options: this.formBuilder.array([]),
            status: [this.customField.status, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
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
        enumerable: true,
        configurable: true
    });
    CustomFieldEditComponent.prototype.addDynamicOptions = function (options) {
        var that = this;
        options = JSON.parse(options);
        options.forEach(function (element) {
            var control = that.editCustomFieldForm.controls.select_options;
            control.push(that.formBuilder.group({
                value: [element.value, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                label: [element.label, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            }));
        });
    };
    CustomFieldEditComponent.prototype.addOption = function () {
        var control = this.editCustomFieldForm.controls.select_options;
        control.push(this.formBuilder.group({
            value: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            label: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
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
    CustomFieldEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_7__["CustomFieldsService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] }
    ]; };
    CustomFieldEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custom-field-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-field-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/custom-field-edit/custom-field-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-field-edit.component.scss */ "./src/app/modules/settings/components/custom-field-edit/custom-field-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_7__["CustomFieldsService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"]])
    ], CustomFieldEditComponent);
    return CustomFieldEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/custom-fields/custom-fields.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/settings/components/custom-fields/custom-fields.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL2N1c3RvbS1maWVsZHMvY3VzdG9tLWZpZWxkcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL2N1c3RvbS1maWVsZHMvY3VzdG9tLWZpZWxkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9jdXN0b20tZmllbGRzL2N1c3RvbS1maWVsZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm9kZCB7XG4gICAgZGlzcGxheTogbm9uZVxufSIsIjo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/settings/components/custom-fields/custom-fields.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/settings/components/custom-fields/custom-fields.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CustomFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFieldsComponent", function() { return CustomFieldsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/services/custom-fields.service */ "./src/app/core/services/custom-fields.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _custom_field_create_custom_field_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../custom-field-create/custom-field-create.component */ "./src/app/modules/settings/components/custom-field-create/custom-field-create.component.ts");
/* harmony import */ var _custom_field_edit_custom_field_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../custom-field-edit/custom-field-edit.component */ "./src/app/modules/settings/components/custom-field-edit/custom-field-edit.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__);


















var CustomFieldsComponent = /** @class */ (function () {
    function CustomFieldsComponent(translate, modalService, http, exportAsService, toastr, authenticationService, customFieldsService, helperService) {
        var _this = this;
        this.translate = translate;
        this.modalService = modalService;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.customFieldsService = customFieldsService;
        this.helperService = helperService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.dtOptions = {};
        this.customFields = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'custom_field_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    CustomFieldsComponent.prototype.ngOnInit = function () {
        this.getAllFormFields();
        this.loadCustomFieldDatatable();
    };
    CustomFieldsComponent.prototype.loadCustomFieldDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            columns: [{
                    'sortable': true,
                    'width': "2%",
                    'target': [0]
                }, {
                    'sortable': true,
                    'target': [1]
                }, {
                    'sortable': true,
                    'target': [2]
                }, {
                    'sortable': false,
                    'target': [3]
                }, {
                    'sortable': false,
                    'target': [4]
                }, {
                    'sortable': false,
                    'width': "5%",
                    'target': [5]
                }],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('settings.custom_fields.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('settings.custom_fields.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('settings.custom_fields.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }],
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
                _this.http
                    .post(_this.apiUrl + '/api/all-customfields', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.customFields = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    CustomFieldsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, 'customField').subscribe(function () { });
    };
    CustomFieldsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    CustomFieldsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    CustomFieldsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.customFields.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    CustomFieldsComponent.prototype.getAllFormFields = function () {
        var _this = this;
        this.customFieldsService.getFormTables()
            .subscribe(function (data) {
            _this.formTables = data;
            var keyValue = [];
            for (var iRow = 0; iRow < _this.formTables.length; iRow++) {
                keyValue[_this.formTables[iRow].id] = _this.formTables[iRow].name;
            }
            _this.formTables = keyValue;
        });
    };
    CustomFieldsComponent.prototype.changeStatus = function (event, id) {
        var _this = this;
        this.customFieldsService.changeStatus({ id: id, status: event })
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.custom_fields.messages.status'), _this.translate.instant('settings.custom_fields.title'));
            _this.rerender();
        });
    };
    CustomFieldsComponent.prototype.openCustomFieldCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_custom_field_create_custom_field_create_component__WEBPACK_IMPORTED_MODULE_13__["CustomFieldCreateComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    CustomFieldsComponent.prototype.openCustomFieldEditModal = function (CustomField) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered animated fadeIn",
            initialState: {
                customField: CustomField
            }
        };
        this.modalRef = this.modalService.show(_custom_field_edit_custom_field_edit_component__WEBPACK_IMPORTED_MODULE_14__["CustomFieldEditComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    CustomFieldsComponent.prototype.removeCustomField = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('settings.custom_fields.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                // --
                // this.toastr.error(this.translate.instant('common.not_allowed'));
                // return;
                _this.customFieldsService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('settings.custom_fields.messages.delete'), _this.translate.instant('settings.custom_fields.title'));
                    _this.rerender();
                });
            }
        });
    };
    CustomFieldsComponent.prototype.saveCustomFieldDetail = function (index, name, value) {
        var _this = this;
        this.customFields[index][name] = value;
        this.customFieldsService.update(this.customFields[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.custom_fields.messages.update'), _this.translate.instant('settings.custom_fields.title'));
            _this.rerender();
        });
    };
    CustomFieldsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] },
        { type: _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_10__["CustomFieldsService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"])
    ], CustomFieldsComponent.prototype, "dtElement", void 0);
    CustomFieldsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custom-fields',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-fields.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/custom-fields/custom-fields.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-fields.component.scss */ "./src/app/modules/settings/components/custom-fields/custom-fields.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
            _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_10__["CustomFieldsService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"]])
    ], CustomFieldsComponent);
    return CustomFieldsComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/dashboard-settings/dashboard-settings.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/settings/components/dashboard-settings/dashboard-settings.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9kYXNoYm9hcmQtc2V0dGluZ3MvZGFzaGJvYXJkLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/settings/components/dashboard-settings/dashboard-settings.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/settings/components/dashboard-settings/dashboard-settings.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DashboardSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSettingsComponent", function() { return DashboardSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/setting.service */ "./src/app/core/services/setting.service.ts");





var DashboardSettingsComponent = /** @class */ (function () {
    function DashboardSettingsComponent(translate, toastr, settingService) {
        this.translate = translate;
        this.toastr = toastr;
        this.settingService = settingService;
    }
    DashboardSettingsComponent.prototype.ngOnInit = function () { };
    DashboardSettingsComponent.prototype.saveDashboardSettings = function () {
        var _this = this;
        this.settingService.create(this.settings)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.messages.update'), _this.translate.instant('settings.title'));
        });
    };
    DashboardSettingsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _core_services_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardSettingsComponent.prototype, "settings", void 0);
    DashboardSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-settings',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/dashboard-settings/dashboard-settings.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard-settings.component.scss */ "./src/app/modules/settings/components/dashboard-settings/dashboard-settings.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"]])
    ], DashboardSettingsComponent);
    return DashboardSettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/database-backup/database-backup.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/settings/components/database-backup/database-backup.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL2RhdGFiYXNlLWJhY2t1cC9kYXRhYmFzZS1iYWNrdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9kYXRhYmFzZS1iYWNrdXAvZGF0YWJhc2UtYmFja3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL2RhdGFiYXNlLWJhY2t1cC9kYXRhYmFzZS1iYWNrdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm9kZCB7XG4gICAgZGlzcGxheTogbm9uZVxufSIsIjo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/settings/components/database-backup/database-backup.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/settings/components/database-backup/database-backup.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DatabaseBackupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseBackupComponent", function() { return DatabaseBackupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_services_database_backup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/database-backup.service */ "./src/app/core/services/database-backup.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");








var DatabaseBackupComponent = /** @class */ (function () {
    function DatabaseBackupComponent(translate, toastr, databaseBackupService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.toastr = toastr;
        this.databaseBackupService = databaseBackupService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
        this.databases = [];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    DatabaseBackupComponent.prototype.ngOnInit = function () {
        this.getDatabaseBackups();
    };
    DatabaseBackupComponent.prototype.getDatabaseBackups = function () {
        var _this = this;
        this.databaseBackupService.getAll()
            .subscribe(function (data) {
            _this.databases = data;
            setTimeout(function () {
                if (_this.databases.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    DatabaseBackupComponent.prototype.backupDatabase = function () {
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // return;
        var _this = this;
        this.databaseBackupService.create({})
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.database_backups.messages.create'), _this.translate.instant('settings.database_backups.title'));
            _this.getDatabaseBackups();
        });
    };
    DatabaseBackupComponent.prototype.restoreDatabase = function (database) {
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // return;
        var _this = this;
        this.databaseBackupService.update(database)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.database_backups.messages.restore'), _this.translate.instant('settings.database_backups.title'));
        });
    };
    DatabaseBackupComponent.prototype.deleteDatatabase = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('settings.database_backups.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.databaseBackupService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('settings.database_backups.messages.delete'), _this.translate.instant('settings.database_backups.title'));
                    _this.getDatabaseBackups();
                });
            }
        });
    };
    DatabaseBackupComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _core_services_database_backup_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseBackupService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
    ]; };
    DatabaseBackupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-database-backup',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./database-backup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/database-backup/database-backup.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./database-backup.component.scss */ "./src/app/modules/settings/components/database-backup/database-backup.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_services_database_backup_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseBackupService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], DatabaseBackupComponent);
    return DatabaseBackupComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/email-notifications/email-notifications.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/settings/components/email-notifications/email-notifications.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9lbWFpbC1ub3RpZmljYXRpb25zL2VtYWlsLW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/settings/components/email-notifications/email-notifications.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/settings/components/email-notifications/email-notifications.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: EmailNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailNotificationsComponent", function() { return EmailNotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/setting.service */ "./src/app/core/services/setting.service.ts");





var EmailNotificationsComponent = /** @class */ (function () {
    function EmailNotificationsComponent(translate, toastr, settingService) {
        this.translate = translate;
        this.toastr = toastr;
        this.settingService = settingService;
    }
    EmailNotificationsComponent.prototype.ngOnInit = function () { };
    EmailNotificationsComponent.prototype.saveNotification = function () {
        var _this = this;
        this.settingService.create(this.settings)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.messages.update'), _this.translate.instant('settings.title'));
        });
    };
    EmailNotificationsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _core_services_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmailNotificationsComponent.prototype, "settings", void 0);
    EmailNotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-notifications',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./email-notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/email-notifications/email-notifications.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./email-notifications.component.scss */ "./src/app/modules/settings/components/email-notifications/email-notifications.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"]])
    ], EmailNotificationsComponent);
    return EmailNotificationsComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/email-settings/email-settings.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/settings/components/email-settings/email-settings.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9lbWFpbC1zZXR0aW5ncy9lbWFpbC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/settings/components/email-settings/email-settings.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/settings/components/email-settings/email-settings.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EmailSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSettingsComponent", function() { return EmailSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/setting.service */ "./src/app/core/services/setting.service.ts");






var EmailSettingsComponent = /** @class */ (function () {
    function EmailSettingsComponent(translate, formBuilder, toastr, settingService) {
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.settingService = settingService;
        this.isSubmitted = false;
        this.smtpHosts = [
            { value: 'smtp', label: 'SMTP' },
        ];
        this.mailEncryption = [
            { value: 'ssl', label: 'SSL' },
            { value: 'tls', label: 'TLS' },
        ];
    }
    EmailSettingsComponent.prototype.ngOnInit = function () {
        this.settingsForm = this.formBuilder.group({
            form_for: ['email_setting'],
            company_from_email: [this.settings.company_from_email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            post_mark: [this.settings.post_mark],
            smtp_protocol: [this.settings.smtp_protocol, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            smtp_host: [this.settings.smtp_host, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            smtp_user: [this.settings.smtp_user, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            smtp_password: [null],
            smtp_port: [this.settings.smtp_port, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            smtp_encryption: [this.settings.smtp_encryption],
            mail_from_name: [this.settings.mail_from_name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sparkpost_secret: [this.settings.sparkpost_secret],
            mailgun_domain: [this.settings.mailgun_domain],
            mailgun_secret: [this.settings.mailgun_secret],
            mandrill_secret: [this.settings.mandrill_secret]
        });
    };
    Object.defineProperty(EmailSettingsComponent.prototype, "emailSettings", {
        get: function () { return this.settingsForm.controls; },
        enumerable: true,
        configurable: true
    });
    EmailSettingsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.settingsForm.invalid) {
            return;
        }
        this.settingService.create(this.settingsForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.messages.update'), _this.translate.instant('settings.title'));
        });
    };
    EmailSettingsComponent.prototype.sendTestEmail = function () {
        var _this = this;
        this.settingService.sendTestEmail().subscribe(function (data) {
            _this.res = data;
            if (_this.res.status) {
                _this.toastr.success(_this.translate.instant('settings.email_settings.title1') + _this.res.email, _this.translate.instant('settings.title'));
            }
            else {
                _this.toastr.error(_this.res.msg);
            }
        }, function (error) { });
    };
    EmailSettingsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmailSettingsComponent.prototype, "settings", void 0);
    EmailSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-settings',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./email-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/email-settings/email-settings.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./email-settings.component.scss */ "./src/app/modules/settings/components/email-settings/email-settings.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"]])
    ], EmailSettingsComponent);
    return EmailSettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/email-templates/email-templates.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/settings/components/email-templates/email-templates.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9lbWFpbC10ZW1wbGF0ZXMvZW1haWwtdGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/settings/components/email-templates/email-templates.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/settings/components/email-templates/email-templates.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EmailTemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplatesComponent", function() { return EmailTemplatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_email_template_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/email-template.service */ "./src/app/core/services/email-template.service.ts");





var EmailTemplatesComponent = /** @class */ (function () {
    function EmailTemplatesComponent(translate, emailTemplateService, toastr) {
        this.translate = translate;
        this.emailTemplateService = emailTemplateService;
        this.toastr = toastr;
        this.emailGroupTemplates = [];
        this.email_group_id = 1;
    }
    EmailTemplatesComponent.prototype.ngOnInit = function () {
        this.getEmailTemplates();
    };
    EmailTemplatesComponent.prototype.getEmailTemplates = function () {
        var _this = this;
        this.emailTemplateService.getAll()
            .subscribe(function (data) {
            _this.emailGroups = data;
            _this.loadEmailTemplates();
        });
    };
    EmailTemplatesComponent.prototype.loadEmailTemplates = function () {
        for (var iRow in this.emailGroups) {
            this.emailGroupTemplates[this.emailGroups[iRow].id] = this.emailGroups[iRow].templates;
        }
    };
    EmailTemplatesComponent.prototype.saveEmailtemplate = function (emailTemplate) {
        var _this = this;
        this.emailTemplateService.update(emailTemplate)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.email_templates.messages.update'), _this.translate.instant('settings.email_templates.title'));
        });
    };
    EmailTemplatesComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _core_services_email_template_service__WEBPACK_IMPORTED_MODULE_4__["EmailTemplateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    EmailTemplatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-templates',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./email-templates.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/email-templates/email-templates.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./email-templates.component.scss */ "./src/app/modules/settings/components/email-templates/email-templates.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _core_services_email_template_service__WEBPACK_IMPORTED_MODULE_4__["EmailTemplateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], EmailTemplatesComponent);
    return EmailTemplatesComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/estimate-settings/estimate-settings.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/settings/components/estimate-settings/estimate-settings.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9lc3RpbWF0ZS1zZXR0aW5ncy9lc3RpbWF0ZS1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/settings/components/estimate-settings/estimate-settings.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/settings/components/estimate-settings/estimate-settings.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EstimateSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimateSettingsComponent", function() { return EstimateSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_estimate_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/estimate-setting.service */ "./src/app/core/services/estimate-setting.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_7__);








var EstimateSettingsComponent = /** @class */ (function () {
    function EstimateSettingsComponent(formBuilder, estimateSettingService, toastr, translate) {
        this.formBuilder = formBuilder;
        this.estimateSettingService = estimateSettingService;
        this.toastr = toastr;
        this.translate = translate;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.isFormSubmitted = false;
        this.isFormLoaded = false;
        this.isLogoLoaded = true;
    }
    EstimateSettingsComponent.prototype.ngOnInit = function () {
        this.getEstimateSetting();
    };
    EstimateSettingsComponent.prototype.getEstimateSetting = function () {
        var _this_1 = this;
        this.estimateSettingService.getAll().subscribe(function (data) {
            _this_1.setting = data;
            _this_1.loadForm();
            setTimeout(function () {
                _this_1.loadDropzone();
            });
        });
    };
    EstimateSettingsComponent.prototype.loadForm = function () {
        this.estimateSettingsForm = this.formBuilder.group({
            estimate_prefix: [this.setting.estimate_prefix, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
            due_after: [this.setting.due_after, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            client_note: [this.setting.client_note],
            terms_conditions: [this.setting.terms_conditions],
            auto_remind: [this.setting.auto_remind],
            auto_remind_before: [this.setting.auto_remind_before],
            estimate_logo: [this.setting.estimate_logo]
        });
        this.isFormLoaded = true;
    };
    EstimateSettingsComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_7__(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var _this_1 = this;
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_7__["createElement"]("<button class=\'btn btn-sm btn-block\'>" + that.translate.instant('common.remove_file') + "</button>");
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        reader_1.onload = function (e) {
                            that.estimateSettingsForm.patchValue({ estimate_logo: reader_1.result });
                            _this_1.isLogoLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.estimateSettingsForm.patchValue({ estimate_logo: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    EstimateSettingsComponent.prototype.removeDropzoneImage = function () {
        this.isLogoLoaded = false;
        this.setting.estimate_logo = null;
        this.estimateSettingsForm.patchValue({ estimate_logo: null });
    };
    Object.defineProperty(EstimateSettingsComponent.prototype, "estimateSetting", {
        get: function () { return this.estimateSettingsForm.controls; },
        enumerable: true,
        configurable: true
    });
    EstimateSettingsComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.estimateSettingsForm.invalid) {
            return;
        }
        this.estimateSettingService.create(this.estimateSettingsForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('settings.messages.update'), _this_1.translate.instant('settings.title'));
        });
    };
    EstimateSettingsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_estimate_setting_service__WEBPACK_IMPORTED_MODULE_5__["EstimateSettingService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logodropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EstimateSettingsComponent.prototype, "logodropzone", void 0);
    EstimateSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-estimate-settings',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./estimate-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/estimate-settings/estimate-settings.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./estimate-settings.component.scss */ "./src/app/modules/settings/components/estimate-settings/estimate-settings.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_estimate_setting_service__WEBPACK_IMPORTED_MODULE_5__["EstimateSettingService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], EstimateSettingsComponent);
    return EstimateSettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/invoice-settings/invoice-settings.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/settings/components/invoice-settings/invoice-settings.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9pbnZvaWNlLXNldHRpbmdzL2ludm9pY2Utc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/settings/components/invoice-settings/invoice-settings.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/settings/components/invoice-settings/invoice-settings.component.ts ***!
  \********************************************************************************************/
/*! exports provided: InvoiceSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceSettingsComponent", function() { return InvoiceSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_invoice_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/invoice-setting.service */ "./src/app/core/services/invoice-setting.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_7__);








var InvoiceSettingsComponent = /** @class */ (function () {
    function InvoiceSettingsComponent(formBuilder, invocieSettingService, toastr, translate) {
        this.formBuilder = formBuilder;
        this.invocieSettingService = invocieSettingService;
        this.toastr = toastr;
        this.translate = translate;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.isFormSubmitted = false;
        this.isFormLoaded = false;
        this.isLogoLoaded = true;
    }
    InvoiceSettingsComponent.prototype.ngOnInit = function () {
        this.getInvoiceSetting();
    };
    InvoiceSettingsComponent.prototype.getInvoiceSetting = function () {
        var _this_1 = this;
        this.invocieSettingService.getAll().subscribe(function (data) {
            _this_1.setting = data;
            _this_1.loadForm();
            setTimeout(function () {
                _this_1.loadDropzone();
            });
        });
    };
    InvoiceSettingsComponent.prototype.loadForm = function () {
        this.invoiceSettingsForm = this.formBuilder.group({
            invoice_prefix: [this.setting.invoice_prefix, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
            due_after: [this.setting.due_after, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            client_note: [this.setting.client_note],
            terms_conditions: [this.setting.terms_conditions],
            auto_remind: [this.setting.auto_remind],
            auto_remind_after: [this.setting.auto_remind_after],
            invoice_logo: [this.setting.invoice_logo],
            gst_number: [this.setting.gst_number],
            show_gst_number: [this.setting.show_gst_number]
        });
        this.isFormLoaded = true;
    };
    InvoiceSettingsComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_7__(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var _this_1 = this;
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_7__["createElement"]("<button class=\'btn btn-sm btn-block\'>" + that.translate.instant('common.remove_file') + "</button>");
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        reader_1.onload = function (e) {
                            that.invoiceSettingsForm.patchValue({ invoice_logo: reader_1.result });
                            _this_1.isLogoLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.invoiceSettingsForm.patchValue({ invoice_logo: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    InvoiceSettingsComponent.prototype.removeDropzoneImage = function () {
        this.isLogoLoaded = false;
        this.setting.invoice_logo = null;
        this.invoiceSettingsForm.patchValue({ invoice_logo: null });
    };
    Object.defineProperty(InvoiceSettingsComponent.prototype, "invoiceSetting", {
        get: function () { return this.invoiceSettingsForm.controls; },
        enumerable: true,
        configurable: true
    });
    InvoiceSettingsComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.invoiceSettingsForm.invalid) {
            return;
        }
        this.invocieSettingService.create(this.invoiceSettingsForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('settings.messages.update'), _this_1.translate.instant('settings.title'));
        });
    };
    InvoiceSettingsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_invoice_setting_service__WEBPACK_IMPORTED_MODULE_5__["InvoiceSettingService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logodropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InvoiceSettingsComponent.prototype, "logodropzone", void 0);
    InvoiceSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-settings',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invoice-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/invoice-settings/invoice-settings.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invoice-settings.component.scss */ "./src/app/modules/settings/components/invoice-settings/invoice-settings.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_invoice_setting_service__WEBPACK_IMPORTED_MODULE_5__["InvoiceSettingService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], InvoiceSettingsComponent);
    return InvoiceSettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/menu-allocation/menu-allocation.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/settings/components/menu-allocation/menu-allocation.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9tZW51LWFsbG9jYXRpb24vbWVudS1hbGxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/settings/components/menu-allocation/menu-allocation.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/settings/components/menu-allocation/menu-allocation.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MenuAllocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAllocationComponent", function() { return MenuAllocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/menu.service */ "./src/app/core/services/menu.service.ts");





var MenuAllocationComponent = /** @class */ (function () {
    function MenuAllocationComponent(translate, menuService, toastr) {
        this.translate = translate;
        this.menuService = menuService;
        this.toastr = toastr;
        this.activeInactiveMenu = {
            active_menu: {},
            inactive_menu: {}
        };
    }
    MenuAllocationComponent.prototype.ngOnInit = function () {
        this.getMenus();
    };
    MenuAllocationComponent.prototype.getMenus = function () {
        var _this = this;
        this.menuService.getAll()
            .subscribe(function (data) {
            _this.activeInactiveMenu = data;
            _this.loadMenu();
        });
    };
    MenuAllocationComponent.prototype.updateOutput = function (e) {
        var list = e.length ? e : $(e.target), output = list.data('output');
        output.val(JSON.stringify(list.nestable('serialize')));
    };
    MenuAllocationComponent.prototype.expandAll = function () {
        $('.dd').nestable('expandAll');
    };
    MenuAllocationComponent.prototype.collapseAll = function () {
        $('.dd').nestable('collapseAll');
    };
    MenuAllocationComponent.prototype.loadMenu = function () {
        var _this = this;
        setTimeout(function () {
            var activeMenu = $('#nestable').nestable({
                group: 2,
                maxDepth: 2
            }).on('change', _this.updateOutput);
            // --
            // Activate nestable for list 1
            var inActiveMenu = $('#nestable2').nestable({
                group: 2,
                maxDepth: 2
            }).on('change', _this.updateOutput);
            _this.updateOutput(activeMenu.data('output', $('#nestable-output')));
            _this.updateOutput(inActiveMenu.data('output', $('#nestable2-output')));
        }, 200);
    };
    MenuAllocationComponent.prototype.saveMenu = function () {
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // return;
        var _this = this;
        var menus = {
            'all_active_menu': $('#nestable-output').val(),
            'all_inactive_menu': $('#nestable2-output').val()
        };
        this.menuService.create(menus)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.menu_allocation.messages.update'), _this.translate.instant('settings.menu_allocation.title'));
        });
    };
    MenuAllocationComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _core_services_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    MenuAllocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-allocation',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-allocation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/menu-allocation/menu-allocation.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-allocation.component.scss */ "./src/app/modules/settings/components/menu-allocation/menu-allocation.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _core_services_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], MenuAllocationComponent);
    return MenuAllocationComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/paypal-gateway/paypal-gateway.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/settings/components/paypal-gateway/paypal-gateway.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9wYXlwYWwtZ2F0ZXdheS9wYXlwYWwtZ2F0ZXdheS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/settings/components/paypal-gateway/paypal-gateway.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/settings/components/paypal-gateway/paypal-gateway.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PaypalGatewayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalGatewayComponent", function() { return PaypalGatewayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/setting.service */ "./src/app/core/services/setting.service.ts");






var PaypalGatewayComponent = /** @class */ (function () {
    function PaypalGatewayComponent(translate, formBuilder, toastr, settingService) {
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.settingService = settingService;
        this.isFormSubmitted = false;
        this.isFormLoad = false;
    }
    PaypalGatewayComponent.prototype.ngOnInit = function () {
        this.getPaymentGatewaySettings();
    };
    PaypalGatewayComponent.prototype.getPaymentGatewaySettings = function () {
        var _this = this;
        this.settingService.getPaymentGatewaySettings()
            .subscribe(function (data) {
            _this.gatewaySettings = data;
            _this.loadForm();
        });
    };
    PaypalGatewayComponent.prototype.loadForm = function () {
        this.settingsForm = this.formBuilder.group({
            form_for: ['paymentgateway_setting'],
            paypal_checkout_label: [this.gatewaySettings.paypal_checkout_label],
            paypal_checkout_client_id: [this.gatewaySettings.paypal_checkout_client_id],
            paypal_checkout_status: [this.gatewaySettings.paypal_checkout_status],
            stripe_label: [this.gatewaySettings.stripe_label],
            stripe_api_key: [this.gatewaySettings.stripe_api_key],
            stripe_secret_key: [this.gatewaySettings.stripe_secret_key],
            stripe_status: [this.gatewaySettings.stripe_status]
        });
        this.isFormLoad = true;
    };
    Object.defineProperty(PaypalGatewayComponent.prototype, "paypalSetting", {
        get: function () { return this.settingsForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaypalGatewayComponent.prototype, "stripeSetting", {
        get: function () { return this.settingsForm.controls; },
        enumerable: true,
        configurable: true
    });
    PaypalGatewayComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.settingsForm.invalid) {
            return;
        }
        if (this.settingsForm.value.paypal_checkout_label) {
            this.settingsForm.value.paypal_checkout_label = this.settingsForm.value.paypal_checkout_label.toLowerCase();
        }
        this.settingService.createPaymentGatewaySettings(this.settingsForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.messages.update'), _this.translate.instant('settings.title'));
        });
    };
    PaypalGatewayComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaypalGatewayComponent.prototype, "loginUser", void 0);
    PaypalGatewayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paypal-gateway',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paypal-gateway.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/paypal-gateway/paypal-gateway.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paypal-gateway.component.scss */ "./src/app/modules/settings/components/paypal-gateway/paypal-gateway.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"]])
    ], PaypalGatewayComponent);
    return PaypalGatewayComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/slack-settings/slack-settings.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/settings/components/slack-settings/slack-settings.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9zbGFjay1zZXR0aW5ncy9zbGFjay1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/settings/components/slack-settings/slack-settings.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/settings/components/slack-settings/slack-settings.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SlackSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlackSettingsComponent", function() { return SlackSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/setting.service */ "./src/app/core/services/setting.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");







var SlackSettingsComponent = /** @class */ (function () {
    function SlackSettingsComponent(translate, formBuilder, toastr, settingService) {
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.settingService = settingService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.isFormSubmitted = false;
        this.isFormLoad = false;
    }
    SlackSettingsComponent.prototype.ngOnInit = function () {
        this.getSlackSetting();
    };
    SlackSettingsComponent.prototype.getSlackSetting = function () {
        var _this = this;
        this.settingService.getSlackSettings()
            .subscribe(function (data) {
            _this.slackSettings = data;
            _this.loadForm();
        });
    };
    SlackSettingsComponent.prototype.loadForm = function () {
        this.slackSettingsForm = this.formBuilder.group({
            slack_client_id: [this.slackSettings.slack_client_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            slack_client_secret: [this.slackSettings.slack_client_secret, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            slack_redirect_URL: [this.slackSettings.slack_redirect_URL, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            slack_status: [this.slackSettings.slack_status]
        });
        this.isFormLoad = true;
    };
    Object.defineProperty(SlackSettingsComponent.prototype, "slackSetting", {
        get: function () { return this.slackSettingsForm.controls; },
        enumerable: true,
        configurable: true
    });
    SlackSettingsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.slackSettingsForm.invalid) {
            return;
        }
        this.settingService.createSlackSettings(this.slackSettingsForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.messages.update'), _this.translate.instant('settings.title'));
        });
    };
    SlackSettingsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SlackSettingsComponent.prototype, "loginUser", void 0);
    SlackSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slack-settings',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slack-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/slack-settings/slack-settings.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slack-settings.component.scss */ "./src/app/modules/settings/components/slack-settings/slack-settings.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"]])
    ], SlackSettingsComponent);
    return SlackSettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/system-settings/system-settings.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/settings/components/system-settings/system-settings.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9zeXN0ZW0tc2V0dGluZ3Mvc3lzdGVtLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/settings/components/system-settings/system-settings.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/settings/components/system-settings/system-settings.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SystemSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemSettingsComponent", function() { return SystemSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/services/setting.service */ "./src/app/core/services/setting.service.ts");
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/translation.service */ "./src/app/core/services/translation.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");









var SystemSettingsComponent = /** @class */ (function () {
    function SystemSettingsComponent(translate, datepipe, formBuilder, toastr, settingService, helperService, translationService) {
        this.translate = translate;
        this.datepipe = datepipe;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.settingService = settingService;
        this.helperService = helperService;
        this.translationService = translationService;
        this.timezones = [];
        this.dateFormates = [];
        this.timeFormates = [
            { value: 'hh:mm A', label: this.translate.instant('common.12_hours') },
            { value: 'HH:mm', label: this.translate.instant('common.24_hours') }
        ];
        this.isSubmitted = false;
        this.isFormLoaded = false;
    }
    SystemSettingsComponent.prototype.ngOnInit = function () {
        this.getTimezones();
        this.getCurrencies();
        this.getLanguages();
        this.dateFormates = [
            { value: 'DD-MM-YYYY', label: this.datepipe.transform(new Date(), 'dd-MM-yyyy') },
            { value: 'MM-DD-YYYY', label: this.datepipe.transform(new Date(), 'MM-dd-yyyy') },
            { value: 'YYYY-MM-DD', label: this.datepipe.transform(new Date(), 'yyyy-MM-dd') },
            { value: 'D-M-YY', label: this.datepipe.transform(new Date(), 'd-M-yy') },
            { value: 'DD.MM.YYYY', label: this.datepipe.transform(new Date(), 'dd.MM.yyyy') },
            { value: 'MM.DD.YYYY', label: this.datepipe.transform(new Date(), 'MM.dd.yyyy') },
            { value: 'YYYY.MM.DD', label: this.datepipe.transform(new Date(), 'yyyy.MM.dd') },
            { value: 'D.M.YY', label: this.datepipe.transform(new Date(), 'd.M.yy') }
        ];
        this.settingsForm = this.formBuilder.group({
            form_for: ['system_setting'],
            timezone: [this.settings.timezone],
            default_language: [this.settings.default_language, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tables_pagination_limit: [this.settings.tables_pagination_limit, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            date_format: [this.settings.date_format, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            time_format: [this.settings.time_format, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            currency_id: [this.settings.currency_id, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            allowed_for_registration: [this.settings.allowed_for_registration]
        });
    };
    Object.defineProperty(SystemSettingsComponent.prototype, "systemSetting", {
        get: function () { return this.settingsForm.controls; },
        enumerable: true,
        configurable: true
    });
    SystemSettingsComponent.prototype.getTimezones = function () {
        var _this = this;
        this.helperService.getTimezones()
            .subscribe(function (data) {
            for (var iRow in data) {
                _this.timezones.push({
                    key: iRow,
                    value: data[iRow]
                });
            }
            _this.isFormLoaded = true;
        });
    };
    SystemSettingsComponent.prototype.getCurrencies = function () {
        var _this = this;
        this.helperService.getCurrencies().subscribe(function (data) {
            _this.currencies = data;
        });
    };
    SystemSettingsComponent.prototype.getLanguages = function () {
        var _this = this;
        this.translationService.getAllActiveTranslations().subscribe(function (data) {
            _this.languages = data;
        });
    };
    SystemSettingsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.settingsForm.invalid) {
            return;
        }
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // return;
        this.settingsForm.value.date_time_format = this.settingsForm.value.date_format + ' ' + this.settingsForm.value.time_format;
        this.settingService.create(this.settingsForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.messages.update'), _this.translate.instant('settings.title'));
        });
    };
    SystemSettingsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_setting_service__WEBPACK_IMPORTED_MODULE_6__["SettingService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] },
        { type: _core_services_translation_service__WEBPACK_IMPORTED_MODULE_7__["TranslationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SystemSettingsComponent.prototype, "settings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SystemSettingsComponent.prototype, "loginUser", void 0);
    SystemSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-system-settings',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./system-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/system-settings/system-settings.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./system-settings.component.scss */ "./src/app/modules/settings/components/system-settings/system-settings.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_6__["SettingService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"],
            _core_services_translation_service__WEBPACK_IMPORTED_MODULE_7__["TranslationService"]])
    ], SystemSettingsComponent);
    return SystemSettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/theme-settings/theme-settings.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/settings/components/theme-settings/theme-settings.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  max-width: 100%;\n  height: 120px;\n}\n\n.dz-image-custom {\n  border-radius: 20px;\n  width: 120px;\n  height: 120px;\n  position: relative;\n  display: block;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL3RoZW1lLXNldHRpbmdzL3RoZW1lLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NldHRpbmdzL2NvbXBvbmVudHMvdGhlbWUtc2V0dGluZ3MvdGhlbWUtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFBO0VBQ0EsYUFBQTtBQ0NEOztBREVBO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy90aGVtZS1zZXR0aW5ncy90aGVtZS1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG5cdG1heC13aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMjBweDtcbn1cblxuLmR6LWltYWdlLWN1c3RvbSB7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdHdpZHRoOiAxMjBweDtcblx0aGVpZ2h0OiAxMjBweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBibG9jaztcblx0ei1pbmRleDogMTA7XG59IiwiaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4uZHotaW1hZ2UtY3VzdG9tIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB6LWluZGV4OiAxMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/settings/components/theme-settings/theme-settings.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/settings/components/theme-settings/theme-settings.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ThemeSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingsComponent", function() { return ThemeSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/setting.service */ "./src/app/core/services/setting.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_helpers_app_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/helpers/app.helper */ "./src/app/core/helpers/app.helper.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_7__);








var ThemeSettingsComponent = /** @class */ (function () {
    function ThemeSettingsComponent(translate, toastr, settingService) {
        this.translate = translate;
        this.toastr = toastr;
        this.settingService = settingService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.isCompanyLogoUploaded = false;
        this.isCompanySidebarLogoUploaded = false;
        this.isLoginBgUploaded = false;
        this.isSidebarBgsUploaded = false;
    }
    ThemeSettingsComponent.prototype.ngOnInit = function () {
        if (this.settings.company_logo) {
            this.company_logo = this.settings.company_logo;
            this.isCompanyLogoUploaded = true;
        }
        if (this.settings.company_sidebar_logo) {
            this.company_sidebar_logo = this.settings.company_sidebar_logo;
            this.isCompanySidebarLogoUploaded = true;
        }
        if (this.settings.login_background) {
            this.login_background = this.settings.login_background;
            this.isLoginBgUploaded = true;
        }
        if (this.settings.sidebar_background_images) {
            this.settings.sidebar_background_images = this.convertStringToArray(this.settings.sidebar_background_images);
            this.isSidebarBgsUploaded = true;
        }
        // --
        // Toggle
        // $('.theme-settings-toggle').on('click',function(){
        // 	$('.theme-settings').toggleClass('open');
        // });
        // $('.theme-settings-close').on('click',function(){
        // 	$('.theme-settings').removeClass('open');
        // });
        this.setSidebarWidth(this.settings.sidebar_width);
        this.setCollapsedMenu(this.settings.is_collapsed_menu);
        this.loadDropzones();
    };
    // --
    // Collapsed menu
    ThemeSettingsComponent.prototype.changeCollapsedMenu = function ($event) {
        if (this.saveSettings({ 'is_collapsed_menu': this.settings.is_collapsed_menu })) {
            this.setCollapsedMenu(this.settings.is_collapsed_menu);
        }
        else {
            return false;
        }
    };
    ThemeSettingsComponent.prototype.setCollapsedMenu = function (isCollapsed) {
        var collapsedValue = false;
        if (isCollapsed || isCollapsed == 1) {
            collapsedValue = true;
        }
        Object(_core_helpers_app_helper__WEBPACK_IMPORTED_MODULE_6__["collapsedMenu"])(collapsedValue);
        if (isCollapsed) {
            $('.app-sidebar').trigger('mouseleave');
        }
    };
    // --
    // Sidebar width
    ThemeSettingsComponent.prototype.changeSidebarWidth = function ($event) {
        if (this.saveSettings({ 'sidebar_width': this.settings.sidebar_width })) {
            this.setSidebarWidth(this.settings.sidebar_width);
        }
        else {
            return false;
        }
    };
    ThemeSettingsComponent.prototype.setSidebarWidth = function (width) {
        var wrapper = $('.wrapper');
        switch (width) {
            case "small":
                $(wrapper).removeClass('sidebar-lg').addClass('sidebar-sm');
                break;
            case "large":
                $(wrapper).removeClass('sidebar-sm').addClass('sidebar-lg');
                break;
            default:
                $(wrapper).removeClass('sidebar-sm sidebar-lg');
                break;
        }
    };
    ThemeSettingsComponent.prototype.loadDropzones = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_7__(this.logoDropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var _this_1 = this;
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_7__["createElement"]('<button class=\'btn btn-sm btn-block\'>Remove file</button>');
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        reader_1.onload = function (e) {
                            that.company_logo = reader_1.result;
                            _this_1.isCompanyLogoUploaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.company_logo = null;
                    this.isCompanyLogoUploaded = false;
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
        new dropzone__WEBPACK_IMPORTED_MODULE_7__(this.loginbg.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_7__["createElement"]('<button class=\'btn btn-sm btn-block\'>Remove file</button>');
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_2 = new FileReader();
                        reader_2.onload = function (e) {
                            that.login_background = reader_2.result;
                            that.isLoginBgUploaded = false;
                        };
                        reader_2.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.login_background = null;
                    that.isLoginBgUploaded = false;
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
        //Color Pallets
        new dropzone__WEBPACK_IMPORTED_MODULE_7__(this.colorpaletts.nativeElement, {
            url: 'https://httpbin.org/post',
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var _this_1 = this;
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_7__["createElement"]('<button class=\'btn btn-sm btn-block\'>Remove file</button>');
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file, 'test');
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            that.sidebar_background_images_obj = _this_1.files;
                        };
                        reader.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file, param) {
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
        new dropzone__WEBPACK_IMPORTED_MODULE_7__(this.sidebardropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_7__["createElement"]('<button class=\'btn btn-sm btn-block\'>Remove file</button>');
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_3 = new FileReader();
                        reader_3.onload = function (e) {
                            that.company_sidebar_logo = reader_3.result;
                            that.isCompanySidebarLogoUploaded = false;
                        };
                        reader_3.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.company_sidebar_logo = null;
                    that.isCompanySidebarLogoUploaded = false;
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    ThemeSettingsComponent.prototype.convertStringToArray = function (value) {
        if (typeof value == "string") {
            value = value.replace('[', '');
            value = value.replace(']', '');
            while (value.indexOf('"') > -1) {
                value = value.replace('"', '');
            }
            return value.split(',');
        }
        else {
            return null;
        }
    };
    ThemeSettingsComponent.prototype.removeImage = function (array, item) {
        for (var i in array) {
            if (array[i] == item) {
                array.splice(i, 1);
                break;
            }
        }
    };
    ThemeSettingsComponent.prototype.removeCompanyLogo = function () {
        this.company_logo = null;
        this.isCompanyLogoUploaded = false;
    };
    ThemeSettingsComponent.prototype.removeCompanySidebarLogo = function () {
        this.company_sidebar_logo = null;
        this.isCompanySidebarLogoUploaded = false;
    };
    ThemeSettingsComponent.prototype.removeLoginBg = function () {
        this.login_background = null;
        this.isLoginBgUploaded = false;
    };
    ThemeSettingsComponent.prototype.removeSidebarBgImage = function (image) {
        this.sidebar_background_images = null;
        this.removeImage(this.settings.sidebar_background_images, image);
        if (this.settings.sidebar_background_images.length == 0) {
            this.isSidebarBgsUploaded = false;
        }
    };
    ThemeSettingsComponent.prototype.saveSettings = function (settings) {
        var _this_1 = this;
        return this.settingService.create(settings).subscribe(function (data) {
            return true;
            _this_1.toastr.success(_this_1.translate.instant('settings.messages.update'), _this_1.translate.instant('settings.title'));
        }, function (data) {
            return false;
        });
    };
    ThemeSettingsComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        var sidebar_bg_imgs = [];
        if (this.sidebar_background_images_obj) {
            for (var iRow = 0; iRow < this.sidebar_background_images_obj.length; iRow++) {
                var thisfile = {
                    file: this.sidebar_background_images_obj[iRow].dataURL,
                    name: this.sidebar_background_images_obj[iRow].name,
                    size: this.sidebar_background_images_obj[iRow].size,
                    extension: this.sidebar_background_images_obj[iRow].name.split('.').pop()
                };
                sidebar_bg_imgs.push(thisfile);
            }
        }
        // --
        // Manage images
        this.settings.form_for = 'theme_setting';
        this.settings.settings_images = {
            company_logo: this.company_logo,
            company_sidebar_logo: this.company_sidebar_logo,
            login_background: this.login_background,
            sidebar_background_images: this.settings.sidebar_background_images,
            sidebar_background_images_obj: sidebar_bg_imgs
        };
        this.settingService.create(this.settings).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('settings.messages.update'), _this_1.translate.instant('settings.title'));
        });
    };
    ThemeSettingsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _core_services_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ThemeSettingsComponent.prototype, "settings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logodropzone', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ThemeSettingsComponent.prototype, "logoDropzone", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebardropzone', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ThemeSettingsComponent.prototype, "sidebardropzone", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginbg', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ThemeSettingsComponent.prototype, "loginbg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('colorpaletts', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ThemeSettingsComponent.prototype, "colorpaletts", void 0);
    ThemeSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-theme-settings',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./theme-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/theme-settings/theme-settings.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./theme-settings.component.scss */ "./src/app/modules/settings/components/theme-settings/theme-settings.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"]])
    ], ThemeSettingsComponent);
    return ThemeSettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/translations-settings/components/create-translation/create-translation.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/settings/components/translations-settings/components/create-translation/create-translation.component.scss ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy90cmFuc2xhdGlvbnMtc2V0dGluZ3MvY29tcG9uZW50cy9jcmVhdGUtdHJhbnNsYXRpb24vY3JlYXRlLXRyYW5zbGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/settings/components/translations-settings/components/create-translation/create-translation.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/settings/components/translations-settings/components/create-translation/create-translation.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: CreateTranslationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTranslationComponent", function() { return CreateTranslationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../core/services/translation.service */ "./src/app/core/services/translation.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_9__);










var CreateTranslationComponent = /** @class */ (function () {
    function CreateTranslationComponent(translate, bsModalRef, formBuilder, translationService, helperService, toastr) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.translationService = translationService;
        this.helperService = helperService;
        this.toastr = toastr;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isFormLoaded = false;
    }
    CreateTranslationComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getLanguages();
        this.loadForm();
    };
    Object.defineProperty(CreateTranslationComponent.prototype, "getTranslationControl", {
        get: function () { return this.createTranslationForm.controls; },
        enumerable: true,
        configurable: true
    });
    CreateTranslationComponent.prototype.getLanguages = function () {
        var _this_1 = this;
        this.helperService.getLanguages()
            .subscribe(function (data) {
            _this_1.languages = data;
        });
    };
    CreateTranslationComponent.prototype.loadForm = function () {
        this.createTranslationForm = this.formBuilder.group({
            icon: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            language: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.loadDropzone();
        this.isFormLoaded = true;
    };
    CreateTranslationComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_9__(this.translateDropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_9__["createElement"]('<button class=\'btn btn-sm btn-block\'>Remove file</button>');
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        reader_1.onload = function (e) {
                            that.createTranslationForm.patchValue({ icon: reader_1.result });
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.createTranslationForm.patchValue({ icon: '' });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    CreateTranslationComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.createTranslationForm.invalid) {
            return;
        }
        this.translationService.create(this.createTranslationForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('settings.translations.messages.create'), _this_1.translate.instant('settings.translations.title'));
            _this_1.event.emit({ data: true });
            _this_1.onCancel();
        });
    };
    CreateTranslationComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    CreateTranslationComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_translation_service__WEBPACK_IMPORTED_MODULE_7__["TranslationService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('translateDropzone', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateTranslationComponent.prototype, "translateDropzone", void 0);
    CreateTranslationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-translation',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-translation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/translations-settings/components/create-translation/create-translation.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-translation.component.scss */ "./src/app/modules/settings/components/translations-settings/components/create-translation/create-translation.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_translation_service__WEBPACK_IMPORTED_MODULE_7__["TranslationService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], CreateTranslationComponent);
    return CreateTranslationComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/translations-settings/components/edit-translation/edit-translation.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/settings/components/translations-settings/components/edit-translation/edit-translation.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy90cmFuc2xhdGlvbnMtc2V0dGluZ3MvY29tcG9uZW50cy9lZGl0LXRyYW5zbGF0aW9uL2VkaXQtdHJhbnNsYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/settings/components/translations-settings/components/edit-translation/edit-translation.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/settings/components/translations-settings/components/edit-translation/edit-translation.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: EditTranslationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTranslationComponent", function() { return EditTranslationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../core/services/translation.service */ "./src/app/core/services/translation.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_9__);










var EditTranslationComponent = /** @class */ (function () {
    function EditTranslationComponent(translate, bsModalRef, formBuilder, translationService, toastr) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.translationService = translationService;
        this.toastr = toastr;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isFormLoaded = false;
        this.isProfileUploded = false;
        this.isProfileLoaded = true;
    }
    EditTranslationComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForm();
    };
    Object.defineProperty(EditTranslationComponent.prototype, "getTranslationControl", {
        get: function () { return this.editTranslationForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditTranslationComponent.prototype.loadForm = function () {
        this.editTranslationForm = this.formBuilder.group({
            id: [this.translation.id],
            status: [this.translation.status],
            icon: [this.translation.icon, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            language: [this.translation.language, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.loadDropzone();
        this.isFormLoaded = true;
    };
    EditTranslationComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_9__(this.translateDropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_9__["createElement"]('<button class=\'btn btn-sm btn-block\'>Remove file</button>');
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        reader_1.onload = function (e) {
                            that.editTranslationForm.patchValue({ icon: reader_1.result });
                            that.isProfileLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.editTranslationForm.patchValue({ icon: null });
                    that.isProfileLoaded = false;
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    EditTranslationComponent.prototype.removeDropzoneImage = function () {
        this.isProfileUploded = true;
        this.isProfileLoaded = false;
        this.editTranslationForm.patchValue({ icon: null });
    };
    EditTranslationComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.editTranslationForm.invalid) {
            return;
        }
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // this.onCancel();
        // return;
        this.translationService.update(this.editTranslationForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('settings.translations.messages.update'), _this_1.translate.instant('settings.translations.title'));
            _this_1.event.emit({ data: true });
            _this_1.onCancel();
        });
    };
    EditTranslationComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    EditTranslationComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_translation_service__WEBPACK_IMPORTED_MODULE_7__["TranslationService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('translateDropzone', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditTranslationComponent.prototype, "translateDropzone", void 0);
    EditTranslationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-translation',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-translation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/translations-settings/components/edit-translation/edit-translation.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-translation.component.scss */ "./src/app/modules/settings/components/translations-settings/components/edit-translation/edit-translation.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_translation_service__WEBPACK_IMPORTED_MODULE_7__["TranslationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], EditTranslationComponent);
    return EditTranslationComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/translations-settings/translations-settings.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/settings/components/translations-settings/translations-settings.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL3RyYW5zbGF0aW9ucy1zZXR0aW5ncy90cmFuc2xhdGlvbnMtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy90cmFuc2xhdGlvbnMtc2V0dGluZ3MvdHJhbnNsYXRpb25zLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL3RyYW5zbGF0aW9ucy1zZXR0aW5ncy90cmFuc2xhdGlvbnMtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgICBkaXNwbGF5OiBub25lXG59IiwiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/settings/components/translations-settings/translations-settings.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/settings/components/translations-settings/translations-settings.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: TranslationsSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationsSettingsComponent", function() { return TranslationsSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/services/translation.service */ "./src/app/core/services/translation.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_create_translation_create_translation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/create-translation/create-translation.component */ "./src/app/modules/settings/components/translations-settings/components/create-translation/create-translation.component.ts");
/* harmony import */ var _components_edit_translation_edit_translation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/edit-translation/edit-translation.component */ "./src/app/modules/settings/components/translations-settings/components/edit-translation/edit-translation.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__);


















var TranslationsSettingsComponent = /** @class */ (function () {
    function TranslationsSettingsComponent(translate, http, toastr, modalService, exportAsService, translationService, helperService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.toastr = toastr;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.translationService = translationService;
        this.helperService = helperService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.dtOptions = {};
        this.translations = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'translation_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TranslationsSettingsComponent.prototype.ngOnInit = function () {
        this.loadTranslationDatatable();
    };
    TranslationsSettingsComponent.prototype.loadTranslationDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: this.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [1, 'asc'],
            columns: [{
                    'sortable': false,
                    'width': "2%",
                    'target': [0]
                }, {
                    'sortable': true,
                    'target': [1]
                }, {
                    'sortable': true,
                    'target': [2]
                }, {
                    'sortable': false,
                    'width': "5%",
                    'target': [3]
                }
            ],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('settings.translations.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('settings.translations.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('settings.translations.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }],
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
                _this.http
                    .post(_this.apiUrl + '/api/all-translations', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.translations = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    TranslationsSettingsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, 'translations').subscribe(function () { });
    };
    TranslationsSettingsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    TranslationsSettingsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    TranslationsSettingsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.translations.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    TranslationsSettingsComponent.prototype.openTranslationCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_create_translation_create_translation_component__WEBPACK_IMPORTED_MODULE_13__["CreateTranslationComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    TranslationsSettingsComponent.prototype.openTranslationEditModal = function (translation) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered animated fadeIn",
            initialState: {
                translation: translation
            }
        };
        this.modalRef = this.modalService.show(_components_edit_translation_edit_translation_component__WEBPACK_IMPORTED_MODULE_14__["EditTranslationComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    TranslationsSettingsComponent.prototype.setActiveInactiveTranslation = function (value, translation) {
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // return;
        var _this = this;
        translation.status = value;
        this.translationService.update(translation)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.translations.messages.status'), _this.translate.instant('settings.translations.title'));
            _this.rerender();
        });
    };
    TranslationsSettingsComponent.prototype.translationDelete = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('settings.translations.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                // --
                // this.toastr.error(this.translate.instant('common.not_allowed'));
                // return;
                _this.translationService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('settings.translations.messages.delete'), _this.translate.instant('settings.translations.title'));
                    _this.rerender();
                });
            }
        });
    };
    TranslationsSettingsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: _core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__["TranslationService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"])
    ], TranslationsSettingsComponent.prototype, "dtElement", void 0);
    TranslationsSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-translations-settings',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./translations-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/components/translations-settings/translations-settings.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./translations-settings.component.scss */ "./src/app/modules/settings/components/translations-settings/translations-settings.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            _core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__["TranslationService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]])
    ], TranslationsSettingsComponent);
    return TranslationsSettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/pages/settings/settings.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/settings/pages/settings/settings.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * Nestable\n */\n.dd {\n  position: relative;\n  display: block;\n  margin: 0;\n  padding: 0;\n  max-width: 600px;\n  list-style: none;\n  font-size: 13px;\n  line-height: 20px;\n}\n.dd-list {\n  display: block;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.dd-list .dd-list {\n  padding-left: 30px;\n}\n.dd-collapsed .dd-list {\n  display: none;\n}\n.dd-item,\n.dd-empty,\n.dd-placeholder {\n  display: block;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  min-height: 20px;\n  font-size: 13px;\n  line-height: 20px;\n}\n.dd-handle {\n  display: block;\n  height: 30px;\n  margin: 5px 0;\n  padding: 5px 10px;\n  color: #333;\n  text-decoration: none;\n  font-weight: bold;\n  border: 1px solid #ccc;\n  background: #fafafa;\n  border-radius: 3px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n.dd-handle:hover {\n  color: #2ea8e5;\n  background: #fff;\n}\n.dd-item > button {\n  display: block;\n  position: relative;\n  cursor: pointer;\n  float: left;\n  width: 25px;\n  height: 20px;\n  margin: 5px 0;\n  padding: 0;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  border: 0;\n  background: transparent;\n  font-size: 12px;\n  line-height: 1;\n  text-align: center;\n  font-weight: bold;\n}\n.dd-item > button:before {\n  content: \"+\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  text-indent: 0;\n}\n.dd-item > button[data-action=collapse]:before {\n  content: \"-\";\n}\n.dd-placeholder,\n.dd-empty {\n  margin: 5px 0;\n  padding: 0;\n  min-height: 30px;\n  background: #f2fbff;\n  border: 1px dashed #b6bcbf;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n.dd-empty {\n  border: 1px dashed #bbb;\n  min-height: 100px;\n  background-color: #e5e5e5;\n  background-image: linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);\n  background-size: 60px 60px;\n  background-position: 0 0, 30px 30px;\n}\n.dd-dragel {\n  position: absolute;\n  pointer-events: none;\n  z-index: 9999;\n}\n.dd-dragel > .dd-item .dd-handle {\n  margin-top: 0;\n}\n.dd-dragel .dd-handle {\n  box-shadow: 2px 4px 6px 0 rgba(0, 0, 0, 0.1);\n}\n/**\n * Nestable Extras\n */\n.nestable-lists {\n  display: block;\n  clear: both;\n  padding: 30px 0;\n  width: 100%;\n  border: 0;\n  border-top: 2px solid #ddd;\n  border-bottom: 2px solid #ddd;\n}\n#nestable-menu {\n  padding: 0;\n  margin: 20px 0;\n}\n#nestable-output,\n#nestable2-output {\n  width: 100%;\n  height: 7em;\n  font-size: 0.75em;\n  line-height: 1.333333em;\n  font-family: Consolas, monospace;\n  padding: 5px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n#nestable2 .dd-handle {\n  color: #fff;\n  border: 1px solid #999;\n  background: #bbb;\n}\n#nestable2 .dd-handle:hover {\n  background: #bbb;\n}\n#nestable2 .dd-item > button:before {\n  color: #fff;\n}\n.dd-hover > .dd-handle {\n  background: #2ea8e5 !important;\n}\n/**\n * Nestable Draggable Handles\n */\n.dd3-content {\n  display: block;\n  height: 30px;\n  margin: 5px 0;\n  padding: 5px 10px 5px 40px;\n  color: #333;\n  text-decoration: none;\n  font-weight: bold;\n  border: 1px solid #ccc;\n  background: #fafafa;\n  border-radius: 3px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n.dd3-content:hover {\n  color: #2ea8e5;\n  background: #fff;\n}\n.dd-dragel > .dd3-item > .dd3-content {\n  margin: 0;\n}\n.dd3-item > button {\n  margin-left: 30px;\n}\n.dd3-handle {\n  position: absolute;\n  margin: 0;\n  left: 0;\n  top: 0;\n  cursor: pointer;\n  width: 30px;\n  text-indent: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  border: 1px solid #aaa;\n  background: #ddd;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.dd3-handle:before {\n  content: \"≡\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 3px;\n  width: 100%;\n  text-align: center;\n  text-indent: 0;\n  color: #fff;\n  font-size: 20px;\n  font-weight: normal;\n}\n.dd3-handle:hover {\n  background: #ddd;\n}\n.disabled {\n  pointer-events: none;\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7O0VBQUE7QUFJQTtFQUFNLGtCQUFBO0VBQW9CLGNBQUE7RUFBZ0IsU0FBQTtFQUFXLFVBQUE7RUFBWSxnQkFBQTtFQUFrQixnQkFBQTtFQUFrQixlQUFBO0VBQWlCLGlCQUFBO0FEU3RIO0FDUEE7RUFBVyxjQUFBO0VBQWdCLGtCQUFBO0VBQW9CLFNBQUE7RUFBVyxVQUFBO0VBQVksZ0JBQUE7QURldEU7QUNkQTtFQUFtQixrQkFBQTtBRGtCbkI7QUNqQkE7RUFBeUIsYUFBQTtBRHFCekI7QUNuQkE7OztFQUVrQixjQUFBO0VBQWdCLGtCQUFBO0VBQW9CLFNBQUE7RUFBVyxVQUFBO0VBQVksZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQixpQkFBQTtBRDZCaEg7QUMzQkE7RUFBYSxjQUFBO0VBQWdCLFlBQUE7RUFBYyxhQUFBO0VBQWUsaUJBQUE7RUFBbUIsV0FBQTtFQUFhLHFCQUFBO0VBQXVCLGlCQUFBO0VBQW1CLHNCQUFBO0VBQ2hJLG1CQUFBO0VBRVEsa0JBQUE7RUFDUixzQkFBQTtFQUF3QiwyQkFBQTtBRHVDNUI7QUNyQ0E7RUFBbUIsY0FBQTtFQUFnQixnQkFBQTtBRDBDbkM7QUN4Q0E7RUFBb0IsY0FBQTtFQUFnQixrQkFBQTtFQUFvQixlQUFBO0VBQWlCLFdBQUE7RUFBYSxXQUFBO0VBQWEsWUFBQTtFQUFjLGFBQUE7RUFBZSxVQUFBO0VBQVksaUJBQUE7RUFBbUIsbUJBQUE7RUFBcUIsZ0JBQUE7RUFBa0IsU0FBQTtFQUFXLHVCQUFBO0VBQXlCLGVBQUE7RUFBaUIsY0FBQTtFQUFnQixrQkFBQTtFQUFvQixpQkFBQTtBRDREL1I7QUMzREE7RUFBMkIsWUFBQTtFQUFjLGNBQUE7RUFBZ0Isa0JBQUE7RUFBb0IsV0FBQTtFQUFhLGtCQUFBO0VBQW9CLGNBQUE7QURvRTlHO0FDbkVBO0VBQW1ELFlBQUE7QUR1RW5EO0FDckVBOztFQUNZLGFBQUE7RUFBZSxVQUFBO0VBQVksZ0JBQUE7RUFBa0IsbUJBQUE7RUFBcUIsMEJBQUE7RUFBNEIsc0JBQUE7RUFBd0IsMkJBQUE7QUQrRWxJO0FDOUVBO0VBQVksdUJBQUE7RUFBeUIsaUJBQUE7RUFBbUIseUJBQUE7RUFLcEQsd0xBQUE7RUFFQSwwQkFBQTtFQUNBLG1DQUFBO0FEaUZKO0FDOUVBO0VBQWEsa0JBQUE7RUFBb0Isb0JBQUE7RUFBc0IsYUFBQTtBRG9GdkQ7QUNuRkE7RUFBbUMsYUFBQTtBRHVGbkM7QUN0RkE7RUFFWSw0Q0FBQTtBRHlGWjtBQ3RGQTs7RUFBQTtBQUlBO0VBQWtCLGNBQUE7RUFBZ0IsV0FBQTtFQUFhLGVBQUE7RUFBaUIsV0FBQTtFQUFhLFNBQUE7RUFBVywwQkFBQTtFQUE0Qiw2QkFBQTtBRCtGcEg7QUM3RkE7RUFBaUIsVUFBQTtFQUFZLGNBQUE7QURrRzdCO0FDaEdBOztFQUNvQixXQUFBO0VBQWEsV0FBQTtFQUFhLGlCQUFBO0VBQW1CLHVCQUFBO0VBQXlCLGdDQUFBO0VBQWtDLFlBQUE7RUFBYyxzQkFBQTtFQUF3QiwyQkFBQTtBRDJHbEs7QUN6R0E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBRDRHSjtBQzFHQTtFQUE4QixnQkFBQTtBRDhHOUI7QUM3R0E7RUFBc0MsV0FBQTtBRGlIdEM7QUMvR0E7RUFBeUIsOEJBQUE7QURtSHpCO0FDakhBOztFQUFBO0FBSUE7RUFBZSxjQUFBO0VBQWdCLFlBQUE7RUFBYyxhQUFBO0VBQWUsMEJBQUE7RUFBNEIsV0FBQTtFQUFhLHFCQUFBO0VBQXVCLGlCQUFBO0VBQW1CLHNCQUFBO0VBQzNJLG1CQUFBO0VBRVEsa0JBQUE7RUFDUixzQkFBQTtFQUF3QiwyQkFBQTtBRDRINUI7QUMxSEE7RUFBcUIsY0FBQTtFQUFnQixnQkFBQTtBRCtIckM7QUM3SEE7RUFBd0MsU0FBQTtBRGlJeEM7QUMvSEE7RUFBcUIsaUJBQUE7QURtSXJCO0FDaklBO0VBQWMsa0JBQUE7RUFBb0IsU0FBQTtFQUFXLE9BQUE7RUFBUyxNQUFBO0VBQVEsZUFBQTtFQUFpQixXQUFBO0VBQWEsaUJBQUE7RUFBbUIsbUJBQUE7RUFBcUIsZ0JBQUE7RUFDaEksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUQ2SUo7QUMzSUE7RUFBcUIsWUFBQTtFQUFjLGNBQUE7RUFBZ0Isa0JBQUE7RUFBb0IsT0FBQTtFQUFTLFFBQUE7RUFBVSxXQUFBO0VBQWEsa0JBQUE7RUFBb0IsY0FBQTtFQUFnQixXQUFBO0VBQWEsZUFBQTtFQUFpQixtQkFBQTtBRHlKeks7QUN4SkE7RUFBb0IsZ0JBQUE7QUQ0SnBCO0FDM0pBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0FEOEpKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxuICogTmVzdGFibGVcbiAqL1xuLmRkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uZGQtbGlzdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmRkLWxpc3QgLmRkLWxpc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5kZC1jb2xsYXBzZWQgLmRkLWxpc3Qge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZGQtaXRlbSxcbi5kZC1lbXB0eSxcbi5kZC1wbGFjZWhvbGRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmRkLWhhbmRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogNXB4IDA7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZGQtaGFuZGxlOmhvdmVyIHtcbiAgY29sb3I6ICMyZWE4ZTU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5kZC1pdGVtID4gYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiA1cHggMDtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1pbmRlbnQ6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kZC1pdGVtID4gYnV0dG9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiK1wiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWluZGVudDogMDtcbn1cblxuLmRkLWl0ZW0gPiBidXR0b25bZGF0YS1hY3Rpb249Y29sbGFwc2VdOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiLVwiO1xufVxuXG4uZGQtcGxhY2Vob2xkZXIsXG4uZGQtZW1wdHkge1xuICBtYXJnaW46IDVweCAwO1xuICBwYWRkaW5nOiAwO1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmYmZmO1xuICBib3JkZXI6IDFweCBkYXNoZWQgI2I2YmNiZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZGQtZW1wdHkge1xuICBib3JkZXI6IDFweCBkYXNoZWQgI2JiYjtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmZmIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICNmZmYgNzUlLCAjZmZmKSwgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZmYgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDc1JSwgI2ZmZiA3NSUsICNmZmYpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmZiAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNzUlLCAjZmZmIDc1JSwgI2ZmZiksIC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmZmIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICNmZmYgNzUlLCAjZmZmKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmZmIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICNmZmYgNzUlLCAjZmZmKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmZmIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICNmZmYgNzUlLCAjZmZmKTtcbiAgYmFja2dyb3VuZC1zaXplOiA2MHB4IDYwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgMzBweCAzMHB4O1xufVxuXG4uZGQtZHJhZ2VsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmRkLWRyYWdlbCA+IC5kZC1pdGVtIC5kZC1oYW5kbGUge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uZGQtZHJhZ2VsIC5kZC1oYW5kbGUge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA0cHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAycHggNHB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLyoqXG4gKiBOZXN0YWJsZSBFeHRyYXNcbiAqL1xuLm5lc3RhYmxlLWxpc3RzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcbn1cblxuI25lc3RhYmxlLW1lbnUge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuI25lc3RhYmxlLW91dHB1dCxcbiNuZXN0YWJsZTItb3V0cHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogN2VtO1xuICBmb250LXNpemU6IDAuNzVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzZW07XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgbW9ub3NwYWNlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI25lc3RhYmxlMiAuZGQtaGFuZGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIGJhY2tncm91bmQ6ICNiYmI7XG59XG5cbiNuZXN0YWJsZTIgLmRkLWhhbmRsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNiYmI7XG59XG5cbiNuZXN0YWJsZTIgLmRkLWl0ZW0gPiBidXR0b246YmVmb3JlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5kZC1ob3ZlciA+IC5kZC1oYW5kbGUge1xuICBiYWNrZ3JvdW5kOiAjMmVhOGU1ICFpbXBvcnRhbnQ7XG59XG5cbi8qKlxuICogTmVzdGFibGUgRHJhZ2dhYmxlIEhhbmRsZXNcbiAqL1xuLmRkMy1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiA1cHggMDtcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDQwcHg7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5kZDMtY29udGVudDpob3ZlciB7XG4gIGNvbG9yOiAjMmVhOGU1O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZGQtZHJhZ2VsID4gLmRkMy1pdGVtID4gLmRkMy1jb250ZW50IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZGQzLWl0ZW0gPiBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmRkMy1oYW5kbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAzMHB4O1xuICB0ZXh0LWluZGVudDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgYmFja2dyb3VuZDogI2RkZDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4uZGQzLWhhbmRsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIuKJoVwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5kZDMtaGFuZGxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2RkZDtcbn1cblxuLmRpc2FibGVkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNjtcbn0iLCIvKipcbiAqIE5lc3RhYmxlXG4gKi9cblxuLmRkIHsgcG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBibG9jazsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyBtYXgtd2lkdGg6IDYwMHB4OyBsaXN0LXN0eWxlOiBub25lOyBmb250LXNpemU6IDEzcHg7IGxpbmUtaGVpZ2h0OiAyMHB4OyB9XG5cbi5kZC1saXN0IHsgZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiByZWxhdGl2ZTsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyBsaXN0LXN0eWxlOiBub25lOyB9XG4uZGQtbGlzdCAuZGQtbGlzdCB7cGFkZGluZy1sZWZ0OiAzMHB4O31cbi5kZC1jb2xsYXBzZWQgLmRkLWxpc3QgeyBkaXNwbGF5OiBub25lOyB9XG5cbi5kZC1pdGVtLFxuLmRkLWVtcHR5LFxuLmRkLXBsYWNlaG9sZGVyIHsgZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiByZWxhdGl2ZTsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyBtaW4taGVpZ2h0OiAyMHB4OyBmb250LXNpemU6IDEzcHg7IGxpbmUtaGVpZ2h0OiAyMHB4OyB9XG5cbi5kZC1oYW5kbGUgeyBkaXNwbGF5OiBibG9jazsgaGVpZ2h0OiAzMHB4OyBtYXJnaW46IDVweCAwOyBwYWRkaW5nOiA1cHggMTBweDsgY29sb3I6ICMzMzM7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgZm9udC13ZWlnaHQ6IGJvbGQ7IGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uZGQtaGFuZGxlOmhvdmVyIHsgY29sb3I6ICMyZWE4ZTU7IGJhY2tncm91bmQ6ICNmZmY7IH1cblxuLmRkLWl0ZW0gPiBidXR0b24geyBkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IHJlbGF0aXZlOyBjdXJzb3I6IHBvaW50ZXI7IGZsb2F0OiBsZWZ0OyB3aWR0aDogMjVweDsgaGVpZ2h0OiAyMHB4OyBtYXJnaW46IDVweCAwOyBwYWRkaW5nOiAwOyB0ZXh0LWluZGVudDogMTAwJTsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3c6IGhpZGRlbjsgYm9yZGVyOiAwOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgZm9udC1zaXplOiAxMnB4OyBsaW5lLWhlaWdodDogMTsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXdlaWdodDogYm9sZDsgfVxuLmRkLWl0ZW0gPiBidXR0b246YmVmb3JlIHsgY29udGVudDogJysnOyBkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTAwJTsgdGV4dC1hbGlnbjogY2VudGVyOyB0ZXh0LWluZGVudDogMDsgfVxuLmRkLWl0ZW0gPiBidXR0b25bZGF0YS1hY3Rpb249XCJjb2xsYXBzZVwiXTpiZWZvcmUgeyBjb250ZW50OiAnLSc7IH1cblxuLmRkLXBsYWNlaG9sZGVyLFxuLmRkLWVtcHR5IHsgbWFyZ2luOiA1cHggMDsgcGFkZGluZzogMDsgbWluLWhlaWdodDogMzBweDsgYmFja2dyb3VuZDogI2YyZmJmZjsgYm9yZGVyOiAxcHggZGFzaGVkICNiNmJjYmY7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuLmRkLWVtcHR5IHsgYm9yZGVyOiAxcHggZGFzaGVkICNiYmI7IG1pbi1oZWlnaHQ6IDEwMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmZmIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICNmZmYgNzUlLCAjZmZmKSxcbiAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmZiAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNzUlLCAjZmZmIDc1JSwgI2ZmZik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogICAgLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZmYgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDc1JSwgI2ZmZiA3NSUsICNmZmYpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmZmIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICNmZmYgNzUlLCAjZmZmKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmZiAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNzUlLCAjZmZmIDc1JSwgI2ZmZiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZmYgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDc1JSwgI2ZmZiA3NSUsICNmZmYpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNjBweCA2MHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgMzBweCAzMHB4O1xufVxuXG4uZGQtZHJhZ2VsIHsgcG9zaXRpb246IGFic29sdXRlOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogOTk5OTsgfVxuLmRkLWRyYWdlbCA+IC5kZC1pdGVtIC5kZC1oYW5kbGUgeyBtYXJnaW4tdG9wOiAwOyB9XG4uZGQtZHJhZ2VsIC5kZC1oYW5kbGUge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDRweCA2cHggMCByZ2JhKDAsMCwwLC4xKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCA0cHggNnB4IDAgcmdiYSgwLDAsMCwuMSk7XG59XG5cbi8qKlxuICogTmVzdGFibGUgRXh0cmFzXG4gKi9cblxuLm5lc3RhYmxlLWxpc3RzIHsgZGlzcGxheTogYmxvY2s7IGNsZWFyOiBib3RoOyBwYWRkaW5nOiAzMHB4IDA7IHdpZHRoOiAxMDAlOyBib3JkZXI6IDA7IGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkOyBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDsgfVxuXG4jbmVzdGFibGUtbWVudSB7IHBhZGRpbmc6IDA7IG1hcmdpbjogMjBweCAwOyB9XG5cbiNuZXN0YWJsZS1vdXRwdXQsXG4jbmVzdGFibGUyLW91dHB1dCB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDdlbTsgZm9udC1zaXplOiAwLjc1ZW07IGxpbmUtaGVpZ2h0OiAxLjMzMzMzM2VtOyBmb250LWZhbWlseTogQ29uc29sYXMsIG1vbm9zcGFjZTsgcGFkZGluZzogNXB4OyBib3gtc2l6aW5nOiBib3JkZXItYm94OyAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuI25lc3RhYmxlMiAuZGQtaGFuZGxlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICAgIGJhY2tncm91bmQ6ICNiYmI7XG59XG4jbmVzdGFibGUyIC5kZC1oYW5kbGU6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjYmJiOyB9XG4jbmVzdGFibGUyIC5kZC1pdGVtID4gYnV0dG9uOmJlZm9yZSB7IGNvbG9yOiAjZmZmOyB9XG5cbi5kZC1ob3ZlciA+IC5kZC1oYW5kbGUgeyBiYWNrZ3JvdW5kOiAjMmVhOGU1ICFpbXBvcnRhbnQ7IH1cblxuLyoqXG4gKiBOZXN0YWJsZSBEcmFnZ2FibGUgSGFuZGxlc1xuICovXG5cbi5kZDMtY29udGVudCB7IGRpc3BsYXk6IGJsb2NrOyBoZWlnaHQ6IDMwcHg7IG1hcmdpbjogNXB4IDA7IHBhZGRpbmc6IDVweCAxMHB4IDVweCA0MHB4OyBjb2xvcjogIzMzMzsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBmb250LXdlaWdodDogYm9sZDsgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5kZDMtY29udGVudDpob3ZlciB7IGNvbG9yOiAjMmVhOGU1OyBiYWNrZ3JvdW5kOiAjZmZmOyB9XG5cbi5kZC1kcmFnZWwgPiAuZGQzLWl0ZW0gPiAuZGQzLWNvbnRlbnQgeyBtYXJnaW46IDA7IH1cblxuLmRkMy1pdGVtID4gYnV0dG9uIHsgbWFyZ2luLWxlZnQ6IDMwcHg7IH1cblxuLmRkMy1oYW5kbGUgeyBwb3NpdGlvbjogYWJzb2x1dGU7IG1hcmdpbjogMDsgbGVmdDogMDsgdG9wOiAwOyBjdXJzb3I6IHBvaW50ZXI7IHdpZHRoOiAzMHB4OyB0ZXh0LWluZGVudDogMTAwJTsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG4uZGQzLWhhbmRsZTpiZWZvcmUgeyBjb250ZW50OiAn4omhJzsgZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgdG9wOiAzcHg7IHdpZHRoOiAxMDAlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHRleHQtaW5kZW50OiAwOyBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiAyMHB4OyBmb250LXdlaWdodDogbm9ybWFsOyB9XG4uZGQzLWhhbmRsZTpob3ZlciB7IGJhY2tncm91bmQ6ICNkZGQ7IH1cbi5kaXNhYmxlZCB7XG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTsgLy9UaGlzIG1ha2VzIGl0IG5vdCBjbGlja2FibGVcbiAgICBvcGFjaXR5OjAuNjsgICAgICAgICAvL1RoaXMgZ3JheXMgaXQgb3V0IHRvIGxvb2sgZGlzYWJsZWRcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/settings/pages/settings/settings.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/settings/pages/settings/settings.component.ts ***!
  \***********************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/setting.service */ "./src/app/core/services/setting.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");






var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settingService, helperService, authenticationService) {
        var _this = this;
        this.settingService = settingService;
        this.helperService = helperService;
        this.authenticationService = authenticationService;
        this.activeSettingTab = '1';
        this.isSettingsLoad = false;
        this.settings = [];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    SettingsComponent.prototype.setSettingTab = function ($event) {
        this.activeSettingTab = $event.id;
    };
    SettingsComponent.prototype.getActiveSettingTab = function (tab) {
        return this.activeSettingTab === tab;
    };
    SettingsComponent.prototype.getCountries = function () {
        var _this = this;
        this.helperService.getCountries()
            .subscribe(function (data) {
            _this.countries = data;
            _this.getSettings();
        });
    };
    SettingsComponent.prototype.getSettings = function () {
        var _this = this;
        this.settingService.getAll()
            .subscribe(function (data) {
            _this.settings = data;
            _this.isSettingsLoad = true;
        });
    };
    SettingsComponent.ctorParameters = function () { return [
        { type: _core_services_setting_service__WEBPACK_IMPORTED_MODULE_3__["SettingService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"] },
        { type: src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabset', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__["TabsetComponent"])
    ], SettingsComponent.prototype, "tabset", void 0);
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/pages/settings/settings.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.scss */ "./src/app/modules/settings/pages/settings/settings.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_setting_service__WEBPACK_IMPORTED_MODULE_3__["SettingService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"],
            src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/settings-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/settings/settings-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/modules/settings/pages/settings/settings.component.ts");




var routes = [
    {
        path: '',
        component: _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]
    }
];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/settings/settings.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/settings/settings.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_checklist__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-checklist */ "./node_modules/angular-checklist/dist/index.js");
/* harmony import */ var angular_checklist__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular_checklist__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/modules/settings/settings-routing.module.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/modules/settings/pages/settings/settings.component.ts");
/* harmony import */ var _components_company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/company-detail/company-detail.component */ "./src/app/modules/settings/components/company-detail/company-detail.component.ts");
/* harmony import */ var _components_email_settings_email_settings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/email-settings/email-settings.component */ "./src/app/modules/settings/components/email-settings/email-settings.component.ts");
/* harmony import */ var _components_email_templates_email_templates_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/email-templates/email-templates.component */ "./src/app/modules/settings/components/email-templates/email-templates.component.ts");
/* harmony import */ var _components_email_notifications_email_notifications_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/email-notifications/email-notifications.component */ "./src/app/modules/settings/components/email-notifications/email-notifications.component.ts");
/* harmony import */ var _components_cronjob_settings_cronjob_settings_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/cronjob-settings/cronjob-settings.component */ "./src/app/modules/settings/components/cronjob-settings/cronjob-settings.component.ts");
/* harmony import */ var _components_menu_allocation_menu_allocation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/menu-allocation/menu-allocation.component */ "./src/app/modules/settings/components/menu-allocation/menu-allocation.component.ts");
/* harmony import */ var _components_theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/theme-settings/theme-settings.component */ "./src/app/modules/settings/components/theme-settings/theme-settings.component.ts");
/* harmony import */ var _components_dashboard_settings_dashboard_settings_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/dashboard-settings/dashboard-settings.component */ "./src/app/modules/settings/components/dashboard-settings/dashboard-settings.component.ts");
/* harmony import */ var _components_system_settings_system_settings_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/system-settings/system-settings.component */ "./src/app/modules/settings/components/system-settings/system-settings.component.ts");
/* harmony import */ var _components_database_backup_database_backup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/database-backup/database-backup.component */ "./src/app/modules/settings/components/database-backup/database-backup.component.ts");
/* harmony import */ var _components_custom_fields_custom_fields_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/custom-fields/custom-fields.component */ "./src/app/modules/settings/components/custom-fields/custom-fields.component.ts");
/* harmony import */ var _components_custom_field_create_custom_field_create_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/custom-field-create/custom-field-create.component */ "./src/app/modules/settings/components/custom-field-create/custom-field-create.component.ts");
/* harmony import */ var _components_custom_field_edit_custom_field_edit_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/custom-field-edit/custom-field-edit.component */ "./src/app/modules/settings/components/custom-field-edit/custom-field-edit.component.ts");
/* harmony import */ var _components_translations_settings_translations_settings_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/translations-settings/translations-settings.component */ "./src/app/modules/settings/components/translations-settings/translations-settings.component.ts");
/* harmony import */ var _components_translations_settings_components_create_translation_create_translation_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/translations-settings/components/create-translation/create-translation.component */ "./src/app/modules/settings/components/translations-settings/components/create-translation/create-translation.component.ts");
/* harmony import */ var _components_translations_settings_components_edit_translation_edit_translation_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/translations-settings/components/edit-translation/edit-translation.component */ "./src/app/modules/settings/components/translations-settings/components/edit-translation/edit-translation.component.ts");
/* harmony import */ var _components_estimate_settings_estimate_settings_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/estimate-settings/estimate-settings.component */ "./src/app/modules/settings/components/estimate-settings/estimate-settings.component.ts");
/* harmony import */ var _components_invoice_settings_invoice_settings_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/invoice-settings/invoice-settings.component */ "./src/app/modules/settings/components/invoice-settings/invoice-settings.component.ts");
/* harmony import */ var _components_slack_settings_slack_settings_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/slack-settings/slack-settings.component */ "./src/app/modules/settings/components/slack-settings/slack-settings.component.ts");
/* harmony import */ var _components_paypal_gateway_paypal_gateway_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/paypal-gateway/paypal-gateway.component */ "./src/app/modules/settings/components/paypal-gateway/paypal-gateway.component.ts");






































var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__["SettingsComponent"],
                _components_company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_18__["CompanyDetailComponent"],
                _components_email_settings_email_settings_component__WEBPACK_IMPORTED_MODULE_19__["EmailSettingsComponent"],
                _components_email_templates_email_templates_component__WEBPACK_IMPORTED_MODULE_20__["EmailTemplatesComponent"],
                _components_email_notifications_email_notifications_component__WEBPACK_IMPORTED_MODULE_21__["EmailNotificationsComponent"],
                _components_cronjob_settings_cronjob_settings_component__WEBPACK_IMPORTED_MODULE_22__["CronjobSettingsComponent"],
                _components_menu_allocation_menu_allocation_component__WEBPACK_IMPORTED_MODULE_23__["MenuAllocationComponent"],
                _components_theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_24__["ThemeSettingsComponent"],
                _components_dashboard_settings_dashboard_settings_component__WEBPACK_IMPORTED_MODULE_25__["DashboardSettingsComponent"],
                _components_system_settings_system_settings_component__WEBPACK_IMPORTED_MODULE_26__["SystemSettingsComponent"],
                _components_database_backup_database_backup_component__WEBPACK_IMPORTED_MODULE_27__["DatabaseBackupComponent"],
                _components_custom_fields_custom_fields_component__WEBPACK_IMPORTED_MODULE_28__["CustomFieldsComponent"],
                _components_custom_field_create_custom_field_create_component__WEBPACK_IMPORTED_MODULE_29__["CustomFieldCreateComponent"],
                _components_custom_field_edit_custom_field_edit_component__WEBPACK_IMPORTED_MODULE_30__["CustomFieldEditComponent"],
                _components_translations_settings_translations_settings_component__WEBPACK_IMPORTED_MODULE_31__["TranslationsSettingsComponent"],
                _components_translations_settings_components_create_translation_create_translation_component__WEBPACK_IMPORTED_MODULE_32__["CreateTranslationComponent"],
                _components_translations_settings_components_edit_translation_edit_translation_component__WEBPACK_IMPORTED_MODULE_33__["EditTranslationComponent"],
                _components_estimate_settings_estimate_settings_component__WEBPACK_IMPORTED_MODULE_34__["EstimateSettingsComponent"],
                _components_invoice_settings_invoice_settings_component__WEBPACK_IMPORTED_MODULE_35__["InvoiceSettingsComponent"],
                _components_slack_settings_slack_settings_component__WEBPACK_IMPORTED_MODULE_36__["SlackSettingsComponent"],
                _components_paypal_gateway_paypal_gateway_component__WEBPACK_IMPORTED_MODULE_37__["PaypalGatewayComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_16__["SettingsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                angular_checklist__WEBPACK_IMPORTED_MODULE_13__["ChecklistModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_14__["DataTablesModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_9__["NgxEditorModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_10__["ExportAsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TimepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_7__["UiSwitchModule"].forRoot({
                    checkedLabel: 'Active',
                    uncheckedLabel: 'Inactive',
                    color: 'rgb(0, 189, 99)',
                    switchColor: '#FFFFFF',
                    defaultBgColor: '#c6c6c6',
                    defaultBoColor: '#c39ef8'
                }),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"]
            ],
            entryComponents: [
                _components_custom_field_create_custom_field_create_component__WEBPACK_IMPORTED_MODULE_29__["CustomFieldCreateComponent"],
                _components_custom_field_edit_custom_field_edit_component__WEBPACK_IMPORTED_MODULE_30__["CustomFieldEditComponent"],
                _components_translations_settings_components_create_translation_create_translation_component__WEBPACK_IMPORTED_MODULE_32__["CreateTranslationComponent"],
                _components_translations_settings_components_edit_translation_edit_translation_component__WEBPACK_IMPORTED_MODULE_33__["EditTranslationComponent"]
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=modules-settings-settings-module.js.map