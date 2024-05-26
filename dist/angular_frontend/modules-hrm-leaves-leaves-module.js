(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-hrm-leaves-leaves-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/create-leave/create-leave.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/create-leave/create-leave.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-suitcase\" aria-hidden=\"true\"></i>&nbsp;{{'leaves.title6' | translate}}</h2>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onCancel()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"createLeaveForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isPageLoad\">\n    <div class=\"modal-body\">\n        <div class=\"form-body\">\n            <div class=\"row\">\n                <div class=\"col-md-6\" *ngxPermissionsOnly=\"['admin', 'super_admin']\">\n                    <div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.user_id.errors }\">\n                        <label for=\"user_id\">{{'leaves.create.fields.user' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                        <ng-select [items]=\"users\" bindLabel=\"firstname\" bindValue=\"id\" [multiple]=\"false\" formControlName=\"user_id\" placeholder=\"{{'leaves.create.placeholders.placeholder1' | translate}}\" [searchable]=\"true\">\n                            <ng-template ng-option-tmp let-item=\"item\">\n                                {{item.firstname}} {{item.lastname}}\n                            </ng-template>\n                        </ng-select>\n                        <div *ngIf=\"isFormSubmitted && leaveControl.user_id.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"leaveControl.user_id.errors.required\">{{'leaves.create.error_messages.message1' | translate}}</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.leave_type_id.errors }\">\n                        <label for=\"leave_type_id\">{{'leaves.create.fields.leave_type' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n                        <div class=\"d-flex\">\n                            <ng-select [searchable]=\"true\" [items]=\"leavetypes\" [selectOnTab]=\"true\" bindLabel=\"leave_type\" bindValue=\"id\" labelForId=\"leave_type\" formControlName=\"leave_type_id\" placeholder=\"{{'leaves.create.placeholders.placeholder2' | translate}}\">\n                            </ng-select>\n                            <button type=\"button\" (click)=\"openLeaveTypeModal($event)\" class=\"btn btn-secondary ml-1\" placement=\"left\" tooltip=\"{{'leave_types.title3' | translate }}\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'leavetypes_create']\"><i class=\"fa fa-plus\"></i></button>\n                        </div>\n                        <div *ngIf=\"isFormSubmitted && leaveControl.leave_type_id.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"leaveControl.leave_type_id.errors.required\">{{'leaves.create.error_messages.message2' | translate}}</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label>{{'leaves.create.fields.duration' | translate}}</label><br>\n                        <label class=\"form-check radio-container d-block\">\n                            <input class=\"form-check-input\" type=\"radio\" formControlName=\"duration\" value=\"full\" id=\"checkbox1\" (change)=\"changeDuration($event)\">\n                            <label class=\"form-check-label\" for=\"checkbox1\">&nbsp;{{'leaves.labels.single' | translate}}&nbsp;</label>\n                            <span class=\"radio-checkmark\"></span>\n                        </label>\n                        <label class=\"form-check radio-container d-block\">\n                            <input class=\"form-check-input\" type=\"radio\" formControlName=\"duration\" value=\"multiple\" id=\"checkbox2\" (change)=\"changeDuration($event)\">\n                            <label class=\"form-check-label\" for=\"checkbox2\">&nbsp;{{'leaves.labels.multiple' | translate}}</label>\n                            <span class=\"radio-checkmark\"></span>\n                        </label>\n                        <label class=\"form-check radio-container d-block\">\n                            <input class=\"form-check-input\" type=\"radio\" formControlName=\"duration\" value=\"half\" id=\"checkbox3\" (change)=\"changeDuration($event)\">\n                            <label class=\"form-check-label\" for=\"checkbox3\">&nbsp;{{'leaves.labels.half_day' | translate}}</label>\n                            <span class=\"radio-checkmark\"></span>\n                        </label>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" *ngIf=\"createLeaveForm.get('duration').value == 'full' || createLeaveForm.get('duration').value == 'half'\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.leave_date.errors }\">\n                        <label for=\"leave_date\">{{'leaves.create.fields.leave_date' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                        <div class=\"position-relative has-icon-left\">\n                            <input type=\"text\" class=\"form-control\" #dp=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" formControlName=\"leave_date\" id=\"leave_date\" placeholder=\"{{'leaves.create.placeholders.placeholder3' | translate}}\" aria-describedby=\"inputGroupPrepend3\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.leave_date.errors }\" />\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n                        </div>\n                        <div *ngIf=\"isFormSubmitted && leaveControl.leave_date.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"leaveControl.leave_date.errors.required\">{{'leaves.create.error_messages.message3' | translate}}</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"createLeaveForm.get('duration').value == 'half'\">\n                        <ng-select \n                            [searchable]=\"true\" \n                            [items]=\"('leaves.half_leaves_status' | translate)\" \n                            [selectOnTab]=\"true\" \n                            bindLabel=\"label\" \n                            bindValue=\"id\" \n                            labelForId=\"label\" \n                            formControlName=\"duration_type\">\n                        </ng-select>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"createLeaveForm.get('duration').value == 'multiple'\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.multi_date.errors }\">\n                        <label for=\"multi_date\">{{'leaves.create.fields.leave_date' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                        <div class=\"position-relative has-icon-left\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"multi_date\" id=\"multi_date\" placeholder=\"{{'leaves.create.placeholders.placeholder3' | translate}}\" aria-describedby=\"inputGroupPrepend4\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" [bsValue]=\"dateSelected\" (bsValueChange)=\"onValueChange($event)\" [dateCustomClasses]=\"selectedClass\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.multi_date.errors }\" />\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n                        </div>\n                        <div class=\"budges-status\">\n                            <span *ngFor=\"let date of dateSelected\" class=\"open\">{{date | dateTimeFormatFilter: loginUser.settings.date_format}}</span>\n                        </div>\n                        <div *ngIf=\"isFormSubmitted && leaveControl.multi_date.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"leaveControl.multi_date.errors.required\">{{'leaves.create.error_messages.message3' | translate}}</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.reason.errors }\">\n                        <label for=\"reason\">{{'leaves.create.fields.reason' | translate}}&nbsp;<span class=\"text-danger\">*</span> </label>\n                        <textarea class=\"form-control\" formControlName=\"reason\" id=\"reason\" placeholder=\"{{'leaves.create.placeholders.placeholder5' | translate}}\"></textarea>\n                        <div *ngIf=\"isFormSubmitted && leaveControl.reason.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"leaveControl.reason.errors.required\">{{'leaves.create.error_messages.message5' | translate}}</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                        <label>{{'leaves.create.fields.attachments' | translate}}</label>\n                        <div class=\"dropzone dz-clickable\" #leaveDropzone>\n                            <div class=\"dz-default dz-message\">\n                                <span><strong>{{'leaves.create.error_messages.message6' | translate}}</strong></span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n        <button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.create' | translate}}</button>\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/edit-leave/edit-leave.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/edit-leave/edit-leave.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-suitcase\" aria-hidden=\"true\"></i>&nbsp;{{'leaves.title7' | translate}}</h2>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"editLeaveForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isPageLoad\">\n    <div class=\"modal-body\">\n        <div class=\"form-body\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.leave_type_id.errors }\">\n                        <label for=\"leave_type_id\">{{'leaves.create.fields.leave_type' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n                        <div class=\"d-flex\">\n                            <ng-select [searchable]=\"true\" [items]=\"leavetypes\" [selectOnTab]=\"true\" bindLabel=\"leave_type\" bindValue=\"id\" labelForId=\"leave_type\" formControlName=\"leave_type_id\" placeholder=\"{{'leaves.create.placeholders.placeholder2' | translate}}\">\n                            </ng-select>\n                            <button type=\"button\" (click)=\"openLeaveTypeModal();\" class=\"btn btn-secondary\" placement=\"left\" tooltip=\"{{'leave_types.title3' | translate }}\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'leavetypes_create']\"><i class=\"fa fa-plus\"></i></button>\n                        </div>\n                        <div *ngIf=\"isFormSubmitted && leaveControl.leave_type_id.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"leaveControl.leave_type_id.errors.required\">{{'leaves.create.error_messages.message2' | translate}}</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label>{{'leaves.create.fields.duration' | translate}}</label><br>\n                        <label class=\"form-check radio-container d-block\">\n                            <input class=\"form-check-input\" type=\"radio\" formControlName=\"duration\" value=\"full\" id=\"checkbox1\" (change)=\"changeDuration($event)\">\n                            <label class=\"form-check-label\" for=\"checkbox1\">&nbsp;{{'leaves.labels.single' | translate}}&nbsp;</label>\n                            <span class=\"radio-checkmark\"></span>\n                        </label>\n                        <label class=\"form-check radio-container d-block\">\n                            <input class=\"form-check-input\" type=\"radio\" formControlName=\"duration\" value=\"half\" id=\"checkbox3\" (change)=\"changeDuration($event)\">\n                            <label class=\"form-check-label\" for=\"checkbox3\">&nbsp;{{'leaves.labels.half_day' | translate}}</label>\n                            <span class=\"radio-checkmark\"></span>\n                        </label>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.leave_date.errors }\">\n                        <label for=\"leave_date\">{{'leaves.create.fields.leave_date' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                        <div class=\"position-relative has-icon-left\">\n                            <input type=\"text\" class=\"form-control\" #dp=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" formControlName=\"leave_date\" id=\"leave_date\" placeholder=\"{{'leaves.create.placeholders.placeholder3' | translate}}\" aria-describedby=\"inputGroupPrepend1\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.leave_date.errors }\" />\n                            <div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n                        </div>\n                        <div *ngIf=\"isFormSubmitted && leaveControl.leave_date.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"leaveControl.leave_date.errors.required\">{{'leaves.create.error_messages.message3' | translate}}</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"editLeaveForm.get('duration').value == 'half'\">\n                        <ng-select \n                            [searchable]=\"true\" \n                            [items]=\"('leaves.half_leaves_status' | translate)\" \n                            [selectOnTab]=\"true\" \n                            bindLabel=\"label\" \n                            bindValue=\"id\" \n                            labelForId=\"label\" \n                            formControlName=\"duration_type\">\n                        </ng-select>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && leaveControl.reason.errors }\">\n                        <label for=\"reason\">{{'leaves.create.fields.reason' | translate}}&nbsp;<span class=\"text-danger\">*</span> </label>\n                        <textarea class=\"form-control\" formControlName=\"reason\" id=\"reason\" placeholder=\"{{'leaves.create.placeholders.placeholder5' | translate}}\"></textarea>\n                        <div *ngIf=\"isFormSubmitted && leaveControl.reason.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"leaveControl.reason.errors.required\">{{'leaves.create.error_messages.message5' | translate}}</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                        <label>{{'leaves.create.fields.attachments' | translate}}</label>\n                        <div class=\"dropzone dz-clickable\" #leaveDropzone>\n                            <ng-container *ngFor=\"let attachment of leave.attachments; index as i\">\n                                <div class=\"dz-preview dz-file-preview\">\n                                    <div class=\"dz-image\"><img data-dz-thumbnail=\"\"></div>\n                                    <div class=\"dz-details\">\n                                        <div class=\"dz-size\">\n                                            <span data-dz-size=\"\">\n                                                <a target=\"_blank\" download=\"{{attachment.file_name}}\" href=\"{{apiUrl}}/uploads/leave_attachment/{{attachment.file_hash}}\">{{'common.download' | translate}}</a>\n                                            </span>\n                                        </div>\n                                        <div class=\"dz-filename\"><span data-dz-name=\"\">{{attachment.file_name}}</span></div>\n                                    </div>\n                                    <button type=\"button\" class=\"btn btn-sm btn-block\" (click)=\"removeattachments(attachment.id)\">{{'common.remove_file' | translate}}</button>\n                                </div>\n                            </ng-container>\n                            <div class=\"dz-default dz-message\">\n                                <span><strong>{{'leaves.create.error_messages.message6' | translate}}</strong></span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n        <button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.update' | translate}}</button>\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/leave-detail/leave-detail.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/leave-detail/leave-detail.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-suitcase\" aria-hidden=\"true\"></i>&nbsp;{{'leave_report.title1' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onCancel()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<div class=\"modal-body\" *ngIf=\"isPageLoad\">\n\t<div class=\"card pl-2 pr-2\">\n\t\t<div class=\"card-header pl-0 pr-0 d-flex\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<ng-container *ngFor=\"let leaveCount of leavesData.leavesCount; index as j\">\n\t\t\t\t\t<div class=\"col-lg-3 col-md-4 col-sm-6 budges-status\">\n\t\t\t\t\t\t<span [ngStyle]=\"{'background-color': leaveCount.color}\">{{leaveCount.count}}</span>&nbsp;{{leaveCount.leave_type}}\n\t\t\t\t\t</div>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card-content pt-3 pb-3\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t<table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"leaves_table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t\t\t<th>{{'leaves.columns.leave_type' | translate}}</th>\n\t\t\t\t\t\t\t\t<th>{{'leaves.columns.date' | translate}}</th>\n\t\t\t\t\t\t\t\t<th>{{'leaves.columns.duration' | translate}}</th>\n\t\t\t\t\t\t\t\t<th>{{'leaves.columns.reason' | translate}}</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody *ngIf=\"leavesData.leaves?.length != 0\">\n\t\t\t\t\t\t\t<tr *ngFor=\"let leave of leavesData.leaves; index as i\">\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{ i + 1 }}</td>\n\t\t\t\t\t\t\t\t<td>{{leave.leave_type.leave_type}}</td>\n\t\t\t\t\t\t\t\t<td>{{leave.leave_date}}</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"leave.duration == 'half' else elseBlock4\">\n                                        <ng-container *ngIf=\"leave.duration_type == 'first_half' else elseBlock5\">\n                                        \t{{'leaves.labels.first_half_day' | translate}}\n                                        </ng-container>\n                                        <ng-template #elseBlock5>\n                                            {{'leaves.labels.second_half_day' | translate}}\n                                        </ng-template>\n                                    </ng-container>\n                                    <ng-template #elseBlock4>\n                                        {{'leaves.labels.full_day' | translate}}\n                                    </ng-template>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>{{leave.reason}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t<tfoot *ngIf=\"leavesData.leaves?.length == 0\" class=\"tfoot_dt\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"5\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-suitcase\" aria-hidden=\"true\"></i>&nbsp;Leave Types</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onCancel()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<div class=\"modal-body\">\n\t<app-leave-types-list></app-leave-types-list>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/calendar-view/calendar-view.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/calendar-view/calendar-view.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card pl-2 pr-2 pb-3\">\n\t\t\t\t<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t\t\t\t\t<h4 class=\"main-title mt-2\"><span>{{'leaves.title5' | translate}}</span></h4>\n\t\t\t\t\t<div class=\"card-buttons\">\n\t\t\t\t\t\t<a [routerLink]=\"['/leaves']\" class=\"btn btn-create mb-0\" tooltip=\"{{'leaves.title3' | translate}}\"><i class=\"fa fa-list\"></i></a>\n\t\t\t\t\t\t<a [routerLink]=\"['/leaves/request']\" class=\"btn btn-create mb-0\" tooltip=\"{{'leaves.title2' | translate}}\"><i class=\"fa fa-trello\"></i></a>\n\t\t\t\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin', 'reports_view']\" [routerLink]=\"['/leaves/report']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.report' | translate}}\"><i class=\"fa fa-area-chart\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body pt-3\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"row text-center\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 d-flex mb-lg-0 mb-2 ml-lg-0 ml-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"btn calender-day\" mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\" (viewDateChange)=\"closeOpenMonthViewDay()\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"calendar-icon fa fa-chevron-left\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"ml-2 mr-2\"><h3>{{ viewDate | calendarDate:(view + 'ViewTitle'): loginUser.language }}</h3></div>\n\t\t\t\t\t\t\t\t\t<div class=\"btn calender-day\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\" (viewDateChange)=\"closeOpenMonthViewDay()\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"calendar-icon fa fa-chevron-right\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb-lg-0 mb-2 text-lg-right\">\n\t\t\t\t\t\t\t\t\t<div class=\"btn-view-date\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn calender-today mb-1\" mwlCalendarToday [(viewDate)]=\"viewDate\">{{'calendar.today' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn calender-today mb-1\" (click)=\"setView(CalendarView.Month)\" [class.active]=\"view === CalendarView.Month\">{{'calendar.month' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn calender-today mb-1\" (click)=\"setView(CalendarView.Week)\" [class.active]=\"view === CalendarView.Week\">{{'calendar.week' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn calender-today mb-1\" (click)=\"setView(CalendarView.Day)\" [class.active]=\"view === CalendarView.Day\">{{'calendar.day' | translate}}</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<div [ngSwitch]=\"view\">\n\t\t\t\t\t\t\t\t<mwl-calendar-month-view *ngSwitchCase=\"CalendarView.Month\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\" (dayClicked)=\"dayClicked($event.day)\" [locale]=\"loginUser.language\"></mwl-calendar-month-view>\n\t\t\t\t\t\t\t\t<mwl-calendar-week-view *ngSwitchCase=\"CalendarView.Week\" [viewDate]=\"viewDate\" [events]=\"events\"[refresh]=\"refresh\" [locale]=\"loginUser.language\"></mwl-calendar-week-view>\n\t\t\t\t\t\t\t\t<mwl-calendar-day-view *ngSwitchCase=\"CalendarView.Day\" [viewDate]=\"viewDate\" [events]=\"events\"[refresh]=\"refresh\" [locale]=\"loginUser.language\"></mwl-calendar-day-view>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/leaves-list/leaves-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/leaves-list/leaves-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card pl-2 pr-2\">\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\n                    <h4 class=\"main-title mt-2\"><span>{{'leaves.title' | translate}}</span></h4>\n                    <div class=\"card-buttons\">\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'leavetypes_view']\" [routerLink]=\"['/leave-types']\" class=\"btn btn-create mb-0\" tooltip=\"{{'leave_types.title' | translate}}\"><i class=\"fa fa-suitcase\"></i></a>\n                        <a [routerLink]=\"['/leaves/request']\" class=\"btn btn-create mb-0\" tooltip=\"{{'leaves.title2' | translate}}\"><i class=\"fa fa-trello\"></i></a>\n                        <a [routerLink]=\"['/leaves/calendar']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.calendar_view' | translate}}\"><i class=\"fa fa-calendar\"></i></a>\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'reports_view']\" [routerLink]=\"['/leaves/report']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.report' | translate}}\"><i class=\"fa fa-area-chart\"></i></a>\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'leaves_create']\" (click)=\"openLeaveCreateModal()\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n                    </div>\n                </div>\n                <div class=\"card-content pt-3 pb-3\">\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                            <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"leaves_table\">\n                                <thead>\n                                    <tr>\n                                        <th>#</th>\n                                        <th>{{'leaves.create.fields.user' | translate}}</th>\n                                        <th>{{'leaves.columns.request_date' | translate}}</th>\n                                        <th>{{'leaves.columns.leave_date' | translate}}</th>\n                                        <th>{{'leaves.create.fields.leave_type' | translate}}</th>\n                                        <th>{{'leaves.create.fields.duration' | translate}}</th>\n                                        <th>{{'leaves.create.fields.status' | translate}}</th>\n                                        <th>{{'common.actions' | translate}}</th>\n                                    </tr>\n                                </thead>\n                                <tbody *ngIf=\"leaves?.length != 0\">\n                                    <tr *ngFor=\"let leave of leaves; index as i\">\n                                        <td class=\"text-center\">{{ i + 1 }}</td>\n                                        <td>{{leave.firstname}} {{leave.lastname}}</td>\n                                        <td>{{ leave.created_at | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n                                        <td>{{ leave.leave_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n                                        <td>{{leave.leave_type}}</td>\n                                        <td>\n                                            <ng-container *ngIf=\"leave.duration == 'half' else elseBlock4\">\n                                                <ng-container *ngIf=\"leave.duration_type == 'first_half' else elseBlock5\">\n                                                \t{{'leaves.labels.first_half_day' | translate}}\n\t                                            </ng-container>\n\t                                            <ng-template #elseBlock5>\n\t                                                {{'leaves.labels.second_half_day' | translate}}\n\t                                            </ng-template>\n                                            </ng-container>\n                                            <ng-template #elseBlock4>\n                                                {{'leaves.labels.full_day' | translate}}\n                                            </ng-template>\n                                        </td>\n                                        <td class=\"status-dropdown\">\n                                            <ng-container *ngIf=\"leave.status == 4 || leave.status == 5 else actionBlock\">\n                                                <div class=\"budges-status\">\n                                                    <span class=\"cancel\" *ngIf=\"leave.status == 4\">{{'common.cancel' | translate}}</span>\n                                                    <span class=\"completed\" *ngIf=\"leave.status == 5\">{{'common.status.taken' | translate}}</span>\n                                                </div>\n                                            </ng-container>\n                                            <ng-template #actionBlock>\n                                                <ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'leaves_edit'] else elseBlock;\">\n                                                    <div class=\"btn-group\" dropdown>\n                                                        <ng-container *ngIf=\"getCheckStatusChangePermission(leave) else elseBlock\">\n                                                            <button dropdownToggle id=\"button-basic\" type=\"button\" class=\"btn dropdown-toggle select-btn-lg\" aria-controls=\"dropdown-basic\">{{getTranslateStatus(leave.status) | translate}}&nbsp;<span class=\"caret\"></span></button>\n                                                            <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic\">\n                                                                <ng-container *ngFor=\"let status of ('leaves.status' | translate)\">\n                                                                    <li role=\"menuitem\" *ngIf=\"status.id == 1 || status.id == 2 || status.id == 3\">\n                                                                        <a class=\"dropdown-item btn btn-sm {{status.class}}\" [ngClass]=\"{'active': leave.status == status.id}\" (click)=\"changeLeaveStatus([leave.id], status);leave.status = status.id\">{{status.label}}</a>\n                                                                    </li>\n                                                                </ng-container>\n                                                            </ul>\n                                                        </ng-container>\n                                                    </div>\n                                                </ng-container>\n                                                <ng-template #elseBlock>\n                                                    <ng-container *ngFor=\"let status of ('leaves.status' | translate)\">\n                                                        <div class=\"budges-status\">\n                                                            <span class=\"{{status.class}}\" *ngIf=\"status.id == leave.status\">{{status.label}}</span>\n                                                        </div>\n                                                    </ng-container>\n                                                </ng-template>\n                                            </ng-template>\n                                        </td>\n                                        <td class=\"actions-dropdown\">\n                                            <div class=\"btn-group\" dropdown *ngIf=\"getCheckPermission(leave) else elseBlock1;\">\n                                                <button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n                                                <ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n                                                    <li role=\"menuitem\">\n                                                        <a (click)=\"openLeaveEditModal(leave)\" class=\"dropdown-item btn btn-edit btn-raised\"><i class=\"fa fa-pencil-square-o\" tooltip=\"{{'common.edit' | translate}}\"></i></a>\n                                                    </li>\n                                                    <li role=\"menuitem\" *ngIf=\"leave.status == 1 || leave.status == 2\">\n                                                        <a (click)=\"changeLeaveStatus(leave.id, 4)\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-close\" tooltip=\"{{'common.cancel' | translate}}\"></i></a>\n                                                    </li>\n                                                    <li role=\"menuitem\">\n                                                        <a (click)=\"deleteLeave(leave.id)\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\" tooltip=\"{{'common.delete' | translate}}\"></i></a>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                            <ng-template #elseBlock1><span>-</span></ng-template>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                                <tfoot *ngIf=\"leaves?.length == 0\" class=\"tfoot_dt\">\n                                    <tr>\n                                        <td colspan=\"7\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n                                    </tr>\n                                </tfoot>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/leaves-report/leaves-report.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/leaves-report/leaves-report.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-4\">\n\t\t\t<div class=\"card pl-2 pr-2\">\n\t\t\t\t<div class=\"card-content pt-3 pb-3\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-xs-12 col-12 form-group\">\n\t\t\t\t\t\t\t\t<label for=\"daterangepicker\">{{'leave_report.filter.fields.date_range' | translate}}</label>\n\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"{{'leave_report.filter.placeholders.placeholder1' | translate}}\"\n\t\t\t\t\t\t\t\t\tbsDaterangepicker\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"period_from_to\"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-xs-12 col-12 form-group\">\n\t\t\t\t\t\t\t\t<label for=\"user_id\">{{'leave_report.filter.fields.employee_name' | translate}}</label>\n\t\t\t\t\t\t\t\t<ng-select [items]=\"users\"\n\t\t\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t[multiple]=\"false\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"user_id\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"{{'leave_report.filter.placeholders.placeholder2' | translate}}\"\n\t\t\t\t\t\t\t\t\t[searchable]=\"true\">\n\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-xs-12 col-12 form-group\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-submit mb-0\" (click)=\"submitFilter()\">{{'common.apply' | translate}}</button>\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"resetForm()\">{{'common.reset' | translate}}</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-8\">\n\t\t\t<div class=\"card pl-2 pr-2\">\n\t\t\t\t<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t\t\t\t\t<h4 class=\"main-title mt-2\"><span>{{'leave_report.title' | translate}}</span></h4>\n\t\t\t\t\t<div class=\"card-buttons\">\n\t\t\t\t\t\t<a [routerLink]=\"['/leaves']\" class=\"btn btn-create mb-0\" tooltip=\"{{'leaves.title3' | translate}}\"><i class=\"fa fa-list\"></i></a>\n\t\t\t\t\t\t<a [routerLink]=\"['/leaves/request']\" class=\"btn btn-create mb-0\" tooltip=\"{{'leaves.title2' | translate}}\"><i class=\"fa fa-trello\"></i></a>\n\t\t\t\t\t\t<a [routerLink]=\"['/leaves/calendar']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.calendar_view' | translate}}\"><i class=\"fa fa-calendar\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-content pt-3 pb-3\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"leaves_table\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'leave_report.columns.user' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'leave_report.columns.pending_leave' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'leave_report.columns.approved_leave' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'leave_report.columns.taken_leave' | translate}}</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody *ngIf=\"leaves?.length != 0\">\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let leave of leaves; index as i\">\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{ i + 1 }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{leave.firstname}} {{leave.lastname}}</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"open\">{{leave.pending_leaves}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openLeaveDetail(1, leave.id)\">&nbsp;{{'common.view' | translate}}</a>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"in_progress\">{{leave.approved_leaves}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openLeaveDetail(2, leave.id)\">&nbsp;{{'common.view' | translate}}</a>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"completed\">{{leave.taken_leaves}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openLeaveDetail(5, leave.id)\">&nbsp;{{'common.view' | translate}}</a>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot *ngIf=\"leaves?.length == 0\" class=\"tfoot_dt\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"5\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/list-view/list-view.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/list-view/list-view.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card pl-2 pr-2\">\n\t\t\t\t<div class=\"card-header pl-0 pr-0\">\n\t\t\t\t\t<h4 class=\"main-title mt-2\"><span>{{'leaves.title2' | translate}}</span></h4>\n\t\t\t\t\t<div class=\"card-buttons\">\n\t\t\t\t\t\t<a [routerLink]=\"['/leaves']\" class=\"btn btn-create mb-0\" tooltip=\"{{'leaves.title3' | translate}}\"><i class=\"fa fa-list\"></i></a>\n\t\t\t\t\t\t<a [routerLink]=\"['/leaves/calendar']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.calendar_view' | translate}}\"><i class=\"fa fa-calendar\"></i></a>\n\t\t\t\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin', 'reports_view']\" [routerLink]=\"['/leaves/report']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.report' | translate}}\"><i class=\"fa fa-area-chart\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row project-planner-list\">\n\t\t<ng-container *ngFor=\"let leave of leaves; let i = index\">\n\t\t\t<div class=\"col-lg-6 \">\n\t\t\t\t<div class=\"card list-details\">\n\t\t\t\t\t<div class=\"card-body p-3\">\n\t\t\t\t\t\t<div class=\"task-name\">\n\t\t\t\t\t\t\t<p class=\"task-title\">{{leave.leave_type.leave_type}} {{'leaves.title4' | translate}}</p>\n\t\t\t\t\t\t\t<div class=\"mb-15\">\n\t\t\t\t\t\t\t\t<a  href=\"#\" placement=\"top\" tooltip=\"{{leave.user.firstname}} {{leave.user.lastname}}\">\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"leave.user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{leave.user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"!leave.user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"ml-3\"><a [routerLink]=\"['/users/profile', leave.user.id]\">{{leave.user.firstname}} {{leave.user.lastname}}</a></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text-size d-lg-flex justify-content-between mt-2 mb-2\">\n\t\t\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t\t\t<div class=\"mb-lg-0 mb-2\"><strong>{{'leaves.columns.request_date' | translate}}:</strong></div>\n\t\t\t\t\t\t\t\t<div class=\"ml-2 mr-2\"><span>{{ leave.created_at | dateTimeFormatFilter: loginUser.settings.date_format }}</span></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t\t\t<div class=\"mb-lg-0 mb-2\"><strong>{{'leaves.columns.leave_date' | translate}}:</strong></div>\n\t\t\t\t\t\t\t\t<div class=\"ml-2 mr-2\"><span>{{ leave.leave_date | dateTimeFormatFilter: loginUser.settings.date_format }}</span></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text-size d-lg-flex justify-content-between mt-2 mb-2\">\n\t\t\t\t\t\t\t<ng-container *ngIf=\"leave.duration =='half' else elseBlock\">\n\t\t\t\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t\t\t\t<div class=\"mb-lg-0 mb-2\"><strong>{{'leaves.columns.duration' | translate}}:</strong></div>\n\t\t\t\t\t\t\t\t\t<div class=\"ml-2 mr-2\"><span>{{ getTranslateDurationType(leave.duration_type) | translate }}</span></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-template #elseBlock>\n\t\t\t\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t\t\t\t<div class=\"mb-lg-0 mb-2\"><strong>{{'leaves.columns.duration' | translate}}:</strong></div>\n\t\t\t\t\t\t\t\t\t<div class=\"ml-2 mr-2\"><span>{{'leaves.labels.full_day' | translate}}</span></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"mb-2 text-size\">\n\t\t\t\t\t\t\t<span class=\"pr-2 text-nowrap mb-2 d-inline-block\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-tasks mr-1 text-muted\"></i>\n\t\t\t\t\t\t\t\t<b>{{leave.total_leave}}</b> {{'leaves.labels.total_leaves' | translate}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"pr-2 text-nowrap mb-2 d-inline-block\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-thumbs-o-up mr-1 text-muted\"></i>\n\t\t\t\t\t\t\t\t<b>{{leave.total_approved_leaves}}</b> {{'leaves.labels.approved' | translate}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"pr-2 text-nowrap mb-2 d-inline-block\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-check mr-1 text-muted\"></i>\n\t\t\t\t\t\t\t\t<b>{{leave.total_taken_leaves}}</b> {{'leaves.labels.taken' | translate}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"pr-2 text-nowrap mb-2 d-inline-block\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-briefcase mr-1 text-muted\"></i>\n\t\t\t\t\t\t\t\t<b>{{leave.remaining_leaves}}</b> {{'leaves.labels.remaining' | translate}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>{{leave.reason}}</p>\n\t\t\t\t\t\t<ng-container *ngFor=\"let attachment of leave.attachments\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<a target=\"_blank\" download=\"{{attachment.file_name}}\" href=\"{{apiUrl}}/uploads/leave_attachment/{{attachment.file_hash}}\">{{attachment.file_name}}</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-submit\" (click)=\"changeLeaveStatus([leave.id], 2);\">{{'leaves.buttons.accept' | translate}}</button>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-cancel\" (click)=\"changeRejectLeaveStatus([leave.id], 3);\">{{'leaves.buttons.reject' | translate}}</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<div class=\"col-md-12\" *ngIf=\"leaves?.length == 0\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"card-content pt-2\">\n\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t<img src=\"assets/img/norecord-img.png\" width=\"50\">\n\t\t\t\t\t\t\t<p class=\"mt-1\">{{'common.empty_message.leaves' | translate}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n");

