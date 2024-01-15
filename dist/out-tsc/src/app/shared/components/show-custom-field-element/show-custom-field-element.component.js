import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
var ShowCustomFieldElementComponent = /** @class */ (function () {
    function ShowCustomFieldElementComponent() {
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    ShowCustomFieldElementComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ShowCustomFieldElementComponent.prototype, "customFields", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ShowCustomFieldElementComponent.prototype, "formArray", void 0);
    __decorate([
        Input(),
        __metadata("design:type", FormArray)
    ], ShowCustomFieldElementComponent.prototype, "controls", void 0);
    __decorate([
        Input(),
        __metadata("design:type", FormGroup)
    ], ShowCustomFieldElementComponent.prototype, "formName", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ShowCustomFieldElementComponent.prototype, "isFormSubmitted", void 0);
    ShowCustomFieldElementComponent = __decorate([
        Component({
            selector: 'app-show-custom-field-element',
            templateUrl: './show-custom-field-element.component.html',
            styleUrls: ['./show-custom-field-element.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ShowCustomFieldElementComponent);
    return ShowCustomFieldElementComponent;
}());
export { ShowCustomFieldElementComponent };
//# sourceMappingURL=show-custom-field-element.component.js.map