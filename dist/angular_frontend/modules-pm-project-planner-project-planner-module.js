(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pm-project-planner-project-planner-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/create-project-modal/create-project-modal.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/create-project-modal/create-project-modal.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-product-hunt modal-icon\" aria-hidden=\"true\"></i>&nbsp;{{'projects.title1' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" (click)=\"onCancel()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"createProjectForm\" (ngSubmit)=\"onSubmit()\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"project_name\">{{'projects.create.fields.project_name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"project_name\" id=\"project_name\" placeholder=\"{{'projects.create.placeholders.placeholder1' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.project_name.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.project_name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectControl.project_name.errors.required\">{{'projects.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t\t<div *ngIf=\"projectControl.project_name.errors.maxlength\">{{'projects.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"project_version\">{{'projects.create.fields.version' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.create.placeholders.placeholder2' | translate}}\" formControlName=\"project_version\" id=\"project_version\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.project_version.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.project_version.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectControl.project_version.errors.required\">{{'projects.create.error_messages.message3' | translate}}</div>\n\t\t\t\t\t\t\t<div *ngIf=\"projectControl.project_version.errors.pattern\">{{'projects.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"badge badge-secondary\">{{'projects.budges.version' | translate }}: 1.0, 1.1, 1.2</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.start_date.errors }\">\n\t\t\t\t\t\t<label for=\"start_date\">{{'projects.create.fields.start_date' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" (bsValueChange)=\"startDateChange($event)\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'projects.create.placeholders.placeholder7' | translate}}\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.start_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.start_date.errors.required\">{{'projects.create.error_messages.message9' | translate}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.end_date.errors }\">\n\t\t\t\t\t\t<label for=\"end-date\">{{'projects.create.fields.end_date' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp2=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" [minDate]=\"createProjectForm.get('start_date').value\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'projects.create.placeholders.placeholder8' | translate}}\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.end_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.end_date.errors.required\">{{'projects.create.error_messages.message10' | translate}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\" *ngIf=\"!loginUser.is_client\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"client_id\">{{'projects.create.fields.client_name' | translate}}</label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"clients\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\" \n\t\t\t\t\t\t\tbindLabel=\"firstname\" \n\t\t\t\t\t\t\tbindValue=\"id\" \n\t\t\t\t\t\t\tlabelForId=\"client_id\" \n\t\t\t\t\t\t\tformControlName=\"client_id\" \n\t\t\t\t\t\t\tplaceholder=\"{{'projects.create.placeholders.placeholder3' | translate}}\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">{{item.firstname}} {{item.lastname}}</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"estimated_hours\">{{'projects.create.fields.estimate_hours' | translate}}</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"00:00\" formControlName=\"estimated_hours\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.estimated_hours.errors }\">\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.estimated_hours.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectControl.estimated_hours.errors.pattern\">{{'projects.create.error_messages.message11' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.status.errors }\">\n\t\t\t\t\t\t<label for=\"status\">{{'projects.create.fields.status' | translate}}&nbsp;<span class=\"text-danger\">*</span> </label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"('projects.status' | translate)\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\" \n\t\t\t\t\t\t\tbindLabel=\"label\" \n\t\t\t\t\t\t\tbindValue=\"id\" \n\t\t\t\t\t\t\tlabelForId=\"status\" \n\t\t\t\t\t\t\tformControlName=\"status\" \n\t\t\t\t\t\t\tplaceholder=\"{{'projects.create.placeholders.placeholder4' | translate}}\">\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.status.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectControl.status.errors.required\">{{'projects.create.error_messages.message6' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"assign_to\">{{'projects.create.fields.assigned_group' | translate}}</label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"teams\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"team_name\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"assign_to\"\n\t\t\t\t\t\t\tformControlName=\"assign_to\" \n\t\t\t\t\t\t\tplaceholder=\"{{'projects.create.placeholders.placeholder5' | translate}}\" \n\t\t\t\t\t\t\t(change)=\"assignGroupChange($event)\">\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"assign_members\">{{'projects.create.fields.assigned_To' | translate}}</label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"teamsMembers\"\n\t\t\t\t\t\t\t[multiple]=\"true\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\" \n\t\t\t\t\t\t\tbindLabel=\"firstname\" \n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"assign_members\"\n\t\t\t\t\t\t\tformControlName=\"assign_members\"\n\t\t\t\t\t\t\tplaceholder=\"{{'projects.create.placeholders.placeholder6' | translate}}\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">{{item.firstname}} {{item.lastname}}</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.demo_url.errors }\">\n\t\t\t\t\t\t<label for=\"demo_url\">{{'projects.create.fields.demo_URL' | translate }}</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"https://example.com\" formControlName=\"demo_url\" id=\"demo_url\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.demo_url.errors }\"/>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.demo_url.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectControl.demo_url.errors.pattern\">{{'projects.create.error_messages.message8' | translate }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"type\">{{'projects.create.fields.billing_type' | translate }}</label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"('projects.billing_types' | translate)\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"billing_type\"\n\t\t\t\t\t\t\tformControlName=\"billing_type\"\n\t\t\t\t\t\t\tplaceholder=\"{{'projects.create.placeholders.placeholder9' | translate }}\">\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\" *ngIf=\"createProjectForm.get('billing_type').value == 1 || createProjectForm.get('billing_type').value == 2 || createProjectForm.get('billing_type').value == null\">\n\t\t\t\t\t<div class=\"form-group fixed_rate\">\n\t\t\t\t\t\t<label for=\"price_rate\" *ngIf=\"createProjectForm.get('billing_type').value == 1 || createProjectForm.get('billing_type').value == null\">{{'projects.create.fields.fixed_price' | translate }}</label>\n\t\t\t\t\t\t<label for=\"price_rate\" *ngIf=\"createProjectForm.get('billing_type').value == 2\">{{'projects.create.fields.hourly_rate' | translate }}</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.create.placeholders.placeholder10' | translate }}\" formControlName=\"price_rate\" id=\"price_rate\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.price_rate.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.price_rate.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectControl.price_rate.errors.minlength\">{{'projects.create.error_messages.message12' | translate }}</div>\n\t\t\t\t\t\t\t<div *ngIf=\"projectControl.price_rate.errors.pattern\">{{'projects.create.error_messages.message13' | translate }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"project_hours\">{{'projects.create.fields.project_hours' | translate }}</label><br>\n\t\t\t\t\t\t<label class=\"form-check checkbox-container\">\n\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" formControlName=\"project_hours\" id=\"project_hours\">\n\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\" *ngIf=\"!createProjectForm.get('project_hours').value\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>{{'projects.create.fields.progress' | translate }}</label>\n\t\t\t\t\t\t<ng5-slider [options]=\"progressOptions\" formControlName=\"progress\"></ng5-slider>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>{{'projects.create.fields.project_logo' | translate }}</label>\n\t\t\t\t\t\t<input type=\"hidden\" formControlName=\"project_logo\">\n\t\t\t\t\t\t<div class=\"dropzone dz-clickable\" #logodropzone>\n\t\t\t\t\t\t\t<div class=\"dz-default dz-message\">\n\t\t\t\t\t\t\t\t<span><strong>{{'projects.create.error_messages.message14' | translate }}</strong></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"people-lists text-center\">\n\t\t\t\t\t\t\t<a *ngFor=\"let logo of logos;\" (click)=\"setLogos(logo)\" [ngClass]=\"{active: isActive(logo)}\" class=\"btn btn-profile-info rounded-circle text-dark\" >\n\t\t\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/project/{{logo}}\" class=\"img-sm rounded-circle\" alt=\"Project Logo\" />\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\" *ngIf=\"customFields.length > 0\">\n\t\t\t\t\t<app-show-custom-field-element [formArray]=\"'custom_field'\"\n\t\t\t\t\t\t[controls]=\"createProjectForm.get('custom_field')\"\n\t\t\t\t\t\t[customFields]=\"customFields\"\n\t\t\t\t\t\t[isFormSubmitted]=\"isFormSubmitted\"\n\t\t\t\t\t\t[formName]=\"createProjectForm\">\n\t\t\t\t\t</app-show-custom-field-element>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"description\">{{'projects.create.fields.description' | translate}}</label>\n\t\t\t\t\t\t<app-ngx-editor [config]=\"editorConfig\" [placeholder]=\"'projects.create.placeholders.placeholder11' | translate\" formControlName=\"description\" id=\"description\"></app-ngx-editor>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.create' | translate}}</button>\n\t</div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/create-sprint-modal/create-sprint-modal.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/create-sprint-modal/create-sprint-modal.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-product-hunt modal-icon\" aria-hidden=\"true\"></i>&nbsp;{{'project_planner.sprint.title1' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" (click)=\"onCancel()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"createProjectSprintForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isPageLoaded\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"sprint_name\">{{'project_planner.sprint.create.fields.sprint_name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"sprint_name\" id=\"sprint_name\" placeholder=\"{{'project_planner.sprint.create.placeholders.placeholder1' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintControl.sprint_name.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintControl.sprint_name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintControl.sprint_name.errors.required\">{{'project_planner.sprint.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintControl.sprint_name.errors.maxlength\">{{'project_planner.sprint.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"sprint_members\">{{'project_planner.sprint.create.fields.responsible' | translate}}</label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"users\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t[multiple]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"sprint_members\"\n\t\t\t\t\t\t\tformControlName=\"sprint_members\"\n\t\t\t\t\t\t\tplaceholder=\"{{'project_planner.sprint.create.placeholders.placeholder2' | translate}}\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintControl.start_date.errors }\">\n\t\t\t\t\t\t<label for=\"start_date\">{{'project_planner.sprint.create.fields.start_date' | translate}}</label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp1=\"bsDatepicker\" bsDatepicker [minDate]=\"projectStartDate\" [maxDate]=\"projectEndDate\" [bsConfig]=\"datepickerConfig\" (bsValueChange)=\"startDateChange($event)\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'project_planner.sprint.create.placeholders.placeholder3' | translate}}\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintControl.start_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"projectSprintControl.start_date.errors.required\">{{'project_planner.sprint.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintControl.end_date.errors }\">\n\t\t\t\t\t\t<label for=\"end-date\">{{'project_planner.sprint.create.fields.end_date' | translate}}</label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp2=\"bsDatepicker\" bsDatepicker [minDate]=\"createProjectSprintForm.get('start_date').value\" [maxDate]=\"projectEndDate\" [bsConfig]=\"datepickerConfig\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'project_planner.sprint.create.placeholders.placeholder4' | translate}}\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintControl.end_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"projectSprintControl.end_date.errors.required\">{{'project_planner.sprint.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintControl.status.errors }\">\n\t\t\t\t\t\t<label for=\"status\">{{'project_planner.sprint.create.fields.status' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"('project_planner.sprint.status' | translate)\" \n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"status\"\n\t\t\t\t\t\t\tformControlName=\"status\"\n\t\t\t\t\t\t\tplaceholder=\"{{'project_planner.sprint.create.placeholders.placeholder5' | translate}}\">\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintControl.status.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintControl.status.errors.required\">{{'project_planner.sprint.create.error_messages.message6' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"hours\">{{'project_planner.sprint.create.fields.estimate_hours' | translate}}</label>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" formControlName=\"hours\" placeholder=\"00:00\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && (projectSprintControl.hours.errors || isHoursValid) }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintControl.hours.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintControl.hours.errors.pattern\">{{'project_planner.sprint.create.error_messages.message7' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isHoursValid\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"isHoursValid\">{{'project_planner.sprint.create.error_messages.message8' | translate}} {{this.project.estimated_hours}} {{'common.hours' | translate}}.</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"description\">{{'project_planner.sprint.create.fields.description' | translate}}</label>\n\t\t\t\t\t\t<app-ngx-editor [config]=\"editorConfig\" [placeholder]=\"'project_planner.sprint.create.placeholders.placeholder6' | translate\" formControlName=\"description\" id=\"description\"></app-ngx-editor>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.create' | translate}}</button>\n\t</div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/create-sprint-task-modal/create-sprint-task-modal.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/create-sprint-task-modal/create-sprint-task-modal.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-tasks modal-icon\" aria-hidden=\"true\"></i>&nbsp;{{'project_planner.sprint_task.title1' | translate}} {{sprint.type}}</h2>\n\t<button type=\"button\" class=\"close\" (click)=\"onCancel()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"createProjectSprintTaskForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isPageLoaded\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\">{{sprint.type}} {{'project_planner.sprint_task.create.fields.name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"{{'project_planner.sprint_task.create.placeholders.placeholder1' | translate}}{{sprint.type}} {{'project_planner.sprint_task.create.fields.name' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintTaskControl.name.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintTaskControl.name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.name.errors.required\">{{'project_planner.sprint_task.create.error_messages.message1' | translate}} {{sprint.type | lowercase}} {{'project_planner.sprint_task.title3' | translate}}.</div>\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.name.errors.maxlength\">{{sprint.type}} {{'project_planner.sprint_task.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"assign_to\">{{'project_planner.sprint_task.create.fields.responsible' | translate}}</label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"users\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t[multiple]=\"false\"\n\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"assign_to\"\n\t\t\t\t\t\t\tformControlName=\"assign_to\"\n\t\t\t\t\t\t\tplaceholder=\"{{'project_planner.sprint_task.create.placeholders.placeholder2' | translate}}\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintTaskControl.start_date.errors }\">\n\t\t\t\t\t\t<label for=\"start_date\">{{'project_planner.sprint_task.create.fields.start_date' | translate}}</label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" [minDate]=\"sprintStartDate\" [maxDate]=\"sprintEndDate\" (bsValueChange)=\"startDateChange($event)\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'project_planner.sprint_task.create.placeholders.placeholder3' | translate}}\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintTaskControl.start_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.start_date.errors.required\">{{'project_planner.sprint_task.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintTaskControl.end_date.errors }\">\n\t\t\t\t\t\t<label for=\"end-date\">{{'project_planner.sprint_task.create.fields.end_date' | translate}}</label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp2=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" [minDate]=\"createProjectSprintTaskForm.get('start_date').value\" [maxDate]=\"sprintEndDate\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'project_planner.sprint_task.create.placeholders.placeholder4' | translate}}\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintTaskControl.end_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.end_date.errors.required\">{{'project_planner.sprint_task.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintTaskControl.status.errors }\">\n\t\t\t\t\t\t<label for=\"status\">{{'project_planner.sprint_task.create.fields.status' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"statusLists\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"status\"\n\t\t\t\t\t\t\tformControlName=\"status\"\n\t\t\t\t\t\t\tplaceholder=\"{{'project_planner.sprint_task.create.placeholders.placeholder5' | translate}}\">\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintTaskControl.status.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.status.errors.required\">{{'project_planner.sprint_task.create.error_messages.message6' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"estimated_hours\">{{'project_planner.sprint_task.create.fields.estimate_hours' | translate}}</label>\n\t\t\t\t\t\t<input type='text' class=\"form-control\" formControlName=\"estimated_hours\" placeholder=\"00:00\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && (projectSprintTaskControl.estimated_hours.errors || isHoursValid) }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintTaskControl.estimated_hours.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.estimated_hours.errors.pattern\">{{'project_planner.sprint_task.create.error_messages.message7' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isHoursValid\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"isHoursValid\">{{'project_planner.sprint_task.create.error_messages.message8' | translate}} {{this.sprint.hours}} {{'common.hours' | translate}}.</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"description\">{{'project_planner.sprint_task.create.fields.description' | translate}}</label>\n\t\t\t\t\t\t<app-ngx-editor [config]=\"editorConfig\" [placeholder]=\"'project_planner.sprint_task.create.placeholders.placeholder6' | translate\" formControlName=\"description\" id=\"description\"></app-ngx-editor>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.create' | translate}}</button>\n\t</div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/create-task-modal/create-task-modal.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/create-task-modal/create-task-modal.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-tasks modal-icon\" aria-hidden=\"true\"></i>&nbsp;{{'common.create' | translate}} {{project.type}}</h2>\n\t<button type=\"button\" class=\"close\" (click)=\"onCancel()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"createProjectSprintTaskForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isPageLoaded\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\">{{project.type}} {{'project_planner.sprint_task.create.fields.name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"{{'project_planner.sprint_task.create.placeholders.placeholder7' | translate}}{{project.type}} {{'project_planner.sprint_task.create.fields.name' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintTaskControl.name.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintTaskControl.name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.name.errors.required\">{{'project_planner.sprint_task.create.error_messages.message1' | translate}} {{project.type | lowercase}} {{'project_planner.sprint_task.title3' | translate}}.</div>\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.name.errors.maxlength\">{{project.type}} {{'project_planner.sprint_task.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"assign_to\">{{'project_planner.sprint_task.create.fields.responsible' | translate}}</label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"users\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t[multiple]=\"false\"\n\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"assign_to\"\n\t\t\t\t\t\t\tformControlName=\"assign_to\"\n\t\t\t\t\t\t\tplaceholder=\"{{'project_planner.sprint_task.create.placeholders.placeholder2' | translate}}\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintTaskControl.start_date.errors }\">\n\t\t\t\t\t\t<label for=\"start_date\">{{'project_planner.sprint_task.create.fields.start_date' | translate}}</label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" (bsValueChange)=\"startDateChange($event)\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'project_planner.sprint_task.create.placeholders.placeholder3' | translate}}\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintTaskControl.start_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.start_date.errors.required\">{{'project_planner.sprint_task.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintTaskControl.end_date.errors }\">\n\t\t\t\t\t\t<label for=\"end-date\">{{'project_planner.sprint_task.create.fields.end_date' | translate}}</label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp2=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" [minDate]=\"createProjectSprintTaskForm.get('start_date').value\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'project_planner.sprint_task.create.placeholders.placeholder4' | translate}}\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintTaskControl.end_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.end_date.errors.required\">{{'project_planner.sprint_task.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintTaskControl.status.errors }\">\n\t\t\t\t\t\t<label for=\"status\">{{'project_planner.sprint_task.create.fields.status' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"statusLists\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"status\"\n\t\t\t\t\t\t\tformControlName=\"status\"\n\t\t\t\t\t\t\tplaceholder=\"{{'project_planner.sprint_task.create.placeholders.placeholder5' | translate}}\">\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintTaskControl.status.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.status.errors.required\">{{'project_planner.sprint_task.create.error_messages.message6' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"estimated_hours\">{{'project_planner.sprint_task.create.fields.estimate_hours' | translate}}</label>\n\t\t\t\t\t\t<input type='text' class=\"form-control\" formControlName=\"estimated_hours\" placeholder=\"00:00\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintTaskControl.estimated_hours.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintTaskControl.estimated_hours.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.estimated_hours.errors.pattern\">{{'project_planner.sprint_task.create.error_messages.message7' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"description\">{{'project_planner.sprint_task.create.fields.description' | translate}}</label>\n\t\t\t\t\t\t<app-ngx-editor [config]=\"editorConfig\" [placeholder]=\"'project_planner.sprint_task.create.placeholders.placeholder6' | translate\" formControlName=\"description\" id=\"description\"></app-ngx-editor>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.create' | translate}}</button>\n\t</div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/edit-project-modal/edit-project-modal.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/edit-project-modal/edit-project-modal.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-product-hunt modal-icon\" aria-hidden=\"true\"></i>&nbsp;{{'projects.title2' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" (click)=\"onCancel()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"editProjectForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isPageLoaded\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"generated_id\">{{'projects.create.fields.project_id' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"generated_id\" id=\"generated_id\" readonly />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"project_name\">{{'projects.create.fields.project_name' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"project_name\" id=\"project_name\" placeholder=\"{{'projects.create.placeholders.placeholder1' | translate }}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectPlannerControl.project_name.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectPlannerControl.project_name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectPlannerControl.project_name.errors.required\">{{'projects.create.error_messages.message1' | translate }}</div>\n\t\t\t\t\t\t\t<div *ngIf=\"projectPlannerControl.project_name.errors.maxlength\">{{'projects.create.error_messages.message2' | translate }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"project_version\">{{'projects.create.fields.version' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.create.placeholders.placeholder2' | translate }}\" formControlName=\"project_version\" id=\"project_version\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectPlannerControl.project_version.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectPlannerControl.project_version.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectPlannerControl.project_version.errors.required\">{{'projects.create.error_messages.message3' | translate }}</div>\n\t\t\t\t\t\t\t<div *ngIf=\"projectPlannerControl.project_version.errors.pattern\">{{'projects.create.error_messages.message4' | translate }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"badge badge-success\" *ngIf=\"oldVersion\">{{oldVersion}},</span>\n\t\t\t\t\t\t<span class=\"badge badge-success\">{{'projects.budges.current_version' | translate }} {{currentVersion}}</span>\t\t\t\t\t\t\n\t\t\t\t\t\t<span class=\"badge badge-secondary\">{{'projects.budges.version' | translate }}: 1.0, 1.1, 1.2</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\" *ngIf=\"!loginUser.is_client\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"client_id\">{{'projects.create.fields.client_name' | translate }}</label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"clients\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\" \n\t\t\t\t\t\t\tbindLabel=\"firstname\" \n\t\t\t\t\t\t\tbindValue=\"id\" \n\t\t\t\t\t\t\tlabelForId=\"client_id\" \n\t\t\t\t\t\t\tformControlName=\"client_id\" \n\t\t\t\t\t\t\tplaceholder=\"{{'projects.create.placeholders.placeholder3' | translate }}\" >\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">{{item.firstname}} {{item.lastname}}</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectPlannerControl.start_date.errors }\">\n\t\t\t\t\t\t<label for=\"start_date\">{{'projects.create.fields.start_date' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" (onHidden)=\"startDateChange($event)\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'projects.create.placeholders.placeholder7' | translate }}\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectPlannerControl.start_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"projectPlannerControl.start_date.errors.required\">{{'projects.create.error_messages.message9' | translate }}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectPlannerControl.end_date.errors }\">\n\t\t\t\t\t\t<label for=\"end-date\">{{'projects.create.fields.end_date' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp2=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" [minDate]=\"editProjectForm.get('start_date').value\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'projects.create.placeholders.placeholder8' | translate }}\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectPlannerControl.end_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"projectPlannerControl.end_date.errors.required\">{{'projects.create.error_messages.message10' | translate }}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"estimated_hours\">{{'projects.create.fields.estimate_hours' | translate }}</label>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" formControlName=\"estimated_hours\" placeholder=\"00:00\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectPlannerControl.estimated_hours.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectPlannerControl.estimated_hours.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectPlannerControl.estimated_hours.errors.pattern\">{{'projects.create.error_messages.message11' | translate }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectPlannerControl.status.errors }\">\n\t\t\t\t\t\t<label for=\"status\">{{'projects.create.fields.status' | translate }}&nbsp;<span class=\"text-danger\">*</span> </label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"('projects.status' | translate)\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"status\"\n\t\t\t\t\t\t\tformControlName=\"status\"\n\t\t\t\t\t\t\tplaceholder=\"{{'projects.create.placeholders.placeholder4' | translate }}\">\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectPlannerControl.status.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectPlannerControl.status.errors.required\">{{'projects.create.error_messages.message6' | translate }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"assign_to\">{{'projects.create.fields.assigned_group' | translate }}</label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"teams\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"team_name\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"assign_to\"\n\t\t\t\t\t\t\tformControlName=\"assign_to\"\n\t\t\t\t\t\t\tplaceholder=\"{{'projects.create.placeholders.placeholder5' | translate }}\"\n\t\t\t\t\t\t\t(change)=\"assignGroupChange($event)\">\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"assign_members\">{{'projects.create.fields.assigned_To' | translate }}</label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"teamsMembers\"\n\t\t\t\t\t\t\t[multiple]=\"true\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\tlabelForId=\"assign_members\"\n\t\t\t\t\t\t\tformControlName=\"assign_members\" \n\t\t\t\t\t\t\tplaceholder=\"{{'projects.create.placeholders.placeholder6' | translate }}\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"demo_url\">{{'projects.create.fields.demo_URL' | translate }}</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"https://example.com\" formControlName=\"demo_url\" id=\"demo_url\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectPlannerControl.demo_url.errors }\"/>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectPlannerControl.demo_url.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectPlannerControl.demo_url.errors.pattern\">{{'projects.create.error_messages.message8' | translate }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"type\">{{'projects.create.fields.billing_type' | translate }}</label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"('projects.billing_types' | translate)\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"billing_type\"\n\t\t\t\t\t\t\tformControlName=\"billing_type\"\n\t\t\t\t\t\t\tplaceholder=\"{{'projects.create.placeholders.placeholder9' | translate }}\">\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\" *ngIf=\"editProjectForm.get('billing_type').value == 1 || editProjectForm.get('billing_type').value == 2 || editProjectForm.get('billing_type').value == null \">\n\t\t\t\t\t<div class=\"form-group fixed_rate\">\n\t\t\t\t\t\t<label for=\"price_rate\" *ngIf=\"editProjectForm.get('billing_type').value == 1 || editProjectForm.get('billing_type').value == null\">{{'projects.create.fields.fixed_price' | translate }}</label>\n\t\t\t\t\t\t<label for=\"price_rate\" *ngIf=\"editProjectForm.get('billing_type').value == 2\">{{'projects.create.fields.hourly_rate' | translate }}</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.create.placeholders.placeholder10' | translate }}\" formControlName=\"price_rate\" id=\"price_rate\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectPlannerControl.price_rate.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectPlannerControl.price_rate.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectPlannerControl.price_rate.errors.min\">{{'projects.create.error_messages.message12' | translate }}</div>\n\t\t\t\t\t\t\t<div *ngIf=\"projectPlannerControl.price_rate.errors.pattern\">{{'projects.create.error_messages.message13' | translate }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"project_hours\">{{'projects.create.fields.project_hours' | translate }}</label><br>\n\t\t\t\t\t\t<label class=\"form-check checkbox-container\">\n\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" formControlName=\"project_hours\" id=\"project_hours\">\n\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\" *ngIf=\"!editProjectForm.get('project_hours').value\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>{{'projects.create.fields.progress' | translate }}</label>\n\t\t\t\t\t\t<ng5-slider [options]=\"progressOptions\" formControlName=\"progress\"></ng5-slider>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>{{'projects.create.fields.project_logo' | translate }}</label>\n\t\t\t\t\t\t<input type=\"hidden\" formControlName=\"project_logo\">\n\t\t\t\t\t\t<div class=\"dropzone dz-clickable\" #logodropzone>\n\t\t\t\t\t\t\t<div class=\"dz-preview dz-image-preview\" *ngIf=\"isLogoLoaded && project.project_logo\">\n\t\t\t\t\t\t\t\t<div class=\"dz-image\">\n\t\t\t\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/project/{{project.project_logo}}\" height=\"100\" width=\"100\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<a class=\"btn btn-sm btn-block\" (click)=\"removeDropzoneImage()\">{{ 'common.remove_file' | translate }}</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"dz-default dz-message\">\n\t\t\t\t\t\t\t\t<span><strong>{{ 'projects.create.error_messages.message14' | translate }}</strong></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"people-lists text-center\">\n\t\t\t\t\t\t\t<a *ngFor=\"let logo of logos;\" (click)=\"setLogos(logo)\" [ngClass]=\"{active: isActive(logo)}\" class=\"btn btn-profile-info rounded-circle text-dark\" >\n\t\t\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/project/{{logo}}\" class=\"img-sm rounded-circle\" alt=\"Project Logo\" />\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\" *ngIf=\"customFields.length > 0\">\n\t\t\t\t\t<app-show-custom-field-element [formArray]=\"'custom_field'\"\n\t\t\t\t\t\t[controls]=\"editProjectForm.get('custom_field')\"\n\t\t\t\t\t\t[customFields]=\"customFields\"\n\t\t\t\t\t\t[isFormSubmitted]=\"isFormSubmitted\"\n\t\t\t\t\t\t[formName]=\"editProjectForm\">\n\t\t\t\t\t</app-show-custom-field-element>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"description\">{{'projects.create.fields.description' | translate }}</label>\n\t\t\t\t\t\t<app-ngx-editor [config]=\"editorConfig\" [placeholder]=\"'projects.create.placeholders.placeholder11' | translate\" formControlName=\"description\" id=\"description\"></app-ngx-editor>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.update' | translate}}</button>\n\t</div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/edit-sprint-modal/edit-sprint-modal.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/edit-sprint-modal/edit-sprint-modal.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-product-hunt modal-icon\" aria-hidden=\"true\"></i>&nbsp;{{'project_planner.sprint.title2' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" (click)=\"onCancel()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"editProjectSprintForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isPageLoaded\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"sprint_name\">{{'project_planner.sprint.create.fields.sprint_name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"sprint_name\" id=\"sprint_name\" placeholder=\"{{'project_planner.sprint.create.placeholders.placeholder1' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintControl.sprint_name.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintControl.sprint_name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintControl.sprint_name.errors.required\">{{'project_planner.sprint.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintControl.sprint_name.errors.maxlength\">{{'project_planner.sprint.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"sprint_members\">{{'project_planner.sprint.create.fields.responsible' | translate}} &nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"users\"\n\t\t\t\t\t\t\t[multiple]=\"true\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\tlabelForId=\"sprint_members\"\n\t\t\t\t\t\t\tformControlName=\"sprint_members\"\n\t\t\t\t\t\t\tplaceholder=\"{{'project_planner.sprint.create.placeholders.placeholder2' | translate}}\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintControl.start_date.errors }\">\n\t\t\t\t\t\t<label for=\"start_date\">{{'project_planner.sprint.create.fields.start_date' | translate}}</label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp1=\"bsDatepicker\" bsDatepicker [minDate]=\"projectStartDate\" [maxDate]=\"projectEndDate\" [bsConfig]=\"datepickerConfig\" (onHidden)=\"startDateChange($event)\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'project_planner.sprint.create.placeholders.placeholder3' | translate}}\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintControl.start_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"projectSprintControl.start_date.errors.required\">{{'project_planner.sprint.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintControl.end_date.errors }\">\n\t\t\t\t\t\t<label for=\"end-date\">{{'project_planner.sprint.create.fields.end_date' | translate}}</label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp2=\"bsDatepicker\" bsDatepicker [minDate]=\"editProjectSprintForm.get('start_date').value\" [maxDate]=\"projectEndDate\" [bsConfig]=\"datepickerConfig\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'project_planner.sprint.create.placeholders.placeholder4' | translate}}\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintControl.end_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"projectSprintControl.end_date.errors.required\">{{'project_planner.sprint.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintControl.status.errors }\">\n\t\t\t\t\t\t<label for=\"status\">{{'project_planner.sprint.create.fields.status' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"('project_planner.sprint.status' | translate)\" \n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"status\"\n\t\t\t\t\t\t\tformControlName=\"status\"\n\t\t\t\t\t\t\tplaceholder=\"{{'project_planner.sprint.create.placeholders.placeholder5' | translate}}\">\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintControl.status.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintControl.status.errors.required\">{{'project_planner.sprint.create.error_messages.message6' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"hours\">{{'project_planner.sprint.create.fields.estimate_hours' | translate}}</label>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" formControlName=\"hours\" placeholder=\"00:00\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && (projectSprintControl.hours.errors || isHoursValid) }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintControl.hours.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintControl.hours.errors.pattern\">{{'project_planner.sprint.create.error_messages.message7' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isHoursValid\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"isHoursValid\">{{'project_planner.sprint.create.error_messages.message8' | translate}} {{this.project.estimated_hours}} {{'common.hours' | translate}}.</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"description\">{{'project_planner.sprint.create.fields.description' | translate}}</label>\n\t\t\t\t\t\t<app-ngx-editor [config]=\"editorConfig\" [placeholder]=\"'project_planner.sprint.create.placeholders.placeholder6' | translate\" formControlName=\"description\" id=\"description\"></app-ngx-editor>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.update' | translate}}</button>\n\t</div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/edit-sprint-task-modal/edit-sprint-task-modal.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/edit-sprint-task-modal/edit-sprint-task-modal.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\" *ngIf=\"isPageLoaded\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-tasks\" aria-hidden=\"true\"></i>&nbsp;{{'project_planner.sprint_task.title2' | translate}} {{task.type}}</h2>\n\t<button type=\"button\" class=\"close\" (click)=\"onCancel()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"editProjectSprintTaskForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isPageLoaded\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\">{{task.type}} {{'project_planner.sprint_task.create.fields.name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"{{'project_planner.sprint_task.create.placeholders.placeholder1' | translate}}{{task.type}} {{'project_planner.sprint_task.create.fields.name' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintTaskControl.name.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintTaskControl.name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.name.errors.required\">{{'project_planner.sprint_task.create.error_messages.message1' | translate}} {{task.type | lowercase}} {{'project_planner.sprint_task.title3' | translate}}.</div>\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.name.errors.maxlength\">{{task.type}} {{'project_planner.sprint_task.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"assign_to\">{{'project_planner.sprint_task.create.fields.responsible' | translate}}</label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"users\"\n\t\t\t\t\t\t\t[multiple]=\"false\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"assign_to\"\n\t\t\t\t\t\t\tformControlName=\"assign_to\"\n\t\t\t\t\t\t\tplaceholder=\"{{'project_planner.sprint_task.create.placeholders.placeholder2' | translate}}\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintTaskControl.start_date.errors }\">\n\t\t\t\t\t\t<label for=\"start_date\">{{'project_planner.sprint_task.create.fields.start_date' | translate}}</label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" [minDate]=\"sprintStartDate\" [maxDate]=\"sprintEndDate\" (onHidden)=\"startDateChange($event)\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'project_planner.sprint_task.create.placeholders.placeholder3' | translate}}\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintTaskControl.start_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.start_date.errors.required\">{{'project_planner.sprint_task.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintTaskControl.end_date.errors }\">\n\t\t\t\t\t\t<label for=\"end-date\">{{'project_planner.sprint_task.create.fields.end_date' | translate}}</label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp2=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" [minDate]=\"editProjectSprintTaskForm.get('start_date').value\" [maxDate]=\"sprintEndDate\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'project_planner.sprint_task.create.placeholders.placeholder4' | translate}}\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintTaskControl.end_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.end_date.errors.required\">{{'project_planner.sprint_task.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintTaskControl.status.errors }\">\n\t\t\t\t\t\t<label for=\"status\">{{'project_planner.sprint_task.create.fields.status' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"statusLists\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"status\"\n\t\t\t\t\t\t\tformControlName=\"status\"\n\t\t\t\t\t\t\tplaceholder=\"{{'project_planner.sprint_task.create.placeholders.placeholder5' | translate}}\"\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintTaskControl.status.errors }\">\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintTaskControl.status.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.status.errors.required\">{{'project_planner.sprint_task.create.error_messages.message6' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"estimated_hours\">{{'project_planner.sprint_task.create.fields.estimate_hours' | translate}}</label>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" formControlName=\"estimated_hours\" placeholder=\"00:00\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && (projectSprintTaskControl.estimated_hours.errors || isHoursValid) }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintTaskControl.estimated_hours.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.estimated_hours.errors.pattern\">{{'project_planner.sprint_task.create.error_messages.message7' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isHoursValid\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"isHoursValid\">{{'project_planner.sprint_task.create.error_messages.message8' | translate}} {{this.sprint.hours}} {{'common.hours' | translate}}.</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"description\">{{'project_planner.sprint_task.create.fields.description' | translate}}</label>\n\t\t\t\t\t\t<app-ngx-editor [config]=\"editorConfig\" [placeholder]=\"'project_planner.sprint_task.create.placeholders.placeholder6' | translate\" formControlName=\"description\" id=\"description\"></app-ngx-editor>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.update' | translate}}</button>\n\t</div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/edit-task-modal/edit-task-modal.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/edit-task-modal/edit-task-modal.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\" *ngIf=\"isPageLoaded\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-tasks\" aria-hidden=\"true\"></i>&nbsp;{{'common.edit' | translate}} {{task.type}}</h2>\n\t<button type=\"button\" class=\"close\" (click)=\"onCancel()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"editProjectSprintTaskForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isPageLoaded\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\">{{task.type}} {{'project_planner.sprint_task.create.fields.name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"{{'project_planner.sprint_task.create.placeholders.placeholder7' | translate}}{{task.type}} {{'project_planner.sprint_task.create.fields.name' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintTaskControl.name.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintTaskControl.name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.name.errors.required\">{{'project_planner.sprint_task.create.error_messages.message1' | translate}} {{task.type | lowercase}} {{'project_planner.sprint_task.title3' | translate}}.</div>\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.name.errors.maxlength\">{{task.type}} {{'project_planner.sprint_task.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"assign_to\">{{'project_planner.sprint_task.create.fields.responsible' | translate}}</label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"users\"\n\t\t\t\t\t\t\t[multiple]=\"false\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"assign_to\"\n\t\t\t\t\t\t\tformControlName=\"assign_to\"\n\t\t\t\t\t\t\tplaceholder=\"{{'project_planner.sprint_task.create.placeholders.placeholder2' | translate}}\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintTaskControl.start_date.errors }\">\n\t\t\t\t\t\t<label for=\"start_date\">{{'project_planner.sprint_task.create.fields.start_date' | translate}}</label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" (onHidden)=\"startDateChange($event)\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'project_planner.sprint_task.create.placeholders.placeholder3' | translate}}\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintTaskControl.start_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.start_date.errors.required\">{{'project_planner.sprint_task.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintTaskControl.end_date.errors }\">\n\t\t\t\t\t\t<label for=\"end-date\">{{'project_planner.sprint_task.create.fields.end_date' | translate}}</label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp2=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" [minDate]=\"editProjectSprintTaskForm.get('start_date').value\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'project_planner.sprint_task.create.placeholders.placeholder4' | translate}}\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintTaskControl.end_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.end_date.errors.required\">{{'project_planner.sprint_task.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintTaskControl.status.errors }\">\n\t\t\t\t\t\t<label for=\"status\">{{'project_planner.sprint_task.create.fields.status' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"statusLists\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"status\"\n\t\t\t\t\t\t\tformControlName=\"status\"\n\t\t\t\t\t\t\tplaceholder=\"{{'project_planner.sprint_task.create.placeholders.placeholder5' | translate}}\"\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintTaskControl.status.errors }\">\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintTaskControl.status.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.status.errors.required\">{{'project_planner.sprint_task.create.error_messages.message6' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"estimated_hours\">{{'project_planner.sprint_task.create.fields.estimate_hours' | translate}}</label>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" formControlName=\"estimated_hours\" placeholder=\"00:00\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectSprintTaskControl.estimated_hours.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectSprintTaskControl.estimated_hours.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectSprintTaskControl.estimated_hours.errors.pattern\">{{'project_planner.sprint_task.create.error_messages.message7' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"description\">{{'project_planner.sprint_task.create.fields.description' | translate}}</label>\n\t\t\t\t\t\t<app-ngx-editor [config]=\"editorConfig\" [placeholder]=\"'project_planner.sprint_task.create.placeholders.placeholder6' | translate\" formControlName=\"description\" id=\"description\"></app-ngx-editor>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.update' | translate}}</button>\n\t</div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/move-task-modal/move-task-modal.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/move-task-modal/move-task-modal.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-arrows-alt modal-icon\" aria-hidden=\"true\"></i>&nbsp;{{'project_planner.move_sprint_task.title' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" (click)=\"onCancel()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"moveTaskForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isPageLoaded\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<!-- <div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectPlannerControl.project_id.errors }\">\n\t\t\t\t\t\t<label for=\"project\">{{'project_planner.move_sprint_task.create.fields.project' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"projects\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"project_name\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"project_id\"\n\t\t\t\t\t\t\tformControlName=\"project_id\"\n\t\t\t\t\t\t\tplaceholder=\"{{'project_planner.move_sprint_task.create.placeholders.placeholder1' | translate}}\" \n\t\t\t\t\t\t\t(change)=\"projectChange($event)\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t{{item.project_name}}\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectPlannerControl.project_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectPlannerControl.project_id.errors.required\">{{'project_planner.move_sprint_task.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectPlannerControl.sprint_id.errors }\">\n\t\t\t\t\t\t<label for=\"sprint_id\">{{'project_planner.move_sprint_task.create.fields.sprint' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"sprints\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"sprint_name\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tformControlName=\"sprint_id\"\n\t\t\t\t\t\t\tplaceholder=\"{{'project_planner.move_sprint_task.create.placeholders.placeholder2' | translate}}\"\n\t\t\t\t\t\t\tlabelForId=\"sprint_id\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t{{item.sprint_name}}\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectPlannerControl.sprint_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"projectPlannerControl.sprint_id.errors.required\">{{'project_planner.move_sprint_task.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.move' | translate}}</button>\n\t</div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/pages/project-planner-detail/project-planner-detail.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/pages/project-planner-detail/project-planner-detail.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"row detail-page project_planner\">\n\t<div class=\"card bg-transparent\" *ngIf=\"isPageLoaded\">\n\t\t<div class=\"card-content\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"row mr-0 ml-0\">\n\t\t\t\t\t<div class=\"col-md-12 card-separator\">\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t\t\t\t\t<div class=\"task-name d-lg-flex\">\n\t\t\t\t\t\t\t\t<h4 class=\"task-id\">\n\t\t\t\t\t\t\t\t\t<span>#{{project.generated_id}} </span>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t<p class=\"task-title ml-lg-2\">\n\t\t\t\t\t\t\t\t\t{{project.project_name}}\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"task-action d-flex\">\n\t\t\t\t\t\t\t\t<button *ngIf=\"permissions.edit_delete_permission.edit\" class=\"btn btn-create mb-2 mb-lg-0 float-right\" (click)=\"openEditProjectModal(project.id)\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-12 pr-0 pl-0 \">\n\t\t\t\t\t\t<form class=\"form-body overflow-hidden mt-3\">\n\t\t\t\t\t\t\t<!-- Detail fields -->\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 pr-lg-3 pl-lg-2 pr-2 pl-2\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col card-separator mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.version' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{project.project_version}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.status' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"status-dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permissions.edit_delete_permission.edit; else elseBlock11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle id=\"button-basic\" type=\"button\" class=\"btn dropdown-toggle select-btn-lg\" aria-controls=\"dropdown-basic\">{{getTranslateStatus(project.status) | translate}}&nbsp;<span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngFor=\"let status of ('projects.status' | translate)\"><a class=\"dropdown-item btn btn-sm {{status.class}}\" [ngClass]=\"{'active': project.status == status.id}\" (click)=\"changeProjectStatus([project.id], status);project.status = status.id\">{{status.label}}</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock11>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ('projects.status' | translate)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"budges-status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"{{status.class}}\" *ngIf=\"status.id == project.status\">{{status.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.created_by' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"people-lists\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', project.created_user.id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{project.created_user.firstname}} {{project.created_user.lastname}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"project.created_user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{project.created_user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!project.created_user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"ml-1\">{{project.created_user.firstname}} {{project.created_user.lastname}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.assigned_To' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"people-lists\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"project.assign_members == 'Unassign' || project.assign_members == '' || project.assign_members == null; else elseBlock\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let user_id of project.assign_members | stringToArrayFilter index as i; odd as isOdd; even as isEven\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a *ngIf=\"userLists[user_id]\" [routerLink]=\"['/users/profile', user_id]\" tooltip=\"{{userLists[user_id].firstname}} {{userLists[user_id].lastname}}\" class=\"btn rounded-circle popover-item text-dark\" [ngClass]=\"{'btn-profile-info popover-item': isOdd, 'btn-profile-danger': isEven, 'popover-item': i!=0}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"userLists[user_id].avatar\" src=\"{{apiUrl}}/uploads/profile/{{userLists[user_id].avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!userLists[user_id].avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.completed' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<progressbar max=\"100\" [value]=\"project.progress\" [animate]=\"true\"><strong>{{project.progress}}%</strong></progressbar>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 card-separator\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\" *ngIf=\"!loginUser.is_client\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.client_name' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permissions.edit_delete_permission.edit; else elseBlock4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-select [name]=\"'firstname'\" [elementFor]=\"'projects.inline_edit.client' | translate\" [txtField]=\"'client_id'\" [selectedValue]=\"project.client_id\" [isRequired]=\"'true'\" [options]=\"clients\" (updateValue)=\"saveProjectDetail('client_id', $event);\"></inline-edit-select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"project.clients\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ project.clients.firstname}} {{project.clients.lastname}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.start_date' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permissions.edit_delete_permission.edit; else elseBlock5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-date [name]=\"'start_date'\" [elementFor]=\"'projects.inline_edit.start_date' | translate\" [fieldValue]=\"project.start_date\" [format]=\"loginUser.settings.date_format\" [isRequired]=\"'true'\" [datepickerConfigs]=\"datepickerConfigs\" (updateValue)=\"saveProjectDetail('start_date', $event);\"></inline-edit-date>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ project.start_date | dateTimeFormatFilter: loginUser.settings.date_format }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.end_date' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permissions.edit_delete_permission.edit; else elseBlock6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-date [name]=\"'end_date'\" [elementFor]=\"'projects.inline_edit.end_date' | translate\" [fieldValue]=\"project.end_date\" [isRequired]=\"'true'\" [datepickerConfigs]=\"datepickerConfigs\" [format]=\"loginUser.settings.date_format\" (updateValue)=\"saveProjectDetail('end_date', $event);\"></inline-edit-date>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ project.end_date | dateTimeFormatFilter: loginUser.settings.date_format }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.estimate_hours' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permissions.edit_delete_permission.edit; else elseBlock7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-hours [name]=\"'estimated_hours'\" [elementFor]=\"'projects.inline_edit.estimate_hours' | translate\" [fieldValue]=\"project.estimated_hours\" [isRequired]=\"'false'\" (updateValue)=\"saveProjectDetail('estimated_hours', $event);\"></inline-edit-hours>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock7>{{ project.estimated_hours}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.actual_hours' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{project.actual_hours}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.demo_URL' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permissions.edit_delete_permission.edit; else elseBlock8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-input [type]=\"'text'\" [name]=\"'demo_url'\" [elementFor]=\"'projects.inline_edit.demo_url' | translate\" [fieldValue]=\"project.demo_url\" [isRequired]=\"'true'\" (updateValue)=\"saveProjectDetail('demo_url', $event);\"></inline-edit-input>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock8>{{ project.demo_url }}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.billing_type' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permissions.edit_delete_permission.edit; else elseBlock9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-select [name]=\"'label'\" [txtField]=\"'billing_type'\" [elementFor]=\"'projects.inline_edit.billing_type' | translate\" [selectedValue]=\"project.billing_type\" [isRequired]=\"'true'\" [options]=\"('projects.billing_types' | translate)\" (updateValue)=\"saveProjectDetail('billing_type', $event);\"></inline-edit-select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock9>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let type of ('projects.billing_types' | translate)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"project.billing_type == type.id\">{{type.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.budget' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permissions.edit_delete_permission.edit; else elseBlock10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-input [name]=\"'price_rate'\" [type]=\"'text'\" [elementFor]=\"'projects.inline_edit.budget' | translate\" [pattern]=\"'^[0-9]+(\\.[0-9]{1,2})?$'\" [fieldValue]=\"project.price_rate\" [isRequired]=\"'false'\" (updateValue)=\"saveProjectDetail('price_rate', $event);\"></inline-edit-input>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock10>{{project.price_rate}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'common.created' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{project.created_at | dateTimeFormatFilter : loginUser.settings.date_time_format}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'common.updated' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{project.updated_at | dateTimeFormatFilter : loginUser.settings.date_time_format}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-8\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- Description field -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 description-detail mb-3 card-separator\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"sub-title\"><span>{{'projects.details.title2' | translate}}</span></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permissions.edit_delete_permission.edit; else elseBlock1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-text-editor [name]=\"'description'\" [fieldValue]=\"project.description\" [elementFor]=\"'projects.inline_edit.description' | translate\" (updateValue)=\"saveProjectDetail('description', $event);\"></inline-edit-text-editor>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock1>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p [innerHtml]=\"project.description\"></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- Custom fields -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 card-separator mb-3\" *ngIf=\"project.custom_fields.length > 0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"sub-title\"><span>{{'projects.details.title1' | translate}}</span></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let customField of project.custom_fields\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-6 mt-2\" *ngIf=\"customField.field_type != 'textarea'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"customField.field_type == 'text' || customField.field_type == 'numeric'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{customField.field_label}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{project[customField.field_column]}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"customField.field_type == 'date'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{customField.field_label}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{project[customField.field_column] | dateTimeFormatFilter: loginUser.settings.date_format}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"customField.field_type == 'dropdown'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{customField.field_label}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let fieldValue of getParseArray(customField.default_value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"fieldValue.value == project[customField.field_column]\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{fieldValue.label}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"customField.field_type == 'checkbox'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{customField.field_label}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"project[customField.field_column] == 1; else checkboxElseBlock\">{{'common.true' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #checkboxElseBlock>{{'common.false' | translate}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let customField of project.custom_fields\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-6 mt-2\" *ngIf=\"customField.field_type == 'textarea'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{customField.field_label}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{project[customField.field_column]}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- Sprint -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 description-detail mb-3 card-separator\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header p-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"sub-title\"><span>{{'project_planner.title5' | translate}}</span></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-buttons pb-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-create mb-0\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'projectplanner_create']\" (click)=\"openCreateSprintModal()\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive-xl table-responsive-lg table-responsive-md table-responsive-sm table-responsive-xs\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-hover\" width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-5-per text-center\"></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-20-per\">{{'project_planner.columns.name' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-20-per\">{{'project_planner.columns.responsible' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-10-per\">{{'project_planner.columns.type' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-20-per\">{{'project_planner.columns.start_date' | translate}} </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-20-per\">{{'project_planner.columns.end_date' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-5-per\">{{'project_planner.columns.hours' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-5-per\">{{'project_planner.columns.status' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-5-per text-center\">{{'project_planner.columns.actions' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody *ngIf=\"sprints.sprint_tasks?.length != 0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Sprints -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let sprint of sprints.sprint_tasks; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"tr_clickable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"width-5-per text-center\" (click)=\"changeSprintId(sprint.id)\" [ngClass]=\"{'details-control': sprint.tasks?.length != 0}\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"width-20-per\">{{sprint.sprint_name}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"width-20-per people-lists\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"sprint.sprint_members?.length; else elseBlock3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a tooltip=\"{{member.firstname}} {{member.lastname}}\" class=\"btn rounded-circle popover-item text-dark\" placement=\"top\" *ngFor=\"let member of sprint.sprint_members; odd as isOdd; even as isEven\" [ngClass]=\"{'btn-profile-info': isOdd, 'btn-profile-danger': isEven}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"member.avatar\" src=\"{{apiUrl}}/uploads/profile/{{member.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!member.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"width-10-per\">{{'project_planner.title5' | translate}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"width-20-per\">{{sprint.start_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"width-20-per\">{{sprint.end_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"width-5-per\">{{sprint.hours}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"budges-status width-5-per\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ('project_planner.sprint.status' | translate)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"{{status.class}}\" *ngIf=\"status.id == sprint.status\">{{status.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"actions-dropdown width-5-per\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'projectplanner_edit']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openEditSprintModal(sprint.project, sprint.id)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'projectplanner_create']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openCreateSprintTaskModal(sprint, 'Task')\" class=\"dropdown-item btn btn-info btn-raised\" tooltip=\"{{'project_planner.title1' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openCreateSprintTaskModal(sprint, 'Story')\" class=\"dropdown-item btn btn-info btn-raised\" tooltip=\"{{'project_planner.title2' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'projectplanner_delete']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"deleteSprint(sprint.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Sprint Tasks -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let task of sprint.tasks; index as i\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngIf=\"hideElementsChild[sprint.id]\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\" class=\"p-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive-xl table-responsive-lg table-responsive-md table-responsive-sm table-responsive-xs\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-sm table-bordered mb-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"width-5-per text-center\">{{i+1}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"width-20-per\">{{task.name}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"width-20-per people-lists\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"task.task_members?.length; else elseBlock4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a tooltip=\"{{member.firstname}} {{member.lastname}}\" class=\"btn rounded-circle text-dark\" placement=\"top\" *ngFor=\"let member of task.task_members; odd as isOdd; even as isEven\" [ngClass]=\"{'btn-profile-info popover-item': isOdd, 'btn-profile-danger': isEven}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"member.avatar\" src=\"{{apiUrl}}/uploads/profile/{{member.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!member.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"width-10-per\">{{task.type}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"width-15-per\">{{task.start_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"width-15-per\">{{task.end_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"width-5-per\">{{task.estimated_hours}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"budges-status width-5-per\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf='task.type == \"Story\"; else elseBlock5'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ('project_planner.sprint_task.story_status' | translate)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"{{status.class}}\" *ngIf=\"status.id == task.status\">{{status.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ('project_planner.sprint_task.task_status' | translate)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"{{status.class}}\" *ngIf=\"status.id == task.status\">{{status.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"actions-dropdown width-5-per\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-2\" aria-controls=\"dropdown-basic-2\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-2\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin','projectplanner_edit']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openEditSprintTaskModal(sprint, task.id)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf='task.type == \"Task\"; else elseBlock1'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openMoveTaskModal(task.id, sprint.id)\" *ngxPermissionsOnly=\"['admin', 'super_admin','projectplanner_edit']\" class=\"dropdown-item btn btn-move btn-raised\" tooltip=\"{{'common.move' | translate}}\"><i class=\"fa fa-arrows-alt\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"deleteTask(task.id)\" *ngxPermissionsOnly=\"['admin', 'super_admin','projectplanner_delete']\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock1>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"deleteStory(task.id)\" *ngxPermissionsOnly=\"['admin', 'super_admin','projectplanner_delete']\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot *ngIf=\"sprints.sprint_tasks?.length == 0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\" class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/norecord-img.png\" width=\"50\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mt-1\">{{'common.empty_message.sprints' | translate}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- Task -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 description-detail mb-3 card-separator\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header p-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"sub-title\"><span>{{'project_planner.sprint_task.title4' | translate}}</span></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-buttons pb-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-create mb-0\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'projectplanner_create']\" (click)=\"openCreateTaskModal(project, 'Task')\" tooltip=\"{{'project_planner.title1' | translate}}\"><i class=\"fa fa-plus\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl overflow-x-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" id=\"task_datatable\" width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'project_planner.columns.name' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'project_planner.columns.responsible' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'project_planner.columns.start_date' | translate}} </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'project_planner.columns.end_date' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'project_planner.columns.hours' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'project_planner.columns.status' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'project_planner.columns.actions' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let task_story of sprints.non_sprint_tasks\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{task_story.name}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"people-lists\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"task_story.task_members?.length; else elseBlock12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a tooltip=\"{{member.firstname}} {{member.lastname}}\" class=\"btn rounded-circle text-dark\" placement=\"top\" *ngFor=\"let member of task_story.task_members; odd as isOdd; even as isEven\" [ngClass]=\"{'btn-profile-info popover-item': isOdd, 'btn-profile-danger': isEven}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"member.avatar\" src=\"{{apiUrl}}/uploads/profile/{{member.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!member.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock12>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{task_story.start_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{task_story.end_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{task_story.estimated_hours}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ('project_planner.sprint_task.task_status' | translate)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"{{status.class}}\" *ngIf=\"status.id == task_story.status\">{{status.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"actions-dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-3\" aria-controls=\"dropdown-basic-3\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-3\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin','projectplanner_edit']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openEditTaskModal(project, task_story.id)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin','projectplanner_edit']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openMoveTaskModal(task_story.id)\"  class=\"dropdown-item btn btn-move btn-raised\" tooltip=\"{{'common.move' | translate}}\"><i class=\"fa fa-arrows-alt\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin','projectplanner_delete']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"deleteTask(task_story.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- Story -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 description-detail mb-3 card-separator\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header p-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"sub-title\"><span>{{'project_planner.sprint_task.title5' | translate}}</span></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-buttons pb-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-create mb-0\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'projectplanner_create']\" (click)=\"openCreateTaskModal(project, 'Story')\" tooltip=\"{{'project_planner.title2' | translate}}\"><i class=\"fa fa-plus\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl overflow-x-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable \" id=\"story_datatable\" width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'project_planner.columns.name' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'project_planner.columns.responsible' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'project_planner.columns.start_date' | translate}} </th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'project_planner.columns.end_date' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'project_planner.columns.hours' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'project_planner.columns.status' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'project_planner.columns.actions' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let task_story of sprints.non_sprint_story\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{task_story.name}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"people-lists\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"task_story.task_members?.length; else elseBlock12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a tooltip=\"{{member.firstname}} {{member.lastname}}\" class=\"btn rounded-circle text-dark\" placement=\"top\" *ngFor=\"let member of task_story.task_members; odd as isOdd; even as isEven\" [ngClass]=\"{'btn-profile-info popover-item': isOdd, 'btn-profile-danger': isEven}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"member.avatar\" src=\"{{apiUrl}}/uploads/profile/{{member.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!member.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock12>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{task_story.start_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{task_story.end_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{task_story.estimated_hours}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ('project_planner.sprint_task.story_status' | translate)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"{{status.class}}\" *ngIf=\"status.id == task_story.status\">{{status.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"actions-dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-4\" aria-controls=\"dropdown-basic-4\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-4\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin','projectplanner_edit']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openEditTaskModal(project, task_story.id)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin','projectplanner_delete']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"deleteTask(task_story.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/pages/project-planner-list/project-planner-list.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/pages/project-planner-list/project-planner-list.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageLoaded\" class=\"project_planner\">\n    <div class=\"card pl-2 pr-2\">\n        <!-- Card header -->\n        <div class=\"card-header pl-0 pr-0\">\n            <h4 class=\"main-title mt-2\"><span>{{'project_planner.title' | translate}}</span></h4>\n            <div class=\"card-buttons\">\n                <button class=\"btn btn-create mb-0\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'projects_create']\" (click)=\"openCreateProjectModal()\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></button>\n            </div>\n        </div>\n    </div>\n    <!-- Filter buttons -->\n    <div class=\"row btn-filters mb-3 ng-star-inserted\">\n        <div class=\"col-sm-12\">\n            <button class=\"btn btn-raised open\" type=\"button\" [ngClass]=\"{ 'active': statusfilterId == 1 }\" (click)=\"filterByStatus(1)\">\n                <p>{{'common.status.open' | translate}}</p>\n                <span class=\"badge badge-light\">\n                    {{projectPlanners.statusCount.open}}\n                </span>\n            </button>\n            <button class=\"btn btn-raised in_progress\" type=\"button\" [ngClass]=\"{ 'active': statusfilterId ==2  }\" (click)=\"filterByStatus(2)\">\n                <p>{{'common.status.in_progress' | translate}}</p>\n                <span class=\"badge badge-light\">\n                    {{projectPlanners.statusCount.inProgress}}\n                </span>\n            </button>\n            <button class=\"btn btn-raised on_hold\" type=\"button\" [ngClass]=\"{ 'active': statusfilterId == 3 }\" (click)=\"filterByStatus(3)\">\n                <p>{{'common.status.on_hold' | translate}}</p>\n                <span class=\"badge badge-light\">\n                    {{projectPlanners.statusCount.onHold}}\n                </span>\n            </button>\n            <button class=\"btn btn-raised cancel\" type=\"button\" [ngClass]=\"{ 'active': statusfilterId == 4 }\" (click)=\"filterByStatus(4)\">\n                <p>{{'common.status.cancel' | translate}}</p>\n                <span class=\"badge badge-light\">\n                    {{projectPlanners.statusCount.cancel}}\n                </span>\n            </button>\n            <button class=\"btn btn-raised completed\" type=\"button\" [ngClass]=\"{ 'active': statusfilterId == 5 }\" (click)=\"filterByStatus(5)\">\n                <p>{{'common.status.completed' | translate}}</p>\n                <span class=\"badge badge-light\">\n                    {{projectPlanners.statusCount.completed}}\n                </span>\n            </button>\n            <button class=\"btn btn-raised overdue\" type=\"button\" [ngClass]=\"{ 'active': statusfilterId == 6 }\" (click)=\"filterByStatus(6)\">\n                <p>{{'common.status.overdue' | translate}}</p>\n                <span class=\"badge badge-light\">\n                    {{projectPlanners.statusCount.overdue}}\n                </span>\n            </button>\n            <!-- <button class=\"btn btn-raised btn-secondary\" type=\"button\" [ngClass]=\"{ 'active': statusfilterId == 0 }\" (click)=\"filterByStatus(0)\">\n                <p>{{'common.status.total' | translate}}</p>\n                <span class=\"badge badge-light\">\n                    {{projectPlanners.statusCount.all}}\n                </span>\n            </button> -->\n        </div>\n    </div>\n    <!-- Button filter end -->\n    <div class=\"row project-planner-list\">\n        <ng-container *ngFor=\"let project of projectPlanners.projects; let i = index\">\n            <div class=\"col-lg-6 \">\n                <div class=\"card list-details\">\n                    <div class=\"card-body p-2\">\n                        <div class=\"card-header-action\">\n                            <div class=\"dropdown card-widgets\">\n                            </div>\n                        </div>\n                        <div class=\" task-name d-lg-flex d-md-flex\">\n                            <h4 class=\"task-id\">\n                                <a [routerLink]=\"['/projects-planner/detail', project.id]\" tooltip=\"{{'common.view' | translate}}\"><span>#{{project.generated_id}}</span></a>\n                            </h4>\n                            <p class=\"task-title ml-lg-2\"> - {{project.project_name}}</p>\n                        </div>\n                        <div class=\"text-size d-lg-flex d-md-flex justify-content-between mt-2 mb-2\">\n                            <div class=\"d-flex \">\n                                <div class=\"mb-lg-0 mb-2\"><strong>{{'project_planner.columns.start_date' | translate}}:</strong></div>\n                                <div class=\"ml-2 mr-2\"><span>{{ project.start_date | dateTimeFormatFilter: loginUser.settings.date_format }}</span></div>\n                            </div>\n                            <div class=\"d-flex\">\n                                <div class=\"mb-lg-0 mb-2\"><strong>{{'project_planner.columns.end_date' | translate}}:</strong></div>\n                                <div class=\"ml-2 mr-2\"><span>{{ project.end_date | dateTimeFormatFilter: loginUser.settings.date_format }}</span></div>\n                            </div>\n                        </div>\n                        <p class=\"mb-2 text-size\">\n                            <span class=\"pr-2 text-nowrap mb-2 d-inline-block\">\n                                <i class=\"fa fa-indent mr-1 text-muted\"></i>\n                                <b>{{project.sprints_count}}</b> {{'project_planner.columns.sprint' | translate}}\n                            </span>\n                            <span class=\"pr-2 text-nowrap mb-2 d-inline-block\">\n                                <i class=\"fa fa-tasks mr-1 text-muted\"></i>\n                                <b>{{project.sprintTaskCount}}</b> {{'project_planner.sprint_task.title4' | translate}}\n                            </span>\n                            <span class=\"text-nowrap mb-2 d-inline-block\">\n                                <i class=\"fa fa-list mr-1 text-muted\"></i>\n                                <b>{{project.sprintStoryCount}}</b> {{'project_planner.sprint_task.title5' | translate}}\n                            </span>\n                        </p>\n                        <div class=\"d-lg-flex d-md-flex d-sm-table justify-content-between align-items-center\">\n                            <div class=\" py-1\">\n                                <div class=\"people-lists ml-2 mb-1\">\n                                    <ng-container *ngIf=\"project.assign_members == 'Unassign' || project.assign_members == '' || project.assign_members == null; else elseBlock2\">\n                                        <a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n                                            <img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                        </a>\n                                    </ng-container>\n                                    <ng-template #elseBlock2>\n                                        <ng-container *ngFor=\"let user_id of project.assign_members | stringToArrayFilter index as i; odd as isOdd; even as isEven\">\n                                            <a *ngIf=\"userLists[user_id]\" [routerLink]=\"['/users/profile', user_id]\" tooltip=\"{{userLists[user_id].firstname}} {{userLists[user_id].lastname}}\" class=\"btn rounded-circle popover-item text-dark\" [ngClass]=\"{'btn-profile-info': isOdd, 'btn-profile-danger': isEven}\">\n                                                <img *ngIf=\"userLists[user_id].avatar\" src=\"{{apiUrl}}/uploads/profile/{{userLists[user_id].avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                <img *ngIf=\"!userLists[user_id].avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                            </a>\n                                        </ng-container>\n                                    </ng-template>\n                                </div>\n                            </div>\n                            <div class=\"budges-status mb-1\">\n                                <ng-container *ngFor=\"let status of ('projects.status' | translate)\">\n                                    <span class=\"{{status.class}}\" *ngIf=\"status.id == project.status\">{{status.label}}</span>\n                                </ng-container>\n                            </div>\n                            <div class=\"\">\n                                <a [routerLink]=\"['/projects-planner/detail', project.id]\" tooltip=\"{{'common.view' | translate}}\" class=\"btn btn-view mb-0\"><i class=\"fa fa-eye\"></i> {{'common.view_more' | translate}}</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n        <div class=\"col-md-12\" *ngIf=\"projectPlanners.projects?.length == 0\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"card-content pt-2\">\n                        <div class=\"text-center\">\n                            <img src=\"assets/img/norecord-img.png\" width=\"50\">\n                            <p class=\"mt-1\">{{'common.empty_message.projects' | translate}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n");

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

