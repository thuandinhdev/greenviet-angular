(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-admin-meeting-meeting-module~modules-pm-defects-defects-module~modules-pm-incidents-~8e5a1dec"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>&nbsp;{{'timesheet.create.title1' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"createTimesheetForm\" (ngSubmit)=\"onSubmit()\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.start_time.errors }\">\n\t\t\t\t\t\t<label for=\"start_time\">{{'timesheet.create.fields.start_time' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<owl-date-time #startDT></owl-date-time>\n\t\t\t\t\t\t\t<input class=\"form-control\" [owlDateTimeTrigger]=\"startDT\" [owlDateTime]=\"startDT\" formControlName=\"start_time\" id=\"start_time\" placeholder=\"{{'timesheet.create.placeholders.placeholder1' | translate}}\" aria-describedby=\"inputGroupPrepend1\" (dateTimeChange)=\"startTimeChange($event)\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && timesheetControl.start_time.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"timesheetControl.start_time.errors.required\">{{'timesheet.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.end_time.errors }\">\n\t\t\t\t\t\t<label for=\"end_time\">{{'timesheet.create.fields.end_time' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<owl-date-time #endDT></owl-date-time>\n\t\t\t\t\t\t\t<input class=\"form-control\" [owlDateTimeTrigger]=\"endDT\" [owlDateTime]=\"endDT\" [min]=\"createTimesheetForm.get('start_time').value\" formControlName=\"end_time\" id=\"end_time\" placeholder=\"{{'timesheet.create.placeholders.placeholder2' | translate}}\" aria-describedby=\"inputGroupPrepend2\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && timesheetControl.end_time.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"timesheetControl.end_time.errors.required\">{{'timesheet.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"note\">{{'timesheet.create.fields.note' | translate}}</label>\n\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"note\" id=\"note\" placeholder=\"{{'timesheet.create.placeholders.placeholder3' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.note.errors }\"></textarea>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && timesheetControl.note.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"timesheetControl.note.errors.required\">{{'timesheet.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.create' | translate}}</button>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>&nbsp;{{'timesheet.create.title2' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsEditRoleModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"editTimesheetForm\" (ngSubmit)=\"onSubmit()\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.start_time.errors }\">\n\t\t\t\t\t\t<label for=\"start_time\">{{'timesheet.create.fields.start_time' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<owl-date-time #startDT></owl-date-time>\n\t\t\t\t\t\t\t<input class=\"form-control\" [owlDateTimeTrigger]=\"startDT\" [owlDateTime]=\"startDT\" formControlName=\"start_time\" id=\"start_time\" placeholder=\"{{'timesheet.create.placeholders.placeholder1' | translate}}\" aria-describedby=\"inputGroupPrepend1\" (dateTimeChange)=\"startTimeChange($event)\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && timesheetControl.start_time.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"timesheetControl.start_time.errors.required\">{{'timesheet.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.end_time.errors }\">\n\t\t\t\t\t\t<label for=\"end_time\">{{'timesheet.create.fields.end_time' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<owl-date-time #endDT></owl-date-time>\n\t\t\t\t\t\t\t<input class=\"form-control\" [owlDateTimeTrigger]=\"endDT\" [owlDateTime]=\"endDT\" [min]=\"editTimesheetForm.get('start_time').value\" formControlName=\"end_time\" id=\"end_time\" placeholder=\"{{'timesheet.create.placeholders.placeholder2' | translate}}\" aria-describedby=\"inputGroupPrepend2\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && timesheetControl.end_time.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"timesheetControl.end_time.errors.required\">{{'timesheet.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"note\">{{'timesheet.create.fields.note' | translate}}</label>\n\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"note\" id=\"note\" placeholder=\"{{'timesheet.create.placeholders.placeholder3' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.note.errors }\"></textarea>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && timesheetControl.note.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"timesheetControl.note.errors.required\">{{'timesheet.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.update' | translate}}</button>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card bg-transparent mt-0 mb-0\">\n\t\t\t\t<!-- Card header -->\n\t\t\t\t<div class=\"card-header p-0\">\n\t\t\t\t\t<h4 class=\"sub-title mt-3\"><span>{{'timesheet.title' | translate}}</span></h4>\n\t\t\t\t\t<div class=\"card-buttons pt-2 pb-2 pr-1\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'timesheet_create']\">\n\t\t\t\t\t\t<a *ngIf=\"module_id==5\" class=\"btn btn-create mb-0\" (click)=\"addTimesheet()\" placement=\"top\" tooltip=\"{{'common.add_to_timesheet' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n\t\t\t\t\t\t<a *ngIf=\"module_id!=5\"class=\"btn btn-create mb-0\" (click)=\"openTimesheetCreateModal()\" placement=\"top\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Card content -->\n\t\t\t\t<div class=\"card-content\">\n\t\t\t\t\t<!-- Card body -->\n\t\t\t\t\t<div class=\"card-body\" *ngIf=\"timesheets?.length != 0\">\n\t\t\t\t\t\t<!-- Timesheet list -->\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl overflow-x-auto\" *ngIf=\"isPageLoaded\">\n\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-hover b4-datatable\">\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-50\">{{'timesheet.columns.photo' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-50\">{{'timesheet.columns.user' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'timesheet.columns.note' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-110\">{{'timesheet.columns.start_time' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-110\">{{'timesheet.columns.end_time' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-50\">{{'timesheet.columns.time_h' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-50\">{{'timesheet.columns.actions' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody *ngIf=\"timesheets?.length != 0\">\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let timesheet of timesheets; index as i\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"people-lists\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', timesheet.user.id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{timesheet.user.firstname}} {{timesheet.user.lastname}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"timesheet.user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{timesheet.user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!timesheet.user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{timesheet.user.firstname}} {{timesheet.user.lastname}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"getCheckPermission(timesheet) else elseBlock;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-textarea [name]=\"'note'\" [fieldValue]=\"timesheet.note\" [elementFor]=\"'timesheet.inline_edit.note' | translate\" [isRequired]=\"'false'\" (updateValue)=\"saveTimesheetDetail(i, 'note', $event);\"></inline-edit-textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock>{{timesheet.note}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{timesheet.start_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{timesheet.end_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{timesheet.hour_time}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"actions-dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-10\" aria-controls=\"dropdown-basic-10\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-10\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngIf=\"getCheckPermission(timesheet)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"editTimesheet(timesheet)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngIf=\"getCheckPermission(timesheet)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"deleteTimesheet(timesheet.id,i)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t<tfoot *ngIf=\"timesheets?.length == 0\">\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"7\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card pl-2 pr-2\">\n\t\t\t\t<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t\t\t\t\t<h4 class=\"main-title mt-2\"><span>{{'timesheet.title' | translate}}</span></h4>\n\t\t\t\t\t<div class=\"card-buttons\">\n\t\t\t\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin', 'holidays_view']\" class=\"btn btn-create mb-0\" [routerLink]=\"['/holidays']\" placement=\"top\" tooltip=\"{{'holidays.title' | translate}}\"><i class=\"fa fa-tree\"></i></a>\n\t\t\t\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin', 'reports_view']\" [routerLink]=\"['/timesheet/all']\" class=\"btn btn-create mb-0\" tooltip=\"{{'timesheet.title2' | translate}}\"><i class=\"fa fa-clock-o\"></i></a>\n\t\t\t\t\t\t<a class=\"btn btn-create mb-0\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'timesheet_create']\" (click)=\"openTimesheetCreateModal()\" placement=\"top\" tooltip=\"{{'common.add' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Card content -->\n\t\t\t\t<div class=\"card-content pt-3 pb-3\">\n\t\t\t\t\t<!-- Card body -->\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<!-- Filter buttons -->\n\t\t\t\t\t\t<form [formGroup]=\"timesheetFilterForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t\t\t\t<div class=\"row d-flex\" *ngIf=\"isPageLoaded\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && filterControl.range.errors }\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"range\" class=\"sr-only\"></label>\n\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[clearable]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t[items]=\"range\"\n\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"range\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"range\"\n\t\t\t\t\t\t\t\t\t\t\t(change)=\"rangeChange($event)\">\n\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && filterControl.range.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"filterControl.range.errors.required\">{{'timesheet.filter.error_messages.message1' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\" *ngIf=\"filterControl.range.value == 'period'\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && filterControl.period_from.errors }\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"period_from\" class=\"sr-only\"></label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" (bsValueChange)=\"periodFromDateChange($event)\" formControlName=\"period_from\" id=\"period_from\" placeholder=\"{{'timesheet.filter.placeholders.placeholder3' | translate }}\" />\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && filterControl.period_from.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"filterControl.period_from.errors\">{{'timesheet.filter.error_messages.message2' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\" *ngIf=\"filterControl.range.value == 'period'\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && filterControl.period_to.errors }\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"period_to\" class=\"sr-only\"></label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" #dp2=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" [minDate]=\"timesheetFilterForm.get('period_from').value\" formControlName=\"period_to\" id=\"period_to\" placeholder=\"{{'timesheet.filter.placeholders.placeholder4' | translate }}\" />\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && filterControl.period_to.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"filterControl.period_to.errors\">{{'timesheet.filter.error_messages.message3' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"project_ids\" class=\"sr-only\"></label>\n\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[items]=\"projects\"\n\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[selectableGroup]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"project_name\"\n\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"project_ids\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"project_ids\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'timesheet.filter.placeholders.placeholder1' | translate }}\"\n\t\t\t\t\t\t\t\t\t\t\t(change)=\"onSubmit()\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">{{item.project_name}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"client_id\" class=\"sr-only\"></label>\n\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[items]=\"clients\"\n\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"client_id\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"client_id\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'timesheet.filter.placeholders.placeholder2' | translate }}\"\n\t\t\t\t\t\t\t\t\t\t\t(change)=\"onSubmit()\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col text-left btn_apply d-none\">\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-submit btn-sm mb-0\">{{'common.apply' | translate}}</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<!-- Timesheet list datatable -->\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"timesheets_table\">\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-50\">{{'timesheet.columns.project_name' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'timesheet.columns.entry' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-125\">{{'timesheet.columns.note' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-75\">{{'timesheet.columns.start_time' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-75\">{{'timesheet.columns.end_time' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-50\">{{'timesheet.columns.time_h' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-50\">{{'timesheet.columns.actions' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody *ngIf=\"timesheets?.length > 0\">\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let timesheet of timesheets; index as i\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.project_id; else elseBlock\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/projects/detail', timesheet.project_id]\" class=\"text-info\" tooltip=\"{{timesheet.project_name}}\">#{{timesheet.project_generated_id}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock>-</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.module_id == 2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/tasks/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.task_generated_id}}</a> - {{timesheet.task_name}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.module_id == 3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/defects/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.defect_generated_id}}</a> - {{timesheet.defect_name}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.module_id == 4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/incidents/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.incident_generated_id}}</a> - {{timesheet.incident_name}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.module_id == 5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/meetings/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.meeting_generated_id}}</a> - {{timesheet.meeting_title}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.module_id == 6\">-</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.module_id == 7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{timesheet.leave_title}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-textarea [name]=\"'note'\" [fieldValue]=\"timesheet.note\" [elementFor]=\"'timesheet.inline_edit.note' | translate\" [isRequired]=\"'false'\" (updateValue)=\"saveTimesheetDetail(i, 'note', $event);\"></inline-edit-textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{timesheet.start_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{timesheet.end_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{timesheet.hour_time}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"actions-dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openTimesheetEditModal(timesheet)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"deleteTimesheet(timesheet.id)\" class=\"dropdown-item btn btn-danger btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t<tbody *ngIf=\"timesheets?.length != 0\">\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>{{'common.total' | translate}}</b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalHours.hour_time}}</b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t<tfoot class=\"tfoot_dt d-none\">\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"7\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/pages/timesheet/timesheet.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/pages/timesheet/timesheet.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card pl-2 pr-2\">\n\t\t\t\t<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t\t\t\t\t<h4 class=\"main-title mt-2\"><span>{{'timesheet.title' | translate}}</span></h4>\n\t\t\t\t\t<div class=\"card-buttons\">\n\t\t\t\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin', 'holidays_view']\" class=\"btn btn-create mb-0\" [routerLink]=\"['/holidays']\" placement=\"top\" tooltip=\"{{'holidays.title' | translate}}\"><i class=\"fa fa-tree\"></i></a>\n\t\t\t\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin', 'timesheet_view']\" [routerLink]=\"['/timesheet']\" class=\"btn btn-create mb-0\" tooltip=\"{{'timesheet.title1' | translate}}\"><i class=\"fa fa-clock-o\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Card content -->\n\t\t\t\t<div class=\"card-content pt-3 pb-3\">\n\t\t\t\t\t<!-- Card body -->\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<!-- Filter buttons -->\n\t\t\t\t\t\t<form [formGroup]=\"timesheetFilterForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t\t\t\t<div class=\"row d-flex\" *ngIf=\"isPageLoaded\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && filterControl.range.errors }\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"range\" class=\"sr-only\"></label>\n\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[clearable]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t[items]=\"range\"\n\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"range\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"range\"\n\t\t\t\t\t\t\t\t\t\t\t(change)=\"rangeChange($event)\">\n\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && filterControl.range.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"filterControl.range.errors.required\">{{'timesheet.filter.error_messages.message1' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\" *ngIf=\"filterControl.range.value == 'period'\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && filterControl.period_from.errors }\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"period_from\" class=\"sr-only\"></label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" (bsValueChange)=\"periodFromDateChange($event)\" formControlName=\"period_from\" id=\"period_from\" placeholder=\"{{'timesheet.filter.placeholders.placeholder3' | translate }}\" />\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && filterControl.period_from.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"filterControl.period_from.errors\">{{'timesheet.filter.error_messages.message2' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\" *ngIf=\"filterControl.range.value == 'period'\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && filterControl.period_to.errors }\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"period_to\" class=\"sr-only\"></label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" #dp2=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" [minDate]=\"timesheetFilterForm.get('period_from').value\" formControlName=\"period_to\" id=\"period_to\" placeholder=\"{{'timesheet.filter.placeholders.placeholder4' | translate }}\" />\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && filterControl.period_to.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"filterControl.period_to.errors\">{{'timesheet.filter.error_messages.message3' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"user_id\" class=\"sr-only\"></label>\n\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[items]=\"users\"\n\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t[selectableGroup]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"user_id\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"user_id\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'timesheet.filter.placeholders.placeholder5' | translate }}\"\n\t\t\t\t\t\t\t\t\t\t\t(change)=\"onSubmit()\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"client_id\" class=\"sr-only\"></label>\n\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[items]=\"clients\"\n\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"client_id\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"client_id\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'timesheet.filter.placeholders.placeholder2' | translate }}\"\n\t\t\t\t\t\t\t\t\t\t\t(change)=\"onSubmit()\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"project_ids\" class=\"sr-only\"></label>\n\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[items]=\"projects\"\n\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[selectableGroup]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"project_name\"\n\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"project_ids\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"project_ids\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'timesheet.filter.placeholders.placeholder1' | translate }}\"\n\t\t\t\t\t\t\t\t\t\t\t(change)=\"onSubmit()\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">{{item.project_name}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col text-left btn_apply d-none\">\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-submit btn-sm mb-0\">{{'common.apply' | translate}}</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<!-- Timesheet list datatable -->\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"timesheets_table\">\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-30\">{{'timesheet.columns.user' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-50\">{{'timesheet.columns.project_name' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'timesheet.columns.entry' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-150\">{{'timesheet.columns.note' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-75\">{{'timesheet.columns.start_time' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-75\">{{'timesheet.columns.end_time' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-50\">{{'timesheet.columns.time_h' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody *ngIf=\"timesheets?.length != 0\">\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let timesheet of timesheets; index as i\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"people-lists\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', timesheet.user.id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{timesheet.user.firstname}} {{timesheet.user.lastname}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"timesheet.user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{timesheet.user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!timesheet.user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.project_id; else elseBlock\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/projects/detail', timesheet.project_id]\" class=\"text-info\" tooltip=\"{{timesheet.project_name}}\">#{{timesheet.project_generated_id}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock>-</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.module_id == 2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/tasks/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.task_generated_id}}</a> - {{timesheet.task_name}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.module_id == 3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/defects/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.defect_generated_id}}</a> - {{timesheet.defect_name}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.module_id == 4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/incidents/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.incident_generated_id}}</a> - {{timesheet.incident_name}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.module_id == 5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/meetings/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.meeting_generated_id}}</a> - {{timesheet.meeting_title}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.module_id == 6\">-</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.module_id == 7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{timesheet.leave_title}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{timesheet.note}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{timesheet.start_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{timesheet.end_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{timesheet.hour_time}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t<tbody *ngIf=\"timesheets?.length != 0\">\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"5\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>{{'common.total' | translate}}</b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalHours.hour_time}}</b></td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t<tfoot class=\"tfoot_dt d-none\">\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"7\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>");

