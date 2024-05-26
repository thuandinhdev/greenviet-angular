(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-sales-taxes-taxes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/taxes/components/create-tax/create-tax.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/taxes/components/create-tax/create-tax.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-percent\" aria-hidden=\"true\"></i>&nbsp;{{'taxes.title3' | translate}}</h2>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"createTaxForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"modal-body\">\n        <div class=\"form-body\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label for=\"name\">{{'taxes.create.fields.tax_name' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                        <input type=\"text\" placeholder=\"{{'taxes.create.placeholders.placeholder1' | translate }}\" class=\"form-control\" formControlName=\"tax_name\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && taxControl.tax_name.errors }\" id=\"tax_name\" />\n                        <div *ngIf=\"isFormSubmitted && taxControl.tax_name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"taxControl.tax_name.errors.required\">{{'taxes.create.error_messages.message1' | translate}}</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label for=\"tax_rate\">{{'taxes.create.fields.tax_rate' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                        <input type=\"text\" placeholder=\"{{'taxes.create.placeholders.placeholder2' | translate }}\" class=\"form-control\" formControlName=\"tax_rate\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && taxControl.tax_rate.errors }\" id=\"tax_rate\" />\n                        <div *ngIf=\"isFormSubmitted && taxControl.tax_rate.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"taxControl.tax_rate.errors.required\">{{'taxes.create.error_messages.message2' | translate}}</div>\n                            <div *ngIf=\"taxControl.tax_rate.errors.pattern\">{{'taxes.create.error_messages.message3' | translate}}</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n        <button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.create' | translate}}</button>\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/taxes/components/edit-tax/edit-tax.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/taxes/components/edit-tax/edit-tax.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-percent\" aria-hidden=\"true\"></i>&nbsp;{{'taxes.title4' | translate}}</h2>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"editTaxForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"modal-body\">\n        <div class=\"form-body\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label for=\"name\">{{'taxes.create.fields.tax_name' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                        <input type=\"text\" placeholder=\"{{'taxes.create.placeholders.placeholder1' | translate }}\" class=\"form-control\" formControlName=\"tax_name\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && taxControl.tax_name.errors }\" id=\"tax_name\" />\n                        <div *ngIf=\"isFormSubmitted && taxControl.tax_name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"taxControl.tax_name.errors.required\">{{'taxes.create.error_messages.message1' | translate}}</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label for=\"tax_rate\">{{'taxes.create.fields.tax_rate' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n                        <input type=\"text\" placeholder=\"{{'taxes.create.placeholders.placeholder2' | translate }}\" class=\"form-control\" formControlName=\"tax_rate\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && taxControl.tax_rate.errors }\" id=\"tax_rate\" />\n                        <div *ngIf=\"isFormSubmitted && taxControl.tax_rate.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"taxControl.tax_rate.errors.required\">{{'taxes.create.error_messages.message2' | translate}}</div>\n                            <div *ngIf=\"taxControl.tax_rate.errors.pattern\">{{'taxes.create.error_messages.message3' | translate}}</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n        <button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.update' | translate}}</button>\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/taxes/pages/taxes-list/taxes-list.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/taxes/pages/taxes-list/taxes-list.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card pl-2 pr-2\">\n                <div class=\"card-header pl-0 pr-0 border-bottom\">\n                    <h4 class=\"main-title mt-2\"><span>{{'taxes.title' | translate}}</span></h4>\n                    <button class=\"btn btn-create mb-0\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'taxes_create']\" (click)=\"openTaxCreateModal()\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></button>\n                </div>\n                <div class=\"card-content pt-3 pb-3\">\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                                    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" id=\"tax_table\" width=\"100%\">\n                                        <thead>\n                                            <tr>\n                                                <th>#</th>\n                                                <th>{{'taxes.columns.tax_name' | translate}}</th>\n                                                <th>{{'taxes.columns.tax_rate' | translate}} (%)</th>\n                                                <th class=\"text-center\">{{'common.actions' | translate}}</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let tax of taxes; index as i\">\n                                                <td>{{ i + 1 }}</td>\n                                                <td>{{tax.tax_name}}</td>\n                                                <td>{{tax.tax_rate}}</td>\n                                                <td class=\"actions-dropdown\">\n                                                    <div class=\"btn-group\" dropdown>\n                                                        <button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n                                                        <ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n                                                            <li role=\"menuitem\">\n                                                                <a (click)=\"openTaxEditModal(tax)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'taxes_edit']\" class=\"dropdown-item btn btn-edit btn-raised\"><i class=\"fa fa-pencil-square-o\" tooltip=\"{{'common.edit' | translate}}\"></i></a>\n                                                            </li>\n                                                            <li role=\"menuitem\">\n                                                                <a (click)=\"deleteTax(tax.id)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'taxes_delete']\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\" tooltip=\"{{'common.delete' | translate}}\"></i></a>\n                                                            </li>\n                                                        </ul>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "./src/app/modules/sales/taxes/components/create-tax/create-tax.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/sales/taxes/components/create-tax/create-tax.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2FsZXMvdGF4ZXMvY29tcG9uZW50cy9jcmVhdGUtdGF4L2NyZWF0ZS10YXguY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/sales/taxes/components/create-tax/create-tax.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/sales/taxes/components/create-tax/create-tax.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CreateTaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaxComponent", function() { return CreateTaxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/tax.service */ "./src/app/core/services/tax.service.ts");









var CreateTaxComponent = /** @class */ (function () {
    function CreateTaxComponent(translate, bsModalRef, formBuilder, toastr, modalService, datepipe, taxService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.modalService = modalService;
        this.datepipe = datepipe;
        this.taxService = taxService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
    }
    CreateTaxComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.loadForm();
    };
    CreateTaxComponent.prototype.loadForm = function () {
        this.createTaxForm = this.formBuilder.group({
            tax_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tax_rate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(?:(?:0|[1-9][0-9]*)(?:.[0-9]{1,8})?|.[0-9]{1,8})$/)]]
        });
    };
    Object.defineProperty(CreateTaxComponent.prototype, "taxControl", {
        get: function () { return this.createTaxForm.controls; },
        enumerable: true,
        configurable: true
    });
    CreateTaxComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createTaxForm.invalid) {
            return;
        }
        this.taxService.create(this.createTaxForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('taxes.messages.create'), _this.translate.instant('taxes.title1'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    CreateTaxComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    CreateTaxComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _core_services_tax_service__WEBPACK_IMPORTED_MODULE_8__["TaxService"] }
    ]; };
    CreateTaxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-tax',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-tax.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/taxes/components/create-tax/create-tax.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-tax.component.scss */ "./src/app/modules/sales/taxes/components/create-tax/create-tax.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _core_services_tax_service__WEBPACK_IMPORTED_MODULE_8__["TaxService"]])
    ], CreateTaxComponent);
    return CreateTaxComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/taxes/components/edit-tax/edit-tax.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/sales/taxes/components/edit-tax/edit-tax.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2FsZXMvdGF4ZXMvY29tcG9uZW50cy9lZGl0LXRheC9lZGl0LXRheC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/sales/taxes/components/edit-tax/edit-tax.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/sales/taxes/components/edit-tax/edit-tax.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditTaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaxComponent", function() { return EditTaxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/tax.service */ "./src/app/core/services/tax.service.ts");









