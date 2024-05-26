(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pm-projects-projects-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/create-attachment-modal/create-attachment-modal.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/create-attachment-modal/create-attachment-modal.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-paperclip modal-icon\" aria-hidden=\"true\"></i>&nbsp;{{'attachments.title' | translate}}</h2>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsCreateAttachmentModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"createAttachmentForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"modal-body\">\n        <div class=\"form-body\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                        <label for=\"file_name\">{{'attachments.create.fields.file_title' | translate }}<span class=\"text-danger\">&nbsp;*</span></label>\n                        <input type=\"text\" formControlName=\"file_name\" placeholder=\"{{'attachments.create.placeholders.placeholder1' | translate }}\" class=\"form-control\" id=\"file_name\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && attachment.file_name.errors }\" />\n                        <div *ngIf=\"isFormSubmitted && attachment.file_name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"attachment.file_name.errors.required\">{{'attachments.create.error_messages.message1' | translate }}</div>\n                            <div *ngIf=\"attachment.file_name.errors.maxlength\">{{'attachments.create.error_messages.message5' | translate}}</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && attachment.file.errors }\">\n                        <label for=\"file\">{{'attachments.create.fields.attachment' | translate }}<span class=\"text-danger\">&nbsp;*</span></label>\n                        <input type=\"hidden\" formControlName=\"file\">\n                        <div class=\"dropzone dz-clickable\" #logodropzone>\n                            <div class=\"dz-default dz-message\"><span><strong>{{'attachments.create.error_messages.message2' | translate }}</strong></span></div>\n                        </div>\n                        <div *ngIf=\"isFormSubmitted && attachment.file.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"attachment.file.errors.required\">{{'attachments.create.error_messages.message3' | translate }}</div>\n                        </div>\n                    </div>\n                </div>\n                <input type=\"hidden\" formControlName=\"file_extension\">\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" (click)=\"onCancel()\">{{'common.cancel' | translate }}</button>\n        <button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.create' | translate }}</button>\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-activities/project-activities.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-activities/project-activities.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"activity-timeline\">\n\t<div class=\"card overflow-hidden shadow-none p-2\">\n\t\t<div class=\"card-body\" [perfectScrollbar]=\"scrollConfig\">\n\t\t\t<ul class=\"timeline pr-2\">\n\t\t\t\t<li *ngFor=\"let activity of project.activities; index as i\" class=\"d-flex flex-column\">\n\t\t\t\t\t<div class=\"d-flex flex-column flex-md-row justify-content-start justify-content-md-between\">\n\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', activity.user.id]\" placement=\"top\" tooltip=\"{{activity.user.firstname}} {{activity.user.lastname}}\">\n\t\t\t\t\t\t\t<img src=\"../assets/img/profile_small.jpg\" class=\"user-profile\" alt=\"Profile Photo\" *ngIf=\"!activity.user.avatar\" />\n\t\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/profile/{{activity.user.avatar}}\" class=\"user-profile\" alt=\"Profile Photo\" *ngIf=\"activity.user.avatar\" />\n\t\t\t\t\t\t\t<span class=\"ml-1 activity-user\">{{activity.user.firstname}} {{activity.user.lastname}}</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a class=\"float-left activity-date\" href=\"javascript:void(0)\"><span class=\"badge badge-secondary mr-1\">{{activity.diff_for_humans}}</span>{{activity.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p [innerHTML]=\"activity.description\"></p>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-attachments/project-attachments.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-attachments/project-attachments.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header justify-content-center p-0\">\n    <div class=\"card-buttons pt-2 pb-2 pr-1\">\n        <button type=\"button\" class=\"btn btn-create mb-0\" (click)=\"openAttachmentCreateModal()\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-upload\"></i><span>{{'common.drag_file' | translate}}</span></button>\n    </div>\n</div>\n<!-- Card body -->\n<div class=\"card-body\">\n    <div class=\"row border-top pt-2\" *ngIf=\"attachments?.length != 0\">\n        <div class=\"col-sm-4\" *ngFor=\"let file of attachments; index as i\">\n            <div class=\"file-browser\">\n                <div class=\"actions-dropdown text-right m-1 pr-2\">\n                    <div class=\"btn-group\" dropdown>\n                        <a href=\"javascript:void(0);\" dropdownToggle class=\"dropdown-toggle\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                        <ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n                            <li role=\"menuitem\">\n                                <a class=\"dropdown-item btn btn-download btn-raised\" tooltip=\"{{'common.download' | translate}}\" target=\"_blank\" download=\"{{file.file_name}}\" href=\"{{apiUrl}}/uploads/project_attachment/{{file.file_hash}}\"><i class=\"fa fa-download\"></i></a>\n                            </li>\n                            <li role=\"menuitem\" *ngIf=\"permissions.edit_delete_permission.delete\">\n                                <a (click)=\"attachmentDelete(file.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"file-box\">\n                    <div class=\"files\">\n                        <div *ngIf=\"file.icon\" class=\"icon docx\">\n                            <i [ngClass]=\"file.icon\"></i>\n                        </div>\n                        <div *ngIf=\"file.isImageFile\" class=\"image\">\n                            <img alt=\"image\" class=\"img-fluid height-100\" src=\"{{ apiUrl }}/uploads/project_attachment/{{file.file_hash}}\" />\n                        </div>\n                        <div class=\"file-name\">\n                            <a target=\"_blank\" tooltip=\"{{file.file_name}}\" download=\"{{file.file_name}}\" href=\"{{apiUrl}}/uploads/project_attachment/{{file.file_hash}}\"><h4>{{ (file.file_name.length>20)? (file.file_name | slice:0:20)+'..':(file.file_name) }}</h4></a>\n                            <p>{{'file_browser.title7' | translate}}: {{ file.updated_at | dateTimeFormatFilter:loginUser.settings.date_time_format }}</p>\n                        </div>\n                    </div>\n                    <span class=\"corner\"></span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row border-top pt-2\" *ngIf=\"attachments?.length == 0\">\n        <div class=\"col-sm-12 text-center\">{{'common.datatable.sEmptyTable' | translate}}</div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-calendar/project-calendar.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-calendar/project-calendar.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t<h4 class=\"main-title \"><span>{{'calendar.title' | translate}}</span></h4>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"row text-center\">\n\t\t\t\t\n\t\t\t\t\t<div class=\"col-md-6 d-flex mb-lg-0 mb-2 ml-lg-0 ml-4\">\n\t\t\t\t\t\t<div class=\"btn calender-day\" mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\" (viewDateChange)=\"closeOpenMonthViewDay()\">\n\t\t\t\t\t\t\t<i class=\"calendar-icon fa fa-chevron-left\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"ml-2 mr-2\"><h3>{{ viewDate | calendarDate:(view + 'ViewTitle'): loginUser.language }}</h3></div>\n\t\t\t\t\t\t<div class=\"btn calender-day\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\" (viewDateChange)=\"closeOpenMonthViewDay()\">\n\t\t\t\t\t\t\t<i class=\"calendar-icon fa fa-chevron-right\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 mb-lg-0 mb-2 text-lg-right\">\n\t\t\t\t\t\t<div class=\"btn-view-date\">\n\t\t\t\t\t\t\t<div class=\"btn calender-today mb-1\" mwlCalendarToday [(viewDate)]=\"viewDate\">{{'calendar.today' | translate}}</div>\n\t\t\t\t\t\t\t<div class=\"btn calender-today mb-1\" (click)=\"setView(CalendarView.Month)\" [class.active]=\"view === CalendarView.Month\">{{'calendar.month' | translate}}</div>\n\t\t\t\t\t\t\t<div class=\"btn calender-today mb-1\" (click)=\"setView(CalendarView.Week)\" [class.active]=\"view === CalendarView.Week\">{{'calendar.week' | translate}}</div>\n\t\t\t\t\t\t\t<div class=\"btn calender-today mb-1\" (click)=\"setView(CalendarView.Day)\" [class.active]=\"view === CalendarView.Day\">{{'calendar.day' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<br />\n\t\t\t<div [ngSwitch]=\"view\">\n\t\t\t\t<mwl-calendar-month-view *ngSwitchCase=\"CalendarView.Month\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\" (dayClicked)=\"dayClicked($event.day)\" [locale]=\"loginUser.language\"></mwl-calendar-month-view>\n\t\t\t\t<mwl-calendar-week-view *ngSwitchCase=\"CalendarView.Week\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" [locale]=\"loginUser.language\"></mwl-calendar-week-view>\n\t\t\t\t<mwl-calendar-day-view *ngSwitchCase=\"CalendarView.Day\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" [locale]=\"loginUser.language\"></mwl-calendar-day-view>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-comments/project-comments.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-comments/project-comments.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header p-0\">\n    <div class=\"card-buttons pt-2 pb-2 pr-1\">\n        <button (click)=\"onSubmit()\" id=\"post_comment\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create_comment' | translate}}\"><i class=\"fa fa-plus\"></i><span>{{'comments.buttons.button1' | translate}}</span></button>\n    </div>\n</div>\n<!-- Card body -->\n<div class=\"card-body\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <form [formGroup]=\"projectCommentsForm\" class=\"bs4-forms\">\n                <div class=\"form-group\">\n                    <textarea class=\"form-control\" name=\"comment\" formControlName=\"comment\" id=\"comment\" placeholder=\"{{'comments.create.placeholders.placeholder1' | translate}}\" [ngClass]=\"{ 'is-invalid': isCommentFormSubmitted && commentControl.comment.errors }\"></textarea>\n                    <div *ngIf=\"isCommentFormSubmitted && commentControl.comment.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"commentControl.comment.errors.required\">{{'comments.create.error_messages.message1' | translate}}</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"hidden\" formControlName=\"files\">\n                    <div class=\"dropzone dz-clickable\" #commentdropzone>\n                        <div class=\"dz-default dz-message\">\n                            <span><strong>{{'comments.create.error_messages.message2' | translate}}</strong></span>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <!-- Comments lists -->\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <accordion [closeOthers]=\"oneAtATime\">\n                <ng-container *ngFor=\"let comment of comments\">\n                    <accordion-group [panelClass]=\"customClass\">\n                        <button class=\"btn btn-link btn-block d-lg-flex justify-content-between\" accordion-heading type=\"button\">\n                            <div class=\"\">\n                                <i class=\"fa fa-angle-down mr-1\"></i>\n                                <img src=\"../assets/img/profile_large.jpg\" alt=\"User profile\" class=\"img-sm rounded-circle\" *ngIf=\"!comment.user.avatar\" />\n                                <img src=\"{{apiUrl}}/uploads/profile/{{comment.user.avatar}}\" alt=\"User profile\" class=\"img-sm rounded-circle\" *ngIf=\"comment.user.avatar\" />\n                                <span class=\"ml-1\">{{comment.user.firstname}} {{comment.user.lastname}}</span>\n                            </div>\n                            <div class=\"text-dark pt-1\">{{comment.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}</div>\n                        </button>\n                       <div class=\"comment-text\">\n                            <inline-edit-textarea [name]=\"'comment'\" [fieldValue]=\"comment.comment\" [elementFor]=\"'common.comment' | translate\" [isRequired]=\"'true'\" (updateValue)=\"saveComments(comment, 'comment', $event);\"></inline-edit-textarea>\n                            <ul class=\"attachment_box\" *ngIf=\"comment.attachments\">\n                                <li *ngFor=\"let item of comment.attachments;let i = index; trackBy: i\">\n                                    <a target=\"_blank\" download=\"{{item.name}}\" href=\"{{apiUrl}}/uploads/project_attachment/{{item.file}}\"><span>{{item.name}}</span></a>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"comment-reply\">\n                            <a (click)=\"commentDelete(comment.id)\" *ngIf=\"permissions.edit_delete_permission.delete\" class=\"text-danger\">{{'common.remove' | translate}}</a>\n                        </div>\n                    </accordion-group>\n                </ng-container>\n            </accordion>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-defects/project-defects.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-defects/project-defects.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t<h4 class=\"main-title\"><span>{{'defects.title' | translate}}</span></h4>\n\t<div class=\"card-buttons\">\n\t\t<a [routerLink]=\"['/defects/create']\" *ngxPermissionsOnly=\"['defects_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n\t</div>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" class=\"table table-bordered table-hover b4-datatable\" id=\"defects_table\" width=\"100%\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>{{'defects.columns.id' | translate}}</th>\n\t\t\t\t\t\t\t<th>{{'defects.columns.defect_name' | translate}}</th>\n\t\t\t\t\t\t\t<th>{{'defects.columns.start_date' | translate}}</th>\n\t\t\t\t\t\t\t<th>{{'defects.columns.end_date' | translate}}</th>\n\t\t\t\t\t\t\t<th>{{'defects.columns.assigned' | translate}}</th>\n\t\t\t\t\t\t\t<th>{{'defects.columns.severity' | translate}}</th>\n\t\t\t\t\t\t\t<th>{{'defects.columns.status' | translate}}</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let defect of project.defects\">\n\t\t\t\t\t\t\t<td><a [routerLink]=\"['/defects/detail', defect.id]\" tooltip=\"{{'common.view' | translate}}\">{{defect.generated_id}}</a></td>\n\t\t\t\t\t\t\t<td>{{defect.defect_name}}</td>\n\t\t\t\t\t\t\t<td>{{defect.start_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n\t\t\t\t\t\t\t<td>{{defect.end_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n\t\t\t\t\t\t\t<td class=\"people-lists\">\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"defect.assign_user == null; else elseBlock;\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t<ng-template #elseBlock>\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', defect.assign_user.id]\" class=\"btn btn-profile-danger rounded-circle text-dark\" tooltip=\"{{defect.assign_user.firstname}} {{defect.assign_user.lastname}}\" placement=\"top\">\n                                        <img *ngIf=\"defect.assign_user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{defect.assign_user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                        <img *ngIf=\"!defect.assign_user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    </a>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ('defects.severities' | translate)\">\n\t\t\t\t\t\t\t\t\t<span class=\"{{status.class}}\" *ngIf=\"status.id == defect.severity\">{{status.label}}</span>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ('defects.status' | translate)\">\n\t\t\t\t\t\t\t\t\t<span class=\"{{status.class}}\" *ngIf=\"status.id == defect.status\">{{status.label}}</span>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-details/project-details.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-details/project-details.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-content\">\n\t<div class=\"card-body\">\n\t\t<div class=\"row mr-0 ml-0\">\n\t\t\t<div class=\"col-md-12 card-separator\">\n\t\t\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t\t\t <div class=\"task-name d-lg-flex\">\n\t\t\t\t\t\t<h4 class=\"task-id\">\n\t\t\t\t\t\t\t<span>#{{project.generated_id}}  </span>\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t<p class=\"task-title ml-lg-2\">\n\t\t\t\t\t\t  {{project.project_name}}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"task-action d-flex\">\n\t\t\t\t\t\t<a *ngIf=\"permissions.edit_delete_permission.edit\" [routerLink]=\"['/projects/edit', project.id]\" class=\"btn btn-create mb-2 mb-lg-0 float-right\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12 pr-0 pl-0 \">\n\t\t\t\t<form class=\"form-body overflow-hidden mt-3\">\n\t\t\t\t\t<!-- Detail fields -->\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t <div class=\"col-lg-4 pr-lg-3 pl-lg-2 pr-2 pl-2\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col card-separator mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.version' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{project.project_version}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.status' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"status-dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permissions.edit_delete_permission.edit; else elseBlock11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle id=\"button-basic\" type=\"button\" class=\"btn dropdown-toggle select-btn-lg\" aria-controls=\"dropdown-basic\">{{getTranslateStatus(project.status) | translate}}&nbsp;<span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngFor=\"let status of ('projects.status' | translate)\"><a class=\"dropdown-item btn btn-sm {{status.class}}\" [ngClass]=\"{'active': project.status == status.id}\" (click)=\"changeProjectStatus([project.id], status);project.status = status.id\">{{status.label}}</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock11>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ('projects.status' | translate)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"budges-status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"{{status.class}}\" *ngIf=\"status.id == project.status\">{{status.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.created_by' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"people-lists\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', project.created_user.id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{project.created_user.firstname}} {{project.created_user.lastname}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"project.created_user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{project.created_user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!project.created_user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"ml-1\">{{project.created_user.firstname}} {{project.created_user.lastname}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.assigned_group' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"project.team\">{{ project.team.team_name }}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.assigned_To' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"people-lists\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"project.assign_members == 'Unassign' || project.assign_members == '' || project.assign_members == null; else elseBlock3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', member.id]\" tooltip=\"{{member.firstname}} {{member.lastname}}\" class=\"btn rounded-circle text-dark\" placement=\"top\" *ngFor=\"let member of project.assign_members index as i; odd as isOdd; even as isEven\" [ngClass]=\"{'btn-profile-info popover-item': isOdd, 'btn-profile-danger': isEven, 'popover-item': i!=0}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"member.avatar\" src=\"{{apiUrl}}/uploads/profile/{{member.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!member.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.progress' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<progressbar max=\"100\" [value]=\"project.progress\" [animate]=\"true\"><strong>{{project.progress}}%</strong></progressbar>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 card-separator\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\" *ngIf=\"!loginUser.is_client\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.client_name' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permissions.edit_delete_permission.edit; else elseBlock4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-select [name]=\"'firstname'\" [elementFor]=\"'projects.inline_edit.client' | translate\" [txtField]=\"'client_id'\" [selectedValue]=\"project.client_id\" [isRequired]=\"'true'\" [options]=\"clients\" (updateValue)=\"saveProjectDetail('client_id', $event);\"></inline-edit-select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"project.clients\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ project.clients.firstname}} {{project.clients.lastname}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.start_date' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permissions.edit_delete_permission.edit; else elseBlock5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-date [name]=\"'start_date'\" [elementFor]=\"'projects.inline_edit.start_date' | translate\" [fieldValue]=\"project.start_date\" [format]=\"loginUser.settings.date_format\" [isRequired]=\"'true'\" [datepickerConfigs]=\"datepickerConfigs\" (updateValue)=\"saveProjectDetail('start_date', $event);\"></inline-edit-date>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ project.start_date | dateTimeFormatFilter: loginUser.settings.date_format }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.end_date' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permissions.edit_delete_permission.edit; else elseBlock6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-date [name]=\"'end_date'\" [elementFor]=\"'projects.inline_edit.end_date' | translate\" [fieldValue]=\"project.end_date\" [isRequired]=\"'true'\" [datepickerConfigs]=\"datepickerConfigs\" [format]=\"loginUser.settings.date_format\" (updateValue)=\"saveProjectDetail('end_date', $event);\"></inline-edit-date>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ project.end_date | dateTimeFormatFilter: loginUser.settings.date_format }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.estimate_hours' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permissions.edit_delete_permission.edit; else elseBlock7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-hours [name]=\"'estimated_hours'\" [elementFor]=\"'projects.inline_edit.estimate_hours' | translate\" [fieldValue]=\"project.estimated_hours\" [isRequired]=\"'false'\" (updateValue)=\"saveProjectDetail('estimated_hours', $event);\"></inline-edit-hours>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock7>{{ project.estimated_hours}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.actual_hours' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{project.actual_hours}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.demo_URL' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permissions.edit_delete_permission.edit; else elseBlock8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-input [type]=\"'text'\" [name]=\"'demo_url'\" [elementFor]=\"'projects.inline_edit.demo_url' | translate\" [fieldValue]=\"project.demo_url\" [pattern]=\"'(https?://)?([\\\\da-z.-]+)\\\\.([a-z.]{2,6})[/\\\\w .-]*/?'\" [isRequired]=\"'true'\" (updateValue)=\"saveProjectDetail('demo_url', $event);\"></inline-edit-input>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock8>{{ project.demo_url }}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.billing_type' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permissions.edit_delete_permission.edit; else elseBlock9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-select [name]=\"'label'\" [txtField]=\"'billing_type'\" [elementFor]=\"'projects.inline_edit.billing_type' | translate\" [selectedValue]=\"project.billing_type\" [isRequired]=\"'true'\" [options]=\"('projects.billing_types' | translate)\" (updateValue)=\"saveProjectDetail('billing_type', $event);\"></inline-edit-select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock9>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let type of ('projects.billing_types' | translate)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"project.billing_type == type.id\">{{type.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.budget' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permissions.edit_delete_permission.edit; else elseBlock10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-input [name]=\"'price_rate'\" [type]=\"'text'\" [elementFor]=\"'projects.inline_edit.budget' | translate\" [pattern]=\"'^[0-9]+(\\.[0-9]{1,2})?$'\" [fieldValue]=\"project.price_rate\" [isRequired]=\"'false'\" (updateValue)=\"saveProjectDetail('price_rate', $event);\"></inline-edit-input>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock10>{{project.price_rate}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'common.created' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{project.created_at | dateTimeFormatFilter : loginUser.settings.date_time_format}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{'common.updated' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{project.updated_at | dateTimeFormatFilter : loginUser.settings.date_time_format}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-lg-8\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<!-- Description field -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 description-detail mb-3 card-separator\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"sub-title\"><span>{{'projects.details.title2' | translate}}</span></h4>\n\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permissions.edit_delete_permission.edit; else elseBlock1\">\n\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-text-editor [name]=\"'description'\" [fieldValue]=\"project.description\" [elementFor]=\"'projects.inline_edit.description' | translate\" (updateValue)=\"saveProjectDetail('description', $event);\"></inline-edit-text-editor>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock1>\n\t\t\t\t\t\t\t\t\t\t\t\t<p [innerHtml]=\"project.description\"></p>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- Custom fields -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 card-separator mb-3\" *ngIf=\"project.custom_fields.length > 0\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"sub-title\"><span>{{'projects.details.title1' | translate}}</span></h4>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let customField of project.custom_fields\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-6 mt-2\" *ngIf=\"customField.field_type != 'textarea'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"customField.field_type == 'text' || customField.field_type == 'numeric'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{customField.field_label}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{project[customField.field_column]}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"customField.field_type == 'date'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{customField.field_label}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{project[customField.field_column] | dateTimeFormatFilter: loginUser.settings.date_format}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"customField.field_type == 'dropdown'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{customField.field_label}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let fieldValue of getParseArray(customField.default_value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"fieldValue.value == project[customField.field_column]\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{fieldValue.label}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"customField.field_type == 'checkbox'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{customField.field_label}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"project[customField.field_column] == 1; else checkboxElseBlock\">{{'common.true' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #checkboxElseBlock>{{'common.false' | translate}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let customField of project.custom_fields\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-6 mt-2\" *ngIf=\"customField.field_type == 'textarea'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{customField.field_label}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">{{project[customField.field_column]}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- Todos list -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 card-separator mb-3\">\n\t\t\t\t\t\t\t\t\t\t<app-todo-detail [module_id]=\"1\" [module_related_id]=\"project.id\"></app-todo-detail>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- Tab Design -->\n\t\t\t\t\t\t\t\t\t<tabset class=\"nav nav-tabs d-flex justify-content-left details-tabs col-md-12 p-0\">\n\t\t\t\t\t\t\t\t\t\t<tab customClass=\"text-left\" class=\"card-separator mb-3\" id=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template tabHeading>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex\"><i class=\"fa fa-comments-o\"></i><span class=\"m-1\">{{'comments.title' | translate}}</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<!-- Task Comment -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 pr-0 pl-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-project-comments [permissions]=\"permissions\" [apiUrl]=\"apiUrl\" [loginUser]=\"loginUser\"></app-project-comments>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t\t\t\t<tab customClass=\"text-left\" class=\"card-separator mb-3\" id=\"2\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template tabHeading>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex\"><i class=\"fa fa-paperclip\"></i><span class=\"m-1\">{{'attachments.title' | translate}}</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<!-- Task Attachment -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 pr-0 pl-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-project-attachments [project]=\"project\" [loginUser]=\"loginUser\" [permissions]=\"permissions\" [apiUrl]=\"apiUrl\"></app-project-attachments>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t\t\t\t<tab customClass=\"text-left\" class=\"card-separator mb-3 tab-width\" id=\"3\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template tabHeading>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex\"><i class=\"fa fa-sticky-note-o\"></i><span class=\"m-1\">{{'notes.title' | translate}}</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<!-- Notes -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 pt-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"permissions.edit_delete_permission.edit; else elseBlock2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-text-editor [name]=\"'notes'\" [fieldValue]=\"project.notes\" [elementFor]=\"'projects.inline_edit.notes' | translate\" (updateValue)=\"saveProjectDetail('notes', $event);\"></inline-edit-text-editor>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock2></ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t\t\t\t<tab customClass=\"text-left\" class=\"card-separator mb-3\" id=\"4\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template tabHeading>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex\"><i class=\"fa fa-list\"></i><span class=\"m-1\">{{'activities.title' | translate}}</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<app-project-activities [project]=\"project\" [loginUser]=\"loginUser\" [apiUrl]=\"apiUrl\"></app-project-activities>\n\t\t\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t\t\t</tabset>\n\t\t\t\t\t\t\t\t\t<!-- Tab Design End -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t   \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-import/project-import.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-import/project-import.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-product-hunt modal-icon\" aria-hidden=\"true\"></i>&nbsp;{{'projects.title3' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" (click)=\"onCancel()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<span class=\"text-danger\">{{'projects.budges.csv_file' | translate}}</span><br><br>\n\t\t\t\t\t\t<label>{{'projects.create.fields.csv_file' | translate}} <span class=\"text-danger\">*</span></label><br>\n\t\t\t\t\t\t<input id=\"file\" class=\"mb-3 btn btn-secondary\" type=\"file\" accept=\".csv\" (change)=\"fileUpload($event.target.files)\">\n\t\t\t\t\t\t<div *ngIf=\"!csvFileSelected && isFormSubmitted\" class=\"text-danger\">{{'projects.create.error_messages.message16' | translate}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button class=\"btn btn-submit mb-0\" (click)=\"onSubmit()\">{{'common.import' | translate}}</button>\n\t</div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-tasks/project-tasks.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-tasks/project-tasks.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t<h4 class=\"main-title \"><span>{{'tasks.title' | translate }}</span></h4>\n\t<div class=\"card-buttons\">\n\t\t<a [routerLink]=\"['/tasks/create']\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'tasks_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n\t</div>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable \" id=\"task_datatable\" width=\"100%\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>{{'tasks.columns.id' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{'tasks.columns.task_name' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{'tasks.columns.start_date' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{'tasks.columns.end_date' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{'tasks.columns.assigned' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{'tasks.columns.priority' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{'tasks.columns.status' | translate }}</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let task of project.tasks\">\n\t\t\t\t\t\t\t<td><a [routerLink]=\"['/tasks/detail', task.id]\" tooltip=\"{{'common.view' | translate}}\">{{task.generated_id}}</a></td>\n\t\t\t\t\t\t\t<td>{{task.name}}</td>\n\t\t\t\t\t\t\t<td>{{task.task_start_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n\t\t\t\t\t\t\t<td>{{task.task_end_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n\t\t\t\t\t\t\t<td class=\"people-lists\">\n                                <ng-container *ngIf=\"task.assign_user == null; else elseBlock\">\n                                    <a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n                                        <img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    </a>\n                                </ng-container>\n                                <ng-template #elseBlock>\n                                    <a [routerLink]=\"['/users/profile', task.assign_user.id]\" class=\"btn btn-profile-danger rounded-circle text-dark\" tooltip=\"{{task.assign_user.firstname}} {{task.assign_user.lastname}}\" placement=\"top\">\n                                        <img *ngIf=\"task.assign_user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{task.assign_user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                        <img *ngIf=\"!task.assign_user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    </a>\n                                </ng-template>\n                            </td>\n\t\t\t\t\t\t\t<td class=\"budges-status\">\n                                <ng-container *ngFor=\"let priority of ('tasks.priorities' | translate)\">\n                                    <div class=\"budges-status\">\n                                        <span class=\"{{priority.class}}\" *ngIf=\"priority.id == task.priority\">{{priority.label}}</span>\n                                    </div>\n                                </ng-container>\n                            </td>\n\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ('tasks.status' | translate)\">\n\t\t\t\t\t\t\t\t\t<span class=\"{{status.class}}\" *ngIf=\"status.id == task.status\">{{status.label}}</span>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-timesheet-edit-modal/project-timesheet-edit-modal.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-timesheet-edit-modal/project-timesheet-edit-modal.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>&nbsp;{{'timesheet.create.title2' | translate}}</h2>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsEditRoleModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"editTimesheetForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"modal-body\">\n        <div class=\"form-body\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.start_time.errors }\">\n                        <label for=\"start_time\">{{'timesheet.create.fields.start_time' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                        <div class=\"position-relative has-icon-left\">\n                            <owl-date-time #startDT></owl-date-time>\n                            <input class=\"form-control\" [owlDateTimeTrigger]=\"startDT\" [owlDateTime]=\"startDT\" formControlName=\"start_time\" id=\"start_time\" placeholder=\"{{'timesheet.create.placeholders.placeholder1' | translate}}\" aria-describedby=\"inputGroupPrepend1\" (dateTimeChange)=\"startTimeChange($event)\" />\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n                        </div>\n                        <div *ngIf=\"isFormSubmitted && timesheetControl.start_time.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"timesheetControl.start_time.errors.required\">{{'timesheet.create.error_messages.message1' | translate}}</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.end_time.errors }\">\n                        <label for=\"end_time\">{{'timesheet.create.fields.end_time' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                        <div class=\"position-relative has-icon-left\">\n                            <owl-date-time #endDT></owl-date-time>\n                            <input class=\"form-control\" [owlDateTimeTrigger]=\"endDT\" [owlDateTime]=\"endDT\" [min]=\"editTimesheetForm.get('start_time').value\" formControlName=\"end_time\" id=\"end_time\" placeholder=\"{{'timesheet.create.placeholders.placeholder2' | translate}}\" aria-describedby=\"inputGroupPrepend2\" />\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n                        </div>\n                        <div *ngIf=\"isFormSubmitted && timesheetControl.end_time.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"timesheetControl.end_time.errors.required\">{{'timesheet.create.error_messages.message2' | translate}}</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                        <label for=\"note\">{{'timesheet.create.fields.note' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                        <textarea class=\"form-control\" formControlName=\"note\" id=\"note\" placeholder=\"{{'timesheet.create.placeholders.placeholder3' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.note.errors }\"></textarea>\n                        <div *ngIf=\"isFormSubmitted && timesheetControl.note.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"timesheetControl.note.errors.required\">{{'timesheet.create.error_messages.message4' | translate}}</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n        <button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.update' | translate}}</button>\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-timesheet/project-timesheet.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-timesheet/project-timesheet.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card \">\n                <div class=\"card-header pt-1 pl-0 pr-0 border-bottom\">\n                    <h4 class=\"main-title\"><span>{{'timesheet.title' | translate}}</span></h4>\n                </div>\n                <!-- Card content -->\n                <div class=\"card-content pt-3\">\n                    <!-- Card body -->\n                    <div class=\"card-body\">\n                        <!-- Timesheet list datatable -->\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                                    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"timesheets_table\">\n                                        <thead>\n                                            <tr>\n                                                <th class=\"width-30\">{{'timesheet.columns.user' | translate}}</th>\n                                                <th>{{'timesheet.columns.entry' | translate}}</th>\n                                                <th class=\"width-150\">{{'timesheet.columns.note' | translate}}</th>\n                                                <th class=\"width-75\">{{'timesheet.columns.start_time' | translate}}</th>\n                                                <th class=\"width-75\">{{'timesheet.columns.end_time' | translate}}</th>\n                                                <th class=\"width-50\">{{'timesheet.columns.time_h' | translate}}</th>\n                                                <th class=\"width-50\">{{'timesheet.columns.actions' | translate}}</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody *ngIf=\"timesheets?.length != 0\">\n                                            <tr *ngFor=\"let timesheet of timesheets; index as i\">\n                                                <td class=\"people-lists\">\n                                                    <a [routerLink]=\"['/users/profile', timesheet.user.id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{timesheet.user.firstname}} {{timesheet.user.lastname}}\">\n                                                        <img *ngIf=\"timesheet.user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{timesheet.user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                        <img *ngIf=\"!timesheet.user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                    </a>\n                                                </td>\n                                                <td>\n                                                    <ng-container *ngIf=\"timesheet.module_id == 2\">\n                                                        <a [routerLink]=\"['/tasks/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.task_generated_id}} - {{timesheet.task_name}}</a>\n                                                    </ng-container>\n                                                    <ng-container *ngIf=\"timesheet.module_id == 3\">\n                                                        <a [routerLink]=\"['/defects/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.defect_generated_id}} - {{timesheet.defect_name}}</a>\n                                                    </ng-container>\n                                                    <ng-container *ngIf=\"timesheet.module_id == 4\">\n                                                        <a [routerLink]=\"['/incidents/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.incident_generated_id}} - {{timesheet.incident_name}}</a>\n                                                    </ng-container>\n                                                    <ng-container *ngIf=\"timesheet.module_id == 5\">\n                                                        <a [routerLink]=\"['/meetings/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.module_related_id}} - {{timesheet.meeting_title}}</a>\n                                                    </ng-container>\n                                                    <ng-container *ngIf=\"timesheet.module_id == 6\">-</ng-container>\n                                                </td>\n                                                <td>\n                                                    <ng-container *ngIf=\"getCheckPermission(timesheet) else elseBlock;\">\n                                                        <inline-edit-textarea [name]=\"'note'\" [fieldValue]=\"timesheet.note\" [elementFor]=\"'timesheet.inline_edit.note' | translate\" [isRequired]=\"'false'\" (updateValue)=\"saveTimesheetDetail(i, 'note', $event);\"></inline-edit-textarea>\n                                                    </ng-container>\n                                                    <ng-template #elseBlock>{{timesheet.note}}</ng-template>\n                                                </td>\n                                                <td>{{timesheet.start_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\n                                                <td>{{timesheet.end_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\n                                                <td>{{timesheet.hour_time}}</td>\n                                                <td class=\"actions-dropdown\">\n                                                    <div class=\"btn-group\" dropdown>\n                                                        <button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n                                                        <ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n                                                            <li role=\"menuitem\" *ngIf=\"getCheckPermission(timesheet)\">\n                                                                <a (click)=\"editTimesheet(timesheet)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n                                                            </li>\n                                                            <li role=\"menuitem\" *ngIf=\"getCheckPermission(timesheet)\">\n                                                                <a (click)=\"deleteTimesheet(timesheet.id)\" class=\"dropdown-item btn btn-danger btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n                                                            </li>\n                                                        </ul>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                        <tfoot *ngIf=\"timesheets?.length == 0\" class=\"tfoot_dt\">\n                                            <tr>\n                                                <td colspan=\"7\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n                                            </tr>\n                                        </tfoot>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/projects-incidents/projects-incidents.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/projects-incidents/projects-incidents.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t<h4 class=\"main-title\"><span>{{'incidents.title' | translate }}</span></h4>\n\t<div class=\"card-buttons\">\n\t\t<a [routerLink]=\"['/incidents/create']\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'incidents_create']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n\t</div>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12 mb-3\">\n\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" class=\"table table-bordered table-hover b4-datatable b4_tooltip\" id=\"incident_datatable\" width=\"100%\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>{{'incidents.columns.id' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{'incidents.columns.incident_name' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{'incidents.columns.start_date' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{'incidents.columns.end_date' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{'incidents.columns.assigned' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{'incidents.columns.priority' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{'incidents.columns.status' | translate }}</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let incident of project.incidents\">\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['/incidents/detail', incident.id]\" tooltip=\"{{'common.view' | translate}}\">{{incident.generated_id}}</a>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>{{incident.incident_name}}</td>\n\t\t\t\t\t\t\t<td>{{incident.start_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n\t\t\t\t\t\t\t<td>{{incident.end_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n\t\t\t\t\t\t\t<td class=\"people-lists\">\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"incident.assign_user == null; else elseBlock1\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t<ng-template #elseBlock1>\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', incident.assign_user.id]\" class=\"btn btn-profile-danger rounded-circle text-dark\" tooltip=\"{{incident.assign_user.firstname}} {{incident.assign_user.lastname}}\" placement=\"top\">\n                                        <img *ngIf=\"incident.assign_user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{incident.assign_user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                        <img *ngIf=\"!incident.assign_user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    </a>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ('incidents.priorities' | translate)\">\n\t\t\t\t\t\t\t\t\t<span class=\"{{status.class}}\" *ngIf=\"status.id == incident.priority\">{{status.label}}</span>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ('incidents.status' | translate)\">\n\t\t\t\t\t\t\t\t\t<span class=\"{{status.class}}\" *ngIf=\"status.id == incident.status\">{{status.label}}</span>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/pages/project-create/project-create.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/pages/project-create/project-create.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\">\n\t<form [formGroup]=\"createProjectForm\" (ngSubmit)=\"onSubmit()\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t<h4 class=\"card-title\">{{'projects.title1' | translate}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-zap\" aria-hidden=\"true\"></i>{{'projects.headings.head1' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"project_name\">{{'projects.create.fields.project_name' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"project_name\" id=\"project_name\" placeholder=\"{{'projects.create.placeholders.placeholder1' | translate }}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.project_name.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.project_name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.project_name.errors.required\">{{'projects.create.error_messages.message1' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.project_name.errors.maxlength\">{{'projects.create.error_messages.message2' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"project_version\">{{'projects.create.fields.version' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.create.placeholders.placeholder2' | translate }}\" formControlName=\"project_version\" id=\"project_version\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.project_version.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.project_version.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.project_version.errors.required\">{{'projects.create.error_messages.message3' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.project_version.errors.pattern\">{{'projects.create.error_messages.message4' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-secondary\">{{'projects.budges.version' | translate }}: 1.0, 1.1, 1.2</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\" *ngIf=\"!loginUser.is_client\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"client_id\">{{'projects.create.fields.client_name' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"clients\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"client_id\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"client_id\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'projects.create.placeholders.placeholder3' | translate }}\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"assign_to\">{{'projects.create.fields.assigned_group' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"teams\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"team_name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"assign_to\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"assign_to\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'projects.create.placeholders.placeholder5' | translate }}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"assignGroupChange($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"assign_members\">{{'projects.create.fields.assigned_To' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"teamsMembers\"\n\t\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"assign_members\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"assign_members\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'projects.create.placeholders.placeholder6' | translate }}\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">{{item.firstname}} {{item.lastname}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.demo_url.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"demo_url\">{{'projects.create.fields.demo_URL' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"https://example.com\" formControlName=\"demo_url\" id=\"demo_url\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.demo_url.errors }\"/>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.demo_url.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.demo_url.errors.pattern\">{{'projects.create.error_messages.message8' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.status.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"status\">{{'projects.create.fields.status' | translate }}&nbsp;<span class=\"text-danger\">*</span> </label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"('projects.status' | translate)\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"status\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"status\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'projects.create.placeholders.placeholder4' | translate }}\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.status.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.status.errors.required\">{{'projects.create.error_messages.message6' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n                                    <div class=\"col-md-12\" *ngIf=\"createProjectForm.get('billing_type').value == 1 || createProjectForm.get('billing_type').value == 2 || createProjectForm.get('billing_type').value == null\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group fixed_rate\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- <label for=\"price_rate\" *ngIf=\"createProjectForm.get('billing_type').value == 1 || createProjectForm.get('billing_type').value == null\">{{'projects.create.fields.fixed_price' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"price_rate\" *ngIf=\"createProjectForm.get('billing_type').value == 2\">{{'projects.create.fields.hourly_rate' | translate }}</label> -->\n                                            <label for=\"price_rate\">{{'projects.create.fields.input_cost' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.create.placeholders.placeholder10' | translate }}\" formControlName=\"price_rate\" id=\"price_rate\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.price_rate.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.price_rate.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.price_rate.errors.minlength\">{{'projects.create.error_messages.message12' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.price_rate.errors.pattern\">{{'projects.create.error_messages.message13' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n            <div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">&nbsp;</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-calendar\"></i> {{'projects.headings.head2' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.start_date.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"start_date\">{{'projects.create.fields.start_date' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" (bsValueChange)=\"startDateChange($event)\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'projects.create.placeholders.placeholder7' | translate }}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.start_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.start_date.errors.required\">{{'projects.create.error_messages.message9' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.end_date.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"end-date\">{{'projects.create.fields.end_date' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp2=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" [minDate]=\"createProjectForm.get('start_date').value\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'projects.create.placeholders.placeholder8' | translate }}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.end_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.end_date.errors.required\">{{'projects.create.error_messages.message10' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">&nbsp;</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-box\"></i> {{'projects.headings.head3' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"type\">{{'projects.create.fields.billing_type' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"('projects.billing_types' | translate)\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"billing_type\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"billing_type\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'projects.create.placeholders.placeholder9' | translate }}\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" *ngIf=\"createProjectForm.get('billing_type').value == 1 || createProjectForm.get('billing_type').value == 2 || createProjectForm.get('billing_type').value == null\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group fixed_rate\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"price_rate\" *ngIf=\"createProjectForm.get('billing_type').value == 1 || createProjectForm.get('billing_type').value == null\">{{'projects.create.fields.fixed_price' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"price_rate\" *ngIf=\"createProjectForm.get('billing_type').value == 2\">{{'projects.create.fields.hourly_rate' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.create.placeholders.placeholder10' | translate }}\" formControlName=\"price_rate\" id=\"price_rate\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.price_rate.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.price_rate.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.price_rate.errors.minlength\">{{'projects.create.error_messages.message12' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.price_rate.errors.pattern\">{{'projects.create.error_messages.message13' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"estimated_hours\">{{'projects.create.fields.estimate_hours' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type='text' class=\"form-control\" formControlName=\"estimated_hours\" placeholder=\"00:00\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.estimated_hours.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.estimated_hours.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.estimated_hours.errors.pattern\">{{'projects.create.error_messages.message11' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"project_hours\">{{'projects.create.fields.project_hours' | translate }}</label><br>\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check checkbox-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" formControlName=\"project_hours\" id=\"project_hours\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" *ngIf=\"!createProjectForm.get('project_hours').value\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.progress' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng5-slider [options]=\"progressOptions\" formControlName=\"progress\"></ng5-slider>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.project_logo' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"hidden\" formControlName=\"project_logo\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropzone dz-clickable\" #logodropzone>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dz-default dz-message\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span><strong>{{'projects.create.error_messages.message14' | translate }}</strong></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"people-lists text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a *ngFor=\"let logo of logos;\" (click)=\"setLogos(logo)\" [ngClass]=\"{active: isActive(logo)}\" class=\"btn btn-profile-info rounded-circle text-dark\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/project/{{logo}}\" class=\"img-sm rounded-circle\" alt=\"Project Logo\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div> -->\n\t\t\t<div class=\"col-md-12\" *ngIf=\"customFields.length > 0\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-star\"></i>{{'projects.headings.head4' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<app-show-custom-field-element [formArray]=\"'custom_field'\"\n\t\t\t\t\t\t\t\t\t\t\t[controls]=\"createProjectForm.get('custom_field')\"\n\t\t\t\t\t\t\t\t\t\t\t[customFields]=\"customFields\"\n\t\t\t\t\t\t\t\t\t\t\t[isFormSubmitted]=\"isFormSubmitted\"\n\t\t\t\t\t\t\t\t\t\t\t[formName]=\"createProjectForm\">\n\t\t\t\t\t\t\t\t\t\t</app-show-custom-field-element>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-book\"></i>{{'projects.headings.head5' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"description\">{{'projects.create.fields.description' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t<app-ngx-editor [config]=\"editorConfig\"\n\t\t\t\t\t\t\t\t\t\t\t[placeholder]=\"'projects.create.placeholders.placeholder11' | translate\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"description\"\n\t\t\t\t\t\t\t\t\t\t\tid=\"description\">\n\t\t\t\t\t\t\t\t\t\t</app-ngx-editor>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 text-right pt-3\">\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/projects']\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate }}</a>\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.create' | translate }}</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/pages/project-detail/project-detail.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/pages/project-detail/project-detail.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"detail-page\">\n    <div class=\"card bg-transparent\" *ngIf=\"isPageLoaded\">\n        <tabset class=\"nav nav-tabs d-flex justify-content-center p-0\">\n            <tab customClass=\"text-left\" id=\"1\" (selectTab)=\"setActiveProjectTab($event)\">\n                <ng-template tabHeading>\n                    <div class=\"d-flex\"><i class=\"fa fa-info-circle\"></i><span class=\"mt-1 ml-1\">{{'common.details' | translate}}</span></div>\n                </ng-template>\n                <app-project-details [project]=\"project\" [loginUser]=\"loginUser\" [permissions]=\"permissions\" [apiUrl]=\"apiUrl\" *ngIf=\"getActiveProjectTab('1')\"></app-project-details>\n            </tab>\n            <tab customClass=\"text-left\" class=\"card-separator\" id=\"2\" (selectTab)=\"setActiveProjectTab($event)\">\n                <ng-template tabHeading>\n                    <div class=\"d-flex\"><i class=\"fa fa-calendar\"></i><span class=\"mt-1 ml-1\">{{'calendar.title' | translate}}</span></div></ng-template>\n                <app-project-calendar [project]=\"project\" [loginUser]=\"loginUser\" *ngIf=\"getActiveProjectTab('2')\"></app-project-calendar>\n            </tab>\n            <tab customClass=\"text-left\" class=\"card-separator\" id=\"3\" (selectTab)=\"setActiveProjectTab($event)\">\n                <ng-template tabHeading><div class=\"d-flex\"><i class=\"fa fa-tasks\"></i><span class=\"mt-1 ml-1\">{{'tasks.title' | translate}}</span></div></ng-template>\n                <app-project-tasks [project]=\"project\" [loginUser]=\"loginUser\" [apiUrl]=\"apiUrl\" *ngIf=\"getActiveProjectTab('3')\"></app-project-tasks>\n            </tab>\n            <tab customClass=\"text-left\" class=\"card-separator\" id=\"4\" (selectTab)=\"setActiveProjectTab($event)\">\n                <ng-template tabHeading><div class=\"d-flex\"><i class=\"fa fa-bug\"></i><span class=\"mt-1 ml-1\">{{'defects.title' | translate}}</span></div></ng-template>\n                <app-project-defects [project]=\"project\" [loginUser]=\"loginUser\" [apiUrl]=\"apiUrl\" *ngIf=\"getActiveProjectTab('4')\"></app-project-defects>\n            </tab>\n            <tab customClass=\"text-left\" class=\"card-separator\" id=\"5\" (selectTab)=\"setActiveProjectTab($event)\">\n                <ng-template tabHeading><div class=\"d-flex\"><i class=\"fa fa-ticket\"></i><span class=\"mt-1 ml-1\">{{'incidents.title' | translate}}</span></div></ng-template>\n                <app-projects-incidents [project]=\"project\" [loginUser]=\"loginUser\" [apiUrl]=\"apiUrl\" *ngIf=\"getActiveProjectTab('5')\"></app-projects-incidents>\n            </tab>\n            <tab customClass=\"text-left\" class=\"card-separator\" id=\"6\" (selectTab)=\"setActiveProjectTab($event)\">\n                <ng-template tabHeading><div class=\"d-flex\"><i class=\"fa fa-clock-o\"></i><span class=\"mt-1 ml-1\">{{'timesheet.title' | translate}}</span></div></ng-template>\n                <app-project-timesheet [project]=\"project\" [loginUser]=\"loginUser\" [apiUrl]=\"apiUrl\" *ngIf=\"getActiveProjectTab('6')\"></app-project-timesheet>\n            </tab>\n        </tabset>\n    </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/pages/project-edit/project-edit.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/pages/project-edit/project-edit.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\" *ngIf=\"isPageLoaded\">\n\t<form [formGroup]=\"editProjectForm\" (ngSubmit)=\"onSubmit()\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t<h4 class=\"card-title\">{{'projects.title2' | translate}} - #{{ project.generated_id }}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"fa ft-zap\" aria-hidden=\"true\"></i>{{'projects.headings.head1' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"project_name\">{{'projects.create.fields.project_name' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"project_name\" id=\"project_name\" placeholder=\"{{'projects.create.placeholders.placeholder1' | translate }}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.project_name.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.project_name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.project_name.errors.required\">{{'projects.create.error_messages.message1' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.project_name.errors.maxlength\">{{'projects.create.error_messages.message2' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"project_version\">{{'projects.create.fields.version' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.create.placeholders.placeholder2' | translate }}\" formControlName=\"project_version\" id=\"project_version\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.project_version.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-success\" *ngIf=\"oldVersion\">{{oldVersion}},</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-success\">{{'projects.budges.current_version' | translate }} {{currentVersion}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.project_version.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.project_version.errors.required\">{{'projects.create.error_messages.message3' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.project_version.errors.pattern\">{{'projects.create.error_messages.message4' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-secondary\">{{'projects.budges.version' | translate }}: 1.0, 1.1, 1.2</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\" *ngIf=\"!loginUser.is_client\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"client_id\">{{'projects.create.fields.client_name' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"clients\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"client_id\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"client_id\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'projects.create.placeholders.placeholder3' | translate }}\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"assign_to\">{{'projects.create.fields.assigned_group' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"teams\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"team_name\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"assign_to\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"assign_to\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'projects.create.placeholders.placeholder5' | translate }}\"\n\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"assignGroupChange($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.assign_to.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"assign_members\">{{'projects.create.fields.assigned_To' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"teamsMembers\"\n\t\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"teamsMembers\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"assign_members\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'projects.create.placeholders.placeholder6' | translate }}\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"demo_url\">{{'projects.create.fields.demo_URL' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"htttps //example.com\" formControlName=\"demo_url\" id=\"demo_url\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.demo_url.errors }\"/>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.demo_url.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.demo_url.errors.pattern\">{{'projects.create.error_messages.message8' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.status.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"status\">{{'projects.create.fields.status' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"('projects.status' | translate)\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"status\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"status\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'projects.create.placeholders.placeholder4' | translate }}\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.status.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.status.errors.required\">{{'projects.create.error_messages.message6' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-calendar\"></i> {{'projects.headings.head2' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.start_date.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"start_date\">{{'projects.create.fields.start_date' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp1=\"bsDatepicker\" (onHidden)=\"startDateChange($event)\" bsDatepicker [bsConfig]=\"datepickerConfig\" formControlName=\"start_date\" id=\"start_date\" placeholder=\"{{'projects.create.placeholders.placeholder7' | translate }}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.start_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.start_date.errors.required\">{{'projects.create.error_messages.message9' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.end_date.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"end-date\">{{'projects.create.fields.end_date' | translate }}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp2=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" formControlName=\"end_date\" id=\"end_date\" placeholder=\"{{'projects.create.placeholders.placeholder8' | translate }}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.end_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.end_date.errors.required\">{{'projects.create.error_messages.message10' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">&nbsp;</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-box\"></i> {{'projects.headings.head3' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"type\">{{'projects.create.fields.billing_type' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"('projects.billing_types' | translate)\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"billing_type\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"billing_type\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'projects.create.placeholders.placeholder9' | translate }}\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\" *ngIf=\"editProjectForm.get('billing_type').value == 1 || editProjectForm.get('billing_type').value == 2 || editProjectForm.get('billing_type').value == null \">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group fixed_rate\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"price_rate\" *ngIf=\"editProjectForm.get('billing_type').value == 1 || editProjectForm.get('billing_type').value == null\">{{'projects.create.fields.fixed_price' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"price_rate\" *ngIf=\"editProjectForm.get('billing_type').value == 2\">{{'projects.create.fields.hourly_rate' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.create.placeholders.placeholder10' | translate }}\" formControlName=\"price_rate\" id=\"price_rate\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.price_rate.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.price_rate.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.price_rate.errors.min\">{{'projects.create.error_messages.message12' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.price_rate.errors.pattern\">{{'projects.create.error_messages.message13' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"estimated_hours\">{{'projects.create.fields.estimate_hours' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type='text' class=\"form-control\" formControlName=\"estimated_hours\" placeholder=\"00:00\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && projectControl.estimated_hours.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && projectControl.estimated_hours.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"projectControl.estimated_hours.errors.pattern\">{{'projects.create.error_messages.message11' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"project_hours\">{{'projects.create.fields.project_hours' | translate }}</label><br>\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check checkbox-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" formControlName=\"project_hours\" id=\"project_hours\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" *ngIf=\"!editProjectForm.get('project_hours').value\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.progress' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng5-slider [options]=\"progressOptions\" formControlName=\"progress\"></ng5-slider>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>{{'projects.create.fields.project_logo' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"hidden\" formControlName=\"project_logo\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropzone dz-clickable\" #logodropzone>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dz-preview dz-image-preview\" *ngIf=\"isLogoLoaded && project.project_logo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dz-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/project/{{project.project_logo}}\" height=\"100\" width=\"100\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-sm btn-block\" (click)=\"removeDropzoneImage()\">{{ 'common.remove_file' | translate }}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dz-default dz-message\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span><strong>{{ 'projects.create.error_messages.message14' | translate }}</strong></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"people-lists text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a *ngFor=\"let logo of logos;\" (click)=\"setLogos(logo)\" [ngClass]=\"{active: isActive(logo)}\" class=\"btn btn-profile-info rounded-circle text-dark\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/project/{{logo}}\" class=\"img-sm rounded-circle\" alt=\"Project Logo\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\" *ngIf=\"customFields.length > 0\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-star\"></i>{{'projects.headings.head4' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<app-show-custom-field-element [formArray]=\"'custom_field'\"\n\t\t\t\t\t\t\t\t\t\t\t[controls]=\"editProjectForm.get('custom_field')\"\n\t\t\t\t\t\t\t\t\t\t\t[customFields]=\"customFields\"\n\t\t\t\t\t\t\t\t\t\t\t[isFormSubmitted]=\"isFormSubmitted\"\n\t\t\t\t\t\t\t\t\t\t\t[formName]=\"editProjectForm\">\n\t\t\t\t\t\t\t\t\t\t</app-show-custom-field-element>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-book\"></i>{{'projects.headings.head5' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"description\">{{'projects.create.fields.description' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t<app-ngx-editor [config]=\"editorConfig\" [placeholder]=\"'projects.create.placeholders.placeholder11' | translate\" formControlName=\"description\" id=\"description\"></app-ngx-editor>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 text-right\">\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/projects']\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate }}</a>\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.update' | translate }}</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/pages/project-list/project-list.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/pages/project-list/project-list.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card pl-2 pr-2 pb-2\">\n                <!-- Card header -->\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\n                    <h4 class=\"main-title mt-2\"><span>{{'projects.title' | translate}}</span></h4>\n                    <div class=\"card-buttons\">\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'projects_create']\" href=\"{{ apiUrl }}/csv/import_project.csv\" download=\"import_project.csv\" class=\"btn btn-create mb-0\" placement=\"top\" tooltip=\"{{'common.tooltip.project_csv_sample' | translate}}\"><i class=\"fa fa-files-o\"></i></a>\n                        <button class=\"btn btn-create mb-0\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'projects_create']\" (click)=\"openProjectImportModal()\" placement=\"top\" tooltip=\"{{'common.import' | translate}}\"><i class=\"fa fa-upload\"></i></button>\n                        <a class=\"btn btn-create mb-0\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'projects_create']\" [routerLink]=\"['/projects/create']\" placement=\"top\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n                    </div>\n                </div>\n                <!-- Card content -->\n                <div class=\"card-content pt-3\">\n                    <!-- Card body -->\n                    <div class=\"card-body\">\n                        <!-- Filter buttons -->\n                        <div class=\"row btn-filters mb-3\" *ngIf=\"isPageLoaded\">\n                            <div class=\"col-sm-12\">\n                                <button class=\"btn btn-raised open\" type=\"button\" [ngClass]=\"{ 'active': statusfilterId == 1 }\" (click)=\"filterByStatus(1)\">\n                                    <p>{{'common.status.open' | translate}}</p>\n                                    <span class=\"badge badge-light\">{{countStatus.open}}</span>\n                                </button>\n                                <button class=\"btn btn-raised in_progress\" type=\"button\" [ngClass]=\"{ 'active': statusfilterId ==2  }\" (click)=\"filterByStatus(2)\">\n                                    <p>{{'common.status.in_progress' | translate}}</p>\n                                    <span class=\"badge badge-light\">{{countStatus.inProgress}}</span>\n                                </button>\n                                <button class=\"btn btn-raised on_hold\" type=\"button\" [ngClass]=\"{ 'active': statusfilterId == 3 }\" (click)=\"filterByStatus(3)\">\n                                    <p>{{'common.status.on_hold' | translate}}</p>\n                                    <span class=\"badge badge-light\">{{countStatus.onHold}}</span>\n                                </button>\n                                <button class=\"btn btn-raised cancel\" type=\"button\" [ngClass]=\"{ 'active': statusfilterId == 4 }\" (click)=\"filterByStatus(4)\">\n                                    <p>{{'common.status.cancel' | translate}}</p>\n                                    <span class=\"badge badge-light\">{{countStatus.cancel}}</span>\n                                </button>\n                                <button class=\"btn btn-raised completed\" type=\"button\" [ngClass]=\"{ 'active': statusfilterId == 5 }\" (click)=\"filterByStatus(5)\">\n                                    <p>{{'common.status.completed' | translate}}</p>\n                                    <span class=\"badge badge-light\">{{countStatus.completed}}</span>\n                                </button>\n                                <button class=\"btn btn-raised overdue\" type=\"button\" [ngClass]=\"{ 'active': statusfilterId == 6 }\" (click)=\"filterByStatus(6)\">\n                                    <p>{{'common.status.overdue' | translate}}</p>\n                                    <span class=\"badge badge-light\">{{countStatus.overdue}}</span>\n                                </button>\n                                <!-- <button class=\"btn btn-raised btn-secondary\" type=\"button\" [ngClass]=\"{ 'active': statusfilterId == 0 }\" [routerLink]=\"['/projects']\">\n                                    <p>{{'common.status.total' | translate}}</p>\n                                    <span class=\"badge badge-light\">{{countStatus.all}}</span>\n                                </button> -->\n                            </div>\n                        </div>\n                        <!-- Project list datatable -->\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl overflow-x-auto\">\n                                    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"projects_table\">\n                                        <thead>\n                                            <tr>\n                                                <th width=\"25px\">{{'projects.columns.logo' | translate}}</th>\n                                                <th>{{'projects.columns.id' | translate}}</th>\n                                                <th>{{'projects.columns.project_name' | translate}}</th>\n                                                <th>{{'projects.columns.duration' | translate}}</th>\n                                                <th>{{'projects.columns.progress' | translate}}</th>\n                                                <th>{{'projects.columns.creator' | translate}}</th>\n                                                <th>{{'projects.columns.assigned_To' | translate}}</th>\n                                                <th>{{'projects.columns.status' | translate}}</th>\n                                                <th>{{'projects.columns.actions' | translate}}</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody *ngIf=\"projects?.length != 0\">\n                                            <tr *ngFor=\"let project of projects; index as i\">\n                                                <td class=\"text-center\">\n                                                    <img src=\"assets/img/logos/project-logo.png\" class=\"img-sm rounded-circle\" alt=\"Logo\" *ngIf=\"!project.project_logo\" />\n                                                    <img src=\"{{apiUrl}}/uploads/project/{{project.project_logo}}\" class=\"img-sm rounded-circle\" alt=\"Logo\" *ngIf=\"project.project_logo\" />\n                                                </td>\n                                                <td>\n                                                    <a [routerLink]=\"['/projects/detail', project.id]\" tooltip=\"{{'common.view' | translate}}\">{{project.generated_id}}</a>\n                                                </td>\n                                                <td>\n                                                    <ng-container *ngIf=\"getCheckPermission(project, 'edit') else elseBlock2;\">\n                                                        <inline-edit-input [name]=\"'project_name'\" [type]=\"'text'\" [elementFor]=\"'projects.inline_edit.project_name' | translate\" [fieldValue]=\"project.project_name\" [isRequired]=\"'true'\" (updateValue)=\"saveProjectDetail(i, 'project_name', $event);\"></inline-edit-input>\n                                                    </ng-container>\n                                                    <ng-template #elseBlock2>{{project.project_name}}</ng-template>\n                                                </td>\n                                                <td class=\"duration\">\n                                                    <p class=\"m-0\">{{'projects.columns.start' | translate}}: <strong>{{ project.start_date | dateTimeFormatFilter: this.loginUser.settings.date_format}}</strong></p>\n                                                    <p class=\"m-0\">{{'projects.columns.end' | translate}}: <strong>{{ project.end_date | dateTimeFormatFilter: this.loginUser.settings.date_format}}</strong></p>\n                                                </td>\n                                                <td class=\"completion\">\n                                                    <small>{{'projects.create.fields.progress' | translate}}:&nbsp;<strong>{{project.progress}}%</strong></small>\n                                                    <progressbar max=\"100\" [value]=\"project.progress\" [animate]=\"true\"></progressbar>\n                                                </td>\n                                                <td class=\"people-lists\">\n                                                    <a [routerLink]=\"['/users/profile', project.user_id]\" class=\"btn btn-profile-info rounded-circle\" placement=\"top\" tooltip=\"{{project.created_firstname}} {{project.created_lastname}}\">\n                                                        <img *ngIf=\"project.created_avatar\" src=\"{{apiUrl}}/uploads/profile/{{project.created_avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                        <img *ngIf=\"!project.created_avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                    </a>\n                                                </td>\n                                                <td class=\"people-lists\">\n                                                    <ng-container *ngIf=\"project.assign_members == 'Unassign' || project.assign_members == '' || project.assign_members == null; else elseBlock\">\n                                                        <a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle popover-item text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n                                                            <img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                        </a>\n                                                    </ng-container>\n                                                    <ng-template #elseBlock>\n                                                        <ng-container *ngFor=\"let user_id of project.assign_members | stringToArrayFilter index as i; odd as isOdd; even as isEven\">\n                                                            <a *ngIf=\"userLists[user_id]\" [routerLink]=\"['/users/profile', user_id]\" tooltip=\"{{userLists[user_id].firstname}} {{userLists[user_id].lastname}}\" class=\"btn rounded-circle popover-item text-dark\" [ngClass]=\"{'btn-profile-info': isOdd, 'btn-profile-danger': isEven}\">\n                                                                <img *ngIf=\"userLists[user_id].avatar\" src=\"{{apiUrl}}/uploads/profile/{{userLists[user_id].avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                                <img *ngIf=\"!userLists[user_id].avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                                            </a>\n                                                        </ng-container>\n                                                    </ng-template>\n                                                </td>\n                                                <td class=\"status-dropdown\">\n                                                    <div class=\"overdue-td\">\n                                                        <div>\n                                                            <ng-container *ngIf=\"getCheckPermission(project, 'edit') else elseBlock3;\">\n                                                                <div class=\"btn-group\" dropdown>\n                                                                    <button dropdownToggle id=\"button-basic\" type=\"button\" class=\"btn dropdown-toggle select-btn-lg\" aria-controls=\"dropdown-basic\">{{getTranslateStatus(project.status) | translate}}&nbsp;<span class=\"caret\"></span></button>\n                                                                    <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic\">\n                                                                        <li role=\"menuitem\" *ngFor=\"let status of ('projects.status' | translate)\"><a class=\"dropdown-item btn btn-sm {{status.class}}\" [ngClass]=\"{'active': project.status == status.id}\" (click)=\"changeProjectStatus([project.id], status);project.status = status.id\">{{status.label}}</a></li>\n                                                                    </ul>\n                                                                </div>\n                                                            </ng-container>\n                                                        </div>\n                                                        <div>\n                                                            <ng-template #elseBlock3>\n                                                                <ng-container *ngFor=\"let status of ('projects.status' | translate)\">\n                                                                    <div class=\"budges-status\">\n                                                                        <span class=\"{{status.class}}\" *ngIf=\"status.id == project.status\">{{status.label}}</span>\n                                                                    </div>\n                                                                </ng-container>\n                                                            </ng-template>\n                                                            <ng-container *ngIf=\"project.is_overdue\">\n                                                                <i class=\"fa fa-clock-o overdue-icon\" aria-hidden=\"true\" tooltip=\"{{'common.overdue' | translate}} : {{project.is_overdue}} {{'common.days' | translate}}\"></i>\n                                                            </ng-container>\n                                                        </div>\n                                                    </div>\n                                                </td>\n                                                <td class=\"actions-dropdown\">\n                                                    <div class=\"btn-group\" dropdown *ngIf=\"getCheckPermission(project, 'edit') || getCheckPermission(project, 'delete')\">\n                                                        <button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n                                                        <ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n                                                            <li role=\"menuitem\" *ngIf=\"getCheckPermission(project, 'edit')\">\n                                                                <a [routerLink]=\"['/projects/edit', project.id]\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n                                                            </li>\n                                                            <li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'projects_delete']\">\n                                                                <a (click)=\"deleteProject(project.id)\" class=\"dropdown-item btn btn-danger btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n                                                            </li>\n                                                        </ul>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                        <tfoot *ngIf=\"projects?.length == 0\" class=\"tfoot_dt\">\n                                            <tr>\n                                                <td colspan=\"9\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n                                            </tr>\n                                        </tfoot>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "./src/app/core/services/import-project.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/import-project.service.ts ***!
  \*********************************************************/
/*! exports provided: ImportProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportProjectService", function() { return ImportProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ImportProjectService = /** @class */ (function () {
    function ImportProjectService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ImportProjectService.prototype.create = function (importProject) {
        return this.http.post(this.apiUrl + "/api/projects/import", importProject);
    };
    ImportProjectService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ImportProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ImportProjectService);
    return ImportProjectService;
}());