/***/ }),

/***/ "./src/app/core/services/meeting.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/meeting.service.ts ***!
  \**************************************************/
/*! exports provided: MeetingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingService", function() { return MeetingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var MeetingService = /** @class */ (function () {
    function MeetingService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    MeetingService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/meetings");
    };
    MeetingService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/meetings/" + id);
    };
    MeetingService.prototype.create = function (meeting) {
        return this.http.post(this.apiUrl + "/api/meetings", meeting);
    };
    MeetingService.prototype.update = function (meeting) {
        return this.http.put(this.apiUrl + "/api/meetings/" + meeting.id, meeting);
    };
    MeetingService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/meetings/" + id);
    };
    MeetingService.prototype.changeStatus = function (params) {
        return this.http.post(this.apiUrl + "/api/meetings/" + params.ids + "/change-status", { "status": params.status });
    };
    MeetingService.prototype.getCalendarMeetings = function () {
        return this.http.get(this.apiUrl + "/api/meetings/calendar");
    };
    MeetingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MeetingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MeetingService);
    return MeetingService;
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

/***/ "./src/app/core/services/timesheet.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/timesheet.service.ts ***!
  \****************************************************/
/*! exports provided: TimesheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetService", function() { return TimesheetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var TimesheetService = /** @class */ (function () {
    function TimesheetService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    TimesheetService.prototype.getTimesheetsByModule = function (params) {
        return this.http.post(this.apiUrl + "/api/get-timesheets", params);
    };
    TimesheetService.prototype.create = function (params) {
        return this.http.post(this.apiUrl + "/api/timesheets", params);
    };
    TimesheetService.prototype.update = function (timesheet) {
        return this.http.put(this.apiUrl + "/api/timesheets/" + timesheet.id, timesheet);
    };
    TimesheetService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/timesheets/" + id);
    };
    TimesheetService.prototype.getTimeLogs = function () {
        return this.http.get(this.apiUrl + "/api/timer-logs");
    };
    TimesheetService.prototype.createTimeLog = function (params) {
        return this.http.post(this.apiUrl + "/api/timer-logs", params);
    };
    TimesheetService.prototype.deleteTimeLog = function (id) {
        return this.http.delete(this.apiUrl + "/api/timer-logs/" + id);
    };
    TimesheetService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TimesheetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TimesheetService);
    return TimesheetService;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0L2NvbXBvbmVudHMvY3JlYXRlLXRpbWVzaGVldC1tb2RhbC9jcmVhdGUtdGltZXNoZWV0LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CreateTimesheetModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTimesheetModalComponent", function() { return CreateTimesheetModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/timesheet.service */ "./src/app/core/services/timesheet.service.ts");









