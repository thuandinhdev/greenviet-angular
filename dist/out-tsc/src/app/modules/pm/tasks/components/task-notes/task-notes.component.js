import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { TaskService } from '../../../../../core/services/task.service';
var TaskNotesComponent = /** @class */ (function () {
    function TaskNotesComponent(translate, formBuilder, toastr, taskService) {
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.taskService = taskService;
        this.isFormSubmitted = false;
    }
    TaskNotesComponent.prototype.ngOnInit = function () {
        this.editNoteForm = this.formBuilder.group({
            id: [this.task.id],
            notes: [this.task.notes]
        });
    };
    TaskNotesComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editNoteForm.invalid) {
            return;
        }
        this.taskService.updateNotes(this.editNoteForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('notes.messages.update'), _this.translate.instant('tasks.title'));
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TaskNotesComponent.prototype, "task", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TaskNotesComponent.prototype, "permission", void 0);
    TaskNotesComponent = __decorate([
        Component({
            selector: 'app-task-notes',
            templateUrl: './task-notes.component.html',
            styleUrls: ['./task-notes.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            FormBuilder,
            ToastrService,
            TaskService])
    ], TaskNotesComponent);
    return TaskNotesComponent;
}());
export { TaskNotesComponent };
//# sourceMappingURL=task-notes.component.js.map