/***/ "./src/app/core/services/project-planner-sprint.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/services/project-planner-sprint.service.ts ***!
  \*****************************************************************/
/*! exports provided: ProjectPlannerSprintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPlannerSprintService", function() { return ProjectPlannerSprintService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ProjectPlannerSprintService = /** @class */ (function () {
    function ProjectPlannerSprintService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ProjectPlannerSprintService.prototype.getAll = function (params) {
        return this.http.post(this.apiUrl + "/api/projects/projectsprinttasks", params);
    };
    ProjectPlannerSprintService.prototype.create = function (projectPlanner) {
        return this.http.post(this.apiUrl + "/api/projectplannersprint", projectPlanner);
    };
    ProjectPlannerSprintService.prototype.createTask = function (projectPlanner) {
        return this.http.post(this.apiUrl + "/api/projectsprinttask", projectPlanner);
    };
    ProjectPlannerSprintService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/projectplannersprint/" + id);
    };
    ProjectPlannerSprintService.prototype.deleteTask = function (id) {
        return this.http.delete(this.apiUrl + "/api/projectsprinttask/" + id);
    };
    ProjectPlannerSprintService.prototype.update = function (projectPlanner) {
        return this.http.put(this.apiUrl + "/api/projectplannersprint/" + projectPlanner.id, projectPlanner);
    };
    ProjectPlannerSprintService.prototype.updateTask = function (projectPlanner) {
        return this.http.put(this.apiUrl + "/api/projectsprinttask/" + projectPlanner.id, projectPlanner);
    };
    ProjectPlannerSprintService.prototype.getProjectSprintById = function (id) {
        return this.http.get(this.apiUrl + "/api/projectplannersprint/" + id);
    };
    ProjectPlannerSprintService.prototype.getSprintTaskById = function (id) {
        return this.http.get(this.apiUrl + "/api/projectsprinttask/" + id);
    };
    ProjectPlannerSprintService.prototype.moveTask = function (projectPlanner) {
        return this.http.put(this.apiUrl + "/api/projectsprinttask/move/" + projectPlanner.task_id, projectPlanner);
    };
    ProjectPlannerSprintService.prototype.getSprintByProject = function (id) {
        return this.http.get(this.apiUrl + "/api/projectplannersprint/sprintbyproject/" + id);
    };
    ProjectPlannerSprintService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProjectPlannerSprintService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectPlannerSprintService);
    return ProjectPlannerSprintService;
}());



