(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-crm-appointments-appointments-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/components/appointment-recurrence/appointment-recurrence.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/components/appointment-recurrence/appointment-recurrence.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n            <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable \" id=\"appointment_recurrence_datatable\" width=\"100%\">\n                <thead>\n                    <tr>\n                        <th>{{'appointments.columns.id' | translate }}</th>\n                        <th>{{'appointments.columns.start_time' | translate }}</th>\n                        <th>{{'appointments.columns.end_time' | translate }}</th>\n                        <th>{{'appointments.columns.status' | translate }}</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let recurrence of appointment.recurrences; index as i\">\n                        <td class=\"text-center\">{{ i + 1 }}</td>\n                        <td>{{recurrence.start_date_time | dateTimeFormatFilter: loginUser.settings.date_time_format }}</td>\n                        <td>{{recurrence.end_date_time | dateTimeFormatFilter: loginUser.settings.date_time_format }}</td>\n                        <td class=\"status-dropdown\">\n                            <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'appointment_edit']; else elseBlock1; then thenBlock1\"></div>\n                            <ng-template #elseBlock1>\n                                <ng-container *ngFor=\"let status of ('appointments.status' | translate)\">\n                                    <div class=\"budges-status\">\n                                        <span class=\"{{status.class}}\" *ngIf=\"status.id == recurrence.status\">{{status.label}}</span>\n                                    </div>\n                                </ng-container>\n                            </ng-template>\n                            <ng-template #thenBlock1>\n                                <div class=\"btn-group\" dropdown>\n                                    <button dropdownToggle id=\"button-basic\" type=\"button\" class=\"btn dropdown-toggle select-btn-lg\" aria-controls=\"dropdown-basic\">{{getTranslateStatus(recurrence.status) | translate}}&nbsp;<span class=\"caret\"></span></button>\n                                    <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic\">\n                                        <li role=\"menuitem\" *ngFor=\"let status of ('appointments.status' | translate)\"><a class=\"dropdown-item btn btn-sm {{status.class}}\" [ngClass]=\"{'active': recurrence.status == status.id}\" (click)=\"changeAppointmentRecurrenceStatus([recurrence.id], status);recurrence.status = status.id\">{{status.label}}</a></li>\n                                    </ul>\n                                </div>\n                            </ng-template>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-calendar-plus-o\" aria-hidden=\"true\"></i>&nbsp;{{'appointments.title' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsCreateModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"createAppointmentForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isPageLoad\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"title\">{{'appointments.create.fields.title' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"title\" id=\"title\" placeholder=\"{{'appointments.create.placeholders.placeholder3' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.title.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && appointmentControl.title.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"appointmentControl.title.errors.required\">{{'appointments.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t\t<div *ngIf=\"appointmentControl.title.errors.maxlength\">{{'appointments.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.provider_id.errors }\">\n\t\t\t\t\t\t<label for=\"provider_id\">{{'appointments.create.fields.provider' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"providers\"\n\t\t\t\t\t\t\t[multiple]=\"false\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"provider_id\"\n\t\t\t\t\t\t\tformControlName=\"provider_id\"\n\t\t\t\t\t\t\tplaceholder=\"{{'appointments.create.placeholders.placeholder9' | translate}}\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">{{item.firstname}} {{item.lastname}}</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && appointmentControl.provider_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"appointmentControl.provider_id.errors.required\">{{'appointments.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"client_id\">{{'appointments.create.fields.client' | translate}}</label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"clients\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\" \n\t\t\t\t\t\t\tbindLabel=\"firstname\" \n\t\t\t\t\t\t\tbindValue=\"id\" \n\t\t\t\t\t\t\tlabelForId=\"client_id\" \n\t\t\t\t\t\t\tformControlName=\"client_id\" \n\t\t\t\t\t\t\tplaceholder=\"{{'appointments.create.placeholders.placeholder4' | translate}}\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">{{item.firstname}} {{item.lastname}}</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.start_date_time.errors }\">\n\t\t\t\t\t\t<label for=\"start_date_time\">{{'appointments.create.fields.start_date' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<owl-date-time #startDT></owl-date-time>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [owlDateTimeTrigger]=\"startDT\" [owlDateTime]=\"startDT\" [min]=\"minDate\" formControlName=\"start_date_time\" id=\"start_date_time\" placeholder=\"{{'appointments.create.placeholders.placeholder1' | translate}}\" aria-describedby=\"inputGroupPrepend2\" (dateTimeChange)=\"startDateChange($event)\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && appointmentControl.start_date_time.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"appointmentControl.start_date_time.errors\">{{'appointments.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"badge badge-secondary\" *ngIf=\"availabileSlots && availabileSlots.length > 0\">{{'appointments.budges.title1' | translate}}: \n\t\t\t\t\t\t\t<ng-container *ngFor=\"let slots of availabileSlots; let last = last\">\n\t\t\t\t\t\t\t\t{{slots.start_date_time | dateTimeFormatFilter: 'HH:mm'}} to {{slots.end_date_time | dateTimeFormatFilter: 'HH:mm'}}\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"!last\"><br></ng-container>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.end_date_time.errors }\">\n\t\t\t\t\t\t<label for=\"end_date_time\">{{'appointments.create.fields.end_date' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<owl-date-time #endDT></owl-date-time>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [owlDateTimeTrigger]=\"endDT\" [owlDateTime]=\"endDT\" [min]=\"createAppointmentForm.get('start_date_time').value\" formControlName=\"end_date_time\" id=\"end_date_time\" placeholder=\"{{'appointments.create.placeholders.placeholder2' | translate}}\" aria-describedby=\"inputGroupPrepend3\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && appointmentControl.end_date_time.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"appointmentControl.end_date_time.errors\">{{'appointments.create.error_messages.message3' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"location\">{{'appointments.create.fields.location' | translate}}</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"location\" id=\"location\" placeholder=\"{{'appointments.create.placeholders.placeholder5' | translate}}\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"location\">{{'appointments.create.fields.attendees' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"attendees\" id=\"attendees\" placeholder=\"{{'appointments.create.placeholders.placeholder6' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.attendees.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && appointmentControl.attendees.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"appointmentControl.attendees.errors.required\">{{'appointments.create.error_messages.message7' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"recurrence\">{{'appointments.create.fields.recurrence' | translate }}</label><br>\n\t\t\t\t\t\t<label class=\"form-check checkbox-container\">\n\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" formControlName=\"recurrence\" id=\"recurrence\" (change)=\"changeRecurrence($event)\">\n\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\" *ngIf=\"createAppointmentForm.get('recurrence').value\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"recurrence_occurrences\">{{'appointments.create.fields.recurrence_occurrences' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" formControlName=\"recurrence_occurrences\" id=\"recurrence_occurrences\" placeholder=\"{{'appointments.create.placeholders.placeholder10' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.recurrence_occurrences.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && appointmentControl.recurrence_occurrences.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"appointmentControl.recurrence_occurrences.errors.required\">{{'appointments.create.error_messages.message10' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\" *ngIf=\"createAppointmentForm.get('recurrence').value\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>{{'appointments.create.fields.recurrence_pattern' | translate }}<span class=\"text-danger\">&nbsp;*</span></label><br>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"daily\" id=\"checkbox_daily\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_daily\">&nbsp;{{'appointments.create.fields.daily' | translate }}&nbsp;</label>\n\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"weekly\" id=\"checkbox_weekly\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_weekly\">&nbsp;{{'appointments.create.fields.weekly' | translate }}</label>\n\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"monthly\" id=\"checkbox_monthly\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_monthly\">&nbsp;{{'appointments.create.fields.monthly' | translate }}</label>\n\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"quarterly\" id=\"checkbox_quarterly\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_quarterly\">&nbsp;{{'appointments.create.fields.quarterly' | translate }}</label>\n\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"semi_annually\" id=\"checkbox_semi_annually\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_semi_annually\">&nbsp;{{'appointments.create.fields.semi_annually' | translate }}</label>\n\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"annually\" id=\"checkbox_annually\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_annually\">&nbsp;{{'appointments.create.fields.annually' | translate }}</label>\n\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && appointmentControl.recurrence_pattern.errors\" class=\"invalid-feedback d-block\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"appointmentControl.recurrence_pattern.errors.required\">{{'appointments.create.error_messages.message11' | translate}}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"note\">{{'appointments.create.fields.notes' | translate}}</label>\n\t\t\t\t\t\t<app-ngx-editor [config]=\"editorConfig\" formControlName=\"note\" id=\"note\"></app-ngx-editor>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.create' | translate}}</button>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-calendar-plus-o\" aria-hidden=\"true\"></i>&nbsp;{{'appointments.title' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsEditModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"editAppointmentForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isPageLoad\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"title\">{{'appointments.create.fields.title' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"title\" id=\"title\" placeholder=\"{{'appointments.create.placeholders.placeholder3' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.title.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && appointmentControl.title.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"appointmentControl.title.errors.required\">{{'appointments.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t\t<div *ngIf=\"appointmentControl.title.errors.maxlength\">{{'appointments.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.provider_id.errors }\">\n\t\t\t\t\t\t<label for=\"provider_id\">{{'appointments.create.fields.provider' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"providers\"\n\t\t\t\t\t\t\t[multiple]=\"false\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\tlabelForId=\"provider_id\"\n\t\t\t\t\t\t\tformControlName=\"provider_id\"\n\t\t\t\t\t\t\tplaceholder=\"{{'common.unassigned' | translate}}\"\n\t\t\t\t\t\t\t(change)=\"changeProvider($event)\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">{{item.firstname}} {{item.lastname}}</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && appointmentControl.provider_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"appointmentControl.provider_id.errors.required\">{{'appointments.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"client_id\">{{'appointments.create.fields.client' | translate}}</label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"clients\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\" \n\t\t\t\t\t\t\tbindLabel=\"firstname\" \n\t\t\t\t\t\t\tbindValue=\"id\" \n\t\t\t\t\t\t\tlabelForId=\"client_id\" \n\t\t\t\t\t\t\tformControlName=\"client_id\" \n\t\t\t\t\t\t\tplaceholder=\"{{'appointments.create.placeholders.placeholder4' | translate}}\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">{{item.firstname}} {{item.lastname}}</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.start_date_time.errors }\">\n\t\t\t\t\t\t<label for=\"start_date_time\">{{'appointments.create.fields.start_date' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<owl-date-time #startDT></owl-date-time>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [owlDateTimeTrigger]=\"startDT\" [owlDateTime]=\"startDT\" [min]=\"minDate\" formControlName=\"start_date_time\" id=\"start_date_time\" placeholder=\"{{'appointments.create.placeholders.placeholder1' | translate}}\" aria-describedby=\"inputGroupPrepend2\" (dateTimeChange)=\"startDateChange($event)\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && appointmentControl.start_date_time.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"appointmentControl.start_date_time.errors\">{{'appointments.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"badge badge-secondary\" *ngIf=\"availabileSlots && availabileSlots.length > 0\">{{'appointments.budges.title1' | translate}}: \n\t\t\t\t\t\t\t<ng-container *ngFor=\"let slots of availabileSlots; let last = last\">\n\t\t\t\t\t\t\t\t{{slots.start_date_time | dateTimeFormatFilter: 'HH:mm'}} to {{slots.end_date_time | dateTimeFormatFilter: 'HH:mm'}}\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"!last\"><br></ng-container>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.end_date_time.errors }\">\n\t\t\t\t\t\t<label for=\"end_date_time\">{{'appointments.create.fields.end_date' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<owl-date-time #endDT></owl-date-time>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [owlDateTimeTrigger]=\"endDT\" [owlDateTime]=\"endDT\" [min]=\"editAppointmentForm.get('start_date_time').value\" formControlName=\"end_date_time\" id=\"end_date_time\" placeholder=\"{{'appointments.create.placeholders.placeholder2' | translate}}\" aria-describedby=\"inputGroupPrepend3\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && appointmentControl.end_date_time.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"appointmentControl.end_date_time.errors\">{{'appointments.create.error_messages.message3' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"location\">{{'appointments.create.fields.location' | translate}}</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"location\" id=\"location\" placeholder=\"{{'appointments.create.placeholders.placeholder5' | translate}}\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"location\">{{'appointments.create.fields.attendees' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"attendees\" id=\"attendees\" placeholder=\"{{'appointments.create.placeholders.placeholder6' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.attendees.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && appointmentControl.attendees.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"appointmentControl.attendees.errors.required\">{{'appointments.create.error_messages.message7' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"recurrence\">{{'appointments.create.fields.recurrence' | translate }}</label><br>\n\t\t\t\t\t\t<label class=\"form-check checkbox-container\">\n\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" formControlName=\"recurrence\" id=\"recurrence\" (change)=\"changeRecurrence($event)\">\n\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\" *ngIf=\"editAppointmentForm.get('recurrence').value\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"recurrence_occurrences\">{{'appointments.create.fields.recurrence_occurrences' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" formControlName=\"recurrence_occurrences\" id=\"recurrence_occurrences\" placeholder=\"{{'appointments.create.placeholders.placeholder10' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.recurrence_occurrences.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && appointmentControl.recurrence_occurrences.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"appointmentControl.recurrence_occurrences.errors.required\">{{'appointments.create.error_messages.message10' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\" *ngIf=\"editAppointmentForm.get('recurrence').value\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>{{'appointments.create.fields.recurrence_pattern' | translate }}<span class=\"text-danger\">&nbsp;*</span></label><br>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"daily\" id=\"checkbox_daily\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_daily\">&nbsp;{{'appointments.create.fields.daily' | translate }}&nbsp;</label>\n\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"weekly\" id=\"checkbox_weekly\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_weekly\">&nbsp;{{'appointments.create.fields.weekly' | translate }}</label>\n\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"monthly\" id=\"checkbox_monthly\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_monthly\">&nbsp;{{'appointments.create.fields.monthly' | translate }}</label>\n\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"quarterly\" id=\"checkbox_quarterly\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_quarterly\">&nbsp;{{'appointments.create.fields.quarterly' | translate }}</label>\n\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"semi_annually\" id=\"checkbox_semi_annually\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_semi_annually\">&nbsp;{{'appointments.create.fields.semi_annually' | translate }}</label>\n\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"annually\" id=\"checkbox_annually\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_annually\">&nbsp;{{'appointments.create.fields.annually' | translate }}</label>\n\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && appointmentControl.recurrence_pattern.errors\" class=\"invalid-feedback d-block\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"appointmentControl.recurrence_pattern.errors.required\">{{'appointments.create.error_messages.message11' | translate}}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && appointmentControl.status.errors }\">\n\t\t\t\t\t\t<label for=\"status\">{{'appointments.create.fields.status' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t[items]=\"('appointments.status' | translate)\"\n\t\t\t\t\t\t\t[selectOnTab]=\"true\" \n\t\t\t\t\t\t\tbindLabel=\"label\" \n\t\t\t\t\t\t\tbindValue=\"id\" \n\t\t\t\t\t\t\tlabelForId=\"status\" \n\t\t\t\t\t\t\tformControlName=\"status\" \n\t\t\t\t\t\t\tplaceholder=\"{{'appointments.create.placeholders.placeholder7' | translate}}\">\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && appointmentControl.status.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"appointmentControl.status.errors.required\">{{'appointments.create.error_messages.message8' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"note\">{{'appointments.create.fields.notes' | translate}}</label>\n\t\t\t\t\t\t<app-ngx-editor [config]=\"editorConfig\" formControlName=\"note\" id=\"note\"></app-ngx-editor>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.update' | translate}}</button>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/pages/appointments-detail/appointments-detail.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/pages/appointments-detail/appointments-detail.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"detail-page\">\n    <div class=\"card\" *ngIf=\"isPageLoaded\">\n    \t<div class=\"card-content\">\n\t\t    <div class=\" border-bottom\">\n\t\t        <div class=\"d-flex justify-content-between\">\n\t\t            <div class=\" task-name d-lg-flex\">\n\t\t                <h4 class=\"task-id\"><span>#{{appointment.generated_id}}</span></h4>\n\t\t                <p class=\"task-title ml-lg-2\">\n\t\t                    {{appointment.title}}\n\t\t                </p>\n\t\t            </div>\n\t\t            <div class=\"task-action mr-3\">\n\t\t                <div class=\"status-dropdown\">\n\t\t                    <div *ngxPermissionsOnly=\"['admin', 'super_admin', 'appointment_edit']; else elseBlock1; then thenBlock1\"></div>\n\t\t                    <ng-template #thenBlock1>\n\t\t                        <div class=\"btn-group\" dropdown>\n\t\t                            <button dropdownToggle id=\"button-basic\" type=\"button\" class=\"btn dropdown-toggle select-btn-lg\" aria-controls=\"dropdown-basic\">{{getTranslateStatus(appointment.status) | translate}}&nbsp;<span class=\"caret\"></span></button>\n\t\t                            <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic\">\n\t\t                                <li role=\"menuitem\" *ngFor=\"let status of ('appointments.status' | translate)\"><a class=\"dropdown-item btn btn-sm {{status.class}}\" [ngClass]=\"{'active': appointment.status == status.id}\" (click)=\"changeAppointmentStatus([appointment.id], status);appointment.status = status.id\">{{status.label}}</a></li>\n\t\t                            </ul>\n\t\t                        </div>\n\t\t                    </ng-template>\n\t\t                    <ng-template #elseBlock1>\n\t\t                        <ng-container *ngFor=\"let status of ('appointments.status' | translate)\">\n\t\t                            <div class=\"budges-status\">\n\t\t                                <span class=\"{{status.class}}\" *ngIf=\"status.id == appointment.status\">{{status.label}}</span>\n\t\t                            </div>\n\t\t                        </ng-container>\n\t\t                    </ng-template>\n\t\t                </div>\n\t\t            </div>\n\t\t        </div>\n\t\t    </div>\n\t\t    <div class=\"card-body\">\n\t            <form class=\"form-body overflow-hidden mt-3\">\n\t                <!-- Detail fields -->\n\t                <div class=\"col-lg-12 \">\n\t                    <div class=\"row\">\n\t                        <div class=\"col-lg-4 col-md-6 mb-3\">\n\t                            <label>{{'appointments.columns.requester' | translate }}</label>\n\t                            <div class=\"people-lists\">\n\t                                <a [routerLink]=\"['/users/profile', appointment.user_id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{appointment.requesters.firstname}} {{appointment.requesters.lastname}}\">\n\t                                    <img *ngIf=\"appointment.requesters.avatar\" src=\"{{apiUrl}}/uploads/profile/{{appointment.requesters.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t                                    <img *ngIf=\"!appointment.requesters.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t                                </a>\n\t                            </div>\n\t                        </div>\n\t                        <div class=\"col-lg-4 col-md-6 mb-3\">\n\t                            <label>{{'appointments.create.fields.provider' | translate }}</label>\n\t                            <div class=\"detail-inline\">\n\t                                {{appointment.providers.firstname}} {{appointment.providers.lastname}}\n\t                            </div>\n\t                        </div>\n\t                        <div class=\"col-lg-4 col-md-6 mb-3\">\n\t                            <label>{{'appointments.create.fields.client' | translate }}</label>\n\t                            <div class=\"detail-inline\">\n\t                                <ng-container *ngIf=\"appointment.client_id; else elseBlock4\">\n\t                                    {{appointment.clients.firstname}} {{appointment.clients.lastname}}\n\t                                </ng-container>\n\t                                <ng-template #elseBlock4>-</ng-template>\n\t                            </div>\n\t                        </div>\n\t                        <div class=\"col-lg-4 col-md-6 mb-3\">\n\t                            <label>{{'appointments.create.fields.attendees' | translate }}</label>\n\t                            <div class=\"detail-inline\">\n\t                                {{appointment.attendees}}\n\t                            </div>\n\t                        </div>\n\t                        <div class=\"col-lg-4 col-md-6 mb-3\">\n\t                            <label>{{'appointments.create.fields.start_date' | translate }}</label>\n\t                            <div class=\"detail-inline\">{{appointment.start_date_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</div>\n\t                        </div>\n\t                        <div class=\"col-lg-4 col-md-6 mb-3\">\n\t                            <label>{{'appointments.create.fields.end_date' | translate }}</label>\n\t                            <div class=\"detail-inline\">{{appointment.end_date_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</div>\n\t                        </div>\n\t                        <div class=\"col-lg-4 col-md-6 mb-3\">\n\t                            <label>{{'appointments.create.fields.location' | translate }}</label>\n\t                            <div class=\"detail-inline\">{{appointment.location}}</div>\n\t                        </div>\n\t                        <ng-container *ngIf=\"appointment.recurrence\">\n\t                        \t<div class=\"col-lg-4 col-md-6 mb-3\" >\n\t\t                            <label>{{'appointments.create.fields.recurrence_pattern' | translate }}</label>\n\t\t                            <div class=\"detail-inline\" *ngIf=\"appointment.recurrence_pattern == 'daily'\">{{'appointments.create.fields.daily' | translate }}</div>\n\t\t                            <div class=\"detail-inline\" *ngIf=\"appointment.recurrence_pattern == 'weekly'\">{{'appointments.create.fields.weekly' | translate }}</div>\n\t\t                            <div class=\"detail-inline\" *ngIf=\"appointment.recurrence_pattern == 'monthly'\">{{'appointments.create.fields.monthly' | translate }}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\" *ngIf=\"appointment.recurrence_pattern == 'quarterly'\">{{'appointments.create.fields.quarterly' | translate }}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"detail-inline\" *ngIf=\"appointment.recurrence_pattern == 'semi_annually'\">{{'appointments.create.fields.semi_annually' | translate }}</div>\n\t\t                            <div class=\"detail-inline\" *ngIf=\"appointment.recurrence_pattern == 'annually'\">{{'appointments.create.fields.annually' | translate }}</div>\n\t\t                        </div>\n\t\t                        <div class=\"col-lg-4 col-md-6 mb-3\" >\n\t\t                            <label>{{'appointments.create.fields.recurrence_occurrences' | translate }}</label>\n\t\t                            <div class=\"detail-inline\">{{ appointment.recurrence_occurrences }}</div>\n\t\t                        </div>\n\t                        </ng-container>\n\t                        <div class=\"col-lg-4 col-md-6 mb-3\">\n\t                            <label>{{'common.created' | translate}}</label>\n\t                            <div class=\"detail-inline\">{{appointment.created_at | dateTimeFormatFilter : loginUser.settings.date_time_format}}</div>\n\t                        </div>\n\t                        <div class=\"col-lg-4 col-md-6 mb-3\">\n\t                            <label>{{'common.updated' | translate}}</label>\n\t                            <div class=\"detail-inline\">{{appointment.updated_at | dateTimeFormatFilter : loginUser.settings.date_time_format}}</div>\n\t                        </div>\n\t                        <div class=\"border-bottom\"></div>\n\t                        <!-- Description field -->\n\t                        <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 mt-3 mb-3 description-detail \">\n\t                            <h4 class=\"sub-title\"><span>{{'appointments.create.fields.notes' | translate}}</span></h4>\n\t                            <div class=\"detail-inline\">\n\t                                <p [innerHtml]=\"appointment.note\"></p>\n\t                            </div>\n\t                        </div>\n\t                        <ng-container *ngIf=\"appointment.recurrence\">\n\t\t                        <div class=\"border-bottom\"></div>\n\t\t\t\t\t\t\t\t<!-- Appointment Recurence List -->\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n\t\t\t\t\t\t\t\t\t<section>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card bg-transparent mt-0 mb-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header p-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"sub-title mt-3\"><span>{{'appointments.budges.title2' | translate}}</span></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-appointment-recurrence [appointment]=\"appointment\" [apiUrl]=\"apiUrl\" [loginUser]=\"loginUser\"></app-appointment-recurrence>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t                    </div>\n\t                </div>\n\t            </form>\n\t\t    </div>\n\t\t</div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/pages/appointments-list/appointments-list.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/pages/appointments-list/appointments-list.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card pl-2 pr-2 pb-2\">\n                <!-- Card header -->\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\n                    <h4 class=\"main-title mt-2\"><span>{{'appointments.title' | translate}}</span></h4>\n                    <div class=\"card-buttons\">\n                        <a *ngxPermissionsOnly=\"['admin', 'super_admin']\" [routerLink]=\"['/providers']\" class=\"btn btn-create  mb-0 mr-1\" tooltip=\"{{'providers.title' | translate}}\"><i class=\"fa fa-industry\"></i><span>{{'providers.title' | translate}}</span></a>\n                        <a [routerLink]=\"['/appointments/calendar']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.switch_to_calendar' | translate}}\"><i class=\"fa fa-calendar-plus-o\"></i><span>{{'common.calendar' | translate}}</span></a>\n                        <button *ngxPermissionsOnly=\"['admin', 'super_admin', 'appointment_create']\" class=\"btn btn-create mb-0\" (click)=\"openAppointmentCreateModal()\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></button>\n                    </div>\n                </div>\n                <!-- Card content -->\n                <div class=\"card-content pt-3\">\n                    <!-- Card body -->\n                    <div class=\"card-body\">\n                        <!-- Filter buttons -->\n                        <div class=\"d-flex flex-column flex-lg-row d-lg-inline-flex mb-3\" *ngIf=\"isPageLoaded\">\n                            <div class=\"pl-lg-0 btn-filters\">\n                                <button type=\"button\" class=\"btn btn-raised open\" [ngClass]=\"{'active': statusfilterId==1}\" (click)=\"filterByStatus(1)\">\n                                    <p>{{'common.status.reserved' | translate}}</p>\n                                    <span class=\"badge badge-light\">{{statusCount[1]}}</span>\n                                </button>\n                                <button type=\"button\" class=\"btn btn-raised assigned\" [ngClass]=\"{'active': statusfilterId ==2}\" (click)=\"filterByStatus(2)\">\n                                    <p>{{'common.status.confirmed' | translate}}</p>\n                                    <span class=\"badge badge-light\">{{statusCount[2]}}</span>\n                                </button>\n                                <button type=\"button\" class=\"btn btn-raised completed\" [ngClass]=\"{'active': statusfilterId==3}\" (click)=\"filterByStatus(3)\">\n                                    <p>{{'common.status.finished' | translate}}</p>\n                                    <span class=\"badge badge-light\">{{statusCount[3]}}</span>\n                                </button>\n                                <button type=\"button\" class=\"btn btn-raised cancel\" [ngClass]=\"{'active': statusfilterId==4}\" (click)=\"filterByStatus(4)\">\n                                    <p>{{'common.status.canceled' | translate}}</p>\n                                    <span class=\"badge badge-light\">{{statusCount[4]}}</span>\n                                </button>\n                                <button type=\"button\" class=\"btn btn-raised btn-secondary\" [ngClass]=\"{'active': statusfilterId ==0}\" [routerLink]=\"['/appointments']\">\n                                    <p>{{'common.status.total' | translate}}</p>\n                                    <span class=\"badge badge-light\">{{statusCount[0]}}</span>\n                                </button>\n                            </div>\n                        </div>\n                        <!-- Appointment list datatable -->\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                                    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"appointments_table\">\n                                        <thead>\n                                            <tr>\n                                                <th>{{'appointments.columns.id' | translate}}</th>\n                                                <th>{{'appointments.columns.title' | translate}}</th>\n                                                <th>{{'appointments.columns.provider' | translate}}</th>\n                                                <th>{{'appointments.columns.start_time' | translate}}</th>\n                                                <th>{{'appointments.columns.end_time' | translate}}</th>\n                                                <th>{{'appointments.columns.location' | translate}}</th>\n                                                <th>{{'appointments.columns.status' | translate}}</th>\n                                                <th>{{'appointments.columns.actions' | translate}}</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody *ngIf=\"appointments?.length != 0\">\n                                            <tr *ngFor=\"let appointment of appointments; index as i\">\n                                                <td>\n                                                    <ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'appointment_view'] else elseBlock1;\">\n                                                        <a [routerLink]=\"['/appointments/detail', appointment.id]\" tooltip=\"{{'common.view' | translate}}\">{{appointment.generated_id}}</a>\n                                                    </ng-container>\n                                                    <ng-template #elseBlock1>{{appointment.generated_id}}</ng-template>\n                                                </td>\n                                                <td>{{appointment.title}}</td>\n                                                <td>{{appointment.provider_firstname}} {{appointment.provider_lastname}}</td>\n                                                <td>{{appointment.start_date_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\n                                                <td>{{appointment.end_date_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\n                                                <td>{{appointment.location}}</td>\n                                                <td class=\"status-dropdown\">\n                                                \t<div *ngxPermissionsOnly=\"['admin', 'super_admin', 'appointment_edit']; else elseBlock1; then thenBlock1\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock1>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ('appointments.status' | translate)\">\n                                                            <div class=\"budges-status\">\n                                                                <span class=\"{{status.class}}\" *ngIf=\"status.id == appointment.status\">{{status.label}}</span>\n                                                            </div>\n                                                        </ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #thenBlock1>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n                                                            <button dropdownToggle id=\"button-basic\" type=\"button\" class=\"btn dropdown-toggle select-btn-lg\" aria-controls=\"dropdown-basic\">{{getTranslateStatus(appointment.status) | translate}}&nbsp;<span class=\"caret\"></span></button>\n                                                            <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic\">\n                                                                <li role=\"menuitem\" *ngFor=\"let status of ('appointments.status' | translate)\"><a class=\"dropdown-item btn btn-sm {{status.class}}\" [ngClass]=\"{'active': appointment.status == status.id}\" (click)=\"changeAppointmentStatus([appointment.id], status);appointment.status = status.id\">{{status.label}}</a></li>\n                                                            </ul>\n                                                        </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n                                                </td>\n                                                <td class=\"actions-dropdown\">\n                                                    <div class=\"btn-group\" dropdown>\n                                                        <button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n                                                        <ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n                                                            <li role=\"menuitem\">\n                                                                <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'appointment_edit']\" (click)=\"openAppointmentEditModal(appointment)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n                                                            </li>\n                                                            <li role=\"menuitem\">\n                                                                <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'appointment_delete']\" (click)=\"deleteAppointment(appointment.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n                                                            </li>\n                                                        </ul>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                        <tfoot *ngIf=\"appointments?.length == 0\" class=\"tfoot_dt\">\n                                            <tr>\n                                                <td colspan=\"8\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n                                            </tr>\n                                        </tfoot>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/pages/appointments/appointments.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/pages/appointments/appointments.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card pb-2\">\n\t\t\t\t<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<h4 class=\"main-title mt-2\"><span>{{'appointments.title' | translate}}</span></h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-8 text-lg-right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-5 mb-lg-0 mb-2\">\n\t\t\t\t\t\t\t\t\t\t<form class=\"form mt-1 \">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t#dp=\"bsDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tbsDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(bsValue)]=\"year\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"{{ year | dateTimeFormatFilter:'MM-YYYY' }}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[bsConfig]=\"{ dateInputFormat: 'MM-YYYY', minMode : minMode }\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"search_for_month\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"search_for_month\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'appointments.create.placeholders.placeholder8' | translate}}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"inputGroupPrepend1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(bsValueChange)=\"appointmentYearChange($event)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/appointments']\" class=\"btn btn-create  mb-0 mr-1\" tooltip=\"{{'common.switch_to_list' | translate}}\"><i class=\"fa fa-list\"></i><span>{{'common.list' | translate}}</span></a>\n\t\t\t\t\t\t\t\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin']\" [routerLink]=\"['/providers']\" class=\"btn btn-create  mb-0 mr-1\" tooltip=\"{{'providers.title' | translate}}\"><i class=\"fa fa-industry\"></i><span>{{'providers.title' | translate}}</span></a>\n\t\t\t\t\t\t\t\t\t\t<button *ngxPermissionsOnly=\"['admin', 'super_admin', 'appointment_create']\" class=\"btn btn-create mb-0\" (click)=\"openAppointmentCreateModal()\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>   \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body pl-2 pr-2 pt-3 pb-3\">\n\t\t\t\t\t<!-- Filter buttons -->\n\t\t\t\t\t<!-- <div class=\"row btn-filters mb-3\" *ngIf=\"isCalendarLoaded\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<button class=\"btn btn-raised open\" [ngClass]=\"{'active': appoitmentFilterKey === 1}\" (click)=\"filterByStatus(1)\">\n\t\t\t\t\t\t\t\t<p>{{'common.status.reserved' | translate}}</p><span class=\"badge badge-light\">{{appointments.statusCount[1]}}</span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button class=\"btn btn-raised assigned\" [ngClass]=\"{'active': appoitmentFilterKey == 2}\" (click)=\"filterByStatus(2)\">\n\t\t\t\t\t\t\t\t<p>{{'common.status.confirmed' | translate}}</p><span class=\"badge badge-light\">{{appointments.statusCount[2]}}</span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button class=\"btn btn-raised completed\" [ngClass]=\"{'active': appoitmentFilterKey == 3}\" (click)=\"filterByStatus(3)\">\n\t\t\t\t\t\t\t\t<p>{{'common.status.finished' | translate}}</p><span class=\"badge badge-light\">{{appointments.statusCount[3]}}</span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button class=\"btn btn-raised cancel\" [ngClass]=\"{'active': appoitmentFilterKey == 4}\" (click)=\"filterByStatus(4)\">\n\t\t\t\t\t\t\t\t<p>{{'common.status.canceled' | translate}}</p><span class=\"badge badge-light\">{{appointments.statusCount[4]}}</span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button class=\"btn btn-raised btn-secondary\" [ngClass]=\"{'active': appoitmentFilterKey == 0 }\" (click)=\"filterByStatus(0)\">\n\t\t\t\t\t\t\t\t<p>{{'common.status.total' | translate}}</p><span class=\"badge badge-light\">{{appointments.statusCount[0]}}</span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> -->\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"row text-center\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 d-flex mb-lg-0 mb-2 ml-lg-0 ml-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"btn calender-day\" mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\" (viewDateChange)=\"closeOpenMonthViewDay()\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"calendar-icon fa fa-chevron-left\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"ml-2 mr-2\"><h3>{{ viewDate | calendarDate:(view + 'ViewTitle'): loginUser.language }}</h3></div>\n\t\t\t\t\t\t\t\t\t<div class=\"btn calender-day\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\" (viewDateChange)=\"closeOpenMonthViewDay()\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"calendar-icon fa fa-chevron-right\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb-lg-0 mb-2 text-lg-right\">\n\t\t\t\t\t\t\t\t\t<div class=\"btn-view-date\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn calender-today mb-1\" mwlCalendarToday [(viewDate)]=\"viewDate\">{{'calendar.today' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn calender-today mb-1\" (click)=\"setView(CalendarView.Month)\" [class.active]=\"view === CalendarView.Month\">{{'calendar.month' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn calender-today mb-1\" (click)=\"setView(CalendarView.Week)\" [class.active]=\"view === CalendarView.Week\">{{'calendar.week' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn calender-today mb-1\" (click)=\"setView(CalendarView.Day)\" [class.active]=\"view === CalendarView.Day\">{{'calendar.day' | translate}}</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<div [ngSwitch]=\"view\">\n\t\t\t\t\t\t\t\t<mwl-calendar-month-view *ngSwitchCase=\"CalendarView.Month\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\" (dayClicked)=\"dayClicked($event.day)\" [locale]=\"loginUser.language\"></mwl-calendar-month-view>\n\t\t\t\t\t\t\t\t<mwl-calendar-week-view *ngSwitchCase=\"CalendarView.Week\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" [locale]=\"loginUser.language\"></mwl-calendar-week-view>\n\t\t\t\t\t\t\t\t<mwl-calendar-day-view *ngSwitchCase=\"CalendarView.Day\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" [locale]=\"loginUser.language\"></mwl-calendar-day-view>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n");

