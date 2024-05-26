(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/angular-checklist/dist/directives/checklist.directive.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/angular-checklist/dist/directives/checklist.directive.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ChecklistDirective = /** @class */ (function () {
    function ChecklistDirective() {
        this.maxSelectedItems = -1;
        this.checklistChange = new core_1.EventEmitter();
    }
    ////////////
    ChecklistDirective.prototype.ngOnChanges = function () {
        var checklist = this.checklist || [];
        this.isChecked = checklist.indexOf(this.checklistValue) >= 0;
    };
    ChecklistDirective.prototype.triggerOnChange = function ($event) {
        var target = $event.target;
        var updatedList;
        var checklist = this.checklist || [];
        if (target && target.checked) {
            if (this.maxSelectedItems === -1 || checklist.length < this.maxSelectedItems) {
                updatedList = checklist.concat([this.checklistValue]);
                this.checklistChange.emit(updatedList);
            }
            else {
                target.checked = false;
            }
        }
        else {
            var i = checklist.indexOf(this.checklistValue);
            updatedList = checklist.slice(0, i).concat(checklist.slice(i + 1));
            this.checklistChange.emit(updatedList);
        }
    };
    ChecklistDirective.decorators = [
        { type: core_1.Directive, args: [{
                    host: {
                        '(change)': 'triggerOnChange($event)',
                        '[checked]': 'isChecked',
                    },
                    selector: '[checklist]',
                },] },
    ];
    /** @nocollapse */
    ChecklistDirective.ctorParameters = function () { return []; };
    ChecklistDirective.propDecorators = {
        'checklist': [{ type: core_1.Input },],
        'checklistValue': [{ type: core_1.Input },],
        'maxSelectedItems': [{ type: core_1.Input },],
        'checklistChange': [{ type: core_1.Output },],
    };
    return ChecklistDirective;
}());
exports.ChecklistDirective = ChecklistDirective;
//# sourceMappingURL=checklist.directive.js.map

/***/ }),

/***/ "./node_modules/angular-checklist/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/angular-checklist/dist/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var checklist_directive_1 = __webpack_require__(/*! ./directives/checklist.directive */ "./node_modules/angular-checklist/dist/directives/checklist.directive.js");
var ChecklistModule = /** @class */ (function () {
    function ChecklistModule() {
    }
    ChecklistModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        checklist_directive_1.ChecklistDirective,
                    ],
                    exports: [
                        checklist_directive_1.ChecklistDirective,
                    ],
                    imports: [
                        common_1.CommonModule,
                    ],
                },] },
    ];
    /** @nocollapse */
    ChecklistModule.ctorParameters = function () { return []; };
    return ChecklistModule;
}());
exports.ChecklistModule = ChecklistModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js":
/*!*************************************************************!*\
  !*** ./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js ***!
  \*************************************************************/