/***/ }),

/***/ "./src/app/core/services/project.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/project.service.ts ***!
  \**************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ProjectService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/projects");
    };
    ProjectService.prototype.getMyProjects = function () {
        return this.http.get(this.apiUrl + "/api/projects/my");
    };
    ProjectService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/projects/" + id);
    };
    ProjectService.prototype.getProjectById = function (id) {
        return this.http.get(this.apiUrl + "/api/projects/getbyid/" + id);
    };
    ProjectService.prototype.create = function (project) {
        return this.http.post(this.apiUrl + "/api/projects", project);
    };
    ProjectService.prototype.update = function (project) {
        return this.http.put(this.apiUrl + "/api/projects/" + project.id, project);
    };
    ProjectService.prototype.delete = function (id, params) {
        return this.http.post(this.apiUrl + "/api/projects/delete/" + id, params);
    };
    ProjectService.prototype.updateNotes = function (project) {
        return this.http.put(this.apiUrl + "/api/projects/notes/" + project.id, project);
    };
    ProjectService.prototype.changeStatus = function (project) {
        return this.http.post(this.apiUrl + "/api/projects/" + project.ids + "/change-status", { "status": project.status });
    };
    ProjectService.prototype.getReleasePlanner = function () {
        return this.http.get(this.apiUrl + "/api/projects/release-planner");
    };
    ProjectService.prototype.getProject = function () {
        return this.http.get(this.apiUrl + "/api/projects/projectmembers", {});
    };
    ProjectService.prototype.getProjectPermission = function (id) {
        return this.http.get(this.apiUrl + "/api/projects/" + id + "/permission", {});
    };
    ProjectService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/modules/pm/project-planner/components/create-project-modal/create-project-modal.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/components/create-project-modal/create-project-modal.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdC1wbGFubmVyL2NvbXBvbmVudHMvY3JlYXRlLXByb2plY3QtbW9kYWwvY3JlYXRlLXByb2plY3QtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/project-planner/components/create-project-modal/create-project-modal.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/components/create-project-modal/create-project-modal.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: CreateProjectModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProjectModalComponent", function() { return CreateProjectModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_team_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/team.service */ "./src/app/core/services/team.service.ts");