/***/ }),

/***/ "./src/app/core/helpers/hrm.helper.ts":
/*!********************************************!*\
  !*** ./src/app/core/helpers/hrm.helper.ts ***!
  \********************************************/
/*! exports provided: leave_status_key_value, half_leaves_duration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leave_status_key_value", function() { return leave_status_key_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "half_leaves_duration", function() { return half_leaves_duration; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

//--
// Leave status
var leave_status_key_value = [];
leave_status_key_value[1] = 'common.status.pending';
leave_status_key_value[2] = 'common.status.approved';
leave_status_key_value[3] = 'common.status.rejected';
leave_status_key_value[4] = 'common.status.cancel';
leave_status_key_value[5] = 'common.status.taken';
var half_leaves_duration = [];
half_leaves_duration['first_half'] = 'leaves.labels.first_half_day';
half_leaves_duration['second_half'] = 'leaves.labels.second_half_day';


/***/ }),

/***/ "./src/app/core/services/leave.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/leave.service.ts ***!
  \************************************************/
/*! exports provided: LeaveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveService", function() { return LeaveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var LeaveService = /** @class */ (function () {
    function LeaveService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    LeaveService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/leaves");
    };
    LeaveService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/leaves/" + id);
    };
    LeaveService.prototype.create = function (leave) {
        return this.http.post(this.apiUrl + "/api/leaves", leave);
    };
    LeaveService.prototype.update = function (leave) {
        return this.http.put(this.apiUrl + "/api/leaves/" + leave.id, leave);
    };
    LeaveService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/leaves/" + id);
    };
    LeaveService.prototype.getCalendarLeaves = function () {
        return this.http.get(this.apiUrl + "/api/leaves/calendar");
    };
    LeaveService.prototype.getPendingLeaves = function () {
        return this.http.get(this.apiUrl + "/api/leaves/pending");
    };
    LeaveService.prototype.changeStatus = function (leave) {
        return this.http.post(this.apiUrl + "/api/leaves/change-status/" + leave.id, { "status": leave.status });
    };
    LeaveService.prototype.changeRejectLeaveStatus = function (leave) {
        return this.http.post(this.apiUrl + "/api/leaves/change-status/" + leave.id, leave);
    };
    LeaveService.prototype.getLeaveReportDetails = function (leave) {
        return this.http.post(this.apiUrl + "/api/leaves/report-details", leave);
    };
    LeaveService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LeaveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LeaveService);
    return LeaveService;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leaves/components/create-leave/create-leave.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/components/create-leave/create-leave.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .bs-datepicker-body table td span.custom-selected-date,\n::ng-deep .bs-datepicker-body table td span.custom-selected-date.selected {\n  background-color: red !important;\n  color: white !important;\n}\n\n::ng-deep .bs-datepicker-body table td span.selected {\n  background-color: transparent !important;\n  color: #54708b !important;\n}\n\n::ng-deep .bs-datepicker-body table.days span.in-range:before {\n  background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9ocm0vbGVhdmVzL2NvbXBvbmVudHMvY3JlYXRlLWxlYXZlL2NyZWF0ZS1sZWF2ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ocm0vbGVhdmVzL2NvbXBvbmVudHMvY3JlYXRlLWxlYXZlL2NyZWF0ZS1sZWF2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxnQ0FBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx3Q0FBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx3Q0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ocm0vbGVhdmVzL2NvbXBvbmVudHMvY3JlYXRlLWxlYXZlL2NyZWF0ZS1sZWF2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uY3VzdG9tLXNlbGVjdGVkLWRhdGUsXG46Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLmN1c3RvbS1zZWxlY3RlZC1kYXRlLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6ICM1NDcwOGIgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUuZGF5cyBzcGFuLmluLXJhbmdlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59IiwiOjpuZy1kZWVwIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3Bhbi5jdXN0b20tc2VsZWN0ZWQtZGF0ZSxcbjo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uY3VzdG9tLXNlbGVjdGVkLWRhdGUuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzU0NzA4YiAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5kYXlzIHNwYW4uaW4tcmFuZ2U6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/hrm/leaves/components/create-leave/create-leave.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/components/create-leave/create-leave.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CreateLeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLeaveComponent", function() { return CreateLeaveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_leave_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/leave.service */ "./src/app/core/services/leave.service.ts");
/* harmony import */ var _core_services_leavetype_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/leavetype.service */ "./src/app/core/services/leavetype.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _components_leave_type_modal_leave_type_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/leave-type-modal/leave-type-modal.component */ "./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_14__);