/*! exports provided: OrderModule, OrderPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPipe", function() { return OrderPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var OrderPipe = /** @class */ (function () {
    function OrderPipe() {
    }
    OrderPipe_1 = OrderPipe;
    /**
     * Check if a value is a string
     *
     * @param value
     */
    OrderPipe.isString = function (value) {
        return typeof value === "string" || value instanceof String;
    };
    /**
     * Sorts values ignoring the case
     *
     * @param a
     * @param b
     */
    OrderPipe.caseInsensitiveSort = function (a, b) {
        if (OrderPipe_1.isString(a) && OrderPipe_1.isString(b)) {
            return a.localeCompare(b);
        }
        return OrderPipe_1.defaultCompare(a, b);
    };
    /**
     * Default compare method
     *
     * @param a
     * @param b
     */
    OrderPipe.defaultCompare = function (a, b) {
        if (a === b) {
            return 0;
        }
        if (a == null) {
            return 1;
        }
        if (b == null) {
            return -1;
        }
        return a > b ? 1 : -1;
    };
    /**
     * Parse expression, split into items
     * @param expression
     * @returns {string[]}
     */
    OrderPipe.parseExpression = function (expression) {
        expression = expression.replace(/\[(\w+)\]/g, ".$1");
        expression = expression.replace(/^\./, "");
        return expression.split(".");
    };
    /**
     * Get value by expression
     *
     * @param object
     * @param expression
     * @returns {any}
     */
    OrderPipe.getValue = function (object, expression) {
        for (var i = 0, n = expression.length; i < n; ++i) {
            if (!object) {
                return;
            }
            var k = expression[i];
            if (!(k in object)) {
                return;
            }
            if (typeof object[k] === "function") {
                object = object[k]();
            }
            else {
                object = object[k];
            }
        }
        return object;
    };
    /**
     * Set value by expression
     *
     * @param object
     * @param value
     * @param expression
     */
    OrderPipe.setValue = function (object, value, expression) {
        var i;
        for (i = 0; i < expression.length - 1; i++) {
            object = object[expression[i]];
        }
        object[expression[i]] = value;
    };
    OrderPipe.prototype.transform = function (value, expression, reverse, isCaseInsensitive, comparator) {
        if (isCaseInsensitive === void 0) { isCaseInsensitive = false; }
        if (!value) {
            return value;
        }
        if (Array.isArray(expression)) {
            return this.multiExpressionTransform(value, expression, reverse, isCaseInsensitive, comparator);
        }
        if (Array.isArray(value)) {
            return this.sortArray(value.slice(), expression, reverse, isCaseInsensitive, comparator);
        }
        if (typeof value === "object") {
            return this.transformObject(Object.assign({}, value), expression, reverse, isCaseInsensitive, comparator);
        }
        return value;
    };
    /**
     * Sort array
     *
     * @param value
     * @param expression
     * @param reverse
     * @param isCaseInsensitive
     * @param comparator
     * @returns {any[]}
     */
    OrderPipe.prototype.sortArray = function (value, expression, reverse, isCaseInsensitive, comparator) {
        var isDeepLink = expression && expression.indexOf(".") !== -1;
        if (isDeepLink) {
            expression = OrderPipe_1.parseExpression(expression);
        }
        var compareFn;
        if (comparator && typeof comparator === "function") {
            compareFn = comparator;
        }
        else {
            compareFn = isCaseInsensitive
                ? OrderPipe_1.caseInsensitiveSort
                : OrderPipe_1.defaultCompare;
        }
        var array = value.sort(function (a, b) {
            if (!expression) {
                return compareFn(a, b);
            }
            if (!isDeepLink) {
                if (a && b) {
                    return compareFn(a[expression], b[expression]);
                }
                return compareFn(a, b);
            }
            return compareFn(OrderPipe_1.getValue(a, expression), OrderPipe_1.getValue(b, expression));
        });
        if (reverse) {
            return array.reverse();
        }
        return array;
    };
    /**
     * Transform Object
     *
     * @param value
     * @param expression
     * @param reverse
     * @param isCaseInsensitive
     * @param comparator
     * @returns {any[]}
     */
    OrderPipe.prototype.transformObject = function (value, expression, reverse, isCaseInsensitive, comparator) {
        var parsedExpression = OrderPipe_1.parseExpression(expression);
        var lastPredicate = parsedExpression.pop();
        var oldValue = OrderPipe_1.getValue(value, parsedExpression);
        if (!Array.isArray(oldValue)) {
            parsedExpression.push(lastPredicate);
            lastPredicate = null;
            oldValue = OrderPipe_1.getValue(value, parsedExpression);
        }
        if (!oldValue) {
            return value;
        }
        OrderPipe_1.setValue(value, this.transform(oldValue, lastPredicate, reverse, isCaseInsensitive), parsedExpression);
        return value;
    };
    /**
     * Apply multiple expressions
     *
     * @param value
     * @param {any[]} expressions
     * @param {boolean} reverse
     * @param {boolean} isCaseInsensitive
     * @param {Function} comparator
     * @returns {any}
     */
    OrderPipe.prototype.multiExpressionTransform = function (value, expressions, reverse, isCaseInsensitive, comparator) {
        var _this = this;
        if (isCaseInsensitive === void 0) { isCaseInsensitive = false; }
        return expressions.reverse().reduce(function (result, expression) {
            return _this.transform(result, expression, reverse, isCaseInsensitive, comparator);
        }, value);
    };
    var OrderPipe_1;
    OrderPipe = OrderPipe_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "orderBy",
            pure: false
        })
    ], OrderPipe);
    return OrderPipe;
}());

var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [OrderPipe],
            exports: [OrderPipe],
            providers: [OrderPipe]
        })
    ], OrderModule);
    return OrderModule;
}());


//# sourceMappingURL=ngx-order-pipe.js.map


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/app/core/helpers/custom-event-title-formatter.provider.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/helpers/custom-event-title-formatter.provider.ts ***!
  \***********************************************************************/