/***/ }),

/***/ "./src/app/core/helpers/crm-helper.ts":
/*!********************************************!*\
  !*** ./src/app/core/helpers/crm-helper.ts ***!
  \********************************************/
/*! exports provided: appointment_status_key_value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appointment_status_key_value", function() { return appointment_status_key_value; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

//--
// Appointments
var appointment_status_key_value = [];
appointment_status_key_value[1] = 'common.status.reserved';
appointment_status_key_value[2] = 'common.status.confirmed';
appointment_status_key_value[3] = 'common.status.finished';
appointment_status_key_value[4] = 'common.status.canceled';


/***/ }),

/***/ "./src/app/core/services/appointment-recurrence.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/services/appointment-recurrence.service.ts ***!
  \*****************************************************************/
/*! exports provided: AppointmentRecurrenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentRecurrenceService", function() { return AppointmentRecurrenceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var AppointmentRecurrenceService = /** @class */ (function () {
    function AppointmentRecurrenceService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    AppointmentRecurrenceService.prototype.changeStatus = function (appointmentRecurrence) {
        return this.http.post(this.apiUrl + "/api/appointment-recurrence/" + appointmentRecurrence.id + "/change-status", { status: appointmentRecurrence.status });
    };
    AppointmentRecurrenceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AppointmentRecurrenceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppointmentRecurrenceService);
    return AppointmentRecurrenceService;
}());