/***/ }),

/***/ "./src/app/core/services/project-attachment.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/services/project-attachment.service.ts ***!
  \*************************************************************/
/*! exports provided: ProjectAttachmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAttachmentService", function() { return ProjectAttachmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ProjectAttachmentService = /** @class */ (function () {
    function ProjectAttachmentService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ProjectAttachmentService.prototype.getAllAttachmentById = function (projectId) {
        return this.http.get(this.apiUrl + "/api/project-attachment/" + projectId);
    };
    ProjectAttachmentService.prototype.create = function (projectAttachment) {
        return this.http.post(this.apiUrl + "/api/project-attachment", projectAttachment);
    };
    ProjectAttachmentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/project-attachment/" + id);
    };
    ProjectAttachmentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProjectAttachmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectAttachmentService);
    return ProjectAttachmentService;
}());



/***/ }),

/***/ "./src/app/core/services/project-comments.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/services/project-comments.service.ts ***!
  \***********************************************************/
/*! exports provided: ProjectCommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCommentsService", function() { return ProjectCommentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ProjectCommentsService = /** @class */ (function () {
    function ProjectCommentsService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ProjectCommentsService.prototype.create = function (projectComment) {
        return this.http.post(this.apiUrl + "/api/project-comment", projectComment);
    };
    ProjectCommentsService.prototype.update = function (projectComment) {
        return this.http.put(this.apiUrl + "/api/project-comment/" + projectComment.id, projectComment);
    };
    ProjectCommentsService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/project-comment/" + id);
    };
    ProjectCommentsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProjectCommentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectCommentsService);
    return ProjectCommentsService;
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

