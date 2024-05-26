(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pm-defects-defects-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/create-attachment-modal/create-attachment-modal.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/create-attachment-modal/create-attachment-modal.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-paperclip modal-icon\" aria-hidden=\"true\"></i>&nbsp;{{'attachments.title' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsCreateAttachmentModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"createAttachmentForm\" (ngSubmit)=\"onSubmit()\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"file_name\">{{'attachments.create.fields.file_title' | translate }}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<input type=\"text\" formControlName=\"file_name\" placeholder=\"{{'attachments.create.placeholders.placeholder1' | translate }}\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && attachment.file_name.errors }\" id=\"file_name\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && attachment.file_name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"attachment.file_name.errors.required\">{{'attachments.create.error_messages.message1' | translate }}</div>\n\t\t\t\t\t\t\t<div *ngIf=\"attachment.file_name.errors.maxlength\">{{'attachments.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && attachment.file.errors }\">\n\t\t\t\t\t\t<label for=\"file\">{{'attachments.create.fields.attachment' | translate }}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<input type=\"hidden\" formControlName=\"file\">\n\t\t\t\t\t\t<div class=\"dropzone dz-clickable\" #pdfdropzone>\n\t\t\t\t\t\t\t<div class=\"dz-default dz-message\"><span><strong>{{'attachments.create.error_messages.message2' | translate }}</strong></span></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && attachment.file.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"attachment.file.errors.required\">{{'attachments.create.error_messages.message3' | translate }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<input type=\"hidden\" formControlName=\"file_extension\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" (click)=\"onCancel()\">{{'common.cancel' | translate }}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.create' | translate }}</button>\n\t</div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-activities/defect-activities.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-activities/defect-activities.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"activity-timeline\">\n    <div class=\"card overflow-hidden shadow-none p-2\">\n        <div class=\"card-body\" [perfectScrollbar]=\"scrollConfig\">\n            <ul class=\"timeline pr-2\">\n                <li *ngFor=\"let activity of defect.activities; index as i\" class=\"d-flex flex-column\">\n                    <div class=\"d-flex flex-column flex-md-row justify-content-start justify-content-md-between\">\n                        <a [routerLink]=\"['/users/profile', activity.user.id]\" placement=\"top\" tooltip=\"{{activity.user.firstname}} {{activity.user.lastname}}\">\n                            <img src=\"../assets/img/profile_small.jpg\" class=\"user-profile\" alt=\"Profile Photo\" *ngIf=\"!activity.user.avatar\" />\n                            <img src=\"{{apiUrl}}/uploads/profile/{{activity.user.avatar}}\" class=\"user-profile\" alt=\"Profile Photo\" *ngIf=\"activity.user.avatar\" />\n                            <span class=\"ml-1 activity-user\">{{activity.user.firstname}} {{activity.user.lastname}}</span>\n                        </a>\n                        <a class=\"float-left activity-date\" href=\"javascript:void(0)\"><span class=\"badge badge-secondary mr-1\">{{activity.diff_for_humans}}</span>{{activity.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}</a>\n                    </div>\n                    <p [innerHTML]=\"activity.description\"></p>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-attachment/defect-attachment.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-attachment/defect-attachment.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header justify-content-center p-0\">\n    <div class=\"card-buttons pt-2 pb-2 pr-1\">\n        <button type=\"button\" class=\"btn btn-create mb-0\" (click)=\"openAttachmentCreateModal()\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-upload\"></i><span>{{'common.drag_file' | translate}}</span></button>\n    </div>\n</div>\n<!-- Card body -->\n<div class=\"card-body\">\n\t<div class=\"row border-top pt-2\" *ngIf=\"attachments?.length != 0\">\n\t\t<div class=\"col-sm-4\" *ngFor=\"let file of attachments; index as i\">\n\t\t\t<div class=\"file-browser\">\n\t\t\t\t<div class=\"actions-dropdown text-right m-1 pr-2\">\n\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t<a href=\"javascript:void(0);\" dropdownToggle class=\"dropdown-toggle\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></a>\n\t\t\t\t\t\t<ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t<a class=\"dropdown-item btn btn-download btn-raised\" tooltip=\"{{'common.download' | translate}}\" target=\"_blank\" download=\"{{file.file_name}}\" href=\"{{apiUrl}}/uploads/defect_attachment/{{file.file_hash}}\"><i class=\"fa fa-download\"></i></a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role=\"menuitem\" *ngIf=\"permission\">\n\t\t\t\t\t\t\t\t<a (click)=\"attachmentDelete(file.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"file-box\">\n\t\t\t\t\t<div class=\"files\">\n\t\t\t\t\t\t<div *ngIf=\"file.icon\" class=\"icon docx\">\n\t\t\t\t\t\t\t<i [ngClass]=\"file.icon\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"file.isImageFile\" class=\"image\">\n\t\t\t\t\t\t\t<img alt=\"image\" class=\"img-fluid height-100\" src=\"{{ apiUrl }}/uploads/defect_attachment/{{file.file_hash}}\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"file-name\">\n\t\t\t\t\t\t\t<a target=\"_blank\" tooltip=\"{{file.file_name}}\" download=\"{{file.file_name}}\" href=\"{{apiUrl}}/uploads/defect_attachment/{{file.file_hash}}\"><h4>{{ (file.file_name.length>20)? (file.file_name | slice:0:20)+'..':(file.file_name) }}</h4></a>\n\t\t\t\t\t\t\t<p>{{'file_browser.title7' | translate}}: {{ file.updated_at | dateTimeFormatFilter:loginUser.settings.date_time_format }}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"corner\"></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row border-top pt-2\" *ngIf=\"attachments?.length == 0\">\n\t\t<div class=\"col-sm-12 text-center\">{{'common.datatable.sEmptyTable' | translate}}</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-comments/defect-comments.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-comments/defect-comments.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header p-0\">\n    <div class=\"card-buttons pt-2 pb-2 pr-1\">\n        <button (click)=\"onSubmit()\" id=\"post_comment\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create_comment' | translate}}\"><i class=\"fa fa-plus\"></i><span>{{'comments.buttons.button1' | translate}}</span></button>\n    </div>\n</div>\n<!-- Card body -->\n<div class=\"card-body\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<form [formGroup]=\"defectCommentsForm\" class=\"bs4-forms\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<textarea class=\"form-control\" name=\"comment\" formControlName=\"comment\" id=\"comment\" placeholder=\"{{'comments.create.placeholders.placeholder1' | translate}}\" [ngClass]=\"{ 'is-invalid': isCommentFormSubmitted && commentControl.comment.errors }\"></textarea>\n\t\t\t\t\t<div *ngIf=\"isCommentFormSubmitted && commentControl.comment.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"commentControl.comment.errors.required\">{{'comments.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"hidden\" formControlName=\"files\">\n\t\t\t\t\t<div class=\"dropzone dz-clickable\" #commentdropzone>\n\t\t\t\t\t\t<div class=\"dz-default dz-message\">\n\t\t\t\t\t\t\t<span><strong>{{'comments.create.error_messages.message2' | translate}}</strong></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\t<!-- Comments lists -->\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<accordion [closeOthers]=\"oneAtATime\">\n\t\t\t\t<ng-container *ngFor=\"let comment of comments\">\n\t\t\t\t\t<accordion-group [panelClass]=\"customClass\">\n\t\t\t\t\t\t<button class=\"btn btn-link btn-block d-lg-flex justify-content-between\" accordion-heading type=\"button\">\n\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-down mr-1\"></i>\n\t\t\t\t\t\t\t\t<img src=\"../assets/img/profile_large.jpg\" alt=\"User profile\" class=\"img-sm rounded-circle\" *ngIf=\"!comment.user.avatar\" />\n\t\t\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/profile/{{comment.user.avatar}}\" alt=\"User profile\" class=\"img-sm rounded-circle\" *ngIf=\"comment.user.avatar\" />\n\t\t\t\t\t\t\t\t<span class=\"ml-1\">{{comment.user.firstname}} {{comment.user.lastname}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-dark pt-1\">{{comment.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}</div>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t   <div class=\"comment-text\">\n\t\t\t\t\t\t\t<inline-edit-textarea [name]=\"'comment'\" [fieldValue]=\"comment.comment\" [elementFor]=\"'common.comment' | translate\" [isRequired]=\"'true'\" (updateValue)=\"saveComments(comment, 'comment', $event);\"></inline-edit-textarea>\n\t\t\t\t\t\t\t<ul class=\"attachment_box\" *ngIf=\"comment.attachments\">\n\t\t\t\t\t\t\t\t<li *ngFor=\"let item of comment.attachments;let i = index; trackBy: i\">\n\t\t\t\t\t\t\t\t\t<a target=\"_blank\" download=\"{{item.name}}\" href=\"{{apiUrl}}/uploads/defect_attachment/{{item.file}}\"><span>{{item.name}}</span></a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"comment-reply\">\n\t\t\t\t\t\t\t<a (click)=\"commentDelete(comment.id)\" *ngIf=\"permission\" class=\"text-danger\">{{'common.remove' | translate}}</a>\n\t\t\t\t\t\t\t<!-- <a (click)=\"showReplayCommentBox(comment.id)\">{{'comments.buttons.button2' | translate}}</a> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</accordion-group>\n\t\t\t\t</ng-container>\n\t\t\t</accordion>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-details/defect-details.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-details/defect-details.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-content\">\n\t<div class=\"card-body\">\n\t\t<div class=\"row mr-2 ml-2\">\n\t\t\t<div class=\"col-md-12 card-separator\">\n\t\t\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t\t\t<div class=\"task-name d-lg-flex\">\n\t\t\t\t\t\t<h4 class=\"task-id\">\n\t\t\t\t\t\t\t<span>#{{defect.generated_id}}</span>\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t<p class=\"task-title ml-lg-2\">\n\t\t\t\t\t\t\t{{defect.defect_name}}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"task-action d-flex\">\n\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'timesheet_create']\">\n\t\t\t\t\t\t\t<div class=\"countdown pt-1 pr-1\" *ngIf=\"showTimer\">\n\t\t\t\t\t\t\t\t<ul class=\"p-0 m-0\">\n\t\t\t\t\t\t\t\t\t<li><span>{{totalHours}}:{{totalMinutes}}:{{totalSeconds}}</span></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"showTimer\">\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"isTimerStarted else elseBlock10\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-create mb-0 mb-lg-0 float-right\" tooltip=\"{{'timer_logs.title1' | translate}}\" (click)=\"stopTimer(true)\"><i class=\"fa fa-stop-circle\" aria-hidden=\"true\"></i></button>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t<ng-template #elseBlock10>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-create mb-0 mb-lg-0 float-right\" tooltip=\"{{'timer_logs.title' | translate}}\" (click)=\"startTimer()\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i></button>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t<a *ngIf=\"permission\" [routerLink]=\"['/defects/edit', defect.id]\" class=\"btn btn-create mb-2 mb-lg-0 float-right\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t\t<a *ngIf=\"defect.attachment_hash\" href=\"{{ apiUrl }}/uploads/defect/{{defect.attachment_hash}}\" download=\"{{defect.attachment}}\" class=\"btn btn-create mb-2 mb-lg-0 float-right\" target=\"_blank\" placement=\"top\" tooltip=\"{{'defects.tooltips.attachment' | translate }}\"><i class=\"fa fa-files-o\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12 pr-0 pl-0\">\n\t\t\t\t<form class=\"form-body overflow-hidden mt-3\">\n\t\t\t\t\t<!-- Detail fields -->\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-4 pr-lg-3 pl-lg-3 pr-2 pl-2\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col card-separator mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'defects.create.fields.project_name' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{defect.project.project_name}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'defects.create.fields.project_version' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{defect.project_version}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3 d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"row\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'defects.create.fields.status' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"status-dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permission; else elseBlock6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle id=\"button-basic-2\" type=\"button\" class=\"btn dropdown-toggle select-btn-lg\" aria-controls=\"dropdown-basic-2\">{{getTranslateStatus(defect.status) | translate}}&nbsp;<span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-2\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngFor=\"let status of ('defects.status' | translate)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item btn btn-sm {{status.class}}\" [ngClass]=\"{'active': defect.status == status.id}\" (click)=\"changeDefectStatus([defect.id], status);defect.status = status.id\">{{status.label}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ('defects.status' | translate)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"budges-status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"{{status.class}}\" *ngIf=\"status.id == defect.status\">{{status.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'defects.create.fields.severity' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"status-dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permission; else elseBlock5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle id=\"button-basic-1\" type=\"button\" class=\"btn dropdown-toggle select-btn-lg\" aria-controls=\"dropdown-basic-1\">{{getTranslateSeverities(defect.severity) | translate}}&nbsp;<span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngFor=\"let severity of ('defects.severities' | translate)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item btn btn-sm {{severity.class}}\" [ngClass]=\"{'active': defect.severity == severity.id}\" (click)=\"changeDefectSeverity([defect.id], severity);defect.severity = severity.id\">{{severity.label}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let severity of ('defects.severities' | translate)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"budges-status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"{{severity.class}}\" *ngIf=\"severity.id == defect.severity\">{{severity.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!--  </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3 d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'defects.create.fields.created_by' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"people-lists\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', defect.created_user.id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{defect.created_user.firstname}} {{defect.created_user.lastname}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"defect.created_user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{defect.created_user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!defect.created_user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a><br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mt-2\">{{defect.created_user.firstname}} {{defect.created_user.lastname}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'defects.create.fields.assigned_To' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"people-lists\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"defect.assign_member == 'Unassign' || defect.assign_member == '' || defect.assign_member == null else elseBlock3;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', defect.assign_user.id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{defect.assign_user.firstname}} {{defect.assign_user.lastname}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"defect.assign_user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{defect.assign_user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!defect.assign_user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a><br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mt-2\">{{defect.assign_user.firstname}} {{defect.assign_user.lastname}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 card-separator\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'defects.create.fields.start_date' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{defect.start_date | dateTimeFormatFilter : loginUser.settings.date_format}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'defects.create.fields.end_date' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{defect.end_date | dateTimeFormatFilter : loginUser.settings.date_format}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'defects.create.fields.estimate_hours' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permission; else elseBlock7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-hours [name]=\"'estimated_hours'\" [elementFor]=\"'defects.inline_edit.estimate_hours' | translate\" [fieldValue]=\"defect.estimated_hours\" [isRequired]=\"'false'\" (updateValue)=\"saveDefectDetail('estimated_hours', $event);\"></inline-edit-hours>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock7>{{ defect.estimated_hours}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'defects.create.fields.actual_hours' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{defect.actual_hours}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'defects.create.fields.defect_type' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permission; else elseBlock4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-select [name]=\"'defect_type'\" [txtField]=\"'defect_type'\" [elementFor]=\"'defects.inline_edit.defect_type' | translate\" [selectedValue]=\"defect.defect_type\" [isRequired]=\"'true'\" [options]=\"('defects.defect_types' | translate)\" (updateValue)=\"saveDefectDetail('defect_type', $event);\"></inline-edit-select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let type of ('defects.defect_types' | translate)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"type.id == defect.defect_type\">{{type.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'common.created' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{defect.created_at | dateTimeFormatFilter : loginUser.settings.date_time_format}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'common.updated' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{defect.updated_at | dateTimeFormatFilter : loginUser.settings.date_time_format}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-8\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<!-- Description field -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 mb-3 description-detail card-separator\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"sub-title\"><span>{{'defects.details.title2' | translate}}</span></h4>\n\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permission; else elseBlock1\">\n\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-text-editor [name]=\"'description'\" [fieldValue]=\"defect.description\" [elementFor]=\"'defects.inline_edit.description' | translate\" (updateValue)=\"saveDefectDetail('description', $event);\"></inline-edit-text-editor>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock1>\n\t\t\t\t\t\t\t\t\t\t\t\t<p [innerHtml]=\"defect.description\"></p>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- Custom fields -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 mb-3 card-separator\" *ngIf=\"defect.custom_fields.length > 0\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"sub-title\"><span>{{'defects.details.title1' | translate}}</span></h4>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let customField of defect.custom_fields\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-6 mt-2 mb-3\" *ngIf=\"customField.field_type != 'textarea'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"customField.field_type == 'text' || customField.field_type == 'numeric'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{customField.field_label}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{defect[customField.field_column]}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"customField.field_type == 'date'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{customField.field_label}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{defect[customField.field_column] | dateTimeFormatFilter: loginUser.settings.date_format}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"customField.field_type == 'dropdown'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{customField.field_label}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let fieldValue of getParseArray(customField.default_value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"fieldValue.value == defect[customField.field_column]\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{fieldValue.label}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"customField.field_type == 'checkbox'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{customField.field_label}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"defect[customField.field_column] == 1; else checkboxElseBlock\">{{'common.true' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #checkboxElseBlock>{{'common.false' | translate}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let customField of defect.custom_fields\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-6 mt-2 mb-3\" *ngIf=\"customField.field_type == 'textarea'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{customField.field_label}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{defect[customField.field_column]}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- Todos list -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 mb-3 card-separator\">\n\t\t\t\t\t\t\t\t\t\t<app-todo-detail [module_id]=\"3\" [module_related_id]=\"defect.id\"></app-todo-detail>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- Defect Timesheet -->\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 mb-3 card-separator\">\n\t\t\t\t\t\t\t\t\t\t<app-timesheet-list [module_id]=\"'3'\" [module_related_id]=\"defect.id\" [project_id]=\"defect.project_id\" [loginUser]=\"loginUser\" [apiUrl]=\"apiUrl\"></app-timesheet-list>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<!-- Tab Design -->\n\t\t\t\t\t\t\t\t\t<tabset class=\"nav nav-tabs d-flex justify-content-left details-tabs col-md-12 p-0\">\n\t\t\t\t\t\t\t\t\t\t<!-- Comments -->\n\t\t\t\t\t\t\t\t\t\t<tab customClass=\"text-left\" class=\"card-separator mb-3\" id=\"1\" (selectTab)=\"setActiveDefectTab($event)\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template tabHeading>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex\"><i class=\"fa fa-comments-o\"></i><span class=\"mt-1 ml-1\">{{'comments.title' | translate}}</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<!-- Task Comment -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 pr-0 pl-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-defect-comments [permission]=\"permission\" [apiUrl]=\"apiUrl\" [loginUser]=\"loginUser\" *ngIf=\"getActiveDefectTab('1')\"></app-defect-comments>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t\t\t\t<!-- Attachments -->\n\t\t\t\t\t\t\t\t\t\t<tab customClass=\"text-left\" class=\"card-separator mb-3\" id=\"2\" (selectTab)=\"setActiveDefectTab($event)\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template tabHeading>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex\"><i class=\"fa fa-paperclip\"></i><span class=\"mt-1 ml-1\">{{'attachments.title' | translate}}</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<!-- Task Attachment -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 pr-0 pl-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-defect-attachment [defect]=\"defect\" [loginUser]=\"loginUser\" [permission]=\"permission\" [apiUrl]=\"apiUrl\"></app-defect-attachment>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t\t\t\t<!-- Notes -->\n\t\t\t\t\t\t\t\t\t\t<tab customClass=\"text-left\" class=\"card-separator mb-3 tab-width\" id=\"3\" (selectTab)=\"setActiveDefectTab($event)\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template tabHeading>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex\"><i class=\"fa fa-sticky-note-o\"></i><span class=\"mt-1 ml-1\">{{'notes.title' | translate}}</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<!-- Notes -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"sub-title mt-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <span>{{'notes.title' | translate}}</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permission; else elseBlock2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-text-editor [name]=\"'notes'\" [fieldValue]=\"defect.notes\" [elementFor]=\"'defects.inline_edit.notes' | translate\" (updateValue)=\"saveDefectDetail('notes', $event);\"></inline-edit-text-editor>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock2></ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t\t\t\t<!-- Activity -->\n\t\t\t\t\t\t\t\t\t\t<tab customClass=\"text-left\" class=\"card-separator mb-3\" id=\"4\" (selectTab)=\"setActiveDefectTab($event)\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template tabHeading>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex\"><i class=\"fa fa-list\"></i><span class=\"mt-1 ml-1\">{{'activities.title' | translate}}</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<app-defect-activities [defect]=\"defect\" [loginUser]=\"loginUser\" [apiUrl]=\"apiUrl\"></app-defect-activities>\n\t\t\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t\t\t\t<!-- History -->\n\t\t\t\t\t\t\t\t\t\t<tab customClass=\"text-left\" class=\"card-separator mb-3 tab-width\" id=\"5\" (selectTab)=\"setActiveDefectTab($event)\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template tabHeading>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex\"><i class=\"fa fa-history\"></i><span class=\"mt-1 ml-1\">{{'histories.title' | translate}}</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<app-defect-history [defect]=\"defect\" [loginUser]=\"loginUser\" [apiUrl]=\"apiUrl\"></app-defect-history>\n\t\t\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t\t\t</tabset>\n\t\t\t\t\t\t\t\t\t<!-- Tab Design End -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-history/defect-history.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-history/defect-history.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card body -->\n<div class=\"card-body\">\n\t<div class=\"row pl-2 pr-2\">\n\t\t<div class=\"col-lg-12 mb-1 tab-table\">\n\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl overflow-x-auto\">\n\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" class=\"table table-bordered table-hover b4-datatable\" id=\"history_table\" width=\"100%\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>{{'histories.columns.date' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{'histories.columns.activity' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{'histories.columns.creator' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{'histories.columns.updated_by' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{'histories.columns.commentor' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{'histories.columns.solved_by' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{'histories.columns.closed_by' | translate }}</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let history of defect.history\">\n\t\t\t\t\t\t\t<td>{{ history.created_at | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<p [innerHtml]=\"history.description\"></p>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"people-lists\">\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"userLists[history.created_by_id]; else elseBlock\">\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', history.created_by_id]\" tooltip=\"{{userLists[history.created_by_id].name}}\" class=\"btn rounded-circle btn-profile-info text-dark\" placement=\"top\">\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"userLists[history.created_by_id].avatar\" src=\"{{apiUrl}}/uploads/profile/{{userLists[history.created_by_id].avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!userLists[history.created_by_id].avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t<ng-template #elseBlock>-</ng-template>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"people-lists\">\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"userLists[history.updated_by_id]; else elseBlock1\">\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', history.updated_by_id]\" tooltip=\"{{userLists[history.updated_by_id].name}}\" class=\"btn rounded-circle btn-profile-danger text-dark\" placement=\"top\">\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"userLists[history.updated_by_id].avatar\" src=\"{{apiUrl}}/uploads/profile/{{userLists[history.updated_by_id].avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!userLists[history.updated_by_id].avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t<ng-template #elseBlock1>-</ng-template>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"people-lists\">\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"userLists[history.commented_by_id]; else elseBlock4\">\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', history.commented_by_id]\" tooltip=\"{{userLists[history.commented_by_id].name}}\" class=\"btn rounded-circle btn-profile-info text-dark\" placement=\"top\">\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"userLists[history.commented_by_id].avatar\" src=\"{{apiUrl}}/uploads/profile/{{userLists[history.commented_by_id].avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!userLists[history.commented_by_id].avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t<ng-template #elseBlock4>-</ng-template>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"people-lists\">\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"userLists[history.solved_by_id]; else elseBlock2\">\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', history.solved_by_id]\" tooltip=\"{{userLists[history.solved_by_id].name}}\" class=\"btn rounded-circle btn-profile-info text-dark\" placement=\"top\">\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"userLists[history.solved_by_id].avatar\" src=\"{{apiUrl}}/uploads/profile/{{userLists[history.solved_by_id].avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!userLists[history.solved_by_id].avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t<ng-template #elseBlock2>-</ng-template>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"people-lists\">\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"userLists[history.closed_by_id]; else elseBlock3\">\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', history.closed_by_id]\" tooltip=\"{{userLists[history.closed_by_id].name}}\" class=\"btn rounded-circle btn-profile-danger text-dark\" placement=\"top\">\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"userLists[history.closed_by_id].avatar\" src=\"{{apiUrl}}/uploads/profile/{{userLists[history.closed_by_id].avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!userLists[history.closed_by_id].avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t<ng-template #elseBlock3>-</ng-template>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-create/defect-create.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-create/defect-create.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\" *ngIf=\"isPageLoaded\">\n\t<form [formGroup]=\"createDefectForm\" (ngSubmit)=\"onSubmit()\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t<h4 class=\"card-title\">{{'defects.title1' | translate }}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\">\n\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-product-hunt\"></i>  -->\n\t\t\t\t\t\t\t\t\t{{'defects.headings.head1' | translate }}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"defect_name\">{{'defects.create.fields.defect_name' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"defect_name\" id=\"defect_name\" placeholder=\"{{'defects.create.placeholders.placeholder1' | translate }}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.defect_name.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && defectControl.defect_name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"defectControl.defect_name.errors.required\">{{'defects.create.error_messages.message1' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"defectControl.defect_name.errors.maxlength\">{{'defects.create.error_messages.message2' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.start_date.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"start_date\">{{'defects.create.fields.start_date' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" [minDate]=\"projectStartDate\" (bsValueChange)=\"startDateChange($event)\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'defects.create.placeholders.placeholder8' | translate }}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && defectControl.start_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"defectControl.start_date.errors\">{{'defects.create.error_messages.message11' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.end_date.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"end-date\">{{'defects.create.fields.end_date' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp2=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" [minDate]=\"createDefectForm.get('start_date').value\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'defects.create.placeholders.placeholder9' | translate }}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && defectControl.end_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"defectControl.end_date.errors\">{{'defects.create.error_messages.message12' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.defect_type.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"defect_type\">{{'defects.create.fields.defect_type' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"('defects.defect_types' | translate)\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"type\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"defect_type\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'defects.create.placeholders.placeholder2' | translate }}\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && defectControl.defect_type.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"defectControl.defect_type.errors.required\">{{'defects.create.error_messages.message4' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.severity.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"severity\">{{'defects.create.fields.severity' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"('defects.severities' | translate)\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"severity\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"severity\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'defects.create.placeholders.placeholder4' | translate }}\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && defectControl.severity.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"defectControl.severity.errors.required\">{{'defects.create.error_messages.message6' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"assigned_group_id\">{{'defects.create.fields.assigned_group' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"teams\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"team_name\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"assigned_group_id\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"assigned_group_id\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'defects.create.placeholders.placeholder5' | translate }}\"\n\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"assignGroupChange($event)\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"assign_member\">{{'defects.create.fields.assigned_To' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"teamsMembers\"\n\t\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"assign_member\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"assign_member\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'common.unassigned' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"estimated_hours\">{{'defects.create.fields.estimate_hours' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type='text' class=\"form-control\" formControlName=\"estimated_hours\" placeholder=\"00:00\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.estimated_hours.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && defectControl.estimated_hours.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"defectControl.estimated_hours.errors.pattern\">{{'defects.create.error_messages.message13' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.status.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"status\">{{'defects.create.fields.status' | translate }}&nbsp;<span class=\"text-danger\">*</span> </label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"('defects.status' | translate)\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"status\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"status\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'defects.create.placeholders.placeholder3' | translate }}\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && defectControl.status.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"defectControl.status.errors.required\">{{'defects.create.error_messages.message5' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">&nbsp;</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<!-- <h4 class=\"form-section\"><i class=\"ft-zap\"></i> {{'defects.headings.head2' | translate }}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.project_id.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"project_id\">{{'defects.create.fields.project_name' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"projects\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"projectChange($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"project_name\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"project_id\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"project_id\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'defects.create.placeholders.placeholder6' | translate }}\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.project_name}}\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && defectControl.project_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"defectControl.project_id.errors.required\">{{'defects.create.error_messages.message8' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"project_version\">{{'defects.create.fields.project_version' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"projectVersion\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"project_version\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'defects.create.placeholders.placeholder7' | translate }}\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">{{item}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-upload\"></i> {{'defects.headings.head3' | translate }}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>{{'defects.create.fields.choose_file' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"hidden\" formControlName=\"file\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropzone dz-clickable\" #logoropzone>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dz-default dz-message\"><span><strong>{{'defects.create.error_messages.message10' | translate }}</strong></span></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\" *ngIf=\"customFields.length > 0\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-star\"></i>{{'defects.headings.head4' | translate }}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<app-show-custom-field-element [formArray]=\"'custom_field'\"\n\t\t\t\t\t\t\t\t\t\t\t[controls]=\"createDefectForm.get('custom_field')\"\n\t\t\t\t\t\t\t\t\t\t\t[customFields]=\"customFields\"\n\t\t\t\t\t\t\t\t\t\t\t[isFormSubmitted]=\"isFormSubmitted\"\n\t\t\t\t\t\t\t\t\t\t\t[formName]=\"createDefectForm\">\n\t\t\t\t\t\t\t\t\t\t</app-show-custom-field-element>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-message-square\"></i> {{'defects.headings.head5' | translate }}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"description\">{{'defects.create.fields.description' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<app-ngx-editor [config]=\"editorConfig\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"description\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"description\">\n\t\t\t\t\t\t\t\t\t\t\t</app-ngx-editor>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 text-right\">\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/defects']\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate}}</a>\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.create' | translate}}</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-detail/defect-detail.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-detail/defect-detail.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"row detail-page\">\n\t<div class=\"card bg-transparent\" *ngIf=\"isPageLoaded\">\n\t\t<app-defect-details [defect]=\"defect\"\n\t\t\t[loginUser]=\"loginUser\"\n\t\t\t[permission]=\"permission\"\n\t\t\t[apiUrl]=\"apiUrl\">\n\t\t</app-defect-details>\n\t</div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-edit/defect-edit.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-edit/defect-edit.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\" *ngIf=\"isPageLoaded\">\n\t<form [formGroup]=\"editDefectForm\" (ngSubmit)=\"onSubmit()\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t<h4 class=\"card-title\">{{'defects.title2' | translate }} - #{{ defect.generated_id }}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\">\n\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-bug\"></i>  -->\n\t\t\t\t\t\t\t\t\t{{'defects.headings.head1' | translate }}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"defect_name\">{{'defects.create.fields.defect_name' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"defect_name\" id=\"defect_name\" placeholder=\"{{'defects.create.placeholders.placeholder1' | translate }}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.defect_name.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && defectControl.defect_name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"defectControl.defect_name.errors.required\">{{'defects.create.error_messages.message1' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"defectControl.defect_name.errors.maxlength\">{{'defects.create.error_messages.message2' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.start_date.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"start_date\">{{'defects.create.fields.start_date' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" [minDate]=\"projectStartDate\" (onHidden)=\"startDateChange()\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'defects.create.placeholders.placeholder8' | translate }}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && defectControl.start_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"defectControl.start_date.errors\">{{'defects.create.error_messages.message11' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.end_date.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"end-date\">{{'defects.create.fields.end_date' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp2=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" [minDate]=\"editDefectForm.get('start_date').value\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'defects.create.placeholders.placeholder9' | translate }}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && defectControl.end_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"defectControl.end_date.errors\">{{'defects.create.error_messages.message12' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.defect_type.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"defect_type\">{{'defects.create.fields.defect_type' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"('defects.defect_types' | translate)\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"type\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"defect_type\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'defects.create.placeholders.placeholder2' | translate }}\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && defectControl.defect_type.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"defectControl.defect_type.errors.required\">{{'defects.create.error_messages.message3' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.severity.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"severity\">{{'defects.create.fields.severity' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"('defects.severities' | translate)\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"severity\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"severity\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'defects.create.placeholders.placeholder4' | translate }}\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && defectControl.severity.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"defectControl.severity.errors.required\">{{'defects.create.error_messages.message6' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"assigned_group_id\">{{'defects.create.fields.assigned_group' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"teams\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"team_name\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"assigned_group_id\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"assigned_group_id\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'defects.create.placeholders.placeholder5' | translate }}\"\n\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"assignGroupChange($event)\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"assign_member\">{{'defects.create.fields.assigned_To' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"teamsMembers\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"assign_member\"\n\t\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"assign_member\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'common.unassigned' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"estimated_hours\">{{'defects.create.fields.estimate_hours' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type='text' class=\"form-control\" formControlName=\"estimated_hours\" placeholder=\"00:00\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.estimated_hours.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && defectControl.estimated_hours.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"defectControl.estimated_hours.errors.pattern\">{{'defects.create.error_messages.message13' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.status.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"status\">{{'defects.create.fields.status' | translate }}&nbsp;<span class=\"text-danger\">*</span> </label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"('defects.status' | translate)\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"status\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"status\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'defects.create.placeholders.placeholder3' | translate }}\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && defectControl.status.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"defectControl.status.errors.required\">{{'defects.create.error_messages.message5' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">&nbsp;</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<!-- <h4 class=\"form-section\"><i class=\"ft-zap\"></i> {{'defects.headings.head2' | translate }}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && defectControl.project_id.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"project_id\">{{'defects.create.fields.project_name' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"projects\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"projectChange($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"project_name\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"project_id\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"project_id\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'defects.create.placeholders.placeholder6' | translate }}\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && defectControl.project_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"defectControl.project_id.errors.required\">{{'defects.create.error_messages.message8' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"project_version\">{{'defects.create.fields.project_version' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"projectVersion\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"project_version\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'defects.create.placeholders.placeholder7' | translate }}\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">{{item}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-upload\"></i> {{'defects.headings.head3' | translate }}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>{{'defects.create.fields.choose_file' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"hidden\" formControlName=\"file\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropzone dz-clickable\" #logodropzone>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dz-default dz-message\" *ngIf=\"isLogoUploaded\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span><strong>{{'defects.create.error_messages.message10' | translate }}</strong></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dz-preview dz-image-preview\" *ngIf=\"isLogoLoaded && defect.attachment_hash\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dz-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/defect/{{defect.attachment_hash}}\" height=\"100\" width=\"100\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-sm btn-block\" (click)=\"removeDropzoneImage()\">{{ 'common.remove_file' | translate }}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\" *ngIf=\"customFields.length > 0\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-star\"></i>{{'defects.headings.head4' | translate }}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<app-show-custom-field-element [formArray]=\"'custom_field'\"\n\t\t\t\t\t\t\t\t\t\t\t[controls]=\"editDefectForm.get('custom_field')\"\n\t\t\t\t\t\t\t\t\t\t\t[customFields]=\"customFields\"\n\t\t\t\t\t\t\t\t\t\t\t[isFormSubmitted]=\"isFormSubmitted\"\n\t\t\t\t\t\t\t\t\t\t\t[formName]=\"editDefectForm\">\n\t\t\t\t\t\t\t\t\t\t</app-show-custom-field-element>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-message-square\"></i>{{'defects.headings.head5' | translate }}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"description\">{{'defects.create.fields.description' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<app-ngx-editor [config]=\"editorConfig\" formControlName=\"description\" id=\"description\"></app-ngx-editor>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 text-right\">\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/defects']\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate}}</a>\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.update' | translate}}</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-kanban/defect-kanban.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-kanban/defect-kanban.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card pl-2 pr-2 pb-2\">\n                <!-- Card header -->\n                <div class=\"card-header pl-0 pr-0\">\n                    <div class=\"col-sm-12 \">\n                        <div class=\"row\">\n                            <div class=\"col-sm-3 p-0\">\n                                <h4 class=\"main-title mt-2 text-left\"><span>{{'kanban_board.title1' | translate }}</span></h4>\n                            </div>\n                            <div class=\"col-sm-9 p-0\">\n                                <div class=\"card-buttons d-lg-flex float-lg-right\">\n                                    <div class=\"mr-md-1 mt-lg-0 mt-2\">\n                                        <ng-select [searchable]=\"true\" [items]=\"projects\" [selectOnTab]=\"true\" (change)=\"getDefects($event?.id, filter)\" bindLabel=\"project_name\" bindValue=\"id\" labelForId=\"projectId\" [(ngModel)]=\"projectId\" placeholder=\"{{'common.placeholders.placeholder1' | translate}}\">\n                                            <ng-template ng-option-tmp let-item=\"item\">\n                                                {{item.project_name}}\n                                            </ng-template>\n                                        </ng-select>\n                                    </div>\n                                    <div class=\"mr-1 mt-lg-0 mt-2 float-left\">\n                                        <div class=\"btn-group tab-filter\">\n                                            <label class=\"btn btn-secondary \" [(ngModel)]=\"filter\" (click)=\"getDefects(projectId, filter)\" btnRadio=\"all\" tabindex=\"0\" role=\"button\">{{'common.status.all' | translate}}</label>\n                                            <label class=\"btn btn-secondary\" [(ngModel)]=\"filter\" (click)=\"getDefects(projectId, filter)\" btnRadio=\"my\" tabindex=\"0\" role=\"button\">{{'common.status.my' | translate}}</label>\n                                        </div>\n                                    </div>\n                                    <div class=\"float-right mt-lg-0 mt-2\">\n                                        <a [routerLink]=\"['/defects']\" class=\"btn btn-create mb-0 mr-1\" tooltip=\"{{'common.switch_to_list' | translate}}\"><i class=\"fa fa-list\"></i><span>{{'common.list' | translate}}</span></a>\n                                        <a [routerLink]=\"['/defects/create']\" class=\"btn btn-create mb-0\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'defects_create']\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- Card body -->\n                <div class=\"card-body\">\n                    <div class=\"row mb-4 taskboard\">\n                        <div class=\"col-md-3 col-lg-3 col-xl-3 col-12\">\n                            <h4 class=\"ml-2 mt-2 text-bold-500\"><i class=\"ft-list mr-1\"></i>&nbsp;{{'common.status.open' | translate}}</h4>\n                            <p class=\"ml-2 small\"><i class=\"fa fa-hand-o-up\"></i>&nbsp;{{'kanban_board.budges.budges1' | translate }}</p>\n                            <div class=\"drag-container\">\n                                <div cdkDropList #openLists=\"cdkDropList\" [cdkDropListData]=\"openDefects\" [cdkDropListConnectedTo]=\"[assignedList, inprogressLists, completedLists]\" class=\"item-list\" (cdkDropListDropped)=\"drop($event)\">\n                                    <ul class=\"pl-0 open\">\n                                        <li class=\"card\" *ngFor=\"let defect of openDefects | orderBy: 'orders'\" cdkDrag>\n                                            <div class=\"card-box\">\n                                                <div class=\"row\">\n                                                    <h6 class=\"col-12 card-text\">\n                                                        <a [routerLink]=\"['/defects/detail', defect.id]\" tooltip=\"{{'common.view' | translate}}\" class=\"text-info\">{{defect.generated_id}}</a>\n                                                        <ng-container *ngFor=\"let severity of ('defects.severities' | translate)\">\n                                                            <div class=\"budges-status d-inline\">\n                                                                <span *ngIf=\"severity.id == defect.severity\" class=\"{{severity.class}} pull-right\">{{severity.label | strToFirstLetter}}</span>\n                                                            </div>\n                                                        </ng-container>\n                                                        <br>{{defect.defect_name}}\n                                                    </h6>\n                                                </div>\n                                                <div class=\"row mt-2\">\n                                                    <div class=\"col-12\">\n                                                        <div class=\"taskboard-foot d-flex justify-content-between\">\n                                                            <div class=\"taskboard-date\">\n                                                                <i class=\"fa fa-calendar-o\"></i>&nbsp;{{defect.created_at | dateTimeFormatFilter: loginUser.settings.date_format}}\n                                                            </div>\n                                                            <div class=\"people-lists\">\n                                                                <ng-container *ngIf=\"defect.assign_member == 'Unassign' || defect.assign_member == '' || defect.assign_member == null else elseBlock;\">\n                                                                    <a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n                                                                        <img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                                    </a>\n                                                                </ng-container>\n                                                                <ng-template #elseBlock>\n                                                                    <a [routerLink]=\"['/users/profile', defect.assign_user.id]\" class=\"btn rounded-circle text-dark btn-profile-danger\" placement=\"top\" tooltip=\"{{defect.assign_user.firstname}} {{defect.assign_user.lastname}}\">\n                                                                        <img *ngIf=\"defect.assign_user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{defect.assign_user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                                        <img *ngIf=\"!defect.assign_user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                                    </a>\n                                                                </ng-template>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3 col-lg-3 col-xl-3 col-12\">\n                            <h4 class=\"ml-2 mt-2 text-bold-500\"><i class=\"ft-user-check mr-1\"></i>&nbsp;{{'common.status.assigned' | translate}}</h4>\n                            <p class=\"ml-2 small\"><i class=\"fa fa-hand-o-up\"></i>&nbsp;{{'kanban_board.budges.budges1' | translate }}</p>\n                            <div class=\"drag-container\">\n                                <div cdkDropList #assignedList=\"cdkDropList\" [cdkDropListData]=\"assignedDefects\" [cdkDropListConnectedTo]=\"[openLists, inprogressLists, completedLists]\" class=\"item-list\" (cdkDropListDropped)=\"drop($event)\">\n                                    <ul class=\"pl-0 assigned\">\n                                        <li class=\"card\" *ngFor=\"let defect of assignedDefects | orderBy: 'orders'\" cdkDrag>\n                                            <div class=\"card-box\">\n                                                <div class=\"row\">\n                                                    <h6 class=\"col-12 card-text\">\n                                                        <a [routerLink]=\"['/defects/detail', defect.id]\" tooltip=\"{{'common.view' | translate}}\" class=\"text-info\">{{defect.generated_id}}</a>\n                                                        <ng-container *ngFor=\"let severity of ('defects.severities' | translate)\">\n                                                            <div class=\"budges-status d-inline\">\n                                                                <span *ngIf=\"severity.id == defect.severity\" class=\"{{severity.class}} pull-right\">{{severity.label | strToFirstLetter}}</span>\n                                                            </div>\n                                                        </ng-container>\n                                                        <br>{{defect.defect_name}}\n                                                    </h6>\n                                                </div>\n                                                <div class=\"row mt-2\">\n                                                    <div class=\"col-12\">\n                                                        <div class=\"taskboard-foot d-flex justify-content-between\">\n                                                            <div class=\"taskboard-date\">\n                                                                <i class=\"fa fa-calendar-o\"></i>&nbsp;{{defect.created_at | dateTimeFormatFilter: loginUser.settings.date_format}}\n                                                            </div>\n                                                            <div class=\"people-lists\">\n                                                                <ng-container *ngIf=\"defect.assign_member == 'Unassign' || defect.assign_member == '' || defect.assign_member == null else elseBlock1;\">\n                                                                    <a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n                                                                        <img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                                    </a>\n                                                                </ng-container>\n                                                                <ng-template #elseBlock1>\n                                                                    <a [routerLink]=\"['/users/profile', defect.assign_user.id]\" class=\"btn rounded-circle text-dark btn-profile-danger\" placement=\"top\" tooltip=\"{{defect.assign_user.firstname}} {{defect.assign_user.lastname}}\">\n                                                                        <img *ngIf=\"defect.assign_user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{defect.assign_user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                                        <img *ngIf=\"!defect.assign_user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                                    </a>\n                                                                </ng-template>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3 col-lg-3 col-xl-3 col-12\">\n                            <h4 class=\"ml-2 mt-2 text-bold-500\"><i class=\"ft-trending-up mr-1\"></i>&nbsp;{{'common.status.in_progress' | translate}}</h4>\n                            <p class=\"ml-2 small\"><i class=\"fa fa-hand-o-up\"></i>&nbsp;{{'kanban_board.budges.budges1' | translate }}</p>\n                            <div class=\"drag-container\">\n                                <div cdkDropList #inprogressLists=\"cdkDropList\" [cdkDropListData]=\"inprogressDefects\" [cdkDropListConnectedTo]=\"[assignedList, openLists, completedLists]\" class=\"item-list\" (cdkDropListDropped)=\"drop($event)\">\n                                    <ul class=\"pl-0 in-progress\">\n                                        <li class=\"card\" *ngFor=\"let defect of inprogressDefects | orderBy: 'orders'\" cdkDrag>\n                                            <div class=\"card-box\">\n                                                <div class=\"row\">\n                                                    <h6 class=\"col-12 card-text\">\n                                                        <a [routerLink]=\"['/defects/detail', defect.id]\" tooltip=\"{{'common.view' | translate}}\" class=\"text-info\">{{defect.generated_id}}</a>\n                                                        <ng-container *ngFor=\"let severity of ('defects.severities' | translate)\">\n                                                            <div class=\"budges-status d-inline\">\n                                                                <span *ngIf=\"severity.id == defect.severity\" class=\"{{severity.class}} pull-right\">{{severity.label | strToFirstLetter}}</span>\n                                                            </div>\n                                                        </ng-container>\n                                                        <br>{{defect.defect_name}}\n                                                    </h6>\n                                                </div>\n                                                <div class=\"row mt-2\">\n                                                    <div class=\"col-12\">\n                                                        <div class=\"taskboard-foot d-flex justify-content-between\">\n                                                            <div class=\"taskboard-date\">\n                                                                <i class=\"fa fa-calendar-o\"></i>&nbsp;{{defect.created_at | dateTimeFormatFilter: loginUser.settings.date_format}}\n                                                            </div>\n                                                            <div class=\"people-lists\">\n                                                                <ng-container *ngIf=\"defect.assign_member == 'Unassign' || defect.assign_member == '' || defect.assign_member == null else elseBlock2;\">\n                                                                    <a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n                                                                        <img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                                    </a>\n                                                                </ng-container>\n                                                                <ng-template #elseBlock2>\n                                                                    <a [routerLink]=\"['/users/profile', defect.assign_user.id]\" class=\"btn rounded-circle text-dark btn-profile-danger\" placement=\"top\" tooltip=\"{{defect.assign_user.firstname}} {{defect.assign_user.lastname}}\">\n                                                                        <img *ngIf=\"defect.assign_user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{defect.assign_user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                                        <img *ngIf=\"!defect.assign_user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                                    </a>\n                                                                </ng-template>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3 col-lg-3 col-xl-3 col-12\">\n                            <h4 class=\"ml-2 mt-2 text-bold-500\"><i class=\"ft-thumbs-up mr-1\"></i>&nbsp;{{'common.status.completed' | translate}}</h4>\n                            <p class=\"ml-2 small\"><i class=\"fa fa-hand-o-up\"></i>&nbsp;{{'kanban_board.budges.budges1' | translate }}</p>\n                            <div class=\"drag-container\">\n                                <div cdkDropList #completedLists=\"cdkDropList\" [cdkDropListData]=\"completedDefects\" [cdkDropListConnectedTo]=\"[assignedList, openLists, inprogressLists]\" class=\"item-list\" (cdkDropListDropped)=\"drop($event)\">\n                                    <ul class=\"pl-0 completed\">\n                                        <li class=\"card\" *ngFor=\"let defect of completedDefects | orderBy: 'orders'\" cdkDrag>\n                                            <div class=\"card-box\">\n                                                <div class=\"row\">\n                                                    <h6 class=\"col-12 card-text\">\n                                                        <a [routerLink]=\"['/defects/detail', defect.id]\" tooltip=\"{{'common.view' | translate}}\" class=\"text-info\">{{defect.generated_id}}</a>\n                                                        <ng-container *ngFor=\"let severity of ('defects.severities' | translate)\">\n                                                            <div class=\"budges-status d-inline\">\n                                                                <span *ngIf=\"severity.id == defect.severity\" class=\"{{severity.class}} pull-right\">{{severity.label | strToFirstLetter}}</span>\n                                                            </div>\n                                                        </ng-container>\n                                                        <br>{{defect.defect_name}}\n                                                    </h6>\n                                                </div>\n                                                <div class=\"row mt-2\">\n                                                    <div class=\"col-12\">\n                                                        <div class=\"taskboard-foot d-flex justify-content-between\">\n                                                            <div class=\"taskboard-date\">\n                                                                <i class=\"fa fa-calendar-o\"></i>&nbsp;{{defect.created_at | dateTimeFormatFilter: loginUser.settings.date_format}}\n                                                            </div>\n                                                            <div class=\"people-lists\">\n                                                                <ng-container *ngIf=\"defect.assign_member == 'Unassign' || defect.assign_member == '' || defect.assign_member == null else elseBlock3;\">\n                                                                    <a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n                                                                        <img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                                    </a>\n                                                                </ng-container>\n                                                                <ng-template #elseBlock3>\n                                                                    <a [routerLink]=\"['/users/profile', defect.assign_user.id]\" class=\"btn rounded-circle text-dark btn-profile-danger\" placement=\"top\" tooltip=\"{{defect.assign_user.firstname}} {{defect.assign_user.lastname}}\">\n                                                                        <img *ngIf=\"defect.assign_user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{defect.assign_user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                                        <img *ngIf=\"!defect.assign_user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                                    </a>\n                                                                </ng-template>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-list/defect-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-list/defect-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card pl-2 pr-2 pb-2\">\n                <!-- Card header -->\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\n                    <h4 class=\"main-title mt-2\"><span>{{'defects.title' | translate}}</span></h4>\n                    <div class=\"card-buttons\">\n                        <!-- <a [routerLink]=\"['/defects/kanban']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.switch_to_kanban' | translate}}\"><i class=\"fa fa-trello\"></i><span>{{'common.kanban' | translate}}</span></a> -->\n                        <a [routerLink]=\"['/project_bidding/create']\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'defects_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n                    </div>\n                </div>\n                <!-- Card content -->\n                <div class=\"card-content pt-3\">\n                    <!-- Card body -->\n                    <div class=\"card-body\">\n                        <!-- Filter buttons -->\n                        <div class=\"d-flex flex-column flex-lg-row d-lg-inline-flex mb-3\" *ngIf=\"isPageLoaded\">\n                            <div class=\" pr-0\">\n                                <div class=\"btn-group mr-2 mb-2\">\n                                    <label class=\"btn btn-secondary btn-toggle m-0\" [(ngModel)]=\"defectFilterKey\" (click)=\"filterByStatus(statusfilterId, defectFilterKey)\" btnRadio=\"all\" tabindex=\"0\" role=\"button\">{{'common.status.all' | translate}}</label>\n                                    <label class=\"btn btn-secondary btn-toggle m-0\" [(ngModel)]=\"defectFilterKey\" (click)=\"filterByStatus(statusfilterId, defectFilterKey)\" btnRadio=\"selected\" tabindex=\"0\" role=\"button\">{{'common.status.my' | translate}}</label>\n                                </div>\n                            </div>\n                            <div class=\"pl-lg-0 btn-filters\">\n                                <button type=\"button\" class=\"btn btn-raised open\" [ngClass]=\"{ 'active': statusfilterId == 4 }\" (click)=\"filterByStatus(4, defectFilterKey)\">\n                                    <p>{{'common.status.open' | translate}}</p>\n                                    <span class=\"badge badge-light\">\n                                        <ng-container *ngIf=\"countStatus.open || countStatus.re_open; else elseCondition2;\">{{countStatus.open + countStatus.re_open}}</ng-container>\n                                        <ng-template #elseCondition2>0</ng-template>\n                                    </span>\n                                </button>\n                                <button type=\"button\" class=\"btn btn-raised assigned\" [ngClass]=\"{ 'active': statusfilterId == 1 }\" (click)=\"filterByStatus(1, defectFilterKey)\">\n                                    <p>{{'common.status.assigned' | translate}}</p>\n                                    <span class=\"badge badge-light\">\n                                        <ng-container *ngIf=\"countStatus.assigned; else elseCondition3;\">{{countStatus.assigned}}</ng-container>\n                                        <ng-template #elseCondition3>0</ng-template>\n                                    </span>\n                                </button>\n                                <button type=\"button\" class=\"btn btn-raised in_progress\" [ngClass]=\"{ 'active': statusfilterId == 3 }\" (click)=\"filterByStatus(3, defectFilterKey)\">\n                                    <p>{{'common.status.in_progress' | translate}}</p>\n                                    <span class=\"badge badge-light\">\n                                        <ng-container *ngIf=\"countStatus.in_progress; else elseCondition4;\">{{countStatus.in_progress}}</ng-container>\n                                        <ng-template #elseCondition4>0</ng-template>\n                                    </span>\n                                </button>\n                                <button type=\"button\" class=\"btn btn-raised solved\" [ngClass]=\"{ 'active': statusfilterId == 5 }\" (click)=\"filterByStatus(5, defectFilterKey)\">\n                                    <p>{{'common.status.solved' | translate}}</p>\n                                    <span class=\"badge badge-light\">\n                                        <ng-container *ngIf=\"countStatus.solved || countStatus.deferred || countStatus.closed; else elseCondition5;\">{{countStatus.solved + countStatus.deferred + countStatus.closed}}</ng-container>\n                                        <ng-template #elseCondition5>0</ng-template>\n                                    </span>\n                                </button>\n                                <button type=\"button\" class=\"btn btn-raised overdue\" [ngClass]=\"{ 'active': statusfilterId == 8 }\" (click)=\"filterByStatus(8, defectFilterKey)\">\n                                    <p>{{'common.status.overdue' | translate}}</p>\n                                    <span class=\"badge badge-light\">\n                                        <ng-container *ngIf=\"countStatus.overdue; else elseCondition8;\">{{countStatus.overdue}}</ng-container>\n                                        <ng-template #elseCondition8>0</ng-template>\n                                    </span>\n                                </button>\n                                <!-- <button type=\"button\" class=\"btn btn-raised btn-secondary\" [ngClass]=\"{ 'active': statusfilterId == 0 }\" [routerLink]=\"['/defects', 0, defectFilterKey]\">\n                                    <p>{{'common.status.total' | translate}}</p>\n                                    <span class=\"badge badge-light\">\n                                        <ng-container *ngIf=\"countStatus.all; else elseCondition1;\">{{countStatus.all}}</ng-container>\n                                        <ng-template #elseCondition1>0</ng-template>\n                                    </span>\n                                </button> -->\n                            </div>\n                        </div>\n                        <!-- Defect list datatable -->\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl overflow-x-auto\">\n                                    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"defects_table\">\n                                        <thead>\n                                            <tr>\n                                                <th>{{'defects.columns.id' | translate}}</th>\n                                                <th>{{'defects.columns.defect_name' | translate}}</th>\n                                                <th>{{'defects.columns.start_date' | translate}}</th>\n                                                <th>{{'defects.columns.end_date' | translate}}</th>\n                                                <!-- <th>{{'defects.columns.actual_hours' | translate}}</th> -->\n                                                <th>{{'defects.columns.assigned' | translate}}</th>\n                                                <!-- <th>{{'defects.columns.severity' | translate}}</th> -->\n                                                <th>{{'defects.columns.status' | translate}}</th>\n                                                <th>{{'defects.columns.actions' | translate}}</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody *ngIf=\"defects?.length != 0\">\n                                            <tr *ngFor=\"let defect of defects; index as i\">\n                                                <td>\n                                                    <a [routerLink]=\"['/project_bidding/detail', defect.id]\" tooltip=\"{{'common.view' | translate}}\">{{defect.generated_id}}</a>\n                                                </td>\n                                                <td>\n                                                    <ng-container *ngIf=\"getCheckPermission(defect, 'edit'); else elseBlock\">\n                                                        <inline-edit-input [name]=\"'defect_name'\" [type]=\"'text'\" [elementFor]=\"'defects.inline_edit.defect_name' | translate\" [fieldValue]=\"defect.defect_name\" [isRequired]=\"'true'\" (updateValue)=\"saveDefectDetail(i, 'defect_name', $event);\"></inline-edit-input>\n                                                    </ng-container>\n                                                    <ng-template #elseBlock>{{defect.defect_name}}</ng-template>\n                                                </td>\n                                                <td>{{defect.start_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\n                                                <td>{{defect.end_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\n                                                <!-- <td>{{defect.actual_hours}}</td> -->\n                                                <td class=\"people-lists\">\n                                                    <ng-container *ngIf=\"defect.assign_member == 'Unassign' || defect.assign_member == '' || defect.assign_member == null; else elseBlock2;\">\n                                                        <a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n                                                            <img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                        </a>\n                                                    </ng-container>\n                                                    <ng-template #elseBlock2>\n                                                        <a [routerLink]=\"['/users/profile', defect.assign_member]\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{defect.assigned_firstname}} {{defect.assigned_lastname}}\">\n                                                            <img *ngIf=\"defect.assigned_avatar\" src=\"{{apiUrl}}/uploads/profile/{{defect.assigned_avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                            <img *ngIf=\"!defect.assigned_avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                        </a>\n                                                    </ng-template>\n                                                </td>\n                                                <!-- <td class=\"budges-status\">\n                                                    <ng-container *ngFor=\"let severity of ('defects.severities' | translate)\">\n                                                        <span class=\"{{severity.class}}\" *ngIf=\"severity.id == defect.severity\">{{severity.label}}</span>\n                                                    </ng-container>\n                                                </td> -->\n                                                <td class=\"status-dropdown\">\n                                                    <div class=\"overdue-td\">\n                                                        <ng-container *ngIf=\"getCheckPermission(defect, 'edit'); else elseBlock3\">\n                                                            <div class=\"btn-group\" dropdown>\n                                                                <button dropdownToggle id=\"button-basic\" type=\"button\" class=\"btn dropdown-toggle select-btn-lg\" aria-controls=\"dropdown-basic\">{{getTranslateStatus(defect.status) | translate}}&nbsp;<span class=\"caret\"></span></button>\n                                                                <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic\">\n                                                                    <li role=\"menuitem\" *ngFor=\"let status of ('defects.status' | translate)\"><a class=\"dropdown-item btn btn-sm {{status.class}}\" [ngClass]=\"{'active': defect.status == status.id}\" (click)=\"changeDefectStatus([defect.id], status);defect.status = status.id\">{{status.label}}</a></li>\n                                                                </ul>\n                                                            </div>\n                                                        </ng-container>\n                                                        <ng-template #elseBlock3>\n                                                            <ng-container *ngFor=\"let status of ('defects.status' | translate)\">\n                                                                <div class=\"budges-status\">\n                                                                    <span class=\"{{status.class}}\" *ngIf=\"status.id == defect.status\">{{status.label}}</span>\n                                                                </div>\n                                                            </ng-container>\n                                                        </ng-template>\n                                                        <ng-container *ngIf=\"defect.is_overdue\">\n                                                            <i class=\"fa fa-clock-o overdue-icon\" aria-hidden=\"true\" tooltip=\"{{'common.overdue' | translate}} : {{defect.is_overdue}} {{'common.days' | translate}}\"></i>\n                                                        </ng-container>\n                                                    </div>\n                                                </td>\n                                                <td class=\"actions-dropdown\">\n                                                    <div class=\"btn-group\" dropdown>\n                                                        <button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n                                                        <ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n                                                            <li role=\"menuitem\" >\n                                                                <a [routerLink]=\"['/project_bidding/edit', defect.id]\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n                                                            </li>\n                                                            <li role=\"menuitem\" >\n                                                                <a (click)=\"deleteDefect(defect.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n                                                            </li>\n                                                        </ul>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                        <tfoot *ngIf=\"defects?.length == 0\" class=\"tfoot_dt\">\n                                            <tr>\n                                                <td colspan=\"7\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n                                            </tr>\n                                        </tfoot>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n");

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

