(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-sales-invoices-invoices-module"],{

/***/ "./node_modules/ngx-paypal/fesm5/ngx-paypal.js":
/*!*****************************************************!*\
  !*** ./node_modules/ngx-paypal/fesm5/ngx-paypal.js ***!
  \*****************************************************/
/*! exports provided: NgxPayPalModule, NgxPaypalComponent, PayPalScriptService, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPayPalModule", function() { return NgxPayPalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaypalComponent", function() { return NgxPaypalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPalScriptService", function() { return PayPalScriptService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ScriptService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScriptService = /** @class */ (function () {
    function ScriptService(zone) {
        this.zone = zone;
    }
    /**
     * @param {?} url
     * @param {?} globalVar
     * @param {?} onReady
     * @return {?}
     */
    ScriptService.prototype.registerScript = /**
     * @param {?} url
     * @param {?} globalVar
     * @param {?} onReady
     * @return {?}
     */
    function (url, globalVar, onReady) {
        var _this = this;
        /** @type {?} */
        var existingGlobalVar = ((/** @type {?} */ (window)))[globalVar];
        if (existingGlobalVar) {
            // global variable is present = script was already loaded
            this.zone.run((/**
             * @return {?}
             */
            function () {
                onReady(existingGlobalVar);
            }));
            return;
        }
        // prepare script elem
        /** @type {?} */
        var scriptElem = document.createElement('script');
        scriptElem.id = this.getElemId(globalVar);
        scriptElem.innerHTML = '';
        scriptElem.onload = (/**
         * @return {?}
         */
        function () {
            _this.zone.run((/**
             * @return {?}
             */
            function () {
                onReady(((/** @type {?} */ (window)))[globalVar]);
            }));
        });
        scriptElem.src = url;
        scriptElem.async = true;
        scriptElem.defer = true;
        // add script to header
        document.getElementsByTagName('head')[0].appendChild(scriptElem);
    };
    /**
     * @param {?} globalVar
     * @return {?}
     */
    ScriptService.prototype.cleanup = /**
     * @param {?} globalVar
     * @return {?}
     */
    function (globalVar) {
        // remove script from DOM
        /** @type {?} */
        var scriptElem = document.getElementById(this.getElemId(globalVar));
        if (scriptElem) {
            scriptElem.remove();
        }
    };
    /**
     * @private
     * @param {?} globalVar
     * @return {?}
     */
    ScriptService.prototype.getElemId = /**
     * @private
     * @param {?} globalVar
     * @return {?}
     */
    function (globalVar) {
        return "ngx-paypal-script-elem-" + globalVar;
    };
    ScriptService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    /** @nocollapse */
    ScriptService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    return ScriptService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PayPalScriptService = /** @class */ (function () {
    function PayPalScriptService(scriptService) {
        this.scriptService = scriptService;
        this.paypalWindowName = 'paypal';
    }
    /**
     * @param {?} config
     * @param {?} onReady
     * @return {?}
     */
    PayPalScriptService.prototype.registerPayPalScript = /**
     * @param {?} config
     * @param {?} onReady
     * @return {?}
     */
    function (config, onReady) {
        this.scriptService.registerScript(this.getUrlForConfig(config), this.paypalWindowName, onReady);
    };
    /**
     * @return {?}
     */
    PayPalScriptService.prototype.destroyPayPalScript = /**
     * @return {?}
     */
    function () {
        this.scriptService.cleanup(this.paypalWindowName);
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    PayPalScriptService.prototype.getUrlForConfig = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var params = [
            {
                name: 'client-id',
                value: config.clientId
            }
        ];
        if (config.currency) {
            params.push({
                name: 'currency',
                value: config.currency
            });
        }
        if (config.commit) {
            params.push({
                name: 'commit',
                value: config.commit
            });
        }
        if (config.extraParams) {
            params.push.apply(params, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spread"])(config.extraParams));
        }
        return "https://www.paypal.com/sdk/js" + this.getQueryString(params);
    };
    /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    PayPalScriptService.prototype.getQueryString = /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    function (queryParams) {
        /** @type {?} */
        var queryString = '';
        for (var i = 0; i < queryParams.length; i++) {
            /** @type {?} */
            var queryParam = queryParams[i];
            if (i === 0) {
                queryString += '?';
            }
            else {
                queryString += '&';
            }
            queryString += queryParam.name + "=" + queryParam.value;
        }
        return queryString;
    };
    PayPalScriptService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    /** @nocollapse */
    PayPalScriptService.ctorParameters = function () { return [
        { type: ScriptService }
    ]; };
    return PayPalScriptService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPaypalComponent = /** @class */ (function () {
    function NgxPaypalComponent(paypalScriptService, cdr, ngZone) {
        this.paypalScriptService = paypalScriptService;
        this.cdr = cdr;
        this.ngZone = ngZone;
        /**
         * If enabled, paypal SDK script will be loaded. Useful if you want to have multiple PayPal components on the same page
         * sharing base configuration. In such a case only a single component may register script.
         */
        this.registerScript = true;
        /**
         * Emitted when paypal script is loaded
         */
        this.scriptLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Flag that indicates if paypal should be initialized (required for handling script load events and availability of DOM element)
         */
        this.initializePayPal = true;
    }
    Object.defineProperty(NgxPaypalComponent.prototype, "payPalButtonContainer", {
        set: /**
         * @param {?} content
         * @return {?}
         */
        function (content) {
            this.payPalButtonContainerElem = content;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxPaypalComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (!this.payPalButtonContainerId) {
            this.payPalButtonContainerId = this.generateElementId();
        }
        // first time config setup
        /** @type {?} */
        var config = this.config;
        if (changes.config.isFirstChange()) {
            if (config && this.registerScript) {
                this.initPayPalScript(config, (/**
                 * @param {?} payPal
                 * @return {?}
                 */
                function (payPal) {
                    // store reference to paypal global script
                    _this.payPal = payPal;
                    _this.doPayPalCheck();
                }));
            }
        }
        // changes to config
        if (!changes.config.isFirstChange()) {
            this.reinitialize(config);
        }
    };
    /**
     * @return {?}
     */
    NgxPaypalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.paypalScriptService.destroyPayPalScript();
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    /**
     * @return {?}
     */
    NgxPaypalComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.doPayPalCheck();
    };
    /**
     * @param {?} payPal
     * @return {?}
     */
    NgxPaypalComponent.prototype.customInit = /**
     * @param {?} payPal
     * @return {?}
     */
    function (payPal) {
        this.payPal = payPal;
        this.doPayPalCheck();
    };
    /**
     * @param {?} config
     * @return {?}
     */
    NgxPaypalComponent.prototype.reinitialize = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        this.config = config;
        this.payPal = undefined;
        this.paypalScriptService.destroyPayPalScript();
        this.payPalButtonContainerId = this.generateElementId();
        this.initializePayPal = true;
        if (this.payPalButtonContainerElem) {
            while (this.payPalButtonContainerElem.nativeElement.firstChild) {
                this.payPalButtonContainerElem.nativeElement.removeChild(this.payPalButtonContainerElem.nativeElement.firstChild);
            }
        }
        this.cdr.detectChanges();
        if (this.config) {
            if (!this.payPal) {
                this.initPayPalScript(this.config, (/**
                 * @param {?} payPal
                 * @return {?}
                 */
                function (payPal) {
                    // store reference to paypal global script
                    _this.payPal = payPal;
                    _this.doPayPalCheck();
                }));
            }
            else {
                this.doPayPalCheck();
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxPaypalComponent.prototype.doPayPalCheck = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.initializePayPal && this.config && this.payPal && this.payPalButtonContainerElem) {
            // make sure that id is also set
            if (this.payPalButtonContainerElem.nativeElement.id) {
                this.initializePayPal = false;
                this.initPayPal(this.config, this.payPal);
            }
        }
    };
    /**
     * @private
     * @param {?} config
     * @param {?} initPayPal
     * @return {?}
     */
    NgxPaypalComponent.prototype.initPayPalScript = /**
     * @private
     * @param {?} config
     * @param {?} initPayPal
     * @return {?}
     */
    function (config, initPayPal) {
        var _this = this;
        this.paypalScriptService.registerPayPalScript({
            clientId: config.clientId,
            commit: config.advanced && config.advanced.commit ? config.advanced.commit : undefined,
            currency: config.currency,
            extraParams: config.advanced && config.advanced.extraQueryParams ? config.advanced.extraQueryParams : []
        }, (/**
         * @param {?} paypal
         * @return {?}
         */
        function (paypal) {
            _this.scriptLoaded.next(paypal);
            initPayPal(paypal);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NgxPaypalComponent.prototype.generateElementId = /**
     * @private
     * @return {?}
     */
    function () {
        return "ngx-captcha-id-" + new Date().valueOf();
    };
    /**
     * @private
     * @param {?} config
     * @param {?} paypal
     * @return {?}
     */
    NgxPaypalComponent.prototype.initPayPal = /**
     * @private
     * @param {?} config
     * @param {?} paypal
     * @return {?}
     */
    function (config, paypal) {
        var _this = this;
        // Running outside angular zone prevents infinite ngDoCheck lifecycle calls
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            // https://developer.paypal.com/docs/checkout/integrate/#2-add-the-paypal-script-to-your-web-page
            paypal.Buttons({
                style: config.style,
                createOrder: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                function (data, actions) {
                    return _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        if (config.createOrderOnClient && config.createOrderOnServer) {
                            throw Error("Both 'createOrderOnClient' and 'createOrderOnServer' are defined.\n                        Please choose one or the other.");
                        }
                        if (!config.createOrderOnClient && !config.createOrderOnServer) {
                            throw Error("Neither 'createOrderOnClient' or 'createOrderOnServer' are defined.\n                        Please define one of these to create order.");
                        }
                        if (config.createOrderOnClient) {
                            return actions.order.create(config.createOrderOnClient(data));
                        }
                        if (config.createOrderOnServer) {
                            return config.createOrderOnServer(data);
                        }
                        throw Error("Invalid state for 'createOrder'.");
                    }));
                }),
                onApprove: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                function (data, actions) {
                    return _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        if (config.onApprove) {
                            config.onApprove(data, actions);
                        }
                        // capture on server
                        if (config.authorizeOnServer) {
                            return config.authorizeOnServer(data, actions);
                        }
                        // capture on client
                        /** @type {?} */
                        var onClientAuthorization = config.onClientAuthorization;
                        if (onClientAuthorization) {
                            actions.order.capture().then((/**
                             * @param {?} details
                             * @return {?}
                             */
                            function (details) {
                                onClientAuthorization(details);
                            }));
                            return;
                        }
                    }));
                }),
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        if (config.onError) {
                            config.onError(error);
                        }
                    }));
                }),
                onCancel: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                function (data, actions) {
                    _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        if (config.onCancel) {
                            config.onCancel(data, actions);
                        }
                    }));
                }),
                onShippingChange: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                function (data, actions) {
                    return _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        if (config.onShippingChange) {
                            return config.onShippingChange(data, actions);
                        }
                    }));
                }),
                onClick: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                function (data, actions) {
                    _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        if (config.onClick) {
                            config.onClick(data, actions);
                        }
                    }));
                }),
                onInit: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                function (data, actions) {
                    _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        if (config.onInit) {
                            config.onInit(data, actions);
                        }
                    }));
                })
            }).render("#" + _this.payPalButtonContainerId);
        }));
    };
    NgxPaypalComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    selector: 'ngx-paypal',
                    template: "\n    <div #payPalButtonContainer [id]=\"payPalButtonContainerId\"></div>\n    "
                }] }
    ];
    /** @nocollapse */
    NgxPaypalComponent.ctorParameters = function () { return [
        { type: PayPalScriptService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    NgxPaypalComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        registerScript: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        scriptLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        payPalButtonContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['payPalButtonContainer', { static: false },] }]
    };
    return NgxPaypalComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPayPalModule = /** @class */ (function () {
    function NgxPayPalModule() {
    }
    NgxPayPalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                    ],
                    declarations: [
                        NgxPaypalComponent,
                    ],
                    exports: [
                        NgxPaypalComponent,
                    ],
                    providers: [
                        ScriptService,
                        PayPalScriptService
                    ]
                },] }
    ];
    return NgxPayPalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-paypal.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/components/paypal-payment/paypal-payment.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/components/paypal-payment/paypal-payment.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\">\n\t<input type=\"number\" name=\"amount\" [(ngModel)]=\"amount\" class=\"form-control\">\n</div>\n<ngx-paypal [config]=\"payPalConfig\"></ngx-paypal>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/components/stripe-payment/stripe-payment.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/components/stripe-payment/stripe-payment.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\">\n\t<input type=\"number\" name=\"amount\" [(ngModel)]=\"amount\" class=\"form-control\">\n</div>\n<button (click)=\"pay(amount)\" type=\"button\" class=\"btn btn-secondary btn-block\">{{'settings.stripe_settings.title1' | translate}} {{loginUser.currency.symbol}}{{amount}}</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-create/invoice-create.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-create/invoice-create.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\">\n\t<form [formGroup]=\"createInvoiceForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isFormLoaded\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t<h4 class=\"card-title\">{{'invoices.title2' | translate}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-user\" aria-hidden=\"true\"></i>{{'invoices.headings.head1' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"project_id\">{{'invoices.create.fields.project' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[clearable]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"projects\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"projectChange($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"project_name\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"project_id\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"project_id\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'invoices.create.placeholders.placeholder13' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && invoiceControl.client_id.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"client_id\">{{'invoices.create.fields.customer' | translate}}&nbsp;<span class=\"text-danger\">*</span> </label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[clearable]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"clients\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"client_id\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"client_id\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'invoices.create.placeholders.placeholder1' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && invoiceControl.client_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"invoiceControl.client_id.errors.required\">{{'invoices.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-calendar\"></i>{{'invoices.headings.head2' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && invoiceControl.invoice_date.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"invoice_date\">{{'invoices.create.fields.invoice_date' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t#dp1=\"bsDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tbsDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t[bsConfig]=\"datepickerConfig\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"invoice_date\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"invoice_date\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'invoices.create.placeholders.placeholder2' | translate}}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && invoiceControl.invoice_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"invoiceControl.invoice_date.errors.required\">{{'invoices.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && invoiceControl.due_date.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"end-date\">{{'invoices.create.fields.due_date' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t#dp2=\"bsDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tbsDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t[bsConfig]=\"datepickerConfig\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"due_date\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"due_date\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'invoices.create.placeholders.placeholder3' | translate}}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && invoiceControl.due_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"invoiceControl.due_date.errors.required\">{{'invoices.create.error_messages.message3' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">&nbsp;</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-box\"></i>{{'invoices.headings.head3' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"reference\">{{'invoices.create.fields.reference' | translate}} #</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"reference\" id=\"reference\" placeholder=\"{{'invoices.create.placeholders.placeholder4' | translate}}\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"type\">{{'invoices.create.fields.discount_type' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[clearable]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"('invoices.discount_type' | translate)\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"discount_type\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"discount_type\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'invoices.create.placeholders.placeholder5' | translate}}\"\n\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"changeDiscountType($event)\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"recurrence\">{{'invoices.create.fields.recurrence' | translate }}</label><br>\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check checkbox-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" formControlName=\"recurrence\" id=\"recurrence\" (change)=\"changeRecurrence($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" *ngIf=\"createInvoiceForm.get('recurrence').value\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"recurrence_occurrences\">{{'invoices.create.fields.recurrence_occurrences' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"ml-2\"><i class=\"fa fa-lightbulb-o fa-1\" placement=\"top\" tooltip=\"{{'invoices.headings.head5' | translate}}\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" formControlName=\"recurrence_occurrences\" id=\"recurrence_occurrences\" placeholder=\"{{'invoices.create.placeholders.placeholder14' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && invoiceControl.recurrence_occurrences.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && invoiceControl.recurrence_occurrences.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"invoiceControl.recurrence_occurrences.errors.required\">{{'invoices.create.error_messages.message8' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" *ngIf=\"createInvoiceForm.get('recurrence').value\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>{{'invoices.create.fields.recurrence_pattern' | translate }}<span class=\"text-danger\">&nbsp;*</span></label><br>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"daily\" id=\"checkbox_daily\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_daily\">&nbsp;{{'invoices.create.fields.daily' | translate }}&nbsp;</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"weekly\" id=\"checkbox_weekly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_weekly\">&nbsp;{{'invoices.create.fields.weekly' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"monthly\" id=\"checkbox_monthly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_monthly\">&nbsp;{{'invoices.create.fields.monthly' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"quarterly\" id=\"checkbox_quarterly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_quarterly\">&nbsp;{{'invoices.create.fields.quarterly' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"semi_annually\" id=\"checkbox_semi_annually\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_semi_annually\">&nbsp;{{'invoices.create.fields.semi_annually' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"annually\" id=\"checkbox_annually\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_annually\">&nbsp;{{'invoices.create.fields.annually' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && invoiceControl.recurrence_pattern.errors\" class=\"invalid-feedback d-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"invoiceControl.recurrence_pattern.errors.required\">{{'invoices.create.error_messages.message9' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-form\" >\n\t\t\t\t\t\t<h4 class=\"card-title\">{{'invoices.headings.head4' | translate}}</h4>\n\t\t\t\t\t\t<div class=\"card-button estimate-form\">\n\t\t\t\t\t\t\t<ng-select [items]=\"items\"\n\t\t\t\t\t\t\t\t[clearable]=\"false\"\n\t\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t(change)=\"changeItem($event)\"\n\t\t\t\t\t\t\t\tformControlName=\"selectedItem\"\n\t\t\t\t\t\t\t\tplaceholder=\"{{'invoices.create.placeholders.placeholder7' | translate}}\">\n\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n\t\t\t\t\t\t\t\t\t<div class=\"card mt-1 mb-1\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body p-2\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\" [ngOptionHighlight]=\"search\">({{loginUser.currency.symbol}}{{item.price}}) {{item.name}}</h5>\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-text\">{{item.description}}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t\t<table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.create.fields.item_name' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.create.fields.item_description' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th class=\"width-100\">{{'invoices.create.fields.quantity' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th class=\"width-150\">{{'invoices.create.fields.unit_price' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th class=\"width-250\">{{'invoices.create.fields.item_tax' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.create.fields.total_item_amount' | translate}} ({{loginUser.currency.symbol}})</th>\n\t\t\t\t\t\t\t\t\t\t<th class=\"text-right\">{{'common.actions' | translate}}</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr formArrayName=\"item\">\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"item_name\" id=\"item_name\" placeholder=\"{{'invoices.create.placeholders.placeholder8' | translate}}\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"item_description\" id=\"item_description\" placeholder=\"{{'invoices.create.placeholders.placeholder9' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t</textarea>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" formControlName=\"quantity\" id=\"quantity\" min=\"1\" placeholder=\"{{'invoices.create.placeholders.placeholder10' | translate}}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"inp\" formControlName=\"item_unit\" placeholder=\"{{'invoices.create.fields.unit' | translate}}\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" formControlName=\"unit_price\" id=\"unit_price\" min=\"0\" placeholder=\"{{'invoices.create.placeholders.placeholder11' | translate}}\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"taxes\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"tax_name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"taxes\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'invoices.create.placeholders.placeholder12' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.tax_name}}({{item.tax_rate}}%)\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>&nbsp;</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><button (click)=\"addItem($event)\" class=\"btn btn-secondary\" placement=\"left\" tooltip=\"{{'common.add' | translate}}\"><i class=\"fa fa-plus\"></i></button></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of itemsArray; index as i\">\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<inline-edit-input [name]=\"'item_name'\" [type]=\"'text'\" [fieldValue]=\"item.item_name\" [elementFor]=\"'invoices.inline_edit.item_name' | translate\" [isRequired]=\"'true'\" (updateValue)=\"saveItemDetail(i, 'item_name', $event);\"></inline-edit-input>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<inline-edit-textarea [name]=\"'item_description'\" [fieldValue]=\"item.item_description\" [elementFor]=\"'invoices.inline_edit.item_description' | translate\" [isRequired]=\"'false'\" (updateValue)=\"saveItemDetail(i, 'item_description', $event);\"></inline-edit-textarea>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<inline-edit-input [name]=\"'quantity'\" [type]=\"'number'\" [elementFor]=\"'invoices.inline_edit.quantity' | translate\" [fieldValue]=\"item.quantity\" [isRequired]=\"'true'\" (updateValue)=\"saveItemDetail(i, 'quantity', $event);\"></inline-edit-input>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<inline-edit-input [name]=\"'unit_price'\" [type]=\"'number'\" [elementFor]=\"'invoices.inline_edit.unit_price' | translate\" [fieldValue]=\"item.unit_price\" [isRequired]=\"'true'\" (updateValue)=\"saveItemDetail(i, 'unit_price', $event);\"></inline-edit-input>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<inline-edit-select-items [name]=\"'taxes'\" [txtField]=\"'Taxes'\" [elementFor]=\"'invoices.inline_edit.item_tax' | translate\" [selectedValue]=\"item.taxes\" [isRequired]=\"'true'\" [options]=\"taxes\" (updateValue)=\"saveItemDetail(i, 'taxes', $event);\"></inline-edit-select-items>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.quantity * item.unit_price}}</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"actions-dropdown text-right\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"deleteItem(i)\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\" tooltip=\"{{'common.delete' | translate}}\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tbody class=\"mt-4\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><strong>{{'invoices.create.fields.sub_total' | translate}}:</strong></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{loginUser.currency.symbol}}{{ invoices.sub_total | number : '1.2-2' }}</td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let tax of itemTaxes | keyvalue\">\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"tax\">\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><strong>{{taxesNameValues[tax.key].tax_name}}({{taxesNameValues[tax.key].tax_rate}})</strong></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{loginUser.currency.symbol}}{{tax.value | number : '1.2-2'}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><strong>{{'invoices.create.fields.discount' | translate}}</strong></td>\n\t\t\t\t\t\t\t\t\t\t<td><input type=\"number\" name=\"discount\" class=\"form-control\" formControlName=\"discount\" placeholder=\"00.00\" (change)=\"changeDiscountAdjustment($event, 'discount')\"></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"danger text-center\">(-) {{loginUser.currency.symbol}}{{total_discount | number : '1.2-2'}}</td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><strong>{{'invoices.create.fields.adjustment' | translate}}</strong></td>\n\t\t\t\t\t\t\t\t\t\t<td><input type=\"number\" name=\"adjustment\" min=\"0\" class=\"form-control\" formControlName=\"adjustment\" placeholder=\"00.00\" (change)=\"changeDiscountAdjustment($event, 'adjustment')\"></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{loginUser.currency.symbol}}{{ invoices.adjustment | number : '1.2-2'}}</td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><strong>{{'invoices.create.fields.total_amount' | translate}}:</strong></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{loginUser.currency.symbol}}{{ invoices.total | number : '1.2-2' }}</td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 text-right pt-3 pb-3\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['/invoices']\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate }}</a>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.create' | translate }}</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-edit/invoice-edit.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-edit/invoice-edit.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\">\n\t<form [formGroup]=\"editInvoiceForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isFormLoaded\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t<h4 class=\"card-title\">{{'invoices.title3' | translate}} #{{invoice.invoice_number}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-user\" aria-hidden=\"true\"></i>{{'invoices.headings.head1' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"project_id\">{{'invoices.create.fields.project' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[clearable]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"projects\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"projectChange($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"project_name\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"project_id\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"project_id\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'invoices.create.placeholders.placeholder13' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && invoiceControl.client_id.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"client_id\">{{'invoices.create.fields.customer' | translate}}&nbsp;<span class=\"text-danger\">*</span> </label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[clearable]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"clients\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"client_id\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"client_id\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'invoices.create.placeholders.placeholder1' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && invoiceControl.client_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"invoiceControl.client_id.errors.required\">{{'invoices.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-calendar\"></i>{{'invoices.headings.head2' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && invoiceControl.invoice_date.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"invoice_date\">{{'invoices.create.fields.invoice_date' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t#dp1=\"bsDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tbsDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t[bsConfig]=\"datepickerConfig\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"invoice_date\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"invoice_date\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'invoices.create.placeholders.placeholder2' | translate}}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && invoiceControl.invoice_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"invoiceControl.invoice_date.errors.required\">{{'invoices.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && invoiceControl.due_date.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"end-date\">{{'invoices.create.fields.due_date' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t#dp2=\"bsDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tbsDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t[bsConfig]=\"datepickerConfig\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"due_date\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"due_date\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'invoices.create.placeholders.placeholder3' | translate}}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && invoiceControl.due_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"invoiceControl.due_date.errors.required\">{{'invoices.create.error_messages.message3' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">&nbsp;</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-box\"></i>{{'invoices.headings.head3' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"invoice_number\">{{'invoices.create.fields.invoice_number' | translate}} #</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" aria-describedby=\"basic-addon1\" class=\"form-control\" formControlName=\"invoice_number\" id=\"invoice_number\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"reference\">{{'invoices.create.fields.reference' | translate}} #</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"reference\" id=\"reference\" placeholder=\"{{'invoices.create.placeholders.placeholder4' | translate}}\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"type\">{{'invoices.create.fields.discount_type' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[clearable]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"('invoices.discount_type' | translate)\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"discount_type\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"discount_type\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'invoices.create.placeholders.placeholder5' | translate}}\"\n\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"changeDiscountType($event)\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"recurrence\">{{'invoices.create.fields.recurrence' | translate }}</label><br>\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check checkbox-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" formControlName=\"recurrence\" id=\"recurrence\" (change)=\"changeRecurrence($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" *ngIf=\"editInvoiceForm.get('recurrence').value\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"recurrence_occurrences\">{{'invoices.create.fields.recurrence_occurrences' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"ml-2\"><i class=\"fa fa-lightbulb-o fa-1\" placement=\"top\" tooltip=\"{{'invoices.headings.head5' | translate}}\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" formControlName=\"recurrence_occurrences\" id=\"recurrence_occurrences\" placeholder=\"{{'invoices.create.placeholders.placeholder14' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && invoiceControl.recurrence_occurrences.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && invoiceControl.recurrence_occurrences.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"invoiceControl.recurrence_occurrences.errors.required\">{{'invoices.create.error_messages.message8' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" *ngIf=\"editInvoiceForm.get('recurrence').value\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>{{'invoices.create.fields.recurrence_pattern' | translate }}<span class=\"text-danger\">&nbsp;*</span></label><br>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"daily\" id=\"checkbox_daily\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_daily\">&nbsp;{{'invoices.create.fields.daily' | translate }}&nbsp;</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"weekly\" id=\"checkbox_weekly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_weekly\">&nbsp;{{'invoices.create.fields.weekly' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"monthly\" id=\"checkbox_monthly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_monthly\">&nbsp;{{'invoices.create.fields.monthly' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"quarterly\" id=\"checkbox_quarterly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_quarterly\">&nbsp;{{'invoices.create.fields.quarterly' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"semi_annually\" id=\"checkbox_semi_annually\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_semi_annually\">&nbsp;{{'invoices.create.fields.semi_annually' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" formControlName=\"recurrence_pattern\" value=\"annually\" id=\"checkbox_annually\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox_annually\">&nbsp;{{'invoices.create.fields.annually' | translate }}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && invoiceControl.recurrence_pattern.errors\" class=\"invalid-feedback d-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"invoiceControl.recurrence_pattern.errors.required\">{{'invoices.create.error_messages.message9' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-form\">\n\t\t\t\t\t\t<h4 class=\"card-title\">{{'invoices.headings.head4' | translate}}</h4>\n\t\t\t\t\t\t<div class=\"card-button estimate-form\">\n\t\t\t\t\t\t\t<ng-select [items]=\"items\"\n\t\t\t\t\t\t\t\t[clearable]=\"false\"\n\t\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t(change)=\"changeItem($event)\"\n\t\t\t\t\t\t\t\tformControlName=\"selectedItem\"\n\t\t\t\t\t\t\t\tplaceholder=\"{{'invoices.create.placeholders.placeholder7' | translate}}\">\n\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n\t\t\t\t\t\t\t\t\t<div class=\"card mt-1 mb-1\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body p-2\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\" [ngOptionHighlight]=\"search\">({{loginUser.currency.symbol}}{{item.price}}) {{item.name}}</h5>\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-text\">{{item.description}}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t\t<table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.create.fields.item_name' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.create.fields.item_description' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th class=\"width-100\">{{'invoices.create.fields.quantity' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th class=\"width-150\">{{'invoices.create.fields.unit_price' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th class=\"width-250\">{{'invoices.create.fields.item_tax' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.create.fields.total_item_amount' | translate}} ({{loginUser.currency.symbol}})</th>\n\t\t\t\t\t\t\t\t\t\t<th class=\"text-right\">{{'common.actions' | translate}}</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr formArrayName=\"item\">\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"item_name\" id=\"item_name\" placeholder=\"{{'invoices.create.placeholders.placeholder8' | translate}}\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"item_description\" id=\"item_description\" placeholder=\"{{'invoices.create.placeholders.placeholder9' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t</textarea>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" formControlName=\"quantity\" id=\"quantity\" min=\"1\" placeholder=\"{{'invoices.create.placeholders.placeholder10' | translate}}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"inp\" formControlName=\"item_unit\" placeholder=\"{{'invoices.create.fields.unit' | translate}}\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" formControlName=\"unit_price\" id=\"unit_price\" min=\"0\" placeholder=\"{{'invoices.create.placeholders.placeholder11' | translate}}\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"taxes\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"tax_name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"taxes\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'invoices.create.placeholders.placeholder12' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.tax_name}}({{item.tax_rate}}%)\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>&nbsp;</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"addItem($event)\" class=\"btn btn-secondary\" placement=\"left\" tooltip=\"{{'common.add' | translate}}\"><i class=\"fa fa-plus\"></i></button>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of itemsArray; index as i\">\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<inline-edit-input [name]=\"'item_name'\" [type]=\"'text'\" [elementFor]=\"'invoices.inline_edit.item_name' | translate\" [fieldValue]=\"item.item_name\" [isRequired]=\"'true'\" (updateValue)=\"saveItemDetail(i, 'item_name', $event);\"></inline-edit-input>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<inline-edit-textarea [name]=\"'item_description'\" [fieldValue]=\"item.item_description\" [elementFor]=\"'invoices.inline_edit.item_description' | translate\" [isRequired]=\"'false'\" (updateValue)=\"saveItemDetail(i, 'item_description', $event);\"></inline-edit-textarea>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<inline-edit-input [name]=\"'quantity'\" [type]=\"'number'\" [elementFor]=\"'invoices.inline_edit.quantity' | translate\" [fieldValue]=\"item.quantity\" [isRequired]=\"'true'\" (updateValue)=\"saveItemDetail(i, 'quantity', $event);\"></inline-edit-input>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<inline-edit-input [name]=\"'unit_price'\" [type]=\"'number'\" [elementFor]=\"'invoices.inline_edit.unit_price' | translate\" [fieldValue]=\"item.unit_price\" [isRequired]=\"'true'\" (updateValue)=\"saveItemDetail(i, 'unit_price', $event);\"></inline-edit-input>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<inline-edit-select-items [name]=\"'taxes'\" [txtField]=\"'Taxes'\" [elementFor]=\"'invoices.inline_edit.item_tax' | translate\" [selectedValue]=\"item.taxes\" [isRequired]=\"'true'\" [options]=\"taxes\" (updateValue)=\"saveItemDetail(i, 'taxes', $event);\"></inline-edit-select-items>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.quantity * item.unit_price}}</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"actions-dropdown text-right\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"deleteItem(i)\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\" tooltip=\"{{'common.delete' | translate}}\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tbody class=\"mt-4\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><strong>{{'invoices.create.fields.sub_total' | translate}}:</strong></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{loginUser.currency.symbol}}{{invoices.sub_total | number : '1.2-2'}}</td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let tax of itemTaxes | keyvalue\">\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"tax\">\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><strong>{{taxesNameValues[tax.key].tax_name}}({{taxesNameValues[tax.key].tax_rate}})</strong></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{loginUser.currency.symbol}}{{tax.value | number : '1.2-2'}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><strong>{{'invoices.create.fields.discount' | translate}}</strong></td>\n\t\t\t\t\t\t\t\t\t\t<td><input type=\"number\" name=\"discount\" class=\"form-control\" formControlName=\"discount\" placeholder=\"00.00\" (change)=\"changeDiscountAdjustment($event, 'discount')\"></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"danger text-center\">(-) {{loginUser.currency.symbol}}{{total_discount | number : '1.2-2'}}</td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><strong>{{'invoices.create.fields.adjustment' | translate}}</strong></td>\n\t\t\t\t\t\t\t\t\t\t<td><input type=\"number\" name=\"adjustment\" min=\"0\" class=\"form-control\" formControlName=\"adjustment\" placeholder=\"00.00\" (change)=\"changeDiscountAdjustment($event, 'adjustment')\"></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{loginUser.currency.symbol}}{{invoices.adjustment | number : '1.2-2'}}</td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><strong>{{'invoices.create.fields.total_amount' | translate}}:</strong></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{loginUser.currency.symbol}}{{invoices.total | number : '1.2-2'}}</td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 text-right pt-3 pb-3\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['/invoices']\" class=\"btn btn-cancel mb-0\">{{'common.cancel' | translate }}</a>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.update' | translate }}</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-list/invoice-list.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-list/invoice-list.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card pl-2 pr-2\">\n\t\t\t\t<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t\t\t\t\t<h4 class=\"main-title mt-2\"><span>{{'invoices.title' | translate}}</span></h4>\n\t\t\t\t\t<div class=\"card-buttons\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'invoices_create']\">\n\t\t\t\t\t\t<a class=\"btn btn-create mb-0\" [routerLink]=\"['/invoices/create']\" placement=\"left\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Card content -->\n\t\t\t\t<div class=\"card-content pt-3 pb-3\">\n\t\t\t\t\t<!-- Card body -->\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<!-- Invoices list datatable -->\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"invoices_table\">\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.columns.invoice_number' | translate}} #</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.columns.customer' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.columns.invoice_date' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.columns.due_date' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.columns.total_amount' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.columns.status' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'common.actions' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let invoice of invoices; index as i\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'invoices_view'] else elseBlock1;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/invoices/detail', invoice.id]\" tooltip=\"{{'common.view' | translate}}\">{{invoice.invoice_number}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock1>{{invoice.invoice_number}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{invoice.client_firstname}} {{invoice.client_lastname}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{invoice.invoice_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{invoice.due_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{loginUser.currency.symbol}}{{invoice.total_amount | number : '1.2-2'}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ('invoices.status' | translate)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"{{status.class}}\" *ngIf=\"status.id == invoice.status\">{{status.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"actions-dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngIf=\"getCheckPermission(invoice.client_id)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"{{apiUrl}}/invoices/download/{{invoice.secret_id}}/{{invoice.client_id}}\" class=\"dropdown-item btn btn-download btn-raised\" tooltip=\"{{'common.download' | translate}}\"><i class=\"fa fa-download\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin', 'invoices_edit']\" [routerLink]=\"['edit', invoice.id]\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin', 'invoices_delete']\" (click)=\"deleteInvoice(invoice.id)\" class=\"dropdown-item btn btn-danger btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t<tfoot *ngIf=\"invoices?.length == 0\" class=\"tfoot_dt\">\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"7\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-view/invoice-view.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-view/invoice-view.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageLoad\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12 col-12 text-center text-sm-right\">\n\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin', 'invoices_edit']\" [routerLink]=\"['/invoices/edit', invoice.id]\" class=\"btn btn-create mb-0 \" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t<a href=\"{{apiUrl}}/invoices/download/{{invoice.secret_id}}/{{invoice.client.id}}\" *ngIf=\"isDownloadable\" type=\"button\" class=\"btn btn-create mb-0 ml-1\" tooltip=\"{{'invoices.view.download' | translate}}\"><i class=\"ft-download mr-1\"></i></a>\n\t\t\t<ng-container *ngIf=\"invoice.status != 'paid'\">\n\t\t\t\t<button *ngxPermissionsOnly=\"['admin', 'super_admin', 'payments_create']\" class=\"btn btn-create mb-0 ml-1\" (click)=\"openPaymentCreateModal()\"><i class=\"fa fa-plus\"></i><span>{{'invoices.view.add_payment' | translate}}</span></button>\n\t\t\t</ng-container>\n\t\t</div>\n\t</div>\n\t<div class=\"row\" id=\"invoice_table\">\n\t\t<div class=\"col-md-12 col-12\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-content p-3\">\n\t\t\t\t\t<div class=\"card-body pb-0\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 col-12\">\n\t\t\t\t\t\t\t\t<div class=\"ribbon ribbon-bookmark ribbon-paid\" *ngIf=\"invoice.status == 'paid'\">{{'invoices.view.paid' | translate}}</div>\n\t\t\t\t\t\t\t\t<div class=\"ribbon ribbon-bookmark ribbon-partially_paid\" *ngIf=\"invoice.status == 'partially_paid'\">{{'invoices.view.partially_paid' | translate}}</div>\n\t\t\t\t\t\t\t\t<div class=\"ribbon ribbon-bookmark ribbon-unpaid\" *ngIf=\"invoice.status == 'unpaid'\">{{'invoices.view.unpaid' | translate}}</div>\n\n\t\t\t\t\t\t\t\t<div class=\"media logo-img pt-5\">\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"invoiceSettings.invoice_logo\" src=\"{{apiUrl}}/uploads/invoice_logo/{{invoiceSettings.invoice_logo}}\" alt=\"Invoice Logo\" width=\"80\" height=\"80\">\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"!invoiceSettings.invoice_logo\" src=\"assets/img/logos/vipspm_logo.png\" alt=\"Invoice Logo\" width=\"80\" height=\"80\">\n\t\t\t\t\t\t\t\t\t<div class=\"media-body ml-4\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"m-0 list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"text-bold-800\">{{loginUser.settings.company_name}}</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"nl2br\">{{loginUser.settings.company_address}}</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>{{loginUser.settings.company_phone}}</li>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"invoiceSettings.show_gst_number\">{{'invoices.view.gst_number' | translate}}: {{invoiceSettings.gst_number}}</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6 col-12 text-right\">\n\t\t\t\t\t\t\t\t<h2 class=\"primary text-uppercase\">{{'invoices.title4' | translate}}</h2>\n\t\t\t\t\t\t\t\t<p class=\"pb-3\"># {{invoice.invoice_number}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"invoice-customer-details\" class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-12 text-left\">\n\t\t\t\t\t\t\t\t<p class=\"text-muted mb-1\">{{'invoices.view.bill_to' | translate}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-12 text-left\">\n\t\t\t\t\t\t\t\t<ul class=\"m-0 list-unstyled\">\n\t\t\t\t\t\t\t\t\t<li class=\"text-bold-800\">{{invoice.client.firstname}} {{invoice.client.lastname}}</li>\n\t\t\t\t\t\t\t\t\t<li class=\"nl2br\">{{invoice.client.address}}</li>\n\t\t\t\t\t\t\t\t\t<li>{{invoice.client.phone}}</li>\n\t\t\t\t\t\t\t\t\t<li>{{invoice.client.mobile}}</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-8 col-12 text-right\">\n\t\t\t\t\t\t\t\t<p *ngIf=\"invoice.reference\"><span class=\"text-muted\">{{'invoices.create.fields.reference' | translate}} :</span> {{invoice.reference}}</p>\n\t\t\t\t\t\t\t\t<p><span class=\"text-muted\">{{'invoices.view.invoice_date' | translate}} :</span> {{invoice.invoice_date | dateTimeFormatFilter: loginUser.settings.date_format}}</p>\n\t\t\t\t\t\t\t\t<p class=\"m-0\"><span class=\"text-muted\">{{'invoices.view.due_date' | translate}} :</span> {{invoice.due_date | dateTimeFormatFilter: loginUser.settings.date_format}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"invoice-items-details\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"table-responsive col-12\">\n\t\t\t\t\t\t\t\t\t<table class=\"table mt-3\">\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.create.fields.item_name' | translate}} &amp; {{'invoices.create.fields.item_description' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.create.fields.quantity' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.create.fields.unit_price' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.create.fields.item_tax' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-right\">{{'invoices.create.fields.total_item_amount' | translate}} ({{loginUser.currency.symbol}})</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of invoice.items; index as i\">\n\t\t\t\t\t\t\t\t\t\t\t\t<th scope=\"row\">{{i + 1}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mb-0\">{{item.item_name}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mb-0 text-muted\">{{item.item_description}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><span>{{item.quantity}}<small>&nbsp;{{item.item_unit}}</small></span></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{item.unit_price}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let tax of item.taxes\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"open\">{{tax.tax_name}} ({{tax.tax_rate}}%)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">{{item.unit_price * item.quantity}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row mt-3 mt-md-0\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-12\"></div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t\t\t\t\t<table class=\"table\" width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{'invoices.create.fields.sub_total' | translate}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">{{loginUser.currency.symbol}}{{invoices.sub_total | number : '1.2-2'}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let tax of itemTaxes | keyvalue\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{taxesNameValues[tax.key].tax_name}} ({{taxesNameValues[tax.key].tax_rate}}%)</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">{{loginUser.currency.symbol}}{{tax.value}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{'invoices.create.fields.discount' | translate}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"danger text-right\">(-) {{loginUser.currency.symbol}}{{invoice.total_discount | number : '1.2-2'}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{'invoices.create.fields.adjustment' | translate}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">{{loginUser.currency.symbol}}{{invoice.adjustment | number : '1.2-2'}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-bold-500\">{{'invoices.create.fields.total_amount' | translate}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-bold-500 text-right\"> {{loginUser.currency.symbol}}{{invoice.total_amount | number : '1.2-2'}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-bold-500 danger\">{{'invoices.create.fields.total_amount_due' | translate}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-bold-500 text-right danger\"> {{loginUser.currency.symbol}} {{ invoice.total_due_amount | number : '1.2-2'}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row mt-2 mt-sm-0 pt-3 border-top\" *ngIf=\"invoice.recurrence\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-12 d-flex align-items-center\">\n\t\t\t\t\t\t\t\t\t<div class=\"terms-conditions mb-2\">\n\t\t\t\t\t\t\t\t\t\t<h6><strong>{{'invoices.view.recurring_info' | translate}}</strong></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 mb-3\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-muted\">{{'invoices.create.fields.recurrence_occurrences' | translate}}</label>\n\t\t\t\t\t\t\t\t\t<div>{{invoice.recurrence_occurrences}}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 mb-3\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-muted\">{{'invoices.create.fields.recurrence_pattern' | translate}}</label>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"invoice.recurrence_pattern == 'daily'\">{{'invoices.create.fields.daily' | translate }}</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"invoice.recurrence_pattern == 'weekly'\">{{'invoices.create.fields.weekly' | translate }}</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"invoice.recurrence_pattern == 'monthly'\">{{'invoices.create.fields.monthly' | translate }}</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"invoice.recurrence_pattern == 'quarterly'\">{{'invoices.create.fields.quarterly' | translate }}</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"invoice.recurrence_pattern == 'semi_annually'\">{{'invoices.create.fields.semi_annually' | translate }}</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"invoice.recurrence_pattern == 'annually'\">{{'invoices.create.fields.annually' | translate }}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row mt-2 mt-sm-0 pt-3 border-top\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-12 d-flex align-items-center\">\n\t\t\t\t\t\t\t\t\t<div class=\"terms-conditions mb-2\">\n\t\t\t\t\t\t\t\t\t\t<h6><strong>{{'invoices.view.terms' | translate}}</strong></h6>\n\t\t\t\t\t\t\t\t\t\t<p>{{invoiceSettings.terms_conditions}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row mt-2 mt-sm-0 pt-3 border-top\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<h6><strong>{{'invoices.view.transactions' | translate}}</strong></h6>\n\t\t\t\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.view.payment' | translate}} #</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.view.payment_mode' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.view.date' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.view.status' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'invoices.view.amount' | translate}} ({{loginUser.currency.symbol}})</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody *ngIf=\"invoice.payments?.length != 0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let payment of invoice.payments; index as i\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngxPermissionsOnly=\"['admin', 'super_admin', 'payments_view'] else elseBlock1;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/payments/detail', payment.id]\" tooltip=\"{{'common.view' | translate}}\">{{payment.receipt_number}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock1>{{payment.receipt_number}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{payment.payment_method}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{payment.date | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ('payments.status' | translate)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"{{status.class}}\" *ngIf=\"status.id == payment.status\">{{status.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{payment.amount}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tbody *ngIf=\"invoice.payments?.length == 0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"5\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row mt-2 mt-sm-0 pt-3 border-top\" *ngIf=\"invoice.status != 'paid'\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-12\">\n\t\t\t\t\t\t\t\t\t<h6><strong>{{'payments.columns.payment_mode' | translate}}</strong></h6>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table\" width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngIf=\"gatewaySettings.paypal_checkout_status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"width-600\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"paymentMethod\" value=\"paypal\" id=\"checkbox1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox1\">&nbsp;{{'invoices.view.paypal' | translate}}&nbsp;</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"width-300\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"paymentMethod == 'paypal'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-paypal-payment [loginUser]=\"loginUser\" [invoice]=\"invoice\" [gatewaySettings]=\"gatewaySettings\" (onPaymentSuccess)=\"getPaymentSuccess($event)\"></app-paypal-payment>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngIf=\"gatewaySettings.stripe_status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"width-600\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"paymentMethod\" value=\"stripe\" id=\"checkbox2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox2\">&nbsp;{{'invoices.view.stripe' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"width-300\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"paymentMethod == 'stripe'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-stripe-payment [loginUser]=\"loginUser\" [invoice]=\"invoice\" [gatewaySettings]=\"gatewaySettings\" (onPaymentSuccess)=\"getPaymentSuccess($event)\"></app-stripe-payment>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let mode of paymentModes; index as i\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"mode.show_on_pdf && (mode.status == 'active' || mode.status == '1')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"width-600\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check radio-container d-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"paymentMethod\" value=\"{{mode.method_name}}\" id=\"checkbox2_{{i}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox2_{{i}}\">&nbsp;{{mode.method_name}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"nl2br width-300\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"paymentMethod == mode.method_name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{mode.description}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>");

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

/***/ "./src/app/core/services/invoice.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/invoice.service.ts ***!
  \**************************************************/
/*! exports provided: InvoiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceService", function() { return InvoiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var InvoiceService = /** @class */ (function () {
    function InvoiceService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    InvoiceService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/invoices/" + id);
    };
    InvoiceService.prototype.create = function (invoice) {
        return this.http.post(this.apiUrl + "/api/invoices", invoice);
    };
    InvoiceService.prototype.update = function (invoice) {
        return this.http.put(this.apiUrl + "/api/invoices/" + invoice.id, invoice);
    };
    InvoiceService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/invoices/" + id);
    };
    InvoiceService.prototype.changeStatus = function (invoice) {
        return this.http.post(this.apiUrl + "/api/invoices/change-status/" + invoice.id, { "status": invoice.status });
    };
    InvoiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    InvoiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InvoiceService);
    return InvoiceService;
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