/***/ "./src/app/modules/pm/projects/components/create-attachment-modal/create-attachment-modal.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/create-attachment-modal/create-attachment-modal.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdHMvY29tcG9uZW50cy9jcmVhdGUtYXR0YWNobWVudC1tb2RhbC9jcmVhdGUtYXR0YWNobWVudC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/pm/projects/components/create-attachment-modal/create-attachment-modal.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/create-attachment-modal/create-attachment-modal.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: CreateAttachmentModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAttachmentModalComponent", function() { return CreateAttachmentModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_project_attachment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../../core/services/project-attachment.service */ "./src/app/core/services/project-attachment.service.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_9__);










var CreateAttachmentModalComponent = /** @class */ (function () {
    function CreateAttachmentModalComponent(translate, bsCreateAttachmentModalRef, formBuilder, route, router, toastr, projectAttachmentService) {
        this.translate = translate;
        this.bsCreateAttachmentModalRef = bsCreateAttachmentModalRef;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.projectAttachmentService = projectAttachmentService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isfileUploded = false;
        this.isfileLoaded = true;
    }
    CreateAttachmentModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.loadForms();
    };
    CreateAttachmentModalComponent.prototype.loadForms = function () {
        var _this_1 = this;
        this.createAttachmentForm = this.formBuilder.group({
            project_id: [this.projectId],
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
        new dropzone__WEBPACK_IMPORTED_MODULE_9__(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            // acceptedFiles: '*',
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
        this.projectAttachmentService.create(this.createAttachmentForm.value)
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
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_project_attachment_service__WEBPACK_IMPORTED_MODULE_8__["ProjectAttachmentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logodropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateAttachmentModalComponent.prototype, "logodropzone", void 0);
    CreateAttachmentModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-attachment-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-attachment-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/create-attachment-modal/create-attachment-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-attachment-modal.component.scss */ "./src/app/modules/pm/projects/components/create-attachment-modal/create-attachment-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_project_attachment_service__WEBPACK_IMPORTED_MODULE_8__["ProjectAttachmentService"]])
    ], CreateAttachmentModalComponent);
    return CreateAttachmentModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/projects/components/project-activities/project-activities.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/project-activities/project-activities.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdHMvY29tcG9uZW50cy9wcm9qZWN0LWFjdGl2aXRpZXMvcHJvamVjdC1hY3Rpdml0aWVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pm/projects/components/project-activities/project-activities.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/project-activities/project-activities.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProjectActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectActivitiesComponent", function() { return ProjectActivitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectActivitiesComponent = /** @class */ (function () {
    function ProjectActivitiesComponent() {
        this.scrollConfig = {};
    }
    ProjectActivitiesComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectActivitiesComponent.prototype, "project", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectActivitiesComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectActivitiesComponent.prototype, "apiUrl", void 0);
    ProjectActivitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-activities',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-activities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-activities/project-activities.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-activities.component.scss */ "./src/app/modules/pm/projects/components/project-activities/project-activities.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectActivitiesComponent);
    return ProjectActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/projects/components/project-attachments/project-attachments.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/project-attachments/project-attachments.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdHMvY29tcG9uZW50cy9wcm9qZWN0LWF0dGFjaG1lbnRzL3Byb2plY3QtYXR0YWNobWVudHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/projects/components/project-attachments/project-attachments.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/project-attachments/project-attachments.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ProjectAttachmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAttachmentsComponent", function() { return ProjectAttachmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/create-attachment-modal/create-attachment-modal.component */ "./src/app/modules/pm/projects/components/create-attachment-modal/create-attachment-modal.component.ts");
/* harmony import */ var _core_services_project_attachment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/project-attachment.service */ "./src/app/core/services/project-attachment.service.ts");









var ProjectAttachmentsComponent = /** @class */ (function () {
    function ProjectAttachmentsComponent(translate, toastr, route, modalService, projectAttachmentService) {
        this.translate = translate;
        this.toastr = toastr;
        this.route = route;
        this.modalService = modalService;
        this.projectAttachmentService = projectAttachmentService;
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                projectId: this.route.snapshot.params.id,
            }
        };
        this.getAllAttachment(this.route.snapshot.params.id);
    }
    ProjectAttachmentsComponent.prototype.ngOnInit = function () { };
    ProjectAttachmentsComponent.prototype.getAllAttachment = function (projectId, isLoad) {
        var _this = this;
        if (isLoad === void 0) { isLoad = true; }
        this.projectAttachmentService.getAllAttachmentById(projectId).subscribe(function (data) {
            _this.attachments = data;
            _this.getFiles();
        });
    };
    ProjectAttachmentsComponent.prototype.getFiles = function () {
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
    ProjectAttachmentsComponent.prototype.attachmentDelete = function (attachmentId) {
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
                _this.projectAttachmentService.delete(attachmentId)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('attachments.messages.delete'), _this.translate.instant('projects.title'));
                    _this.getAllAttachment(_this.project.id, false);
                });
            }
        });
    };
    ProjectAttachmentsComponent.prototype.openAttachmentCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_7__["CreateAttachmentModalComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getAllAttachment(_this.project.id, false);
        });
    };
    ProjectAttachmentsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: _core_services_project_attachment_service__WEBPACK_IMPORTED_MODULE_8__["ProjectAttachmentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectAttachmentsComponent.prototype, "project", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectAttachmentsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectAttachmentsComponent.prototype, "permissions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectAttachmentsComponent.prototype, "apiUrl", void 0);
    ProjectAttachmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-attachments',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-attachments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-attachments/project-attachments.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-attachments.component.scss */ "./src/app/modules/pm/projects/components/project-attachments/project-attachments.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_services_project_attachment_service__WEBPACK_IMPORTED_MODULE_8__["ProjectAttachmentService"]])
    ], ProjectAttachmentsComponent);
    return ProjectAttachmentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/projects/components/project-calendar/project-calendar.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/project-calendar/project-calendar.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdHMvY29tcG9uZW50cy9wcm9qZWN0LWNhbGVuZGFyL3Byb2plY3QtY2FsZW5kYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/projects/components/project-calendar/project-calendar.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/project-calendar/project-calendar.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProjectCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCalendarComponent", function() { return ProjectCalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../core/helpers/pm-helper */ "./src/app/core/helpers/pm-helper.ts");