/***/ "./src/app/core/services/defect-attachment.service.ts":
/*!************************************************************!*\
  !*** ./src/app/core/services/defect-attachment.service.ts ***!
  \************************************************************/
/*! exports provided: DefectAttachmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectAttachmentService", function() { return DefectAttachmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var DefectAttachmentService = /** @class */ (function () {
    function DefectAttachmentService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    DefectAttachmentService.prototype.getAllAttachmentById = function (defectId) {
        return this.http.get(this.apiUrl + "/api/defect-attachment/" + defectId);
    };
    DefectAttachmentService.prototype.create = function (defectAttachment) {
        return this.http.post(this.apiUrl + "/api/defect-attachment", defectAttachment);
    };
    DefectAttachmentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/defect-attachment/" + id);
    };
    DefectAttachmentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DefectAttachmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DefectAttachmentService);
    return DefectAttachmentService;
}());



/***/ }),

/***/ "./src/app/core/services/defect-comments.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/defect-comments.service.ts ***!
  \**********************************************************/
/*! exports provided: DefectCommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectCommentsService", function() { return DefectCommentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var DefectCommentsService = /** @class */ (function () {
    function DefectCommentsService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    DefectCommentsService.prototype.create = function (defectComment) {
        return this.http.post(this.apiUrl + "/api/defect-comment", defectComment);
    };
    DefectCommentsService.prototype.update = function (defectComment) {
        return this.http.put(this.apiUrl + "/api/defect-comment/" + defectComment.id, defectComment);
    };
    DefectCommentsService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/defect-comment/" + id);
    };
    DefectCommentsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DefectCommentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DefectCommentsService);
    return DefectCommentsService;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/components/create-attachment-modal/create-attachment-modal.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/create-attachment-modal/create-attachment-modal.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9jb21wb25lbnRzL2NyZWF0ZS1hdHRhY2htZW50LW1vZGFsL2NyZWF0ZS1hdHRhY2htZW50LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pm/defects/components/create-attachment-modal/create-attachment-modal.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/create-attachment-modal/create-attachment-modal.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: CreateAttachmentModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAttachmentModalComponent", function() { return CreateAttachmentModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_defect_attachment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../core/services/defect-attachment.service */ "./src/app/core/services/defect-attachment.service.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_8__);