/* harmony import */ var _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/custom-fields.service */ "./src/app/core/services/custom-fields.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core/helpers/pm-helper */ "./src/app/core/helpers/pm-helper.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_17__);


















var CreateProjectModalComponent = /** @class */ (function () {
    function CreateProjectModalComponent(translate, datepipe, bsCreateProjectModalRef, router, route, formBuilder, toastr, projectService, clientService, teamService, customFieldsService, authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.bsCreateProjectModalRef = bsCreateProjectModalRef;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectService = projectService;
        this.clientService = clientService;
        this.teamService = teamService;
        this.customFieldsService = customFieldsService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].apiUrl;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.client_id = null;
        this.clients = [];
        this.teams = [];
        this.teamsMembers = [];
        this.teamMemberId = [];
        this.teamMemberIds = [];
        this.logos = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_14__["ProjectLogos"];
        this.progressOptions = {
            floor: 0,
            ceil: 100
        };
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_15__["datepickerConfig"];
        this.editorConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_15__["editorConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    CreateProjectModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        if (this.loginUser.is_client) {
            this.client_id = this.loginUser.id;
        }
        else {
            this.getClients();
        }
        this.getTeams();
        this.loadForms();
        this.getCustomFieldByForm();
    };
    CreateProjectModalComponent.prototype.loadForms = function () {
        var that = this;
        this.createProjectForm = this.formBuilder.group({
            project_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)]],
            project_version: ['1.0', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]{1,2}(?:\.[0-9]{1,2})?$/)]],
            client_id: [this.client_id],
            demo_url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/)],
            start_date: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            end_date: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            billing_type: [null],
            price_rate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(0.1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]],
            status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            estimated_hours: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+\:[0-5][0-9]$/)]],
            assign_to: [null],
            assign_members: [null],
            progress: [0],
            project_hours: [false],
            project_logo: [''],
            description: [''],
            users: [],
            custom_field: this.formBuilder.array([]),
            custom_fields: [null]
        });
        setTimeout(function () {
            that.loadDropzone();
        });
    };
    CreateProjectModalComponent.prototype.setLogos = function (project_logo) {
        if (project_logo === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = project_logo;
        }
        this.createProjectForm.patchValue({ project_logo: this.selected });
    };
    CreateProjectModalComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    Object.defineProperty(CreateProjectModalComponent.prototype, "projectControl", {
        get: function () { return this.createProjectForm.controls; },
        enumerable: true,
        configurable: true
    });
    CreateProjectModalComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_17__(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_17__["createElement"]("<button class=\'btn btn-sm btn-block\'>" + that.translate.instant('common.remove_file') + "</button>");
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
                            that.createProjectForm.patchValue({ project_logo: reader_1.result });
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.createProjectForm.patchValue({ project_logo: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    CreateProjectModalComponent.prototype.loadCustomFields = function () {
        var arr = this.createProjectForm.value.custom_field;
        var obj = {};
        var iRow = 0;
        var that = this;
        arr.forEach(function (item) {
            var key = Object.keys(item)[0];
            obj[key] = item[key];
            if (that.customFields[iRow++].field_type == "date") {
                obj[key] = that.datepipe.transform(item[key], 'yyyy-MM-dd');
            }
        });
        this.createProjectForm.patchValue({ custom_fields: obj });
    };
    CreateProjectModalComponent.prototype.getCustomFieldByForm = function () {
        var _this_1 = this;
        this.customFieldsService.getCustomFieldByForm(1)
            .subscribe(function (data) {
            _this_1.customFields = data;
            if (_this_1.customFields.length > 0) {
                _this_1.addDynamicField(_this_1.customFields);
            }
        });
    };
    CreateProjectModalComponent.prototype.addDynamicField = function (fieldList) {
        var _this_1 = this;
        fieldList.forEach(function (element) {
            var _a;
            var control = _this_1.createProjectForm.controls.custom_field;
            var validators = null;
            if (element.is_required == 1) {
                validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required];
            }
            control.push(_this_1.formBuilder.group((_a = {},
                _a[element.field_column] = [null, validators],
                _a)));
        });
    };
    CreateProjectModalComponent.prototype.getClients = function () {
        var _this_1 = this;
        this.clientService.getAll()
            .subscribe(function (data) {
            _this_1.clients = data;
        });
    };
    CreateProjectModalComponent.prototype.getTeams = function () {
        var _this_1 = this;
        this.teamService.getAll()
            .subscribe(function (data) {
            _this_1.teams = data;
        });
    };
    CreateProjectModalComponent.prototype.startDateChange = function (event) {
        this.createProjectForm.patchValue({ end_date: event });
    };
    CreateProjectModalComponent.prototype.assignGroupChange = function (event) {
        this.teamsMembers = null;
        this.teamMemberIds = [];
        this.createProjectForm.patchValue({ assign_members: null });
        if (event) {
            this.teamsMembers = event.members;
            for (var i = 0; i < this.teamsMembers.length; i++) {
                this.teamMemberId = this.teamsMembers[i].id;
                this.teamMemberIds.push(this.teamMemberId);
            }
        }
        this.createProjectForm.patchValue({ users: this.teamMemberIds });
    };
    CreateProjectModalComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.createProjectForm.invalid) {
            return;
        }
        if (this.customFields.length > 0) {
            this.loadCustomFields();
        }
        this.projectService.create(this.createProjectForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('projects.messages.create'), _this_1.translate.instant('projects.title'));
            _this_1.event.emit({ data: data });
            _this_1.onCancel();
        });
    };
    CreateProjectModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateProjectModalRef.hide();
    };
    CreateProjectModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_9__["ProjectService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_10__["ClientService"] },
        { type: _core_services_team_service__WEBPACK_IMPORTED_MODULE_11__["TeamService"] },
        { type: _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_12__["CustomFieldsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logodropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateProjectModalComponent.prototype, "logodropzone", void 0);
    CreateProjectModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-project-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-project-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/create-project-modal/create-project-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-project-modal.component.scss */ "./src/app/modules/pm/project-planner/components/create-project-modal/create-project-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_9__["ProjectService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_10__["ClientService"],
            _core_services_team_service__WEBPACK_IMPORTED_MODULE_11__["TeamService"],
            _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_12__["CustomFieldsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"]])
    ], CreateProjectModalComponent);
    return CreateProjectModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/project-planner/components/create-sprint-modal/create-sprint-modal.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/components/create-sprint-modal/create-sprint-modal.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdC1wbGFubmVyL2NvbXBvbmVudHMvY3JlYXRlLXNwcmludC1tb2RhbC9jcmVhdGUtc3ByaW50LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pm/project-planner/components/create-sprint-modal/create-sprint-modal.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/components/create-sprint-modal/create-sprint-modal.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: CreateSprintModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSprintModalComponent", function() { return CreateSprintModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../.././../core/services/project-planner-sprint.service */ "./src/app/core/services/project-planner-sprint.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../.././../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");











