(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-meeting-meeting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/components/create-meeting-modal/create-meeting-modal.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/components/create-meeting-modal/create-meeting-modal.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-group\" aria-hidden=\"true\"></i>&nbsp;{{'meetings.title' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"createMeetingForm\" (ngSubmit)=\"onSubmit()\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-9\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"title\">{{'meetings.create.fields.title' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"title\" id=\"title\" placeholder=\"{{'meetings.create.placeholders.placeholder1' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && meetingControl.title.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && meetingControl.title.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"meetingControl.title.errors.required\">{{'meetings.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t\t<div *ngIf=\"meetingControl.title.errors.maxlength\">{{'meetings.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\" *ngIf=\"loginUser\">\n\t\t\t\t\t<div class=\"card shadow-none\">\n\t\t\t\t\t\t<div class=\"card-img text-center\">\n\t\t\t\t\t\t\t<img *ngIf=\"loginUser.avatar\" src=\"{{apiUrl}}/uploads/profile/{{loginUser.avatar}}\" alt=\"{{loginUser.firstname}}\" class=\"img-sm rounded-circle\">\n\t\t\t\t\t\t\t<img *ngIf=\"!loginUser.avatar\" src=\"../assets/img/profile_large.jpg\" alt=\"Profile\" class=\"img-sm rounded-circle\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t<label class=\"m-0\">{{loginUser.firstname}} {{loginUser.lastname}}</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && meetingControl.start_date.errors }\">\n\t\t\t\t\t\t<label for=\"start_date\">{{'meetings.create.fields.start_date' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<owl-date-time #startDT></owl-date-time>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [owlDateTimeTrigger]=\"startDT\" [owlDateTime]=\"startDT\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'meetings.create.placeholders.placeholder2' | translate}}\" aria-describedby=\"inputGroupPrepend2\" (dateTimeChange)=\"startDateChange($event)\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && meetingControl.start_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"meetingControl.start_date.errors.required\">{{'meetings.create.error_messages.message3' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && meetingControl.end_date.errors }\">\n\t\t\t\t\t\t<label for=\"end_date\">{{'meetings.create.fields.end_date' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<owl-date-time #endDT></owl-date-time>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [owlDateTimeTrigger]=\"endDT\" [owlDateTime]=\"endDT\" [min]=\"createMeetingForm.get('start_date').value\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'meetings.create.placeholders.placeholder3' | translate}}\" aria-describedby=\"inputGroupPrepend3\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && meetingControl.end_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"meetingControl.end_date.errors.required\">{{'meetings.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"project_id\">{{'meetings.create.fields.project' | translate }}</label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"projects\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t(change)=\"projectChange($event)\"\n\t\t\t\t\t\t\tbindLabel=\"project_name\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"project_id\"\n\t\t\t\t\t\t\tformControlName=\"project_id\"\n\t\t\t\t\t\t\tplaceholder=\"{{'meetings.create.placeholders.placeholder8' | translate }}\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t{{item.project_name}}\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"client_id\">{{'meetings.create.fields.client_name' | translate }}</label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"clients\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"client_id\"\n\t\t\t\t\t\t\tformControlName=\"client_id\"\n\t\t\t\t\t\t\tplaceholder=\"{{'meetings.create.placeholders.placeholder6' | translate }}\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && meetingControl.members.errors }\">\n\t\t\t\t\t\t<label for=\"members\">{{'meetings.create.fields.peoples' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<ng-select [items]=\"users\" bindLabel=\"firstname\" bindValue=\"id\" [multiple]=\"true\" formControlName=\"members\" placeholder=\"{{'meetings.create.placeholders.placeholder4' | translate}}\" [searchable]=\"true\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && meetingControl.members.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"meetingControl.members.errors.required\">{{'meetings.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"location\">{{'meetings.create.fields.location' | translate}}</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"location\" id=\"location\" placeholder=\"{{'meetings.create.placeholders.placeholder5' | translate}}\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"description\">{{'meetings.create.fields.description' | translate}}</label>\n\t\t\t\t\t\t<app-ngx-editor [config]=\"editorConfig\" formControlName=\"description\" id=\"description\"></app-ngx-editor>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.create' | translate}}</button>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/components/edit-meeting-modal/edit-meeting-modal.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/components/edit-meeting-modal/edit-meeting-modal.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-group\" aria-hidden=\"true\"></i>&nbsp;{{'meetings.title' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"editMeetingForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isPageLoaded\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-9\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"title\">{{'meetings.create.fields.title' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"title\" id=\"title\" placeholder=\"{{'meetings.create.placeholders.placeholder1' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && meetingControl.title.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && meetingControl.title.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"meetingControl.title.errors.required\">{{'meetings.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t\t<div *ngIf=\"meetingControl.title.errors.maxlength\">{{'meetings.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card shadow-none\">\n\t\t\t\t\t\t<div class=\"card-img text-center\">\n\t\t\t\t\t\t\t<img *ngIf=\"meeting.avatar\" src=\"{{apiUrl}}/uploads/profile/{{meeting.avatar}}\" alt=\"{{meeting.firstname}}\" class=\"img-sm rounded-circle\">\n\t\t\t\t\t\t\t<img *ngIf=\"!meeting.avatar\" src=\"../assets/img/profile_large.jpg\" alt=\"Profile\" class=\"img-sm rounded-circle\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t<label class=\"m-0\">{{meeting.firstname}} {{meeting.lastname}}</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && meetingControl.start_date.errors }\">\n\t\t\t\t\t\t<label for=\"start_date\">{{'meetings.create.fields.start_date' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<owl-date-time #startDT></owl-date-time>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [owlDateTimeTrigger]=\"startDT\" [owlDateTime]=\"startDT\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'meetings.create.placeholders.placeholder2' | translate}}\" aria-describedby=\"inputGroupPrepend2\" (dateTimeChange)=\"startDateChange($event)\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && meetingControl.start_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"meetingControl.start_date.errors.required\">{{'meetings.create.error_messages.message3' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && meetingControl.end_date.errors }\">\n\t\t\t\t\t\t<label for=\"end_date\">{{'meetings.create.fields.end_date' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<owl-date-time #endDT></owl-date-time>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [owlDateTimeTrigger]=\"endDT\" [owlDateTime]=\"endDT\" [min]=\"editMeetingForm.get('start_date').value\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'meetings.create.placeholders.placeholder3' | translate}}\" aria-describedby=\"inputGroupPrepend3\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && meetingControl.end_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"meetingControl.end_date.errors.required\">{{'meetings.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"project_id\">{{'meetings.create.fields.project' | translate }}</label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"projects\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t(change)=\"projectChange($event)\"\n\t\t\t\t\t\t\tbindLabel=\"project_name\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"project_id\"\n\t\t\t\t\t\t\tformControlName=\"project_id\"\n\t\t\t\t\t\t\tplaceholder=\"{{'meetings.create.placeholders.placeholder8' | translate }}\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t{{item.project_name}}\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"client_id\">{{'meetings.create.fields.client_name' | translate }}</label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"clients\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"client_id\"\n\t\t\t\t\t\t\tformControlName=\"client_id\"\n\t\t\t\t\t\t\tplaceholder=\"{{'meetings.create.placeholders.placeholder6' | translate }}\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && meetingControl.members.errors }\">\n\t\t\t\t\t\t<label for=\"members\">{{'meetings.create.fields.peoples' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<ng-select [items]=\"users\" bindLabel=\"firstname\" bindValue=\"id\" [multiple]=\"true\" formControlName=\"members\" placeholder=\"{{'meetings.create.placeholders.placeholder4' | translate}}\" [searchable]=\"true\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && meetingControl.members.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"meetingControl.members.errors.required\">{{'meetings.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"location\">{{'meetings.create.fields.location' | translate}}</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"location\" id=\"location\" placeholder=\"{{'meetings.create.placeholders.placeholder5' | translate}}\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && meetingControl.status.errors }\">\n\t\t\t\t\t\t<label for=\"status\">{{'meetings.create.fields.status' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"('meetings.status' | translate)\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"status\"\n\t\t\t\t\t\t\tformControlName=\"status\"\n\t\t\t\t\t\t\tplaceholder=\"{{'meetings.create.placeholders.placeholder7' | translate }}\">\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && meetingControl.status.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"meetingControl.status.errors.required\">{{'meetings.create.error_messages.message7' | translate }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"description\">{{'meetings.create.fields.description' | translate}}</label>\n\t\t\t\t\t\t<app-ngx-editor [config]=\"editorConfig\" formControlName=\"description\" id=\"description\"></app-ngx-editor>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.update' | translate}}</button>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/components/meeting-details/meeting-details.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/components/meeting-details/meeting-details.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-content\">\n\t<div class=\" border-bottom\">\n\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t<div class=\" task-name d-lg-flex\">\n\t\t\t\t<h4 class=\"task-id\"><span>#{{meeting.generated_id}}</span></h4>\n\t\t\t\t<p class=\"task-title ml-lg-2\">{{meeting.title}}</p>\n\t\t\t</div>\n\t\t\t<div class=\"task-action mr-3\">\n\t\t\t\t<div class=\"status-dropdown\">\n\t\t\t\t\t<div *ngxPermissionsOnly=\"['admin', 'super_admin', 'meetings_edit']; else elseBlock1; then thenBlock1\"></div>\n\t\t\t\t\t<ng-template #thenBlock1>\n\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t<button dropdownToggle id=\"button-basic\" type=\"button\" class=\"btn dropdown-toggle select-btn-lg\" aria-controls=\"dropdown-basic\">{{getTranslateStatus(meeting.status) | translate}}&nbsp;<span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t<ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic\">\n\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngFor=\"let status of ('meetings.status' | translate)\"><a class=\"dropdown-item btn btn-sm {{status.class}}\" [ngClass]=\"{'active': meeting.status == status.id}\" (click)=\"changeMeetingStatus([meeting.id], status);meeting.status = status.id\">{{status.label}}</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template #elseBlock1>\n\t\t\t\t\t\t<ng-container *ngFor=\"let status of ('meetings.status' | translate)\">\n\t\t\t\t\t\t\t<div class=\"budges-status\">\n\t\t\t\t\t\t\t\t<span class=\"{{status.class}}\" *ngIf=\"status.id == meeting.status\">{{status.label}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"card-body\">\n\t\t<form class=\"form-body overflow-hidden mt-3\">\n\t\t\t<!-- Detail fields -->\n\t\t\t<div class=\"col-lg-12 \">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-4 col-md-6 mb-3\">\n\t\t\t\t\t\t<label>{{'meetings.columns.organizer' | translate }}</label>\n\t\t\t\t\t\t<div class=\"people-lists\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', meeting.organizer_id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{meeting.user.firstname}} {{meeting.user.lastname}}\">\n\t\t\t\t\t\t\t\t<img *ngIf=\"meeting.user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{meeting.user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t<img *ngIf=\"!meeting.user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-6 mb-3\">\n\t\t\t\t\t\t<label>{{'meetings.create.fields.peoples' | translate }}</label>\n\t\t\t\t\t\t<div class=\"people-lists\">\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let member of meeting.members index as i; odd as isOdd; even as isEven\">\n\t\t\t\t\t\t\t\t<a *ngIf=\"member.id != meeting.organizer_id && member.id != meeting.client_id\" [routerLink]=\"['/users/profile', member.id]\" tooltip=\"{{member.firstname}} {{member.lastname}}\" class=\"btn rounded-circle text-dark\" placement=\"top\" [ngClass]=\"{'btn-profile-info popover-item': isOdd, 'btn-profile-danger': isEven, 'popover-item': i!=0}\">\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"member.avatar\" src=\"{{apiUrl}}/uploads/profile/{{member.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"!member.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-6 mb-3\">\n\t\t\t\t\t\t<label>{{'meetings.create.fields.project' | translate }}</label>\n\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t<ng-container *ngIf=\"meeting.project_id; else elseBlock2\">\n\t\t\t\t\t\t\t\t{{meeting.project.project_name}}\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-template #elseBlock2>-</ng-template>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-6 mb-3\">\n\t\t\t\t\t\t<label>{{'meetings.create.fields.client_name' | translate }}</label>\n\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t<ng-container *ngIf=\"meeting.client_id; else elseBlock4\">\n\t\t\t\t\t\t\t\t{{meeting.client.firstname}} {{meeting.client.lastname}}\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-template #elseBlock4>-</ng-template>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-6 mb-3\">\n\t\t\t\t\t\t<label>{{'meetings.create.fields.start_date' | translate }}</label>\n\t\t\t\t\t\t<div class=\"detail-inline\">{{meeting.start_date | dateTimeFormatFilter: loginUser.settings.date_time_format}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-6 mb-3\">\n\t\t\t\t\t\t<label>{{'meetings.create.fields.end_date' | translate }}</label>\n\t\t\t\t\t\t<div class=\"detail-inline\">{{meeting.end_date | dateTimeFormatFilter: loginUser.settings.date_time_format}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-6 mb-3\">\n\t\t\t\t\t\t<label>{{'common.hours' | translate }}</label>\n\t\t\t\t\t\t<div class=\"detail-inline\">{{meeting.hour_time}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-6 mb-3\">\n\t\t\t\t\t\t<label>{{'meetings.create.fields.location' | translate }}</label>\n\t\t\t\t\t\t<div class=\"detail-inline\">{{meeting.location}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-6 mb-3\">\n\t\t\t\t\t\t<label>{{'common.created' | translate}}</label>\n\t\t\t\t\t\t<div class=\"detail-inline\">{{meeting.created_at | dateTimeFormatFilter : loginUser.settings.date_time_format}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-6 mb-3\">\n\t\t\t\t\t\t<label>{{'common.updated' | translate}}</label>\n\t\t\t\t\t\t<div class=\"detail-inline\">{{meeting.updated_at | dateTimeFormatFilter : loginUser.settings.date_time_format}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-6 mb-3\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"border-bottom\"></div>\n\t\t\t\t\t<!-- Description field -->\n\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 mt-3 mb-3 description-detail \">\n\t\t\t\t\t\t<h4 class=\"sub-title\"><span>{{'meetings.details.title1' | translate}}</span></h4>\n\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t<p [innerHtml]=\"meeting.description\"></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"border-bottom\"></div>\n\t\t\t\t\t<!-- Meeting timesheet -->\n\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n\t\t\t\t\t\t<app-timesheet-list [module_id]=\"'5'\" [module_related_id]=\"meeting.id\" [project_id]=\"meeting.project_id\" [loginUser]=\"loginUser\" [apiUrl]=\"apiUrl\"></app-timesheet-list>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/pages/meeting-detail/meeting-detail.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/pages/meeting-detail/meeting-detail.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"detail-page\">\n    <div class=\"card\" *ngIf=\"isPageLoaded\">\n    \t<app-meeting-details [meeting]=\"meeting\" [loginUser]=\"loginUser\" [apiUrl]=\"apiUrl\"></app-meeting-details>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/pages/meeting/meeting.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/pages/meeting/meeting.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card pl-2 pr-2\">\n\t\t\t\t<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t\t\t\t\t<h4 class=\"main-title mt-2\"><span>{{'meetings.title' | translate}}</span></h4>\n\t\t\t\t\t<button class=\"btn btn-create mb-0\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'meetings_create']\" (click)=\"openMeetingCreateModal()\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-content pt-3 pb-3\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<!-- Filter buttons -->\n\t\t\t\t\t\t<div class=\"row btn-filters mb-3\" *ngIf=\"isPageLoaded\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-raised open\" type=\"button\" [ngClass]=\"{ 'active': statusfilterId == 1 }\" (click)=\"filterByStatus(1)\">\n\t\t\t\t\t\t\t\t\t<p>{{'common.status.open' | translate}}</p>\n\t\t\t\t\t\t\t\t\t<span class=\"badge badge-light\">{{countStatus.open}}</span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-raised in_progress\" type=\"button\" [ngClass]=\"{ 'active': statusfilterId ==2  }\" (click)=\"filterByStatus(2)\">\n\t\t\t\t\t\t\t\t\t<p>{{'common.status.in_progress' | translate}}</p>\n\t\t\t\t\t\t\t\t\t<span class=\"badge badge-light\">{{countStatus.in_progress}}</span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-raised cancel\" type=\"button\" [ngClass]=\"{ 'active': statusfilterId == 3 }\" (click)=\"filterByStatus(3)\">\n\t\t\t\t\t\t\t\t\t<p>{{'common.status.cancel' | translate}}</p>\n\t\t\t\t\t\t\t\t\t<span class=\"badge badge-light\">{{countStatus.cancel}}</span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-raised completed\" type=\"button\" [ngClass]=\"{ 'active': statusfilterId == 4 }\" (click)=\"filterByStatus(4)\">\n\t\t\t\t\t\t\t\t\t<p>{{'common.status.completed' | translate}}</p>\n\t\t\t\t\t\t\t\t\t<span class=\"badge badge-light\">{{countStatus.completed}}</span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-raised btn-secondary\" type=\"button\" [ngClass]=\"{ 'active': statusfilterId == 0 }\" [routerLink]=\"['/meetings']\">\n\t\t\t\t\t\t\t\t\t<p>{{'common.status.total' | translate}}</p>\n\t\t\t\t\t\t\t\t\t<span class=\"badge badge-light\">{{countStatus.all}}</span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- Meeting list datatable -->\n\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" id=\"meeting_table\" width=\"100%\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>{{'meetings.columns.id' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'meetings.columns.title' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'meetings.columns.organizer' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'meetings.columns.peoples' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'meetings.columns.start' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'meetings.columns.end' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'meetings.columns.hours' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'meetings.columns.status' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'meetings.columns.actions' | translate}}</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody *ngIf=\"meetings?.length != 0\">\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let meeting of meetings; index as i\">\n\t\t\t\t\t\t\t\t\t\t<td>\n                                        \t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'meetings_view'] else elseBlock1;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/meetings/detail', meeting.id]\" tooltip=\"{{'common.view' | translate}}\">{{meeting.generated_id}}</a>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock1>{{meeting.generated_id}}</ng-template>\n                                        </td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngxPermissionsOnly=\"['admin', 'super_admin', 'meetings_edit']; else elseBlock2; then thenBlock\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock2>\n\t\t\t\t\t\t\t\t\t\t\t\t{{meeting.title}}\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #thenBlock>\n\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-input [name]=\"'title'\" [type]=\"'text'\" [elementFor]=\"'meetings.inline_edit.title' | translate\" [fieldValue]=\"meeting.title\" [isRequired]=\"'true'\" (updateValue)=\"saveMeetingDetail(i, 'title', $event);\"></inline-edit-input>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"people-lists\">\n\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', meeting.organizer_id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{meeting.firstname}} {{meeting.lastname}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"meeting.avatar\" src=\"{{apiUrl}}/uploads/profile/{{meeting.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!meeting.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"people-lists\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let member of meeting.members index as i; odd as isOdd; even as isEven\" >\n\t\t\t\t\t\t\t\t\t\t\t\t<a *ngIf=\"member.member_id != meeting.organizer_id\" [routerLink]=\"['/users/profile', member.member_id]\" tooltip=\"{{member.firstname}} {{member.lastname}}\" class=\"btn rounded-circle popover-item text-dark btn-profile-info\" placement=\"top\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"member.avatar\" src=\"{{apiUrl}}/uploads/profile/{{member.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!member.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{meeting.start_date | dateTimeFormatFilter: loginUser.settings.date_time_format }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{meeting.end_date | dateTimeFormatFilter: loginUser.settings.date_time_format }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{meeting.hour_time}} </td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"status-dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngxPermissionsOnly=\"['admin', 'super_admin', 'meetings_edit']; else elseBlock1; then thenBlock1\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #thenBlock1>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle id=\"button-basic\" type=\"button\" class=\"btn dropdown-toggle select-btn-lg\" aria-controls=\"dropdown-basic\">{{getTranslateStatus(meeting.status) | translate}}&nbsp;<span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngFor=\"let status of ('meetings.status' | translate)\"><a class=\"dropdown-item btn btn-sm {{status.class}}\" [ngClass]=\"{'active': meeting.status == status.id}\" (click)=\"changeMeetingStatus([meeting.id], status);meeting.status = status.id\">{{status.label}}</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock1>\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ('meetings.status' | translate)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"budges-status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"{{status.class}}\" *ngIf=\"status.id == meeting.status\">{{status.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"actions-dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'meetings_edit']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openMeetingEditModal(meeting)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'meetings_delete']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"removeMeeting(meeting.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot *ngIf=\"meetings?.length == 0\" class=\"tfoot_dt\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n");