var CreateAttachmentModalComponent = /** @class */ (function () {
    function CreateAttachmentModalComponent(translate, bsCreateAttachmentModalRef, formBuilder, toastr, defectAttachmentService) {
        this.translate = translate;
        this.bsCreateAttachmentModalRef = bsCreateAttachmentModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.defectAttachmentService = defectAttachmentService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isfileUploded = false;
        this.isfileLoaded = true;
    }
    CreateAttachmentModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
    };
    CreateAttachmentModalComponent.prototype.loadForms = function () {
        var _this_1 = this;
        this.createAttachmentForm = this.formBuilder.group({
            defect_id: [this.defectId],
            file_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            file_extension: [this.fileName],
            file_description: ['']
        });
        setTimeout(function () {
            _this_1.loadDropzone();
        });
    };
    Object.defineProperty(CreateAttachmentModalComponent.prototype, "attachment", {
        get: function () {
            return this.createAttachmentForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateAttachmentModalComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_8__(this.pdfdropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_8__["createElement"]("<button class=\'btn btn-sm btn-block\'>" + that.translate.instant('common.remove_file') + "</button>");
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        that.fileName = file.name;
                        if (that.fileName) {
                            that.fileName = that.fileName.split('.').pop();
                        }
                        reader_1.onload = function (e) {
                            that.createAttachmentForm.patchValue({ file: reader_1.result });
                            that.createAttachmentForm.patchValue({ file_extension: that.fileName });
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.createAttachmentForm.patchValue({ file: null });
                    that.createAttachmentForm.patchValue({ file_extension: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    CreateAttachmentModalComponent.prototype.removeDropzoneImage = function () {
        this.isfileUploded = true;
        this.isfileLoaded = false;
    };
    CreateAttachmentModalComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.createAttachmentForm.invalid) {
            return;
        }
        this.defectAttachmentService.create(this.createAttachmentForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('attachments.messages.create'), _this_1.translate.instant('attachments.title'));
            _this_1.event.emit({ data: data });
            _this_1.onCancel();
        });
    };
    CreateAttachmentModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateAttachmentModalRef.hide();
    };
    CreateAttachmentModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_defect_attachment_service__WEBPACK_IMPORTED_MODULE_7__["DefectAttachmentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pdfdropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateAttachmentModalComponent.prototype, "pdfdropzone", void 0);
    CreateAttachmentModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-attachment-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-attachment-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/create-attachment-modal/create-attachment-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-attachment-modal.component.scss */ "./src/app/modules/pm/defects/components/create-attachment-modal/create-attachment-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_defect_attachment_service__WEBPACK_IMPORTED_MODULE_7__["DefectAttachmentService"]])
    ], CreateAttachmentModalComponent);
    return CreateAttachmentModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/components/defect-activities/defect-activities.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/defect-activities/defect-activities.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9jb21wb25lbnRzL2RlZmVjdC1hY3Rpdml0aWVzL2RlZmVjdC1hY3Rpdml0aWVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pm/defects/components/defect-activities/defect-activities.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/defect-activities/defect-activities.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DefectActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectActivitiesComponent", function() { return DefectActivitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DefectActivitiesComponent = /** @class */ (function () {
    function DefectActivitiesComponent() {
        this.scrollConfig = {};
    }
    DefectActivitiesComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectActivitiesComponent.prototype, "defect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectActivitiesComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectActivitiesComponent.prototype, "apiUrl", void 0);
    DefectActivitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-activities',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-activities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-activities/defect-activities.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-activities.component.scss */ "./src/app/modules/pm/defects/components/defect-activities/defect-activities.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DefectActivitiesComponent);
    return DefectActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/components/defect-attachment/defect-attachment.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/defect-attachment/defect-attachment.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9jb21wb25lbnRzL2RlZmVjdC1hdHRhY2htZW50L2RlZmVjdC1hdHRhY2htZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pm/defects/components/defect-attachment/defect-attachment.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/defect-attachment/defect-attachment.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DefectAttachmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectAttachmentComponent", function() { return DefectAttachmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_defect_attachment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/defect-attachment.service */ "./src/app/core/services/defect-attachment.service.ts");
/* harmony import */ var _components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/create-attachment-modal/create-attachment-modal.component */ "./src/app/modules/pm/defects/components/create-attachment-modal/create-attachment-modal.component.ts");









var DefectAttachmentComponent = /** @class */ (function () {
    function DefectAttachmentComponent(translate, toastr, modalService, route, defectAttachmentService) {
        this.translate = translate;
        this.toastr = toastr;
        this.modalService = modalService;
        this.route = route;
        this.defectAttachmentService = defectAttachmentService;
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered animated fadeIn",
            initialState: {
                defectId: this.route.snapshot.params.id,
            }
        };
        this.getAllAttachments(this.route.snapshot.params.id);
    }
    DefectAttachmentComponent.prototype.ngOnInit = function () { };
    DefectAttachmentComponent.prototype.getAllAttachments = function (defectId, isLoad) {
        var _this = this;
        if (isLoad === void 0) { isLoad = true; }
        this.defectAttachmentService.getAllAttachmentById(defectId).subscribe(function (data) {
            _this.attachments = data;
            _this.getFiles();
        });
    };
    DefectAttachmentComponent.prototype.getFiles = function () {
        for (var iRow in this.attachments) {
            switch (this.attachments[iRow].file_extension) {
                case 'txt':
                    this.attachments[iRow].icon = 'fa fa-file-text';
                    break;
                case 'mp3':
                case 'wav':
                case 'raw':
                case 'tta':
                    this.attachments[iRow].icon = 'fa fa-music';
                    break;
                case 'webm':
                case 'flv':
                case 'ogg':
                case 'mov':
                case 'mp4':
                case 'm4p':
                case 'mpeg':
                case 'f4v':
                case '3gp':
                    this.attachments[iRow].icon = 'fa fa-film';
                    break;
                case 'pdf':
                    this.attachments[iRow].icon = 'fa fa-file-pdf-o';
                    break;
                case 'jpeg':
                case 'jpg':
                case 'png':
                case 'gif':
                case 'bmp':
                case 'svg':
                    this.attachments[iRow].isImageFile = true;
                    break;
                default:
                    this.attachments[iRow].isImageFile = false;
                    this.attachments[iRow].icon = 'fa fa-file';
                    break;
            }
        }
    };
    DefectAttachmentComponent.prototype.openAttachmentCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_8__["CreateAttachmentModalComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getAllAttachments(_this.defect.id, false);
        });
    };
    DefectAttachmentComponent.prototype.attachmentDelete = function (attachmentId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.defectAttachmentService.delete(attachmentId).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('attachments.messages.delete'), _this.translate.instant('defects.title'));
                    _this.getAllAttachments(_this.defect.id, false);
                });
            }
        });
    };
    DefectAttachmentComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_services_defect_attachment_service__WEBPACK_IMPORTED_MODULE_7__["DefectAttachmentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectAttachmentComponent.prototype, "defect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectAttachmentComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectAttachmentComponent.prototype, "permission", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectAttachmentComponent.prototype, "apiUrl", void 0);
    DefectAttachmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-attachment',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-attachment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-attachment/defect-attachment.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-attachment.component.scss */ "./src/app/modules/pm/defects/components/defect-attachment/defect-attachment.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_defect_attachment_service__WEBPACK_IMPORTED_MODULE_7__["DefectAttachmentService"]])
    ], DefectAttachmentComponent);
    return DefectAttachmentComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/components/defect-comments/defect-comments.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/defect-comments/defect-comments.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9jb21wb25lbnRzL2RlZmVjdC1jb21tZW50cy9kZWZlY3QtY29tbWVudHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/defects/components/defect-comments/defect-comments.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/defect-comments/defect-comments.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DefectCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectCommentsComponent", function() { return DefectCommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_defect_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/defect.service */ "./src/app/core/services/defect.service.ts");