var CreateLeaveComponent = /** @class */ (function () {
    function CreateLeaveComponent(translate, bsModalRef, formBuilder, toastr, modalService, datepipe, leaveService, leavetypeService, userService, authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.modalService = modalService;
        this.datepipe = datepipe;
        this.leaveService = leaveService;
        this.leavetypeService = leavetypeService;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isPageLoad = false;
        this.dateSelected = [];
        this.selectedClass = [];
        this.selectedFiles = [];
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_12__["datepickerConfig"];
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    CreateLeaveComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.getLeaveTypes(true);
        this.getUsers();
    };
    CreateLeaveComponent.prototype.loadForm = function () {
        var _this_1 = this;
        if (this.loginUser.is_admin || this.loginUser.is_super_admin) {
            this.createLeaveForm = this.formBuilder.group({
                user_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                leave_type_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                duration: ['full'],
                multi_date: [null],
                leave_date: [null],
                duration_type: [null],
                reason: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                status: [1],
                files: [null]
            });
        }
        else {
            this.createLeaveForm = this.formBuilder.group({
                user_id: [this.loginUser.id],
                leave_type_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                duration: ['full'],
                multi_date: [null],
                leave_date: [null],
                duration_type: [null],
                reason: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                status: [1],
                files: [null]
            });
        }
        this.changeDuration();
        this.isPageLoad = true;
        setTimeout(function () {
            _this_1.loadDropzone();
        });
    };
    CreateLeaveComponent.prototype.loadDropzone = function () {
        var that = this;
        this.dropzoneObj = new dropzone__WEBPACK_IMPORTED_MODULE_14__(this.leaveDropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 5,
            clickable: true,
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
    Object.defineProperty(CreateLeaveComponent.prototype, "leaveControl", {
        get: function () { return this.createLeaveForm.controls; },
        enumerable: true,
        configurable: true
    });
    CreateLeaveComponent.prototype.changeDuration = function ($event) {
        if ($event === void 0) { $event = []; }
        if (this.createLeaveForm.value.duration == 'multiple') {
            this.selectedClass = [];
            this.dateSelected = [];
            this.createLeaveForm.get('multi_date').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.createLeaveForm.get('multi_date').updateValueAndValidity();
            this.createLeaveForm.get('leave_date').clearValidators();
            this.createLeaveForm.get('leave_date').updateValueAndValidity();
        }
        else {
            this.createLeaveForm.get('leave_date').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.createLeaveForm.get('leave_date').updateValueAndValidity();
            this.createLeaveForm.get('multi_date').clearValidators();
            this.createLeaveForm.get('multi_date').updateValueAndValidity();
        }
        if (this.createLeaveForm.value.duration == 'half') {
            this.createLeaveForm.patchValue({ 'duration_type': 'first_half' });
        }
        else {
            this.createLeaveForm.patchValue({ 'duration_type': null });
        }
    };
    CreateLeaveComponent.prototype.getLeaveTypes = function (isFormload) {
        var _this_1 = this;
        if (isFormload === void 0) { isFormload = false; }
        this.leavetypeService.getAll()
            .subscribe(function (data) {
            _this_1.leavetypes = data;
            if (isFormload) {
                _this_1.loadForm();
            }
        });
    };
    CreateLeaveComponent.prototype.getUsers = function () {
        var _this_1 = this;
        this.userService.getAll()
            .subscribe(function (data) {
            _this_1.users = data;
        });
    };
    CreateLeaveComponent.prototype.getDateItem = function (date) {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    };
    CreateLeaveComponent.prototype.onValueChange = function (event) {
        var _this_1 = this;
        if (event && event.length === undefined) {
            var date_1 = this.getDateItem(event);
            var index = this.dateSelected.findIndex(function (item) {
                var testDate = _this_1.getDateItem(item);
                return testDate === date_1;
            });
            if (index < 0) {
                this.dateSelected.push(event);
            }
            else {
                this.dateSelected.splice(index, 1);
            }
        }
        if (this.dateSelected.length > 0) {
            this.selectedClass = this.dateSelected.map(function (date) {
                return {
                    date: date,
                    classes: ['custom-selected-date']
                };
            });
        }
    };
    CreateLeaveComponent.prototype.renderDates = function () {
        var dateArray = [];
        if (this.dateSelected) {
            for (var i in this.dateSelected) {
                dateArray.push(this.datepipe.transform(this.dateSelected[i], 'yyyy-MM-dd'));
            }
        }
        return dateArray;
    };
    CreateLeaveComponent.prototype.openLeaveTypeModal = function () {
        var _this_1 = this;
        this.bsModalRef = this.modalService.show(_components_leave_type_modal_leave_type_modal_component__WEBPACK_IMPORTED_MODULE_13__["LeaveTypeModalComponent"], this.modalConfigs);
        this.bsModalRef.content.event.subscribe(function (data) {
            _this_1.getLeaveTypes();
        });
    };
    CreateLeaveComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.createLeaveForm.invalid) {
            return;
        }
        this.createLeaveForm.patchValue({ files: this.selectedFiles });
        this.createLeaveForm.value.leave_date = this.datepipe.transform(this.createLeaveForm.value.leave_date, "yyyy-MM-dd");
        this.createLeaveForm.value.multi_date = this.renderDates();
        this.leaveService.create(this.createLeaveForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('leaves.messages.create'), _this_1.translate.instant('leaves.title'));
            _this_1.onCancel();
            _this_1.event.emit({ data: true });
        }, function (error) {
            _this_1.onCancel();
        });
    };
    CreateLeaveComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    CreateLeaveComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _core_services_leave_service__WEBPACK_IMPORTED_MODULE_8__["LeaveService"] },
        { type: _core_services_leavetype_service__WEBPACK_IMPORTED_MODULE_9__["LeavetypeService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('leaveDropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateLeaveComponent.prototype, "leaveDropzone", void 0);
    CreateLeaveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-leave',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-leave.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/create-leave/create-leave.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-leave.component.scss */ "./src/app/modules/hrm/leaves/components/create-leave/create-leave.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _core_services_leave_service__WEBPACK_IMPORTED_MODULE_8__["LeaveService"],
            _core_services_leavetype_service__WEBPACK_IMPORTED_MODULE_9__["LeavetypeService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]])
    ], CreateLeaveComponent);
    return CreateLeaveComponent;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leaves/components/edit-leave/edit-leave.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/components/edit-leave/edit-leave.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .bs-datepicker-body table td span.custom-selected-date,\n::ng-deep .bs-datepicker-body table td span.custom-selected-date.selected {\n  background-color: red !important;\n  color: white !important;\n}\n\n::ng-deep .bs-datepicker-body table td span.selected {\n  background-color: transparent !important;\n  color: #54708b !important;\n}\n\n::ng-deep .bs-datepicker-body table.days span.in-range:before {\n  background-color: transparent !important;\n}\n\nimg {\n  max-width: 100%;\n  height: 120px;\n}\n\n.dz-image-custom {\n  border-radius: 20px;\n  width: 120px;\n  height: 120px;\n  position: relative;\n  display: block;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9ocm0vbGVhdmVzL2NvbXBvbmVudHMvZWRpdC1sZWF2ZS9lZGl0LWxlYXZlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hybS9sZWF2ZXMvY29tcG9uZW50cy9lZGl0LWxlYXZlL2VkaXQtbGVhdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsZ0NBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usd0NBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usd0NBQUE7QUNDRjs7QURFQTtFQUNDLGVBQUE7RUFDQSxhQUFBO0FDQ0Q7O0FERUE7RUFDQyxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ocm0vbGVhdmVzL2NvbXBvbmVudHMvZWRpdC1sZWF2ZS9lZGl0LWxlYXZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3Bhbi5jdXN0b20tc2VsZWN0ZWQtZGF0ZSxcbjo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uY3VzdG9tLXNlbGVjdGVkLWRhdGUuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzU0NzA4YiAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5kYXlzIHNwYW4uaW4tcmFuZ2U6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW1nIHtcblx0bWF4LXdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEyMHB4O1xufVxuXG4uZHotaW1hZ2UtY3VzdG9tIHtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0d2lkdGg6IDEyMHB4O1xuXHRoZWlnaHQ6IDEyMHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR6LWluZGV4OiAxMDtcbn0iLCI6Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLmN1c3RvbS1zZWxlY3RlZC1kYXRlLFxuOjpuZy1kZWVwIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3Bhbi5jdXN0b20tc2VsZWN0ZWQtZGF0ZS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3Bhbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNTQ3MDhiICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLmRheXMgc3Bhbi5pbi1yYW5nZTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5kei1pbWFnZS1jdXN0b20ge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHotaW5kZXg6IDEwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/hrm/leaves/components/edit-leave/edit-leave.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/components/edit-leave/edit-leave.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditLeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditLeaveComponent", function() { return EditLeaveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_leave_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/leave.service */ "./src/app/core/services/leave.service.ts");
/* harmony import */ var _core_services_leavetype_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/leavetype.service */ "./src/app/core/services/leavetype.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _components_leave_type_modal_leave_type_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/leave-type-modal/leave-type-modal.component */ "./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_14__);















var EditLeaveComponent = /** @class */ (function () {
    function EditLeaveComponent(translate, bsModalRef, formBuilder, modalService, toastr, datepipe, leaveService, leavetypeService, authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.toastr = toastr;
        this.datepipe = datepipe;
        this.leaveService = leaveService;
        this.leavetypeService = leavetypeService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedFiles = [];
        this.removedFiles = [];
        this.isFormSubmitted = false;
        this.isPageLoad = false;
        this.isFormLoad = false;
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_11__["datepickerConfig"];
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    EditLeaveComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.getLeaveTypes(true);
    };
    EditLeaveComponent.prototype.loadForm = function () {
        var _this_1 = this;
        this.editLeaveForm = this.formBuilder.group({
            id: [this.leave.id],
            user_id: [this.leave.user_id],
            leave_type_id: [this.leave.leave_type_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            duration: [this.leave.duration],
            duration_type: [this.leave.duration_type],
            leave_date: [new Date(this.leave.leave_date), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            reason: [this.leave.reason, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: [this.leave.status],
            files: [null],
            removed_files: [null]
        });
        this.isPageLoad = true;
        setTimeout(function () {
            _this_1.loadDropzone();
        });
    };
    EditLeaveComponent.prototype.loadDropzone = function () {
        var that = this;
        this.dropzoneObj = new dropzone__WEBPACK_IMPORTED_MODULE_14__(this.leaveDropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 5,
            clickable: true,
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
    EditLeaveComponent.prototype.removeattachments = function (id) {
        var _this_1 = this;
        this.leave.attachments.forEach(function (value, index) {
            if (value.id == id) {
                _this_1.leave.attachments.splice(index, 1);
                _this_1.removedFiles.push(id);
            }
        });
    };
    Object.defineProperty(EditLeaveComponent.prototype, "leaveControl", {
        get: function () { return this.editLeaveForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditLeaveComponent.prototype.changeDuration = function ($event) {
        if ($event === void 0) { $event = []; }
        if (this.editLeaveForm.value.duration == 'half') {
            this.editLeaveForm.patchValue({ 'duration_type': 'first_half' });
        }
        else {
            this.editLeaveForm.patchValue({ 'duration_type': null });
        }
    };
    EditLeaveComponent.prototype.getLeaveTypes = function (isFormload) {
        var _this_1 = this;
        if (isFormload === void 0) { isFormload = false; }
        this.leavetypeService.getAll()
            .subscribe(function (data) {
            _this_1.leavetypes = data;
            if (isFormload) {
                _this_1.loadForm();
            }
        });
    };
    EditLeaveComponent.prototype.openLeaveTypeModal = function () {
        var _this_1 = this;
        this.bsModalRef = this.modalService.show(_components_leave_type_modal_leave_type_modal_component__WEBPACK_IMPORTED_MODULE_12__["LeaveTypeModalComponent"], this.modalConfigs);
        this.bsModalRef.content.event.subscribe(function (data) {
            _this_1.getLeaveTypes();
        });
        return false;
    };
    EditLeaveComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.editLeaveForm.invalid) {
            return;
        }
        this.editLeaveForm.patchValue({ files: this.selectedFiles });
        this.editLeaveForm.patchValue({ removed_files: this.removedFiles });
        this.editLeaveForm.value.leave_date = this.datepipe.transform(this.editLeaveForm.value.leave_date, 'yyyy-MM-dd');
        this.leaveService.update(this.editLeaveForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('leaves.messages.update'), _this_1.translate.instant('leaves.title'));
            _this_1.onCancel();
            _this_1.event.emit({ data: true });
        }, function (error) {
            _this_1.onCancel();
        });
    };
    EditLeaveComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    EditLeaveComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _core_services_leave_service__WEBPACK_IMPORTED_MODULE_8__["LeaveService"] },
        { type: _core_services_leavetype_service__WEBPACK_IMPORTED_MODULE_9__["LeavetypeService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('leaveDropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditLeaveComponent.prototype, "leaveDropzone", void 0);
    EditLeaveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-leave',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-leave.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/edit-leave/edit-leave.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-leave.component.scss */ "./src/app/modules/hrm/leaves/components/edit-leave/edit-leave.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _core_services_leave_service__WEBPACK_IMPORTED_MODULE_8__["LeaveService"],
            _core_services_leavetype_service__WEBPACK_IMPORTED_MODULE_9__["LeavetypeService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]])
    ], EditLeaveComponent);
    return EditLeaveComponent;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leaves/components/leave-detail/leave-detail.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/components/leave-detail/leave-detail.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaHJtL2xlYXZlcy9jb21wb25lbnRzL2xlYXZlLWRldGFpbC9sZWF2ZS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/hrm/leaves/components/leave-detail/leave-detail.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/components/leave-detail/leave-detail.component.ts ***!
  \**************************************************************************************/
/*! exports provided: LeaveDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveDetailComponent", function() { return LeaveDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_leave_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/leave.service */ "./src/app/core/services/leave.service.ts");





var LeaveDetailComponent = /** @class */ (function () {
    function LeaveDetailComponent(bsModalRef1, modalService, leaveService) {
        this.bsModalRef1 = bsModalRef1;
        this.modalService = modalService;
        this.leaveService = leaveService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isPageLoad = false;
    }
    LeaveDetailComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getLeaves();
    };
    LeaveDetailComponent.prototype.getLeaves = function () {
        var _this = this;
        this.leaveService.getLeaveReportDetails(this.leave)
            .subscribe(function (data) {
            _this.leavesData = data;
            _this.isPageLoad = true;
        });
    };
    LeaveDetailComponent.prototype.onCancel = function () {
        this.event.emit({ data: true });
        this.onClose.next(false);
        this.bsModalRef1.hide();
    };
    LeaveDetailComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: _core_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveService"] }
    ]; };
    LeaveDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leave-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/leave-detail/leave-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leave-detail.component.scss */ "./src/app/modules/hrm/leaves/components/leave-detail/leave-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _core_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveService"]])
    ], LeaveDetailComponent);
    return LeaveDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaHJtL2xlYXZlcy9jb21wb25lbnRzL2xlYXZlLXR5cGUtbW9kYWwvbGVhdmUtdHlwZS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LeaveTypeModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTypeModalComponent", function() { return LeaveTypeModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var LeaveTypeModalComponent = /** @class */ (function () {
    function LeaveTypeModalComponent(bsModalRef1, modalService) {
        this.bsModalRef1 = bsModalRef1;
        this.modalService = modalService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    LeaveTypeModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    };
    LeaveTypeModalComponent.prototype.onCancel = function () {
        this.event.emit({ data: true });
        this.onClose.next(false);
        this.bsModalRef1.hide();
    };
    LeaveTypeModalComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
    ]; };
    LeaveTypeModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-type-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leave-type-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leave-type-modal.component.scss */ "./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], LeaveTypeModalComponent);
    return LeaveTypeModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leaves/leaves-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/leaves-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LeavesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavesRoutingModule", function() { return LeavesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_leaves_list_leaves_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/leaves-list/leaves-list.component */ "./src/app/modules/hrm/leaves/pages/leaves-list/leaves-list.component.ts");