var ProjectCalendarComponent = /** @class */ (function () {
    function ProjectCalendarComponent() {
        this.today = new Date();
        this.isCalendarLoaded = false;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"];
        this.viewDate = new Date();
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.events = this.AllCalendarEvents;
        this.activeDayIsOpen = true;
    }
    ProjectCalendarComponent.prototype.ngOnInit = function () {
        this.setCalendarData();
    };
    ProjectCalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    };
    ProjectCalendarComponent.prototype.addEvent = function (tasks) {
        this.events = tasks;
        this.isCalendarLoaded = true;
        this.refreshView();
    };
    ProjectCalendarComponent.prototype.refreshView = function () {
        this.refresh.next();
    };
    ProjectCalendarComponent.prototype.setView = function (view) {
        this.view = view;
    };
    ProjectCalendarComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    ProjectCalendarComponent.prototype.setCalendarData = function () {
        var eventsAll = [];
        eventsAll.push({
            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date(this.project.start_date)), 0),
            end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(this.project.end_date), 0),
            title: this.project.generated_id + " - " + this.project.project_name,
            color: _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_5__["colors"].red,
            allDay: true
        });
        this.project.tasks.forEach(function (element) {
            eventsAll.push({
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date(element.task_start_date)), 0),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(element.task_end_date), 0),
                title: element.generated_id + " - " + element.name,
                color: _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_5__["colors"].blue,
                allDay: true
            });
        });
        this.project.defects.forEach(function (element) {
            eventsAll.push({
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date(element.start_date)), 0),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(element.end_date), 0),
                title: element.generated_id + " - " + element.defect_name,
                color: _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_5__["colors"].orange,
                allDay: true
            });
        });
        this.project.incidents.forEach(function (element) {
            eventsAll.push({
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date(element.start_date)), 0),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(element.end_date), 0),
                title: element.generated_id + " - " + element.incident_name,
                color: _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_5__["colors"].purple,
                allDay: true
            });
        });
        this.addEvent(eventsAll);
        this.AllCalendarEvents = eventsAll;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectCalendarComponent.prototype, "project", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectCalendarComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], ProjectCalendarComponent.prototype, "modalContent", void 0);
    ProjectCalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-calendar',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-calendar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-calendar/project-calendar.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-calendar.component.scss */ "./src/app/modules/pm/projects/components/project-calendar/project-calendar.component.scss")).default]
        })
    ], ProjectCalendarComponent);
    return ProjectCalendarComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/projects/components/project-comments/project-comments.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/project-comments/project-comments.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".panel-heading {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9wcm9qZWN0cy9jb21wb25lbnRzL3Byb2plY3QtY29tbWVudHMvcHJvamVjdC1jb21tZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbS9wcm9qZWN0cy9jb21wb25lbnRzL3Byb2plY3QtY29tbWVudHMvcHJvamVjdC1jb21tZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdHMvY29tcG9uZW50cy9wcm9qZWN0LWNvbW1lbnRzL3Byb2plY3QtY29tbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwtaGVhZGluZyB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4iLCIucGFuZWwtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/pm/projects/components/project-comments/project-comments.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/project-comments/project-comments.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProjectCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCommentsComponent", function() { return ProjectCommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_project_comments_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/project-comments.service */ "./src/app/core/services/project-comments.service.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_9__);











var ProjectCommentsComponent = /** @class */ (function () {
    function ProjectCommentsComponent(translate, router, route, formBuilder, toastr, projectCommentsService, projectService) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectCommentsService = projectCommentsService;
        this.projectService = projectService;
        this.isPageLoaded = false;
        this.isCommentFormSubmitted = false;
        this.isReplayFormSubmitted = false;
        this.parentChild = [];
        this.selectedFiles = [];
        this.projectId = this.route.snapshot.params.id;
        this.customClass = 'comment-collapse';
        this.oneAtATime = true;
    }
    ProjectCommentsComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.loadForms();
        this.getComment(this.projectId);
        this.loadReplyForm();
        setTimeout(function () {
            _this_1.loadDropzone();
        });
    };
    ProjectCommentsComponent.prototype.loadForms = function () {
        this.projectCommentsForm = this.formBuilder.group({
            project_id: [this.projectId],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            files: [null]
        });
    };
    ProjectCommentsComponent.prototype.loadReplyForm = function () {
        this.projectCommentsReplyForm = this.formBuilder.group({
            project_id: [this.projectId],
            replay_comment: [''],
            parent_id: [null],
        });
    };
    Object.defineProperty(ProjectCommentsComponent.prototype, "commentControl", {
        get: function () { return this.projectCommentsForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCommentsComponent.prototype, "replyCommentControl", {
        get: function () { return this.projectCommentsReplyForm.controls; },
        enumerable: true,
        configurable: true
    });
    ProjectCommentsComponent.prototype.loadDropzone = function () {
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
    ProjectCommentsComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isCommentFormSubmitted = true;
        if (this.projectCommentsForm.invalid) {
            return;
        }
        this.projectCommentsForm.patchValue({ files: this.selectedFiles });
        this.projectCommentsService.create(this.projectCommentsForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('comments.messages.create'), _this_1.translate.instant('comments.title'));
            _this_1.dropzoneObj.removeAllFiles();
            _this_1.getComment(_this_1.projectId);
            _this_1.commentFormReset();
            _this_1.loadForms();
        });
    };
    ProjectCommentsComponent.prototype.replyFormReset = function () {
        this.projectCommentsReplyForm.patchValue({ replay_comment: '' });
        this.projectCommentsReplyForm.patchValue({ files: '' });
        this.projectCommentsReplyForm.patchValue({ attachments: '' });
    };
    ProjectCommentsComponent.prototype.commentFormReset = function () {
        this.isCommentFormSubmitted = false;
        this.commentControl.comment.reset();
        this.projectCommentsForm.patchValue({ attachments: null });
    };
    ProjectCommentsComponent.prototype.showReplayCommentBox = function (id) {
        $('#comment_replay_' + id).removeClass('d-none');
    };
    ProjectCommentsComponent.prototype.getComment = function (projectID) {
        var _this_1 = this;
        this.projectService.getById(projectID).subscribe(function (data) {
            _this_1.projectData = data;
            _this_1.projectData.comments = _this_1.getNestedChildren(_this_1.projectData.comments, 0);
            _this_1.comments = _this_1.projectData.comments;
        });
    };
    ProjectCommentsComponent.prototype.getNestedChildren = function (comment, parent) {
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
    ProjectCommentsComponent.prototype.postReplayComment = function (comment) {
        var _this_1 = this;
        if (this.projectCommentsReplyForm.value.replay_comment) {
            this.isReplayFormSubmitted = true;
            comment.parent_id = comment.id;
            comment.files = "";
            comment.comment = this.projectCommentsReplyForm.value.replay_comment;
            this.projectCommentsReplyForm.patchValue({ attachments: '' });
            var replyCommentValues = {
                comment: this.projectCommentsReplyForm.value.replay_comment,
                parent_id: comment.parent_id,
                project_id: comment.project_id,
                user: comment.user,
                user_id: comment.user_id,
                files: "",
                attachments: "",
                replay_comment: this.projectCommentsReplyForm.value.replay_comment
            };
            if (this.projectCommentsReplyForm.invalid) {
                return;
            }
            this.projectCommentsService.create(replyCommentValues)
                .subscribe(function (resp) {
                _this_1.toastr.success(_this_1.translate.instant('comments.messages.create'), _this_1.translate.instant('comments.title'));
                _this_1.getComment(_this_1.projectId);
                _this_1.replyFormReset();
                _this_1.loadForms();
            });
        }
        else {
            this.toastr.error(this.translate.instant('comments.create.error_messages.message4'), this.translate.instant('comments.title'));
            return false;
        }
    };
    ProjectCommentsComponent.prototype.commentDelete = function (commentId) {
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
                _this_1.projectCommentsService.delete(commentId)
                    .subscribe(function (data) {
                    _this_1.toastr.success(_this_1.translate.instant('comments.messages.delete'), _this_1.translate.instant('projects.title'));
                    _this_1.getComment(_this_1.projectId);
                });
            }
        });
    };
    ProjectCommentsComponent.prototype.saveComments = function (comment, index, value) {
        var _this_1 = this;
        comment[index] = value;
        this.projectCommentsService.update(comment).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('comments.messages.update'), _this_1.translate.instant('tasks.title'));
            _this_1.getComment(_this_1.projectId);
        });
    };
    ProjectCommentsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_project_comments_service__WEBPACK_IMPORTED_MODULE_8__["ProjectCommentsService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectCommentsComponent.prototype, "permissions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectCommentsComponent.prototype, "apiUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectCommentsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commentdropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProjectCommentsComponent.prototype, "commentdropzone", void 0);
    ProjectCommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-comments',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-comments/project-comments.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-comments.component.scss */ "./src/app/modules/pm/projects/components/project-comments/project-comments.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_project_comments_service__WEBPACK_IMPORTED_MODULE_8__["ProjectCommentsService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"]])
    ], ProjectCommentsComponent);
    return ProjectCommentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/projects/components/project-defects/project-defects.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/project-defects/project-defects.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdHMvY29tcG9uZW50cy9wcm9qZWN0LWRlZmVjdHMvcHJvamVjdC1kZWZlY3RzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pm/projects/components/project-defects/project-defects.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/project-defects/project-defects.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProjectDefectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDefectsComponent", function() { return ProjectDefectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var ProjectDefectsComponent = /** @class */ (function () {
    function ProjectDefectsComponent(translate) {
        this.translate = translate;
        this.dtOptions = {};
    }
    ProjectDefectsComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    ProjectDefectsComponent.prototype.loadDatatable = function () {
        var that = this;
        this.dtOptions = {
            dom: '<"html5buttons"B>lTfgtip',
            pagingType: 'full_numbers',
            paging: true,
            pageLength: that.loginUser.settings.tables_pagination_limit,
            responsive: false,
            autoWidth: false,
            order: [0],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('defects.title'),
                    className: "btn btn-datatable-gredient",
                }, {
                    extend: 'excel',
                    title: this.translate.instant('defects.title'),
                    className: "btn btn-datatable-gredient",
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('defects.title'),
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
            },
            columnDefs: [
                { width: "9%", targets: [0] },
                { width: "41%", targets: [1] },
                { width: "10%", targets: [2] },
                { width: "10%", targets: [3] },
                { width: "10%", targets: [4] },
                { width: "10%", targets: [5] },
                { width: "10%", targets: [6] }
            ]
        };
    };
    ProjectDefectsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectDefectsComponent.prototype, "project", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectDefectsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectDefectsComponent.prototype, "apiUrl", void 0);
    ProjectDefectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-defects',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-defects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-defects/project-defects.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-defects.component.scss */ "./src/app/modules/pm/projects/components/project-defects/project-defects.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ProjectDefectsComponent);
    return ProjectDefectsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/projects/components/project-details/project-details.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/project-details/project-details.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdHMvY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbHMvcHJvamVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pm/projects/components/project-details/project-details.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/project-details/project-details.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../core/helpers/pm-helper */ "./src/app/core/helpers/pm-helper.ts");







