import { __decorate, __metadata } from "tslib";
import { Component, Input, EventEmitter, Output, ViewChild, Renderer } from '@angular/core';
import { DatePipe } from '@angular/common';
var InlineEditDateComponent = /** @class */ (function () {
    function InlineEditDateComponent(renderer, datepipe) {
        this.renderer = renderer;
        this.datepipe = datepipe;
        this.isEditView = false;
        this.updateValue = new EventEmitter();
        this.changeStartDate = new EventEmitter();
    }
    InlineEditDateComponent.prototype.ngOnInit = function () {
        if (this.mindate) {
            this.mindate = new Date(this.mindate);
        }
    };
    InlineEditDateComponent.prototype.showEditable = function () {
        var _this = this;
        this.value = this.fieldValue;
        this.isEditView = true;
        this.docEditUnlisten = this.renderer.listenGlobal('document', 'click', function (event) {
            if (!_this.container.nativeElement.contains(event.target)) {
            }
        });
    };
    InlineEditDateComponent.prototype.save = function () {
        this.fieldValue = new Date(this.fieldValue);
        var latest_date = this.datepipe.transform(this.fieldValue, 'yyyy-MM-dd');
        this.isEditView = false;
        this.updateValue.emit(latest_date);
    };
    InlineEditDateComponent.prototype.showDetail = function () {
        this.isEditView = false;
    };
    InlineEditDateComponent.prototype.startDateChange = function ($event) {
        this.changeStartDate.emit($event);
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditDateComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditDateComponent.prototype, "elementFor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Date)
    ], InlineEditDateComponent.prototype, "fieldValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], InlineEditDateComponent.prototype, "isRequired", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], InlineEditDateComponent.prototype, "datepickerConfigs", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditDateComponent.prototype, "format", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Date)
    ], InlineEditDateComponent.prototype, "mindate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditDateComponent.prototype, "permission", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], InlineEditDateComponent.prototype, "updateValue", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], InlineEditDateComponent.prototype, "changeStartDate", void 0);
    __decorate([
        ViewChild('container', { static: true }),
        __metadata("design:type", Object)
    ], InlineEditDateComponent.prototype, "container", void 0);
    InlineEditDateComponent = __decorate([
        Component({
            selector: 'inline-edit-date',
            templateUrl: './inline-edit-date.component.html',
            styleUrls: ['./inline-edit-date.component.scss']
        }),
        __metadata("design:paramtypes", [Renderer, DatePipe])
    ], InlineEditDateComponent);
    return InlineEditDateComponent;
}());
export { InlineEditDateComponent };
//# sourceMappingURL=inline-edit-date.component.js.map