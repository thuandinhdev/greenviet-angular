(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-client-client-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client-create/client-create.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client-create/client-create.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\" *ngIf=\"isPageLoaded\">\n\t<form [formGroup]=\"createClientForm\" (ngSubmit)=\"onSubmit()\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t<h4 class=\"card-title\" id=\"basic-layout-form\">{{'clients.title1' | translate}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-user\"></i> {{'clients.headings.head1' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"firstname\">{{'clients.create.fields.first_name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"firstname\" id=\"firstname\" placeholder=\"{{'clients.create.placeholders.placeholder1' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.firstname.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.firstname.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.firstname.errors.required\">{{'clients.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.firstname.errors.maxlength\">{{'clients.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"lastname\">{{'clients.create.fields.last_name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"lastname\" id=\"lastname\" placeholder=\"{{'clients.create.placeholders.placeholder2' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.lastname.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.lastname.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.lastname.errors.required\">{{'clients.create.error_messages.message3' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.lastname.errors.maxlength\">{{'clients.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"email\">{{'clients.create.fields.email' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"{{'clients.create.placeholders.placeholder3' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.email.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.email.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.email.errors.required\">{{'clients.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.email.errors.email\">{{'clients.create.error_messages.message6' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"password\">{{'clients.create.fields.password' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"password\" placeholder=\"{{'clients.create.placeholders.placeholder4' | translate}}\" autocomplete=\"off\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.password.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.password.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.password.errors.required\">{{'clients.create.error_messages.message7' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.password.errors.minlength || clientControl.password.errors.maxlength\">{{'clients.create.error_messages.message8' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"password_confirmation\">{{'clients.create.fields.confirm_password' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"password_confirmation\" id=\"password_confirmation\" placeholder=\"{{'clients.create.placeholders.placeholder5' | translate}}\" autocomplete=\"off\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.password_confirmation.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.password_confirmation.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.password_confirmation.errors.required\">{{'clients.create.error_messages.message9' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.password_confirmation.errors.mustMatch\">{{'clients.create.error_messages.message10' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-user\"></i> {{'clients.headings.head2' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\" formGroupName=\"clients\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"company_name\">{{'clients.create.fields.company_name' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"company_name\" id=\"company_name\" placeholder=\"{{'clients.create.placeholders.placeholder6' | translate}}\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"company_email\">{{'clients.create.fields.company_email' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" formControlName=\"company_email\" id=\"company_email\" placeholder=\"{{'clients.create.placeholders.placeholder7' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.clients.controls.company_email.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.clients.controls.company_email.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.clients.controls.company_email.errors.email\">{{'clients.create.error_messages.message6' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"company_phone\">{{'clients.create.fields.company_phone' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"xxxxxxxxxx\" formControlName=\"company_phone\" id=\"company_phone\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.clients.controls.company_phone.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.clients.controls.company_phone.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.clients.controls.company_phone.errors.pattern\">{{'clients.create.error_messages.message12' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"company_mobile\">{{'clients.create.fields.company_mobile' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"xxxxxxxxxx\" formControlName=\"company_mobile\" id=\"company_mobile\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.clients.controls.company_mobile.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.clients.controls.company_mobile.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.clients.controls.company_mobile.errors.pattern\">{{'clients.create.error_messages.message14' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"company_country\">{{'clients.create.fields.company_country' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"countries\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"code\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"company_country\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'clients.create.placeholders.placeholder8' | translate}}\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"company_country\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"company_city\">{{'clients.create.fields.company_city' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"company_city\" placeholder=\"{{'clients.create.placeholders.placeholder9' | translate}}\" id=\"company_city\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"company_zipcode\">{{'clients.create.fields.zip_code' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"company_zipcode\" placeholder=\"{{'clients.create.placeholders.placeholder10' | translate}}\" id=\"company_zipcode\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"company_fax\">{{'clients.create.fields.company_fax' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"company_fax\" placeholder=\"{{'clients.create.placeholders.placeholder11' | translate}}\" id=\"company_fax\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"website\">{{'clients.create.fields.company_website' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"website\" placeholder=\"{{'clients.create.placeholders.placeholder12' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.clients.controls.website.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.clients.controls.website.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.clients.controls.website.errors.pattern\">{{'clients.create.error_messages.message15' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"skype_id\">{{'clients.create.fields.skype' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"skype_id\" placeholder=\"{{'clients.create.placeholders.placeholder13' | translate}}\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"company_address\">{{'clients.create.fields.company_address' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"company_address\" id=\"company_address\" placeholder=\"{{'clients.create.placeholders.placeholder14' | translate}}\"></textarea>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-server\"></i> {{'clients.headings.head3' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\" formGroupName=\"clients\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"hosting_company\">{{'clients.create.fields.hosting_company' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"hosting_company\" placeholder=\"{{'clients.create.placeholders.placeholder15' | translate}}\" id=\"hosting_company\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"host_username\">{{'clients.create.fields.username' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"host_username\" placeholder=\"{{'clients.create.placeholders.placeholder16' | translate}}\" id=\"host_username\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"host_password\">{{'clients.create.fields.password' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"host_password\" placeholder=\"{{'clients.create.placeholders.placeholder17' | translate}}\" id=\"host_password\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"host_port\">{{'clients.create.fields.port' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"host_port\" placeholder=\"{{'clients.create.placeholders.placeholder18' | translate}}\" id=\"host_port\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">&nbsp;</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-user\"></i> {{'clients.headings.head4' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"user_generated_id\">{{'clients.create.fields.client_ID' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"user_generated_id\" id=\"user_generated_id\" placeholder=\"USR000\" readonly [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.user_generated_id.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.user_generated_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.user_generated_id.errors.required\">{{'clients.create.error_messages.message17' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"username\">{{'clients.create.fields.username' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend no-borders no-paddings\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text font-12\" id=\"usernamePrepend\">@</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"{{'clients.create.placeholders.placeholder19' | translate}}\" aria-describedby=\"usernamePrepend\" formControlName=\"username\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.username.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.username.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.username.errors.required\">{{'clients.create.error_messages.message19' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.username.errors.minlength || clientControl.username.errors.maxlength || clientControl.username.errors.pattern\">{{'clients.create.error_messages.message20' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"language\">{{'clients.create.fields.language' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"languages\" \n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\" \n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"name\" \n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"language\" \n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"language\" \n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'clients.create.placeholders.placeholder22' | translate}}\" \n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"language\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-mail\"></i> {{'clients.headings.head5' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"mobile\">{{'clients.create.fields.mobile' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"xxxxxxxxxx\" formControlName=\"mobile\" id=\"mobile\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.mobile.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.mobile.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.mobile.errors.pattern\">{{'clients.create.error_messages.message21' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"phone\">{{'clients.create.fields.phone' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"xxxxxxxxxx\" formControlName=\"phone\" id=\"phone\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.phone.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.phone.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.phone.errors.pattern\">{{'clients.create.error_messages.message22' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"skype\">{{'clients.create.fields.skype' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"{{'clients.create.placeholders.placeholder20' | translate}}\" formControlName=\"skype\" id=\"skype\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"country\">{{'clients.create.fields.country' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"countries\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"code\" \n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"country\" \n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'clients.create.placeholders.placeholder21' | translate}}\" \n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"country\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"address\">{{'clients.create.fields.address' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"address\" id=\"address\" placeholder=\"{{'clients.create.placeholders.placeholder27' | translate}}\"></textarea>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-file-text\"></i> {{'clients.headings.head6' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>{{'clients.create.fields.profile_photo' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"hidden\" formControlName=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropzone dz-clickable\" #profiledropzone>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dz-default dz-message\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span><strong>{{'clients.create.error_messages.message23' | translate}}</strong></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"people-lists text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a *ngFor=\"let avatar of avatars;\" (click)=\"setAvatar(avatar)\" [ngClass]=\"{active: isActive(avatar)}\" class=\"btn btn-profile-danger rounded-circle text-dark\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/profile/{{avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.department_roles.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label>{{'clients.create.fields.departments_roles' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select\t[items]=\"departmentsRoles\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tgroupBy=\"roles\"\n\t\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectableGroup]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"departmentRolesChange($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"department_roles\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'clients.create.placeholders.placeholder23' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-optgroup-tmp let-item=\"item\">{{item.name}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">{{item.name}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.department_roles.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.department_roles.errors.required\">{{'clients.create.error_messages.message24' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-file-text\"></i> {{'clients.headings.head7' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\" formGroupName=\"clients\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"facebook\">{{'clients.create.fields.facebook_URL' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"facebook\" placeholder=\"{{'clients.create.placeholders.placeholder24' | translate}}\" id=\"facebook\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"twitter\">{{'clients.create.fields.twitter_URL' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"twitter\" placeholder=\"{{'clients.create.placeholders.placeholder25' | translate}}\" id=\"twitter\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"linkedin\">{{'clients.create.fields.linkedIn_URL' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"linkedin\" placeholder=\"{{'clients.create.placeholders.placeholder26' | translate}}\" id=\"linkedin\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12 text-right\">\n\t\t\t\t<a [routerLink]=\"['/clients']\" class=\"btn btn-cancel\">{{'common.cancel' | translate}}</a>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-submit\">{{'common.create' | translate}}</button>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client-detail/client-detail.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client-detail/client-detail.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"detail-page\" *ngIf=\"isPageLoaded\">\n    <div class=\"card\">\n        <div class=\"card-header border-bottom\">\n            <h4 class=\"main-title\"><span>{{client.firstname}} {{client.lastname}}</span></h4>\n            <button class=\"btn btn-create mb-0 \" [routerLink]=\"['/users/profile', client.id]\" tooltip=\"{{'common.profile' | translate}}\"><i class=\"fa fa-eye\"></i></button>\n        </div>\n        <div class=\"card-body p-2\">\n            <div class=\"row\">\n                <!-- <form class=\"form-body\"> -->\n                    <div class=\"col-md-12\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\n                                <label>{{'clients.create.fields.company_name' | translate}}</label>\n                                <div class=\"detail-inline\">{{client.clients.company_name}}</div>\n                            </div>\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\n                                <label>{{'clients.create.fields.company_email' | translate}}</label>\n                                <div class=\"detail-inline\">{{client.clients.company_email}}</div>\n                            </div>\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\n                                <label>{{'clients.create.fields.company_phone' | translate}}</label>\n                                <div class=\"detail-inline\">{{client.clients.company_phone}}</div>\n                            </div>\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\n                                <label>{{'clients.create.fields.company_address' | translate}}</label>\n                                <div class=\"detail-inline\">{{client.clients.company_address}}</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <h4 class=\"detail-page-title\"><span>{{'clients.headings.head3' | translate}}</span></h4>\n                        <div class=\"row\">\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\n                                <label>{{'clients.create.fields.hosting_company' | translate}}</label>\n                                <div class=\"detail-inline\">{{client.clients.hosting_company}}</div>\n                            </div>\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\n                                <label>{{'clients.create.fields.username' | translate}}</label>\n                                <div class=\"detail-inline\">{{client.clients.host_username}}</div>\n                            </div>\n                            <div class=\"col-lg-4 col-md-6 mb-3\">\n                                <label>{{'clients.create.fields.port' | translate}}</label>\n                                <div class=\"detail-inline\">{{client.clients.host_port}}</div>\n                            </div>\n                        </div>\n                    </div>\n                <!-- </form> -->\n            </div>\n        </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client-edit/client-edit.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client-edit/client-edit.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\" *ngIf=\"isPageLoaded\">\n\t<form [formGroup]=\"editClientForm\" (ngSubmit)=\"onSubmit()\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t<h4 class=\"card-title\" id=\"basic-layout-form\">{{'clients.title2' | translate}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-user\"></i> {{'clients.headings.head1' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"firstname\">{{'clients.create.fields.first_name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"firstname\" id=\"firstname\" placeholder=\"{{'clients.create.placeholders.placeholder1' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.firstname.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.firstname.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.firstname.errors.required\">{{'clients.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.firstname.errors.maxlength\">{{'clients.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"lastname\">{{'clients.create.fields.last_name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"lastname\" id=\"lastname\" placeholder=\"{{'clients.create.placeholders.placeholder2' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.lastname.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.lastname.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.lastname.errors.required\">{{'clients.create.error_messages.message3' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.lastname.errors.maxlength\">{{'clients.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"email\">{{'clients.create.fields.email' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"{{'clients.create.placeholders.placeholder3' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.email.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.email.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.email.errors.required\">{{'clients.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.email.errors.email\">{{'clients.create.error_messages.message6' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-user\"></i> {{'clients.headings.head2' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\" formGroupName=\"clients\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"company_name\">{{'clients.create.fields.company_name' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"company_name\" id=\"company_name\" placeholder=\"{{'clients.create.placeholders.placeholder6' | translate}}\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"company_email\">{{'clients.create.fields.company_email' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" formControlName=\"company_email\" id=\"company_email\" placeholder=\"{{'clients.create.placeholders.placeholder7' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.clients.controls.company_email.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.clients.controls.company_email.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.clients.controls.company_email.errors.email\">{{'clients.create.error_messages.message6' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"company_phone\">{{'clients.create.fields.company_phone' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"xxxxxxxxxx\" formControlName=\"company_phone\" id=\"company_phone\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.clients.controls.company_phone.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.clients.controls.company_phone.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.clients.controls.company_phone.errors.pattern\">{{'clients.create.error_messages.message12' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"company_mobile\">{{'clients.create.fields.company_mobile' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"xxxxxxxxxx\" formControlName=\"company_mobile\" id=\"company_mobile\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.clients.controls.company_mobile.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.clients.controls.company_mobile.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.clients.controls.company_mobile.errors.pattern\">{{'clients.create.error_messages.message14' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"company_country\">{{'clients.create.fields.company_country' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"countries\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"code\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"company_country\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'clients.create.placeholders.placeholder8' | translate}}\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"company_country\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"company_city\">{{'clients.create.fields.company_city' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"company_city\" placeholder=\"{{'clients.create.placeholders.placeholder9' | translate}}\" id=\"company_city\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"company_zipcode\">{{'clients.create.fields.zip_code' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"company_zipcode\" placeholder=\"{{'clients.create.placeholders.placeholder10' | translate}}\" id=\"company_zipcode\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"company_fax\">{{'clients.create.fields.company_fax' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"company_fax\" placeholder=\"{{'clients.create.placeholders.placeholder11' | translate}}\" id=\"company_fax\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"website\">{{'clients.create.fields.company_website' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"website\" placeholder=\"{{'clients.create.placeholders.placeholder12' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.clients.controls.website.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.clients.controls.website.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.clients.controls.website.errors.pattern\">{{'clients.create.error_messages.message15' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"skype_id\">{{'clients.create.fields.skype' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"skype_id\" placeholder=\"{{'clients.create.placeholders.placeholder13' | translate}}\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"company_address\">{{'clients.create.fields.company_address' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"company_address\" id=\"company_address\" placeholder=\"{{'clients.create.placeholders.placeholder14' | translate}}\"></textarea>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-server\"></i> {{'clients.headings.head3' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\" formGroupName=\"clients\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"hosting_company\">{{'clients.create.fields.hosting_company' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"hosting_company\" placeholder=\"{{'clients.create.placeholders.placeholder15' | translate}}\" id=\"hosting_company\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"host_username\">{{'clients.create.fields.username' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"host_username\" placeholder=\"{{'clients.create.placeholders.placeholder16' | translate}}\" id=\"host_username\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"host_password\">{{'clients.create.fields.password' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"host_password\" placeholder=\"{{'clients.create.placeholders.placeholder17' | translate}}\" id=\"host_password\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"host_port\">{{'clients.create.fields.port' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"host_port\" placeholder=\"{{'clients.create.placeholders.placeholder18' | translate}}\" id=\"host_port\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">&nbsp;</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-user\"></i> {{'clients.headings.head4' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"user_generated_id\">{{'clients.create.fields.client_ID' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"user_generated_id\" id=\"user_generated_id\" placeholder=\"USR000\" readonly [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.user_generated_id.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.user_generated_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.user_generated_id.errors.required\">{{'clients.create.error_messages.message17' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"username\">{{'clients.create.fields.username' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend no-borders no-paddings\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text font-12\" id=\"usernamePrepend\">@</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\" aria-describedby=\"usernamePrepend\" formControlName=\"username\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.username.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.username.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.username.errors.required\">{{'clients.create.error_messages.message19' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.username.errors.minlength || clientControl.username.errors.maxlength || clientControl.username.errors.pattern\">{{'clients.create.error_messages.message20' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"language\">{{'clients.create.fields.language' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"languages\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"language\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"language\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'clients.create.placeholders.placeholder22' | translate}}\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"language\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-mail\"></i> {{'clients.headings.head5' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"mobile\">{{'clients.create.fields.mobile' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"xxxxxxxxxx\" formControlName=\"mobile\" id=\"mobile\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.mobile.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.mobile.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.mobile.errors.pattern\">{{'clients.create.error_messages.message21' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"phone\">{{'clients.create.fields.phone' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"xxxxxxxxxx\" formControlName=\"phone\" id=\"phone\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.phone.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.phone.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.phone.errors.pattern\">{{'clients.create.error_messages.message22' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"skype\">{{'clients.create.fields.skype' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"{{'clients.create.placeholders.placeholder20' | translate}}\" formControlName=\"skype\" id=\"skype\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"country\">{{'clients.create.fields.country' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"countries\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"code\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"country\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'clients.create.placeholders.placeholder21' | translate}}\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"country\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"address\">{{'clients.create.fields.address' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"address\" id=\"address\" placeholder=\"{{'clients.create.placeholders.placeholder27' | translate}}\"></textarea>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-file-text\"></i> {{'clients.headings.head6' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>{{'clients.create.fields.profile_photo' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"hidden\" formControlName=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropzone dz-clickable\" #profiledropzone>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dz-preview dz-image-preview\" *ngIf=\"isProfileLoaded && client.avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dz-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/profile/{{client.avatar}}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-default btn-sm btn-block\" (click)=\"removeDropzoneImage()\">{{'common.remove_file' | translate}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dz-default dz-message\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span><strong>{{'clients.create.error_messages.message23' | translate}}</strong></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"people-lists text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a *ngFor=\"let avatar of avatars;\" (click)=\"setAvatar(avatar)\" [ngClass]=\"{active: isActive(avatar)}\" class=\"btn btn-profile-danger rounded-circle text-dark\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/profile/{{avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && clientControl.department_roles.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label>{{'clients.create.fields.departments_roles' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [items]=\"departmentsRoles\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tgroupBy=\"department_name\"\n\t\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectableGroup]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"departmentRolesChange($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"department_roles\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'clients.create.placeholders.placeholder23' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-optgroup-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.department_name || 'Unnamed group'}}\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && clientControl.department_roles.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"clientControl.department_roles.errors.required\">{{'clients.create.error_messages.message24' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-file-text\"></i> {{'clients.headings.head7' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\" formGroupName=\"clients\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"facebook\">{{'clients.create.fields.facebook_URL' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"facebook\" placeholder=\"{{'clients.create.placeholders.placeholder24' | translate}}\" id=\"facebook\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"twitter\">{{'clients.create.fields.twitter_URL' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"twitter\" placeholder=\"{{'clients.create.placeholders.placeholder25' | translate}}\" id=\"twitter\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"linkedin\">{{'clients.create.fields.linkedIn_URL' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"linkedin\" placeholder=\"{{'clients.create.placeholders.placeholder26' | translate}}\" id=\"linkedin\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12 text-right\">\n\t\t\t\t<a [routerLink]=\"['/clients']\" class=\"btn btn-cancel\">{{'common.cancel' | translate}}</a>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-submit\">{{'common.update' | translate}}</button>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client/client.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client/client.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card pl-2 pr-2\">\n\t\t\t\t<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t\t\t\t\t<h4 class=\"main-title mt-2\"><span>{{'clients.title' | translate}}</span></h4>\n\t\t\t\t\t<a class=\"btn btn-create mb-0\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'clients_create']\" [routerLink]=\"['/clients/create']\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-content pt-3 pb-3\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\" table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl overflow-x-auto\" >\n\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"clients_table\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>{{'clients.columns.photo' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'clients.columns.first_name' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'clients.columns.last_name' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'clients.columns.username' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'clients.columns.company_name' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'clients.columns.company_email' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'clients.columns.status' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'clients.columns.departments_roles' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'clients.columns.actions' | translate}}</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody *ngIf=\"clients?.length != 0\">\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let client of clients; index as i\">\n\t\t\t\t\t\t\t\t\t\t<td class=\"people-lists\">\n\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', client.id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{client.firstname}} {{client.lastname}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"client.avatar\" src=\"{{apiUrl}}/uploads/profile/{{client.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!client.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngxPermissionsOnly=\"['admin', 'super_admin', 'clients_edit']; else elseBlock1; then thenBlock1\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock1>{{client.firstname}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #thenBlock1>\n\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-input [name]=\"'firstname'\" [type]=\"'text'\" [elementFor]=\"'clients.inline_edit.first_name' | translate\" [fieldValue]=\"client.firstname\" [maxLength]=\"20\" [isRequired]=\"'true'\" (updateValue)=\"saveClientDetail(i, 'firstname', $event);\"></inline-edit-input>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngxPermissionsOnly=\"['admin', 'super_admin', 'clients_edit']; else elseBlock2; then thenBlock2\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock2>{{client.lastname}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #thenBlock2>\n\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-input [name]=\"'lastname'\" [type]=\"'text'\" [elementFor]=\"'clients.inline_edit.last_name' | translate\" [fieldValue]=\"client.lastname\" [maxLength]=\"20\" [isRequired]=\"'true'\" (updateValue)=\"saveClientDetail(i, 'lastname', $event);\"></inline-edit-input>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['profile', client.id]\" tooltip=\"{{'common.view' | translate}}\">{{client.username}}</a>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{client.clients.company_name}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{client.clients.company_email}}</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngxPermissionsOnly=\"['admin', 'super_admin', 'clients_edit']; else elseBlock; then thenBlock\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"budges-status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"completed\" *ngIf=\"client.is_active == '1'\">{{'common.status.active' | translate}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"cancel\" *ngIf=\"client.is_active == '0'\">{{'common.status.deactive' | translate}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #thenBlock>\n\t\t\t\t\t\t\t\t\t\t\t\t<ui-switch [checked]=\"client.is_active == '1' ? true : false\" (valueChange)=\"setActiveDeactiveUser($event, client)\"></ui-switch>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template *ngIf=\"client.roles?.length == 0;else elseBlock4\">-</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock4>\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\"let role of departments[client.id]\" class=\"completed\">{{role.role_name}} ({{role.department_name}})</span>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"actions-dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngIf=\"client.email_verified == '0' || client.email_verified == 0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin']\" (click)=\"sendInviteUserMail(client.id)\" class=\"dropdown-item btn btn-invite btn-raised\" tooltip=\"{{'common.invite' | translate}}\"><i class=\"fa fa-envelope-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin', 'clients_edit']\" [routerLink]=\"['edit', client.id]\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin', 'clients_delete']\" (click)=\"deleteClient(client.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot *ngIf=\"clients?.length == 0\" class=\"tfoot_dt\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n");