var CreateTimesheetModalComponent = /** @class */ (function () {
    function CreateTimesheetModalComponent(translate, bsModalRef, formBuilder, toastr, timesheetService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.timesheetService = timesheetService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
    }
    CreateTimesheetModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
    };
    CreateTimesheetModalComponent.prototype.loadForms = function () {
        this.createTimesheetForm = this.formBuilder.group({
            project_id: [this.params.project_id],
            module_id: [this.params.module_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            module_related_id: [this.params.module_related_id],
            start_time: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            end_time: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            note: [null],
        });
    };
    Object.defineProperty(CreateTimesheetModalComponent.prototype, "timesheetControl", {
        get: function () { return this.createTimesheetForm.controls; },
        enumerable: true,
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
        this.createTimesheetForm.value.start_time = moment__WEBPACK_IMPORTED_MODULE_7__(this.createTimesheetForm.value.start_time).format('YYYY-MM-DD HH:mm:ss');
        this.createTimesheetForm.value.end_time = moment__WEBPACK_IMPORTED_MODULE_7__(this.createTimesheetForm.value.end_time).format('YYYY-MM-DD HH:mm:ss');
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
    CreateTimesheetModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__["TimesheetService"] }
    ]; };
    CreateTimesheetModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-timesheet-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-timesheet-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-timesheet-modal.component.scss */ "./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__["TimesheetService"]])
    ], CreateTimesheetModalComponent);
    return CreateTimesheetModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0L2NvbXBvbmVudHMvZWRpdC10aW1lc2hlZXQtbW9kYWwvZWRpdC10aW1lc2hlZXQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EditTimesheetModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTimesheetModalComponent", function() { return EditTimesheetModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/timesheet.service */ "./src/app/core/services/timesheet.service.ts");