var CreateSprintModalComponent = /** @class */ (function () {
    function CreateSprintModalComponent(translate, bsCreateProjectSprintModalRef, formBuilder, toastr, projectPlannerSprintService, userService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.bsCreateProjectSprintModalRef = bsCreateProjectSprintModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectPlannerSprintService = projectPlannerSprintService;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isHoursValid = false;
        this.users = [];
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_10__["datepickerConfig"];
        this.editorConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_10__["editorConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    CreateSprintModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
        this.getProjectUsers();
    };
    CreateSprintModalComponent.prototype.loadForms = function () {
        this.projectStartDate = new Date(this.project.start_date);
        this.projectEndDate = new Date(this.project.end_date);
        this.createProjectSprintForm = this.formBuilder.group({
            project_id: [this.project.id],
            sprint_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            sprint_members: [null],
            start_date: [null],
            end_date: [null],
            status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            hours: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+\:[0-5][0-9]$/)],
            description: ['']
        });
        this.isPageLoaded = true;
    };
    Object.defineProperty(CreateSprintModalComponent.prototype, "projectSprintControl", {
        get: function () {
            return this.createProjectSprintForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateSprintModalComponent.prototype.getProjectUsers = function () {
        if (this.project.assign_members == 'Unassign' || this.project.assign_members == null) {
        }
        else {
            var userArr = this.project.assign_members.split(',');
            for (var iRow in userArr) {
                for (var jRow in this.project.users) {
                    if (this.project.users[jRow].id == userArr[iRow]) {
                        this.users.push(this.project.users[jRow]);
                    }
                }
            }
        }
    };
    CreateSprintModalComponent.prototype.startDateChange = function (event) {
        this.createProjectSprintForm.patchValue({ end_date: event });
    };
    CreateSprintModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        this.isHoursValid = false;
        if (this.createProjectSprintForm.invalid) {
            return;
        }
        if (this.createProjectSprintForm.value.hours && this.project.estimated_hours) {
            var projectHours = this.project.estimated_hours.replace(/:/g, '.'), sprintHours = this.createProjectSprintForm.value.hours.replace(/:/g, '.');
            if (parseInt(projectHours) < parseInt(sprintHours)) {
                this.isHoursValid = true;
                return;
            }
        }
        this.projectPlannerSprintService.create(this.createProjectSprintForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('project_planner.sprint.messages.create'), _this.translate.instant('project_planner.sprint.title'));
            _this.event.emit({ data: data });
            _this.onCancel();
        });
    };
    CreateSprintModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateProjectSprintModalRef.hide();
    };
    CreateSprintModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_7__["ProjectPlannerSprintService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] }
    ]; };
    CreateSprintModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-sprint-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-sprint-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/create-sprint-modal/create-sprint-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-sprint-modal.component.scss */ "./src/app/modules/pm/project-planner/components/create-sprint-modal/create-sprint-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_7__["ProjectPlannerSprintService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]])
    ], CreateSprintModalComponent);
    return CreateSprintModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/project-planner/components/create-sprint-task-modal/create-sprint-task-modal.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/components/create-sprint-task-modal/create-sprint-task-modal.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdC1wbGFubmVyL2NvbXBvbmVudHMvY3JlYXRlLXNwcmludC10YXNrLW1vZGFsL2NyZWF0ZS1zcHJpbnQtdGFzay1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/pm/project-planner/components/create-sprint-task-modal/create-sprint-task-modal.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/components/create-sprint-task-modal/create-sprint-task-modal.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: CreateSprintTaskModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSprintTaskModalComponent", function() { return CreateSprintTaskModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../.././../core/services/project-planner-sprint.service */ "./src/app/core/services/project-planner-sprint.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");










var CreateSprintTaskModalComponent = /** @class */ (function () {
    function CreateSprintTaskModalComponent(translate, bsCreateProjectSprintTaskModalRef, formBuilder, toastr, projectPlannerSprintService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.bsCreateProjectSprintTaskModalRef = bsCreateProjectSprintTaskModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectPlannerSprintService = projectPlannerSprintService;
        this.authenticationService = authenticationService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isHoursValid = false;
        this.users = [];
        this.statusLists = [];
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_9__["datepickerConfig"];
        this.editorConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_9__["editorConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    CreateSprintTaskModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.setStatus();
        this.loadForms();
        this.getUsers();
    };
    CreateSprintTaskModalComponent.prototype.loadForms = function () {
        if (this.sprint.start_date) {
            this.sprintStartDate = new Date(this.sprint.start_date);
        }
        if (this.sprint.end_date) {
            this.sprintEndDate = new Date(this.sprint.end_date);
        }
        this.createProjectSprintTaskForm = this.formBuilder.group({
            project_sprint_id: [this.sprint.id],
            type: [this.sprint.type],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            assign_to: [null],
            start_date: [null],
            end_date: [null],
            status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            estimated_hours: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+\:[0-5][0-9]$/)],
            description: ['']
        });
        this.isPageLoaded = true;
    };
    Object.defineProperty(CreateSprintTaskModalComponent.prototype, "projectSprintTaskControl", {
        get: function () {
            return this.createProjectSprintTaskForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateSprintTaskModalComponent.prototype.setStatus = function () {
        if (this.sprint.type == "Story") {
            this.statusLists = [
                { id: 1, name: this.translate.instant('common.status.open') },
                { id: 2, name: this.translate.instant('common.status.in_progress') },
                { id: 3, name: this.translate.instant('common.status.closed') }
            ];
        }
        else {
            this.statusLists = [
                { id: 1, name: this.translate.instant('common.status.open') },
                { id: 2, name: this.translate.instant('common.status.on_hold') },
                { id: 3, name: this.translate.instant('common.status.closed') }
            ];
        }
    };
    CreateSprintTaskModalComponent.prototype.getUsers = function () {
        this.users = this.sprint.sprint_members;
    };
    CreateSprintTaskModalComponent.prototype.startDateChange = function (event) {
        this.createProjectSprintTaskForm.patchValue({ end_date: event });
    };
    CreateSprintTaskModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        this.isHoursValid = false;
        if (this.createProjectSprintTaskForm.invalid) {
            return;
        }
        // --
        // Hours validation
        if (this.createProjectSprintTaskForm.value.estimated_hours && this.sprint.hours) {
            var projectHours = this.sprint.hours.replace(/:/g, '.'), sprintHours = this.createProjectSprintTaskForm.value.estimated_hours.replace(/:/g, '.');
            if (parseInt(projectHours) < parseInt(sprintHours)) {
                this.isHoursValid = true;
                return;
            }
        }
        this.projectPlannerSprintService.createTask(this.createProjectSprintTaskForm.value).subscribe(function (data) {
            _this.toastr.success(_this.createProjectSprintTaskForm.value.type + _this.translate.instant('project_planner.sprint_task.messages.create'), _this.translate.instant('project_planner.title'));
            _this.event.emit({ data: data });
            _this.onCancel();
        });
    };
    CreateSprintTaskModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateProjectSprintTaskModalRef.hide();
    };
    CreateSprintTaskModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_7__["ProjectPlannerSprintService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] }
    ]; };
    CreateSprintTaskModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-sprint-task-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-sprint-task-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/create-sprint-task-modal/create-sprint-task-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-sprint-task-modal.component.scss */ "./src/app/modules/pm/project-planner/components/create-sprint-task-modal/create-sprint-task-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_7__["ProjectPlannerSprintService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]])
    ], CreateSprintTaskModalComponent);
    return CreateSprintTaskModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/project-planner/components/create-task-modal/create-task-modal.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/components/create-task-modal/create-task-modal.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdC1wbGFubmVyL2NvbXBvbmVudHMvY3JlYXRlLXRhc2stbW9kYWwvY3JlYXRlLXRhc2stbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/project-planner/components/create-task-modal/create-task-modal.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/components/create-task-modal/create-task-modal.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CreateTaskModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskModalComponent", function() { return CreateTaskModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../.././../core/services/project-planner-sprint.service */ "./src/app/core/services/project-planner-sprint.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");










var CreateTaskModalComponent = /** @class */ (function () {
    function CreateTaskModalComponent(translate, bsCreateProjectSprintTaskModalRef, formBuilder, toastr, projectPlannerSprintService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.bsCreateProjectSprintTaskModalRef = bsCreateProjectSprintTaskModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectPlannerSprintService = projectPlannerSprintService;
        this.authenticationService = authenticationService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.users = [];
        this.statusLists = [];
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_9__["datepickerConfig"];
        this.editorConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_9__["editorConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    CreateTaskModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.setStatus();
        this.loadForms();
        this.getUsers();
    };
    CreateTaskModalComponent.prototype.loadForms = function () {
        this.createProjectSprintTaskForm = this.formBuilder.group({
            project_id: [this.project.id],
            type: [this.project.type],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            assign_to: [null],
            start_date: [null],
            end_date: [null],
            status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            estimated_hours: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+\:[0-5][0-9]$/)],
            description: ['']
        });
        this.isPageLoaded = true;
    };
    Object.defineProperty(CreateTaskModalComponent.prototype, "projectSprintTaskControl", {
        get: function () {
            return this.createProjectSprintTaskForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateTaskModalComponent.prototype.setStatus = function () {
        if (this.project.type == "Story") {
            this.statusLists = [
                { id: 1, name: this.translate.instant('common.status.open') },
                { id: 2, name: this.translate.instant('common.status.in_progress') },
                { id: 3, name: this.translate.instant('common.status.closed') }
            ];
        }
        else {
            this.statusLists = [
                { id: 1, name: this.translate.instant('common.status.open') },
                { id: 2, name: this.translate.instant('common.status.on_hold') },
                { id: 3, name: this.translate.instant('common.status.closed') }
            ];
        }
    };
    CreateTaskModalComponent.prototype.getUsers = function () {
        if (this.project.assign_members == 'Unassign' || this.project.assign_members == null) {
        }
        else {
            var userArr = this.project.assign_members.split(',');
            for (var iRow in userArr) {
                for (var jRow in this.project.users) {
                    if (this.project.users[jRow].id == userArr[iRow]) {
                        this.users.push(this.project.users[jRow]);
                    }
                }
            }
        }
    };
    CreateTaskModalComponent.prototype.startDateChange = function (event) {
        this.createProjectSprintTaskForm.patchValue({ end_date: event });
    };
    CreateTaskModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createProjectSprintTaskForm.invalid) {
            return;
        }
        this.projectPlannerSprintService.createTask(this.createProjectSprintTaskForm.value).subscribe(function (data) {
            _this.toastr.success(_this.createProjectSprintTaskForm.value.type + _this.translate.instant('project_planner.sprint_task.messages.create'), _this.translate.instant('project_planner.title'));
            _this.event.emit({ data: data });
            _this.onCancel();
        });
    };
    CreateTaskModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateProjectSprintTaskModalRef.hide();
    };
    CreateTaskModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_7__["ProjectPlannerSprintService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] }
    ]; };
    CreateTaskModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-task-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-task-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/create-task-modal/create-task-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-task-modal.component.scss */ "./src/app/modules/pm/project-planner/components/create-task-modal/create-task-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_7__["ProjectPlannerSprintService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]])
    ], CreateTaskModalComponent);
    return CreateTaskModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/project-planner/components/edit-project-modal/edit-project-modal.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/components/edit-project-modal/edit-project-modal.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdC1wbGFubmVyL2NvbXBvbmVudHMvZWRpdC1wcm9qZWN0LW1vZGFsL2VkaXQtcHJvamVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/pm/project-planner/components/edit-project-modal/edit-project-modal.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/components/edit-project-modal/edit-project-modal.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: EditProjectModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProjectModalComponent", function() { return EditProjectModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_team_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/team.service */ "./src/app/core/services/team.service.ts");
/* harmony import */ var _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/custom-fields.service */ "./src/app/core/services/custom-fields.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core/helpers/pm-helper */ "./src/app/core/helpers/pm-helper.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_17__);


