var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent(translate, projectService, clientService, toastr) {
        this.translate = translate;
        this.projectService = projectService;
        this.clientService = clientService;
        this.toastr = toastr;
        this.projectSourceKeyValue = [];
        this.clients = [];
        this.projectstatusKeyValue = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_6__["project_status_key_value"];
        this.datepickerConfigs = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        if (!this.loginUser.is_client) {
            this.getClient();
        }
    };
    ProjectDetailsComponent.prototype.getClient = function () {
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
    ProjectDetailsComponent.prototype.changeProjectStatus = function (projectIDs, status) {
        var _this = this;
        var changeProject = {
            ids: projectIDs,
            status: status.id
        };
        this.projectService.changeStatus(changeProject)
            .subscribe(function (data) {
            _this.getProjectById(_this.project.id);
            _this.toastr.success(_this.translate.instant('projects.messages.status'), _this.translate.instant('projects.title'));
        });
    };
    ProjectDetailsComponent.prototype.getParseArray = function (string) {
        return JSON.parse(string);
    };
    ProjectDetailsComponent.prototype.saveProjectDetail = function (name, value) {
        var _this = this;
        this.project[name] = value;
        if (name == 'start_date' && this.project.end_date < this.project.start_date) {
            this.project.end_date = new Date(value);
        }
        this.projectService.update(this.project)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('projects.messages.update'), _this.translate.instant('projects.title'));
            _this.getProjectById(_this.project.id);
        });
    };
    ProjectDetailsComponent.prototype.getProjectById = function (projectId) {
        var _this = this;
        this.projectService.getById(projectId)
            .subscribe(function (data) {
            _this.project = data;
        });
    };
    ProjectDetailsComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.projectstatusKeyValue[statusKey];
    };
    ProjectDetailsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectDetailsComponent.prototype, "project", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectDetailsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectDetailsComponent.prototype, "permissions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectDetailsComponent.prototype, "apiUrl", void 0);
    ProjectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-details/project-details.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-details.component.scss */ "./src/app/modules/pm/projects/components/project-details/project-details.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/projects/components/project-import/project-import.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/project-import/project-import.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdHMvY29tcG9uZW50cy9wcm9qZWN0LWltcG9ydC9wcm9qZWN0LWltcG9ydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/pm/projects/components/project-import/project-import.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/project-import/project-import.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProjectImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectImportComponent", function() { return ProjectImportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_import_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/import-project.service */ "./src/app/core/services/import-project.service.ts");