var EditTimesheetModalComponent = /** @class */ (function () {
    function EditTimesheetModalComponent(translate, bsEditRoleModalRef, formBuilder, toastr, timesheetService) {
        this.translate = translate;
        this.bsEditRoleModalRef = bsEditRoleModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.timesheetService = timesheetService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
    }
    EditTimesheetModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForm();
    };
    EditTimesheetModalComponent.prototype.loadForm = function () {
        this.editTimesheetForm = this.formBuilder.group({
            id: [this.timesheet.id],
            start_time: [new Date(this.timesheet.start_time), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            end_time: [new Date(this.timesheet.end_time), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            note: [this.timesheet.note],
        });
    };
    Object.defineProperty(EditTimesheetModalComponent.prototype, "timesheetControl", {
        get: function () { return this.editTimesheetForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditTimesheetModalComponent.prototype.startTimeChange = function (start_time) {
        this.editTimesheetForm.patchValue({ end_time: new Date(start_time.value) });
    };
    EditTimesheetModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editTimesheetForm.invalid) {
            return;
        }
        this.editTimesheetForm.value.start_time = moment__WEBPACK_IMPORTED_MODULE_7__(this.editTimesheetForm.value.start_time).format('YYYY-MM-DD HH:mm:ss');
        this.editTimesheetForm.value.end_time = moment__WEBPACK_IMPORTED_MODULE_7__(this.editTimesheetForm.value.end_time).format('YYYY-MM-DD HH:mm:ss');
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
    EditTimesheetModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditRoleModalRef.hide();
    };
    EditTimesheetModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__["TimesheetService"] }
    ]; };
    EditTimesheetModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-timesheet-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-timesheet-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-timesheet-modal.component.scss */ "./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__["TimesheetService"]])
    ], EditTimesheetModalComponent);
    return EditTimesheetModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0L2NvbXBvbmVudHMvdGltZXNoZWV0LWxpc3QvdGltZXNoZWV0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TimesheetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetListComponent", function() { return TimesheetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/timesheet.service */ "./src/app/core/services/timesheet.service.ts");