/***/ }),

/***/ "./src/app/core/services/appointments.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/appointments.service.ts ***!
  \*******************************************************/
/*! exports provided: AppointmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsService", function() { return AppointmentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var AppointmentsService = /** @class */ (function () {
    function AppointmentsService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    AppointmentsService.prototype.getAll = function (status, date) {
        return this.http.get(this.apiUrl + "/api/appointments?status=" + status + "&date=" + date);
    };
    AppointmentsService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/appointments/" + id);
    };
    AppointmentsService.prototype.create = function (appointments) {
        return this.http.post(this.apiUrl + "/api/appointments", appointments);
    };
    AppointmentsService.prototype.update = function (appointments) {
        return this.http.put(this.apiUrl + "/api/appointments/" + appointments.id, appointments);
    };
    AppointmentsService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/appointments/" + id);
    };
    AppointmentsService.prototype.changeStatus = function (appointments) {
        return this.http.post(this.apiUrl + "/api/appointments/" + appointments.id + "/change-status", { status: appointments.status });
    };
    AppointmentsService.prototype.getAppointmentAvailabilities = function (appointments) {
        return this.http.get(this.apiUrl + "/api/appointments/availabilities/" + appointments.provider_id + "/" + appointments.start_date_time);
    };
    AppointmentsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AppointmentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppointmentsService);
    return AppointmentsService;
}());