/* harmony import */ var _core_services_defect_comments_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/defect-comments.service */ "./src/app/core/services/defect-comments.service.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_9__);











var DefectCommentsComponent = /** @class */ (function () {
    function DefectCommentsComponent(translate, router, route, formBuilder, toastr, defectCommentsService, defectService) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.defectCommentsService = defectCommentsService;
        this.defectService = defectService;
        this.isPageLoaded = false;
        this.isCommentFormSubmitted = false;
        this.isReplayFormSubmitted = false;
        this.parentChild = [];
        this.selectedFiles = [];
        this.defectId = this.route.snapshot.params.id;
        this.customClass = 'comment-collapse';
        this.oneAtATime = true;
    }
    DefectCommentsComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.loadForms();
        this.getComment(this.defectId);
        this.loadReplyForm();
        setTimeout(function () {
            _this_1.loadDropzone();
        });
    };
    DefectCommentsComponent.prototype.loadForms = function () {
        var that = this;
        this.defectCommentsForm = this.formBuilder.group({
            defect_id: [this.defectId],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            files: [null]
        });
    };
    DefectCommentsComponent.prototype.loadReplyForm = function () {
        this.defectCommentsReplyForm = this.formBuilder.group({
            defect_id: [this.defectId],
            replay_comment: [''],
            parent_id: [null],
        });
    };
    Object.defineProperty(DefectCommentsComponent.prototype, "commentControl", {
        get: function () { return this.defectCommentsForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefectCommentsComponent.prototype, "replyCommentControl", {
        get: function () {
            return this.defectCommentsReplyForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    DefectCommentsComponent.prototype.loadDropzone = function () {
        var that = this;
        this.dropzoneObj = new dropzone__WEBPACK_IMPORTED_MODULE_9__(this.commentdropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 5,
            clickable: true,
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_9__["createElement"]("<button class=\'btn btn-sm btn-block\'>" + that.translate.instant('common.remove_file') + "</button>");
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        that.fileDetails = file;
                        reader_1.onload = function (e) {
                            var thisFile = {
                                uuid: that.fileDetails.upload.uuid,
                                name: file.name,
                                extension: file.name.split('.').pop(),
                                size: file.size,
                                file: reader_1.result
                            };
                            that.selectedFiles.push(thisFile);
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.fileDetails = file;
                    that.selectedFiles.forEach(function (value, index) {
                        if (value.uuid == that.fileDetails.upload.uuid) {
                            that.selectedFiles.splice(index, 1);
                        }
                    });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    DefectCommentsComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isCommentFormSubmitted = true;
        if (this.defectCommentsForm.invalid) {
            return;
        }
        this.defectCommentsForm.patchValue({ files: this.selectedFiles });
        this.defectCommentsService.create(this.defectCommentsForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('comments.messages.create'), _this_1.translate.instant('comments.title'));
            _this_1.dropzoneObj.removeAllFiles();
            _this_1.getComment(_this_1.defectId);
            _this_1.commentFormReset();
            _this_1.loadForms();
        });
    };
    DefectCommentsComponent.prototype.replyFormReset = function () {
        this.defectCommentsReplyForm.patchValue({ replay_comment: '' });
        this.defectCommentsReplyForm.patchValue({ files: '' });
        this.defectCommentsReplyForm.patchValue({ attachments: '' });
    };
    DefectCommentsComponent.prototype.commentFormReset = function () {
        this.isCommentFormSubmitted = false;
        this.commentControl.comment.reset();
        this.defectCommentsForm.patchValue({ attachments: null });
    };
    DefectCommentsComponent.prototype.showReplayCommentBox = function (id) {
        $('#comment_replay_' + id).removeClass('d-none');
    };
    DefectCommentsComponent.prototype.getComment = function (defectId) {
        var _this_1 = this;
        this.defectService.getById(defectId).subscribe(function (data) {
            _this_1.defectData = data;
            _this_1.defectData.comments = _this_1.getNestedChildren(_this_1.defectData.comments, 0);
            _this_1.comments = _this_1.defectData.comments;
        });
    };
    DefectCommentsComponent.prototype.getNestedChildren = function (comment, parent) {
        var parentChild = [];
        for (var i in comment) {
            if (comment[i].attachments && ($.type(comment[i].attachments) === "string")) {
                var jsonParse = JSON.parse(comment[i].attachments);
                comment[i].attachments = jsonParse;
            }
            if (comment[i].parent_id == parent) {
                var child = this.getNestedChildren(comment, comment[i].id);
                if (child.length) {
                    comment[i].child = child;
                }
                parentChild.push(comment[i]);
            }
        }
        return parentChild;
    };
    DefectCommentsComponent.prototype.postReplayComment = function (comment) {
        var _this_1 = this;
        if (this.defectCommentsReplyForm.value.replay_comment) {
            this.isReplayFormSubmitted = true;
            comment.parent_id = comment.id;
            comment.files = "";
            comment.comment = this.defectCommentsReplyForm.value.replay_comment;
            this.defectCommentsReplyForm.patchValue({ attachments: '' });
            var replyCommentValues = {
                comment: this.defectCommentsReplyForm.value.replay_comment,
                parent_id: comment.parent_id,
                defect_id: comment.defect_id,
                user: comment.user,
                user_id: comment.user_id,
                files: "",
                attachments: "",
                replay_comment: this.defectCommentsReplyForm.value.replay_comment
            };
            if (this.defectCommentsReplyForm.invalid) {
                return;
            }
            this.defectCommentsService.create(replyCommentValues)
                .subscribe(function (resp) {
                _this_1.toastr.success(_this_1.translate.instant('comments.messages.create'), _this_1.translate.instant('comments.title'));
                _this_1.getComment(_this_1.defectId);
                _this_1.replyFormReset();
                _this_1.loadForms();
            });
        }
        else {
            this.toastr.error(this.translate.instant('comments.create.error_messages.message4'), this.translate.instant('comments.title'));
            return false;
        }
    };
    DefectCommentsComponent.prototype.commentDelete = function (commentId) {
        var _this_1 = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this_1.defectCommentsService.delete(commentId)
                    .subscribe(function (data) {
                    _this_1.toastr.success(_this_1.translate.instant('comments.messages.delete'), _this_1.translate.instant('defects.title'));
                    _this_1.getComment(_this_1.defectId);
                });
            }
        });
    };
    DefectCommentsComponent.prototype.saveComments = function (comment, index, value) {
        var _this_1 = this;
        comment[index] = value;
        this.defectCommentsService.update(comment).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('comments.messages.update'), _this_1.translate.instant('defects.title'));
            _this_1.getComment(_this_1.defectId);
        });
    };
    DefectCommentsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_defect_comments_service__WEBPACK_IMPORTED_MODULE_8__["DefectCommentsService"] },
        { type: _core_services_defect_service__WEBPACK_IMPORTED_MODULE_7__["DefectService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectCommentsComponent.prototype, "permission", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectCommentsComponent.prototype, "apiUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectCommentsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commentdropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DefectCommentsComponent.prototype, "commentdropzone", void 0);
    DefectCommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-comments',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-comments/defect-comments.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-comments.component.scss */ "./src/app/modules/pm/defects/components/defect-comments/defect-comments.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_defect_comments_service__WEBPACK_IMPORTED_MODULE_8__["DefectCommentsService"],
            _core_services_defect_service__WEBPACK_IMPORTED_MODULE_7__["DefectService"]])
    ], DefectCommentsComponent);
    return DefectCommentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/components/defect-details/defect-details.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/defect-details/defect-details.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".countdown li {\n  display: inline-block;\n  font-size: 1rem;\n  list-style-type: none;\n  text-transform: uppercase;\n  text-align: center;\n}\n.countdown li span {\n  display: block;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9kZWZlY3RzL2NvbXBvbmVudHMvZGVmZWN0LWRldGFpbHMvZGVmZWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9jb21wb25lbnRzL2RlZmVjdC1kZXRhaWxzL2RlZmVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQVI7QURDUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BtL2RlZmVjdHMvY29tcG9uZW50cy9kZWZlY3QtZGV0YWlscy9kZWZlY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3VudGRvd24ge1xuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5jb3VudGRvd24gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY291bnRkb3duIGxpIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxcmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/pm/defects/components/defect-details/defect-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/defect-details/defect-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DefectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectDetailsComponent", function() { return DefectDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_defect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/defect.service */ "./src/app/core/services/defect.service.ts");