/***/ }),

/***/ "./src/app/core/services/client.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/client.service.ts ***!
  \*************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ClientService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/clients");
    };
    ClientService.prototype.getClientsWithTrashed = function () {
        return this.http.get(this.apiUrl + "/api/clients/withtrashed");
    };
    ClientService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/clients/" + id);
    };
    ClientService.prototype.create = function (client) {
        return this.http.post(this.apiUrl + "/api/clients", client);
    };
    ClientService.prototype.update = function (client) {
        return this.http.put(this.apiUrl + "/api/clients/" + client.id, client);
    };
    ClientService.prototype.delete = function (id, params) {
        return this.http.post(this.apiUrl + "/api/clients/delete/" + id, params);
    };
    ClientService.prototype.setActiveDeactiveUser = function (client) {
        return this.http.put(this.apiUrl + "/api/clients/status-change/" + client.id, client);
    };
    ClientService.prototype.sendInviteUserMail = function (id) {
        return this.http.get(this.apiUrl + "/api/users/invite/" + id);
    };
    ClientService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/modules/admin/client/client-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/admin/client/client-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ClientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRoutingModule", function() { return ClientRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_client_client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/client/client.component */ "./src/app/modules/admin/client/pages/client/client.component.ts");
/* harmony import */ var _pages_client_create_client_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/client-create/client-create.component */ "./src/app/modules/admin/client/pages/client-create/client-create.component.ts");
/* harmony import */ var _pages_client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/client-edit/client-edit.component */ "./src/app/modules/admin/client/pages/client-edit/client-edit.component.ts");
/* harmony import */ var _pages_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/client-detail/client-detail.component */ "./src/app/modules/admin/client/pages/client-detail/client-detail.component.ts");