var ProjectImportComponent = /** @class */ (function () {
    function ProjectImportComponent(translate, bsImportProjectModalRef, toastr, importprojectService) {
        this.translate = translate;
        this.bsImportProjectModalRef = bsImportProjectModalRef;
        this.toastr = toastr;
        this.importprojectService = importprojectService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileAttached = false;
        this.isPageLoaded = false;
        this.isFormSubmitted = false;
        this.csvFileSelected = false;
    }
    ProjectImportComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    };
    ProjectImportComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.csvFileSelected) {
            this.importprojectService.create({ csv_file: this.csvData })
                .subscribe(function (data) {
                _this.event.emit({ data: true });
                _this.onCancel();
            });
        }
    };
    ProjectImportComponent.prototype.fileUpload = function (files) {
        var _this = this;
        if (files && files.length > 0) {
            var file = files.item(0), reader_1 = new FileReader();
            reader_1.readAsText(file);
            reader_1.onload = function (event) {
                var csvdata = reader_1.result;
                _this.csvData = csvdata;
                _this.fileAttached = true;
                if (_this.csvData != undefined) {
                    _this.csvFileSelected = true;
                }
                else {
                    _this.csvFileSelected = false;
                }
                var filename = files[0].name;
                var ext = filename.substr(filename.lastIndexOf('.') + 1);
                if (ext != 'csv') {
                    _this.toastr.error(_this.translate.instant('teams.create.error_messages.message15'), _this.translate.instant('teams.title'));
                    _this.csvFileSelected = false;
                    return;
                }
                var newLinebrk = csvdata.split("\n");
                var columnNames = newLinebrk[0].split(",");
                _this.csvFileColumnName = columnNames;
            };
        }
    };
    ProjectImportComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsImportProjectModalRef.hide();
    };
    ProjectImportComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_import_project_service__WEBPACK_IMPORTED_MODULE_6__["ImportProjectService"] }
    ]; };
    ProjectImportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-import',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-import.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-import/project-import.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-import.component.scss */ "./src/app/modules/pm/projects/components/project-import/project-import.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_import_project_service__WEBPACK_IMPORTED_MODULE_6__["ImportProjectService"]])
    ], ProjectImportComponent);
    return ProjectImportComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/projects/components/project-tasks/project-tasks.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/project-tasks/project-tasks.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdHMvY29tcG9uZW50cy9wcm9qZWN0LXRhc2tzL3Byb2plY3QtdGFza3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/projects/components/project-tasks/project-tasks.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/project-tasks/project-tasks.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProjectTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectTasksComponent", function() { return ProjectTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__);







var ProjectTasksComponent = /** @class */ (function () {
    function ProjectTasksComponent(translate) {
        this.translate = translate;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.dtOptions = {};
    }
    ProjectTasksComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    ProjectTasksComponent.prototype.loadDatatable = function () {
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            dom: '<"html5buttons"B>lTfgtip',
            paging: true,
            responsive: false,
            autoWidth: false,
            order: [0],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('tasks.title'),
                    className: "btn btn-datatable-gredient",
                }, {
                    extend: 'excel',
                    title: this.translate.instant('tasks.title'),
                    className: "btn btn-datatable-gredient",
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('tasks.title'),
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
            },
            columnDefs: [
                { width: "8%", targets: [0] },
                { width: "42%", targets: [1] },
                { width: "10%", targets: [2] },
                { width: "10%", targets: [3] },
                { width: "10%", targets: [4] },
                { width: "10%", targets: [5] },
                { width: "10%", targets: [6] }
            ]
        };
    };
    ProjectTasksComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ProjectTasksComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ProjectTasksComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectTasksComponent.prototype, "project", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectTasksComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectTasksComponent.prototype, "apiUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], ProjectTasksComponent.prototype, "dtElement", void 0);
    ProjectTasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-tasks',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-tasks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-tasks/project-tasks.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-tasks.component.scss */ "./src/app/modules/pm/projects/components/project-tasks/project-tasks.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ProjectTasksComponent);
    return ProjectTasksComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/projects/components/project-timesheet-edit-modal/project-timesheet-edit-modal.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/project-timesheet-edit-modal/project-timesheet-edit-modal.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdHMvY29tcG9uZW50cy9wcm9qZWN0LXRpbWVzaGVldC1lZGl0LW1vZGFsL3Byb2plY3QtdGltZXNoZWV0LWVkaXQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/projects/components/project-timesheet-edit-modal/project-timesheet-edit-modal.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/project-timesheet-edit-modal/project-timesheet-edit-modal.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ProjectTimesheetEditModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectTimesheetEditModalComponent", function() { return ProjectTimesheetEditModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/timesheet.service */ "./src/app/core/services/timesheet.service.ts");