/* harmony import */ var _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/timesheet.service */ "./src/app/core/services/timesheet.service.ts");
/* harmony import */ var _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../core/helpers/pm-helper */ "./src/app/core/helpers/pm-helper.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








var DefectDetailsComponent = /** @class */ (function () {
    function DefectDetailsComponent(translate, toastr, defectService, timesheetService) {
        this.translate = translate;
        this.toastr = toastr;
        this.defectService = defectService;
        this.timesheetService = timesheetService;
        this.showTimer = false;
        this.isTimerStarted = false;
        this.defectstatusKeyValue = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_6__["defect_status_key_value"];
        this.defectSeveritiesKeyValue = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_6__["defect_severity_key_value"];
        this.isDefectTab = 1;
        this.activeDefectTab = '1';
    }
    DefectDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.totalHours = "00";
        this.totalMinutes = "00";
        this.totalSeconds = "00";
        // this.getTimeLogs();
        this.timerInterval1 = setInterval(function () {
            if (_this.loginUser) {
                // this.getTimeLogs(false);
            }
        }, 1000);
    };
    DefectDetailsComponent.prototype.setActiveDefectTab = function ($event) {
        this.activeDefectTab = $event.id;
    };
    DefectDetailsComponent.prototype.getActiveDefectTab = function (tab) {
        return this.activeDefectTab === tab;
    };
    DefectDetailsComponent.prototype.getDefectById = function (defectId) {
        var _this = this;
        this.defectService.getById(defectId).subscribe(function (data) {
            _this.defect = data;
        });
    };
    DefectDetailsComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.defectstatusKeyValue[statusKey];
    };
    DefectDetailsComponent.prototype.getTranslateSeverities = function (statusKey) {
        return this.defectSeveritiesKeyValue[statusKey];
    };
    DefectDetailsComponent.prototype.changeDefectStatus = function (defectId, status) {
        var _this = this;
        this.defectService.changeStatus({
            id: defectId,
            status: status.id
        }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('defects.messages.status'), _this.translate.instant('defects.title'));
            _this.getDefectById(_this.defect.id);
        });
    };
    DefectDetailsComponent.prototype.changeDefectSeverity = function (defectId, severity) {
        var _this = this;
        this.defectService.changeSeverity({
            id: defectId,
            severity: severity.id
        }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('defects.messages.severity'), _this.translate.instant('defects.title'));
            _this.getDefectById(_this.defect.id);
        });
    };
    DefectDetailsComponent.prototype.getParseArray = function (string) {
        return JSON.parse(string);
    };
    DefectDetailsComponent.prototype.saveDefectDetail = function (name, value) {
        var _this = this;
        this.defect[name] = value;
        this.defectService.update(this.defect).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('defects.messages.update'), _this.translate.instant('defects.title'));
            _this.getDefectById(_this.defect.id);
        });
    };
    DefectDetailsComponent.prototype.getTimeLogs = function (isLoad) {
        var _this = this;
        if (isLoad === void 0) { isLoad = true; }
        this.timesheetService.getTimeLogs()
            .subscribe(function (data) {
            _this.timeLogs = data;
            if (isLoad) {
                _this.loadTimer();
            }
        });
    };
    DefectDetailsComponent.prototype.loadTimer = function () {
        this.totalHours = "00";
        this.totalMinutes = "00";
        this.totalSeconds = "00";
        if ((this.timeLogs && this.timeLogs.is_defect_timer) && (this.timeLogs.reference_id == this.defect.id)) {
            this.showTimer = true;
            this.isTimerStarted = this.timeLogs.is_defect_timer;
            this.startDateTime = this.timeLogs.start_time;
            this.startTimer(false);
        }
        if (this.timeLogs && (this.timeLogs.is_task_timer || this.timeLogs.is_incident_timer)) {
            this.showTimer = false;
        }
        if (!this.timeLogs) {
            this.showTimer = true;
        }
    };
    DefectDetailsComponent.prototype.startTimer = function (isSaved) {
        var _this = this;
        if (isSaved === void 0) { isSaved = true; }
        if (isSaved) {
            if (this.timeLogs && (this.timeLogs.is_task_timer || this.timeLogs.is_defect_timer || this.timeLogs.is_incident_timer)) {
                this.toastr.error(this.translate.instant('timer_logs.error_messages.message1'), this.translate.instant('defects.title'));
                return false;
            }
        }
        this.timerInterval = setInterval(function () {
            _this.startTimerWatch();
        }, 1000);
        if (isSaved) {
            this.isTimerStarted = true;
            this.saveTimeLogs();
        }
    };
    DefectDetailsComponent.prototype.startTimerWatch = function () {
        var time = this.startDateTime ? this.startDateTime : this.getDateTime();
        var endDate = new Date(), startDate = new Date(time), dateDiff = endDate.getTime() - startDate.getTime();
        var hours = Math.floor((dateDiff / 36e5) % 24), minutes = Math.floor((dateDiff / 6e4) % 60), seconds = Math.floor((dateDiff / 1e3) % 60);
        this.totalHours = hours < 10 ? "0" + hours : hours,
            this.totalMinutes = minutes < 10 ? "0" + minutes : minutes,
            this.totalSeconds = seconds < 10 ? "0" + seconds : seconds;
    };
    DefectDetailsComponent.prototype.getDateTime = function () {
        var date = new Date(), fullDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(), months = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1, hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(), minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(), seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        return date.getFullYear() + "-" + months + "-" + fullDate + " " + hours + ":" + minutes + ":" + seconds;
    };
    DefectDetailsComponent.prototype.saveTimeLogs = function () {
        var _this = this;
        this.timesheetService.createTimeLog({
            "project_id": this.defect.project_id,
            "reference_id": this.defect.id,
            "is_task_timer": false,
            "is_defect_timer": true,
            "is_incident_timer": false,
            "start_time": moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format("YYYY-MM-DD HH:mm:ss")
        }).subscribe(function (data) {
            _this.startDateTime = new Date();
        });
    };
    DefectDetailsComponent.prototype.stopTimer = function (isSaved) {
        var endDate = new Date(), startDate = new Date(this.startDateTime), dateDiff = endDate.getTime() - startDate.getTime();
        var diffHrs = Math.floor((dateDiff % 86400000) / 3600000); // hours
        var diffMins = Math.round(((dateDiff % 86400000) % 3600000) / 60000);
        // --
        // Check 
        if (diffMins < 1) {
            this.toastr.error(this.translate.instant('timer_logs.error_messages.message2'), this.translate.instant('timesheet.title'));
            isSaved = false;
            // this.setClearInterval();
            // return false;
        }
        if (this.getStartFutureDate(this.startDateTime, this.getDateTime()) > 720) {
            this.toastr.error(this.translate.instant('timer_logs.error_messages.message3'), this.translate.instant('timesheet.title'));
            isSaved = false;
            // this.setClearInterval();
            // return false;
        }
        this.deleteTimesheet(isSaved);
    };
    DefectDetailsComponent.prototype.getStartFutureDate = function (startDate, endDate) {
        (startDate = new Date(startDate)), (endDate = new Date(endDate));
        var diff = (startDate.getTime() - endDate.getTime()) / 1e3;
        return (diff /= 60), Math.abs(Math.round(diff));
    };
    DefectDetailsComponent.prototype.setClearInterval = function () {
        clearInterval(this.timerInterval);
        this.getTimeLogs();
        this.isTimerStarted = false;
        this.startDateTime = null;
    };
    DefectDetailsComponent.prototype.saveTimesheet = function () {
        var _this = this;
        this.timesheetService.create({
            "project_id": this.defect.project_id,
            "module_id": 3,
            "module_related_id": this.defect.id,
            "start_time": moment__WEBPACK_IMPORTED_MODULE_7__(new Date(this.startDateTime)).format("YYYY-MM-DD HH:mm:ss"),
            "end_time": moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('timesheet.messages.create'), _this.translate.instant('timesheet.title'));
            _this.setClearInterval();
        });
    };
    DefectDetailsComponent.prototype.deleteTimesheet = function (isSaved) {
        var _this = this;
        this.timesheetService.deleteTimeLog(this.loginUser.id)
            .subscribe(function (data) {
            if (isSaved) {
                _this.saveTimesheet();
            }
            else {
                _this.setClearInterval();
            }
        });
    };
    DefectDetailsComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timerInterval);
        clearInterval(this.timerInterval1);
    };
    DefectDetailsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _core_services_defect_service__WEBPACK_IMPORTED_MODULE_4__["DefectService"] },
        { type: _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_5__["TimesheetService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectDetailsComponent.prototype, "defect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectDetailsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectDetailsComponent.prototype, "permission", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectDetailsComponent.prototype, "apiUrl", void 0);
    DefectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-details/defect-details.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-details.component.scss */ "./src/app/modules/pm/defects/components/defect-details/defect-details.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_services_defect_service__WEBPACK_IMPORTED_MODULE_4__["DefectService"],
            _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_5__["TimesheetService"]])
    ], DefectDetailsComponent);
    return DefectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/components/defect-history/defect-history.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/defect-history/defect-history.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9jb21wb25lbnRzL2RlZmVjdC1oaXN0b3J5L2RlZmVjdC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pm/defects/components/defect-history/defect-history.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/components/defect-history/defect-history.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DefectHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectHistoryComponent", function() { return DefectHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");





