import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var TaskPriorityPipe = /** @class */ (function () {
    function TaskPriorityPipe() {
    }
    TaskPriorityPipe.prototype.transform = function (value, args) {
        var priority;
        if (value == 1) {
            priority = 'Urgent';
        }
        else if (value == 2) {
            priority = 'Very High';
        }
        else if (value == 3) {
            priority = 'High';
        }
        else if (value == 4) {
            priority = 'Medium';
        }
        else if (value == 5) {
            priority = 'Low';
        }
        return priority;
    };
    TaskPriorityPipe = __decorate([
        Pipe({
            name: 'taskPriority'
        })
    ], TaskPriorityPipe);
    return TaskPriorityPipe;
}());
export { TaskPriorityPipe };
//# sourceMappingURL=task-priority.pipe.js.map