/***/ }),

/***/ "./src/app/modules/admin/meeting/components/create-meeting-modal/create-meeting-modal.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/admin/meeting/components/create-meeting-modal/create-meeting-modal.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWVldGluZy9jb21wb25lbnRzL2NyZWF0ZS1tZWV0aW5nLW1vZGFsL2NyZWF0ZS1tZWV0aW5nLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/meeting/components/create-meeting-modal/create-meeting-modal.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/admin/meeting/components/create-meeting-modal/create-meeting-modal.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CreateMeetingModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMeetingModalComponent", function() { return CreateMeetingModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/meeting.service */ "./src/app/core/services/meeting.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);















var CreateMeetingModalComponent = /** @class */ (function () {
    function CreateMeetingModalComponent(translate, bsModalRef, formBuilder, toastr, userService, clientService, meetingService, projectService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.clientService = clientService;
        this.meetingService = meetingService;
        this.projectService = projectService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.users = [];
        this.clients = [];
        this.projects = [];
        this.editorConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_12__["editorConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    CreateMeetingModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getUsers();
        this.getClients();
        this.getProjects();
        this.loadForms();
    };
    CreateMeetingModalComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (data) {
            _this.users = data;
            _this.isPageLoaded = true;
        });
    };
    CreateMeetingModalComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getAll().subscribe(function (data) {
            _this.clients = data;
        });
    };
    CreateMeetingModalComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getMyProjects().subscribe(function (data) {
            _this.projects = data;
        });
    };
    CreateMeetingModalComponent.prototype.loadForms = function () {
        this.createMeetingForm = this.formBuilder.group({
            organizer_id: [null],
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            description: [''],
            members: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            project_id: [null],
            client_id: [null],
            start_date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            end_date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            location: ['']
        });
    };
    Object.defineProperty(CreateMeetingModalComponent.prototype, "meetingControl", {
        get: function () { return this.createMeetingForm.controls; },
        enumerable: true,
        configurable: true
    });
    CreateMeetingModalComponent.prototype.startDateChange = function (start_date) {
        this.createMeetingForm.patchValue({ end_date: new Date(start_date.value) });
    };
    CreateMeetingModalComponent.prototype.projectChange = function (event) {
        if (event.client_id) {
            this.createMeetingForm.patchValue({ client_id: event.client_id });
        }
        else {
            this.createMeetingForm.patchValue({ client_id: null });
        }
    };
    CreateMeetingModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createMeetingForm.invalid) {
            return;
        }
        this.createMeetingForm.value.start_date = moment__WEBPACK_IMPORTED_MODULE_14__(this.createMeetingForm.value.start_date).format('YYYY-MM-DD HH:mm:ss');
        this.createMeetingForm.value.end_date = moment__WEBPACK_IMPORTED_MODULE_14__(this.createMeetingForm.value.end_date).format('YYYY-MM-DD HH:mm:ss');
        // --
        // Check dates
        if ((this.createMeetingForm.value.start_date == this.createMeetingForm.value.end_date) || (this.createMeetingForm.value.start_date > this.createMeetingForm.value.end_date)) {
            this.toastr.error(this.translate.instant('meetings.create.error_messages.message6'), this.translate.instant('meetings.title'));
            return false;
        }
        this.meetingService.create(this.createMeetingForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('meetings.messages.create'), _this.translate.instant('meetings.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    CreateMeetingModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    CreateMeetingModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"] },
        { type: _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_10__["MeetingService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__["ProjectService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }
    ]; };
    CreateMeetingModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-meeting-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-meeting-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/components/create-meeting-modal/create-meeting-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-meeting-modal.component.scss */ "./src/app/modules/admin/meeting/components/create-meeting-modal/create-meeting-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"],
            _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_10__["MeetingService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__["ProjectService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])
    ], CreateMeetingModalComponent);
    return CreateMeetingModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/meeting/components/edit-meeting-modal/edit-meeting-modal.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/admin/meeting/components/edit-meeting-modal/edit-meeting-modal.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWVldGluZy9jb21wb25lbnRzL2VkaXQtbWVldGluZy1tb2RhbC9lZGl0LW1lZXRpbmctbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/meeting/components/edit-meeting-modal/edit-meeting-modal.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/admin/meeting/components/edit-meeting-modal/edit-meeting-modal.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EditMeetingModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMeetingModalComponent", function() { return EditMeetingModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/meeting.service */ "./src/app/core/services/meeting.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);