/***/ }),

/***/ "./src/app/modules/crm/appointments/appointments-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/appointments-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AppointmentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsRoutingModule", function() { return AppointmentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/appointments/appointments.component */ "./src/app/modules/crm/appointments/pages/appointments/appointments.component.ts");
/* harmony import */ var _pages_appointments_list_appointments_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/appointments-list/appointments-list.component */ "./src/app/modules/crm/appointments/pages/appointments-list/appointments-list.component.ts");
/* harmony import */ var _pages_appointments_detail_appointments_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/appointments-detail/appointments-detail.component */ "./src/app/modules/crm/appointments/pages/appointments-detail/appointments-detail.component.ts");







var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _pages_appointments_list_appointments_list_component__WEBPACK_IMPORTED_MODULE_5__["AppointmentsListComponent"]
            },
            {
                path: 'calendar',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_4__["AppointmentsComponent"],
                data: {
                    breadcrumbs: {
                        text: "common.calendar",
                        icon: "fa fa-calendar-plus-o",
                        hasParams: true,
                        show: true,
                        isHome: true
                    }
                }
            },
            {
                path: 'detail/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_appointments_detail_appointments_detail_component__WEBPACK_IMPORTED_MODULE_6__["AppointmentsDetailComponent"],
                data: {
                    breadcrumbs: {
                        text: "common.detail",
                        icon: "fa fa-calendar-plus-o",
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'appointment_view']
                    }
                }
            },
            {
                path: ':statusId',
                component: _pages_appointments_list_appointments_list_component__WEBPACK_IMPORTED_MODULE_5__["AppointmentsListComponent"]
            }
        ]
    }
];
var AppointmentsRoutingModule = /** @class */ (function () {
    function AppointmentsRoutingModule() {
    }
    AppointmentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppointmentsRoutingModule);
    return AppointmentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/crm/appointments/appointments.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/crm/appointments/appointments.module.ts ***!
  \*****************************************************************/
/*! exports provided: AppointmentsModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsModule", function() { return AppointmentsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _appointments_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./appointments-routing.module */ "./src/app/modules/crm/appointments/appointments-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/appointments/appointments.component */ "./src/app/modules/crm/appointments/pages/appointments/appointments.component.ts");
/* harmony import */ var _components_create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/create-appointment/create-appointment.component */ "./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.ts");
/* harmony import */ var _components_edit_appointment_edit_appointment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/edit-appointment/edit-appointment.component */ "./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.ts");
/* harmony import */ var _pages_appointments_list_appointments_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/appointments-list/appointments-list.component */ "./src/app/modules/crm/appointments/pages/appointments-list/appointments-list.component.ts");
/* harmony import */ var _pages_appointments_detail_appointments_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/appointments-detail/appointments-detail.component */ "./src/app/modules/crm/appointments/pages/appointments-detail/appointments-detail.component.ts");
/* harmony import */ var _components_appointment_recurrence_appointment_recurrence_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/appointment-recurrence/appointment-recurrence.component */ "./src/app/modules/crm/appointments/components/appointment-recurrence/appointment-recurrence.component.ts");


























