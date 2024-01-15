import { __decorate, __metadata } from "tslib";
import { Component, Input, EventEmitter, Output, ViewChild, Renderer } from '@angular/core';
var InlineEditSelectComponent = /** @class */ (function () {
    function InlineEditSelectComponent(renderer) {
        this.renderer = renderer;
        this.isEditView = false;
        this.updateValue = new EventEmitter();
    }
    InlineEditSelectComponent.prototype.ngOnInit = function () { };
    InlineEditSelectComponent.prototype.getValue = function (options) {
        var _this = this;
        if (this.options != undefined && this.selectedValue) {
            var selectedLabel = this.options.find(function (x) { return x.value == _this.selectedValue; });
            if (selectedLabel != undefined) {
                return selectedLabel.label;
            }
            else {
                return this.selectedValue;
            }
        }
    };
    InlineEditSelectComponent.prototype.showEditable = function () {
        var _this = this;
        this.value = this.selectedValue;
        this.isEditView = true;
        this.docEditUnlisten = this.renderer.listenGlobal('document', 'click', function (event) {
            if (!_this.container.nativeElement.contains(event.target)) {
                _this.showDetail();
            }
        });
    };
    InlineEditSelectComponent.prototype.save = function () {
        this.updateValue.emit(this.value);
    };
    InlineEditSelectComponent.prototype.showDetail = function () {
        this.isEditView = false;
    };
    InlineEditSelectComponent.prototype.select = function (event, select_component) {
        select_component.isValueSelected = true;
        return;
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditSelectComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditSelectComponent.prototype, "elementFor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditSelectComponent.prototype, "txtField", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditSelectComponent.prototype, "selectedValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], InlineEditSelectComponent.prototype, "isRequired", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], InlineEditSelectComponent.prototype, "options", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InlineEditSelectComponent.prototype, "permission", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], InlineEditSelectComponent.prototype, "updateValue", void 0);
    __decorate([
        ViewChild('container', { static: true }),
        __metadata("design:type", Object)
    ], InlineEditSelectComponent.prototype, "container", void 0);
    InlineEditSelectComponent = __decorate([
        Component({
            selector: 'inline-edit-select',
            templateUrl: './inline-edit-select.component.html',
            styleUrls: ['./inline-edit-select.component.scss']
        }),
        __metadata("design:paramtypes", [Renderer])
    ], InlineEditSelectComponent);
    return InlineEditSelectComponent;
}());
export { InlineEditSelectComponent };
//# sourceMappingURL=inline-edit-select.component.js.map