/***/ "./src/app/modules/sales/invoices/components/paypal-payment/paypal-payment.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/components/paypal-payment/paypal-payment.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2FsZXMvaW52b2ljZXMvY29tcG9uZW50cy9wYXlwYWwtcGF5bWVudC9wYXlwYWwtcGF5bWVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/sales/invoices/components/paypal-payment/paypal-payment.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/components/paypal-payment/paypal-payment.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PaypalPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPaymentComponent", function() { return PaypalPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_services_payment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/payment.service */ "./src/app/core/services/payment.service.ts");





var PaypalPaymentComponent = /** @class */ (function () {
    function PaypalPaymentComponent(translate, toastr, paymentService) {
        this.translate = translate;
        this.toastr = toastr;
        this.paymentService = paymentService;
        this.onPaymentSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.unitAmount = '00.00';
        this.amount = '00.00';
    }
    PaypalPaymentComponent.prototype.ngOnInit = function () {
        this.amount = this.invoice.total_due_amount;
        this.initConfig();
    };
    PaypalPaymentComponent.prototype.initConfig = function () {
        var _this = this;
        this.payPalConfig = {
            currency: this.loginUser.currency.code,
            clientId: this.gatewaySettings.paypal_checkout_client_id,
            createOrderOnClient: function (data) { return ({
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        amount: {
                            currency_code: _this.loginUser.currency.code,
                            value: _this.amount,
                            breakdown: {
                                item_total: {
                                    currency_code: _this.loginUser.currency.code,
                                    value: _this.amount
                                }
                            }
                        },
                    }
                ]
            }); },
            advanced: {
                commit: 'true'
            },
            style: {
                label: this.gatewaySettings.paypal_checkout_label,
                layout: 'vertical',
                shape: 'pill'
            },
            onApprove: function (data, actions) {
                actions.order.get().then(function (details) { });
            },
            onClientAuthorization: function (data) {
                _this.addPayment(data);
            },
            onCancel: function (data, actions) {
                _this.cancelPayment();
            },
            onError: function (err) {
                _this.cancelPayment();
            },
            onClick: function (data, actions) { },
        };
    };
    PaypalPaymentComponent.prototype.addPayment = function (details) {
        var _this = this;
        var params = {
            invoice_id: this.invoice.id,
            client_id: this.invoice.client_id,
            transaction_id: details.id,
            payment_method: 'PayPal Checkout',
            isPaypal_payment: true,
            amount: details.purchase_units[0].amount.value,
            status: 'successful'
        };
        this.paymentService.create(params)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('payments.messages.create'), _this.translate.instant('settings.paypal_settings.title'));
            _this.onPaymentSuccess.emit(true);
        });
    };
    PaypalPaymentComponent.prototype.cancelPayment = function () {
        var _this = this;
        var params = {
            invoice_id: this.invoice.id,
            client_id: this.invoice.client_id,
            payment_method: 'PayPal Checkout',
            amount: this.amount,
            isPaypal_payment: true,
            status: 'failed'
        };
        this.paymentService.create(params)
            .subscribe(function (data) {
            _this.toastr.error(_this.translate.instant('payments.messages.failed'), _this.translate.instant('settings.paypal_settings.title'));
            _this.onPaymentSuccess.emit(true);
        });
    };
    PaypalPaymentComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PaypalPaymentComponent.prototype, "onPaymentSuccess", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaypalPaymentComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaypalPaymentComponent.prototype, "invoice", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaypalPaymentComponent.prototype, "gatewaySettings", void 0);
    PaypalPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paypal-payment',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paypal-payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/components/paypal-payment/paypal-payment.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paypal-payment.component.scss */ "./src/app/modules/sales/invoices/components/paypal-payment/paypal-payment.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"]])
    ], PaypalPaymentComponent);
    return PaypalPaymentComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/invoices/components/stripe-payment/stripe-payment.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/components/stripe-payment/stripe-payment.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2FsZXMvaW52b2ljZXMvY29tcG9uZW50cy9zdHJpcGUtcGF5bWVudC9zdHJpcGUtcGF5bWVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/sales/invoices/components/stripe-payment/stripe-payment.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/components/stripe-payment/stripe-payment.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: StripePaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePaymentComponent", function() { return StripePaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_services_payment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/payment.service */ "./src/app/core/services/payment.service.ts");