/*! exports provided: CustomEventTitleFormatter, CustomDateFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEventTitleFormatter", function() { return CustomEventTitleFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDateFormatter", function() { return CustomDateFormatter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var CustomEventTitleFormatter = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomEventTitleFormatter, _super);
    function CustomEventTitleFormatter(locale) {
        var _this = _super.call(this) || this;
        _this.locale = locale;
        return _this;
    }
    // you can override any of the methods defined in the parent class
    CustomEventTitleFormatter.prototype.month = function (event) {
        return "" + event.title;
    };
    CustomEventTitleFormatter.prototype.week = function (event) {
        return "<b>" + new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"](this.locale).transform(event.start, 'h:m a', this.locale) + "</b> " + event.title;
    };
    CustomEventTitleFormatter.prototype.day = function (event) {
        return "<b>" + new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"](this.locale).transform(event.start, 'h:m a', this.locale) + "</b> " + event.title;
    };
    CustomEventTitleFormatter.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] }
    ]; };
    CustomEventTitleFormatter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], CustomEventTitleFormatter);
    return CustomEventTitleFormatter;
}(angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarEventTitleFormatter"]));

var CustomDateFormatter = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomDateFormatter, _super);
    function CustomDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // you can override any of the methods defined in the parent class
    CustomDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"](locale).transform(date, 'HH:mm', locale);
    };
    CustomDateFormatter.prototype.weekViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.dayViewHour({ date: date, locale: locale });
    };
    return CustomDateFormatter;
}(angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarDateFormatter"]));



/***/ }),

/***/ "./src/app/core/services/defect.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/defect.service.ts ***!
  \*************************************************/
/*! exports provided: DefectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectService", function() { return DefectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var DefectService = /** @class */ (function () {
    function DefectService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    DefectService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/defect");
    };
    DefectService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/defect/" + id);
    };
    DefectService.prototype.create = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect", defect);
    };
    DefectService.prototype.update = function (defect) {
        return this.http.put(this.apiUrl + "/api/defect/" + defect.id, defect);
    };
    DefectService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/defect/" + id);
    };
    DefectService.prototype.updateNotes = function (defect) {
        return this.http.put(this.apiUrl + "/api/defect/notes/" + defect.id, defect);
    };
    DefectService.prototype.changeStatus = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect/" + defect.id + "/change-status", { "status": defect.status });
    };
    DefectService.prototype.changeSeverity = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect/" + defect.id + "/change-severity", { "severity": defect.severity });
    };
    DefectService.prototype.getDefectPermission = function (id, type) {
        return this.http.get(this.apiUrl + "/api/defect/" + id + "/permission/" + type, {});
    };
    DefectService.prototype.getDefectForKanban = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect/kanban", defect);
    };
    DefectService.prototype.updateKanbanStatusList = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect/update-kanban", defect);
    };
    DefectService.prototype.getDefectForCalendar = function (obj) {
        if (obj === void 0) { obj = {}; }
        return this.http.post(this.apiUrl + "/api/defect/calendar", obj);
    };
    DefectService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DefectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DefectService);
    return DefectService;
}());



/***/ }),

/***/ "./src/app/core/services/department.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/department.service.ts ***!
  \*****************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var DepartmentService = /** @class */ (function () {
    function DepartmentService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    DepartmentService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/departments");
    };
    DepartmentService.prototype.getDepartmentRoles = function () {
        return this.http.get(this.apiUrl + "/api/get-department-roles");
    };
    DepartmentService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/departments/" + id);
    };
    DepartmentService.prototype.create = function (department) {
        return this.http.post(this.apiUrl + "/api/departments", department);
    };
    DepartmentService.prototype.update = function (department) {
        return this.http.put(this.apiUrl + "/api/departments/" + department.id, department);
    };
    DepartmentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/departments/" + id);
    };
    DepartmentService.prototype.deleteDepartmentRole = function (id, roleId) {
        return this.http.delete(this.apiUrl + "/api/departments/" + id + "/" + roleId);
    };
    DepartmentService.prototype.getDepartmentDetail = function (id, roleId) {
        return this.http.get(this.apiUrl + "/api/departments/" + id + "/" + roleId);
    };
    DepartmentService.prototype.updateDepartmentDetail = function (id, roleId, menu) {
        return this.http.put(this.apiUrl + "/api/departments/" + id + "/" + roleId, menu);
    };
    DepartmentService.prototype.getDepartmentsClientsRoles = function () {
        return this.http.get(this.apiUrl + "/api/departments/clients-roles");
    };
    DepartmentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DepartmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ }),

/***/ "./src/app/core/services/estimate-setting.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/services/estimate-setting.service.ts ***!
  \***********************************************************/