var ProjectTimesheetEditModalComponent = /** @class */ (function () {
    function ProjectTimesheetEditModalComponent(translate, bsEditRoleModalRef, formBuilder, toastr, timesheetService) {
        this.translate = translate;
        this.bsEditRoleModalRef = bsEditRoleModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.timesheetService = timesheetService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
    }
    ProjectTimesheetEditModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForm();
    };
    ProjectTimesheetEditModalComponent.prototype.loadForm = function () {
        this.editTimesheetForm = this.formBuilder.group({
            id: [this.timesheet.id],
            start_time: [new Date(this.timesheet.start_time), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            end_time: [new Date(this.timesheet.end_time), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            note: [this.timesheet.note, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    Object.defineProperty(ProjectTimesheetEditModalComponent.prototype, "timesheetControl", {
        get: function () { return this.editTimesheetForm.controls; },
        enumerable: true,
        configurable: true
    });
    ProjectTimesheetEditModalComponent.prototype.startTimeChange = function (start_time) {
        this.editTimesheetForm.patchValue({ end_time: new Date(start_time.value) });
    };
    ProjectTimesheetEditModalComponent.prototype.onSubmit = function () {
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
    ProjectTimesheetEditModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditRoleModalRef.hide();
    };
    ProjectTimesheetEditModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__["TimesheetService"] }
    ]; };
    ProjectTimesheetEditModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-timesheet-edit-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-timesheet-edit-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-timesheet-edit-modal/project-timesheet-edit-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-timesheet-edit-modal.component.scss */ "./src/app/modules/pm/projects/components/project-timesheet-edit-modal/project-timesheet-edit-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__["TimesheetService"]])
    ], ProjectTimesheetEditModalComponent);
    return ProjectTimesheetEditModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/projects/components/project-timesheet/project-timesheet.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/project-timesheet/project-timesheet.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9wcm9qZWN0cy9jb21wb25lbnRzL3Byb2plY3QtdGltZXNoZWV0L3Byb2plY3QtdGltZXNoZWV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BtL3Byb2plY3RzL2NvbXBvbmVudHMvcHJvamVjdC10aW1lc2hlZXQvcHJvamVjdC10aW1lc2hlZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BtL3Byb2plY3RzL2NvbXBvbmVudHMvcHJvamVjdC10aW1lc2hlZXQvcHJvamVjdC10aW1lc2hlZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgICBkaXNwbGF5OiBub25lXG59IiwiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/pm/projects/components/project-timesheet/project-timesheet.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/project-timesheet/project-timesheet.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProjectTimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectTimesheetComponent", function() { return ProjectTimesheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/timesheet.service */ "./src/app/core/services/timesheet.service.ts");
/* harmony import */ var _components_project_timesheet_edit_modal_project_timesheet_edit_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/project-timesheet-edit-modal/project-timesheet-edit-modal.component */ "./src/app/modules/pm/projects/components/project-timesheet-edit-modal/project-timesheet-edit-modal.component.ts");













var ProjectTimesheetComponent = /** @class */ (function () {
    function ProjectTimesheetComponent(translate, http, toastr, exportAsService, ngxRolesService, modalService, timesheetService) {
        this.translate = translate;
        this.http = http;
        this.toastr = toastr;
        this.exportAsService = exportAsService;
        this.ngxRolesService = ngxRolesService;
        this.modalService = modalService;
        this.timesheetService = timesheetService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.dtOptions = {};
        this.timesheets = [];
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'timesheets_table',
        };
    }
    ProjectTimesheetComponent.prototype.ngOnInit = function () {
        this.loadTimesheetDatatable();
    };
    ProjectTimesheetComponent.prototype.loadTimesheetDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [3],
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
                    project_ids: _this.project.id,
                };
                _this.http.post(_this.apiUrl + '/api/project-timesheets', dataTablesParameters, {}).subscribe(function (resp) {
                    _this.isPageLoaded = true;
                    _this.timesheets = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    ProjectTimesheetComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('timesheet.title')).subscribe(function () { });
    };
    ProjectTimesheetComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ProjectTimesheetComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ProjectTimesheetComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    ProjectTimesheetComponent.prototype.getCheckPermission = function (timesheet) {
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
    ProjectTimesheetComponent.prototype.saveTimesheetDetail = function (index, name, value) {
        var _this = this;
        this.timesheets[index][name] = value;
        this.timesheetService.update(this.timesheets[index]).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('timesheet.messages.update'), _this.translate.instant('timesheet.title'));
            _this.rerender();
        });
    };
    ProjectTimesheetComponent.prototype.editTimesheet = function (timesheet) {
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
        this.modalRef = this.modalService.show(_components_project_timesheet_edit_modal_project_timesheet_edit_modal_component__WEBPACK_IMPORTED_MODULE_12__["ProjectTimesheetEditModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    ProjectTimesheetComponent.prototype.deleteTimesheet = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
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
    ProjectTimesheetComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_11__["TimesheetService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectTimesheetComponent.prototype, "project", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectTimesheetComponent.prototype, "apiUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectTimesheetComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"])
    ], ProjectTimesheetComponent.prototype, "dtElement", void 0);
    ProjectTimesheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-timesheet',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-timesheet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/project-timesheet/project-timesheet.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-timesheet.component.scss */ "./src/app/modules/pm/projects/components/project-timesheet/project-timesheet.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_11__["TimesheetService"]])
    ], ProjectTimesheetComponent);
    return ProjectTimesheetComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/projects/components/projects-incidents/projects-incidents.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/projects-incidents/projects-incidents.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdHMvY29tcG9uZW50cy9wcm9qZWN0cy1pbmNpZGVudHMvcHJvamVjdHMtaW5jaWRlbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pm/projects/components/projects-incidents/projects-incidents.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/components/projects-incidents/projects-incidents.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProjectsIncidentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsIncidentsComponent", function() { return ProjectsIncidentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var ProjectsIncidentsComponent = /** @class */ (function () {
    function ProjectsIncidentsComponent(translate) {
        this.translate = translate;
        this.dtOptions = {};
    }
    ProjectsIncidentsComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    ProjectsIncidentsComponent.prototype.loadDatatable = function () {
        var that = this;
        this.dtOptions = {
            dom: '<"html5buttons"B>lTfgtip',
            pagingType: 'full_numbers',
            paging: true,
            pageLength: that.loginUser.settings.tables_pagination_limit,
            responsive: false,
            autoWidth: false,
            order: [0],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('incidents.title'),
                    className: "btn btn-datatable-gredient",
                }, {
                    extend: 'excel',
                    title: this.translate.instant('incidents.title'),
                    className: "btn btn-datatable-gredient",
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('incidents.title'),
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
            },
            columnDefs: [
                { width: "9%", targets: [0] },
                { width: "42%", targets: [1] },
                { width: "10%", targets: [2] },
                { width: "10%", targets: [3] },
                { width: "10%", targets: [4] },
                { width: "10%", targets: [5] },
                { width: "10%", targets: [6] }
            ]
        };
    };
    ProjectsIncidentsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectsIncidentsComponent.prototype, "project", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectsIncidentsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectsIncidentsComponent.prototype, "apiUrl", void 0);
    ProjectsIncidentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects-incidents',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects-incidents.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/components/projects-incidents/projects-incidents.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects-incidents.component.scss */ "./src/app/modules/pm/projects/components/projects-incidents/projects-incidents.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ProjectsIncidentsComponent);
    return ProjectsIncidentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/projects/pages/project-create/project-create.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/pages/project-create/project-create.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=time]::-webkit-clear-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -o-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  margin: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9wcm9qZWN0cy9wYWdlcy9wcm9qZWN0LWNyZWF0ZS9wcm9qZWN0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbS9wcm9qZWN0cy9wYWdlcy9wcm9qZWN0LWNyZWF0ZS9wcm9qZWN0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BtL3Byb2plY3RzL3BhZ2VzL3Byb2plY3QtY3JlYXRlL3Byb2plY3QtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpdGhvdXRfYW1wbTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWFtcG0tZmllbGQge1xuICAgIC8vIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaW5wdXRbdHlwZT10aW1lXTo6LXdlYmtpdC1jbGVhci1idXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW8tYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbXMtYXBwZWFyYW5jZTpub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luOiAtMTBweDsgXG4gIH0iLCJpbnB1dFt0eXBlPXRpbWVdOjotd2Via2l0LWNsZWFyLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAtby1hcHBlYXJhbmNlOiBub25lO1xuICAtbXMtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAtMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/pm/projects/pages/project-create/project-create.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/pages/project-create/project-create.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProjectCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCreateComponent", function() { return ProjectCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_team_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/team.service */ "./src/app/core/services/team.service.ts");
/* harmony import */ var _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/custom-fields.service */ "./src/app/core/services/custom-fields.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/helpers/pm-helper */ "./src/app/core/helpers/pm-helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_15__);
















var ProjectCreateComponent = /** @class */ (function () {
    function ProjectCreateComponent(translate, datepipe, router, formBuilder, toastr, projectService, clientService, teamService, customFieldsService, authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectService = projectService;
        this.clientService = clientService;
        this.teamService = teamService;
        this.customFieldsService = customFieldsService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].apiUrl;
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.client_id = null;
        this.clients = [];
        this.teams = [];
        this.teamsMembers = [];
        this.teamsMembersId = [];
        this.teamsMemberIds = [];
        this.logos = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_13__["ProjectLogos"];
        this.progressOptions = {
            floor: 0,
            ceil: 100
        };
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_12__["datepickerConfig"];
        this.editorConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_12__["editorConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    ProjectCreateComponent.prototype.ngOnInit = function () {
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
    ProjectCreateComponent.prototype.loadForms = function () {
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
            estimated_hours: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+\:[0-5][0-9]$/)],
            assign_to: [null],
            assign_members: [null],
            progress: [0],
            project_hours: [true],
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
    ProjectCreateComponent.prototype.setLogos = function (project_logo) {
        if (project_logo === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = project_logo;
        }
        this.createProjectForm.patchValue({ project_logo: this.selected });
    };
    ProjectCreateComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    Object.defineProperty(ProjectCreateComponent.prototype, "projectControl", {
        get: function () { return this.createProjectForm.controls; },
        enumerable: true,
        configurable: true
    });
    ProjectCreateComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_15__(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
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
    ProjectCreateComponent.prototype.loadCustomFields = function () {
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
    ProjectCreateComponent.prototype.getCustomFieldByForm = function () {
        var _this_1 = this;
        this.customFieldsService.getCustomFieldByForm(1)
            .subscribe(function (data) {
            _this_1.customFields = data;
            if (_this_1.customFields.length > 0) {
                _this_1.addDynamicField(_this_1.customFields);
            }
        });
    };
    ProjectCreateComponent.prototype.addDynamicField = function (fieldList) {
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
    ProjectCreateComponent.prototype.getClients = function () {
        var _this_1 = this;
        this.clientService.getAll()
            .subscribe(function (data) {
            _this_1.clients = data;
        });
    };
    ProjectCreateComponent.prototype.getTeams = function () {
        var _this_1 = this;
        this.teamService.getAll()
            .subscribe(function (data) {
            _this_1.teams = data;
        });
    };
    ProjectCreateComponent.prototype.startDateChange = function (event) {
        this.createProjectForm.patchValue({ end_date: event });
    };
    ProjectCreateComponent.prototype.assignGroupChange = function (event) {
        this.teamsMembers = null;
        this.teamsMemberIds = [];
        this.createProjectForm.patchValue({ assign_members: null });
        if (event) {
            this.teamsMembers = event.members;
            for (var i = 0; i < this.teamsMembers.length; i++) {
                this.teamsMembersId = this.teamsMembers[i].id;
                this.teamsMemberIds.push(this.teamsMembersId);
            }
        }
        this.createProjectForm.patchValue({ users: this.teamsMemberIds });
    };
    ProjectCreateComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.createProjectForm.invalid) {
            return;
        }
        if (this.customFields.length > 0) {
            this.loadCustomFields();
        }
        this.projectService.create(this.createProjectForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('projects.messages.create'), _this_1.translate.instant('projects.title'));
            _this_1.router.navigate(['projects']);
        });
    };
    ProjectCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"] },
        { type: _core_services_team_service__WEBPACK_IMPORTED_MODULE_9__["TeamService"] },
        { type: _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_10__["CustomFieldsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logodropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProjectCreateComponent.prototype, "logodropzone", void 0);
    ProjectCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/pages/project-create/project-create.component.html")).default,
            preserveWhitespaces: true,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-create.component.scss */ "./src/app/modules/pm/projects/pages/project-create/project-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"],
            _core_services_team_service__WEBPACK_IMPORTED_MODULE_9__["TeamService"],
            _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_10__["CustomFieldsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]])
    ], ProjectCreateComponent);
    return ProjectCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/projects/pages/project-detail/project-detail.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/pages/project-detail/project-detail.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdHMvcGFnZXMvcHJvamVjdC1kZXRhaWwvcHJvamVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/projects/pages/project-detail/project-detail.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/pages/project-detail/project-detail.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function() { return ProjectDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");






var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(route, router, projectService, authenticationService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.projectService = projectService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.permissions = [];
        this.isProjectTab = 1;
        this.activeProjectTab = '1';
        this.isPageLoaded = false;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.getCheckPermission(params);
        });
    }
    ProjectDetailComponent.prototype.ngOnInit = function () { };
    ProjectDetailComponent.prototype.getCheckPermission = function (params) {
        var _this = this;
        this.projectService.getProjectPermission(params.get('id')).subscribe(function (res) {
            _this.permissions['edit_delete_permission'] = res;
            if (_this.permissions.edit_delete_permission.view) {
                _this.getById(params.get('id'));
            }
            else {
                _this.router.navigate(['projects']);
            }
        }, function (error) {
            _this.router.navigate(['projects']);
        });
    };
    ProjectDetailComponent.prototype.setActiveProjectTab = function ($event) {
        this.activeProjectTab = $event.id;
    };
    ProjectDetailComponent.prototype.getActiveProjectTab = function (tab) {
        return this.activeProjectTab === tab;
    };
    ProjectDetailComponent.prototype.isComponentload = function (tab) {
        return this.isProjectTab === tab;
    };
    ProjectDetailComponent.prototype.getById = function (projectId) {
        var _this = this;
        this.projectService.getById(projectId)
            .subscribe(function (data) {
            _this.project = data;
            _this.isPageLoaded = true;
        });
    };
    ProjectDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    ProjectDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/pages/project-detail/project-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-detail.component.scss */ "./src/app/modules/pm/projects/pages/project-detail/project-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/projects/pages/project-edit/project-edit.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/pages/project-edit/project-edit.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcHJvamVjdHMvcGFnZXMvcHJvamVjdC1lZGl0L3Byb2plY3QtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/pm/projects/pages/project-edit/project-edit.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/pm/projects/pages/project-edit/project-edit.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProjectEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectEditComponent", function() { return ProjectEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_team_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/team.service */ "./src/app/core/services/team.service.ts");
/* harmony import */ var _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/custom-fields.service */ "./src/app/core/services/custom-fields.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core/helpers/pm-helper */ "./src/app/core/helpers/pm-helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_16__);

