var StripePaymentComponent = /** @class */ (function () {
    function StripePaymentComponent(translate, toastr, paymentService) {
        this.translate = translate;
        this.toastr = toastr;
        this.paymentService = paymentService;
        this.onPaymentSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.handler = null;
        this.amount = '00.00';
    }
    StripePaymentComponent.prototype.ngOnInit = function () {
        this.amount = this.invoice.total_due_amount;
        this.loadStripe();
    };
    StripePaymentComponent.prototype.pay = function (amount) {
        var that = this;
        var handler = window.StripeCheckout.configure({
            key: this.gatewaySettings.stripe_api_key,
            locale: 'auto',
            currency: this.loginUser.currency.code,
            token: function (token) {
                that.stripePaymentCharge(token);
            }
        });
        handler.open({
            name: this.gatewaySettings.stripe_label,
            description: this.translate.instant('payments.view.payment_receipt') + ' ' + this.invoice.invoice_number,
            amount: amount * 100
        });
    };
    StripePaymentComponent.prototype.loadStripe = function () {
        var _this = this;
        var style = {
            base: {
                iconColor: '#c4f0ff',
                color: '#fff',
                fontWeight: 500,
                fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                fontSize: '16px',
                fontSmoothing: 'antialiased',
                ':-webkit-autofill': {
                    color: '#fce883',
                },
                '::placeholder': {
                    color: '#87BBFD',
                },
            },
            invalid: {
                iconColor: '#FFC7EE',
                color: '#FFC7EE',
            }
        };
        if (!window.document.getElementById('stripe-script')) {
            var s = window.document.createElement("script");
            s.id = "stripe-script";
            s.type = "text/javascript";
            s.src = "https://checkout.stripe.com/checkout.js";
            s.onload = function () {
                _this.handler = window.StripeCheckout.configure({
                    key: _this.gatewaySettings.stripe_api_key,
                    currency: _this.loginUser.currency.code,
                    locale: 'auto',
                    style: style,
                    token: function (token) {
                    }
                });
            };
            window.document.body.appendChild(s);
        }
    };
    StripePaymentComponent.prototype.stripePaymentCharge = function (token) {
        var _this = this;
        var params = {
            invoice_id: this.invoice.id,
            client_id: this.invoice.client_id,
            amount: this.amount,
            currency: this.loginUser.currency.code,
            description: token.id,
            email: token.email,
            payment_method: "Stripe Checkout"
        };
        this.paymentService.stripePaymentCharge(params)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('payments.messages.create'), _this.translate.instant('settings.stripe_settings.title'));
            _this.onPaymentSuccess.emit(true);
        }, function (error) {
            var msg = error.error;
            if (msg && msg.message) {
                msg = msg.message;
            }
            if (msg.error && msg.error.message) {
                msg = msg.error.message;
            }
            _this.toastr.error(msg, _this.translate.instant('settings.stripe_settings.title'));
        });
    };
    StripePaymentComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], StripePaymentComponent.prototype, "onPaymentSuccess", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StripePaymentComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StripePaymentComponent.prototype, "invoice", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StripePaymentComponent.prototype, "gatewaySettings", void 0);
    StripePaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stripe-payment',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stripe-payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/components/stripe-payment/stripe-payment.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stripe-payment.component.scss */ "./src/app/modules/sales/invoices/components/stripe-payment/stripe-payment.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"]])
    ], StripePaymentComponent);
    return StripePaymentComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/invoices/invoices-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/sales/invoices/invoices-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: InvoicesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesRoutingModule", function() { return InvoicesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/invoice-list/invoice-list.component */ "./src/app/modules/sales/invoices/pages/invoice-list/invoice-list.component.ts");