/* harmony import */ var _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/meeting.service */ "./src/app/core/services/meeting.service.ts");
/* harmony import */ var _components_create_timesheet_modal_create_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/create-timesheet-modal/create-timesheet-modal.component */ "./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.ts");
/* harmony import */ var _components_edit_timesheet_modal_edit_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/edit-timesheet-modal/edit-timesheet-modal.component */ "./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.ts");











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
        this.modalRef = this.modalService.show(_components_create_timesheet_modal_create_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_9__["CreateTimesheetModalComponent"], modalConfigs);
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
        this.modalRef = this.modalService.show(_components_edit_timesheet_modal_edit_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_10__["EditTimesheetModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTimesheet();
        });
    };
    TimesheetListComponent.prototype.deleteTimesheet = function (id, index) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
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
                    project_id: _this.project_id,
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
    TimesheetListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"] },
        { type: _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_7__["TimesheetService"] },
        { type: _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_8__["MeetingService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TimesheetListComponent.prototype, "module_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TimesheetListComponent.prototype, "module_related_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TimesheetListComponent.prototype, "project_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimesheetListComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimesheetListComponent.prototype, "apiUrl", void 0);
    TimesheetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timesheet-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timesheet-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timesheet-list.component.scss */ "./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"],
            _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_7__["TimesheetService"],
            _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_8__["MeetingService"]])
    ], TimesheetListComponent);
    return TimesheetListComponent;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy90aW1lc2hlZXQvcGFnZXMvbXktdGltZXNoZWV0L215LXRpbWVzaGVldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy90aW1lc2hlZXQvcGFnZXMvbXktdGltZXNoZWV0L215LXRpbWVzaGVldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0L3BhZ2VzL215LXRpbWVzaGVldC9teS10aW1lc2hlZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgICBkaXNwbGF5OiBub25lXG59IiwiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.ts ***!
  \********************************************************************************/
/*! exports provided: MyTimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTimesheetComponent", function() { return MyTimesheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/services/timesheet.service */ "./src/app/core/services/timesheet.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_create_timesheet_modal_create_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/create-timesheet-modal/create-timesheet-modal.component */ "./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.ts");
/* harmony import */ var _components_edit_timesheet_modal_edit_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/edit-timesheet-modal/edit-timesheet-modal.component */ "./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_21__);






