/* harmony import */ var _pages_calendar_view_calendar_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/calendar-view/calendar-view.component */ "./src/app/modules/hrm/leaves/pages/calendar-view/calendar-view.component.ts");
/* harmony import */ var _pages_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/list-view/list-view.component */ "./src/app/modules/hrm/leaves/pages/list-view/list-view.component.ts");
/* harmony import */ var _pages_leaves_report_leaves_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/leaves-report/leaves-report.component */ "./src/app/modules/hrm/leaves/pages/leaves-report/leaves-report.component.ts");








var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_leaves_list_leaves_list_component__WEBPACK_IMPORTED_MODULE_4__["LeavesListComponent"]
            },
            {
                path: 'calendar',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_calendar_view_calendar_view_component__WEBPACK_IMPORTED_MODULE_5__["CalendarViewComponent"],
                data: {
                    breadcrumbs: {
                        text: "breadcrumbs.calendar.title",
                        icon: "fa fa-calendar",
                        show: true,
                        isHome: true
                    }
                }
            },
            {
                path: 'request',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_6__["ListViewComponent"],
                data: {
                    breadcrumbs: {
                        text: "common.request",
                        icon: "fa fa-trello",
                        show: true,
                        isHome: true
                    }
                }
            },
            {
                path: 'report',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_leaves_report_leaves_report_component__WEBPACK_IMPORTED_MODULE_7__["LeavesReportComponent"],
                data: {
                    breadcrumbs: {
                        text: "common.report",
                        icon: "fa fa-area-chart",
                        show: true,
                        isHome: true
                    }
                }
            },
        ]
    }
];
var LeavesRoutingModule = /** @class */ (function () {
    function LeavesRoutingModule() {
    }
    LeavesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LeavesRoutingModule);
    return LeavesRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leaves/leaves.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/hrm/leaves/leaves.module.ts ***!
  \*****************************************************/
/*! exports provided: LeavesModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavesModule", function() { return LeavesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _leaves_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./leaves-routing.module */ "./src/app/modules/hrm/leaves/leaves-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _leave_types_leave_types_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../leave-types/leave-types.module */ "./src/app/modules/hrm/leave-types/leave-types.module.ts");
/* harmony import */ var _pages_leaves_list_leaves_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/leaves-list/leaves-list.component */ "./src/app/modules/hrm/leaves/pages/leaves-list/leaves-list.component.ts");
/* harmony import */ var _components_create_leave_create_leave_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/create-leave/create-leave.component */ "./src/app/modules/hrm/leaves/components/create-leave/create-leave.component.ts");
/* harmony import */ var _components_edit_leave_edit_leave_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/edit-leave/edit-leave.component */ "./src/app/modules/hrm/leaves/components/edit-leave/edit-leave.component.ts");
/* harmony import */ var _pages_calendar_view_calendar_view_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/calendar-view/calendar-view.component */ "./src/app/modules/hrm/leaves/pages/calendar-view/calendar-view.component.ts");
/* harmony import */ var _pages_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/list-view/list-view.component */ "./src/app/modules/hrm/leaves/pages/list-view/list-view.component.ts");
/* harmony import */ var _pages_leaves_report_leaves_report_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/leaves-report/leaves-report.component */ "./src/app/modules/hrm/leaves/pages/leaves-report/leaves-report.component.ts");
/* harmony import */ var _components_leave_type_modal_leave_type_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/leave-type-modal/leave-type-modal.component */ "./src/app/modules/hrm/leaves/components/leave-type-modal/leave-type-modal.component.ts");
/* harmony import */ var _components_leave_detail_leave_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/leave-detail/leave-detail.component */ "./src/app/modules/hrm/leaves/components/leave-detail/leave-detail.component.ts");




