/* harmony import */ var _pages_invoice_create_invoice_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/invoice-create/invoice-create.component */ "./src/app/modules/sales/invoices/pages/invoice-create/invoice-create.component.ts");
/* harmony import */ var _pages_invoice_edit_invoice_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/invoice-edit/invoice-edit.component */ "./src/app/modules/sales/invoices/pages/invoice-edit/invoice-edit.component.ts");
/* harmony import */ var _pages_invoice_view_invoice_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/invoice-view/invoice-view.component */ "./src/app/modules/sales/invoices/pages/invoice-view/invoice-view.component.ts");








var routes = [{
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceListComponent"]
            },
            {
                path: 'create',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: "common.create",
                        icon: "fa fa-file-pdf-o",
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'invoices_create']
                    }
                },
                component: _pages_invoice_create_invoice_create_component__WEBPACK_IMPORTED_MODULE_5__["InvoiceCreateComponent"]
            },
            {
                path: 'edit/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: "common.edit",
                        icon: "fa fa-file-pdf-o",
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'invoices_edit']
                    }
                },
                component: _pages_invoice_edit_invoice_edit_component__WEBPACK_IMPORTED_MODULE_6__["InvoiceEditComponent"]
            },
            {
                path: 'detail/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: "common.detail",
                        icon: "fa fa-file-pdf-o"
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'invoices_view']
                    }
                },
                component: _pages_invoice_view_invoice_view_component__WEBPACK_IMPORTED_MODULE_7__["InvoiceViewComponent"]
            }
        ]
    }
];
var InvoicesRoutingModule = /** @class */ (function () {
    function InvoicesRoutingModule() {
    }
    InvoicesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], InvoicesRoutingModule);
    return InvoicesRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/sales/invoices/invoices.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/sales/invoices/invoices.module.ts ***!
  \***********************************************************/