var MyTimesheetComponent = /** @class */ (function () {
    function MyTimesheetComponent(translate, ngxRolesService, formBuilder, modalService, http, exportAsService, toastr, timesheetService, projectService, clientService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.timesheetService = timesheetService;
        this.projectService = projectService;
        this.clientService = clientService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.dtOptions = {};
        this.timesheets = [];
        this.clients = [];
        this.isPageLoaded = false;
        this.isFormSubmitted = false;
        this.range = [
            { id: "today", label: this.translate.instant('timesheet.range.today') },
            { id: "this_month", label: this.translate.instant('timesheet.range.this_month') },
            { id: "last_month", label: this.translate.instant('timesheet.range.last_month') },
            { id: "this_week", label: this.translate.instant('timesheet.range.this_week') },
            { id: "last_week", label: this.translate.instant('timesheet.range.last_week') },
            { id: "period", label: this.translate.instant('timesheet.range.period') }
        ];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'timesheets_table',
        };
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_18__["datepickerConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    MyTimesheetComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.getClients();
        this.loadForms();
        this.loadTimesheetDatatable();
    };
    MyTimesheetComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getMyProjects().subscribe(function (data) {
            _this.projects = data;
        });
    };
    MyTimesheetComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getClientsWithTrashed().subscribe(function (data) {
            _this.clients = data;
        });
    };
    MyTimesheetComponent.prototype.loadForms = function () {
        this.timesheetFilterForm = this.formBuilder.group({
            range: [this.range[0].id, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            period_from: [null],
            period_to: [null],
            project_ids: [null],
            client_id: [null],
        });
    };
    MyTimesheetComponent.prototype.rangeChange = function (event) {
        var fromControl = this.timesheetFilterForm.get('period_from');
        var toControl = this.timesheetFilterForm.get('period_to');
        if (event.id === 'period') {
            fromControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            toControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            $('.btn_apply').removeClass('d-none');
        }
        else {
            fromControl.clearValidators();
            toControl.clearValidators();
            $('.btn_apply').addClass('d-none');
            this.onSubmit();
        }
        fromControl.updateValueAndValidity();
        toControl.updateValueAndValidity();
    };
    MyTimesheetComponent.prototype.periodFromDateChange = function (event) {
        this.timesheetFilterForm.patchValue({ period_to: event });
    };
    Object.defineProperty(MyTimesheetComponent.prototype, "filterControl", {
        get: function () { return this.timesheetFilterForm.controls; },
        enumerable: true,
        configurable: true
    });
    MyTimesheetComponent.prototype.onSubmit = function () {
        this.isFormSubmitted = true;
        if (this.timesheetFilterForm.invalid) {
            return;
        }
        this.rerender();
    };
    MyTimesheetComponent.prototype.loadTimesheetDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            order: [0],
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            columns: [
                {
                    'sortable': true,
                    'target': [0]
                },
                {
                    'sortable': false,
                    'target': [1]
                },
                {
                    'sortable': true,
                    'target': [2]
                },
                {
                    'sortable': true,
                    'target': [3]
                },
                {
                    'sortable': true,
                    'target': [4]
                },
                {
                    'sortable': true,
                    'target': [5]
                },
                {
                    'sortable': false,
                    'target': [6]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('timesheet.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('timesheet.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('timesheet.title'),
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
                dataTablesParameters = {
                    columns: dataTablesParameters.columns,
                    draw: dataTablesParameters.draw,
                    length: dataTablesParameters.length,
                    order: dataTablesParameters.order,
                    search: dataTablesParameters.search,
                    start: dataTablesParameters.start,
                    range: _this.timesheetFilterForm.value.range,
                    period_from: _this.timesheetFilterForm.value.period_from,
                    period_to: _this.timesheetFilterForm.value.period_to,
                    project_ids: _this.timesheetFilterForm.value.project_ids,
                    client_id: _this.timesheetFilterForm.value.client_id,
                };
                _this.http.post(_this.apiUrl + '/api/my-timesheets', dataTablesParameters, {}).subscribe(function (resp) {
                    _this.isPageLoaded = true;
                    that.timesheets = resp.data;
                    _this.totalHours = resp;
                    _this.totalHours = _this.totalHours.total;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                    setTimeout(function () {
                        _this.setMessage();
                    });
                });
            }
        };
    };
    MyTimesheetComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    MyTimesheetComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    MyTimesheetComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                _this.setMessage();
            }, 200);
        });
    };
    MyTimesheetComponent.prototype.setMessage = function () {
        if (this.timesheets.length > 0) {
            $('.tfoot_dt').addClass('d-none');
        }
        else {
            $('.tfoot_dt').removeClass('d-none');
        }
    };
    MyTimesheetComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('timesheet.title')).subscribe(function () { });
    };
    MyTimesheetComponent.prototype.openTimesheetCreateModal = function () {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                params: {
                    module_id: 6,
                    module_related_id: null,
                    project_id: null
                }
            }
        };
        this.modalRef = this.modalService.show(_components_create_timesheet_modal_create_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_16__["CreateTimesheetModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    MyTimesheetComponent.prototype.openTimesheetEditModal = function (timesheet) {
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
        this.modalRef = this.modalService.show(_components_edit_timesheet_modal_edit_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_17__["EditTimesheetModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    MyTimesheetComponent.prototype.deleteTimesheet = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + this.translate.instant('timesheet.title').toLowerCase() + '!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.timesheetService.delete(id).subscribe(function (data) {
                    _this.rerender();
                    _this.toastr.success(_this.translate.instant('timesheet.messages.delete'), _this.translate.instant('timesheet.title'));
                });
            }
        });
    };
    MyTimesheetComponent.prototype.saveTimesheetDetail = function (index, name, value) {
        var _this = this;
        this.timesheets[index][name] = value;
        this.timesheetService.update(this.timesheets[index]).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('timesheet.messages.update'), _this.translate.instant('timesheet.title'));
            _this.rerender();
        });
    };
    MyTimesheetComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_12__["TimesheetService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_13__["ProjectService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_14__["ClientService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"])
    ], MyTimesheetComponent.prototype, "dtElement", void 0);
    MyTimesheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-timesheet',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-timesheet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-timesheet.component.scss */ "./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_12__["TimesheetService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_13__["ProjectService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_14__["ClientService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"]])
    ], MyTimesheetComponent);
    return MyTimesheetComponent;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/pages/timesheet/timesheet.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/timesheet/pages/timesheet/timesheet.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy90aW1lc2hlZXQvcGFnZXMvdGltZXNoZWV0L3RpbWVzaGVldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy90aW1lc2hlZXQvcGFnZXMvdGltZXNoZWV0L3RpbWVzaGVldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0L3BhZ2VzL3RpbWVzaGVldC90aW1lc2hlZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgICBkaXNwbGF5OiBub25lXG59IiwiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/timesheet/pages/timesheet/timesheet.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/timesheet/pages/timesheet/timesheet.component.ts ***!
  \**************************************************************************/