var DefectHistoryComponent = /** @class */ (function () {
    function DefectHistoryComponent(translate, route, userService) {
        this.translate = translate;
        this.route = route;
        this.userService = userService;
        this.dtOptions = {};
        this.userData = [];
        this.userLists = [];
    }
    DefectHistoryComponent.prototype.ngOnInit = function () {
        this.getUserIdName();
        this.loadDatatable();
    };
    DefectHistoryComponent.prototype.loadDatatable = function () {
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: false,
            processing: false,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('histories.title'),
                    className: "btn btn-datatable-gredient",
                }, {
                    extend: 'excel',
                    title: this.translate.instant('histories.title'),
                    className: "btn btn-datatable-gredient",
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('histories.title'),
                    className: "btn btn-datatable-gredient",
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
            }
        };
    };
    DefectHistoryComponent.prototype.getUserIdName = function () {
        var _this = this;
        this.userService.getUserIdName().subscribe(function (data) {
            _this.userData = data;
            _this.setUsers();
        });
    };
    DefectHistoryComponent.prototype.setUsers = function () {
        this.userLists = [];
        for (var iRow in this.userData) {
            this.userLists[this.userData[iRow].id] = {
                "name": this.userData[iRow].firstname + " " + this.userData[iRow].lastname,
                "avatar": this.userData[iRow].avatar,
            };
        }
    };
    DefectHistoryComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectHistoryComponent.prototype, "defect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectHistoryComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DefectHistoryComponent.prototype, "apiUrl", void 0);
    DefectHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-history',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/components/defect-history/defect-history.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-history.component.scss */ "./src/app/modules/pm/defects/components/defect-history/defect-history.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], DefectHistoryComponent);
    return DefectHistoryComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/defects-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/pm/defects/defects-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DefectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectsRoutingModule", function() { return DefectsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_defect_list_defect_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/defect-list/defect-list.component */ "./src/app/modules/pm/defects/pages/defect-list/defect-list.component.ts");
/* harmony import */ var _pages_defect_create_defect_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/defect-create/defect-create.component */ "./src/app/modules/pm/defects/pages/defect-create/defect-create.component.ts");
/* harmony import */ var _pages_defect_edit_defect_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/defect-edit/defect-edit.component */ "./src/app/modules/pm/defects/pages/defect-edit/defect-edit.component.ts");
/* harmony import */ var _pages_defect_detail_defect_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/defect-detail/defect-detail.component */ "./src/app/modules/pm/defects/pages/defect-detail/defect-detail.component.ts");
/* harmony import */ var _pages_defect_kanban_defect_kanban_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/defect-kanban/defect-kanban.component */ "./src/app/modules/pm/defects/pages/defect-kanban/defect-kanban.component.ts");









var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_defect_list_defect_list_component__WEBPACK_IMPORTED_MODULE_4__["DefectListComponent"],
                data: {
                    permissions: {
                        only: ['admin', 'super_admin', 'defects_view']
                    }
                }
            },
            {
                path: 'create',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_defect_create_defect_create_component__WEBPACK_IMPORTED_MODULE_5__["DefectCreateComponent"],
                data: {
                    breadcrumbs: {
                        text: "common.create",
                        icon: "fa fa-bug",
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'defects_create']
                    }
                }
            },
            {
                path: 'edit/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_defect_edit_defect_edit_component__WEBPACK_IMPORTED_MODULE_6__["DefectEditComponent"],
                data: {
                    breadcrumbs: {
                        text: "common.edit",
                        icon: "fa fa-bug",
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'defects_edit']
                    }
                }
            },
            {
                path: 'detail/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_defect_detail_defect_detail_component__WEBPACK_IMPORTED_MODULE_7__["DefectDetailComponent"],
                data: {
                    breadcrumbs: {
                        text: "common.detail",
                        icon: "fa fa-bug",
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'defects_view']
                    }
                }
            },
            {
                path: 'kanban',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_defect_kanban_defect_kanban_component__WEBPACK_IMPORTED_MODULE_8__["DefectKanbanComponent"],
                data: {
                    breadcrumbs: {
                        text: "common.kanban",
                        icon: "fa fa-bug",
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'defects_view']
                    }
                }
            },
            {
                path: ':status/:defectFilterKey',
                component: _pages_defect_list_defect_list_component__WEBPACK_IMPORTED_MODULE_4__["DefectListComponent"]
            }
        ]
    }
];
var DefectsRoutingModule = /** @class */ (function () {
    function DefectsRoutingModule() {
    }
    DefectsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DefectsRoutingModule);
    return DefectsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/defects.module.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/pm/defects/defects.module.ts ***!
  \******************************************************/
/*! exports provided: DefectsModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectsModule", function() { return DefectsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");
/* harmony import */ var _defects_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./defects-routing.module */ "./src/app/modules/pm/defects/defects-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_todo_todo_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../admin/todo/todo.module */ "./src/app/modules/admin/todo/todo.module.ts");
/* harmony import */ var _timesheet_timesheet_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../timesheet/timesheet.module */ "./src/app/modules/timesheet/timesheet.module.ts");
/* harmony import */ var _pages_defect_create_defect_create_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/defect-create/defect-create.component */ "./src/app/modules/pm/defects/pages/defect-create/defect-create.component.ts");
/* harmony import */ var _pages_defect_edit_defect_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/defect-edit/defect-edit.component */ "./src/app/modules/pm/defects/pages/defect-edit/defect-edit.component.ts");
/* harmony import */ var _pages_defect_list_defect_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/defect-list/defect-list.component */ "./src/app/modules/pm/defects/pages/defect-list/defect-list.component.ts");
/* harmony import */ var _pages_defect_detail_defect_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/defect-detail/defect-detail.component */ "./src/app/modules/pm/defects/pages/defect-detail/defect-detail.component.ts");
/* harmony import */ var _components_defect_details_defect_details_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/defect-details/defect-details.component */ "./src/app/modules/pm/defects/components/defect-details/defect-details.component.ts");
/* harmony import */ var _components_defect_comments_defect_comments_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/defect-comments/defect-comments.component */ "./src/app/modules/pm/defects/components/defect-comments/defect-comments.component.ts");
/* harmony import */ var _components_defect_attachment_defect_attachment_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/defect-attachment/defect-attachment.component */ "./src/app/modules/pm/defects/components/defect-attachment/defect-attachment.component.ts");
/* harmony import */ var _components_defect_activities_defect_activities_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/defect-activities/defect-activities.component */ "./src/app/modules/pm/defects/components/defect-activities/defect-activities.component.ts");
/* harmony import */ var _components_defect_history_defect_history_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/defect-history/defect-history.component */ "./src/app/modules/pm/defects/components/defect-history/defect-history.component.ts");
/* harmony import */ var _components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/create-attachment-modal/create-attachment-modal.component */ "./src/app/modules/pm/defects/components/create-attachment-modal/create-attachment-modal.component.ts");
/* harmony import */ var _pages_defect_kanban_defect_kanban_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/defect-kanban/defect-kanban.component */ "./src/app/modules/pm/defects/pages/defect-kanban/defect-kanban.component.ts");


