var ProjectEditComponent = /** @class */ (function () {
    function ProjectEditComponent(translate, toastr, datepipe, ngxRolesService, formBuilder, route, router, projectService, clientService, teamService, customFieldsService, authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.toastr = toastr;
        this.datepipe = datepipe;
        this.ngxRolesService = ngxRolesService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.projectService = projectService;
        this.clientService = clientService;
        this.teamService = teamService;
        this.customFieldsService = customFieldsService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].apiUrl;
        this.customFields = { length: 0 };
        this.permissions = [];
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isLogoLoaded = true;
        this.isButtonShow = false;
        this.clients = [];
        this.teams = [];
        this.teamsMembers = [];
        this.teamsMembersId = [];
        this.teamsMemberIds = [];
        this.assign_members = [];
        this.user = [];
        this.userIds = [];
        this.userId = [];
        this.logos = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_14__["ProjectLogos"];
        this.progressOptions = {
            floor: 0,
            ceil: 100
        };
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_13__["datepickerConfig"];
        this.editorConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_13__["editorConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
        this.route.paramMap.subscribe(function (params) {
            _this_1.getCheckPermission(params);
        });
    }
    ProjectEditComponent.prototype.ngOnInit = function () { };
    ProjectEditComponent.prototype.getCheckPermission = function (params) {
        var _this_1 = this;
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            this.getProjectById(params.get('id'));
        }
        else {
            this.projectService.getProjectPermission(params.get('id')).subscribe(function (res) {
                _this_1.permissions = res;
                if (_this_1.permissions && _this_1.permissions.edit) {
                    _this_1.getProjectById(params.get('id'));
                }
                else {
                    _this_1.router.navigate(['projects']);
                }
            }, function (error) {
                _this_1.router.navigate(['projects']);
            });
        }
    };
    ProjectEditComponent.prototype.loadProjectForms = function () {
        this.editProjectForm = this.formBuilder.group({
            id: [this.project.id],
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
    Object.defineProperty(ProjectEditComponent.prototype, "projectControl", {
        get: function () { return this.editProjectForm.controls; },
        enumerable: true,
        configurable: true
    });
    ProjectEditComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_16__(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var _this_1 = this;
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_16__["createElement"]('<button class=\'btn btn-sm btn-block\'>Remove file</button>');
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
    ProjectEditComponent.prototype.setLogos = function (project_logo) {
        if (project_logo === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = project_logo;
        }
        this.editProjectForm.patchValue({ project_logo: this.selected });
    };
    ProjectEditComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    ProjectEditComponent.prototype.getClients = function () {
        var _this_1 = this;
        this.clientService.getAll()
            .subscribe(function (data) {
            _this_1.clients = data;
        });
    };
    ProjectEditComponent.prototype.getTeams = function () {
        var _this_1 = this;
        this.teamService.getAll()
            .subscribe(function (data) {
            _this_1.teams = data;
            _this_1.getTeamMembers();
        });
    };
    ProjectEditComponent.prototype.getTeamMembers = function () {
        if (this.teams) {
            for (var iRow in this.teams) {
                if (this.teams[iRow].id == this.project.assign_to) {
                    this.teamsMembers = this.teams[iRow].members;
                    for (var i = 0; i < this.teamsMembers.length; i++) {
                        this.userIds.push({ "id": this.teamsMembers[i].id });
                    }
                    this.editProjectForm.patchValue({ users: this.userIds });
                }
            }
        }
    };
    ProjectEditComponent.prototype.getCustomFieldByForm = function () {
        var _this_1 = this;
        this.customFieldsService.getCustomFieldByForm(1)
            .subscribe(function (data) {
            _this_1.customFields = data;
            if (_this_1.customFields.length > 0) {
                _this_1.addDynamicField(_this_1.customFields);
            }
        });
    };
    ProjectEditComponent.prototype.addDynamicField = function (fieldList) {
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
    ProjectEditComponent.prototype.getProjectById = function (projectId) {
        var _this_1 = this;
        this.projectService.getById(projectId).subscribe(function (data) {
            _this_1.project = data;
            var projectAllVersion = _this_1.project.project_version;
            var lastIndex = projectAllVersion.lastIndexOf(",");
            _this_1.oldVersion = projectAllVersion.substring(0, lastIndex);
            _this_1.currentVersion = projectAllVersion.substring(lastIndex + 1);
            _this_1.project.project_version = _this_1.currentVersion;
            _this_1.loadProjectForms();
            setTimeout(function () {
                _this_1.loadDropzone();
            });
            _this_1.getTeams();
            if (!_this_1.loginUser.is_client) {
                _this_1.getClients();
            }
        });
    };
    ProjectEditComponent.prototype.removeDropzoneImage = function () {
        this.isLogoLoaded = false;
        this.editProjectForm.patchValue({ project_logo: null });
    };
    ProjectEditComponent.prototype.startDateChange = function (event) {
        this.editProjectForm.patchValue({ end_date: this.editProjectForm.value.start_date });
    };
    ProjectEditComponent.prototype.assignGroupChange = function (event) {
        this.teamsMembers = null;
        this.teamsMemberIds = [];
        this.editProjectForm.patchValue({ assign_members: null });
        if (event) {
            this.teamsMembers = event.members;
            for (var i = 0; i < this.teamsMembers.length; i++) {
                this.teamsMembersId = this.teamsMembers[i].id;
                this.teamsMemberIds.push({ "id": this.teamsMembersId });
            }
        }
        this.editProjectForm.patchValue({ users: this.teamsMemberIds });
    };
    ProjectEditComponent.prototype.loadCustomFields = function () {
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
    ProjectEditComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.editProjectForm.invalid) {
            return;
        }
        if (this.customFields.length > 0) {
            this.loadCustomFields();
        }
        this.editProjectForm.value.ProjectLogos = this.logos;
        this.projectService.update(this.editProjectForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('projects.messages.update'), _this_1.translate.instant('projects.title'));
            _this_1.router.navigate(['projects']);
        });
    };
    ProjectEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"] },
        { type: _core_services_team_service__WEBPACK_IMPORTED_MODULE_10__["TeamService"] },
        { type: _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_11__["CustomFieldsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logodropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProjectEditComponent.prototype, "logodropzone", void 0);
    ProjectEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/pages/project-edit/project-edit.component.html")).default,
            preserveWhitespaces: true,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-edit.component.scss */ "./src/app/modules/pm/projects/pages/project-edit/project-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"],
            _core_services_team_service__WEBPACK_IMPORTED_MODULE_10__["TeamService"],
            _core_services_custom_fields_service__WEBPACK_IMPORTED_MODULE_11__["CustomFieldsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]])
    ], ProjectEditComponent);
    return ProjectEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/projects/pages/project-list/project-list.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/pm/projects/pages/project-list/project-list.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9wcm9qZWN0cy9wYWdlcy9wcm9qZWN0LWxpc3QvcHJvamVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BtL3Byb2plY3RzL3BhZ2VzL3Byb2plY3QtbGlzdC9wcm9qZWN0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BtL3Byb2plY3RzL3BhZ2VzL3Byb2plY3QtbGlzdC9wcm9qZWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgICBkaXNwbGF5OiBub25lXG59IiwiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/pm/projects/pages/project-list/project-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/pm/projects/pages/project-list/project-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function() { return ProjectListComponent; });
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
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_project_import_project_import_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../components/project-import/project-import.component */ "./src/app/modules/pm/projects/components/project-import/project-import.component.ts");
/* harmony import */ var _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../../../../core/helpers/pm-helper */ "./src/app/core/helpers/pm-helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_19__);




















var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent(translate, ngxRolesService, modalService, http, router, route, exportAsService, toastr, projectService, userService, authenticationService, ngxPermissionsService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.modalService = modalService;
        this.http = http;
        this.router = router;
        this.route = route;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.projectService = projectService;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.ngxPermissionsService = ngxPermissionsService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.dtOptions = {};
        this.projects = [];
        this.userLists = [];
        this.isPageLoaded = false;
        this.projectstatusKeyValue = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_16__["project_status_key_value"];
        this.logos = _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_16__["ProjectLogos"];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'projects_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.ngxPermissionsService.permissions$.subscribe(function (permissions) {
            _this.permissions = permissions;
        });
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        this.getUserkeyBy();
        this.loadProjectDatatable();
    };
    ProjectListComponent.prototype.getUserkeyBy = function () {
        var _this = this;
        this.userService.getUserkeyBy().subscribe(function (data) {
            _this.userLists = data;
        });
    };
    ProjectListComponent.prototype.loadProjectDatatable = function () {
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
                    'sortable': false,
                    'width': "5%",
                    'target': [0]
                },
                {
                    'sortable': true,
                    'width': "10%",
                    'target': [1]
                },
                {
                    'sortable': true,
                    'width': "21%",
                    'target': [2]
                },
                {
                    'sortable': true,
                    'width': "22%",
                    'target': [3]
                },
                {
                    'sortable': true,
                    'width': "5%",
                    'target': [4]
                },
                {
                    'sortable': true,
                    'width': "5%",
                    'target': [5]
                },
                {
                    'sortable': false,
                    'width': "17%",
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
                    title: this.translate.instant('projects.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('projects.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('projects.title'),
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
                    .post(_this.apiUrl + '/api/all-projects', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.isPageLoaded = true;
                    _this.projects = resp.data;
                    _this.countStatus = resp;
                    _this.countStatus = _this.countStatus.statusCount;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    ProjectListComponent.prototype.getCheckPermission = function (project, action) {
        if ((action == 'edit' && this.permissions.projects_edit) || (action == 'delete' && this.permissions.projects_delete)) {
            var role = this.ngxRolesService.getRole('admin');
            if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
                return true;
            }
            if (project.pivot[action]) {
                return true;
            }
        }
        return false;
    };
    ProjectListComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.projectstatusKeyValue[statusKey];
    };
    ProjectListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ProjectListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ProjectListComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.projects.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    ProjectListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('projects.title')).subscribe(function () { });
    };
    ProjectListComponent.prototype.deleteProject = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text4'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.projectService.delete(id, { 'ProjectLogos': _this.logos }).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('projects.messages.delete'), _this.translate.instant('projects.title'));
                    _this.rerender();
                });
            }
        });
    };
    ProjectListComponent.prototype.changeProjectStatus = function (projectIDs, status) {
        var _this = this;
        var changeProject = {
            ids: projectIDs,
            status: status.id
        };
        this.projectService.changeStatus(changeProject)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('projects.messages.status'), _this.translate.instant('projects.title'));
            _this.rerender();
        });
    };
    ProjectListComponent.prototype.filterByStatus = function (statusID) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.navigate(['projects', statusID]);
    };
    ProjectListComponent.prototype.openProjectImportModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_project_import_project_import_component__WEBPACK_IMPORTED_MODULE_15__["ProjectImportComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('projects.messages.import'), _this.translate.instant('projects.title'));
            _this.rerender();
        });
    };
    ProjectListComponent.prototype.saveProjectDetail = function (index, name, value) {
        var _this = this;
        this.projects[index][name] = value;
        this.projectService.update(this.projects[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('projects.messages.update'), _this.translate.instant('projects.title'));
            _this.rerender();
        });
    };
    ProjectListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_12__["ProjectService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"])
    ], ProjectListComponent.prototype, "dtElement", void 0);
    ProjectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/projects/pages/project-list/project-list.component.html")).default,
            preserveWhitespaces: true,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-list.component.scss */ "./src/app/modules/pm/projects/pages/project-list/project-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_12__["ProjectService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsService"]])
    ], ProjectListComponent);
    return ProjectListComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/projects/projects-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/pm/projects/projects-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ProjectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function() { return ProjectsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/project-list/project-list.component */ "./src/app/modules/pm/projects/pages/project-list/project-list.component.ts");
/* harmony import */ var _pages_project_create_project_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/project-create/project-create.component */ "./src/app/modules/pm/projects/pages/project-create/project-create.component.ts");
/* harmony import */ var _pages_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/project-edit/project-edit.component */ "./src/app/modules/pm/projects/pages/project-edit/project-edit.component.ts");
/* harmony import */ var _pages_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/project-detail/project-detail.component */ "./src/app/modules/pm/projects/pages/project-detail/project-detail.component.ts");








var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_4__["ProjectListComponent"],
                data: {
                    permissions: {
                        only: ['admin', 'super_admin', 'projects_view']
                    }
                }
            },
            {
                path: 'create',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_project_create_project_create_component__WEBPACK_IMPORTED_MODULE_5__["ProjectCreateComponent"],
                data: {
                    breadcrumbs: {
                        text: "common.create",
                        icon: "fa fa-product-hunt",
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'projects_create']
                    }
                }
            },
            {
                path: 'edit/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_6__["ProjectEditComponent"],
                data: {
                    breadcrumbs: {
                        text: "common.edit",
                        icon: "fa fa-product-hunt",
                        hasParams: true,
                        show: true,
                        isHome: true
                    }
                }
            },
            {
                path: 'detail/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProjectDetailComponent"],
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
            },
            {
                path: ':statusId',
                component: _pages_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_4__["ProjectListComponent"]
            }
        ]
    }
];
var ProjectsRoutingModule = /** @class */ (function () {
    function ProjectsRoutingModule() {
    }
    ProjectsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProjectsRoutingModule);
    return ProjectsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/pm/projects/projects.module.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/pm/projects/projects.module.ts ***!
  \********************************************************/
/*! exports provided: ProjectsModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./projects-routing.module */ "./src/app/modules/pm/projects/projects-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_todo_todo_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../admin/todo/todo.module */ "./src/app/modules/admin/todo/todo.module.ts");
/* harmony import */ var _pages_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/project-list/project-list.component */ "./src/app/modules/pm/projects/pages/project-list/project-list.component.ts");
/* harmony import */ var _pages_project_create_project_create_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/project-create/project-create.component */ "./src/app/modules/pm/projects/pages/project-create/project-create.component.ts");
/* harmony import */ var _pages_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/project-edit/project-edit.component */ "./src/app/modules/pm/projects/pages/project-edit/project-edit.component.ts");
/* harmony import */ var _pages_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/project-detail/project-detail.component */ "./src/app/modules/pm/projects/pages/project-detail/project-detail.component.ts");
/* harmony import */ var _components_project_calendar_project_calendar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/project-calendar/project-calendar.component */ "./src/app/modules/pm/projects/components/project-calendar/project-calendar.component.ts");
/* harmony import */ var _components_project_comments_project_comments_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/project-comments/project-comments.component */ "./src/app/modules/pm/projects/components/project-comments/project-comments.component.ts");
/* harmony import */ var _components_project_attachments_project_attachments_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/project-attachments/project-attachments.component */ "./src/app/modules/pm/projects/components/project-attachments/project-attachments.component.ts");
/* harmony import */ var _components_project_tasks_project_tasks_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/project-tasks/project-tasks.component */ "./src/app/modules/pm/projects/components/project-tasks/project-tasks.component.ts");
/* harmony import */ var _components_project_defects_project_defects_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/project-defects/project-defects.component */ "./src/app/modules/pm/projects/components/project-defects/project-defects.component.ts");
/* harmony import */ var _components_project_activities_project_activities_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/project-activities/project-activities.component */ "./src/app/modules/pm/projects/components/project-activities/project-activities.component.ts");
/* harmony import */ var _components_projects_incidents_projects_incidents_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/projects-incidents/projects-incidents.component */ "./src/app/modules/pm/projects/components/projects-incidents/projects-incidents.component.ts");
/* harmony import */ var _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/project-details/project-details.component */ "./src/app/modules/pm/projects/components/project-details/project-details.component.ts");
/* harmony import */ var _components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/create-attachment-modal/create-attachment-modal.component */ "./src/app/modules/pm/projects/components/create-attachment-modal/create-attachment-modal.component.ts");
/* harmony import */ var _components_project_import_project_import_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/project-import/project-import.component */ "./src/app/modules/pm/projects/components/project-import/project-import.component.ts");
/* harmony import */ var _components_project_timesheet_project_timesheet_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/project-timesheet/project-timesheet.component */ "./src/app/modules/pm/projects/components/project-timesheet/project-timesheet.component.ts");
/* harmony import */ var _components_project_timesheet_edit_modal_project_timesheet_edit_modal_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/project-timesheet-edit-modal/project-timesheet-edit-modal.component */ "./src/app/modules/pm/projects/components/project-timesheet-edit-modal/project-timesheet-edit-modal.component.ts");








































var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_24__["ProjectListComponent"],
                _pages_project_create_project_create_component__WEBPACK_IMPORTED_MODULE_25__["ProjectCreateComponent"],
                _pages_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_26__["ProjectEditComponent"],
                _pages_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_27__["ProjectDetailComponent"],
                _components_project_calendar_project_calendar_component__WEBPACK_IMPORTED_MODULE_28__["ProjectCalendarComponent"],
                _components_project_comments_project_comments_component__WEBPACK_IMPORTED_MODULE_29__["ProjectCommentsComponent"],
                _components_project_attachments_project_attachments_component__WEBPACK_IMPORTED_MODULE_30__["ProjectAttachmentsComponent"],
                _components_project_tasks_project_tasks_component__WEBPACK_IMPORTED_MODULE_31__["ProjectTasksComponent"],
                _components_project_defects_project_defects_component__WEBPACK_IMPORTED_MODULE_32__["ProjectDefectsComponent"],
                _components_project_activities_project_activities_component__WEBPACK_IMPORTED_MODULE_33__["ProjectActivitiesComponent"],
                _components_projects_incidents_projects_incidents_component__WEBPACK_IMPORTED_MODULE_34__["ProjectsIncidentsComponent"],
                _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_35__["ProjectDetailsComponent"],
                _components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_36__["CreateAttachmentModalComponent"],
                _components_project_import_project_import_component__WEBPACK_IMPORTED_MODULE_37__["ProjectImportComponent"],
                _components_project_timesheet_project_timesheet_component__WEBPACK_IMPORTED_MODULE_38__["ProjectTimesheetComponent"],
                _components_project_timesheet_edit_modal_project_timesheet_edit_modal_component__WEBPACK_IMPORTED_MODULE_39__["ProjectTimesheetEditModalComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _projects_routing_module__WEBPACK_IMPORTED_MODULE_21__["ProjectsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__["OwlNativeDateTimeModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_16__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_8__["ExportAsModule"],
                ng5_slider__WEBPACK_IMPORTED_MODULE_10__["Ng5SliderModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_11__["NgxEditorModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_13__["NgxPermissionsModule"],
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_18__["DragAndDropModule"],
                angular_resizable_element__WEBPACK_IMPORTED_MODULE_19__["ResizableModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_12__["ProgressbarModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_17__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_17__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_20__["adapterFactory"]
                }),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _admin_todo_todo_module__WEBPACK_IMPORTED_MODULE_23__["TodoModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_22__["SharedModule"]
            ],
            entryComponents: [_components_create_attachment_modal_create_attachment_modal_component__WEBPACK_IMPORTED_MODULE_36__["CreateAttachmentModalComponent"], _components_project_import_project_import_component__WEBPACK_IMPORTED_MODULE_37__["ProjectImportComponent"], _components_project_timesheet_edit_modal_project_timesheet_edit_modal_component__WEBPACK_IMPORTED_MODULE_39__["ProjectTimesheetEditModalComponent"]]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=modules-pm-projects-projects-module.js.map