/*! exports provided: EstimateSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimateSettingService", function() { return EstimateSettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var EstimateSettingService = /** @class */ (function () {
    function EstimateSettingService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    EstimateSettingService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/estimate-setting");
    };
    EstimateSettingService.prototype.create = function (params) {
        return this.http.post(this.apiUrl + "/api/estimate-setting", params);
    };
    EstimateSettingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EstimateSettingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EstimateSettingService);
    return EstimateSettingService;
}());



/***/ }),

/***/ "./src/app/core/services/holiday.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/holiday.service.ts ***!
  \**************************************************/
/*! exports provided: HolidayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayService", function() { return HolidayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var HolidayService = /** @class */ (function () {
    function HolidayService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    HolidayService.prototype.getAll = function (year) {
        return this.http.get(this.apiUrl + "/api/holidays?year=" + year);
    };
    HolidayService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/holidays/" + id);
    };
    HolidayService.prototype.create = function (holiday) {
        return this.http.post(this.apiUrl + "/api/holidays", holiday);
    };
    HolidayService.prototype.update = function (holiday) {
        return this.http.put(this.apiUrl + "/api/holidays/" + holiday.id, holiday);
    };
    HolidayService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/holidays/" + id);
    };
    HolidayService.prototype.yearAllHolidays = function (year) {
        return this.http.post(this.apiUrl + "/api/all-year-holidays", { year: year });
    };
    HolidayService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HolidayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HolidayService);
    return HolidayService;
}());



/***/ }),

/***/ "./src/app/core/services/incident.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/incident.service.ts ***!
  \***************************************************/
/*! exports provided: IncidentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentService", function() { return IncidentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var IncidentService = /** @class */ (function () {
    function IncidentService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    IncidentService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/incident");
    };
    IncidentService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/incident/" + id);
    };
    IncidentService.prototype.create = function (incident) {
        return this.http.post(this.apiUrl + "/api/incident", incident);
    };
    IncidentService.prototype.update = function (incident) {
        return this.http.put(this.apiUrl + "/api/incident/" + incident.id, incident);
    };
    IncidentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/incident/" + id);
    };
    IncidentService.prototype.updateNotes = function (incident) {
        return this.http.put(this.apiUrl + "/api/incident/notes/" + incident.id, incident);
    };
    IncidentService.prototype.changeStatus = function (incident) {
        return this.http.post(this.apiUrl + "/api/incident/" + incident.id + "/change-status", { "status": incident.status });
    };
    IncidentService.prototype.changeSeverity = function (incident) {
        return this.http.post(this.apiUrl + "/api/incident/" + incident.id + "/change-severity", { "priority": incident.priority });
    };
    IncidentService.prototype.getIncidentPermission = function (id, type) {
        return this.http.get(this.apiUrl + "/api/incident/" + id + "/permission/" + type, {});
    };
    IncidentService.prototype.getIncidentForKanban = function (incident) {
        return this.http.post(this.apiUrl + "/api/incident/kanban", incident);
    };
    IncidentService.prototype.updateKanbanStatusList = function (incident) {
        return this.http.post(this.apiUrl + "/api/incident/update-kanban", incident);
    };
    IncidentService.prototype.getIncidentForCalendar = function (obj) {
        if (obj === void 0) { obj = {}; }
        return this.http.post(this.apiUrl + "/api/incident/calendar", obj);
    };
    IncidentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    IncidentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IncidentService);
    return IncidentService;
}());



/***/ }),

/***/ "./src/app/core/services/item.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/item.service.ts ***!
  \***********************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ItemService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/items");
    };
    ItemService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/items/" + id);
    };
    ItemService.prototype.create = function (item) {
        return this.http.post(this.apiUrl + "/api/items", item);
    };
    ItemService.prototype.update = function (item) {
        return this.http.put(this.apiUrl + "/api/items/" + item.id, item);
    };
    ItemService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/items/" + id);
    };
    ItemService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./src/app/core/services/provider.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/provider.service.ts ***!
  \***************************************************/
/*! exports provided: ProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderService", function() { return ProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ProviderService = /** @class */ (function () {
    function ProviderService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ProviderService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/providers");
    };
    ProviderService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/providers/" + id);
    };
    ProviderService.prototype.create = function (providers) {
        return this.http.post(this.apiUrl + "/api/providers", providers);
    };
    ProviderService.prototype.update = function (providers) {
        return this.http.put(this.apiUrl + "/api/providers/" + providers.id, providers);
    };
    ProviderService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/providers/" + id);
    };
    ProviderService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProviderService);
    return ProviderService;
}());