/*! exports provided: InvoicesModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesModule", function() { return InvoicesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/fesm5/ngx-paypal.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _invoices_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./invoices-routing.module */ "./src/app/modules/sales/invoices/invoices-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _payments_payments_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../payments/payments.module */ "./src/app/modules/sales/payments/payments.module.ts");
/* harmony import */ var _pages_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/invoice-list/invoice-list.component */ "./src/app/modules/sales/invoices/pages/invoice-list/invoice-list.component.ts");
/* harmony import */ var _pages_invoice_create_invoice_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/invoice-create/invoice-create.component */ "./src/app/modules/sales/invoices/pages/invoice-create/invoice-create.component.ts");
/* harmony import */ var _pages_invoice_edit_invoice_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/invoice-edit/invoice-edit.component */ "./src/app/modules/sales/invoices/pages/invoice-edit/invoice-edit.component.ts");
/* harmony import */ var _components_paypal_payment_paypal_payment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/paypal-payment/paypal-payment.component */ "./src/app/modules/sales/invoices/components/paypal-payment/paypal-payment.component.ts");
/* harmony import */ var _components_stripe_payment_stripe_payment_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/stripe-payment/stripe-payment.component */ "./src/app/modules/sales/invoices/components/stripe-payment/stripe-payment.component.ts");
/* harmony import */ var _pages_invoice_view_invoice_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/invoice-view/invoice-view.component */ "./src/app/modules/sales/invoices/pages/invoice-view/invoice-view.component.ts");
/* harmony import */ var _payments_components_create_payment_create_payment_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../payments/components/create-payment/create-payment.component */ "./src/app/modules/sales/payments/components/create-payment/create-payment.component.ts");
/* harmony import */ var _payments_components_edit_payment_edit_payment_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../payments/components/edit-payment/edit-payment.component */ "./src/app/modules/sales/payments/components/edit-payment/edit-payment.component.ts");

























var InvoicesModule = /** @class */ (function () {
    function InvoicesModule() {
    }
    InvoicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_17__["InvoiceListComponent"],
                _components_paypal_payment_paypal_payment_component__WEBPACK_IMPORTED_MODULE_20__["PaypalPaymentComponent"],
                _components_stripe_payment_stripe_payment_component__WEBPACK_IMPORTED_MODULE_21__["StripePaymentComponent"],
                _pages_invoice_create_invoice_create_component__WEBPACK_IMPORTED_MODULE_18__["InvoiceCreateComponent"],
                _pages_invoice_edit_invoice_edit_component__WEBPACK_IMPORTED_MODULE_19__["InvoiceEditComponent"],
                _pages_invoice_view_invoice_view_component__WEBPACK_IMPORTED_MODULE_22__["InvoiceViewComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _invoices_routing_module__WEBPACK_IMPORTED_MODULE_14__["InvoicesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_9__["NgxPermissionsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_13__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_7__["NgxEditorModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
                ngx_paypal__WEBPACK_IMPORTED_MODULE_8__["NgxPayPalModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _payments_payments_module__WEBPACK_IMPORTED_MODULE_16__["PaymentsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"]
            ],
            entryComponents: [
                _payments_components_create_payment_create_payment_component__WEBPACK_IMPORTED_MODULE_23__["CreatePaymentComponent"],
                _payments_components_edit_payment_edit_payment_component__WEBPACK_IMPORTED_MODULE_24__["EditPaymentComponent"]
            ],
            providers: []
        })
    ], InvoicesModule);
    return InvoicesModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/sales/invoices/pages/invoice-create/invoice-create.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/pages/invoice-create/invoice-create.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ng-select.ng-select-single .ng-select-container {\n  min-width: 500px;\n}\n\n.inp {\n  border: none;\n  border-bottom: 1px solid #e8eef3;\n  padding: 5px 10px;\n  outline: none;\n  width: 100%;\n}\n\n[placeholder]:focus::-webkit-input-placeholder {\n  transition: text-indent 0.4s 0.4s ease;\n  text-indent: -100%;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9zYWxlcy9pbnZvaWNlcy9wYWdlcy9pbnZvaWNlLWNyZWF0ZS9pbnZvaWNlLWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zYWxlcy9pbnZvaWNlcy9wYWdlcy9pbnZvaWNlLWNyZWF0ZS9pbnZvaWNlLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLGdCQUFBO0FDQUQ7O0FERUE7RUFDQyxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQ0Q7O0FERUE7RUFDQyxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zYWxlcy9pbnZvaWNlcy9wYWdlcy9pbnZvaWNlLWNyZWF0ZS9pbnZvaWNlLWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZVxuLm5nLXNlbGVjdC1jb250YWluZXIge1xuXHRtaW4td2lkdGg6IDUwMHB4O1xufVxuLmlucCB7XG5cdGJvcmRlcjpub25lO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZWVmMztcblx0cGFkZGluZzogNXB4IDEwcHg7XG5cdG91dGxpbmU6IG5vbmU7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG5bcGxhY2Vob2xkZXJdOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0dHJhbnNpdGlvbjogdGV4dC1pbmRlbnQgMC40cyAwLjRzIGVhc2U7IFxuXHR0ZXh0LWluZGVudDogLTEwMCU7XG5cdG9wYWNpdHk6IDE7XG59IiwiLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgbWluLXdpZHRoOiA1MDBweDtcbn1cblxuLmlucCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVlZjM7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuW3BsYWNlaG9sZGVyXTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRyYW5zaXRpb246IHRleHQtaW5kZW50IDAuNHMgMC40cyBlYXNlO1xuICB0ZXh0LWluZGVudDogLTEwMCU7XG4gIG9wYWNpdHk6IDE7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/sales/invoices/pages/invoice-create/invoice-create.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/pages/invoice-create/invoice-create.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: InvoiceCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceCreateComponent", function() { return InvoiceCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/invoice.service */ "./src/app/core/services/invoice.service.ts");
/* harmony import */ var _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/item.service */ "./src/app/core/services/item.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/tax.service */ "./src/app/core/services/tax.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_invoice_setting_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/invoice-setting.service */ "./src/app/core/services/invoice-setting.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");















