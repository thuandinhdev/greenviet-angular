import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var DefectActivitiesComponent = /** @class */ (function () {
    function DefectActivitiesComponent() {
        this.scrollConfig = {};
    }
    DefectActivitiesComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DefectActivitiesComponent.prototype, "defect", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DefectActivitiesComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DefectActivitiesComponent.prototype, "apiUrl", void 0);
    DefectActivitiesComponent = __decorate([
        Component({
            selector: 'app-defect-activities',
            templateUrl: './defect-activities.component.html',
            styleUrls: ['./defect-activities.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], DefectActivitiesComponent);
    return DefectActivitiesComponent;
}());
export { DefectActivitiesComponent };
//# sourceMappingURL=defect-activities.component.js.map