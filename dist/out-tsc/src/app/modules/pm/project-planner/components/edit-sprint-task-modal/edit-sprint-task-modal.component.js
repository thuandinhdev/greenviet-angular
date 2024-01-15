import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ProjectPlannerSprintService } from './../../../.././../core/services/project-planner-sprint.service';
import { TaskService } from '../../../../../core/services/task.service';
var EditSprintTaskModalComponent = /** @class */ (function () {
    function EditSprintTaskModalComponent(translate, bsEditProjectSprintTaskModalRef, formBuilder, toastr, projectPlannerSprintService, taskService, datepipe) {
        this.translate = translate;
        this.bsEditProjectSprintTaskModalRef = bsEditProjectSprintTaskModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectPlannerSprintService = projectPlannerSprintService;
        this.taskService = taskService;
        this.datepipe = datepipe;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isHoursValid = false;
        this.users = [];
        this.statusLists = [];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    EditSprintTaskModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.getTaskById(this.taskId);
    };
    EditSprintTaskModalComponent.prototype.loadForms = function () {
        this.setDateFormat();
        this.users = this.sprint.sprint_members;
        this.editProjectSprintTaskForm = this.formBuilder.group({
            id: [this.taskId],
            project_sprint_id: [this.task.project_sprint_id],
            project_id: [this.sprint.project_id],
            type: [this.task.type],
            name: [this.task.name, [Validators.required, Validators.maxLength(255)]],
            assign_to: [this.task.assign_to],
            start_date: [this.task.start_date],
            end_date: [this.task.end_date],
            status: [this.task.status, Validators.required],
            estimated_hours: [this.task.estimated_hours, Validators.pattern(/^[0-9]+\:[0-5][0-9]$/)],
            description: [this.task.description]
        });
        this.isPageLoaded = true;
    };
    EditSprintTaskModalComponent.prototype.setDateFormat = function () {
        if (this.sprint.start_date) {
            this.sprintStartDate = new Date(this.sprint.start_date);
        }
        if (this.sprint.end_date) {
            this.sprintEndDate = new Date(this.sprint.end_date);
        }
        if (this.task.start_date) {
            this.task.start_date = new Date(this.task.start_date);
        }
        if (this.task.end_date) {
            this.task.end_date = new Date(this.task.end_date);
        }
    };
    Object.defineProperty(EditSprintTaskModalComponent.prototype, "projectSprintTaskControl", {
        get: function () {
            return this.editProjectSprintTaskForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    EditSprintTaskModalComponent.prototype.setStatus = function () {
        if (this.task.type == "Story") {
            this.statusLists = [
                { id: 1, name: this.translate.instant('common.status.open') },
                { id: 2, name: this.translate.instant('common.status.in_progress') },
                { id: 3, name: this.translate.instant('common.status.closed') }
            ];
        }
        else {
            this.statusLists = [
                { id: 1, name: this.translate.instant('common.status.open') },
                { id: 2, name: this.translate.instant('common.status.on_hold') },
                { id: 3, name: this.translate.instant('common.status.closed') },
                { id: 4, name: this.translate.instant('common.status.released') }
            ];
        }
    };
    EditSprintTaskModalComponent.prototype.startDateChange = function (event) {
        this.editProjectSprintTaskForm.patchValue({ end_date: this.editProjectSprintTaskForm.value.start_date });
    };
    EditSprintTaskModalComponent.prototype.getTaskById = function (taskID) {
        var _this = this;
        this.projectPlannerSprintService.getSprintTaskById(taskID).subscribe(function (data) {
            _this.task = data;
            _this.setStatus();
            _this.loadForms();
        });
    };
    EditSprintTaskModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        this.isHoursValid = false;
        if (this.editProjectSprintTaskForm.invalid) {
            return;
        }
        // --
        // Hours validation
        if (this.editProjectSprintTaskForm.value.estimated_hours && this.sprint.hours) {
            var projectHours = this.sprint.hours.replace(/:/g, '.'), sprintHours = this.editProjectSprintTaskForm.value.estimated_hours.replace(/:/g, '.');
            if (parseInt(projectHours) < parseInt(sprintHours)) {
                this.isHoursValid = true;
                return;
            }
        }
        // --
        // Date Format
        this.editProjectSprintTaskForm.patchValue({ start_date: this.datepipe.transform(this.editProjectSprintTaskForm.value.start_date, 'yyyy-MM-dd') });
        this.editProjectSprintTaskForm.patchValue({ end_date: this.datepipe.transform(this.editProjectSprintTaskForm.value.end_date, 'yyyy-MM-dd') });
        // this.editProjectSprintTaskForm.patchValue({ task_members: this.editProjectSprintTaskForm.value.task_members });
        if (this.editProjectSprintTaskForm.value.status == 4) {
            this.projectPlannerSprintService.updateTask(this.editProjectSprintTaskForm.value).subscribe(function (data) { });
            this.taskService.convertSprintTaskToTask(this.editProjectSprintTaskForm.value).subscribe(function (data) {
                _this.toastr.success(_this.translate.instant('project_planner.sprint_task.messages.released'), _this.translate.instant('project_planner.title'));
                _this.event.emit({ data: data });
                _this.onCancel();
            });
        }
        else {
            this.projectPlannerSprintService.updateTask(this.editProjectSprintTaskForm.value).subscribe(function (data) {
                _this.toastr.success(_this.editProjectSprintTaskForm.value.type + _this.translate.instant('project_planner.sprint_task.messages.update'), _this.translate.instant('project_planner.title'));
                _this.event.emit({ data: data });
                _this.onCancel();
            });
        }
    };
    EditSprintTaskModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditProjectSprintTaskModalRef.hide();
    };
    EditSprintTaskModalComponent = __decorate([
        Component({
            selector: 'app-edit-sprint-task-modal',
            templateUrl: './edit-sprint-task-modal.component.html',
            styleUrls: ['./edit-sprint-task-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            ProjectPlannerSprintService,
            TaskService,
            DatePipe])
    ], EditSprintTaskModalComponent);
    return EditSprintTaskModalComponent;
}());
export { EditSprintTaskModalComponent };
//# sourceMappingURL=edit-sprint-task-modal.component.js.map