var EditMeetingModalComponent = /** @class */ (function () {
    function EditMeetingModalComponent(translate, bsModalRef, formBuilder, toastr, userService, clientService, meetingService, projectService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.clientService = clientService;
        this.meetingService = meetingService;
        this.projectService = projectService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].apiUrl;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.users = [];
        this.clients = [];
        this.projects = [];
        this.teamMembers = [];
        this.editorConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_11__["editorConfig"];
    }
    EditMeetingModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getUsers();
        this.getClients();
        this.getProjects();
    };
    EditMeetingModalComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (data) {
            _this.users = data;
            _this.loadForms();
        });
    };
    EditMeetingModalComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getAll().subscribe(function (data) {
            _this.clients = data;
        });
    };
    EditMeetingModalComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getMyProjects().subscribe(function (data) {
            _this.projects = data;
        });
    };
    EditMeetingModalComponent.prototype.loadForms = function () {
        for (var iRow in this.meeting.members) {
            if (!this.meeting.members[iRow].is_client && this.meeting.members[iRow].member_id != this.meeting.organizer_id) {
                this.teamMembers.push(this.meeting.members[iRow].member_id);
            }
        }
        this.editMeetingForm = this.formBuilder.group({
            id: [this.meeting.id],
            title: [this.meeting.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            organizer_id: [this.meeting.organizer_id],
            description: [this.meeting.description],
            members: [this.teamMembers, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            client_id: [this.meeting.client_id],
            project_id: [this.meeting.project_id],
            start_date: [new Date(this.meeting.start_date), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            end_date: [new Date(this.meeting.end_date), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            location: [this.meeting.location],
            status: [this.meeting.status, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.isPageLoaded = true;
    };
    Object.defineProperty(EditMeetingModalComponent.prototype, "meetingControl", {
        get: function () { return this.editMeetingForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditMeetingModalComponent.prototype.startDateChange = function (start_date) {
        this.editMeetingForm.patchValue({ end_date: new Date(start_date.value) });
    };
    EditMeetingModalComponent.prototype.projectChange = function (event) {
        if (event.client_id) {
            this.editMeetingForm.patchValue({ client_id: event.client_id });
        }
        else {
            this.editMeetingForm.patchValue({ client_id: null });
        }
    };
    EditMeetingModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editMeetingForm.invalid) {
            return;
        }
        this.editMeetingForm.value.start_date = moment__WEBPACK_IMPORTED_MODULE_13__(this.editMeetingForm.value.start_date).format('YYYY-MM-DD HH:mm:ss');
        this.editMeetingForm.value.end_date = moment__WEBPACK_IMPORTED_MODULE_13__(this.editMeetingForm.value.end_date).format('YYYY-MM-DD HH:mm:ss');
        // --
        // Check dates
        if ((this.editMeetingForm.value.start_date == this.editMeetingForm.value.end_date) || (this.editMeetingForm.value.start_date > this.editMeetingForm.value.end_date)) {
            this.toastr.error(this.translate.instant('meetings.create.error_messages.message6'), this.translate.instant('meetings.title'));
            return false;
        }
        this.meetingService.update(this.editMeetingForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('meetings.messages.update'), _this.translate.instant('meetings.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    EditMeetingModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    EditMeetingModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"] },
        { type: _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_9__["MeetingService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_10__["ProjectService"] }
    ]; };
    EditMeetingModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-meeting-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-meeting-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/components/edit-meeting-modal/edit-meeting-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-meeting-modal.component.scss */ "./src/app/modules/admin/meeting/components/edit-meeting-modal/edit-meeting-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"],
            _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_9__["MeetingService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_10__["ProjectService"]])
    ], EditMeetingModalComponent);
    return EditMeetingModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/meeting/components/meeting-details/meeting-details.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/admin/meeting/components/meeting-details/meeting-details.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWVldGluZy9jb21wb25lbnRzL21lZXRpbmctZGV0YWlscy9tZWV0aW5nLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/meeting/components/meeting-details/meeting-details.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/admin/meeting/components/meeting-details/meeting-details.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: MeetingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingDetailsComponent", function() { return MeetingDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/meeting.service */ "./src/app/core/services/meeting.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");






var MeetingDetailsComponent = /** @class */ (function () {
    function MeetingDetailsComponent(translate, toastr, meetingService) {
        this.translate = translate;
        this.toastr = toastr;
        this.meetingService = meetingService;
        this.meetingstatusKeyValue = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_5__["meeting_status_key_value"];
    }
    MeetingDetailsComponent.prototype.ngOnInit = function () { };
    MeetingDetailsComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.meetingstatusKeyValue[statusKey];
    };
    MeetingDetailsComponent.prototype.changeMeetingStatus = function (meetingIDs, status) {
        var _this = this;
        var params = {
            ids: meetingIDs,
            status: status.id
        };
        this.meetingService.changeStatus(params).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('meetings.messages.status'), _this.translate.instant('meetings.title'));
        });
    };
    MeetingDetailsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_4__["MeetingService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MeetingDetailsComponent.prototype, "meeting", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MeetingDetailsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MeetingDetailsComponent.prototype, "apiUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MeetingDetailsComponent.prototype, "permission", void 0);
    MeetingDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meeting-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meeting-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/components/meeting-details/meeting-details.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meeting-details.component.scss */ "./src/app/modules/admin/meeting/components/meeting-details/meeting-details.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_4__["MeetingService"]])
    ], MeetingDetailsComponent);
    return MeetingDetailsComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/meeting/meeting-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/meeting/meeting-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MeetingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingRoutingModule", function() { return MeetingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_meeting_meeting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/meeting/meeting.component */ "./src/app/modules/admin/meeting/pages/meeting/meeting.component.ts");
/* harmony import */ var _pages_meeting_detail_meeting_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/meeting-detail/meeting-detail.component */ "./src/app/modules/admin/meeting/pages/meeting-detail/meeting-detail.component.ts");






var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_meeting_meeting_component__WEBPACK_IMPORTED_MODULE_4__["MeetingComponent"],
                data: {
                    permissions: {
                        only: ['admin', 'super_admin', 'meetings_view']
                    }
                }
            },
            {
                path: 'detail/:id',
                component: _pages_meeting_detail_meeting_detail_component__WEBPACK_IMPORTED_MODULE_5__["MeetingDetailComponent"],
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: "common.detail",
                        icon: "fa fa-briefcase",
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'meetings_view']
                    }
                }
            },
            {
                path: ':statusId',
                component: _pages_meeting_meeting_component__WEBPACK_IMPORTED_MODULE_4__["MeetingComponent"]
            }
        ]
    }
];
var MeetingRoutingModule = /** @class */ (function () {
    function MeetingRoutingModule() {
    }
    MeetingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MeetingRoutingModule);
    return MeetingRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/meeting/meeting.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/admin/meeting/meeting.module.ts ***!
  \*********************************************************/
/*! exports provided: MeetingModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingModule", function() { return MeetingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _meeting_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./meeting-routing.module */ "./src/app/modules/admin/meeting/meeting-routing.module.ts");
/* harmony import */ var _pages_meeting_meeting_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/meeting/meeting.component */ "./src/app/modules/admin/meeting/pages/meeting/meeting.component.ts");
/* harmony import */ var _components_create_meeting_modal_create_meeting_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/create-meeting-modal/create-meeting-modal.component */ "./src/app/modules/admin/meeting/components/create-meeting-modal/create-meeting-modal.component.ts");
/* harmony import */ var _components_edit_meeting_modal_edit_meeting_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/edit-meeting-modal/edit-meeting-modal.component */ "./src/app/modules/admin/meeting/components/edit-meeting-modal/edit-meeting-modal.component.ts");
/* harmony import */ var _timesheet_timesheet_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../timesheet/timesheet.module */ "./src/app/modules/timesheet/timesheet.module.ts");
/* harmony import */ var _pages_meeting_detail_meeting_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/meeting-detail/meeting-detail.component */ "./src/app/modules/admin/meeting/pages/meeting-detail/meeting-detail.component.ts");
/* harmony import */ var _components_meeting_details_meeting_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/meeting-details/meeting-details.component */ "./src/app/modules/admin/meeting/components/meeting-details/meeting-details.component.ts");






















