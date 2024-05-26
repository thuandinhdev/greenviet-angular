(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-role-role-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/role/components/create-role-modal/create-role-modal.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/role/components/create-role-modal/create-role-modal.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i>&nbsp;{{'roles.title' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsCreateRoleModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"createRoleForm\" (ngSubmit)=\"onSubmit()\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\">{{'roles.create.fields.role_name' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"{{'roles.create.placeholders.placeholder1' | translate}}\" class=\"form-control\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': isSubmitted && roleControl.name.errors }\" id=\"name\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"isSubmitted && roleControl.name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"roleControl.name.errors.required\">{{'roles.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"roleControl.name.errors.maxlength\">{{'roles.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"description\">{{'roles.create.fields.description' | translate}}</label>\n\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"description\" id=\"description\"></textarea>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.create' | translate}}</button>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/role/components/edit-role-modal/edit-role-modal.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/role/components/edit-role-modal/edit-role-modal.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i>&nbsp;{{'roles.title' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsEditRoleModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"editRoleForm\" (ngSubmit)=\"onSubmit()\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\">{{'roles.create.fields.role_name' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"{{'roles.create.placeholders.placeholder1' | translate}}\" class=\"form-control\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': isSubmitted && roleControl.name.errors }\" id=\"name\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"isSubmitted && roleControl.name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"roleControl.name.errors.required\">{{'roles.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"roleControl.name.errors.maxlength\">{{'roles.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"description\">{{'roles.create.fields.description' | translate}}</label>\n\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"description\" id=\"description\"></textarea>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.update' | translate}}</button>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/role/pages/role/role.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/role/pages/role/role.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card pl-2 pr-2\">\n\t\t\t\t<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t\t\t\t\t<h4 class=\"main-title mt-2\"><span>{{'roles.title' | translate}}</span></h4>\n\t\t\t\t\t<button class=\"btn btn-create mb-0\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'roles_create']\" (click)=\"openRoleCreateModal()\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-content pt-3 pb-3\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" id=\"role_table\" width=\"100%\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'roles.columns.role_name' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'roles.columns.role_slug' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'roles.columns.description' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'roles.columns.actions' | translate}}</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody *ngIf=\"roles?.length != 0\">\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let role of roles; index as i\">\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{ i + 1 }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"getCheckRole(role); else elseBlock\">\n\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-input [name]=\"'name'\" [type]=\"'text'\" [elementFor]=\"'roles.inline_edit.role_name' | translate\" [fieldValue]=\"role.name\" [permission]=\"'roles_edit'\" [maxLength]=\"50\" [isRequired]=\"'true'\" (updateValue)=\"saveRoleDetail(i, 'name', $event);\"></inline-edit-input>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock>\n\t\t\t\t\t\t\t\t\t\t\t\t{{role.name}}\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{role.slug}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"getCheckRole(role); else elseBlock1\">\n\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-textarea [name]=\"'description'\" [fieldValue]=\"role.description\" [elementFor]=\"'roles.inline_edit.description' | translate\" [isRequired]=\"'false'\" (updateValue)=\"saveRoleDetail(i, 'description', $event);\"></inline-edit-textarea>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock1>\n\t\t\t\t\t\t\t\t\t\t\t\t<p [innerHTML]=\"role.description\"></p>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"actions-dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"getCheckRole(role); else elseBlock2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openRoleEditModal(role)\" class=\"dropdown-item btn btn-edit btn-raised\"><i class=\"fa fa-pencil-square-o\" tooltip=\"{{'common.edit' | translate}}\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"roleDelete(role.id)\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\" tooltip=\"{{'common.delete' | translate}}\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock2>-</ng-template>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot *ngIf=\"roles?.length == 0\" class=\"tfoot_dt\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"5\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n");

/***/ }),

/***/ "./src/app/modules/admin/role/components/create-role-modal/create-role-modal.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin/role/components/create-role-modal/create-role-modal.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vcm9sZS9jb21wb25lbnRzL2NyZWF0ZS1yb2xlLW1vZGFsL2NyZWF0ZS1yb2xlLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/role/components/create-role-modal/create-role-modal.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin/role/components/create-role-modal/create-role-modal.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CreateRoleModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRoleModalComponent", function() { return CreateRoleModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_role_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/role.service */ "./src/app/core/services/role.service.ts");








var CreateRoleModalComponent = /** @class */ (function () {
    function CreateRoleModalComponent(translate, bsCreateRoleModalRef, formBuilder, roleService, toastr) {
        this.translate = translate;
        this.bsCreateRoleModalRef = bsCreateRoleModalRef;
        this.formBuilder = formBuilder;
        this.roleService = roleService;
        this.toastr = toastr;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isSubmitted = false;
    }
    CreateRoleModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForm();
    };
    CreateRoleModalComponent.prototype.loadForm = function () {
        this.createRoleForm = this.formBuilder.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            description: ['']
        });
    };
    Object.defineProperty(CreateRoleModalComponent.prototype, "roleControl", {
        get: function () { return this.createRoleForm.controls; },
        enumerable: true,
        configurable: true
    });
    CreateRoleModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.createRoleForm.invalid) {
            return;
        }
        this.roleService.create(this.createRoleForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('roles.messages.create'), _this.translate.instant('roles.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    CreateRoleModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateRoleModalRef.hide();
    };
    CreateRoleModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_role_service__WEBPACK_IMPORTED_MODULE_7__["RoleService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    CreateRoleModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-role-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-role-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/role/components/create-role-modal/create-role-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-role-modal.component.scss */ "./src/app/modules/admin/role/components/create-role-modal/create-role-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_role_service__WEBPACK_IMPORTED_MODULE_7__["RoleService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], CreateRoleModalComponent);
    return CreateRoleModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/role/components/edit-role-modal/edit-role-modal.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/admin/role/components/edit-role-modal/edit-role-modal.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vcm9sZS9jb21wb25lbnRzL2VkaXQtcm9sZS1tb2RhbC9lZGl0LXJvbGUtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/role/components/edit-role-modal/edit-role-modal.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/admin/role/components/edit-role-modal/edit-role-modal.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EditRoleModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoleModalComponent", function() { return EditRoleModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_role_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/role.service */ "./src/app/core/services/role.service.ts");








var EditRoleModalComponent = /** @class */ (function () {
    function EditRoleModalComponent(translate, bsEditRoleModalRef, formBuilder, roleService, toastr) {
        this.translate = translate;
        this.bsEditRoleModalRef = bsEditRoleModalRef;
        this.formBuilder = formBuilder;
        this.roleService = roleService;
        this.toastr = toastr;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isSubmitted = false;
    }
    EditRoleModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForm();
    };
    EditRoleModalComponent.prototype.loadForm = function () {
        this.editRoleForm = this.formBuilder.group({
            id: [this.role.id],
            name: [this.role.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            description: [this.role.description]
        });
    };
    Object.defineProperty(EditRoleModalComponent.prototype, "roleControl", {
        get: function () { return this.editRoleForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditRoleModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.editRoleForm.invalid) {
            return;
        }
        this.roleService.update(this.editRoleForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('roles.messages.update'), _this.translate.instant('roles.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    EditRoleModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditRoleModalRef.hide();
    };
    EditRoleModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_role_service__WEBPACK_IMPORTED_MODULE_7__["RoleService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    EditRoleModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-role-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-role-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/role/components/edit-role-modal/edit-role-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-role-modal.component.scss */ "./src/app/modules/admin/role/components/edit-role-modal/edit-role-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_role_service__WEBPACK_IMPORTED_MODULE_7__["RoleService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], EditRoleModalComponent);
    return EditRoleModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/role/pages/role/role.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/role/pages/role/role.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi9yb2xlL3BhZ2VzL3JvbGUvcm9sZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9yb2xlL3BhZ2VzL3JvbGUvcm9sZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vcm9sZS9wYWdlcy9yb2xlL3JvbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgICBkaXNwbGF5OiBub25lXG59IiwiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/admin/role/pages/role/role.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/role/pages/role/role.component.ts ***!
  \*****************************************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _core_services_role_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/role.service */ "./src/app/core/services/role.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_create_role_modal_create_role_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/create-role-modal/create-role-modal.component */ "./src/app/modules/admin/role/components/create-role-modal/create-role-modal.component.ts");
/* harmony import */ var _components_edit_role_modal_edit_role_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/edit-role-modal/edit-role-modal.component */ "./src/app/modules/admin/role/components/edit-role-modal/edit-role-modal.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__);


















var RoleComponent = /** @class */ (function () {
    function RoleComponent(translate, ngxRolesService, http, toastr, modalService, exportAsService, authenticationService, roleService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.toastr = toastr;
        this.modalService = modalService;
        this.exportAsService = exportAsService;
        this.authenticationService = authenticationService;
        this.roleService = roleService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.dtOptions = {};
        this.roles = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'role_table',
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
    RoleComponent.prototype.ngOnInit = function () {
        this.loadRoleDatatable();
    };
    RoleComponent.prototype.loadRoleDatatable = function () {
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
                    'sortable': true,
                    'target': [3]
                }, {
                    'sortable': false,
                    'width': "5%",
                    'target': [4]
                }
            ],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('roles.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('roles.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('roles.title'),
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
                    .post(_this.apiUrl + '/api/all-roles', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.roles = resp.data;
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
    RoleComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('roles.title')).subscribe(function () { });
    };
    RoleComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    RoleComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    RoleComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.roles.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    RoleComponent.prototype.getCheckRole = function (role) {
        var permission = false, rolePerm = this.ngxRolesService.getRole('admin');
        if (role.id == 1) {
            return false;
        }
        if (rolePerm.name == 'admin' || this.loginUser.is_super_admin) {
            return true;
        }
        else {
            return false;
        }
    };
    RoleComponent.prototype.openRoleCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_create_role_modal_create_role_modal_component__WEBPACK_IMPORTED_MODULE_13__["CreateRoleModalComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    RoleComponent.prototype.openRoleEditModal = function (role) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                role: role
            }
        };
        this.modalRef = this.modalService.show(_components_edit_role_modal_edit_role_modal_component__WEBPACK_IMPORTED_MODULE_14__["EditRoleModalComponent"], modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    RoleComponent.prototype.roleDelete = function (roleId) {
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
                // --
                // this.toastr.error(this.translate.instant('common.not_allowed'));
                // return;
                _this.roleService.delete(roleId)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('roles.messages.delete'), _this.translate.instant('roles.title'));
                    _this.rerender();
                });
            }
        });
    };
    RoleComponent.prototype.saveRoleDetail = function (index, name, value) {
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // return;
        var _this = this;
        this.roles[index][name] = value;
        this.roleService.update(this.roles[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('roles.messages.update'), _this.translate.instant('roles.title'));
            _this.rerender();
        });
    };
    RoleComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] },
        { type: _core_services_role_service__WEBPACK_IMPORTED_MODULE_11__["RoleService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], RoleComponent.prototype, "dtElement", void 0);
    RoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./role.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/role/pages/role/role.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./role.component.scss */ "./src/app/modules/admin/role/pages/role/role.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
            _core_services_role_service__WEBPACK_IMPORTED_MODULE_11__["RoleService"]])
    ], RoleComponent);
    return RoleComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/role/role-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/admin/role/role-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RoleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleRoutingModule", function() { return RoleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_role_role_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/role/role.component */ "./src/app/modules/admin/role/pages/role/role.component.ts");




var routes = [
    {
        path: '',
        component: _pages_role_role_component__WEBPACK_IMPORTED_MODULE_3__["RoleComponent"]
    }
];
var RoleRoutingModule = /** @class */ (function () {
    function RoleRoutingModule() {
    }
    RoleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RoleRoutingModule);
    return RoleRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/role/role.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/admin/role/role.module.ts ***!
  \***************************************************/
/*! exports provided: RoleModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleModule", function() { return RoleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_role_role_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/role/role.component */ "./src/app/modules/admin/role/pages/role/role.component.ts");
/* harmony import */ var _role_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./role-routing.module */ "./src/app/modules/admin/role/role-routing.module.ts");
/* harmony import */ var _components_create_role_modal_create_role_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/create-role-modal/create-role-modal.component */ "./src/app/modules/admin/role/components/create-role-modal/create-role-modal.component.ts");
/* harmony import */ var _components_edit_role_modal_edit_role_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/edit-role-modal/edit-role-modal.component */ "./src/app/modules/admin/role/components/edit-role-modal/edit-role-modal.component.ts");

















var RoleModule = /** @class */ (function () {
    function RoleModule() {
    }
    RoleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_role_role_component__WEBPACK_IMPORTED_MODULE_13__["RoleComponent"],
                _components_create_role_modal_create_role_modal_component__WEBPACK_IMPORTED_MODULE_15__["CreateRoleModalComponent"],
                _components_edit_role_modal_edit_role_modal_component__WEBPACK_IMPORTED_MODULE_16__["EditRoleModalComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _role_routing_module__WEBPACK_IMPORTED_MODULE_14__["RoleRoutingModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_7__["NgxEditorModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]
            ],
            entryComponents: [_components_create_role_modal_create_role_modal_component__WEBPACK_IMPORTED_MODULE_15__["CreateRoleModalComponent"], _components_edit_role_modal_edit_role_modal_component__WEBPACK_IMPORTED_MODULE_16__["EditRoleModalComponent"]],
            providers: []
        })
    ], RoleModule);
    return RoleModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=modules-admin-role-role-module.js.map