import { __decorate, __metadata } from "tslib";
import { Component, Input, EventEmitter, Output, ViewChild, Renderer } from '@angular/core';
var InlineEditTextEditorComponent = /** @class */ (function () {
    function InlineEditTextEditorComponent(renderer) {
        this.renderer = renderer;
        this.isEditView = false;
        this.updateValue = new EventEmitter();
    }
    InlineEditTextEditorComponent.prototype.ngOnInit = function () { };
    InlineEditTextEditorComponent.prototype.showEditable = function () {
        var _this = this;
        this.value = this.fieldValue;
        this.isEditView = true;
        this.docEditUnlisten = this.renderer.listenGlobal('document', 'click', function (event) {
            if (!_this.container.nativeElement.contains(event.target)) {
                _this.showDetail();
            }
        });
    };
    InlineEditTextEditorComponent.prototype.save = function () {
        this.isEditView = false;
        this.updateValue.emit(this.value);
    };
    InlineEditTextEditorComponent.prototype.showDetail = function () {
        this.isEditView = false;
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditTextEditorComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditTextEditorComponent.prototype, "elementFor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditTextEditorComponent.prototype, "fieldValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], InlineEditTextEditorComponent.prototype, "isRequired", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditTextEditorComponent.prototype, "permission", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], InlineEditTextEditorComponent.prototype, "updateValue", void 0);
    __decorate([
        ViewChild('container', { static: false }),
        __metadata("design:type", Object)
    ], InlineEditTextEditorComponent.prototype, "container", void 0);
    InlineEditTextEditorComponent = __decorate([
        Component({
            selector: 'inline-edit-text-editor',
            templateUrl: './inline-edit-text-editor.component.html',
            styleUrls: ['./inline-edit-text-editor.component.scss']
        }),
        __metadata("design:paramtypes", [Renderer])
    ], InlineEditTextEditorComponent);
    return InlineEditTextEditorComponent;
}());
export { InlineEditTextEditorComponent };
//# sourceMappingURL=inline-edit-text-editor.component.js.map