var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _pages_client_client_component__WEBPACK_IMPORTED_MODULE_4__["ClientComponent"],
            },
            {
                path: 'create',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: "common.create",
                        icon: "fa fa-user-circle",
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'clients_create']
                    }
                },
                component: _pages_client_create_client_create_component__WEBPACK_IMPORTED_MODULE_5__["ClientCreateComponent"]
            },
            {
                path: 'edit/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: "common.edit",
                        icon: "fa fa-user-circle",
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'clients_edit']
                    }
                },
                component: _pages_client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_6__["ClientEditComponent"]
            },
            {
                path: 'profile/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: "common.detail",
                        icon: "fa fa-user-circle",
                        show: true,
                        isHome: true
                    }
                },
                component: _pages_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_7__["ClientDetailComponent"]
            }
        ]
    }
];
var ClientRoutingModule = /** @class */ (function () {
    function ClientRoutingModule() {
    }
    ClientRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ClientRoutingModule);
    return ClientRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/client/client.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/admin/client/client.module.ts ***!
  \*******************************************************/
/*! exports provided: ClientModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./client-routing.module */ "./src/app/modules/admin/client/client-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_client_client_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/client/client.component */ "./src/app/modules/admin/client/pages/client/client.component.ts");
/* harmony import */ var _pages_client_create_client_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/client-create/client-create.component */ "./src/app/modules/admin/client/pages/client-create/client-create.component.ts");
/* harmony import */ var _pages_client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/client-edit/client-edit.component */ "./src/app/modules/admin/client/pages/client-edit/client-edit.component.ts");
/* harmony import */ var _pages_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/client-detail/client-detail.component */ "./src/app/modules/admin/client/pages/client-detail/client-detail.component.ts");



