var MeetingModule = /** @class */ (function () {
    function MeetingModule() {
    }
    MeetingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_meeting_meeting_component__WEBPACK_IMPORTED_MODULE_16__["MeetingComponent"],
                _components_create_meeting_modal_create_meeting_modal_component__WEBPACK_IMPORTED_MODULE_17__["CreateMeetingModalComponent"],
                _components_edit_meeting_modal_edit_meeting_modal_component__WEBPACK_IMPORTED_MODULE_18__["EditMeetingModalComponent"],
                _pages_meeting_detail_meeting_detail_component__WEBPACK_IMPORTED_MODULE_20__["MeetingDetailComponent"],
                _components_meeting_details_meeting_details_component__WEBPACK_IMPORTED_MODULE_21__["MeetingDetailsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _meeting_routing_module__WEBPACK_IMPORTED_MODULE_15__["MeetingRoutingModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_9__["NgxPermissionsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_13__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_7__["NgxEditorModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_12__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_12__["OwlNativeDateTimeModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _timesheet_timesheet_module__WEBPACK_IMPORTED_MODULE_19__["TimesheetModule"]
            ],
            entryComponents: [
                _components_create_meeting_modal_create_meeting_modal_component__WEBPACK_IMPORTED_MODULE_17__["CreateMeetingModalComponent"],
                _components_edit_meeting_modal_edit_meeting_modal_component__WEBPACK_IMPORTED_MODULE_18__["EditMeetingModalComponent"]
            ]
        })
    ], MeetingModule);
    return MeetingModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/admin/meeting/pages/meeting-detail/meeting-detail.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/admin/meeting/pages/meeting-detail/meeting-detail.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWVldGluZy9wYWdlcy9tZWV0aW5nLWRldGFpbC9tZWV0aW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/meeting/pages/meeting-detail/meeting-detail.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin/meeting/pages/meeting-detail/meeting-detail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MeetingDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingDetailComponent", function() { return MeetingDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/services/meeting.service */ "./src/app/core/services/meeting.service.ts");
