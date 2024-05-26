(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-hrm-leave-types-leave-types-module~modules-hrm-leaves-leaves-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leave-types/pages/leave-types-list/leave-types-list.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leave-types/pages/leave-types-list/leave-types-list.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card pl-2 pr-2\">\n\t\t\t\t<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t\t\t\t\t<h4 class=\"main-title mb-0 mt-2\"><span>{{'leave_types.title' | translate}}</span></h4>\n\t\t\t\t\t<div class=\"card-buttons\">\n\t\t\t\t\t\t<a [routerLink]=\"['/leaves']\" class=\"btn btn-create mb-0\" tooltip=\"{{'leaves.title3' | translate}}\"><i class=\"fa fa-list\"></i></a>\n\t\t\t\t\t\t<a [routerLink]=\"['/leaves/request']\" class=\"btn btn-create mb-0\" tooltip=\"{{'leaves.title2' | translate}}\"><i class=\"fa fa-trello\"></i></a>\n\t\t\t\t\t\t<a [routerLink]=\"['/leaves/calendar']\" class=\"btn btn-create mb-0\" tooltip=\"{{'common.calendar_view' | translate}}\"><i class=\"fa fa-calendar\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-content pt-3 pb-3\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'leavetypes_create']\">\n\t\t\t\t\t\t\t\t<form class=\"form\" [formGroup]=\"createLeaveTypeForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"leave_type\">{{'leave_types.create.fields.leave_type' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"{{'leave_types.create.placeholders.placeholder1' | translate }}\" class=\"form-control\" formControlName=\"leave_type\" [ngClass]=\"{ 'is-invalid': isSubmitted && leavetypeControl.leave_type.errors }\" id=\"leave_type\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isSubmitted && leavetypeControl.leave_type.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"leavetypeControl.leave_type.errors.required\">{{'leave_types.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"leavetypeControl.leave_type.errors.maxlength\">{{'leave_types.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"no_of_leaves\">{{'leave_types.create.fields.no_of_leaves' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"{{'leave_types.create.placeholders.placeholder2' | translate }}\" class=\"form-control\" formControlName=\"no_of_leaves\" [ngClass]=\"{ 'is-invalid': isSubmitted && leavetypeControl.no_of_leaves.errors }\" id=\"no_of_leaves\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isSubmitted && leavetypeControl.no_of_leaves.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"leavetypeControl.no_of_leaves.errors.required\">{{'leave_types.create.error_messages.message3' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"leavetypeControl.no_of_leaves.errors.pattern\">{{'leave_types.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"color\">{{'leave_types.create.fields.color' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input [colorPicker]=\"createLeaveTypeForm.get('color').value\" [value]=\"createLeaveTypeForm.get('color').value\" (colorPickerChange)=\"createLeaveTypeForm.get('color').setValue($event)\" [style.background]=\"createLeaveTypeForm.get('color').value\" [cpCancelButton]=\"true\" class=\"form-control\" id=\"color\" formControlName=\"color\" [ngClass]=\"{ 'is-invalid': isSubmitted && leavetypeControl.color.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-droplet\"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isSubmitted && leavetypeControl.color.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"leavetypeControl.color.errors.required\">{{'leave_types.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.create' | translate}}</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\">\n\t\t\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'leave_types.columns.leave_type' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'leave_types.columns.no_of_leaves' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'leave_types.columns.color' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">{{'common.actions' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let leave of leaveTypes; index as i\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ i + 1 }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'leavetypes_edit'] else elseBlock1;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-input [name]=\"'leave_type'\" [type]=\"'text'\" [elementFor]=\"'leave_types.inline_edit.leave_type' | translate\" [maxLength]=\"50\" [fieldValue]=\"leave.leave_type\" [isRequired]=\"'true'\" (updateValue)=\"saveLeaveTypeDetail(i, 'leave_type', $event);\"></inline-edit-input>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock1>{{leave.leave_type}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'leavetypes_edit'] else elseBlock2;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-input [name]=\"'no_of_leaves'\" [type]=\"'text'\" [elementFor]=\"'leave_types.inline_edit.no_of_leaves' | translate\" [maxLength]=\"50\" [fieldValue]=\"leave.no_of_leaves\" [isRequired]=\"'true'\" pattern=\"^-?(0|[1-9]\\d*)?$\" (updateValue)=\"saveLeaveTypeDetail(i, 'no_of_leaves', $event);\"></inline-edit-input>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock2>{{leave.no_of_leaves}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><div class=\"width-30 height-30\" [ngStyle]=\"{'background-color': leave.color}\"></div></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"actions-dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin', 'leavetypes_delete']\" (click)=\"deleteLeaveType(leave.id)\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\" tooltip=\"{{'common.delete' | translate}}\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t<tfoot *ngIf=\"leaveTypes?.length == 0\" class=\"tfoot_dt\">\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\" class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/norecord-img.png\" width=\"50\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mt-1\">{{'common.datatable.sEmptyTable' | translate}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n");

/***/ }),

/***/ "./src/app/core/services/leavetype.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/leavetype.service.ts ***!
  \****************************************************/