var AppointmentsModule = /** @class */ (function () {
    function AppointmentsModule() {
    }
    AppointmentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_20__["AppointmentsComponent"],
                _components_create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_21__["CreateAppointmentComponent"],
                _components_edit_appointment_edit_appointment_component__WEBPACK_IMPORTED_MODULE_22__["EditAppointmentComponent"],
                _pages_appointments_list_appointments_list_component__WEBPACK_IMPORTED_MODULE_23__["AppointmentsListComponent"],
                _pages_appointments_detail_appointments_detail_component__WEBPACK_IMPORTED_MODULE_24__["AppointmentsDetailComponent"],
                _components_appointment_recurrence_appointment_recurrence_component__WEBPACK_IMPORTED_MODULE_25__["AppointmentRecurrenceComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _appointments_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppointmentsRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsModule"],
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__["DragAndDropModule"],
                angular_resizable_element__WEBPACK_IMPORTED_MODULE_16__["ResizableModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_8__["NgxEditorModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_13__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_13__["OwlNativeDateTimeModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_11__["NgxPermissionsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_14__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_14__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_17__["adapterFactory"]
                }),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"]
            ],
            entryComponents: [
                _components_create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_21__["CreateAppointmentComponent"],
                _components_edit_appointment_edit_appointment_component__WEBPACK_IMPORTED_MODULE_22__["EditAppointmentComponent"]
            ],
            providers: []
        })
    ], AppointmentsModule);
    return AppointmentsModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/crm/appointments/components/appointment-recurrence/appointment-recurrence.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/components/appointment-recurrence/appointment-recurrence.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3JtL2FwcG9pbnRtZW50cy9jb21wb25lbnRzL2FwcG9pbnRtZW50LXJlY3VycmVuY2UvYXBwb2ludG1lbnQtcmVjdXJyZW5jZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/crm/appointments/components/appointment-recurrence/appointment-recurrence.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/components/appointment-recurrence/appointment-recurrence.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AppointmentRecurrenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentRecurrenceComponent", function() { return AppointmentRecurrenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_appointment_recurrence_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/appointment-recurrence.service */ "./src/app/core/services/appointment-recurrence.service.ts");
/* harmony import */ var _core_helpers_crm_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../core/helpers/crm-helper */ "./src/app/core/helpers/crm-helper.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_9__);










var AppointmentRecurrenceComponent = /** @class */ (function () {
    function AppointmentRecurrenceComponent(appointmentRecurrenceService, translate, toastr) {
        this.appointmentRecurrenceService = appointmentRecurrenceService;
        this.translate = translate;
        this.toastr = toastr;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.dtOptions = {};
        this.appointmentStatusKeyValue = _core_helpers_crm_helper__WEBPACK_IMPORTED_MODULE_7__["appointment_status_key_value"];
    }
    AppointmentRecurrenceComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    AppointmentRecurrenceComponent.prototype.loadDatatable = function () {
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            dom: 'lTfgtip',
            paging: true,
            responsive: false,
            autoWidth: false,
            order: [0, 'asc'],
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
                { width: "5%", targets: [0] },
                { width: "40%", targets: [1] },
                { width: "40%", targets: [2] },
                { width: "15%", targets: [3] }
            ]
        };
    };
    AppointmentRecurrenceComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    AppointmentRecurrenceComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    AppointmentRecurrenceComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.appointmentStatusKeyValue[statusKey];
    };
    AppointmentRecurrenceComponent.prototype.changeAppointmentRecurrenceStatus = function (recurrenceId, status) {
        var _this = this;
        this.appointmentRecurrenceService.changeStatus({ id: recurrenceId, status: status.id }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('appointments.messages.status'), _this.translate.instant('appointments.title'));
        });
    };
    AppointmentRecurrenceComponent.ctorParameters = function () { return [
        { type: _core_services_appointment_recurrence_service__WEBPACK_IMPORTED_MODULE_6__["AppointmentRecurrenceService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppointmentRecurrenceComponent.prototype, "appointment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppointmentRecurrenceComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppointmentRecurrenceComponent.prototype, "apiUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], AppointmentRecurrenceComponent.prototype, "dtElement", void 0);
    AppointmentRecurrenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appointment-recurrence',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appointment-recurrence.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/components/appointment-recurrence/appointment-recurrence.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appointment-recurrence.component.scss */ "./src/app/modules/crm/appointments/components/appointment-recurrence/appointment-recurrence.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_appointment_recurrence_service__WEBPACK_IMPORTED_MODULE_6__["AppointmentRecurrenceService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AppointmentRecurrenceComponent);
    return AppointmentRecurrenceComponent;
}());



/***/ }),

