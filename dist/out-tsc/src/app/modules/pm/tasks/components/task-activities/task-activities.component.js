import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var TaskActivitiesComponent = /** @class */ (function () {
    function TaskActivitiesComponent() {
        this.scrollConfig = {};
    }
    TaskActivitiesComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TaskActivitiesComponent.prototype, "task", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TaskActivitiesComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TaskActivitiesComponent.prototype, "apiUrl", void 0);
    TaskActivitiesComponent = __decorate([
        Component({
            selector: 'app-task-activities',
            templateUrl: './task-activities.component.html',
            styleUrls: ['./task-activities.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], TaskActivitiesComponent);
    return TaskActivitiesComponent;
}());
export { TaskActivitiesComponent };
//# sourceMappingURL=task-activities.component.js.map