var LeavesModule = /** @class */ (function () {
    function LeavesModule() {
    }
    LeavesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_leaves_list_leaves_list_component__WEBPACK_IMPORTED_MODULE_20__["LeavesListComponent"],
                _components_create_leave_create_leave_component__WEBPACK_IMPORTED_MODULE_21__["CreateLeaveComponent"],
                _components_edit_leave_edit_leave_component__WEBPACK_IMPORTED_MODULE_22__["EditLeaveComponent"],
                _pages_calendar_view_calendar_view_component__WEBPACK_IMPORTED_MODULE_23__["CalendarViewComponent"],
                _pages_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_24__["ListViewComponent"],
                _pages_leaves_report_leaves_report_component__WEBPACK_IMPORTED_MODULE_25__["LeavesReportComponent"],
                _components_leave_type_modal_leave_type_modal_component__WEBPACK_IMPORTED_MODULE_26__["LeaveTypeModalComponent"],
                _components_leave_detail_leave_detail_component__WEBPACK_IMPORTED_MODULE_27__["LeaveDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _leaves_routing_module__WEBPACK_IMPORTED_MODULE_17__["LeavesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_12__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_7__["NgxEditorModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_14__["DragAndDropModule"],
                angular_resizable_element__WEBPACK_IMPORTED_MODULE_15__["ResizableModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_13__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_16__["adapterFactory"]
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
                _leave_types_leave_types_module__WEBPACK_IMPORTED_MODULE_19__["LeaveTypesModule"]
            ],
            entryComponents: [
                _components_create_leave_create_leave_component__WEBPACK_IMPORTED_MODULE_21__["CreateLeaveComponent"],
                _components_edit_leave_edit_leave_component__WEBPACK_IMPORTED_MODULE_22__["EditLeaveComponent"],
                _components_leave_type_modal_leave_type_modal_component__WEBPACK_IMPORTED_MODULE_26__["LeaveTypeModalComponent"],
                _components_leave_detail_leave_detail_component__WEBPACK_IMPORTED_MODULE_27__["LeaveDetailComponent"]
            ],
            providers: []
        })
    ], LeavesModule);
    return LeavesModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/hrm/leaves/pages/calendar-view/calendar-view.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/pages/calendar-view/calendar-view.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaHJtL2xlYXZlcy9wYWdlcy9jYWxlbmRhci12aWV3L2NhbGVuZGFyLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/hrm/leaves/pages/calendar-view/calendar-view.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/pages/calendar-view/calendar-view.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CalendarViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarViewComponent", function() { return CalendarViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_leave_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/leave.service */ "./src/app/core/services/leave.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");