/***/ "./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3JtL2FwcG9pbnRtZW50cy9jb21wb25lbnRzL2NyZWF0ZS1hcHBvaW50bWVudC9jcmVhdGUtYXBwb2ludG1lbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CreateAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAppointmentComponent", function() { return CreateAppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/provider.service */ "./src/app/core/services/provider.service.ts");
/* harmony import */ var _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/appointments.service */ "./src/app/core/services/appointments.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);












var CreateAppointmentComponent = /** @class */ (function () {
    function CreateAppointmentComponent(translate, bsCreateModalRef, formBuilder, toastr, clientService, providerService, appointmentsService) {
        this.translate = translate;
        this.bsCreateModalRef = bsCreateModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.clientService = clientService;
        this.providerService = providerService;
        this.appointmentsService = appointmentsService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.minDate = new Date;
        this.clients = [];
        this.isFormSubmitted = false;
        this.isPageLoad = false;
        this.editorConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_10__["editorConfig"];
    }
    CreateAppointmentComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getClients();
    };
    CreateAppointmentComponent.prototype.loadForm = function () {
        this.createAppointmentForm = this.formBuilder.group({
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            client_id: [null],
            provider_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            attendees: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            start_date_time: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            end_date_time: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            location: [''],
            note: [''],
            recurrence: [false],
            recurrence_pattern: [null],
            recurrence_occurrences: [null],
        });
        this.isPageLoad = true;
        this.checkAvailabilities(false);
    };
    Object.defineProperty(CreateAppointmentComponent.prototype, "appointmentControl", {
        get: function () { return this.createAppointmentForm.controls; },
        enumerable: true,
        configurable: true
    });
    CreateAppointmentComponent.prototype.startDateChange = function (startDate) {
        this.createAppointmentForm.patchValue({ end_date_time: new Date(startDate.value) });
        this.checkAvailabilities(true);
    };
    CreateAppointmentComponent.prototype.changeRecurrence = function ($event) {
        if ($event === void 0) { $event = []; }
        if (this.createAppointmentForm.value.recurrence) {
            this.createAppointmentForm.get('recurrence_occurrences').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.createAppointmentForm.get('recurrence_pattern').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.createAppointmentForm.get('recurrence_occurrences').updateValueAndValidity();
            this.createAppointmentForm.get('recurrence_pattern').updateValueAndValidity();
        }
        else {
            this.createAppointmentForm.patchValue({
                recurrence_occurrences: null,
                recurrence_pattern: null
            });
            this.createAppointmentForm.get('recurrence_occurrences').clearValidators();
            this.createAppointmentForm.get('recurrence_pattern').clearValidators();
            this.createAppointmentForm.get('recurrence_occurrences').updateValueAndValidity();
            this.createAppointmentForm.get('recurrence_pattern').updateValueAndValidity();
        }
    };
    CreateAppointmentComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getAll()
            .subscribe(function (data) {
            _this.clients = data;
            _this.getProviders();
        });
    };
    CreateAppointmentComponent.prototype.getProviders = function () {
        var _this = this;
        this.providerService.getAll()
            .subscribe(function (data) {
            _this.providers = data;
            _this.loadForm();
        });
    };
    CreateAppointmentComponent.prototype.checkAvailabilities = function (isValid) {
        var _this = this;
        if (!this.createAppointmentForm.value.provider_id && isValid) {
            this.toastr.error(this.translate.instant('appointments.create.error_messages.message9'), this.translate.instant('appointments.title'));
            return false;
        }
        this.createAppointmentForm.value.start_date_time = moment__WEBPACK_IMPORTED_MODULE_11__(this.createAppointmentForm.value.start_date_time).format('YYYY-MM-DD HH:mm:ss');
        this.appointmentsService.getAppointmentAvailabilities(this.createAppointmentForm.value)
            .subscribe(function (data) {
            _this.availabileSlots = data;
        });
    };
    CreateAppointmentComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createAppointmentForm.invalid) {
            return;
        }
        this.createAppointmentForm.value.start_date_time = moment__WEBPACK_IMPORTED_MODULE_11__(this.createAppointmentForm.value.start_date_time).format('YYYY-MM-DD HH:mm:ss');
        this.createAppointmentForm.value.end_date_time = moment__WEBPACK_IMPORTED_MODULE_11__(this.createAppointmentForm.value.end_date_time).format('YYYY-MM-DD HH:mm:ss');
        this.appointmentsService.create(this.createAppointmentForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('appointments.messages.create'), _this.translate.instant('appointments.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    CreateAppointmentComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateModalRef.hide();
    };
    CreateAppointmentComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"] },
        { type: _core_services_provider_service__WEBPACK_IMPORTED_MODULE_8__["ProviderService"] },
        { type: _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_9__["AppointmentsService"] }
    ]; };
    CreateAppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-appointment',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-appointment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-appointment.component.scss */ "./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"],
            _core_services_provider_service__WEBPACK_IMPORTED_MODULE_8__["ProviderService"],
            _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_9__["AppointmentsService"]])
    ], CreateAppointmentComponent);
    return CreateAppointmentComponent;
}());



/***/ }),

/***/ "./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3JtL2FwcG9pbnRtZW50cy9jb21wb25lbnRzL2VkaXQtYXBwb2ludG1lbnQvZWRpdC1hcHBvaW50bWVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: EditAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAppointmentComponent", function() { return EditAppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/provider.service */ "./src/app/core/services/provider.service.ts");
/* harmony import */ var _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/appointments.service */ "./src/app/core/services/appointments.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);












var EditAppointmentComponent = /** @class */ (function () {
    function EditAppointmentComponent(translate, bsEditModalRef, formBuilder, toastr, clientService, providerService, appointmentsService) {
        this.translate = translate;
        this.bsEditModalRef = bsEditModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.clientService = clientService;
        this.providerService = providerService;
        this.appointmentsService = appointmentsService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clients = [];
        this.isFormSubmitted = false;
        this.isPageLoad = false;
        this.editorConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_10__["editorConfig"];
    }
    EditAppointmentComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getClients();
    };
    EditAppointmentComponent.prototype.loadForm = function () {
        this.editAppointmentForm = this.formBuilder.group({
            id: [this.appointment.id],
            title: [this.appointment.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            client_id: [this.appointment.client_id],
            provider_id: [this.appointment.provider_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            attendees: [this.appointment.attendees, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            start_date_time: [new Date(this.appointment.start_date_time), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            end_date_time: [new Date(this.appointment.end_date_time), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: [this.appointment.status, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            location: [this.appointment.location],
            note: [this.appointment.note],
            recurrence: [this.appointment.recurrence],
            recurrence_pattern: [this.appointment.recurrence_pattern],
            recurrence_occurrences: [this.appointment.recurrence_occurrences],
        });
        this.checkAvailabilities();
        this.isPageLoad = true;
    };
    Object.defineProperty(EditAppointmentComponent.prototype, "appointmentControl", {
        get: function () { return this.editAppointmentForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditAppointmentComponent.prototype.startDateChange = function (start_date) {
        this.editAppointmentForm.patchValue({ end_date_time: new Date(start_date.value) });
        this.checkAvailabilities();
    };
    EditAppointmentComponent.prototype.changeRecurrence = function ($event) {
        if ($event === void 0) { $event = []; }
        if (this.editAppointmentForm.value.recurrence) {
            this.editAppointmentForm.get('recurrence_occurrences').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.editAppointmentForm.get('recurrence_pattern').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.editAppointmentForm.get('recurrence_occurrences').updateValueAndValidity();
            this.editAppointmentForm.get('recurrence_pattern').updateValueAndValidity();
        }
        else {
            this.editAppointmentForm.patchValue({
                recurrence_occurrences: null,
                recurrence_pattern: null
            });
            this.editAppointmentForm.get('recurrence_occurrences').clearValidators();
            this.editAppointmentForm.get('recurrence_pattern').clearValidators();
            this.editAppointmentForm.get('recurrence_occurrences').updateValueAndValidity();
            this.editAppointmentForm.get('recurrence_pattern').updateValueAndValidity();
        }
    };
    EditAppointmentComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getAll()
            .subscribe(function (data) {
            _this.clients = data;
            _this.getProviders();
        });
    };
    EditAppointmentComponent.prototype.getProviders = function () {
        var _this = this;
        this.providerService.getAll()
            .subscribe(function (data) {
            _this.providers = data;
            _this.loadForm();
        });
    };
    EditAppointmentComponent.prototype.changeProvider = function () {
        this.editAppointmentForm.patchValue({ start_date_time: null });
        this.editAppointmentForm.patchValue({ end_date_time: null });
        this.availabileSlots = [];
    };
    EditAppointmentComponent.prototype.checkAvailabilities = function () {
        var _this = this;
        if (!this.editAppointmentForm.value.provider_id) {
            this.toastr.error(this.translate.instant('appointments.create.error_messages.message9'), this.translate.instant('appointments.title'));
            return false;
        }
        this.editAppointmentForm.value.start_date_time = moment__WEBPACK_IMPORTED_MODULE_11__(this.editAppointmentForm.value.start_date_time).format('YYYY-MM-DD HH:mm:ss');
        this.appointmentsService.getAppointmentAvailabilities(this.editAppointmentForm.value)
            .subscribe(function (data) {
            _this.availabileSlots = data;
        });
    };
    EditAppointmentComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editAppointmentForm.invalid) {
            return;
        }
        this.editAppointmentForm.value.start_date_time = moment__WEBPACK_IMPORTED_MODULE_11__(this.editAppointmentForm.value.start_date_time).format('YYYY-MM-DD HH:mm:ss');
        this.editAppointmentForm.value.end_date_time = moment__WEBPACK_IMPORTED_MODULE_11__(this.editAppointmentForm.value.end_date_time).format('YYYY-MM-DD HH:mm:ss');
        this.appointmentsService.update(this.editAppointmentForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('appointments.messages.edit'), _this.translate.instant('appointments.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    EditAppointmentComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditModalRef.hide();
    };
    EditAppointmentComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"] },
        { type: _core_services_provider_service__WEBPACK_IMPORTED_MODULE_8__["ProviderService"] },
        { type: _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_9__["AppointmentsService"] }
    ]; };
    EditAppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-appointment',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-appointment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-appointment.component.scss */ "./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"],
            _core_services_provider_service__WEBPACK_IMPORTED_MODULE_8__["ProviderService"],
            _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_9__["AppointmentsService"]])
    ], EditAppointmentComponent);
    return EditAppointmentComponent;
}());



/***/ }),