var EditTaxComponent = /** @class */ (function () {
    function EditTaxComponent(translate, bsModalRef, formBuilder, toastr, modalService, datepipe, taxService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.modalService = modalService;
        this.datepipe = datepipe;
        this.taxService = taxService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
    }
    EditTaxComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.loadForm();
    };
    EditTaxComponent.prototype.loadForm = function () {
        this.editTaxForm = this.formBuilder.group({
            id: [this.tax.id],
            tax_name: [this.tax.tax_name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tax_rate: [this.tax.tax_rate, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(?:(?:0|[1-9][0-9]*)(?:.[0-9]{1,8})?|.[0-9]{1,8})$/)]]
        });
    };
    Object.defineProperty(EditTaxComponent.prototype, "taxControl", {
        get: function () { return this.editTaxForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditTaxComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editTaxForm.invalid) {
            return;
        }
        this.taxService.update(this.editTaxForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('taxes.messages.update'), _this.translate.instant('taxes.title1'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    EditTaxComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    EditTaxComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _core_services_tax_service__WEBPACK_IMPORTED_MODULE_8__["TaxService"] }
    ]; };
    EditTaxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-tax',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-tax.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/taxes/components/edit-tax/edit-tax.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-tax.component.scss */ "./src/app/modules/sales/taxes/components/edit-tax/edit-tax.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _core_services_tax_service__WEBPACK_IMPORTED_MODULE_8__["TaxService"]])
    ], EditTaxComponent);
    return EditTaxComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/taxes/pages/taxes-list/taxes-list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/sales/taxes/pages/taxes-list/taxes-list.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2FsZXMvdGF4ZXMvcGFnZXMvdGF4ZXMtbGlzdC90YXhlcy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/sales/taxes/pages/taxes-list/taxes-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/sales/taxes/pages/taxes-list/taxes-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: TaxesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxesListComponent", function() { return TaxesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/tax.service */ "./src/app/core/services/tax.service.ts");
/* harmony import */ var _components_create_tax_create_tax_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/create-tax/create-tax.component */ "./src/app/modules/sales/taxes/components/create-tax/create-tax.component.ts");
/* harmony import */ var _components_edit_tax_edit_tax_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/edit-tax/edit-tax.component */ "./src/app/modules/sales/taxes/components/edit-tax/edit-tax.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_16__);

