var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_client_client_component__WEBPACK_IMPORTED_MODULE_15__["ClientComponent"],
                _pages_client_create_client_create_component__WEBPACK_IMPORTED_MODULE_16__["ClientCreateComponent"],
                _pages_client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_17__["ClientEditComponent"],
                _pages_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_18__["ClientDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _client_routing_module__WEBPACK_IMPORTED_MODULE_13__["ClientRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_12__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_9__["NgxPermissionsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_8__["UiSwitchModule"].forRoot({
                    checkedLabel: 'Active',
                    uncheckedLabel: 'Inactive',
                    color: 'rgb(0, 189, 99)',
                    switchColor: '#FFFFFF',
                    defaultBgColor: '#c6c6c6',
                    defaultBoColor: '#c39ef8'
                }),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            ]
        })
    ], ClientModule);
    return ClientModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/admin/client/pages/client-create/client-create.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/admin/client/pages/client-create/client-create.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY2xpZW50L3BhZ2VzL2NsaWVudC1jcmVhdGUvY2xpZW50LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/client/pages/client-create/client-create.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/admin/client/pages/client-create/client-create.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ClientCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCreateComponent", function() { return ClientCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_department_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/department.service */ "./src/app/core/services/department.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/translation.service */ "./src/app/core/services/translation.service.ts");