var CalendarViewComponent = /** @class */ (function () {
    function CalendarViewComponent(leaveService, authenticationService) {
        var _this = this;
        this.leaveService = leaveService;
        this.authenticationService = authenticationService;
        this.isCalendarLoaded = false;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"];
        this.viewDate = new Date();
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.events = this.allCalendarEvents;
        this.activeDayIsOpen = true;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    CalendarViewComponent.prototype.ngOnInit = function () {
        this.getLeaves();
    };
    CalendarViewComponent.prototype.dayClicked = function (_a) {
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
    CalendarViewComponent.prototype.addEvent = function (leaves) {
        this.events = leaves;
        this.isCalendarLoaded = true;
        this.refreshView();
    };
    CalendarViewComponent.prototype.refreshView = function () {
        this.refresh.next();
    };
    CalendarViewComponent.prototype.setView = function (view) {
        this.view = view;
    };
    CalendarViewComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    CalendarViewComponent.prototype.getLeaves = function () {
        var _this = this;
        this.leaveService.getCalendarLeaves().subscribe(function (data) {
            _this.leaves = data;
            _this.setCalendarData();
        });
    };
    CalendarViewComponent.prototype.setCalendarData = function () {
        var eventsAll = [];
        this.leaves.forEach(function (element) {
            eventsAll.push({
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date(element.leave_date)),
                title: element.user.full_name + ' - ' + element.leave_type.leave_type + ' - ' + element.reason,
                color: {
                    primary: element.leave_type.color,
                    secondary: element.leave_type.color
                }
            });
        });
        this.addEvent(eventsAll);
        this.allCalendarEvents = eventsAll;
    };
    CalendarViewComponent.ctorParameters = function () { return [
        { type: _core_services_leave_service__WEBPACK_IMPORTED_MODULE_5__["LeaveService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
    ]; };
    CalendarViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar-view',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calendar-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/calendar-view/calendar-view.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calendar-view.component.scss */ "./src/app/modules/hrm/leaves/pages/calendar-view/calendar-view.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_leave_service__WEBPACK_IMPORTED_MODULE_5__["LeaveService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], CalendarViewComponent);
    return CalendarViewComponent;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leaves/pages/leaves-list/leaves-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/pages/leaves-list/leaves-list.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9ocm0vbGVhdmVzL3BhZ2VzL2xlYXZlcy1saXN0L2xlYXZlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hybS9sZWF2ZXMvcGFnZXMvbGVhdmVzLWxpc3QvbGVhdmVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hybS9sZWF2ZXMvcGFnZXMvbGVhdmVzLWxpc3QvbGVhdmVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgICBkaXNwbGF5OiBub25lXG59IiwiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/hrm/leaves/pages/leaves-list/leaves-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/pages/leaves-list/leaves-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LeavesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavesListComponent", function() { return LeavesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _core_services_leave_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/leave.service */ "./src/app/core/services/leave.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_create_leave_create_leave_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/create-leave/create-leave.component */ "./src/app/modules/hrm/leaves/components/create-leave/create-leave.component.ts");
/* harmony import */ var _components_edit_leave_edit_leave_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/edit-leave/edit-leave.component */ "./src/app/modules/hrm/leaves/components/edit-leave/edit-leave.component.ts");
/* harmony import */ var _core_helpers_hrm_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../core/helpers/hrm.helper */ "./src/app/core/helpers/hrm.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__);



















var LeavesListComponent = /** @class */ (function () {
    function LeavesListComponent(translate, ngxRolesService, http, toastr, modalService, exportAsService, authenticationService, leaveService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.toastr = toastr;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.authenticationService = authenticationService;
        this.leaveService = leaveService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.dtOptions = {};
        this.leaves = [];
        this.leaveStatusKeyValue = _core_helpers_hrm_helper__WEBPACK_IMPORTED_MODULE_15__["leave_status_key_value"];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'leaves_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    LeavesListComponent.prototype.ngOnInit = function () {
        this.loadLeaveDatatable();
    };
    LeavesListComponent.prototype.getCheckStatusChangePermission = function (leave) {
        var role = this.ngxRolesService.getRole('admin');
        if (leave.status == 1) {
            if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
                return true;
            }
            else if (this.loginUser.id == leave.user_id) {
                return false;
            }
        }
        return false;
    };
    LeavesListComponent.prototype.getCheckPermission = function (leave) {
        var isAllowed = false, role = this.ngxRolesService.getRole('admin');
        if (this.loginUser.id == leave.user_id) {
            isAllowed = true;
        }
        if (leave.status == 2 || leave.status == 3) {
            isAllowed = false;
        }
        return isAllowed;
    };
    LeavesListComponent.prototype.loadLeaveDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0, 'desc'],
            columns: [{
                    'sortable': true,
                    'width': "5%",
                    'target': [0]
                }, {
                    'sortable': true,
                    'width': "15%",
                    'target': [1]
                }, {
                    'sortable': true,
                    'width': "15%",
                    'target': [2]
                }, {
                    'sortable': true,
                    'width': "15%",
                    'target': [3]
                }, {
                    'sortable': true,
                    'width': "15%",
                    'target': [4]
                }, {
                    'sortable': true,
                    'width': "15%",
                    'target': [5]
                }, {
                    'sortable': true,
                    'width': "15%",
                    'target': [6]
                }, {
                    'sortable': false,
                    'width': "5%",
                    'target': [7]
                }
            ],
            buttons: [{
                    extend: 'csv',
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
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
                    .post(_this.apiUrl + '/api/all-leaves', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.leaves = resp.data;
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
    LeavesListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('leaves.title')).subscribe(function () { });
    };
    LeavesListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    LeavesListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    LeavesListComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.leaves.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    LeavesListComponent.prototype.openLeaveCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_create_leave_create_leave_component__WEBPACK_IMPORTED_MODULE_13__["CreateLeaveComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    LeavesListComponent.prototype.openLeaveEditModal = function (leave) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                leave: leave
            }
        };
        this.modalRef = this.modalService.show(_components_edit_leave_edit_leave_component__WEBPACK_IMPORTED_MODULE_14__["EditLeaveComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    LeavesListComponent.prototype.changeLeaveStatus = function (leaveId, status) {
        var _this = this;
        var leave = {
            id: leaveId,
            status: (status.id) ? status.id : status
        };
        if (status.id == 3) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                input: 'textarea',
                inputPlaceholder: this.translate.instant('leaves.create.fields.reject_reason') + ' ...',
                inputAttributes: {
                    'aria-label': this.translate.instant('leaves.create.fields.reject_reason')
                },
                showCancelButton: true
            }).then(function (result) {
                if (result.value || result.value == '') {
                    var leave_1 = {
                        id: leaveId,
                        status: status.id,
                        reject_reason: result.value
                    };
                    _this.changeStatus(leave_1);
                }
            });
        }
        else {
            this.changeStatus(leave);
        }
    };
    LeavesListComponent.prototype.changeStatus = function (leave) {
        var _this = this;
        this.leaveService.changeStatus(leave)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('leaves.messages.status'), _this.translate.instant('leaves.title'));
            _this.rerender();
        });
    };
    LeavesListComponent.prototype.deleteLeave = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + this.translate.instant('leaves.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.leaveService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('leaves.messages.delete'), _this.translate.instant('leaves.title'));
                    _this.rerender();
                });
            }
        });
    };
    LeavesListComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.leaveStatusKeyValue[statusKey];
    };
    LeavesListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxRolesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] },
        { type: _core_services_leave_service__WEBPACK_IMPORTED_MODULE_11__["LeaveService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], LeavesListComponent.prototype, "dtElement", void 0);
    LeavesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leaves-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leaves-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/leaves-list/leaves-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leaves-list.component.scss */ "./src/app/modules/hrm/leaves/pages/leaves-list/leaves-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxRolesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
            _core_services_leave_service__WEBPACK_IMPORTED_MODULE_11__["LeaveService"]])
    ], LeavesListComponent);
    return LeavesListComponent;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leaves/pages/leaves-report/leaves-report.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/pages/leaves-report/leaves-report.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9ocm0vbGVhdmVzL3BhZ2VzL2xlYXZlcy1yZXBvcnQvbGVhdmVzLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ocm0vbGVhdmVzL3BhZ2VzL2xlYXZlcy1yZXBvcnQvbGVhdmVzLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaHJtL2xlYXZlcy9wYWdlcy9sZWF2ZXMtcmVwb3J0L2xlYXZlcy1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgICBkaXNwbGF5OiBub25lXG59IiwiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/hrm/leaves/pages/leaves-report/leaves-report.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/pages/leaves-report/leaves-report.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LeavesReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavesReportComponent", function() { return LeavesReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_leave_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/leave.service */ "./src/app/core/services/leave.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _components_leave_detail_leave_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/leave-detail/leave-detail.component */ "./src/app/modules/hrm/leaves/components/leave-detail/leave-detail.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_16__);

