/***/ "./src/app/modules/crm/appointments/pages/appointments-detail/appointments-detail.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/pages/appointments-detail/appointments-detail.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3JtL2FwcG9pbnRtZW50cy9wYWdlcy9hcHBvaW50bWVudHMtZGV0YWlsL2FwcG9pbnRtZW50cy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/crm/appointments/pages/appointments-detail/appointments-detail.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/pages/appointments-detail/appointments-detail.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AppointmentsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsDetailComponent", function() { return AppointmentsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/appointments.service */ "./src/app/core/services/appointments.service.ts");
/* harmony import */ var src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_crm_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../core/helpers/crm-helper */ "./src/app/core/helpers/crm-helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");









var AppointmentsDetailComponent = /** @class */ (function () {
    function AppointmentsDetailComponent(translate, toastr, route, appointmentsService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.toastr = toastr;
        this.route = route;
        this.appointmentsService = appointmentsService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.isPageLoaded = false;
        this.appointmentStatusKeyValue = _core_helpers_crm_helper__WEBPACK_IMPORTED_MODULE_7__["appointment_status_key_value"];
        this.route.paramMap.subscribe(function (params) {
            _this.getById(params.get('id'));
        });
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    AppointmentsDetailComponent.prototype.ngOnInit = function () {
    };
    AppointmentsDetailComponent.prototype.getById = function (appointmentId) {
        var _this = this;
        this.appointmentsService.getById(appointmentId).subscribe(function (data) {
            _this.appointment = data;
            _this.isPageLoaded = true;
        });
    };
    AppointmentsDetailComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.appointmentStatusKeyValue[statusKey];
    };
    AppointmentsDetailComponent.prototype.changeAppointmentStatus = function (appointmentId, status) {
        var _this = this;
        this.appointmentsService.changeStatus({ id: appointmentId, status: status.id }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('appointments.messages.status'), _this.translate.instant('appointments.title'));
        });
    };
    AppointmentsDetailComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_5__["AppointmentsService"] },
        { type: src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
    ]; };
    AppointmentsDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appointments-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appointments-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/pages/appointments-detail/appointments-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appointments-detail.component.scss */ "./src/app/modules/crm/appointments/pages/appointments-detail/appointments-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_5__["AppointmentsService"],
            src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], AppointmentsDetailComponent);
    return AppointmentsDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/crm/appointments/pages/appointments-list/appointments-list.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/pages/appointments-list/appointments-list.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n\n.btn-filters .status-dropdown .btn.assigned,\n.btn-filters .status-dropdown .btn.open {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9jcm0vYXBwb2ludG1lbnRzL3BhZ2VzL2FwcG9pbnRtZW50cy1saXN0L2FwcG9pbnRtZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2NybS9hcHBvaW50bWVudHMvcGFnZXMvYXBwb2ludG1lbnRzLWxpc3QvYXBwb2ludG1lbnRzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7O0VBRUMsZ0JBQUE7QUNFRCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3JtL2FwcG9pbnRtZW50cy9wYWdlcy9hcHBvaW50bWVudHMtbGlzdC9hcHBvaW50bWVudHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cbi5idG4tZmlsdGVycyAuc3RhdHVzLWRyb3Bkb3duIC5idG4uYXNzaWduZWQsXG4uYnRuLWZpbHRlcnMgLnN0YXR1cy1kcm9wZG93biAuYnRuLm9wZW4ge1xuXHRiYWNrZ3JvdW5kOiBub25lO1xufSIsIi5oaWRlX2VtcHR5X21lc3NhZ2UgOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnRuLWZpbHRlcnMgLnN0YXR1cy1kcm9wZG93biAuYnRuLmFzc2lnbmVkLFxuLmJ0bi1maWx0ZXJzIC5zdGF0dXMtZHJvcGRvd24gLmJ0bi5vcGVuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/crm/appointments/pages/appointments-list/appointments-list.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/pages/appointments-list/appointments-list.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AppointmentsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsListComponent", function() { return AppointmentsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/appointments.service */ "./src/app/core/services/appointments.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/create-appointment/create-appointment.component */ "./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.ts");
/* harmony import */ var _components_edit_appointment_edit_appointment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/edit-appointment/edit-appointment.component */ "./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.ts");
/* harmony import */ var _core_helpers_crm_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../../../../core/helpers/crm-helper */ "./src/app/core/helpers/crm-helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__);



















var AppointmentsListComponent = /** @class */ (function () {
    function AppointmentsListComponent(translate, router, route, http, exportAsService, toastr, modalService, appointmentsService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.modalService = modalService;
        this.appointmentsService = appointmentsService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.dtOptions = {};
        this.appointments = [];
        this.appointmentStatusKeyValue = _core_helpers_crm_helper__WEBPACK_IMPORTED_MODULE_15__["appointment_status_key_value"];
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'appointments_table',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    AppointmentsListComponent.prototype.ngOnInit = function () {
        this.loadAppointmentDatatable();
    };
    AppointmentsListComponent.prototype.loadAppointmentDatatable = function () {
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
                    'width': "8%",
                    'target': [0]
                },
                {
                    'sortable': true,
                    'target': [0]
                },
                {
                    'sortable': true,
                    'width': "15%",
                    'target': [1]
                },
                {
                    'sortable': true,
                    'width': "8%",
                    'target': [2]
                },
                {
                    'sortable': true,
                    'width': "8%",
                    'target': [3]
                },
                {
                    'sortable': true,
                    'width': "12%",
                    'target': [4]
                },
                {
                    'sortable': true,
                    'width': "12%",
                    'target': [5]
                },
                {
                    'sortable': false,
                    'target': [6],
                    'width': "5%"
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('appointments.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('appointments.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('appointments.title'),
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
                    status: _this.statusfilterId
                };
                _this.http
                    .post(_this.apiUrl + '/api/all-appointments', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.isPageLoaded = true;
                    _this.appointments = resp.data;
                    _this.statusCount = resp;
                    _this.statusCount = _this.statusCount.statusCount;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    AppointmentsListComponent.prototype.filterByStatus = function (statusID) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.navigate(['appointments', statusID]);
    };
    AppointmentsListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    AppointmentsListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    AppointmentsListComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.appointments.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    AppointmentsListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('appointments.title')).subscribe(function () { });
    };
    AppointmentsListComponent.prototype.openAppointmentCreateModal = function () {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn"
        };
        this.modalRef = this.modalService.show(_components_create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_13__["CreateAppointmentComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    AppointmentsListComponent.prototype.openAppointmentEditModal = function (appointment) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn",
            initialState: {
                appointment: appointment
            }
        };
        this.modalRef = this.modalService.show(_components_edit_appointment_edit_appointment_component__WEBPACK_IMPORTED_MODULE_14__["EditAppointmentComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    AppointmentsListComponent.prototype.deleteAppointment = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.appointmentsService.delete(id).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('appointments.messages.delete'), _this.translate.instant('appointments.title'));
                    _this.rerender();
                });
            }
        });
    };
    AppointmentsListComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.appointmentStatusKeyValue[statusKey];
    };
    AppointmentsListComponent.prototype.changeAppointmentStatus = function (appointmentId, status) {
        var _this = this;
        this.appointmentsService.changeStatus({ id: appointmentId, status: status.id }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('appointments.messages.status'), _this.translate.instant('appointments.title'));
            _this.rerender();
        });
    };
    AppointmentsListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_11__["AppointmentsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"])
    ], AppointmentsListComponent.prototype, "dtElement", void 0);
    AppointmentsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appointments-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appointments-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/pages/appointments-list/appointments-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appointments-list.component.scss */ "./src/app/modules/crm/appointments/pages/appointments-list/appointments-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_11__["AppointmentsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]])
    ], AppointmentsListComponent);
    return AppointmentsListComponent;
}());