/*! exports provided: LeavetypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavetypeService", function() { return LeavetypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var LeavetypeService = /** @class */ (function () {
    function LeavetypeService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    LeavetypeService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/leave-type");
    };
    LeavetypeService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/leave-type/" + id);
    };
    LeavetypeService.prototype.create = function (leavetype) {
        return this.http.post(this.apiUrl + "/api/leave-type", leavetype);
    };
    LeavetypeService.prototype.update = function (leavetype) {
        return this.http.put(this.apiUrl + "/api/leave-type/" + leavetype.id, leavetype);
    };
    LeavetypeService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/leave-type/" + id);
    };
    LeavetypeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LeavetypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LeavetypeService);
    return LeavetypeService;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leave-types/leave-types-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/hrm/leave-types/leave-types-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: LeaveTypesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTypesRoutingModule", function() { return LeaveTypesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_leave_types_list_leave_types_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/leave-types-list/leave-types-list.component */ "./src/app/modules/hrm/leave-types/pages/leave-types-list/leave-types-list.component.ts");





var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_leave_types_list_leave_types_list_component__WEBPACK_IMPORTED_MODULE_4__["LeaveTypesListComponent"]
            }
        ]
    }
];
var LeaveTypesRoutingModule = /** @class */ (function () {
    function LeaveTypesRoutingModule() {
    }
    LeaveTypesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LeaveTypesRoutingModule);
    return LeaveTypesRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/hrm/leave-types/leave-types.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/hrm/leave-types/leave-types.module.ts ***!
  \***************************************************************/
/*! exports provided: LeaveTypesModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTypesModule", function() { return LeaveTypesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _leave_types_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leave-types-routing.module */ "./src/app/modules/hrm/leave-types/leave-types-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_leave_types_list_leave_types_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/leave-types-list/leave-types-list.component */ "./src/app/modules/hrm/leave-types/pages/leave-types-list/leave-types-list.component.ts");













var LeaveTypesModule = /** @class */ (function () {
    function LeaveTypesModule() {
    }
    LeaveTypesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_leave_types_list_leave_types_list_component__WEBPACK_IMPORTED_MODULE_12__["LeaveTypesListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _leave_types_routing_module__WEBPACK_IMPORTED_MODULE_10__["LeaveTypesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__["ColorPickerModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]
            ],
            exports: [
                _pages_leave_types_list_leave_types_list_component__WEBPACK_IMPORTED_MODULE_12__["LeaveTypesListComponent"]
            ]
        })
    ], LeaveTypesModule);
    return LeaveTypesModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/hrm/leave-types/pages/leave-types-list/leave-types-list.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/hrm/leave-types/pages/leave-types-list/leave-types-list.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaHJtL2xlYXZlLXR5cGVzL3BhZ2VzL2xlYXZlLXR5cGVzLWxpc3QvbGVhdmUtdHlwZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/hrm/leave-types/pages/leave-types-list/leave-types-list.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/hrm/leave-types/pages/leave-types-list/leave-types-list.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LeaveTypesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTypesListComponent", function() { return LeaveTypesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_services_leavetype_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/leavetype.service */ "./src/app/core/services/leavetype.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");










var LeaveTypesListComponent = /** @class */ (function () {
    function LeaveTypesListComponent(translate, ngxRolesService, http, toastr, formBuilder, authenticationService, leavetypeService) {
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.leavetypeService = leavetypeService;
        this.leaveTypes = [];
        this.isSubmitted = false;
    }
    LeaveTypesListComponent.prototype.ngOnInit = function () {
        this.getLeaveTypes();
        this.loadForms();
    };
    LeaveTypesListComponent.prototype.loadForms = function () {
        this.createLeaveTypeForm = this.formBuilder.group({
            leave_type: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            no_of_leaves: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
            color: ['#1ab394', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    Object.defineProperty(LeaveTypesListComponent.prototype, "leavetypeControl", {
        get: function () { return this.createLeaveTypeForm.controls; },
        enumerable: true,
        configurable: true
    });
    LeaveTypesListComponent.prototype.getLeaveTypes = function () {
        var _this = this;
        this.leavetypeService.getAll()
            .subscribe(function (data) {
            _this.leaveTypes = data;
        });
    };
    LeaveTypesListComponent.prototype.saveLeaveTypeDetail = function (index, name, value) {
        var _this = this;
        this.leaveTypes[index][name] = value;
        this.leavetypeService.update(this.leaveTypes[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('leave_types.messages.update'), _this.translate.instant('leave_types.title'));
            _this.getLeaveTypes();
        });
    };
    LeaveTypesListComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.createLeaveTypeForm.invalid) {
            return;
        }
        this.leavetypeService.create(this.createLeaveTypeForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('leave_types.messages.create'), _this.translate.instant('leave_types.title'));
            _this.getLeaveTypes();
            _this.isSubmitted = false;
            _this.createLeaveTypeForm.reset();
        });
    };
    LeaveTypesListComponent.prototype.deleteLeaveType = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + this.translate.instant('leave_types.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.leavetypeService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('leave_types.messages.delete'), _this.translate.instant('leave_types.title'));
                    _this.getLeaveTypes();
                });
            }
        });
    };
    LeaveTypesListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] },
        { type: _core_services_leavetype_service__WEBPACK_IMPORTED_MODULE_8__["LeavetypeService"] }
    ]; };
    LeaveTypesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-types-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leave-types-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/hrm/leave-types/pages/leave-types-list/leave-types-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leave-types-list.component.scss */ "./src/app/modules/hrm/leave-types/pages/leave-types-list/leave-types-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
            _core_services_leavetype_service__WEBPACK_IMPORTED_MODULE_8__["LeavetypeService"]])
    ], LeaveTypesListComponent);
    return LeaveTypesListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~modules-hrm-leave-types-leave-types-module~modules-hrm-leaves-leaves-module.js.map