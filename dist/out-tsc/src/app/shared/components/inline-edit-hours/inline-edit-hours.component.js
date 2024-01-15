import { __decorate, __metadata } from "tslib";
import { Component, Input, EventEmitter, Output, ViewChild, Renderer } from '@angular/core';
var InlineEditHoursComponent = /** @class */ (function () {
    function InlineEditHoursComponent(renderer) {
        this.renderer = renderer;
        this.isEditView = false;
        this.updateValue = new EventEmitter();
    }
    InlineEditHoursComponent.prototype.ngOnInit = function () { };
    InlineEditHoursComponent.prototype.showEditable = function () {
        var _this = this;
        this.value = this.fieldValue;
        this.isEditView = true;
        this.docEditUnlisten = this.renderer.listenGlobal('document', 'click', function (event) {
            if (!_this.container.nativeElement.contains(event.target)) {
                _this.showDetail();
            }
        });
    };
    InlineEditHoursComponent.prototype.save = function () {
        this.updateValue.emit(this.value);
    };
    InlineEditHoursComponent.prototype.showDetail = function () {
        this.isEditView = false;
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditHoursComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditHoursComponent.prototype, "elementFor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditHoursComponent.prototype, "fieldValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], InlineEditHoursComponent.prototype, "isRequired", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditHoursComponent.prototype, "permission", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], InlineEditHoursComponent.prototype, "updateValue", void 0);
    __decorate([
        ViewChild('container', { static: true }),
        __metadata("design:type", Object)
    ], InlineEditHoursComponent.prototype, "container", void 0);
    InlineEditHoursComponent = __decorate([
        Component({
            selector: 'inline-edit-hours',
            templateUrl: './inline-edit-hours.component.html',
            styleUrls: ['./inline-edit-hours.component.scss']
        }),
        __metadata("design:paramtypes", [Renderer])
    ], InlineEditHoursComponent);
    return InlineEditHoursComponent;
}());
export { InlineEditHoursComponent };
//# sourceMappingURL=inline-edit-hours.component.js.map