import { __decorate, __metadata } from "tslib";
import { Component, Input, EventEmitter, Output, ViewChild, Renderer } from '@angular/core';
var InlineEditTextareaComponent = /** @class */ (function () {
    function InlineEditTextareaComponent(renderer) {
        this.renderer = renderer;
        this.isEditView = false;
        this.updateValue = new EventEmitter();
    }
    InlineEditTextareaComponent.prototype.ngOnInit = function () {
    };
    InlineEditTextareaComponent.prototype.showEditable = function () {
        var _this = this;
        this.value = this.fieldValue;
        this.isEditView = true;
        this.docEditUnlisten = this.renderer.listenGlobal('document', 'click', function (event) {
            if (!_this.container.nativeElement.contains(event.target)) {
                _this.showDetail();
            }
        });
    };
    InlineEditTextareaComponent.prototype.save = function () {
        this.updateValue.emit(this.value);
    };
    InlineEditTextareaComponent.prototype.showDetail = function () {
        this.isEditView = false;
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditTextareaComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditTextareaComponent.prototype, "elementFor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditTextareaComponent.prototype, "fieldValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], InlineEditTextareaComponent.prototype, "isRequired", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditTextareaComponent.prototype, "permission", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], InlineEditTextareaComponent.prototype, "updateValue", void 0);
    __decorate([
        ViewChild('container', { static: true }),
        __metadata("design:type", Object)
    ], InlineEditTextareaComponent.prototype, "container", void 0);
    InlineEditTextareaComponent = __decorate([
        Component({
            selector: 'inline-edit-textarea',
            templateUrl: './inline-edit-textarea.component.html',
            styleUrls: ['./inline-edit-textarea.component.scss']
        }),
        __metadata("design:paramtypes", [Renderer])
    ], InlineEditTextareaComponent);
    return InlineEditTextareaComponent;
}());
export { InlineEditTextareaComponent };
//# sourceMappingURL=inline-edit-textarea.component.js.map