/* harmony import */ var src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");






var MeetingDetailComponent = /** @class */ (function () {
    function MeetingDetailComponent(route, router, meetingService, authenticationService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.meetingService = meetingService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.isPageLoaded = false;
        this.activeMeetingTab = '1';
        this.route.paramMap.subscribe(function (params) {
            _this.getById(params.get('id'));
        });
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    MeetingDetailComponent.prototype.ngOnInit = function () { };
    MeetingDetailComponent.prototype.getById = function (taskId) {
        var _this = this;
        this.meetingService.getById(taskId).subscribe(function (data) {
            _this.meeting = data;
            _this.isPageLoaded = true;
        });
    };
    MeetingDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_3__["MeetingService"] },
        { type: src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    MeetingDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meeting-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meeting-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/pages/meeting-detail/meeting-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meeting-detail.component.scss */ "./src/app/modules/admin/meeting/pages/meeting-detail/meeting-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_3__["MeetingService"],
            src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], MeetingDetailComponent);
    return MeetingDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/meeting/pages/meeting/meeting.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin/meeting/pages/meeting/meeting.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi9tZWV0aW5nL3BhZ2VzL21lZXRpbmcvbWVldGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tZWV0aW5nL3BhZ2VzL21lZXRpbmcvbWVldGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWVldGluZy9wYWdlcy9tZWV0aW5nL21lZXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgICBkaXNwbGF5OiBub25lXG59IiwiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/admin/meeting/pages/meeting/meeting.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/admin/meeting/pages/meeting/meeting.component.ts ***!
  \**************************************************************************/
/*! exports provided: MeetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingComponent", function() { return MeetingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/meeting.service */ "./src/app/core/services/meeting.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_create_meeting_modal_create_meeting_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/create-meeting-modal/create-meeting-modal.component */ "./src/app/modules/admin/meeting/components/create-meeting-modal/create-meeting-modal.component.ts");
/* harmony import */ var _components_edit_meeting_modal_edit_meeting_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/edit-meeting-modal/edit-meeting-modal.component */ "./src/app/modules/admin/meeting/components/edit-meeting-modal/edit-meeting-modal.component.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_19__);




















var MeetingComponent = /** @class */ (function () {
    function MeetingComponent(translate, datePipe, http, router, route, modalService, exportAsService, toastr, meetingService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.datePipe = datePipe;
        this.http = http;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.meetingService = meetingService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.dtOptions = {};
        this.meetings = [];
        this.members = [];
        this.meetingstatusKeyValue = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_16__["meeting_status_key_value"];
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'meeting_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    MeetingComponent.prototype.ngOnInit = function () {
        this.loadMeetingDatatable();
    };
    MeetingComponent.prototype.loadMeetingDatatable = function () {
        var _this = this;
        this.statusfilterId = 0;
        if (this.route.snapshot.params['statusId'])
            this.statusfilterId = this.route.snapshot.params['statusId'];
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
                    'width': "9%",
                    'target': [0]
                },
                {
                    'sortable': true,
                    'width': "22%",
                    'target': [1]
                },
                {
                    'sortable': true,
                    'width': "8%",
                    'target': [2]
                },
                {
                    'sortable': false,
                    'width': "15%",
                    'target': [3]
                },
                {
                    'sortable': true,
                    'width': "13%",
                    'target': [4]
                },
                {
                    'sortable': true,
                    'width': "13%",
                    'target': [5]
                },
                {
                    'sortable': true,
                    'width': "5%",
                    'target': [6]
                },
                {
                    'sortable': true,
                    'width': "10%",
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
                    title: this.translate.instant('meetings.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('meetings.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('meetings.title'),
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
                    statusId: _this.statusfilterId,
                };
                _this.http
                    .post(that.apiUrl + '/api/all-meetings', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.meetings = resp.data;
                        _this.countStatus = resp;
                        _this.countStatus = _this.countStatus.statusCount;
                        _this.isPageLoaded = true;
                    }
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    MeetingComponent.prototype.filterByStatus = function (statusID) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.navigate(['meetings', statusID]);
    };
    MeetingComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('meetings.title')).subscribe(function () { });
    };
    MeetingComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    MeetingComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    MeetingComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.meetings.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    MeetingComponent.prototype.openMeetingCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_create_meeting_modal_create_meeting_modal_component__WEBPACK_IMPORTED_MODULE_14__["CreateMeetingModalComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    MeetingComponent.prototype.openMeetingEditModal = function (meeting) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn",
            initialState: {
                meeting: meeting
            }
        };
        this.modalRef = this.modalService.show(_components_edit_meeting_modal_edit_meeting_modal_component__WEBPACK_IMPORTED_MODULE_15__["EditMeetingModalComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    MeetingComponent.prototype.removeMeeting = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.meetingService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('meetings.messages.delete'), _this.translate.instant('meetings.title'));
                    _this.rerender();
                });
            }
        });
    };
    MeetingComponent.prototype.saveMeetingDetail = function (index, name, value) {
        var _this = this;
        if (value instanceof Date) {
            value = this.datePipe.transform(value, "yyyy-MM-dd h:mm:ss a");
        }
        this.meetings[index][name] = value;
        for (var iRow in this.meetings[index].members) {
            this.members.push(this.meetings[index].members[iRow].member_id);
        }
        this.meetings[index].members = this.members;
        this.meetingService.update(this.meetings[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('meetings.messages.update'), _this.translate.instant('meetings.title'));
            _this.rerender();
        }, function (error) {
            _this.rerender();
        });
    };
    MeetingComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.meetingstatusKeyValue[statusKey];
    };
    MeetingComponent.prototype.changeMeetingStatus = function (meetingIDs, status) {
        var _this = this;
        var params = {
            ids: meetingIDs,
            status: status.id
        };
        this.meetingService.changeStatus(params).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('meetings.messages.status'), _this.translate.instant('meetings.title'));
            _this.rerender();
        });
    };
    MeetingComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
        { type: _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_12__["MeetingService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"])
    ], MeetingComponent.prototype, "dtElement", void 0);
    MeetingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meeting',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meeting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/meeting/pages/meeting/meeting.component.html")).default,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meeting.component.scss */ "./src/app/modules/admin/meeting/pages/meeting/meeting.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_12__["MeetingService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"]])
    ], MeetingComponent);
    return MeetingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-admin-meeting-meeting-module.js.map