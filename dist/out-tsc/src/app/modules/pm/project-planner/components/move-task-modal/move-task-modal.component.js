import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ProjectPlannerSprintService } from './../../../../../core/services/project-planner-sprint.service';
var MoveTaskModalComponent = /** @class */ (function () {
    function MoveTaskModalComponent(translate, bsMoveTaskModalRef, formBuilder, toastr, projectPlannerService) {
        this.translate = translate;
        this.bsMoveTaskModalRef = bsMoveTaskModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectPlannerService = projectPlannerService;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
    }
    MoveTaskModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForms();
        this.isPageLoaded = true;
    };
    MoveTaskModalComponent.prototype.loadForms = function () {
        this.moveTaskForm = this.formBuilder.group({
            task_id: [this.taskId],
            sprint_id: [this.sprintId, Validators.required]
        });
    };
    Object.defineProperty(MoveTaskModalComponent.prototype, "projectPlannerControl", {
        get: function () {
            return this.moveTaskForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    MoveTaskModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.moveTaskForm.invalid) {
            return;
        }
        this.projectPlannerService.moveTask(this.moveTaskForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('project_planner.move_sprint_task.messages.move'), _this.translate.instant('project_planner.title'));
            _this.event.emit({ data: data });
            _this.onCancel();
        });
    };
    MoveTaskModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsMoveTaskModalRef.hide();
    };
    MoveTaskModalComponent = __decorate([
        Component({
            selector: 'app-move-task-modal',
            templateUrl: './move-task-modal.component.html',
            styleUrls: ['./move-task-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            ProjectPlannerSprintService])
    ], MoveTaskModalComponent);
    return MoveTaskModalComponent;
}());
export { MoveTaskModalComponent };
//# sourceMappingURL=move-task-modal.component.js.map