/*! exports provided: TimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetComponent", function() { return TimesheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/timesheet.service */ "./src/app/core/services/timesheet.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__);


















var TimesheetComponent = /** @class */ (function () {
    function TimesheetComponent(translate, formBuilder, http, exportAsService, toastr, timesheetService, projectService, clientService, userService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.timesheetService = timesheetService;
        this.projectService = projectService;
        this.clientService = clientService;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.dtOptions = {};
        this.timesheets = [];
        this.clients = [];
        this.users = [];
        this.isPageLoaded = false;
        this.isFormSubmitted = false;
        this.range = [
            { id: "today", label: this.translate.instant('timesheet.range.today') },
            { id: "this_month", label: this.translate.instant('timesheet.range.this_month') },
            { id: "last_month", label: this.translate.instant('timesheet.range.last_month') },
            { id: "this_week", label: this.translate.instant('timesheet.range.this_week') },
            { id: "last_week", label: this.translate.instant('timesheet.range.last_week') },
            { id: "period", label: this.translate.instant('timesheet.range.period') }
        ];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'timesheets_table',
        };
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_14__["datepickerConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    TimesheetComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.getClients();
        this.getUsers();
        this.loadForms();
        this.loadTimesheetDatatable();
    };
    TimesheetComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getAll().subscribe(function (data) {
            _this.projects = data;
        });
    };
    TimesheetComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getClientsWithTrashed().subscribe(function (data) {
            _this.clients = data;
        });
    };
    TimesheetComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (data) {
            _this.users = data;
        });
    };
    TimesheetComponent.prototype.loadForms = function () {
        this.timesheetFilterForm = this.formBuilder.group({
            range: [this.range[0].id, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            period_from: [null],
            period_to: [null],
            user_id: [null],
            project_ids: [null],
            client_id: [null],
        });
    };
    TimesheetComponent.prototype.rangeChange = function (event) {
        var fromControl = this.timesheetFilterForm.get('period_from');
        var toControl = this.timesheetFilterForm.get('period_to');
        if (event.id === 'period') {
            fromControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            toControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            $('.btn_apply').removeClass('d-none');
        }
        else {
            fromControl.clearValidators();
            toControl.clearValidators();
            $('.btn_apply').addClass('d-none');
            this.onSubmit();
        }
        fromControl.updateValueAndValidity();
        toControl.updateValueAndValidity();
    };
    TimesheetComponent.prototype.periodFromDateChange = function (event) {
        this.timesheetFilterForm.patchValue({ period_to: event });
    };
    Object.defineProperty(TimesheetComponent.prototype, "filterControl", {
        get: function () { return this.timesheetFilterForm.controls; },
        enumerable: true,
        configurable: true
    });
    TimesheetComponent.prototype.onSubmit = function () {
        this.isFormSubmitted = true;
        if (this.timesheetFilterForm.invalid) {
            return;
        }
        this.rerender();
    };
    TimesheetComponent.prototype.loadTimesheetDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0],
            columns: [
                {
                    'sortable': true,
                    'target': [0]
                },
                {
                    'sortable': true,
                    'target': [1]
                },
                {
                    'sortable': false,
                    'target': [2]
                },
                {
                    'sortable': true,
                    'target': [3]
                },
                {
                    'sortable': true,
                    'target': [4]
                },
                {
                    'sortable': true,
                    'target': [5]
                },
                {
                    'sortable': true,
                    'target': [6]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('timesheet.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('timesheet.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('timesheet.title'),
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
                dataTablesParameters = {
                    columns: dataTablesParameters.columns,
                    draw: dataTablesParameters.draw,
                    length: dataTablesParameters.length,
                    order: dataTablesParameters.order,
                    search: dataTablesParameters.search,
                    start: dataTablesParameters.start,
                    range: _this.timesheetFilterForm.value.range,
                    period_from: _this.timesheetFilterForm.value.period_from,
                    period_to: _this.timesheetFilterForm.value.period_to,
                    user_id: _this.timesheetFilterForm.value.user_id,
                    project_ids: _this.timesheetFilterForm.value.project_ids,
                    client_id: _this.timesheetFilterForm.value.client_id,
                };
                _this.http.post(_this.apiUrl + '/api/timesheets-report', dataTablesParameters, {}).subscribe(function (resp) {
                    _this.isPageLoaded = true;
                    _this.timesheets = resp.data;
                    _this.totalHours = resp;
                    _this.totalHours = _this.totalHours.total;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                    setTimeout(function () {
                        _this.setMessage();
                    });
                });
            }
        };
    };
    TimesheetComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    TimesheetComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    TimesheetComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                _this.setMessage();
            }, 200);
        });
    };
    TimesheetComponent.prototype.setMessage = function () {
        if (this.timesheets.length > 0) {
            $('.tfoot_dt').addClass('d-none');
        }
        else {
            $('.tfoot_dt').removeClass('d-none');
        }
    };
    TimesheetComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('timesheet.title')).subscribe(function () { });
    };
    TimesheetComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_9__["TimesheetService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_10__["ProjectService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_11__["ClientService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"])
    ], TimesheetComponent.prototype, "dtElement", void 0);
    TimesheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timesheet',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timesheet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/pages/timesheet/timesheet.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timesheet.component.scss */ "./src/app/modules/timesheet/pages/timesheet/timesheet.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_9__["TimesheetService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_10__["ProjectService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_11__["ClientService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"]])
    ], TimesheetComponent);
    return TimesheetComponent;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/timesheet-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/timesheet/timesheet-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TimesheetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetRoutingModule", function() { return TimesheetRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_my_timesheet_my_timesheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/my-timesheet/my-timesheet.component */ "./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.ts");