var DefectsModule = /** @class */ (function () {
    function DefectsModule() {
    }
    DefectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_defect_create_defect_create_component__WEBPACK_IMPORTED_MODULE_23__["DefectCreateComponent"],
                _pages_defect_edit_defect_edit_component__WEBPACK_IMPORTED_MODULE_24__["DefectEditComponent"],
                _pages_defect_list_defect_list_component__WEBPACK_IMPORTED_MODULE_25__["DefectListComponent"],
                _pages_defect_detail_defect_detail_component__WEBPACK_IMPORTED_MODULE_26__["DefectDetailComponent"],
                _components_defect_details_defect_details_component__WEBPACK_IMPORTED_MODULE_27__["DefectDetailsComponent"],
                _components_defect_comments_defect_comments_component__WEBPACK_IMPORTED_MODULE_28__["DefectCommentsComponent"],
                _components_defect_attachment_defect_attachment_component__WEBPACK_IMPORTED_MODULE_29__["DefectAttachmentComponent"],
                _components_defect_activities_defect_activities_component__WEBPACK_IMPORTED_MODULE_30__["DefectActivitiesComponent"],
                _components_defect_history_defect_history_component__WEBPACK_IMPORTED_MODULE_31__["DefectHistoryComponent"],
                _components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_32__["CreateAttachmentModalComponent"],
                _pages_defect_kanban_defect_kanban_component__WEBPACK_IMPORTED_MODULE_33__["DefectKanbanComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _defects_routing_module__WEBPACK_IMPORTED_MODULE_19__["DefectsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_16__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_9__["NgxEditorModule"],
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_17__["DragAndDropModule"],
                angular_resizable_element__WEBPACK_IMPORTED_MODULE_18__["ResizableModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_12__["OrderModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__["ProgressbarModule"].forRoot(),
                ngx_permissions__WEBPACK_IMPORTED_MODULE_11__["NgxPermissionsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _admin_todo_todo_module__WEBPACK_IMPORTED_MODULE_21__["TodoModule"],
                _timesheet_timesheet_module__WEBPACK_IMPORTED_MODULE_22__["TimesheetModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"]
            ],
            entryComponents: [_components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_32__["CreateAttachmentModalComponent"]]
        })
    ], DefectsModule);
    return DefectsModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/pm/defects/pages/defect-create/defect-create.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/pages/defect-create/defect-create.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9wYWdlcy9kZWZlY3QtY3JlYXRlL2RlZmVjdC1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/defects/pages/defect-create/defect-create.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/pm/defects/pages/defect-create/defect-create.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DefectCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectCreateComponent", function() { return DefectCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_services_team_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/team.service */ "./src/app/core/services/team.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_defect_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/defect.service */ "./src/app/core/services/defect.service.ts");
/* harmony import */ var _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/custom-fields.service */ "./src/app/core/services/custom-fields.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_13__);














var DefectCreateComponent = /** @class */ (function () {
    function DefectCreateComponent(translate, datepipe, router, formBuilder, toastr, defectService, projectService, teamService, customFieldsService, authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.defectService = defectService;
        this.projectService = projectService;
        this.teamService = teamService;
        this.customFieldsService = customFieldsService;
        this.authenticationService = authenticationService;
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.clients = [];
        this.teams = [];
        this.teamsMembers = [];
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_12__["datepickerConfig"];
        this.editorConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_12__["editorConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    DefectCreateComponent.prototype.ngOnInit = function () {
        this.getTeams();
        this.loadForms();
        this.getProjects();
        this.getCustomFieldByForm();
    };
    DefectCreateComponent.prototype.loadForms = function () {
        var that = this;
        this.createDefectForm = this.formBuilder.group({
            // project_id: [null, Validators.required],
            // project_version: [null],
            defect_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            start_date: [null],
            end_date: [null],
            status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // severity: [2, Validators.required],
            // estimated_hours: ['', Validators.pattern(/^[0-9]+\:[0-5][0-9]$/)],
            // assigned_group_id: [null],
            assign_member: [null],
            // defect_type: [1, Validators.required],
            file: [''],
            file_extension: [''],
            attachment: [''],
            description: [''],
            custom_field: this.formBuilder.array([]),
            custom_fields: [null],
        });
        this.isPageLoaded = true;
        setTimeout(function () {
            that.loadDropzone();
        });
    };
    Object.defineProperty(DefectCreateComponent.prototype, "defectControl", {
        get: function () { return this.createDefectForm.controls; },
        enumerable: true,
        configurable: true
    });
    DefectCreateComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_13__(this.logoropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_13__["createElement"]("<button class=\'btn btn-sm btn-block\'>" + that.translate.instant('common.remove_file') + "</button>");
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
                            that.createDefectForm.patchValue({ file: reader_1.result });
                            that.createDefectForm.patchValue({ attachment: file.name });
                            that.createDefectForm.patchValue({ file_extension: file.name.split('.').pop() });
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.createDefectForm.patchValue({ file: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    DefectCreateComponent.prototype.getProjects = function () {
        var _this_1 = this;
        this.projectService.getMyProjects().subscribe(function (data) {
            _this_1.projects = data;
        });
    };
    DefectCreateComponent.prototype.projectChange = function (event) {
        this.createDefectForm.patchValue({ project_version: null });
        this.createDefectForm.patchValue({ start_date: null });
        this.createDefectForm.patchValue({ end_date: null });
        if (this.createDefectForm.value.project_id == undefined || this.createDefectForm.value.project_id == null || this.createDefectForm.value.project_id == '') {
            this.projectVersion = null;
            return;
        }
        this.projectVersion = event.project_version.split(",").reverse();
        // --
        // Dates
        this.projectStartDate = new Date(event.start_date);
    };
    DefectCreateComponent.prototype.startDateChange = function (event) {
        this.createDefectForm.patchValue({ end_date: event });
    };
    DefectCreateComponent.prototype.getTeams = function () {
        var _this_1 = this;
        this.teamService.getAll().subscribe(function (data) {
            _this_1.teams = data;
        });
    };
    DefectCreateComponent.prototype.assignGroupChange = function (event) {
        if (this.createDefectForm.value.assigned_group_id == undefined || this.createDefectForm.value.assigned_group_id == null || this.createDefectForm.value.assigned_group_id == '') {
            this.createDefectForm.patchValue({ assign_member: null });
            this.teamsMembers = null;
            return;
        }
        this.teamsMembers = event.members;
    };
    DefectCreateComponent.prototype.getCustomFieldByForm = function () {
        var _this_1 = this;
        this.customFieldsService.getCustomFieldByForm(3).subscribe(function (data) {
            _this_1.customFields = data;
            if (_this_1.customFields.length > 0) {
                _this_1.addDynamicField(_this_1.customFields);
            }
        });
    };
    DefectCreateComponent.prototype.addDynamicField = function (fieldList) {
        var _this_1 = this;
        fieldList.forEach(function (element) {
            var _a;
            var control = _this_1.createDefectForm.controls.custom_field;
            var validators = null;
            if (element.is_required == 1) {
                validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required];
            }
            control.push(_this_1.formBuilder.group((_a = {},
                _a[element.field_column] = [null, validators],
                _a)));
        });
    };
    DefectCreateComponent.prototype.setCustomFields = function () {
        var arr = this.createDefectForm.value.custom_field, obj = {}, iRow = 0, that = this;
        arr.forEach(function (item) {
            var key = Object.keys(item)[0];
            obj[key] = item[key];
            if (that.customFields[iRow++].field_type == "date") {
                obj[key] = that.datepipe.transform(item[key], 'yyyy-MM-dd');
            }
        });
        this.createDefectForm.patchValue({ custom_fields: obj });
    };
    DefectCreateComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.createDefectForm.invalid) {
            return;
        }
        if (this.customFields.length > 0) {
            this.setCustomFields();
        }
        this.defectService.create(this.createDefectForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('defects.messages.create'), _this_1.translate.instant('defects.title'));
            _this_1.router.navigate(['project_bidding']);
        });
    };
    DefectCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _core_services_defect_service__WEBPACK_IMPORTED_MODULE_9__["DefectService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"] },
        { type: _core_services_team_service__WEBPACK_IMPORTED_MODULE_7__["TeamService"] },
        { type: _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_10__["CustomFieldsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logoropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DefectCreateComponent.prototype, "logoropzone", void 0);
    DefectCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-create/defect-create.component.html")).default,
            preserveWhitespaces: true,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-create.component.scss */ "./src/app/modules/pm/defects/pages/defect-create/defect-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _core_services_defect_service__WEBPACK_IMPORTED_MODULE_9__["DefectService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"],
            _core_services_team_service__WEBPACK_IMPORTED_MODULE_7__["TeamService"],
            _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_10__["CustomFieldsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]])
    ], DefectCreateComponent);
    return DefectCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/pages/defect-detail/defect-detail.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/pages/defect-detail/defect-detail.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9wYWdlcy9kZWZlY3QtZGV0YWlsL2RlZmVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/defects/pages/defect-detail/defect-detail.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/pm/defects/pages/defect-detail/defect-detail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DefectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectDetailComponent", function() { return DefectDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_services_defect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/defect.service */ "./src/app/core/services/defect.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");







var DefectDetailComponent = /** @class */ (function () {
    function DefectDetailComponent(route, ngxRolesService, defectService, authenticationService, ngxPermissionsService) {
        var _this = this;
        this.route = route;
        this.ngxRolesService = ngxRolesService;
        this.defectService = defectService;
        this.authenticationService = authenticationService;
        this.ngxPermissionsService = ngxPermissionsService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.isPageLoaded = false;
        this.permission = false;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.ngxPermissionsService.permissions$.subscribe(function (permissions) {
            _this.permissions = permissions;
        });
        this.route.paramMap.subscribe(function (params) {
            _this.getById(params.get('id'));
        });
    }
    DefectDetailComponent.prototype.ngOnInit = function () { };
    DefectDetailComponent.prototype.getCheckPermission = function (defect) {
        if (this.permissions.defects_edit) {
            var role = this.ngxRolesService.getRole('admin');
            if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
                this.permission = true;
            }
            else if (defect.assign_member == this.loginUser.id || defect.create_user_id == this.loginUser.id) {
                this.permission = true;
            }
        }
    };
    DefectDetailComponent.prototype.getById = function (defectId) {
        var _this = this;
        this.defectService.getById(defectId).subscribe(function (data) {
            _this.defect = data;
            _this.getCheckPermission(_this.defect);
            _this.isPageLoaded = true;
        });
    };
    DefectDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxRolesService"] },
        { type: _core_services_defect_service__WEBPACK_IMPORTED_MODULE_4__["DefectService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsService"] }
    ]; };
    DefectDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-detail/defect-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-detail.component.scss */ "./src/app/modules/pm/defects/pages/defect-detail/defect-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxRolesService"],
            _core_services_defect_service__WEBPACK_IMPORTED_MODULE_4__["DefectService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsService"]])
    ], DefectDetailComponent);
    return DefectDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/pages/defect-edit/defect-edit.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/pm/defects/pages/defect-edit/defect-edit.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9wYWdlcy9kZWZlY3QtZWRpdC9kZWZlY3QtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/pm/defects/pages/defect-edit/defect-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/pm/defects/pages/defect-edit/defect-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DefectEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectEditComponent", function() { return DefectEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/team.service */ "./src/app/core/services/team.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_defect_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/defect.service */ "./src/app/core/services/defect.service.ts");
/* harmony import */ var _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/custom-fields.service */ "./src/app/core/services/custom-fields.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_15__);
