var EditProjectModalComponent = /** @class */ (function () {
    function EditProjectModalComponent(translate, toastr, datepipe, bsEditProjectModalRef, router, route, formBuilder, projectService, clientService, teamService, customFieldsService, authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.toastr = toastr;
        this.datepipe = datepipe;
        this.bsEditProjectModalRef = bsEditProjectModalRef;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.projectService = projectService;
        this.clientService = clientService;
        this.teamService = teamService;
        this.customFieldsService = customFieldsService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].apiUrl;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isLogoLoaded = true;
        this.clients = [];
        this.teams = [];
        this.teamsMembers = [];
        this.teamMemberId = [];
        this.teamMemberIds = [];
        this.logos = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_14__["ProjectLogos"];
        this.progressOptions = {
            floor: 0,
            ceil: 100
        };
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_15__["datepickerConfig"];
        this.editorConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_15__["editorConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    EditProjectModalComponent.prototype.ngOnInit = function () {
        this.getProjectById(this.projectId);
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        if (!this.loginUser.is_client) {
            this.getClients();
        }
    };
    EditProjectModalComponent.prototype.loadForms = function () {
        this.editProjectForm = this.formBuilder.group({
            id: [this.project.id],
            generated_id: [this.project.generated_id],
            project_name: [this.project.project_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)]],
            project_version: [this.project.project_version, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]{1,2}(?:\.[0-9]{1,2})?$/)]],
            client_id: [this.project.client_id],
            demo_url: [this.project.demo_url, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/)],
            start_date: [new Date(this.project.start_date), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            end_date: [new Date(this.project.end_date), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            billing_type: [this.project.billing_type],
            price_rate: [this.project.price_rate, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(0.1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]],
            status: [this.project.status, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            estimated_hours: [this.project.estimated_hours, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+\:[0-5][0-9]$/)]],
            assign_to: [this.project.assign_to],
            assign_members: [this.project.assign_members],
            progress: [this.project.progress],
            project_hours: [this.project.project_hours],
            project_logo: [this.project.project_logo],
            description: [this.project.description],
            users: [],
            custom_field: this.formBuilder.array([]),
            custom_fields: [null]
        });
        this.getCustomFieldByForm();
        this.setLogos(this.project.project_logo);
        this.isPageLoaded = true;
    };
    Object.defineProperty(EditProjectModalComponent.prototype, "projectPlannerControl", {
        get: function () { return this.editProjectForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditProjectModalComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_17__(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var _this_1 = this;
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_17__["createElement"]('<button class=\'btn btn-sm btn-block\'>Remove file</button>');
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
                            that.editProjectForm.patchValue({ project_logo: reader_1.result });
                            _this_1.isLogoLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.editProjectForm.patchValue({ project_logo: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    EditProjectModalComponent.prototype.setLogos = function (project_logo) {
        if (project_logo === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = project_logo;
        }
        this.editProjectForm.patchValue({ project_logo: this.selected });
    };
    EditProjectModalComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    EditProjectModalComponent.prototype.getClients = function () {
        var _this_1 = this;
        this.clientService.getAll()
            .subscribe(function (data) {
            _this_1.clients = data;
        });
    };
    EditProjectModalComponent.prototype.getTeams = function () {
        var _this_1 = this;
        this.teamService.getAll()
            .subscribe(function (data) {
            _this_1.teams = data;
            _this_1.setTeamMembers();
        });
    };
    EditProjectModalComponent.prototype.setTeamMembers = function () {
        this.teamMemberIds = [];
        for (var iRow in this.teams) {
            if (this.teams[iRow].id == this.project.assign_to) {
                for (var jRow in this.teams[iRow].members) {
                    this.teamMemberIds.push({ "id": this.teams[iRow].members[jRow].id });
                }
            }
        }
        this.editProjectForm.patchValue({ users: this.teamMemberIds });
    };
    EditProjectModalComponent.prototype.getCustomFieldByForm = function () {
        var _this_1 = this;
        this.customFieldsService.getCustomFieldByForm(1)
            .subscribe(function (data) {
            _this_1.customFields = data;
            if (_this_1.customFields.length > 0) {
                _this_1.addDynamicField(_this_1.customFields);
            }
        });
    };
    EditProjectModalComponent.prototype.addDynamicField = function (fieldList) {
        var _this_1 = this;
        fieldList.forEach(function (element) {
            var _a, _b;
            var control = _this_1.editProjectForm.controls.custom_field;
            var validators = null;
            if (element.is_required == 1) {
                validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required];
            }
            if (element.field_type == 'date' && _this_1.project[element.field_column] != null) {
                control.push(_this_1.formBuilder.group((_a = {},
                    _a[element.field_column] = [new Date(_this_1.project[element.field_column]), validators],
                    _a)));
            }
            else {
                control.push(_this_1.formBuilder.group((_b = {},
                    _b[element.field_column] = [_this_1.project[element.field_column], validators],
                    _b)));
            }
        });
    };
    EditProjectModalComponent.prototype.getProjectById = function (projectID) {
        var _this_1 = this;
        this.projectService.getById(projectID).subscribe(function (data) {
            _this_1.project = data;
            var projectAllVersion = _this_1.project.project_version;
            var lastIndex = projectAllVersion.lastIndexOf(",");
            _this_1.oldVersion = projectAllVersion.substring(0, lastIndex);
            _this_1.currentVersion = projectAllVersion.substring(lastIndex + 1);
            _this_1.project.project_version = _this_1.currentVersion;
            _this_1.loadForms();
            setTimeout(function () {
                _this_1.loadDropzone();
            });
            _this_1.getTeams();
        });
    };
    EditProjectModalComponent.prototype.removeDropzoneImage = function () {
        this.isLogoLoaded = false;
        this.editProjectForm.patchValue({ project_logo: null });
    };
    EditProjectModalComponent.prototype.startDateChange = function (event) {
        this.editProjectForm.patchValue({ end_date: this.editProjectForm.controls.start_date.value });
    };
    EditProjectModalComponent.prototype.assignGroupChange = function (event) {
        this.teamsMembers = null;
        this.teamMemberIds = [];
        this.editProjectForm.patchValue({ assign_members: null });
        if (event) {
            this.teamsMembers = event.members;
            for (var i = 0; i < this.teamsMembers.length; i++) {
                this.teamMemberIds.push({ "id": this.teamsMembers[i].id });
            }
        }
        this.editProjectForm.patchValue({ users: this.teamMemberIds });
    };
    EditProjectModalComponent.prototype.loadCustomFields = function () {
        var arr = this.editProjectForm.value.custom_field;
        var obj = {};
        var iRow = 0;
        var that = this;
        arr.forEach(function (item) {
            var key = Object.keys(item)[0];
            obj[key] = item[key];
            if (that.customFields[iRow++].field_type == "date") {
                obj[key] = that.datepipe.transform(item[key], 'yyyy-MM-dd');
            }
        });
        this.editProjectForm.patchValue({ custom_fields: obj });
    };
    EditProjectModalComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.editProjectForm.invalid) {
            return;
        }
        if (this.customFields.length > 0) {
            this.loadCustomFields();
        }
        this.editProjectForm.patchValue({ start_date: this.datepipe.transform(this.editProjectForm.value.start_date, 'yyyy-MM-dd') });
        this.editProjectForm.patchValue({ end_date: this.datepipe.transform(this.editProjectForm.value.end_date, 'yyyy-MM-dd') });
        this.editProjectForm.value.ProjectLogos = this.logos;
        this.projectService.update(this.editProjectForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('projects.messages.update'), _this_1.translate.instant('projects.title'));
            _this_1.event.emit({ data: data });
            _this_1.onCancel();
        });
    };
    EditProjectModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditProjectModalRef.hide();
    };
    EditProjectModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_9__["ProjectService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_10__["ClientService"] },
        { type: _core_services_team_service__WEBPACK_IMPORTED_MODULE_11__["TeamService"] },
        { type: _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_12__["CustomFieldsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logodropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditProjectModalComponent.prototype, "logodropzone", void 0);
    EditProjectModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-project-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-project-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/edit-project-modal/edit-project-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-project-modal.component.scss */ "./src/app/modules/pm/project-planner/components/edit-project-modal/edit-project-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_9__["ProjectService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_10__["ClientService"],
            _core_services_team_service__WEBPACK_IMPORTED_MODULE_11__["TeamService"],
            _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_12__["CustomFieldsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"]])
    ], EditProjectModalComponent);
    return EditProjectModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/project-planner/components/edit-sprint-modal/edit-sprint-modal.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/components/edit-sprint-modal/edit-sprint-modal.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdC1wbGFubmVyL2NvbXBvbmVudHMvZWRpdC1zcHJpbnQtbW9kYWwvZWRpdC1zcHJpbnQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/project-planner/components/edit-sprint-modal/edit-sprint-modal.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/components/edit-sprint-modal/edit-sprint-modal.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: EditSprintModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSprintModalComponent", function() { return EditSprintModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../.././../core/services/project-planner-sprint.service */ "./src/app/core/services/project-planner-sprint.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");











var EditSprintModalComponent = /** @class */ (function () {
    function EditSprintModalComponent(translate, bsEditProjectSprintModalRef, datepipe, formBuilder, toastr, projectPlannerSprintService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.bsEditProjectSprintModalRef = bsEditProjectSprintModalRef;
        this.datepipe = datepipe;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectPlannerSprintService = projectPlannerSprintService;
        this.authenticationService = authenticationService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isHoursValid = false;
        this.users = [];
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_10__["datepickerConfig"];
        this.editorConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_10__["editorConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    EditSprintModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.getProjectSprintById(this.sprintId);
    };
    EditSprintModalComponent.prototype.loadForms = function () {
        this.projectStartDate = new Date(this.project.start_date);
        this.projectEndDate = new Date(this.project.end_date);
        this.setDateFormat();
        this.editProjectSprintForm = this.formBuilder.group({
            id: [this.sprint.id],
            project_id: [this.sprint.project_id],
            sprint_name: [this.sprint.sprint_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)]],
            sprint_members: [this.sprint.sprint_members],
            start_date: [this.sprint.start_date],
            end_date: [this.sprint.end_date],
            status: [this.sprint.status, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            hours: [this.sprint.hours, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+\:[0-5][0-9]$/)],
            description: [this.sprint.description]
        });
        this.getProjectUsers();
        this.isPageLoaded = true;
    };
    EditSprintModalComponent.prototype.setDateFormat = function () {
        if (this.sprint.start_date) {
            this.sprint.start_date = new Date(this.sprint.start_date);
        }
        if (this.sprint.end_date) {
            this.sprint.end_date = new Date(this.sprint.end_date);
        }
    };
    Object.defineProperty(EditSprintModalComponent.prototype, "projectSprintControl", {
        get: function () {
            return this.editProjectSprintForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditSprintModalComponent.prototype.getProjectUsers = function () {
        if (this.project.assign_members == 'Unassign' || this.project.assign_members == null) {
        }
        else {
            var userArr = this.project.assign_members.split(',');
            for (var iRow in userArr) {
                for (var jRow in this.project.users) {
                    if (this.project.users[jRow].id == userArr[iRow]) {
                        this.users.push(this.project.users[jRow]);
                    }
                }
            }
        }
    };
    EditSprintModalComponent.prototype.startDateChange = function (event) {
        this.editProjectSprintForm.patchValue({ end_date: this.editProjectSprintForm.value.start_date });
    };
    EditSprintModalComponent.prototype.getProjectSprintById = function (sprintID) {
        var _this = this;
        this.projectPlannerSprintService.getProjectSprintById(sprintID)
            .subscribe(function (data) {
            _this.sprint = data;
            _this.loadForms();
        });
    };
    EditSprintModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        this.isHoursValid = false;
        if (this.editProjectSprintForm.invalid) {
            return;
        }
        // --
        // Hours validation
        if (this.editProjectSprintForm.value.hours && this.project.estimated_hours) {
            var projectHours = this.project.estimated_hours.replace(/:/g, '.'), sprintHours = this.editProjectSprintForm.value.hours.replace(/:/g, '.');
            if (parseInt(projectHours) < parseInt(sprintHours)) {
                this.isHoursValid = true;
                return;
            }
        }
        // --
        // Date format
        this.editProjectSprintForm.value.start_date = this.datepipe.transform(this.editProjectSprintForm.value.start_date, 'yyyy-MM-dd');
        this.editProjectSprintForm.value.end_date = this.datepipe.transform(this.editProjectSprintForm.value.end_date, 'yyyy-MM-dd');
        this.projectPlannerSprintService.update(this.editProjectSprintForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('project_planner.sprint.messages.update'), _this.translate.instant('project_planner.sprint.title'));
            _this.editProjectSprintForm.patchValue({ sprint_members: _this.editProjectSprintForm.value.sprint });
            _this.event.emit({ data: data });
            _this.onCancel();
        });
    };
    EditSprintModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditProjectSprintModalRef.hide();
    };
    EditSprintModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_8__["ProjectPlannerSprintService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] }
    ]; };
    EditSprintModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-sprint-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-sprint-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/edit-sprint-modal/edit-sprint-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-sprint-modal.component.scss */ "./src/app/modules/pm/project-planner/components/edit-sprint-modal/edit-sprint-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_8__["ProjectPlannerSprintService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]])
    ], EditSprintModalComponent);
    return EditSprintModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/project-planner/components/edit-sprint-task-modal/edit-sprint-task-modal.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/components/edit-sprint-task-modal/edit-sprint-task-modal.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdC1wbGFubmVyL2NvbXBvbmVudHMvZWRpdC1zcHJpbnQtdGFzay1tb2RhbC9lZGl0LXNwcmludC10YXNrLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pm/project-planner/components/edit-sprint-task-modal/edit-sprint-task-modal.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/components/edit-sprint-task-modal/edit-sprint-task-modal.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: EditSprintTaskModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSprintTaskModalComponent", function() { return EditSprintTaskModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../.././../core/services/project-planner-sprint.service */ "./src/app/core/services/project-planner-sprint.service.ts");
/* harmony import */ var _core_services_task_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/task.service */ "./src/app/core/services/task.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");