/* harmony import */ var _core_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../../core/helpers/must-match.validator */ "./src/app/core/helpers/must-match.validator.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_14__);















var ClientCreateComponent = /** @class */ (function () {
    function ClientCreateComponent(translate, router, formBuilder, toastr, departmentService, userService, clientService, helperService, translationService) {
        this.translate = translate;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.departmentService = departmentService;
        this.userService = userService;
        this.clientService = clientService;
        this.helperService = helperService;
        this.translationService = translationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl;
        this.avatars = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_12__["UserAvatars"];
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
    }
    ClientCreateComponent.prototype.ngOnInit = function () {
        this.getDepartments();
        this.getCountries();
        this.getLanguages();
    };
    ClientCreateComponent.prototype.loadForms = function () {
        var that = this;
        this.createClientForm = this.formBuilder.group({
            user_generated_id: ['USR0001', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S*$/)]],
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            password_confirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            skype: [''],
            country: [null],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
            language: ['en'],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
            address: [''],
            avatar: [null],
            department_roles: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clients: this.formBuilder.group({
                company_name: [''],
                company_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                company_phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
                company_mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)]],
                company_zipcode: [''],
                company_city: [''],
                company_country: [null],
                company_fax: [''],
                company_address: [''],
                website: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/)],
                skype_id: [''],
                facebook: [''],
                twitter: [''],
                linkedin: [''],
                hosting_company: [''],
                host_name: [''],
                host_username: [''],
                host_password: [''],
                host_port: ['']
            })
        }, {
            validator: Object(_core_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_11__["MustMatch"])('password', 'password_confirmation')
        });
        this.getUserGeneratedId();
        this.isPageLoaded = true;
        setTimeout(function () {
            that.loadDropzone();
        });
    };
    Object.defineProperty(ClientCreateComponent.prototype, "clientControl", {
        get: function () {
            return this.createClientForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ClientCreateComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_14__(this.profiledropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_14__["createElement"]("<button class=\'btn btn-sm btn-block\'>" + that.translate.instant('common.remove_file') + "</button>");
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
                            that.createClientForm.patchValue({ avatar: reader_1.result });
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.createClientForm.patchValue({ avatar: '' });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    ClientCreateComponent.prototype.setAvatar = function (avatar) {
        if (avatar === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = avatar;
        }
        this.createClientForm.patchValue({ avatar: this.selected });
    };
    ClientCreateComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    ClientCreateComponent.prototype.departmentRolesChange = function (event) {
        this.selectedDepartmentRoles = event;
    };
    ClientCreateComponent.prototype.getDepartments = function () {
        var _this_1 = this;
        this.departmentService.getDepartmentsClientsRoles()
            .subscribe(function (data) {
            _this_1.departmentsRoles = data;
            _this_1.loadForms();
        });
    };
    ClientCreateComponent.prototype.getLanguages = function () {
        var _this_1 = this;
        this.translationService.getAllActiveTranslations()
            .subscribe(function (data) {
            _this_1.languages = data;
        });
    };
    ClientCreateComponent.prototype.getCountries = function () {
        var _this_1 = this;
        this.helperService.getCountries()
            .subscribe(function (data) {
            _this_1.countries = data;
        });
    };
    ClientCreateComponent.prototype.getUserGeneratedId = function () {
        var _this_1 = this;
        this.userService.getUserGeneratedId().subscribe(function (data) {
            _this_1.createClientForm.patchValue({ user_generated_id: data });
        });
    };
    ClientCreateComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.createClientForm.value.department_roles = [];
        this.isFormSubmitted = true;
        if (this.createClientForm.invalid) {
            return;
        }
        if (this.selectedDepartmentRoles) {
            for (var iRow in this.selectedDepartmentRoles) {
                if (this.selectedDepartmentRoles[iRow].pivot) {
                    this.createClientForm.value.department_roles.push(this.selectedDepartmentRoles[iRow].pivot);
                }
            }
        }
        this.clientService.create(this.createClientForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('clients.messages.create'), _this_1.translate.instant('clients.title'));
            _this_1.router.navigate(['clients']);
        });
    };
    ClientCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_department_service__WEBPACK_IMPORTED_MODULE_6__["DepartmentService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] },
        { type: _core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__["TranslationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('profiledropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ClientCreateComponent.prototype, "profiledropzone", void 0);
    ClientCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client-create/client-create.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-create.component.scss */ "./src/app/modules/admin/client/pages/client-create/client-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_department_service__WEBPACK_IMPORTED_MODULE_6__["DepartmentService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"],
            _core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__["TranslationService"]])
    ], ClientCreateComponent);
    return ClientCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/client/pages/client-detail/client-detail.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/admin/client/pages/client-detail/client-detail.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY2xpZW50L3BhZ2VzL2NsaWVudC1kZXRhaWwvY2xpZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/client/pages/client-detail/client-detail.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/admin/client/pages/client-detail/client-detail.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ClientDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailComponent", function() { return ClientDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");