var TaxesListComponent = /** @class */ (function () {
    function TaxesListComponent(translate, modalService, http, exportAsService, toastr, authenticationService, taxService) {
        var _this = this;
        this.translate = translate;
        this.modalService = modalService;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.taxService = taxService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.dtOptions = {};
        this.taxes = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'tax_table',
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
    TaxesListComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    TaxesListComponent.prototype.loadDatatable = function () {
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: false,
            processing: false,
            dom: '<"html5buttons"B>ltfrtip',
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('taxes.title'),
                    className: "btn btn-datatable-gredient",
                }, {
                    extend: 'excel',
                    title: this.translate.instant('taxes.title'),
                    className: "btn btn-datatable-gredient",
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('taxes.title'),
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
                { width: "5%", targets: [0] },
                { width: "5%", targets: [3], sortable: false }
            ]
        };
        this.getTaxes();
    };
    TaxesListComponent.prototype.getTaxes = function (isLoad) {
        var _this = this;
        if (isLoad === void 0) { isLoad = false; }
        this.taxService.getAll().subscribe(function (data) {
            _this.taxes = data;
            if (isLoad) {
                _this.rerender();
            }
            else {
                _this.dtTrigger.next();
            }
        });
    };
    TaxesListComponent.prototype.openTaxCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_create_tax_create_tax_component__WEBPACK_IMPORTED_MODULE_12__["CreateTaxComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTaxes(true);
        });
    };
    TaxesListComponent.prototype.openTaxEditModal = function (tax) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                tax: tax
            }
        };
        this.modalRef = this.modalService.show(_components_edit_tax_edit_tax_component__WEBPACK_IMPORTED_MODULE_13__["EditTaxComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTaxes(true);
        });
    };
    TaxesListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('taxes.title')).subscribe(function () { });
    };
    TaxesListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    TaxesListComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
            });
        });
    };
    TaxesListComponent.prototype.deleteTax = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('taxes.title2'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.taxService.delete(id).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('taxes.messages.delete'), _this.translate.instant('taxes.title1'));
                    _this.getTaxes(true);
                });
            }
        });
    };
    TaxesListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] },
        { type: _core_services_tax_service__WEBPACK_IMPORTED_MODULE_11__["TaxService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"])
    ], TaxesListComponent.prototype, "dtElement", void 0);
    TaxesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-taxes-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./taxes-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/taxes/pages/taxes-list/taxes-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./taxes-list.component.scss */ "./src/app/modules/sales/taxes/pages/taxes-list/taxes-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"],
            _core_services_tax_service__WEBPACK_IMPORTED_MODULE_11__["TaxService"]])
    ], TaxesListComponent);
    return TaxesListComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/taxes/taxes-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/sales/taxes/taxes-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TaxesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxesRoutingModule", function() { return TaxesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_taxes_list_taxes_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/taxes-list/taxes-list.component */ "./src/app/modules/sales/taxes/pages/taxes-list/taxes-list.component.ts");





var routes = [{
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_taxes_list_taxes_list_component__WEBPACK_IMPORTED_MODULE_4__["TaxesListComponent"]
            }
        ]
    }
];
var TaxesRoutingModule = /** @class */ (function () {
    function TaxesRoutingModule() {
    }
    TaxesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TaxesRoutingModule);
    return TaxesRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/sales/taxes/taxes.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/sales/taxes/taxes.module.ts ***!
  \*****************************************************/
/*! exports provided: TaxesModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxesModule", function() { return TaxesModule; });
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
/* harmony import */ var _taxes_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./taxes-routing.module */ "./src/app/modules/sales/taxes/taxes-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_taxes_list_taxes_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/taxes-list/taxes-list.component */ "./src/app/modules/sales/taxes/pages/taxes-list/taxes-list.component.ts");
/* harmony import */ var _components_create_tax_create_tax_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/create-tax/create-tax.component */ "./src/app/modules/sales/taxes/components/create-tax/create-tax.component.ts");
/* harmony import */ var _components_edit_tax_edit_tax_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/edit-tax/edit-tax.component */ "./src/app/modules/sales/taxes/components/edit-tax/edit-tax.component.ts");


















var TaxesModule = /** @class */ (function () {
    function TaxesModule() {
    }
    TaxesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_taxes_list_taxes_list_component__WEBPACK_IMPORTED_MODULE_15__["TaxesListComponent"],
                _components_create_tax_create_tax_component__WEBPACK_IMPORTED_MODULE_16__["CreateTaxComponent"],
                _components_edit_tax_edit_tax_component__WEBPACK_IMPORTED_MODULE_17__["EditTaxComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _taxes_routing_module__WEBPACK_IMPORTED_MODULE_13__["TaxesRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_8__["NgxEditorModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_11__["NgxPermissionsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]
            ],
            entryComponents: [
                _components_create_tax_create_tax_component__WEBPACK_IMPORTED_MODULE_16__["CreateTaxComponent"],
                _components_edit_tax_edit_tax_component__WEBPACK_IMPORTED_MODULE_17__["EditTaxComponent"]
            ]
        })
    ], TaxesModule);
    return TaxesModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=modules-sales-taxes-taxes-module.js.map