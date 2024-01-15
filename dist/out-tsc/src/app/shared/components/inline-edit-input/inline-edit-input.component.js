import { __decorate, __metadata } from "tslib";
import { Component, Input, EventEmitter, Output, ViewChild, Renderer } from '@angular/core';
var InlineEditInputComponent = /** @class */ (function () {
    function InlineEditInputComponent(renderer) {
        this.renderer = renderer;
        this.isEditView = false;
        this.updateValue = new EventEmitter();
    }
    InlineEditInputComponent.prototype.ngOnInit = function () { };
    InlineEditInputComponent.prototype.showEditable = function () {
        var _this = this;
        this.value = this.fieldValue;
        this.isEditView = true;
        this.docEditUnlisten = this.renderer.listenGlobal('document', 'click', function (event) {
            if (!_this.container.nativeElement.contains(event.target)) {
                _this.showDetail();
            }
        });
    };
    InlineEditInputComponent.prototype.save = function () {
        this.updateValue.emit(this.value);
    };
    InlineEditInputComponent.prototype.showDetail = function () {
        this.isEditView = false;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], InlineEditInputComponent.prototype, "type", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditInputComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditInputComponent.prototype, "elementFor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditInputComponent.prototype, "fieldValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], InlineEditInputComponent.prototype, "isRequired", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditInputComponent.prototype, "pattern", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], InlineEditInputComponent.prototype, "minLength", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], InlineEditInputComponent.prototype, "maxLength", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditInputComponent.prototype, "permission", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], InlineEditInputComponent.prototype, "updateValue", void 0);
    __decorate([
        ViewChild('container', { static: true }),
        __metadata("design:type", Object)
    ], InlineEditInputComponent.prototype, "container", void 0);
    InlineEditInputComponent = __decorate([
        Component({
            selector: 'inline-edit-input',
            templateUrl: './inline-edit-input.component.html',
            styleUrls: ['./inline-edit-input.component.scss']
        }),
        __metadata("design:paramtypes", [Renderer])
    ], InlineEditInputComponent);
    return InlineEditInputComponent;
}());
export { InlineEditInputComponent };
//# sourceMappingURL=inline-edit-input.component.js.map