var ClientDetailComponent = /** @class */ (function () {
    function ClientDetailComponent(route, router, clientService) {
        this.route = route;
        this.router = router;
        this.clientService = clientService;
        this.isPageLoaded = false;
    }
    ClientDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.getClientById(params.get('id'));
        });
    };
    ClientDetailComponent.prototype.getClientById = function (id) {
        var _this = this;
        this.clientService.getById(id)
            .subscribe(function (data) {
            _this.client = data;
            _this.isPageLoaded = true;
        });
    };
    ClientDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] }
    ]; };
    ClientDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client-detail/client-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-detail.component.scss */ "./src/app/modules/admin/client/pages/client-detail/client-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]])
    ], ClientDetailComponent);
    return ClientDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/client/pages/client-edit/client-edit.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/admin/client/pages/client-edit/client-edit.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY2xpZW50L3BhZ2VzL2NsaWVudC1lZGl0L2NsaWVudC1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/client/pages/client-edit/client-edit.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin/client/pages/client-edit/client-edit.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ClientEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEditComponent", function() { return ClientEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_department_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/department.service */ "./src/app/core/services/department.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/translation.service */ "./src/app/core/services/translation.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_12__);













var ClientEditComponent = /** @class */ (function () {
    function ClientEditComponent(translate, route, router, formBuilder, toastr, departmentService, clientService, helperService, translationService) {
        this.translate = translate;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.departmentService = departmentService;
        this.clientService = clientService;
        this.helperService = helperService;
        this.translationService = translationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].apiUrl;
        this.avatars = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_10__["UserAvatars"];
        this.isFormSubmitted = false;
        this.departmentsRoles = [];
        this.departmentsObj = [];
        this.isPageLoaded = false;
        this.isProfileLoaded = true;
    }
    ClientEditComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.route.paramMap.subscribe(function (params) {
            _this_1.getClientById(params.get('id'));
        });
        this.getCountries();
        this.getLanguages();
    };
    ClientEditComponent.prototype.loadForms = function () {
        this.editClientForm = this.formBuilder.group({
            id: [this.client.id],
            user_generated_id: [this.client.user_generated_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: [this.client.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S*$/)]],
            firstname: [this.client.firstname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            lastname: [this.client.lastname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            email: [this.client.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            skype: [this.client.skype],
            country: [this.client.country],
            mobile: [this.client.mobile, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
            language: [this.client.language],
            phone: [this.client.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
            address: [this.client.address],
            avatar: [this.client.avatar],
            department_roles: [this.departmentsObj, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clients: this.formBuilder.group({
                company_name: [this.client.clients.company_name],
                company_email: [this.client.clients.company_email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                company_phone: [this.client.clients.company_phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)]],
                company_mobile: [this.client.clients.company_mobile, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)]],
                company_zipcode: [this.client.clients.company_zipcode],
                company_city: [this.client.clients.company_city],
                company_country: [this.client.clients.company_country],
                company_fax: [this.client.clients.company_fax],
                company_address: [this.client.clients.company_address],
                website: [this.client.clients.website, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/)],
                skype_id: [this.client.clients.skype_id],
                facebook: [this.client.clients.facebook],
                twitter: [this.client.clients.twitter],
                linkedin: [this.client.clients.linkedin],
                hosting_company: [this.client.clients.hosting_company],
                host_name: [this.client.clients.host_name],
                host_username: [this.client.clients.host_username],
                host_password: [this.client.clients.host_password],
                host_port: [this.client.clients.host_port]
            })
        });
        this.setAvatar(this.client.avatar);
        this.selectedDepartmentRoles = this.removeUnderscoreIds(this.departmentsObj);
        this.isPageLoaded = true;
    };
    Object.defineProperty(ClientEditComponent.prototype, "clientControl", {
        get: function () {
            return this.editClientForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ClientEditComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_12__(this.profiledropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_12__["createElement"]("<button class=\'btn btn-sm btn-block\'>" + that.translate.instant('common.remove_file') + "</button>");
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
                            that.editClientForm.patchValue({ avatar: reader_1.result });
                            that.isProfileLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.editClientForm.patchValue({ avatar: null });
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
    ClientEditComponent.prototype.removeDropzoneImage = function () {
        this.isProfileLoaded = false;
        this.editClientForm.patchValue({ avatar: null });
    };
    ClientEditComponent.prototype.setAvatar = function (avatar) {
        if (avatar === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = avatar;
        }
        this.editClientForm.patchValue({ avatar: this.selected });
    };
    ClientEditComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    ClientEditComponent.prototype.getClientById = function (id) {
        var _this_1 = this;
        this.clientService.getById(id)
            .subscribe(function (data) {
            _this_1.client = data;
            _this_1.getDepartments();
        });
    };
    ClientEditComponent.prototype.getDepartments = function () {
        var _this_1 = this;
        this.departmentService.getDepartmentsClientsRoles()
            .subscribe(function (data) {
            _this_1.getDepartmentsRoles(data);
        });
    };
    ClientEditComponent.prototype.getLanguages = function () {
        var _this_1 = this;
        this.translationService.getAllActiveTranslations()
            .subscribe(function (data) {
            _this_1.languages = data;
        });
    };
    ClientEditComponent.prototype.getCountries = function () {
        var _this_1 = this;
        this.helperService.getCountries()
            .subscribe(function (data) {
            _this_1.countries = data;
        });
    };
    ClientEditComponent.prototype.departmentRolesChange = function (event) {
        this.selectedDepartmentRoles = event;
    };
    ClientEditComponent.prototype.removeUnderscoreIds = function (ids) {
        var idsObj = [];
        for (var iRow in ids) {
            var splitIds = ids[iRow].split("_");
            idsObj.push({
                department_id: splitIds[0],
                role_id: splitIds[1],
            });
        }
        return idsObj;
    };
    ClientEditComponent.prototype.getDepartmentsRoles = function (departments) {
        var that = this;
        for (var iRow in departments) {
            for (var jRow in departments[iRow].roles) {
                this.departmentsRoles.push({
                    id: departments[iRow].id + '_' + departments[iRow].roles[jRow].id,
                    role_id: departments[iRow].roles[jRow].id,
                    name: departments[iRow].roles[jRow].name,
                    department_id: departments[iRow].id,
                    department_name: departments[iRow].name
                });
            }
        }
        for (var iRow in this.client.departments) {
            for (var jRow in this.client.departments[iRow].roles) {
                this.departmentsObj.push(this.client.departments[iRow].id + '_' + this.client.departments[iRow].roles[jRow].id);
            }
        }
        this.loadForms();
        setTimeout(function () {
            that.loadDropzone();
        });
    };
    ClientEditComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.editClientForm.invalid) {
            return;
        }
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // this.router.navigate(['clients']);
        // return;
        this.editClientForm.value.department_roles = this.selectedDepartmentRoles;
        this.editClientForm.value.UserAvatars = this.avatars;
        this.clientService.update(this.editClientForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('clients.messages.update'), _this_1.translate.instant('clients.title'));
            _this_1.router.navigate(['clients']);
        });
    };
    ClientEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_department_service__WEBPACK_IMPORTED_MODULE_6__["DepartmentService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] },
        { type: _core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__["TranslationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('profiledropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ClientEditComponent.prototype, "profiledropzone", void 0);
    ClientEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client-edit/client-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-edit.component.scss */ "./src/app/modules/admin/client/pages/client-edit/client-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_department_service__WEBPACK_IMPORTED_MODULE_6__["DepartmentService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"],
            _core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__["TranslationService"]])
    ], ClientEditComponent);
    return ClientEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/client/pages/client/client.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin/client/pages/client/client.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi9jbGllbnQvcGFnZXMvY2xpZW50L2NsaWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9jbGllbnQvcGFnZXMvY2xpZW50L2NsaWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY2xpZW50L3BhZ2VzL2NsaWVudC9jbGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgICBkaXNwbGF5OiBub25lXG59IiwiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/admin/client/pages/client/client.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin/client/pages/client/client.component.ts ***!
  \***********************************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_14__);