var EditSprintTaskModalComponent = /** @class */ (function () {
    function EditSprintTaskModalComponent(translate, bsEditProjectSprintTaskModalRef, formBuilder, toastr, projectPlannerSprintService, taskService, datepipe, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.bsEditProjectSprintTaskModalRef = bsEditProjectSprintTaskModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectPlannerSprintService = projectPlannerSprintService;
        this.taskService = taskService;
        this.datepipe = datepipe;
        this.authenticationService = authenticationService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isHoursValid = false;
        this.users = [];
        this.statusLists = [];
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_11__["datepickerConfig"];
        this.editorConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_11__["editorConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    EditSprintTaskModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.getTaskById(this.taskId);
    };
    EditSprintTaskModalComponent.prototype.loadForms = function () {
        this.setDateFormat();
        this.users = this.sprint.sprint_members;
        this.editProjectSprintTaskForm = this.formBuilder.group({
            id: [this.taskId],
            project_sprint_id: [this.task.project_sprint_id],
            project_id: [this.sprint.project_id],
            type: [this.task.type],
            name: [this.task.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            assign_to: [this.task.assign_to],
            start_date: [this.task.start_date],
            end_date: [this.task.end_date],
            status: [this.task.status, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            estimated_hours: [this.task.estimated_hours, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+\:[0-5][0-9]$/)],
            description: [this.task.description]
        });
        this.isPageLoaded = true;
    };
    EditSprintTaskModalComponent.prototype.setDateFormat = function () {
        if (this.sprint.start_date) {
            this.sprintStartDate = new Date(this.sprint.start_date);
        }
        if (this.sprint.end_date) {
            this.sprintEndDate = new Date(this.sprint.end_date);
        }
        if (this.task.start_date) {
            this.task.start_date = new Date(this.task.start_date);
        }
        if (this.task.end_date) {
            this.task.end_date = new Date(this.task.end_date);
        }
    };
    Object.defineProperty(EditSprintTaskModalComponent.prototype, "projectSprintTaskControl", {
        get: function () {
            return this.editProjectSprintTaskForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditSprintTaskModalComponent.prototype.setStatus = function () {
        if (this.task.type == "Story") {
            this.statusLists = [
                { id: 1, name: this.translate.instant('common.status.open') },
                { id: 2, name: this.translate.instant('common.status.in_progress') },
                { id: 3, name: this.translate.instant('common.status.closed') }
            ];
        }
        else {
            this.statusLists = [
                { id: 1, name: this.translate.instant('common.status.open') },
                { id: 2, name: this.translate.instant('common.status.on_hold') },
                { id: 3, name: this.translate.instant('common.status.closed') },
                { id: 4, name: this.translate.instant('common.status.released') }
            ];
        }
    };
    EditSprintTaskModalComponent.prototype.startDateChange = function (event) {
        this.editProjectSprintTaskForm.patchValue({ end_date: this.editProjectSprintTaskForm.value.start_date });
    };
    EditSprintTaskModalComponent.prototype.getTaskById = function (taskID) {
        var _this = this;
        this.projectPlannerSprintService.getSprintTaskById(taskID).subscribe(function (data) {
            _this.task = data;
            _this.setStatus();
            _this.loadForms();
        });
    };
    EditSprintTaskModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        this.isHoursValid = false;
        if (this.editProjectSprintTaskForm.invalid) {
            return;
        }
        // --
        // Hours validation
        if (this.editProjectSprintTaskForm.value.estimated_hours && this.sprint.hours) {
            var projectHours = this.sprint.hours.replace(/:/g, '.'), sprintHours = this.editProjectSprintTaskForm.value.estimated_hours.replace(/:/g, '.');
            if (parseInt(projectHours) < parseInt(sprintHours)) {
                this.isHoursValid = true;
                return;
            }
        }
        // --
        // Date Format
        this.editProjectSprintTaskForm.patchValue({ start_date: this.datepipe.transform(this.editProjectSprintTaskForm.value.start_date, 'yyyy-MM-dd') });
        this.editProjectSprintTaskForm.patchValue({ end_date: this.datepipe.transform(this.editProjectSprintTaskForm.value.end_date, 'yyyy-MM-dd') });
        // this.editProjectSprintTaskForm.patchValue({ task_members: this.editProjectSprintTaskForm.value.task_members });
        if (this.editProjectSprintTaskForm.value.status == 4) {
            this.projectPlannerSprintService.updateTask(this.editProjectSprintTaskForm.value).subscribe(function (data) { });
            this.taskService.convertSprintTaskToTask(this.editProjectSprintTaskForm.value).subscribe(function (data) {
                _this.toastr.success(_this.translate.instant('project_planner.sprint_task.messages.released'), _this.translate.instant('project_planner.title'));
                _this.event.emit({ data: data });
                _this.onCancel();
            });
        }
        else {
            this.projectPlannerSprintService.updateTask(this.editProjectSprintTaskForm.value).subscribe(function (data) {
                _this.toastr.success(_this.editProjectSprintTaskForm.value.type + _this.translate.instant('project_planner.sprint_task.messages.update'), _this.translate.instant('project_planner.title'));
                _this.event.emit({ data: data });
                _this.onCancel();
            });
        }
    };
    EditSprintTaskModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditProjectSprintTaskModalRef.hide();
    };
    EditSprintTaskModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_8__["ProjectPlannerSprintService"] },
        { type: _core_services_task_service__WEBPACK_IMPORTED_MODULE_9__["TaskService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] }
    ]; };
    EditSprintTaskModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-sprint-task-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-sprint-task-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/edit-sprint-task-modal/edit-sprint-task-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-sprint-task-modal.component.scss */ "./src/app/modules/pm/project-planner/components/edit-sprint-task-modal/edit-sprint-task-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_8__["ProjectPlannerSprintService"],
            _core_services_task_service__WEBPACK_IMPORTED_MODULE_9__["TaskService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]])
    ], EditSprintTaskModalComponent);
    return EditSprintTaskModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/project-planner/components/edit-task-modal/edit-task-modal.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/components/edit-task-modal/edit-task-modal.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdC1wbGFubmVyL2NvbXBvbmVudHMvZWRpdC10YXNrLW1vZGFsL2VkaXQtdGFzay1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/pm/project-planner/components/edit-task-modal/edit-task-modal.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/components/edit-task-modal/edit-task-modal.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: EditTaskModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskModalComponent", function() { return EditTaskModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../.././../core/services/project-planner-sprint.service */ "./src/app/core/services/project-planner-sprint.service.ts");
/* harmony import */ var _core_services_task_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/task.service */ "./src/app/core/services/task.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");












var EditTaskModalComponent = /** @class */ (function () {
    function EditTaskModalComponent(translate, bsEditProjectSprintTaskModalRef, formBuilder, toastr, projectPlannerSprintService, taskService, datepipe, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.bsEditProjectSprintTaskModalRef = bsEditProjectSprintTaskModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectPlannerSprintService = projectPlannerSprintService;
        this.taskService = taskService;
        this.datepipe = datepipe;
        this.authenticationService = authenticationService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.users = [];
        this.statusLists = [];
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_11__["datepickerConfig"];
        this.editorConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_11__["editorConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    EditTaskModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.getTaskById(this.taskId);
    };
    EditTaskModalComponent.prototype.loadForms = function () {
        this.setDateFormat();
        this.editProjectSprintTaskForm = this.formBuilder.group({
            id: [this.taskId],
            project_id: [this.task.project_id],
            type: [this.task.type],
            name: [this.task.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            assign_to: [this.task.assign_to],
            start_date: [this.task.start_date],
            end_date: [this.task.end_date],
            status: [this.task.status, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            estimated_hours: [this.task.estimated_hours, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+\:[0-5][0-9]$/)],
            description: [this.task.description]
        });
        this.isPageLoaded = true;
    };
    EditTaskModalComponent.prototype.setDateFormat = function () {
        if (this.task.start_date) {
            this.task.start_date = new Date(this.task.start_date);
        }
        if (this.task.end_date) {
            this.task.end_date = new Date(this.task.end_date);
        }
    };
    Object.defineProperty(EditTaskModalComponent.prototype, "projectSprintTaskControl", {
        get: function () {
            return this.editProjectSprintTaskForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditTaskModalComponent.prototype.setStatus = function () {
        if (this.task.type == "Story") {
            this.statusLists = [
                { id: 1, name: this.translate.instant('common.status.open') },
                { id: 2, name: this.translate.instant('common.status.in_progress') },
                { id: 3, name: this.translate.instant('common.status.closed') }
            ];
        }
        else {
            this.statusLists = [
                { id: 1, name: this.translate.instant('common.status.open') },
                { id: 2, name: this.translate.instant('common.status.on_hold') },
                { id: 3, name: this.translate.instant('common.status.closed') },
                { id: 4, name: this.translate.instant('common.status.released') }
            ];
        }
    };
    EditTaskModalComponent.prototype.startDateChange = function (event) {
        this.editProjectSprintTaskForm.patchValue({ end_date: this.editProjectSprintTaskForm.value.start_date });
    };
    EditTaskModalComponent.prototype.getTaskById = function (taskID) {
        var _this = this;
        this.projectPlannerSprintService.getSprintTaskById(taskID).subscribe(function (data) {
            _this.task = data;
            _this.getUsers();
            _this.setStatus();
            _this.loadForms();
        });
    };
    EditTaskModalComponent.prototype.getUsers = function () {
        if (this.project.assign_members == 'Unassign' || this.project.assign_members == null) {
        }
        else {
            var userArr = this.project.assign_members.split(',');
            for (var iRow in userArr) {
                for (var jRow in this.project.users) {
                    if (this.project.users[jRow].id == userArr[iRow]) {
                        this.users.push(this.project.users[jRow]);
                    }
                }
            }
        }
    };
    EditTaskModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editProjectSprintTaskForm.invalid) {
            return;
        }
        // --
        // Date Format
        this.editProjectSprintTaskForm.patchValue({ start_date: this.datepipe.transform(this.editProjectSprintTaskForm.value.start_date, 'yyyy-MM-dd') });
        this.editProjectSprintTaskForm.patchValue({ end_date: this.datepipe.transform(this.editProjectSprintTaskForm.value.end_date, 'yyyy-MM-dd') });
        if (this.editProjectSprintTaskForm.value.status == 4) {
            // this.editProjectSprintTaskForm.patchValue({ name: this.editProjectSprintTaskForm.value.task_name });
            this.projectPlannerSprintService.updateTask(this.editProjectSprintTaskForm.value).subscribe(function (data) { });
            this.taskService.convertSprintTaskToTask(this.editProjectSprintTaskForm.value).subscribe(function (data) {
                _this.toastr.success(_this.translate.instant('project_planner.sprint_task.messages.released'), _this.translate.instant('project_planner.title'));
                _this.event.emit({ data: data });
                _this.onCancel();
            });
        }
        else {
            this.projectPlannerSprintService.updateTask(this.editProjectSprintTaskForm.value).subscribe(function (data) {
                _this.toastr.success(_this.editProjectSprintTaskForm.value.type + _this.translate.instant('project_planner.sprint_task.messages.update'), _this.translate.instant('project_planner.title'));
                _this.event.emit({ data: data });
                _this.onCancel();
            });
        }
    };
    EditTaskModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditProjectSprintTaskModalRef.hide();
    };
    EditTaskModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_8__["ProjectPlannerSprintService"] },
        { type: _core_services_task_service__WEBPACK_IMPORTED_MODULE_9__["TaskService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] }
    ]; };
    EditTaskModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-task-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-task-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/edit-task-modal/edit-task-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-task-modal.component.scss */ "./src/app/modules/pm/project-planner/components/edit-task-modal/edit-task-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_8__["ProjectPlannerSprintService"],
            _core_services_task_service__WEBPACK_IMPORTED_MODULE_9__["TaskService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]])
    ], EditTaskModalComponent);
    return EditTaskModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/project-planner/components/move-task-modal/move-task-modal.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/components/move-task-modal/move-task-modal.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdC1wbGFubmVyL2NvbXBvbmVudHMvbW92ZS10YXNrLW1vZGFsL21vdmUtdGFzay1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/pm/project-planner/components/move-task-modal/move-task-modal.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/components/move-task-modal/move-task-modal.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: MoveTaskModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveTaskModalComponent", function() { return MoveTaskModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../core/services/project-planner-sprint.service */ "./src/app/core/services/project-planner-sprint.service.ts");








var MoveTaskModalComponent = /** @class */ (function () {
    function MoveTaskModalComponent(translate, bsMoveTaskModalRef, formBuilder, toastr, projectPlannerService) {
        this.translate = translate;
        this.bsMoveTaskModalRef = bsMoveTaskModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectPlannerService = projectPlannerService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
    }
    MoveTaskModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
        this.isPageLoaded = true;
    };
    MoveTaskModalComponent.prototype.loadForms = function () {
        this.moveTaskForm = this.formBuilder.group({
            task_id: [this.taskId],
            sprint_id: [this.sprintId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(MoveTaskModalComponent.prototype, "projectPlannerControl", {
        get: function () {
            return this.moveTaskForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    MoveTaskModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.moveTaskForm.invalid) {
            return;
        }
        this.projectPlannerService.moveTask(this.moveTaskForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('project_planner.move_sprint_task.messages.move'), _this.translate.instant('project_planner.title'));
            _this.event.emit({ data: data });
            _this.onCancel();
        });
    };
    MoveTaskModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsMoveTaskModalRef.hide();
    };
    MoveTaskModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_7__["ProjectPlannerSprintService"] }
    ]; };
    MoveTaskModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-move-task-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./move-task-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/components/move-task-modal/move-task-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./move-task-modal.component.scss */ "./src/app/modules/pm/project-planner/components/move-task-modal/move-task-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_7__["ProjectPlannerSprintService"]])
    ], MoveTaskModalComponent);
    return MoveTaskModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/project-planner/pages/project-planner-detail/project-planner-detail.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/pages/project-planner-detail/project-planner-detail.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".width-3-per {\n  width: 3%;\n}\n\n.width-12-per {\n  width: 12%;\n}\n\n.width-8-per {\n  width: 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9wcm9qZWN0LXBsYW5uZXIvcGFnZXMvcHJvamVjdC1wbGFubmVyLWRldGFpbC9wcm9qZWN0LXBsYW5uZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BtL3Byb2plY3QtcGxhbm5lci9wYWdlcy9wcm9qZWN0LXBsYW5uZXItZGV0YWlsL3Byb2plY3QtcGxhbm5lci1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxTQUFBO0FDQ0Q7O0FERUE7RUFDQyxVQUFBO0FDQ0Q7O0FERUE7RUFDQyxTQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BtL3Byb2plY3QtcGxhbm5lci9wYWdlcy9wcm9qZWN0LXBsYW5uZXItZGV0YWlsL3Byb2plY3QtcGxhbm5lci1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkdGgtMy1wZXIge1xuXHR3aWR0aDogMyU7XG59XG5cbi53aWR0aC0xMi1wZXIge1xuXHR3aWR0aDogMTIlO1xufVxuXG4ud2lkdGgtOC1wZXJ7XG5cdHdpZHRoOiA4JTtcbn0iLCIud2lkdGgtMy1wZXIge1xuICB3aWR0aDogMyU7XG59XG5cbi53aWR0aC0xMi1wZXIge1xuICB3aWR0aDogMTIlO1xufVxuXG4ud2lkdGgtOC1wZXIge1xuICB3aWR0aDogOCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/pm/project-planner/pages/project-planner-detail/project-planner-detail.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/pages/project-planner-detail/project-planner-detail.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ProjectPlannerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPlannerDetailComponent", function() { return ProjectPlannerDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../.././../core/services/project-planner-sprint.service */ "./src/app/core/services/project-planner-sprint.service.ts");
/* harmony import */ var _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../../../core/helpers/pm-helper */ "./src/app/core/helpers/pm-helper.ts");
/* harmony import */ var _components_edit_project_modal_edit_project_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../components/edit-project-modal/edit-project-modal.component */ "./src/app/modules/pm/project-planner/components/edit-project-modal/edit-project-modal.component.ts");
/* harmony import */ var _components_create_sprint_modal_create_sprint_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../components/create-sprint-modal/create-sprint-modal.component */ "./src/app/modules/pm/project-planner/components/create-sprint-modal/create-sprint-modal.component.ts");
/* harmony import */ var _components_edit_sprint_modal_edit_sprint_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../components/edit-sprint-modal/edit-sprint-modal.component */ "./src/app/modules/pm/project-planner/components/edit-sprint-modal/edit-sprint-modal.component.ts");
/* harmony import */ var _components_create_sprint_task_modal_create_sprint_task_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../components/create-sprint-task-modal/create-sprint-task-modal.component */ "./src/app/modules/pm/project-planner/components/create-sprint-task-modal/create-sprint-task-modal.component.ts");
/* harmony import */ var _components_edit_sprint_task_modal_edit_sprint_task_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../../components/edit-sprint-task-modal/edit-sprint-task-modal.component */ "./src/app/modules/pm/project-planner/components/edit-sprint-task-modal/edit-sprint-task-modal.component.ts");
/* harmony import */ var _components_create_task_modal_create_task_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../../components/create-task-modal/create-task-modal.component */ "./src/app/modules/pm/project-planner/components/create-task-modal/create-task-modal.component.ts");
/* harmony import */ var _components_edit_task_modal_edit_task_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../../components/edit-task-modal/edit-task-modal.component */ "./src/app/modules/pm/project-planner/components/edit-task-modal/edit-task-modal.component.ts");
/* harmony import */ var _components_move_task_modal_move_task_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./../../components/move-task-modal/move-task-modal.component */ "./src/app/modules/pm/project-planner/components/move-task-modal/move-task-modal.component.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
