var LeavesReportComponent = /** @class */ (function () {
    function LeavesReportComponent(translate, ngxRolesService, http, datepipe, modalService, exportAsService, authenticationService, leaveService, userService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.datepipe = datepipe;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.authenticationService = authenticationService;
        this.leaveService = leaveService;
        this.userService = userService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.dtOptions = {};
        this.leaves = [];
        this.isFormLoad = false;
        this.user_id = null;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'leaves_table',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    LeavesReportComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.loadLeaveDatatable();
    };
    LeavesReportComponent.prototype.loadLeaveDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
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
                    'sortable': false,
                    'width': "17%",
                    'target': [2]
                }, {
                    'sortable': false,
                    'width': "17%",
                    'target': [3]
                }, {
                    'sortable': false,
                    'width': "17%",
                    'target': [4]
                }
            ],
            buttons: [{
                    extend: 'csv',
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
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
                if (_this.isFormLoad) {
                    dataTablesParameters.period_from = _this.period_from;
                    dataTablesParameters.period_to = _this.period_to;
                    dataTablesParameters.user_id = _this.user_id;
                }
                _this.http
                    .post(_this.apiUrl + '/api/leaves/report', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.leaves = resp.data;
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
    LeavesReportComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll()
            .subscribe(function (data) {
            _this.users = data;
        });
    };
    LeavesReportComponent.prototype.submitFilter = function () {
        if (this.period_from_to) {
            this.period_from = this.datepipe.transform(this.period_from_to[0], 'yyyy-MM-dd');
            this.period_to = this.datepipe.transform(this.period_from_to[1], 'yyyy-MM-dd');
        }
        this.isFormLoad = true;
        this.rerender();
    };
    LeavesReportComponent.prototype.resetForm = function () {
        this.isFormLoad = false;
        this.period_from_to = null;
        this.user_id = null;
        this.rerender();
    };
    LeavesReportComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('leave_report.title')).subscribe(function () { });
    };
    LeavesReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    LeavesReportComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    LeavesReportComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.leaves.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    LeavesReportComponent.prototype.openLeaveDetail = function (status, user_id) {
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn",
            initialState: {
                leave: {
                    startDate: this.period_from,
                    endDate: this.period_to,
                    userId: user_id,
                    status: status
                }
            }
        };
        this.modalRef = this.modalService.show(_components_leave_detail_leave_detail_component__WEBPACK_IMPORTED_MODULE_13__["LeaveDetailComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
        });
    };
    LeavesReportComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxRolesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] },
        { type: _core_services_leave_service__WEBPACK_IMPORTED_MODULE_10__["LeaveService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"])
    ], LeavesReportComponent.prototype, "dtElement", void 0);
    LeavesReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leaves-report',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leaves-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/leaves-report/leaves-report.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leaves-report.component.scss */ "./src/app/modules/hrm/leaves/pages/leaves-report/leaves-report.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxRolesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"],
            _core_services_leave_service__WEBPACK_IMPORTED_MODULE_10__["LeaveService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]])
    ], LeavesReportComponent);
    return LeavesReportComponent;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leaves/pages/list-view/list-view.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/pages/list-view/list-view.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaHJtL2xlYXZlcy9wYWdlcy9saXN0LXZpZXcvbGlzdC12aWV3LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/hrm/leaves/pages/list-view/list-view.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/hrm/leaves/pages/list-view/list-view.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewComponent", function() { return ListViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_leave_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/leave.service */ "./src/app/core/services/leave.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_hrm_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/helpers/hrm.helper */ "./src/app/core/helpers/hrm.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");