/* harmony import */ var _pages_timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/timesheet/timesheet.component */ "./src/app/modules/timesheet/pages/timesheet/timesheet.component.ts");






var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_my_timesheet_my_timesheet_component__WEBPACK_IMPORTED_MODULE_4__["MyTimesheetComponent"],
                data: {
                    permissions: {
                        only: ['admin', 'super_admin', 'timesheet_view']
                    }
                }
            },
            {
                path: 'all',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_5__["TimesheetComponent"],
                data: {
                    permissions: {
                        only: ['admin', 'super_admin', 'reports_view']
                    }
                }
            }
        ]
    }
];
var TimesheetRoutingModule = /** @class */ (function () {
    function TimesheetRoutingModule() {
    }
    TimesheetRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TimesheetRoutingModule);
    return TimesheetRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/timesheet.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/timesheet/timesheet.module.ts ***!
  \*******************************************************/
/*! exports provided: TimesheetModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetModule", function() { return TimesheetModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _timesheet_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./timesheet-routing.module */ "./src/app/modules/timesheet/timesheet-routing.module.ts");
/* harmony import */ var _pages_timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/timesheet/timesheet.component */ "./src/app/modules/timesheet/pages/timesheet/timesheet.component.ts");
/* harmony import */ var _components_timesheet_list_timesheet_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/timesheet-list/timesheet-list.component */ "./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.ts");
/* harmony import */ var _components_create_timesheet_modal_create_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/create-timesheet-modal/create-timesheet-modal.component */ "./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.ts");
/* harmony import */ var _components_edit_timesheet_modal_edit_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/edit-timesheet-modal/edit-timesheet-modal.component */ "./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.ts");
/* harmony import */ var _pages_my_timesheet_my_timesheet_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/my-timesheet/my-timesheet.component */ "./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.ts");




















var TimesheetModule = /** @class */ (function () {
    function TimesheetModule() {
    }
    TimesheetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_15__["TimesheetComponent"],
                _components_timesheet_list_timesheet_list_component__WEBPACK_IMPORTED_MODULE_16__["TimesheetListComponent"],
                _components_create_timesheet_modal_create_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_17__["CreateTimesheetModalComponent"],
                _components_edit_timesheet_modal_edit_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_18__["EditTimesheetModalComponent"],
                _pages_my_timesheet_my_timesheet_component__WEBPACK_IMPORTED_MODULE_19__["MyTimesheetComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlNativeDateTimeModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsModule"],
                _timesheet_routing_module__WEBPACK_IMPORTED_MODULE_14__["TimesheetRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_11__["ExportAsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
            ],
            exports: [
                _components_timesheet_list_timesheet_list_component__WEBPACK_IMPORTED_MODULE_16__["TimesheetListComponent"]
            ],
            entryComponents: [
                _components_create_timesheet_modal_create_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_17__["CreateTimesheetModalComponent"],
                _components_edit_timesheet_modal_edit_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_18__["EditTimesheetModalComponent"]
            ]
        })
    ], TimesheetModule);
    return TimesheetModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=default~modules-admin-meeting-meeting-module~modules-pm-defects-defects-module~modules-pm-incidents-~8e5a1dec.js.map