var InvoiceCreateComponent = /** @class */ (function () {
    function InvoiceCreateComponent(translate, datepipe, router, formBuilder, toastr, invoiceService, clientService, itemService, taxService, projectService, invoiceSettingService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.invoiceService = invoiceService;
        this.clientService = clientService;
        this.itemService = itemService;
        this.taxService = taxService;
        this.projectService = projectService;
        this.invoiceSettingService = invoiceSettingService;
        this.authenticationService = authenticationService;
        this.clients = [];
        this.items = [];
        this.itemsArray = [];
        this.taxes = [];
        this.itemTaxes = [];
        this.taxesNameValues = [];
        this.total_discount = 0.00;
        this.isFormSubmitted = false;
        this.isFormLoaded = false;
        this.invoices = {
            sub_total: 0,
            total_taxes: 0,
            discount: 0.00,
            adjustment: 0.00,
            total: 0
        };
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_14__["datepickerConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    InvoiceCreateComponent.prototype.ngOnInit = function () {
        this.getInvoiceSettings();
        this.getProjects();
        this.getClients();
        this.getTaxes();
    };
    InvoiceCreateComponent.prototype.loadForm = function () {
        this.createInvoiceForm = this.formBuilder.group({
            project_id: [null],
            client_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            invoice_date: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            due_date: [this.addDays(new Date(), this.invoiceSettings.due_after), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reference: [null],
            status: ["unpaid"],
            discount_type: ["percent"],
            selectedItem: [null],
            discount: [0],
            adjustment: [0],
            recurrence: [false],
            recurrence_pattern: [null],
            recurrence_occurrences: [null],
            item: this.formBuilder.group({
                item_name: [null],
                item_description: [null],
                quantity: [null],
                unit_price: [null],
                item_unit: [null],
                taxes: [null],
                amount: [null]
            }),
            items: []
        });
        this.isFormLoaded = true;
    };
    Object.defineProperty(InvoiceCreateComponent.prototype, "invoiceControl", {
        get: function () { return this.createInvoiceForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvoiceCreateComponent.prototype, "itemControl", {
        get: function () { return this.createInvoiceForm.get('item'); },
        enumerable: true,
        configurable: true
    });
    InvoiceCreateComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getAll().subscribe(function (data) {
            _this.projects = data;
        });
    };
    InvoiceCreateComponent.prototype.getTaxes = function () {
        var _this = this;
        this.taxService.getAll().subscribe(function (data) {
            _this.taxes = data;
            for (var iRow in _this.taxes) {
                if (_this.taxesNameValues[_this.taxes[iRow].id] == undefined) {
                    _this.taxesNameValues[_this.taxes[iRow].id] = [];
                }
                _this.taxesNameValues[_this.taxes[iRow].id] = _this.taxes[iRow];
            }
        });
    };
    InvoiceCreateComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getAll()
            .subscribe(function (data) {
            _this.clients = data;
            _this.getInvoiceSettings();
        });
    };
    InvoiceCreateComponent.prototype.getInvoiceSettings = function () {
        var _this = this;
        this.invoiceSettingService.getAll()
            .subscribe(function (data) {
            _this.invoiceSettings = data;
            _this.getItems();
        });
    };
    InvoiceCreateComponent.prototype.getItems = function () {
        var _this = this;
        this.itemService.getAll()
            .subscribe(function (data) {
            _this.items = data;
            _this.loadForm();
        });
    };
    InvoiceCreateComponent.prototype.addDays = function (date, days) {
        return new Date(date.setDate(date.getDate() + days));
    };
    InvoiceCreateComponent.prototype.changeItem = function (event) {
        var taxes = [];
        for (var iRow in event.taxes) {
            taxes.push(event.taxes[iRow].id);
        }
        this.itemControl.patchValue({ item_name: event.name });
        this.itemControl.patchValue({ item_description: event.description });
        this.itemControl.patchValue({ quantity: 1 });
        this.itemControl.patchValue({ unit_price: event.price });
        this.itemControl.patchValue({ item_unit: event.unit });
        this.itemControl.patchValue({ taxes: taxes });
    };
    InvoiceCreateComponent.prototype.resetChildForm = function () {
        this.itemControl.patchValue({ item_name: null });
        this.itemControl.patchValue({ item_description: null });
        this.itemControl.patchValue({ quantity: null });
        this.itemControl.patchValue({ unit_price: null });
        this.itemControl.patchValue({ item_unit: null });
        this.itemControl.patchValue({ taxes: [] });
    };
    InvoiceCreateComponent.prototype.changeDiscountType = function (event) {
        if (event.id == 'not_discount') {
            this.invoices.discount = 0;
        }
        this.getItemTaxes();
    };
    InvoiceCreateComponent.prototype.changeDiscountAdjustment = function (event, type) {
        if (type == 'discount') {
            if (this.createInvoiceForm.value.discount_type == "not_discount") {
                this.toastr.error(this.translate.instant('invoices.create.error_messages.message7'), this.translate.instant('invoices.title'));
                return;
            }
            this.invoices.discount = parseFloat(event.target.value);
        }
        else {
            this.invoices.adjustment = parseFloat(event.target.value);
        }
        if (isNaN(this.invoices.discount)) {
            this.invoices.discount = 0;
        }
        if (isNaN(this.invoices.adjustment)) {
            this.invoices.adjustment = 0;
        }
        this.getItemTaxes();
    };
    InvoiceCreateComponent.prototype.projectChange = function (event) {
        if (this.createInvoiceForm.value.project_id == undefined || this.createInvoiceForm.value.project_id == null || this.createInvoiceForm.value.project_id == '') {
            this.createInvoiceForm.patchValue({ client_id: null });
            return;
        }
        this.createInvoiceForm.patchValue({ client_id: event.client_id });
    };
    InvoiceCreateComponent.prototype.addItem = function (event) {
        event.preventDefault();
        var item = this.createInvoiceForm.value.item;
        if (item.item_name == null || item.quantity == null || item.unit_price == null) {
            this.toastr.error(this.translate.instant('invoices.create.error_messages.message6'), this.translate.instant('invoices.title'));
            return false;
        }
        this.itemsArray.push(item);
        this.resetChildForm();
        this.invoices.discount = this.createInvoiceForm.value.discount;
        this.invoices.adjustment = this.createInvoiceForm.value.adjustment;
        this.getItemTaxes();
    };
    InvoiceCreateComponent.prototype.saveItemDetail = function (index, name, value) {
        this.itemsArray[index][name] = value;
        this.getItemTaxes();
    };
    InvoiceCreateComponent.prototype.deleteItem = function (index) {
        this.itemsArray.splice(index, 1);
        this.getItemTaxes();
    };
    InvoiceCreateComponent.prototype.getItemTaxes = function () {
        this.itemTaxes = [];
        this.invoices.sub_total = 0;
        this.invoices.total_taxes = 0;
        this.invoices.total = 0;
        this.total_discount = 0.00;
        var totalItemAmount = 0;
        // --
        // Count item taxes
        for (var iRow in this.itemsArray) {
            totalItemAmount = this.itemsArray[iRow].quantity * this.itemsArray[iRow].unit_price;
            for (var jRow in this.itemsArray[iRow].taxes) {
                var totalTaxes = 0;
                if (this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] == undefined) {
                    this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] = 0;
                }
                totalTaxes = (totalItemAmount * this.taxesNameValues[this.itemsArray[iRow].taxes[jRow]].tax_rate) / 100;
                this.invoices.total_taxes += totalTaxes;
                this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] = this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] + totalTaxes;
            }
            // --
            // Count sub total
            this.invoices.sub_total += totalItemAmount;
        }
        // --
        // Count total
        if (this.createInvoiceForm.value.discount_type == "percent") {
            this.total_discount = ((this.invoices.sub_total + this.invoices.total_taxes) * this.invoices.discount) / 100;
        }
        else {
            this.total_discount = this.invoices.discount;
        }
        this.invoices.total = (this.invoices.sub_total + this.invoices.total_taxes - this.total_discount) + this.invoices.adjustment;
    };
    InvoiceCreateComponent.prototype.changeRecurrence = function ($event) {
        if ($event === void 0) { $event = []; }
        if (this.createInvoiceForm.value.recurrence) {
            this.createInvoiceForm.get('recurrence_occurrences').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            this.createInvoiceForm.get('recurrence_pattern').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            this.createInvoiceForm.get('recurrence_occurrences').updateValueAndValidity();
            this.createInvoiceForm.get('recurrence_pattern').updateValueAndValidity();
        }
        else {
            this.createInvoiceForm.patchValue({
                recurrence_occurrences: null,
                recurrence_pattern: null
            });
            this.createInvoiceForm.get('recurrence_occurrences').clearValidators();
            this.createInvoiceForm.get('recurrence_pattern').clearValidators();
            this.createInvoiceForm.get('recurrence_occurrences').updateValueAndValidity();
            this.createInvoiceForm.get('recurrence_pattern').updateValueAndValidity();
        }
    };
    InvoiceCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createInvoiceForm.invalid) {
            return;
        }
        if (this.itemsArray.length == 0) {
            this.toastr.error(this.translate.instant('invoices.create.error_messages.message5'), this.translate.instant('invoices.title'));
            return;
        }
        var invoiceObj = {
            "project_id": this.createInvoiceForm.value.project_id,
            "client_id": this.createInvoiceForm.value.client_id,
            "invoice_date": this.datepipe.transform(this.createInvoiceForm.value.invoice_date, 'yyyy-MM-dd'),
            "due_date": this.createInvoiceForm.value.due_date,
            "status": this.createInvoiceForm.value.status,
            "reference": this.createInvoiceForm.value.reference,
            "adjustment": this.createInvoiceForm.value.adjustment,
            "discount_type": this.createInvoiceForm.value.discount_type,
            "discount": this.createInvoiceForm.value.discount,
            "recurrence": this.createInvoiceForm.value.recurrence,
            "recurrence_pattern": this.createInvoiceForm.value.recurrence_pattern,
            "recurrence_occurrences": this.createInvoiceForm.value.recurrence_occurrences,
            "items": this.itemsArray
        };
        this.invoiceService.create(invoiceObj)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('invoices.messages.create'), _this.translate.instant('invoices.title'));
            _this.router.navigate(['invoices']);
        });
    };
    InvoiceCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__["InvoiceService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"] },
        { type: _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
        { type: _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__["ProjectService"] },
        { type: _core_services_invoice_setting_service__WEBPACK_IMPORTED_MODULE_13__["InvoiceSettingService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] }
    ]; };
    InvoiceCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invoice-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-create/invoice-create.component.html")).default,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invoice-create.component.scss */ "./src/app/modules/sales/invoices/pages/invoice-create/invoice-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__["InvoiceService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"],
            _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"],
            _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__["ProjectService"],
            _core_services_invoice_setting_service__WEBPACK_IMPORTED_MODULE_13__["InvoiceSettingService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]])
    ], InvoiceCreateComponent);
    return InvoiceCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/invoices/pages/invoice-edit/invoice-edit.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/pages/invoice-edit/invoice-edit.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ng-select.ng-select-single .ng-select-container {\n  min-width: 500px;\n}\n\n.inp {\n  border: none;\n  border-bottom: 1px solid #e8eef3;\n  padding: 5px 10px;\n  outline: none;\n  width: 100%;\n}\n\n[placeholder]:focus::-webkit-input-placeholder {\n  transition: text-indent 0.4s 0.4s ease;\n  text-indent: -100%;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9zYWxlcy9pbnZvaWNlcy9wYWdlcy9pbnZvaWNlLWVkaXQvaW52b2ljZS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NhbGVzL2ludm9pY2VzL3BhZ2VzL2ludm9pY2UtZWRpdC9pbnZvaWNlLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyxnQkFBQTtBQ0FEOztBREVBO0VBQ0MsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NEOztBREVBO0VBQ0Msc0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2FsZXMvaW52b2ljZXMvcGFnZXMvaW52b2ljZS1lZGl0L2ludm9pY2UtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZVxuLm5nLXNlbGVjdC1jb250YWluZXIge1xuXHRtaW4td2lkdGg6IDUwMHB4O1xufVxuLmlucCB7XG5cdGJvcmRlcjpub25lO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZWVmMztcblx0cGFkZGluZzogNXB4IDEwcHg7XG5cdG91dGxpbmU6IG5vbmU7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG5bcGxhY2Vob2xkZXJdOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0dHJhbnNpdGlvbjogdGV4dC1pbmRlbnQgMC40cyAwLjRzIGVhc2U7IFxuXHR0ZXh0LWluZGVudDogLTEwMCU7XG5cdG9wYWNpdHk6IDE7XG59IiwiLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgbWluLXdpZHRoOiA1MDBweDtcbn1cblxuLmlucCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVlZjM7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuW3BsYWNlaG9sZGVyXTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRyYW5zaXRpb246IHRleHQtaW5kZW50IDAuNHMgMC40cyBlYXNlO1xuICB0ZXh0LWluZGVudDogLTEwMCU7XG4gIG9wYWNpdHk6IDE7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/sales/invoices/pages/invoice-edit/invoice-edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/pages/invoice-edit/invoice-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InvoiceEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceEditComponent", function() { return InvoiceEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/invoice.service */ "./src/app/core/services/invoice.service.ts");
/* harmony import */ var _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/item.service */ "./src/app/core/services/item.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/tax.service */ "./src/app/core/services/tax.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");














var InvoiceEditComponent = /** @class */ (function () {
    function InvoiceEditComponent(translate, datepipe, router, route, formBuilder, toastr, invoiceService, clientService, itemService, taxService, projectService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.invoiceService = invoiceService;
        this.clientService = clientService;
        this.itemService = itemService;
        this.taxService = taxService;
        this.projectService = projectService;
        this.authenticationService = authenticationService;
        this.clients = [];
        this.items = [];
        this.itemsArray = [];
        this.taxes = [];
        this.itemTaxes = [];
        this.taxesNameValues = [];
        this.total_discount = 0.00;
        this.isFormSubmitted = false;
        this.isFormLoaded = false;
        this.invoices = {
            sub_total: 0,
            total_taxes: 0,
            discount: 0.00,
            adjustment: 0.00,
            total: 0
        };
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_13__["datepickerConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
        this.route.paramMap.subscribe(function (params) {
            _this.getById(params.get('id'));
        });
    }
    InvoiceEditComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.getTaxes();
    };
    InvoiceEditComponent.prototype.loadForm = function () {
        this.editInvoiceForm = this.formBuilder.group({
            id: [this.invoice.id],
            project_id: [this.invoice.project_id],
            client_id: [this.invoice.client_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            invoice_date: [new Date(this.invoice.invoice_date), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            due_date: [new Date(this.invoice.due_date), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reference: [this.invoice.reference],
            status: [this.invoice.status],
            discount_type: [this.invoice.discount_type],
            invoice_number: [this.invoice.invoice_number],
            selectedItem: [null],
            discount: [this.invoice.discount],
            adjustment: [this.invoice.adjustment],
            recurrence: [this.invoice.recurrence],
            recurrence_pattern: [this.invoice.recurrence_pattern],
            recurrence_occurrences: [this.invoice.recurrence_occurrences],
            item: this.formBuilder.group({
                item_name: [null],
                item_description: [null],
                quantity: [null],
                unit_price: [null],
                item_unit: [null],
                taxes: [null],
                amount: [0]
            }),
            items: this.invoice.items
        });
        // --
        // Render selected items
        this.setSelectedItems(this.invoice.items);
        this.isFormLoaded = true;
    };
    Object.defineProperty(InvoiceEditComponent.prototype, "invoiceControl", {
        get: function () { return this.editInvoiceForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvoiceEditComponent.prototype, "itemControl", {
        get: function () { return this.editInvoiceForm.get('item'); },
        enumerable: true,
        configurable: true
    });
    InvoiceEditComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getAll()
            .subscribe(function (data) {
            _this.projects = data;
        });
    };
    InvoiceEditComponent.prototype.getById = function (invoiceId) {
        var _this = this;
        this.invoiceService.getById(invoiceId)
            .subscribe(function (data) {
            _this.invoice = data;
            _this.getClients();
        });
    };
    InvoiceEditComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getAll()
            .subscribe(function (data) {
            _this.clients = data;
            _this.getItems();
        });
    };
    InvoiceEditComponent.prototype.getItems = function () {
        var _this = this;
        this.itemService.getAll()
            .subscribe(function (data) {
            _this.items = data;
            _this.loadForm();
        });
    };
    InvoiceEditComponent.prototype.getTaxes = function () {
        var _this = this;
        this.taxService.getAll().subscribe(function (data) {
            _this.taxes = data;
            for (var iRow in _this.taxes) {
                if (_this.taxesNameValues[_this.taxes[iRow].id] == undefined) {
                    _this.taxesNameValues[_this.taxes[iRow].id] = [];
                }
                _this.taxesNameValues[_this.taxes[iRow].id] = _this.taxes[iRow];
            }
        });
    };
    InvoiceEditComponent.prototype.addDays = function (date, days) {
        return new Date(date.setDate(date.getDate() + days));
    };
    InvoiceEditComponent.prototype.projectChange = function (event) {
        if (this.editInvoiceForm.value.project_id == undefined || this.editInvoiceForm.value.project_id == null || this.editInvoiceForm.value.project_id == '') {
            this.editInvoiceForm.patchValue({ client_id: null });
            return;
        }
        this.editInvoiceForm.patchValue({ client_id: event.client_id });
    };
    InvoiceEditComponent.prototype.setSelectedItems = function (items) {
        for (var iRow in items) {
            var taxes = [];
            for (var jRow in items[iRow].taxes) {
                taxes.push(items[iRow].taxes[jRow].id);
            }
            items[iRow].taxes = taxes;
            this.itemsArray.push(items[iRow]);
        }
        this.invoices.discount = this.invoice.discount;
        this.invoices.adjustment = this.invoice.adjustment;
        this.getItemTaxes();
    };
    InvoiceEditComponent.prototype.changeItem = function (event) {
        var taxes = [];
        for (var iRow in event.taxes) {
            taxes.push(event.taxes[iRow].id);
        }
        this.itemControl.patchValue({ item_name: event.name });
        this.itemControl.patchValue({ item_description: event.description });
        this.itemControl.patchValue({ quantity: 1 });
        this.itemControl.patchValue({ unit_price: event.price });
        this.itemControl.patchValue({ item_unit: event.unit });
        this.itemControl.patchValue({ taxes: taxes });
    };
    InvoiceEditComponent.prototype.resetChildForm = function () {
        this.itemControl.patchValue({ item_name: null });
        this.itemControl.patchValue({ item_description: null });
        this.itemControl.patchValue({ quantity: null });
        this.itemControl.patchValue({ unit_price: null });
        this.itemControl.patchValue({ item_unit: null });
        this.itemControl.patchValue({ taxes: [] });
    };
    InvoiceEditComponent.prototype.changeDiscountType = function (event) {
        if (event.id == 'not_discount') {
            this.invoices.discount = 0;
        }
        this.getItemTaxes();
    };
    InvoiceEditComponent.prototype.changeDiscountAdjustment = function (event, type) {
        if (type == 'discount') {
            if (this.editInvoiceForm.value.discount_type == "not_discount") {
                this.toastr.error(this.translate.instant('invoices.create.error_messages.message7'), this.translate.instant('invoices.title'));
                return;
            }
            this.invoices.discount = parseFloat(event.target.value);
        }
        else {
            this.invoices.adjustment = parseFloat(event.target.value);
        }
        if (isNaN(this.invoices.discount)) {
            this.invoices.discount = 0;
        }
        if (isNaN(this.invoices.adjustment)) {
            this.invoices.adjustment = 0;
        }
        this.getItemTaxes();
    };
    InvoiceEditComponent.prototype.addItem = function (event) {
        event.preventDefault();
        var item = this.editInvoiceForm.value.item;
        if (item.item_name == null || item.quantity == null || item.unit_price == null) {
            this.toastr.error(this.translate.instant('invoices.create.error_messages.message6'), this.translate.instant('invoices.title'));
            return false;
        }
        this.itemsArray.push(item);
        this.resetChildForm();
        this.invoices.discount = this.editInvoiceForm.value.discount;
        this.invoices.adjustment = this.editInvoiceForm.value.adjustment;
        this.getItemTaxes();
    };
    InvoiceEditComponent.prototype.saveItemDetail = function (index, name, value) {
        this.itemsArray[index][name] = value;
        this.getItemTaxes();
    };
    InvoiceEditComponent.prototype.deleteItem = function (index) {
        this.itemsArray.splice(index, 1);
        this.getItemTaxes();
    };
    InvoiceEditComponent.prototype.getItemTaxes = function () {
        this.itemTaxes = [];
        this.invoices.sub_total = 0;
        this.invoices.total_taxes = 0;
        this.invoices.total = 0;
        this.total_discount = 0.00;
        var totalItemAmount = 0;
        // --
        // Count item taxes
        for (var iRow in this.itemsArray) {
            totalItemAmount = this.itemsArray[iRow].quantity * this.itemsArray[iRow].unit_price;
            for (var jRow in this.itemsArray[iRow].taxes) {
                var totalTaxes = 0;
                if (this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] == undefined) {
                    this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] = 0;
                }
                totalTaxes = (totalItemAmount * this.taxesNameValues[this.itemsArray[iRow].taxes[jRow]].tax_rate) / 100;
                this.invoices.total_taxes += totalTaxes;
                this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] = this.itemTaxes[this.itemsArray[iRow].taxes[jRow]] + totalTaxes;
            }
            // --
            // Count sub total
            this.invoices.sub_total += totalItemAmount;
        }
        // --
        // Count total
        if (this.editInvoiceForm.value.discount_type == "percent") {
            this.total_discount = ((this.invoices.sub_total + this.invoices.total_taxes) * this.invoices.discount) / 100;
        }
        else {
            this.total_discount = this.invoices.discount;
        }
        this.invoices.total = (this.invoices.sub_total + this.invoices.total_taxes - this.total_discount) + this.invoices.adjustment;
    };
    InvoiceEditComponent.prototype.changeRecurrence = function ($event) {
        if ($event === void 0) { $event = []; }
        if (this.editInvoiceForm.value.recurrence) {
            this.editInvoiceForm.get('recurrence_occurrences').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            this.editInvoiceForm.get('recurrence_pattern').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            this.editInvoiceForm.get('recurrence_occurrences').updateValueAndValidity();
            this.editInvoiceForm.get('recurrence_pattern').updateValueAndValidity();
        }
        else {
            this.editInvoiceForm.patchValue({
                recurrence_occurrences: null,
                recurrence_pattern: null
            });
            this.editInvoiceForm.get('recurrence_occurrences').clearValidators();
            this.editInvoiceForm.get('recurrence_pattern').clearValidators();
            this.editInvoiceForm.get('recurrence_occurrences').updateValueAndValidity();
            this.editInvoiceForm.get('recurrence_pattern').updateValueAndValidity();
        }
    };
    InvoiceEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editInvoiceForm.invalid) {
            return;
        }
        if (this.itemsArray.length == 0) {
            this.toastr.error(this.translate.instant('invoices.create.error_messages.message5'), this.translate.instant('invoices.title'));
            return;
        }
        var invoiceObj = {
            "id": this.editInvoiceForm.value.id,
            "project_id": this.editInvoiceForm.value.project_id,
            "client_id": this.editInvoiceForm.value.client_id,
            "invoice_date": this.datepipe.transform(this.editInvoiceForm.value.invoice_date, 'yyyy-MM-dd'),
            "due_date": this.editInvoiceForm.value.due_date,
            "status": this.editInvoiceForm.value.status,
            "reference": this.editInvoiceForm.value.reference,
            "adjustment": this.invoices.adjustment,
            "discount_type": this.editInvoiceForm.value.discount_type,
            "discount": this.invoices.discount,
            "recurrence": this.editInvoiceForm.value.recurrence,
            "recurrence_pattern": this.editInvoiceForm.value.recurrence_pattern,
            "recurrence_occurrences": this.editInvoiceForm.value.recurrence_occurrences,
            "items": this.itemsArray
        };
        this.invoiceService.update(invoiceObj).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('invoices.messages.update'), _this.translate.instant('invoices.title'));
            _this.router.navigate(['invoices']);
        });
    };
    InvoiceEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__["InvoiceService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"] },
        { type: _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
        { type: _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__["ProjectService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] }
    ]; };
    InvoiceEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invoice-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-edit/invoice-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invoice-edit.component.scss */ "./src/app/modules/sales/invoices/pages/invoice-edit/invoice-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__["InvoiceService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"],
            _core_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"],
            _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__["TaxService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_11__["ProjectService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]])
    ], InvoiceEditComponent);
    return InvoiceEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/invoices/pages/invoice-list/invoice-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/pages/invoice-list/invoice-list.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aHVhbmRpbmgvRGVza3RvcC9wcm9qZWN0L2d2L2dyZWVudmlldC1hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9zYWxlcy9pbnZvaWNlcy9wYWdlcy9pbnZvaWNlLWxpc3QvaW52b2ljZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NhbGVzL2ludm9pY2VzL3BhZ2VzL2ludm9pY2UtbGlzdC9pbnZvaWNlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NhbGVzL2ludm9pY2VzL3BhZ2VzL2ludm9pY2UtbGlzdC9pbnZvaWNlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgICBkaXNwbGF5OiBub25lXG59IiwiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/sales/invoices/pages/invoice-list/invoice-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/pages/invoice-list/invoice-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InvoiceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceListComponent", function() { return InvoiceListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/invoice.service */ "./src/app/core/services/invoice.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_14__);