var ClientComponent = /** @class */ (function () {
    function ClientComponent(translate, http, exportAsService, toastr, authenticationService, clientService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.clientService = clientService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dtOptions = {};
        this.clients = [];
        this.departments = [];
        this.departments_roles = [];
        this.avatars = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_11__["UserAvatars"];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'clients_table',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    ClientComponent.prototype.ngOnInit = function () {
        this.loadClientDatatable();
    };
    ClientComponent.prototype.loadClientDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            order: [1, 'asc'],
            dom: '<"html5buttons"B>ltfrtip',
            columns: [
                {
                    'sortable': false,
                    'width': "1%",
                    'target': [0]
                },
                {
                    'sortable': true,
                    'width': "10%",
                    'target': [1]
                },
                {
                    'sortable': true,
                    'width': "10%",
                    'target': [2]
                },
                {
                    'sortable': true,
                    'target': [3]
                },
                {
                    'sortable': false,
                    'target': [4]
                },
                {
                    'sortable': false,
                    'target': [5]
                },
                {
                    'sortable': true,
                    'target': [6]
                },
                {
                    'sortable': false,
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
                    title: this.translate.instant('clients.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('clients.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('clients.title'),
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
                _this.http
                    .post(_this.apiUrl + '/api/all-clients', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.clients = resp.data;
                    _this.loadUserDepartments();
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    ClientComponent.prototype.loadUserDepartments = function () {
        for (var iRow in this.clients) {
            for (var jRow in this.clients[iRow].roles) {
                for (var kRow in this.clients[iRow].roles[jRow].userdepartments) {
                    if ((this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.role_id == this.clients[iRow].roles[jRow].id) && (this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.user_id == this.clients[iRow].id)) {
                        if (!this.departments_roles[this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.user_id + '_' + this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.role_id + '_' + this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.department_id]) {
                            this.departments_roles[this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.user_id + '_' + this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.role_id + '_' + this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.department_id] = [];
                            if (!this.departments[this.clients[iRow].id]) {
                                this.departments[this.clients[iRow].id] = [];
                            }
                            this.departments[this.clients[iRow].id].push({
                                user_id: this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.user_id,
                                role_id: this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.role_id,
                                department_id: this.clients[iRow].roles[jRow].userdepartments[kRow].pivot.department_id,
                                role_name: this.clients[iRow].roles[jRow].name,
                                department_name: this.clients[iRow].roles[jRow].userdepartments[kRow].name
                            });
                        }
                    }
                }
            }
        }
    };
    ClientComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ClientComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ClientComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
            });
            if (_this.clients.length > 0) {
                $('.tfoot_dt').addClass('d-none');
            }
            else {
                $('.tfoot_dt').removeClass('d-none');
            }
        });
    };
    ClientComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, 'clients').subscribe(function () { });
    };
    ClientComponent.prototype.setActiveDeactiveUser = function (value, client) {
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // return;
        var _this = this;
        client.is_active = value;
        this.clientService.setActiveDeactiveUser(client)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('clients.messages.status'), _this.translate.instant('clients.title'));
            _this.rerender();
        }, function (error) {
            _this.rerender();
        });
    };
    ClientComponent.prototype.sendInviteUserMail = function (id) {
        var _this = this;
        this.clientService.sendInviteUserMail(id)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('clients.messages.invite'), _this.translate.instant('clients.title'));
            _this.rerender();
        });
    };
    ClientComponent.prototype.deleteClient = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text3'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                // --
                // this.toastr.error(this.translate.instant('common.not_allowed'));
                // return;
                _this.clientService.delete(id, { 'UserAvatars': _this.avatars }).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('clients.messages.delete'), _this.translate.instant('clients.title'));
                    _this.rerender();
                });
            }
        });
    };
    ClientComponent.prototype.saveClientDetail = function (index, name, value) {
        var _this = this;
        this.clients[index][name] = value;
        this.clients[index]["type"] = "list";
        this.clientService.update(this.clients[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('clients.messages.update'), _this.translate.instant('clients.title'));
            _this.rerender();
        });
    };
    ClientComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_3__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], ClientComponent.prototype, "dtElement", void 0);
    ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/client/pages/client/client.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client.component.scss */ "./src/app/modules/admin/client/pages/client/client.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_3__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-admin-client-client-module.js.map