var DefectEditComponent = /** @class */ (function () {
    function DefectEditComponent(translate, datepipe, ngxRolesService, router, route, formBuilder, toastr, defectService, projectService, customFieldsService, teamService, authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.ngxRolesService = ngxRolesService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.defectService = defectService;
        this.projectService = projectService;
        this.customFieldsService = customFieldsService;
        this.teamService = teamService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].apiUrl;
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isLogoUploaded = false;
        this.isLogoLoaded = true;
        this.clients = [];
        this.teams = [];
        this.teamsMembers = [];
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_13__["datepickerConfig"];
        this.editorConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_13__["editorConfig"];
        this.route.paramMap.subscribe(function (params) {
            _this_1.getDefectById(params.get('id'));
        });
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    DefectEditComponent.prototype.ngOnInit = function () {
    };
    DefectEditComponent.prototype.loadForms = function () {
        // --
        // Dates
        // this.projectStartDate = new Date(this.defect.project.start_date);
        if (this.defect.start_date) {
            this.defect.start_date = new Date(this.defect.start_date);
        }
        if (this.defect.end_date) {
            this.defect.end_date = new Date(this.defect.end_date);
        }
        this.editDefectForm = this.formBuilder.group({
            id: [this.defect.id],
            // project_id: [this.defect.project_id, Validators.required],
            // project_version: [this.defect.project_version],
            defect_name: [this.defect.defect_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            start_date: [this.defect.start_date],
            end_date: [this.defect.end_date],
            status: [this.defect.status, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // severity: [this.defect.severity, Validators.required],
            // estimated_hours: [this.defect.estimated_hours, Validators.pattern(/^[0-9]+\:[0-5][0-9]$/)],
            // assigned_group_id: [this.defect.assigned_group_id],
            assign_member: [this.defect.assign_member],
            // defect_type: [this.defect.defect_type, Validators.required],
            file: [this.defect.file],
            file_extension: [this.defect.file_extension],
            attachment: [this.defect.attachment],
            description: [this.defect.description],
            custom_field: this.formBuilder.array([]),
            custom_fields: [null],
        });
        this.isPageLoaded = true;
        this.getCustomFieldByForm();
        if (!this.defect.file) {
            this.isLogoUploaded = true;
        }
    };
    Object.defineProperty(DefectEditComponent.prototype, "defectControl", {
        get: function () { return this.editDefectForm.controls; },
        enumerable: true,
        configurable: true
    });
    DefectEditComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_15__(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_15__["createElement"]("<button class=\'btn btn-sm btn-block\'>" + that.translate.instant('common.remove_file') + "</button>");
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
                            that.editDefectForm.patchValue({ file: reader_1.result });
                            that.editDefectForm.patchValue({ attachment: file.name });
                            that.editDefectForm.patchValue({ file_extension: file.name.split('.').pop() });
                            that.isLogoLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.editDefectForm.patchValue({ file: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    DefectEditComponent.prototype.removeDropzoneImage = function () {
        this.isLogoUploaded = true;
        this.isLogoLoaded = false;
        this.editDefectForm.patchValue({ attachment_hash: null });
        this.editDefectForm.patchValue({ file: null });
        this.editDefectForm.patchValue({ attachment: null });
        this.editDefectForm.patchValue({ file_extension: null });
    };
    DefectEditComponent.prototype.getCheckPermission = function (defect) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        else if (defect.assign_member == this.loginUser.id || defect.create_user_id == this.loginUser.id) {
            return true;
        }
        else {
            this.router.navigate(['defects']);
        }
    };
    DefectEditComponent.prototype.getProjects = function () {
        var _this_1 = this;
        this.projectService.getMyProjects().subscribe(function (data) {
            _this_1.projects = data;
            var selectedProject = _this_1.projects.find(function (i) { return i.id == _this_1.defect.project_id; });
            _this_1.projectVersion = selectedProject.project_version.split(",").reverse();
        });
    };
    DefectEditComponent.prototype.getTeams = function () {
        var _this_1 = this;
        this.teamService.getAll().subscribe(function (data) {
            _this_1.teams = data;
            var selectedTeam = _this_1.teams.find(function (i) { return i.id == _this_1.defect.assigned_group_id; });
            _this_1.assignGroupChange(selectedTeam);
        });
    };
    DefectEditComponent.prototype.getDefectById = function (defectId) {
        var _this_1 = this;
        this.defectService.getById(defectId).subscribe(function (data) {
            _this_1.defect = data;
            _this_1.getCheckPermission(_this_1.defect);
            // this.getProjects();
            _this_1.loadForms();
            _this_1.getTeams();
            setTimeout(function () {
                _this_1.loadDropzone();
            });
        });
    };
    DefectEditComponent.prototype.getCustomFieldByForm = function () {
        var _this_1 = this;
        this.customFieldsService.getCustomFieldByForm(3).subscribe(function (data) {
            _this_1.customFields = data;
            if (_this_1.customFields.length > 0) {
                _this_1.addDynamicField(_this_1.customFields);
            }
        });
    };
    DefectEditComponent.prototype.addDynamicField = function (fieldList) {
        var _this_1 = this;
        fieldList.forEach(function (element) {
            var _a, _b;
            var control = _this_1.editDefectForm.controls.custom_field;
            var validators = null;
            if (element.is_required == 1) {
                validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required];
            }
            if (element.field_type == 'date' && _this_1.defect[element.field_column] != null) {
                control.push(_this_1.formBuilder.group((_a = {},
                    _a[element.field_column] = [new Date(_this_1.defect[element.field_column]), validators],
                    _a)));
            }
            else {
                control.push(_this_1.formBuilder.group((_b = {},
                    _b[element.field_column] = [_this_1.defect[element.field_column], validators],
                    _b)));
            }
        });
    };
    DefectEditComponent.prototype.assignGroupChange = function (event) {
        if (this.editDefectForm.value.assigned_group_id == undefined || this.editDefectForm.value.assigned_group_id == null || this.editDefectForm.value.assigned_group_id == '') {
            this.editDefectForm.patchValue({ assign_member: null });
            this.teamsMembers = null;
            return;
        }
        this.teamsMembers = event.members;
    };
    DefectEditComponent.prototype.projectChange = function (event) {
        this.editDefectForm.patchValue({ project_version: null });
        this.editDefectForm.patchValue({ start_date: null });
        this.editDefectForm.patchValue({ end_date: null });
        if (this.editDefectForm.value.project_id == undefined || this.editDefectForm.value.project_id == null || this.editDefectForm.value.project_id == '') {
            this.projectVersion = null;
            return;
        }
        this.projectVersion = event.project_version.split(",").reverse();
        // --
        // Dates
        // this.projectStartDate = new Date(event.start_date);
    };
    DefectEditComponent.prototype.startDateChange = function () {
        this.editDefectForm.patchValue({ end_date: this.editDefectForm.value.start_date });
    };
    DefectEditComponent.prototype.setCustomField = function () {
        var arr = this.editDefectForm.value.custom_field, obj = {}, iRow = 0, that = this;
        arr.forEach(function (item) {
            var key = Object.keys(item)[0];
            obj[key] = item[key];
            if (that.customFields[iRow++].field_type == "date") {
                obj[key] = that.datepipe.transform(item[key], 'yyyy-MM-dd');
            }
        });
        this.editDefectForm.patchValue({ custom_fields: obj });
    };
    DefectEditComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.editDefectForm.invalid) {
            return;
        }
        if (this.customFields.length > 0) {
            this.setCustomField();
        }
        this.editDefectForm.value.start_date = this.datepipe.transform(this.editDefectForm.value.start_date, 'yyyy-MM-dd');
        this.editDefectForm.value.end_date = this.datepipe.transform(this.editDefectForm.value.end_date, 'yyyy-MM-dd');
        this.defectService.update(this.editDefectForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('defects.messages.update'), _this_1.translate.instant('defects.title'));
            _this_1.router.navigate(['project_bidding']);
        });
    };
    DefectEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_defect_service__WEBPACK_IMPORTED_MODULE_10__["DefectService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_9__["ProjectService"] },
        { type: _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_11__["CustomFieldsService"] },
        { type: _core_services_team_service__WEBPACK_IMPORTED_MODULE_8__["TeamService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logodropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DefectEditComponent.prototype, "logodropzone", void 0);
    DefectEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-edit/defect-edit.component.html")).default,
            preserveWhitespaces: true,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-edit.component.scss */ "./src/app/modules/pm/defects/pages/defect-edit/defect-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_defect_service__WEBPACK_IMPORTED_MODULE_10__["DefectService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_9__["ProjectService"],
            _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_11__["CustomFieldsService"],
            _core_services_team_service__WEBPACK_IMPORTED_MODULE_8__["TeamService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]])
    ], DefectEditComponent);
    return DefectEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/pages/defect-kanban/defect-kanban.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/pm/defects/pages/defect-kanban/defect-kanban.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-heading {\n  padding: 5px 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.drag-container {\n  width: 600px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n  background-color: #E9ECEF;\n  padding: 15px;\n  border-radius: 5px;\n}\n\n.item-list {\n  min-height: 60px;\n  border-radius: 4px;\n  display: block;\n}\n\n.item-box {\n  padding: 8px 10px;\n  border: solid 1px #ccc;\n  margin-bottom: 5px;\n  color: rgba(0, 0, 0, 0.87);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  border-radius: 20px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 20px 20px;\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.item-list.cdk-drop-list-dragging .item-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9kZWZlY3RzL3BhZ2VzL2RlZmVjdC1rYW5iYW4vZGVmZWN0LWthbmJhbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbS9kZWZlY3RzL3BhZ2VzL2RlZmVjdC1rYW5iYW4vZGVmZWN0LWthbmJhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO0VBQ0Esc0JBQUE7TUFBQSxtQkFBQTtFQUNBLHNCQUFBO01BQUEsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxzREFBQTtBQ0NGOztBREVBO0VBQ0Usc0RBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9wYWdlcy9kZWZlY3Qta2FuYmFuL2RlZmVjdC1rYW5iYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1oZWFkaW5nIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kcmFnLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMjVweCAyNXB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RUNFRjtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaXRlbS1saXN0IHtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLml0ZW0tYm94IHtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uaXRlbS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLml0ZW0tYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuIiwiLnNlY3Rpb24taGVhZGluZyB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZHJhZy1jb250YWluZXIge1xuICB3aWR0aDogNjAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDI1cHggMjVweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUVDRUY7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLml0ZW0tbGlzdCB7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pdGVtLWJveCB7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLml0ZW0tbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5pdGVtLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/pm/defects/pages/defect-kanban/defect-kanban.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/pm/defects/pages/defect-kanban/defect-kanban.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DefectKanbanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectKanbanComponent", function() { return DefectKanbanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_defect_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/defect.service */ "./src/app/core/services/defect.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");









var DefectKanbanComponent = /** @class */ (function () {
    function DefectKanbanComponent(translate, toastr, authenticationService, defectService, projectService) {
        var _this = this;
        this.translate = translate;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.defectService = defectService;
        this.projectService = projectService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.filter = "my";
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    DefectKanbanComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    DefectKanbanComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getMyProjects()
            .subscribe(function (data) {
            _this.projects = data;
            _this.getDefects();
        });
    };
    DefectKanbanComponent.prototype.getDefects = function (projectId, filter) {
        var _this = this;
        if (projectId === void 0) { projectId = null; }
        if (filter === void 0) { filter = "my"; }
        var params = {};
        if (projectId == null) {
            params = {
                'filter': filter
            };
        }
        else {
            params = {
                'project_id': projectId,
                'filter': filter
            };
        }
        this.projectId = projectId;
        this.defectService.getDefectForKanban(params).subscribe(function (data) {
            _this.setDefects(data);
        });
    };
    DefectKanbanComponent.prototype.setDefects = function (defects) {
        this.assignedDefects = [];
        this.inprogressDefects = [];
        this.openDefects = [];
        this.completedDefects = [];
        for (var iRow in defects) {
            switch (defects[iRow].status) {
                case 1:
                    this.assignedDefects.push(defects[iRow]);
                    break;
                case 3:
                    this.inprogressDefects.push(defects[iRow]);
                    break;
                case 4:
                case 6:
                    this.openDefects.push(defects[iRow]);
                    break;
                case 2:
                case 7:
                case 5:
                    this.completedDefects.push(defects[iRow]);
                    break;
                default:
                    break;
            }
        }
    };
    DefectKanbanComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        var statusTask = [{
                status: 1,
                list: this.converToArray(this.assignedDefects)
            }, {
                status: 3,
                list: this.converToArray(this.inprogressDefects)
            }, {
                status: 4,
                list: this.converToArray(this.openDefects)
            }, {
                status: 5,
                list: this.converToArray(this.completedDefects)
            }];
        this.updateStatusList(statusTask);
    };
    DefectKanbanComponent.prototype.converToArray = function (list) {
        var status_list = [];
        list.forEach(function (element) {
            status_list.push(parseInt(element.id));
        });
        return status_list;
    };
    DefectKanbanComponent.prototype.updateStatusList = function (task) {
        var _this = this;
        this.defectService.updateKanbanStatusList(task)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('defects.messages.status'), _this.translate.instant('defects.title'));
        });
    };
    DefectKanbanComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _core_services_defect_service__WEBPACK_IMPORTED_MODULE_6__["DefectService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"] }
    ]; };
    DefectKanbanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-kanban',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-kanban.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-kanban/defect-kanban.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-kanban.component.scss */ "./src/app/modules/pm/defects/pages/defect-kanban/defect-kanban.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _core_services_defect_service__WEBPACK_IMPORTED_MODULE_6__["DefectService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"]])
    ], DefectKanbanComponent);
    return DefectKanbanComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/defects/pages/defect-list/defect-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/pm/defects/pages/defect-list/defect-list.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n\n.btn-filters .status-dropdown .btn.assigned,\n.btn-filters .status-dropdown .btn.open {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9kZWZlY3RzL3BhZ2VzL2RlZmVjdC1saXN0L2RlZmVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BtL2RlZmVjdHMvcGFnZXMvZGVmZWN0LWxpc3QvZGVmZWN0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7O0VBRUMsZ0JBQUE7QUNFRCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vZGVmZWN0cy9wYWdlcy9kZWZlY3QtbGlzdC9kZWZlY3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cbi5idG4tZmlsdGVycyAuc3RhdHVzLWRyb3Bkb3duIC5idG4uYXNzaWduZWQsXG4uYnRuLWZpbHRlcnMgLnN0YXR1cy1kcm9wZG93biAuYnRuLm9wZW4ge1xuXHRiYWNrZ3JvdW5kOiBub25lO1xufSIsIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnRuLWZpbHRlcnMgLnN0YXR1cy1kcm9wZG93biAuYnRuLmFzc2lnbmVkLFxuLmJ0bi1maWx0ZXJzIC5zdGF0dXMtZHJvcGRvd24gLmJ0bi5vcGVuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/pm/defects/pages/defect-list/defect-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/pm/defects/pages/defect-list/defect-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DefectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectListComponent", function() { return DefectListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
/* harmony import */ var _core_services_defect_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/defect.service */ "./src/app/core/services/defect.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../../../../core/helpers/pm-helper */ "./src/app/core/helpers/pm-helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__);


















var DefectListComponent = /** @class */ (function () {
    function DefectListComponent(translate, ngxRolesService, router, route, http, modalService, exportAsService, toastr, defectService, authenticationService, ngxPermissionsService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.router = router;
        this.route = route;
        this.http = http;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.defectService = defectService;
        this.authenticationService = authenticationService;
        this.ngxPermissionsService = ngxPermissionsService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.dtOptions = {};
        this.defects = [];
        this.defectstatusKeyValue = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_14__["defect_status_key_value"];
        this.defectFilterKey = 'selected';
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'defects_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.ngxPermissionsService.permissions$.subscribe(function (permissions) {
            _this.permissions = permissions;
        });
    }
    DefectListComponent.prototype.ngOnInit = function () {
        this.loadDefectDatatable();
    };
    DefectListComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.defectstatusKeyValue[statusKey];
    };
    DefectListComponent.prototype.loadDefectDatatable = function () {
        var _this = this;
        this.statusfilterId = 0;
        if (this.route.snapshot.params['status'])
            this.statusfilterId = this.route.snapshot.params['status'];
        if (this.route.snapshot.params['defectFilterKey'])
            this.defectFilterKey = this.route.snapshot.params['defectFilterKey'];
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
                    // 'width': "8%",
                    'target': [0]
                },
                {
                    'sortable': true,
                    'target': [1]
                },
                {
                    'sortable': true,
                    // 'width': "8%",
                    'target': [2]
                },
                {
                    'sortable': true,
                    // 'width': "8%",
                    'target': [3]
                },
                {
                    'sortable': true,
                    // 'width': "8%",
                    'target': [4]
                },
                {
                    'sortable': true,
                    // 'width': "10%",
                    'target': [5]
                },
                // {
                // 	'sortable': true,
                // 	// 'width': "10%",
                // 	'target': [6]
                // },
                // {
                // 	'sortable': true,
                // 	// 'width': "10%",
                // 	'target': [7]
                // },
                {
                    'sortable': false,
                    'target': [6],
                    'width': "5%"
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('defects.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('defects.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('defects.title'),
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
                    status: _this.statusfilterId,
                    filter: _this.defectFilterKey
                };
                _this.http
                    .post(_this.apiUrl + '/api/all-defects', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.isPageLoaded = true;
                    _this.defects = resp.data;
                    _this.countStatus = resp;
                    _this.countStatus = _this.countStatus.statusCount;
                    if (_this.countStatus.all == 0) {
                        _this.countStatus.open = 0;
                        _this.countStatus.in_progress = 0;
                        _this.countStatus.assigned = 0;
                        _this.countStatus.solved = 0;
                        _this.countStatus.deferred = 0;
                        _this.countStatus.re_open = 0;
                        _this.countStatus.closed = 0;
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
    DefectListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    DefectListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    DefectListComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.defects.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    DefectListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('defects.title')).subscribe(function () { });
    };
    DefectListComponent.prototype.filterByStatus = function (statusID, defectFilterKey) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.navigate(['defects', statusID, defectFilterKey]);
    };
    DefectListComponent.prototype.getCheckPermission = function (defect, action) {
        if ((action == 'edit' && this.permissions.defects_edit) || (action == 'delete' && this.permissions.defects_delete)) {
            var role = this.ngxRolesService.getRole('admin');
            if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
                return true;
            }
            else if (defect.assign_member == this.loginUser.id || defect.create_user_id == this.loginUser.id) {
                return true;
            }
        }
        return false;
    };
    DefectListComponent.prototype.deleteDefect = function (id) {
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
                _this.defectService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('defects.messages.delete'), _this.translate.instant('defects.title'));
                    _this.rerender();
                });
            }
        });
    };
    DefectListComponent.prototype.changeDefectStatus = function (defectId, status) {
        var _this = this;
        var changeDefect = {
            id: defectId,
            status: status.id
        };
        this.defectService.changeStatus(changeDefect)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('defects.messages.status'), _this.translate.instant('defects.title'));
            _this.rerender();
        });
    };
    DefectListComponent.prototype.saveDefectDetail = function (index, name, value) {
        var _this = this;
        this.defects[index][name] = value;
        this.defectService.update(this.defects[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('defects.messages.update'), _this.translate.instant('defects.title'));
            _this.rerender();
        });
    };
    DefectListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _core_services_defect_service__WEBPACK_IMPORTED_MODULE_12__["DefectService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"])
    ], DefectListComponent.prototype, "dtElement", void 0);
    DefectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/defects/pages/defect-list/defect-list.component.html")).default,
            preserveWhitespaces: true,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-list.component.scss */ "./src/app/modules/pm/defects/pages/defect-list/defect-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _core_services_defect_service__WEBPACK_IMPORTED_MODULE_12__["DefectService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsService"]])
    ], DefectListComponent);
    return DefectListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-pm-defects-defects-module.js.map