var InvoiceListComponent = /** @class */ (function () {
    function InvoiceListComponent(translate, ngxRolesService, exportAsService, http, toastr, authenticationService, invoiceService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.exportAsService = exportAsService;
        this.http = http;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.invoiceService = invoiceService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dtOptions = {};
        this.invoices = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'invoices_table',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    InvoiceListComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    InvoiceListComponent.prototype.loadDatatable = function () {
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
                    'width': "16%",
                    'target': [0]
                },
                {
                    'sortable': true,
                    'width': "16%",
                    'target': [1]
                },
                {
                    'sortable': true,
                    'width': "16%",
                    'target': [2]
                },
                {
                    'sortable': true,
                    'width': "16%",
                    'target': [3]
                },
                {
                    'sortable': true,
                    'width': "16%",
                    'target': [4]
                },
                {
                    'sortable': true,
                    'width': "15%",
                    'target': [5]
                },
                {
                    'sortable': false,
                    'width': "5%",
                    'target': [6]
                }
            ],
            buttons: [
                {
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
                };
                _this.http.post(_this.apiUrl + '/api/all-invoices', dataTablesParameters, {}).subscribe(function (resp) {
                    that.invoices = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    InvoiceListComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('invoices.title')).subscribe(function () { });
    };
    InvoiceListComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    InvoiceListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    InvoiceListComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.invoices.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    InvoiceListComponent.prototype.getCheckPermission = function (client_id) {
        var role = this.ngxRolesService.getRole('admin');
        if (this.loginUser.id == client_id) {
            return true;
        }
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        return false;
    };
    InvoiceListComponent.prototype.deleteInvoice = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + this.translate.instant('invoices.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.invoiceService.delete(id).subscribe(function (data) {
                    _this.rerender();
                    _this.toastr.success(_this.translate.instant('invoices.messages.delete'), _this.translate.instant('invoices.title'));
                });
            }
        });
    };
    InvoiceListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] },
        { type: _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_10__["InvoiceService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_12__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_12__["DataTableDirective"])
    ], InvoiceListComponent.prototype, "dtElement", void 0);
    InvoiceListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invoice-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-list/invoice-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invoice-list.component.scss */ "./src/app/modules/sales/invoices/pages/invoice-list/invoice-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
            _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_10__["InvoiceService"]])
    ], InvoiceListComponent);
    return InvoiceListComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/invoices/pages/invoice-view/invoice-view.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/pages/invoice-view/invoice-view.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2FsZXMvaW52b2ljZXMvcGFnZXMvaW52b2ljZS12aWV3L2ludm9pY2Utdmlldy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/sales/invoices/pages/invoice-view/invoice-view.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/sales/invoices/pages/invoice-view/invoice-view.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InvoiceViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceViewComponent", function() { return InvoiceViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_invoice_setting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/invoice-setting.service */ "./src/app/core/services/invoice-setting.service.ts");