var ListViewComponent = /** @class */ (function () {
    function ListViewComponent(translate, ngxRolesService, http, toastr, authenticationService, leaveService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.leaveService = leaveService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl;
        this.halfLeavesDuration = _core_helpers_hrm_helper__WEBPACK_IMPORTED_MODULE_9__["half_leaves_duration"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    ListViewComponent.prototype.ngOnInit = function () {
        this.getPendingLeaves();
    };
    ListViewComponent.prototype.getPendingLeaves = function () {
        var _this = this;
        this.leaveService.getPendingLeaves().subscribe(function (data) {
            _this.leaves = data;
        });
    };
    ListViewComponent.prototype.changeLeaveStatus = function (leaveId, statusId) {
        var _this = this;
        var changeLeave = {
            id: leaveId,
            status: statusId
        };
        this.leaveService.changeStatus(changeLeave)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('leaves.messages.approve'), _this.translate.instant('leaves.title'));
            _this.getPendingLeaves();
        });
    };
    ListViewComponent.prototype.changeRejectLeaveStatus = function (leaveId, statusId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            input: 'textarea',
            inputPlaceholder: this.translate.instant('leaves.create.fields.reject_reason') + ' ...',
            inputAttributes: {
                'aria-label': this.translate.instant('leaves.create.fields.reject_reason')
            },
            showCancelButton: true
        }).then(function (result) {
            if (result.value || result.value == '') {
                var changeLeave = {
                    id: leaveId,
                    status: statusId,
                    reject_reason: result.value
                };
                _this.leaveService.changeRejectLeaveStatus(changeLeave)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('leaves.messages.reject'), _this.translate.instant('leaves.title'));
                    _this.getPendingLeaves();
                });
            }
        });
    };
    ListViewComponent.prototype.getTranslateDurationType = function (durationType) {
        return this.halfLeavesDuration[durationType];
    };
    ListViewComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxRolesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
        { type: _core_services_leave_service__WEBPACK_IMPORTED_MODULE_7__["LeaveService"] }
    ]; };
    ListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-view',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leaves/pages/list-view/list-view.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-view.component.scss */ "./src/app/modules/hrm/leaves/pages/list-view/list-view.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxRolesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
            _core_services_leave_service__WEBPACK_IMPORTED_MODULE_7__["LeaveService"]])
    ], ListViewComponent);
    return ListViewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-hrm-leaves-leaves-module.js.map