var ProjectPlannerDetailComponent = /** @class */ (function () {
    function ProjectPlannerDetailComponent(translate, toastr, route, router, modalService, userService, clientService, projectService, projectPlannerSprintService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.userService = userService;
        this.clientService = clientService;
        this.projectService = projectService;
        this.projectPlannerSprintService = projectPlannerSprintService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.permissions = [];
        this.hideElementsChild = [];
        this.clients = [];
        this.userLists = [];
        this.projectstatusKeyValue = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_13__["project_status_key_value"];
        this.dtOptions = {};
        this.isPageLoaded = false;
        this.datepickerConfigs = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.projectId = params.get('id');
        });
    }
    ProjectPlannerDetailComponent.prototype.ngOnInit = function () {
        if (!this.loginUser.is_client) {
            this.getClient();
        }
        this.getUserkeyBy();
        this.getCheckPermission();
    };
    ProjectPlannerDetailComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ProjectPlannerDetailComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    // rerender(): void {
    // 	setTimeout(() => {
    // 		this.dtTrigger.next();
    // 	});
    // }
    // rerender(): void {
    // 	this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    // 		dtInstance.destroy();
    // 		this.dtTrigger.next();
    // 	});
    // }
    ProjectPlannerDetailComponent.prototype.getClient = function () {
        var that = this;
        that.clientService.getClientsWithTrashed().subscribe(function (data) {
            for (var iRow in data) {
                that.clients.push({
                    label: data[iRow].firstname + " " + data[iRow].lastname,
                    value: data[iRow].id
                });
            }
        });
    };
    ProjectPlannerDetailComponent.prototype.getUserkeyBy = function () {
        var _this = this;
        this.userService.getUserkeyBy().subscribe(function (data) {
            _this.userLists = data;
        });
    };
    ProjectPlannerDetailComponent.prototype.getCheckPermission = function () {
        var _this = this;
        this.projectService.getProjectPermission(this.projectId).subscribe(function (res) {
            _this.permissions['edit_delete_permission'] = res;
            if (_this.permissions.edit_delete_permission.view) {
                _this.getProjectById(true);
            }
            else {
                _this.router.navigate(['projects-planner']);
            }
        }, function (error) {
            _this.router.navigate(['projects-planner']);
        });
    };
    ProjectPlannerDetailComponent.prototype.getProjectById = function (isLoad) {
        var _this = this;
        if (isLoad === void 0) { isLoad = false; }
        this.projectService.getProjectById(this.projectId).subscribe(function (data) {
            _this.project = data;
            _this.getSprintByProject(isLoad);
        });
    };
    ProjectPlannerDetailComponent.prototype.getSprintByProject = function (isLoad) {
        var _this = this;
        if (isLoad === void 0) { isLoad = false; }
        this.projectPlannerSprintService.getSprintByProject(this.projectId).subscribe(function (data) {
            _this.sprints = data;
            if (isLoad) {
                _this.loadDatatable();
            }
            _this.isPageLoaded = true;
        });
    };
    ProjectPlannerDetailComponent.prototype.loadDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            paging: true,
            pageLength: that.loginUser.settings.tables_pagination_limit,
            responsive: false,
            autoWidth: false,
            order: [0],
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
            columnDefs: [
                { width: "30%", targets: [0] },
                { width: "20%", targets: [1] },
                { width: "10%", targets: [2] },
                { width: "10%", targets: [3] },
                { width: "10%", targets: [4] },
                { width: "10%", targets: [5] },
                { width: "10%", targets: [6], sortable: false }
            ]
        };
        setTimeout(function () {
            _this.dtTrigger.next();
        });
    };
    ProjectPlannerDetailComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.projectstatusKeyValue[statusKey];
    };
    ProjectPlannerDetailComponent.prototype.changeProjectStatus = function (projectIDs, status) {
        var _this = this;
        var changeProject = {
            ids: projectIDs,
            status: status.id
        };
        this.projectService.changeStatus(changeProject).subscribe(function (data) {
            _this.getProjectById();
            _this.toastr.success(_this.translate.instant('projects.messages.status'), _this.translate.instant('projects.title'));
        });
    };
    ProjectPlannerDetailComponent.prototype.saveProjectDetail = function (name, value) {
        var _this = this;
        this.project[name] = value;
        if (name == 'start_date' && this.project.end_date < this.project.start_date) {
            this.project.end_date = new Date(value);
        }
        this.projectService.update(this.project).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('projects.messages.update'), _this.translate.instant('projects.title'));
            _this.getProjectById();
        });
    };
    ProjectPlannerDetailComponent.prototype.changeSprintId = function (index) {
        this.hideElementsChild[index] = !this.hideElementsChild[index];
    };
    ProjectPlannerDetailComponent.prototype.openEditProjectModal = function (projectID) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn",
            initialState: {
                projectId: projectID,
            }
        };
        this.modalRef = this.modalService.show(_components_edit_project_modal_edit_project_modal_component__WEBPACK_IMPORTED_MODULE_14__["EditProjectModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getProjectById();
        });
    };
    ProjectPlannerDetailComponent.prototype.openCreateSprintModal = function () {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn",
            initialState: {
                project: this.project,
            }
        };
        this.modalRef = this.modalService.show(_components_create_sprint_modal_create_sprint_modal_component__WEBPACK_IMPORTED_MODULE_15__["CreateSprintModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getSprintByProject();
        });
    };
    ProjectPlannerDetailComponent.prototype.openEditSprintModal = function (project, sprintID) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn",
            initialState: {
                project: project,
                sprintId: sprintID,
            }
        };
        this.modalRef = this.modalService.show(_components_edit_sprint_modal_edit_sprint_modal_component__WEBPACK_IMPORTED_MODULE_16__["EditSprintModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getSprintByProject();
        });
    };
    ProjectPlannerDetailComponent.prototype.deleteSprint = function (sprintId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('project_planner.sprint.title').toLowerCase(),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.projectPlannerSprintService.delete(sprintId).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('project_planner.sprint.messages.delete'), _this.translate.instant('project_planner.sprint.title'));
                    _this.getSprintByProject();
                });
            }
        });
    };
    ProjectPlannerDetailComponent.prototype.openCreateSprintTaskModal = function (sprintData, type) {
        var _this = this;
        sprintData.type = type;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn",
            initialState: {
                sprint: sprintData
            }
        };
        this.modalRef = this.modalService.show(_components_create_sprint_task_modal_create_sprint_task_modal_component__WEBPACK_IMPORTED_MODULE_17__["CreateSprintTaskModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getSprintByProject();
        });
    };
    ProjectPlannerDetailComponent.prototype.openEditSprintTaskModal = function (sprint, taskID) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn",
            initialState: {
                sprint: sprint,
                taskId: taskID,
            }
        };
        this.modalRef = this.modalService.show(_components_edit_sprint_task_modal_edit_sprint_task_modal_component__WEBPACK_IMPORTED_MODULE_18__["EditSprintTaskModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getSprintByProject();
        });
    };
    ProjectPlannerDetailComponent.prototype.openCreateTaskModal = function (project, type) {
        var _this = this;
        project.type = type;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn",
            initialState: {
                project: project
            }
        };
        this.modalRef = this.modalService.show(_components_create_task_modal_create_task_modal_component__WEBPACK_IMPORTED_MODULE_19__["CreateTaskModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getSprintByProject();
        });
    };
    ProjectPlannerDetailComponent.prototype.openEditTaskModal = function (project, taskID) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn",
            initialState: {
                taskId: taskID,
                project: project
            }
        };
        this.modalRef = this.modalService.show(_components_edit_task_modal_edit_task_modal_component__WEBPACK_IMPORTED_MODULE_20__["EditTaskModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getSprintByProject();
        });
    };
    ProjectPlannerDetailComponent.prototype.openMoveTaskModal = function (taskID, sprintID) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                taskId: taskID,
                sprintId: sprintID,
                sprints: this.sprints.sprint_tasks
            }
        };
        this.modalRef = this.modalService.show(_components_move_task_modal_move_task_modal_component__WEBPACK_IMPORTED_MODULE_21__["MoveTaskModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getSprintByProject();
        });
    };
    ProjectPlannerDetailComponent.prototype.deleteTask = function (taskId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('project_planner.sprint_task.title4').toLowerCase(),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.projectPlannerSprintService.deleteTask(taskId).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('project_planner.sprint_task.messages.task_delete'), _this.translate.instant('project_planner.sprint_task.title'));
                    _this.getSprintByProject();
                });
            }
        });
    };
    ProjectPlannerDetailComponent.prototype.deleteStory = function (taskId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('project_planner.sprint_task.title5').toLowerCase(),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.projectPlannerSprintService.deleteTask(taskId).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('project_planner.sprint_task.messages.story_delete'), _this.translate.instant('project_planner.sprint_task.title'));
                    _this.getSprintByProject();
                });
            }
        });
    };
    ProjectPlannerDetailComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_10__["ClientService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__["ProjectService"] },
        { type: _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_12__["ProjectPlannerSprintService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_22__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], ProjectPlannerDetailComponent.prototype, "dtElement", void 0);
    ProjectPlannerDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-planner-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-planner-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/pages/project-planner-detail/project-planner-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-planner-detail.component.scss */ "./src/app/modules/pm/project-planner/pages/project-planner-detail/project-planner-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_10__["ClientService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__["ProjectService"],
            _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_12__["ProjectPlannerSprintService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_22__["AuthenticationService"]])
    ], ProjectPlannerDetailComponent);
    return ProjectPlannerDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/project-planner/pages/project-planner-list/project-planner-list.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/pages/project-planner-list/project-planner-list.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".width-3-per {\n  width: 3%;\n}\n\n.width-12-per {\n  width: 12%;\n}\n\n.width-8-per {\n  width: 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9wcm9qZWN0LXBsYW5uZXIvcGFnZXMvcHJvamVjdC1wbGFubmVyLWxpc3QvcHJvamVjdC1wbGFubmVyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdC1wbGFubmVyL3BhZ2VzL3Byb2plY3QtcGxhbm5lci1saXN0L3Byb2plY3QtcGxhbm5lci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsU0FBQTtBQ0NEOztBREVBO0VBQ0MsVUFBQTtBQ0NEOztBREVBO0VBQ0MsU0FBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wbS9wcm9qZWN0LXBsYW5uZXIvcGFnZXMvcHJvamVjdC1wbGFubmVyLWxpc3QvcHJvamVjdC1wbGFubmVyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkdGgtMy1wZXIge1xuXHR3aWR0aDogMyU7XG59XG5cbi53aWR0aC0xMi1wZXIge1xuXHR3aWR0aDogMTIlO1xufVxuXG4ud2lkdGgtOC1wZXJ7XG5cdHdpZHRoOiA4JTtcbn0iLCIud2lkdGgtMy1wZXIge1xuICB3aWR0aDogMyU7XG59XG5cbi53aWR0aC0xMi1wZXIge1xuICB3aWR0aDogMTIlO1xufVxuXG4ud2lkdGgtOC1wZXIge1xuICB3aWR0aDogOCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/pm/project-planner/pages/project-planner-list/project-planner-list.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/pages/project-planner-list/project-planner-list.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProjectPlannerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPlannerListComponent", function() { return ProjectPlannerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../.././../core/services/project-planner-sprint.service */ "./src/app/core/services/project-planner-sprint.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../.././../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _components_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../components/create-project-modal/create-project-modal.component */ "./src/app/modules/pm/project-planner/components/create-project-modal/create-project-modal.component.ts");
/* harmony import */ var _components_edit_project_modal_edit_project_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../components/edit-project-modal/edit-project-modal.component */ "./src/app/modules/pm/project-planner/components/edit-project-modal/edit-project-modal.component.ts");
/* harmony import */ var _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../core/helpers/pm-helper */ "./src/app/core/helpers/pm-helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");

















var ProjectPlannerListComponent = /** @class */ (function () {
    function ProjectPlannerListComponent(translate, toastr, ngxRolesService, modalService, http, projectPlannerService, userService, projectService, route, router, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.toastr = toastr;
        this.ngxRolesService = ngxRolesService;
        this.modalService = modalService;
        this.http = http;
        this.projectPlannerService = projectPlannerService;
        this.userService = userService;
        this.projectService = projectService;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].apiUrl;
        this.userLists = [];
        this.isPageLoaded = false;
        this.statusfilterId = 0;
        this.logos = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_15__["ProjectLogos"];
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    ProjectPlannerListComponent.prototype.ngOnInit = function () {
        this.getUserkeyBy();
        this.getAllProjectPlanner();
    };
    ProjectPlannerListComponent.prototype.getCheckPermission = function (project, action) {
        var isPermission = false;
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            isPermission = true;
        }
        if (project.user_id == this.loginUser.id && project.pivot[action]) {
            isPermission = true;
        }
        if (action == 'view') {
            for (var iRow in project.users) {
                if (project.users[iRow].id == this.loginUser.id) {
                    isPermission = true;
                }
            }
        }
        return isPermission;
    };
    ProjectPlannerListComponent.prototype.getAllProjectPlanner = function () {
        var _this = this;
        this.projectPlannerService.getAll({ 'statusId': this.statusfilterId }).subscribe(function (data) {
            _this.projectPlanners = data;
            _this.isPageLoaded = true;
        });
    };
    ProjectPlannerListComponent.prototype.filterByStatus = function (statusfilterId) {
        this.statusfilterId = statusfilterId;
        this.getAllProjectPlanner();
    };
    ProjectPlannerListComponent.prototype.getUserkeyBy = function () {
        var _this = this;
        this.userService.getUserkeyBy().subscribe(function (data) {
            _this.userLists = data;
        });
    };
    ProjectPlannerListComponent.prototype.openCreateProjectModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_13__["CreateProjectModalComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getAllProjectPlanner();
        });
    };
    ProjectPlannerListComponent.prototype.openEditProjectModal = function (projectID) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn",
            initialState: {
                projectId: projectID,
            }
        };
        this.modalRef = this.modalService.show(_components_edit_project_modal_edit_project_modal_component__WEBPACK_IMPORTED_MODULE_14__["EditProjectModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getAllProjectPlanner();
        });
    };
    ProjectPlannerListComponent.prototype.deleteProject = function (projectId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text4'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.projectService.delete(projectId, { 'ProjectLogos': _this.logos }).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('projects.messages.delete'), _this.translate.instant('project_planner.title'));
                    _this.getAllProjectPlanner();
                });
            }
        });
    };
    ProjectPlannerListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxRolesService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_9__["ProjectPlannerSprintService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__["ProjectService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] }
    ]; };
    ProjectPlannerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-planner-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-planner-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/project-planner/pages/project-planner-list/project-planner-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-planner-list.component.scss */ "./src/app/modules/pm/project-planner/pages/project-planner-list/project-planner-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxRolesService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _core_services_project_planner_sprint_service__WEBPACK_IMPORTED_MODULE_9__["ProjectPlannerSprintService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]])
    ], ProjectPlannerListComponent);
    return ProjectPlannerListComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/project-planner/project-planner-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/project-planner-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ProjectPlannerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPlannerRoutingModule", function() { return ProjectPlannerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_project_planner_list_project_planner_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/project-planner-list/project-planner-list.component */ "./src/app/modules/pm/project-planner/pages/project-planner-list/project-planner-list.component.ts");
/* harmony import */ var _pages_project_planner_detail_project_planner_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/project-planner-detail/project-planner-detail.component */ "./src/app/modules/pm/project-planner/pages/project-planner-detail/project-planner-detail.component.ts");






var routes = [
    {
        path: '',
        component: _pages_project_planner_list_project_planner_list_component__WEBPACK_IMPORTED_MODULE_4__["ProjectPlannerListComponent"]
    },
    {
        path: 'detail/:id',
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
        component: _pages_project_planner_detail_project_planner_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProjectPlannerDetailComponent"],
        data: {
            breadcrumbs: {
                text: "common.detail",
                icon: "fa fa-product-hunt",
                hasParams: true,
                show: true,
                isHome: true
            },
            permissions: {
                only: ['admin', 'super_admin', 'projects_view']
            }
        }
    }
];
var ProjectPlannerRoutingModule = /** @class */ (function () {
    function ProjectPlannerRoutingModule() {
    }
    ProjectPlannerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProjectPlannerRoutingModule);
    return ProjectPlannerRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/pm/project-planner/project-planner.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/pm/project-planner/project-planner.module.ts ***!
  \**********************************************************************/
/*! exports provided: ProjectPlannerModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPlannerModule", function() { return ProjectPlannerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _project_planner_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./project-planner-routing.module */ "./src/app/modules/pm/project-planner/project-planner-routing.module.ts");
/* harmony import */ var _components_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/create-project-modal/create-project-modal.component */ "./src/app/modules/pm/project-planner/components/create-project-modal/create-project-modal.component.ts");
/* harmony import */ var _components_edit_project_modal_edit_project_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/edit-project-modal/edit-project-modal.component */ "./src/app/modules/pm/project-planner/components/edit-project-modal/edit-project-modal.component.ts");
/* harmony import */ var _components_create_sprint_modal_create_sprint_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/create-sprint-modal/create-sprint-modal.component */ "./src/app/modules/pm/project-planner/components/create-sprint-modal/create-sprint-modal.component.ts");
/* harmony import */ var _pages_project_planner_list_project_planner_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/project-planner-list/project-planner-list.component */ "./src/app/modules/pm/project-planner/pages/project-planner-list/project-planner-list.component.ts");
/* harmony import */ var _components_create_task_modal_create_task_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/create-task-modal/create-task-modal.component */ "./src/app/modules/pm/project-planner/components/create-task-modal/create-task-modal.component.ts");
/* harmony import */ var _components_edit_sprint_modal_edit_sprint_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/edit-sprint-modal/edit-sprint-modal.component */ "./src/app/modules/pm/project-planner/components/edit-sprint-modal/edit-sprint-modal.component.ts");
/* harmony import */ var _components_edit_task_modal_edit_task_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/edit-task-modal/edit-task-modal.component */ "./src/app/modules/pm/project-planner/components/edit-task-modal/edit-task-modal.component.ts");
/* harmony import */ var _components_move_task_modal_move_task_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/move-task-modal/move-task-modal.component */ "./src/app/modules/pm/project-planner/components/move-task-modal/move-task-modal.component.ts");
/* harmony import */ var _pages_project_planner_detail_project_planner_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/project-planner-detail/project-planner-detail.component */ "./src/app/modules/pm/project-planner/pages/project-planner-detail/project-planner-detail.component.ts");
/* harmony import */ var _components_create_sprint_task_modal_create_sprint_task_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/create-sprint-task-modal/create-sprint-task-modal.component */ "./src/app/modules/pm/project-planner/components/create-sprint-task-modal/create-sprint-task-modal.component.ts");
/* harmony import */ var _components_edit_sprint_task_modal_edit_sprint_task_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/edit-sprint-task-modal/edit-sprint-task-modal.component */ "./src/app/modules/pm/project-planner/components/edit-sprint-task-modal/edit-sprint-task-modal.component.ts");




























var ProjectPlannerModule = /** @class */ (function () {
    function ProjectPlannerModule() {
    }
    ProjectPlannerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_17__["CreateProjectModalComponent"],
                _components_edit_project_modal_edit_project_modal_component__WEBPACK_IMPORTED_MODULE_18__["EditProjectModalComponent"],
                _components_create_sprint_modal_create_sprint_modal_component__WEBPACK_IMPORTED_MODULE_19__["CreateSprintModalComponent"],
                _pages_project_planner_list_project_planner_list_component__WEBPACK_IMPORTED_MODULE_20__["ProjectPlannerListComponent"],
                _components_create_task_modal_create_task_modal_component__WEBPACK_IMPORTED_MODULE_21__["CreateTaskModalComponent"],
                _components_edit_sprint_modal_edit_sprint_modal_component__WEBPACK_IMPORTED_MODULE_22__["EditSprintModalComponent"],
                _components_edit_task_modal_edit_task_modal_component__WEBPACK_IMPORTED_MODULE_23__["EditTaskModalComponent"],
                _components_move_task_modal_move_task_modal_component__WEBPACK_IMPORTED_MODULE_24__["MoveTaskModalComponent"],
                _pages_project_planner_detail_project_planner_detail_component__WEBPACK_IMPORTED_MODULE_25__["ProjectPlannerDetailComponent"],
                _components_create_sprint_task_modal_create_sprint_task_modal_component__WEBPACK_IMPORTED_MODULE_26__["CreateSprintTaskModalComponent"],
                _components_edit_sprint_task_modal_edit_sprint_task_modal_component__WEBPACK_IMPORTED_MODULE_27__["EditSprintTaskModalComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _project_planner_routing_module__WEBPACK_IMPORTED_MODULE_16__["ProjectPlannerRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsModule"],
                ng5_slider__WEBPACK_IMPORTED_MODULE_9__["Ng5SliderModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_10__["NgxEditorModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"]
            ],
            entryComponents: [
                _components_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_17__["CreateProjectModalComponent"],
                _components_edit_project_modal_edit_project_modal_component__WEBPACK_IMPORTED_MODULE_18__["EditProjectModalComponent"],
                _components_create_sprint_modal_create_sprint_modal_component__WEBPACK_IMPORTED_MODULE_19__["CreateSprintModalComponent"],
                _components_create_sprint_task_modal_create_sprint_task_modal_component__WEBPACK_IMPORTED_MODULE_26__["CreateSprintTaskModalComponent"],
                _components_edit_sprint_task_modal_edit_sprint_task_modal_component__WEBPACK_IMPORTED_MODULE_27__["EditSprintTaskModalComponent"],
                _components_create_task_modal_create_task_modal_component__WEBPACK_IMPORTED_MODULE_21__["CreateTaskModalComponent"],
                _components_edit_sprint_modal_edit_sprint_modal_component__WEBPACK_IMPORTED_MODULE_22__["EditSprintModalComponent"],
                _components_edit_task_modal_edit_task_modal_component__WEBPACK_IMPORTED_MODULE_23__["EditTaskModalComponent"],
                _components_move_task_modal_move_task_modal_component__WEBPACK_IMPORTED_MODULE_24__["MoveTaskModalComponent"]
            ]
        })
    ], ProjectPlannerModule);
    return ProjectPlannerModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=modules-pm-project-planner-project-planner-module.js.map