/***/ }),

/***/ "./src/app/modules/crm/appointments/pages/appointments/appointments.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/pages/appointments/appointments.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3JtL2FwcG9pbnRtZW50cy9wYWdlcy9hcHBvaW50bWVudHMvYXBwb2ludG1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/crm/appointments/pages/appointments/appointments.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/crm/appointments/pages/appointments/appointments.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AppointmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsComponent", function() { return AppointmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_helpers_custom_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/helpers/custom-event-title-formatter.provider */ "./src/app/core/helpers/custom-event-title-formatter.provider.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/appointments.service */ "./src/app/core/services/appointments.service.ts");
/* harmony import */ var _core_services_provider_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/provider.service */ "./src/app/core/services/provider.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core//services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/create-appointment/create-appointment.component */ "./src/app/modules/crm/appointments/components/create-appointment/create-appointment.component.ts");
/* harmony import */ var _components_edit_appointment_edit_appointment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/edit-appointment/edit-appointment.component */ "./src/app/modules/crm/appointments/components/edit-appointment/edit-appointment.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);


















var AppointmentsComponent = /** @class */ (function () {
    function AppointmentsComponent(translate, ngxRolesService, http, toastr, modalService, providerService, appointmentsService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.toastr = toastr;
        this.modalService = modalService;
        this.providerService = providerService;
        this.appointmentsService = appointmentsService;
        this.authenticationService = authenticationService;
        this.isCalendarLoaded = false;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarView"];
        this.viewDate = new Date();
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.events = this.AllCalendarEvents;
        this.activeDayIsOpen = true;
        this.minMode = 'month';
        this.filterDate = null;
        this.appoitmentFilterKey = 0;
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    AppointmentsComponent.prototype.ngOnInit = function () {
        // this.filterDate = moment(this.year).format('YYYY-MM');
        this.getProviders();
    };
    AppointmentsComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    };
    AppointmentsComponent.prototype.addEvent = function (tasks) {
        this.events = tasks;
        this.refreshView();
    };
    AppointmentsComponent.prototype.refreshView = function () {
        this.refresh.next();
    };
    AppointmentsComponent.prototype.setView = function (view) {
        this.view = view;
    };
    AppointmentsComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    AppointmentsComponent.prototype.getAppointments = function (status, date) {
        var _this = this;
        if (status === void 0) { status = 0; }
        this.appointmentsService.getAll(status, date)
            .subscribe(function (data) {
            _this.appointments = data;
            _this.isCalendarLoaded = true;
            _this.setCalendarData();
        });
    };
    AppointmentsComponent.prototype.filterByStatus = function (status) {
        this.appoitmentFilterKey = status;
        this.getAppointments(status, this.filterDate);
    };
    AppointmentsComponent.prototype.appointmentYearChange = function ($event) {
        this.filterDate = moment__WEBPACK_IMPORTED_MODULE_17__($event).format('YYYY-MM');
        this.getAppointments(this.appoitmentFilterKey, this.filterDate);
    };
    AppointmentsComponent.prototype.setCalendarData = function () {
        var _this = this;
        var eventsAll = [];
        var roleName = this.ngxRolesService.getRole('admin');
        var isAllowed = false;
        if ((roleName && roleName.name == 'admin') || this.loginUser.is_super_admin) {
            isAllowed = true;
        }
        this.appointments['data'].forEach(function (element) {
            var provider = _this.getProvider(element.provider_id);
            if (provider) {
                if (element.user_id == _this.loginUser.id) {
                    isAllowed = true;
                }
                if (isAllowed) {
                    eventsAll.push({
                        start: new Date(element.start_date_time),
                        end: new Date(element.end_date_time),
                        title: '(' + moment__WEBPACK_IMPORTED_MODULE_17__(element.start_date_time).format(_this.loginUser.settings.date_time_format) + ' - ' + moment__WEBPACK_IMPORTED_MODULE_17__(element.end_date_time).format(_this.loginUser.settings.date_time_format) + ') ' + provider.firstname + ' ' + provider.lastname + ' / ' + element.title,
                        allDay: true,
                        cssClass: "event_" + element.id,
                        color: {
                            primary: provider.color,
                            secondary: provider.color
                        },
                        actions: [
                        // {
                        // 	label: '<i class="fa fa-fw fa-pencil"></i>',
                        // 	onClick: ({ event }: { event: CalendarEvent }): void => {
                        // 		this.openAppointmentEditModal(event);
                        // 	}
                        // }, {
                        // 	label: '<i class="fa fa-fw fa-times"></i>',
                        // 	onClick: ({ event }: { event: CalendarEvent }): void => {
                        // 		this.deleteAppointment(event);
                        // 	}
                        // }
                        ]
                    });
                }
                else {
                    eventsAll.push({
                        start: new Date(element.start_date_time),
                        end: new Date(element.end_date_time),
                        title: '(' + moment__WEBPACK_IMPORTED_MODULE_17__(element.start_date_time).format(_this.loginUser.settings.date_time_format) + ' - ' + moment__WEBPACK_IMPORTED_MODULE_17__(element.end_date_time).format(_this.loginUser.settings.date_time_format) + ') ' + provider.firstname + ' ' + provider.lastname + ' / ' + element.title,
                        allDay: true,
                        cssClass: "event_" + element.id,
                        color: {
                            primary: provider.color,
                            secondary: provider.color
                        },
                        actions: []
                    });
                }
            }
        });
        this.addEvent(eventsAll);
        this.AllCalendarEvents = eventsAll;
    };
    AppointmentsComponent.prototype.getProvider = function (providerId) {
        for (var iRow in this.providers) {
            if (this.providers[iRow].id == providerId) {
                return this.providers[iRow];
            }
        }
    };
    AppointmentsComponent.prototype.getAppointment = function (id) {
        for (var iRow in this.appointments['data']) {
            if (this.appointments['data'][iRow].id == id) {
                return this.appointments['data'][iRow];
            }
        }
    };
    AppointmentsComponent.prototype.getProviders = function () {
        var _this = this;
        this.providerService.getAll()
            .subscribe(function (data) {
            _this.providers = data;
            _this.getAppointments(_this.appoitmentFilterKey, _this.filterDate);
        });
    };
    AppointmentsComponent.prototype.openAppointmentCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_15__["CreateAppointmentComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getAppointments(_this.appoitmentFilterKey, _this.filterDate);
        });
    };
    AppointmentsComponent.prototype.openAppointmentEditModal = function (event) {
        var _this = this;
        var appointment = this.getAppointment(parseInt(this.getSecondPartString(event.cssClass)));
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn",
            initialState: {
                appointment: appointment
            }
        };
        this.modalRef = this.modalService.show(_components_edit_appointment_edit_appointment_component__WEBPACK_IMPORTED_MODULE_16__["EditAppointmentComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getAppointments(_this.appoitmentFilterKey, _this.filterDate);
        });
    };
    AppointmentsComponent.prototype.deleteAppointment = function (event) {
        var _this = this;
        var appointmentId = parseInt(this.getSecondPartString(event.cssClass));
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.appointmentsService.delete(appointmentId)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('appointments.messages.delete'), _this.translate.instant('appointments.title'));
                    _this.getAppointments(_this.appoitmentFilterKey, _this.filterDate);
                });
            }
        });
    };
    AppointmentsComponent.prototype.getSecondPartString = function (str) {
        return str.split('_')[1];
    };
    AppointmentsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: _core_services_provider_service__WEBPACK_IMPORTED_MODULE_13__["ProviderService"] },
        { type: _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_12__["AppointmentsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"] }
    ]; };
    AppointmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appointments',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appointments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/crm/appointments/pages/appointments/appointments.component.html")).default,
            providers: [{
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarEventTitleFormatter"],
                    useClass: _core_helpers_custom_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_9__["CustomEventTitleFormatter"]
                }],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appointments.component.scss */ "./src/app/modules/crm/appointments/pages/appointments/appointments.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_services_provider_service__WEBPACK_IMPORTED_MODULE_13__["ProviderService"],
            _core_services_appointments_service__WEBPACK_IMPORTED_MODULE_12__["AppointmentsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]])
    ], AppointmentsComponent);
    return AppointmentsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-crm-appointments-appointments-module.js.map