/***/ }),

/***/ "./src/app/core/services/role.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/role.service.ts ***!
  \***********************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    RoleService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/roles");
    };
    RoleService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/roles/" + id);
    };
    RoleService.prototype.create = function (role) {
        return this.http.post(this.apiUrl + "/api/roles", role);
    };
    RoleService.prototype.update = function (role) {
        return this.http.put(this.apiUrl + "/api/roles/" + role.id, role);
    };
    RoleService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/roles/" + id);
    };
    RoleService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/core/services/task.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/task.service.ts ***!
  \***********************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    TaskService.prototype.create = function (task) {
        return this.http.post(this.apiUrl + "/api/tasks", task);
    };
    TaskService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/tasks");
    };
    TaskService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/tasks/" + id);
    };
    TaskService.prototype.update = function (task) {
        return this.http.put(this.apiUrl + "/api/tasks/" + task.id, task);
    };
    TaskService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/tasks/" + id);
    };
    TaskService.prototype.getTaskActivity = function (id) {
        return this.http.get(this.apiUrl + "/api/activities/Task/" + id);
    };
    TaskService.prototype.changeStatus = function (task) {
        return this.http.post(this.apiUrl + "/api/tasks/" + task.id + "/change-status", { "status": task.status });
    };
    TaskService.prototype.changePriority = function (task) {
        return this.http.post(this.apiUrl + "/api/tasks/" + task.id + "/change-priority", { "priority": task.priority });
    };
    TaskService.prototype.updateNotes = function (task) {
        return this.http.put(this.apiUrl + "/api/tasks/notes/" + task.id, task);
    };
    // getGeneratedId(){
    //     return this.http.get(`${this.apiUrl}/api/tasks/get-generated-id`);
    // }
    TaskService.prototype.getParentTask = function (id) {
        return this.http.get(this.apiUrl + "/api/tasks/" + id + "/parent-task", {});
    };
    // getsubTaskCountByParent(id: number) {
    //     return this.http.get(`${this.apiUrl}/api/tasks/${id}/subtask-count-by-parent`,{}); 
    // }
    TaskService.prototype.getTaskForTaskBoard = function (params) {
        return this.http.post(this.apiUrl + "/api/taskboard", params);
    };
    TaskService.prototype.updateStatusList = function (task) {
        return this.http.post(this.apiUrl + "/api/tasks/status-list", task);
    };
    TaskService.prototype.getTaskPermission = function (id, type) {
        return this.http.get(this.apiUrl + "/api/tasks/" + id + "/permission/" + type, {});
    };
    TaskService.prototype.getCalendarTasks = function () {
        return this.http.get(this.apiUrl + "/api/tasks/calendar");
    };
    TaskService.prototype.convertSprintTaskToTask = function (task) {
        return this.http.post(this.apiUrl + "/api/tasks/convertsprinttask-to-task", task);
    };
    TaskService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/core/services/tax.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/tax.service.ts ***!
  \**********************************************/
/*! exports provided: TaxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxService", function() { return TaxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var TaxService = /** @class */ (function () {
    function TaxService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    TaxService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/taxes");
    };
    TaxService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/taxes/" + id);
    };
    TaxService.prototype.create = function (tax) {
        return this.http.post(this.apiUrl + "/api/taxes", tax);
    };
    TaxService.prototype.update = function (tax) {
        return this.http.put(this.apiUrl + "/api/taxes/" + tax.id, tax);
    };
    TaxService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/taxes/" + id);
    };
    TaxService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TaxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaxService);
    return TaxService;
}());



/***/ }),

/***/ "./src/app/core/services/team.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/team.service.ts ***!
  \***********************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var TeamService = /** @class */ (function () {
    function TeamService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    TeamService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/teams");
    };
    TeamService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/teams/" + id);
    };
    TeamService.prototype.create = function (team) {
        return this.http.post(this.apiUrl + "/api/teams", team);
    };
    TeamService.prototype.update = function (team) {
        return this.http.put(this.apiUrl + "/api/teams/" + team.id, team);
    };
    TeamService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/teams/" + id);
    };
    TeamService.prototype.getTeamForTeamBoard = function () {
        return this.http.get(this.apiUrl + "/api/teams/teamboard");
    };
    TeamService.prototype.import = function (importTeams) {
        return this.http.post(this.apiUrl + "/api/teams/import", importTeams);
    };
    TeamService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TeamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TeamService);
    return TeamService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map