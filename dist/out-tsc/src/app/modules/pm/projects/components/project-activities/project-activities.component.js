import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var ProjectActivitiesComponent = /** @class */ (function () {
    function ProjectActivitiesComponent() {
        this.scrollConfig = {};
    }
    ProjectActivitiesComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectActivitiesComponent.prototype, "project", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectActivitiesComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectActivitiesComponent.prototype, "apiUrl", void 0);
    ProjectActivitiesComponent = __decorate([
        Component({
            selector: 'app-project-activities',
            templateUrl: './project-activities.component.html',
            styleUrls: ['./project-activities.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ProjectActivitiesComponent);
    return ProjectActivitiesComponent;
}());
export { ProjectActivitiesComponent };
//# sourceMappingURL=project-activities.component.js.map