/* harmony import */ var _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/invoice.service */ "./src/app/core/services/invoice.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/tax.service */ "./src/app/core/services/tax.service.ts");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/setting.service */ "./src/app/core/services/setting.service.ts");
/* harmony import */ var _core_services_payment_method_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core/services/payment-method.service */ "./src/app/core/services/payment-method.service.ts");
/* harmony import */ var _payments_components_create_payment_create_payment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../payments/components/create-payment/create-payment.component */ "./src/app/modules/sales/payments/components/create-payment/create-payment.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");

















var InvoiceViewComponent = /** @class */ (function () {
    function InvoiceViewComponent(translate, ngxRolesService, modalService, router, route, toastr, exportAsService, invoiceService, settingService, invoiceSettingService, taxService, helperService, authenticationService, paymentMethodService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.exportAsService = exportAsService;
        this.invoiceService = invoiceService;
        this.settingService = settingService;
        this.invoiceSettingService = invoiceSettingService;
        this.taxService = taxService;
        this.helperService = helperService;
        this.authenticationService = authenticationService;
        this.paymentMethodService = paymentMethodService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].apiUrl;
        this.itemTaxes = [];
        this.taxesNameValues = [];
        this.isPageLoad = false;
        this.paymentMethod = 'paypal';
        this.isDownloadable = false;
        this.invoices = {
            sub_total: 0,
            total_taxes: 0,
            total: 0,
            total_due_amount: 0
        };
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'invoice_table',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.getById(params.get('id'), true);
        });
    }
    InvoiceViewComponent.prototype.ngOnInit = function () {
        this.getInvoiceSettings();
        this.getPaymentGatewaySettings();
    };
    InvoiceViewComponent.prototype.getById = function (invoiceId, isLoad) {
        var _this = this;
        if (isLoad === void 0) { isLoad = false; }
        this.invoiceService.getById(invoiceId).subscribe(function (data) {
            _this.invoice = data;
            if (isLoad) {
                _this.getPaymentMethods();
                _this.getInvoiceAmount();
                _this.getCheckPermission();
            }
        });
    };
    InvoiceViewComponent.prototype.getCheckPermission = function () {
        var role = this.ngxRolesService.getRole('admin');
        if (this.loginUser.id == this.invoice.client_id) {
            this.isDownloadable = true;
        }
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            this.isDownloadable = true;
        }
    };
    InvoiceViewComponent.prototype.getInvoiceAmount = function () {
        for (var iRow in this.invoice.payments) {
            this.invoices.total_due_amount += this.invoice.payments[iRow].amount;
        }
    };
    InvoiceViewComponent.prototype.getInvoiceSettings = function () {
        var _this = this;
        this.invoiceSettingService.getAll()
            .subscribe(function (data) {
            _this.invoiceSettings = data;
        });
    };
    InvoiceViewComponent.prototype.getPaymentGatewaySettings = function () {
        var _this = this;
        this.settingService.getPaymentGatewaySettings()
            .subscribe(function (data) {
            _this.gatewaySettings = data;
        });
    };
    InvoiceViewComponent.prototype.getPaymentMethods = function () {
        var _this = this;
        this.paymentMethodService.getAll()
            .subscribe(function (data) {
            _this.paymentModes = data;
            _this.getTaxes();
        });
    };
    InvoiceViewComponent.prototype.getTaxes = function () {
        var _this = this;
        this.taxService.getAll().subscribe(function (data) {
            _this.taxes = data;
            for (var iRow in _this.taxes) {
                if (_this.taxesNameValues[_this.taxes[iRow].id] == undefined) {
                    _this.taxesNameValues[_this.taxes[iRow].id] = [];
                }
                _this.taxesNameValues[_this.taxes[iRow].id] = _this.taxes[iRow];
            }
            _this.getItemTaxes();
        });
    };
    InvoiceViewComponent.prototype.getItemTaxes = function () {
        this.invoices.sub_total = 0;
        this.invoices.total_taxes = 0;
        this.invoices.total = 0;
        var totalItemAmount = 0;
        var total_discount = 0;
        // --
        // Count item taxes
        for (var iRow in this.invoice.items) {
            totalItemAmount = this.invoice.items[iRow].quantity * this.invoice.items[iRow].unit_price;
            for (var jRow in this.invoice.items[iRow].taxes) {
                var totalTaxes = 0;
                if (this.itemTaxes[this.invoice.items[iRow].taxes[jRow].id] == undefined) {
                    this.itemTaxes[this.invoice.items[iRow].taxes[jRow].id] = 0;
                }
                totalTaxes = (totalItemAmount * this.invoice.items[iRow].taxes[jRow].tax_rate) / 100;
                this.invoices.total_taxes += totalTaxes;
                this.itemTaxes[this.invoice.items[iRow].taxes[jRow].id] = this.itemTaxes[this.invoice.items[iRow].taxes[jRow].id] + totalTaxes;
            }
            // --
            // Count sub total
            this.invoices.sub_total += totalItemAmount;
        }
        // --
        // Count total
        this.invoices.total = (this.invoices.sub_total + this.invoices.total_taxes - this.invoice.total_discount) + this.invoice.adjustment;
        this.isPageLoad = true;
    };
    InvoiceViewComponent.prototype.openPaymentCreateModal = function () {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered animated fadeIn",
            initialState: {
                invoice: this.invoice
            }
        };
        this.modalRef = this.modalService.show(_payments_components_create_payment_create_payment_component__WEBPACK_IMPORTED_MODULE_15__["CreatePaymentComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getById(_this.invoice.id);
        });
    };
    InvoiceViewComponent.prototype.getPaymentSuccess = function () {
        this.getById(this.invoice.id);
    };
    InvoiceViewComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"] },
        { type: _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_10__["InvoiceService"] },
        { type: _core_services_setting_service__WEBPACK_IMPORTED_MODULE_13__["SettingService"] },
        { type: _core_services_invoice_setting_service__WEBPACK_IMPORTED_MODULE_9__["InvoiceSettingService"] },
        { type: _core_services_tax_service__WEBPACK_IMPORTED_MODULE_12__["TaxService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
        { type: _core_services_payment_method_service__WEBPACK_IMPORTED_MODULE_14__["PaymentMethodService"] }
    ]; };
    InvoiceViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-view',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invoice-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sales/invoices/pages/invoice-view/invoice-view.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invoice-view.component.scss */ "./src/app/modules/sales/invoices/pages/invoice-view/invoice-view.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsService"],
            _core_services_invoice_service__WEBPACK_IMPORTED_MODULE_10__["InvoiceService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_13__["SettingService"],
            _core_services_invoice_setting_service__WEBPACK_IMPORTED_MODULE_9__["InvoiceSettingService"],
            _core_services_tax_service__WEBPACK_IMPORTED_MODULE_12__["TaxService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
            _core_services_payment_method_service__WEBPACK_IMPORTED_MODULE_14__["PaymentMethodService"]])
    ], InvoiceViewComponent);
    return InvoiceViewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-sales-invoices-invoices-module.js.map