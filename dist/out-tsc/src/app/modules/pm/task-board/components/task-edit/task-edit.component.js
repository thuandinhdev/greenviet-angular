import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { TaskService } from '../../../../../core/services/task.service';
import { ProjectService } from '../../../../../core/services/project.service';
import { UserService } from '../../../../../core/services/user.service';
var TaskEditComponent = /** @class */ (function () {
    function TaskEditComponent(translate, bsEditTaskModalRef, datePipe, formBuilder, toastr, taskService, projectService, userService) {
        this.translate = translate;
        this.bsEditTaskModalRef = bsEditTaskModalRef;
        this.datePipe = datePipe;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.taskService = taskService;
        this.projectService = projectService;
        this.userService = userService;
        this.event = new EventEmitter();
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isHoursValid = false;
        this.users = [];
        this.userIds = [];
        this.projectVersions = [];
        this.taskProgress = 50;
        this.progressOptions = {
            floor: 0,
            ceil: 100
        };
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    TaskEditComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForms();
        this.getProjects();
    };
    TaskEditComponent.prototype.loadForms = function () {
        this.editTaskForm = this.formBuilder.group({
            id: [this.task.id],
            parent_task_id: [this.task.parent_task_id],
            name: [this.task.name, Validators.required],
            generated_id: [this.task.generated_id, [Validators.required]],
            project_id: [this.task.project_id, Validators.required],
            project_version: [this.task.project_version],
            planned_start_date: [new Date(this.task.planned_start_date), Validators.required],
            planned_end_date: [new Date(this.task.planned_end_date), Validators.required],
            task_start_date: [new Date(this.task.task_start_date), Validators.required],
            task_end_date: [new Date(this.task.task_end_date), Validators.required],
            assign_to: [this.task.assign_to, Validators.required],
            status: [this.task.status, Validators.required],
            priority: [this.task.priority, Validators.required],
            estimated_hours: [this.task.estimated_hours, Validators.pattern(/^[0-9]+\:[0-5][0-9]$/)],
            progress: [parseInt(this.task.progress)],
            description: [this.task.description],
            users: []
        });
        // --
        // Project users
        this.users = this.task.project1.users;
        for (var i = 0; i < this.users.length; i++) {
            this.userIds.push({ "id": this.users[i].id });
        }
        this.editTaskForm.patchValue({ users: this.userIds });
        // --
        // Dates
        this.plannedStartDate = new Date(this.task.project1.start_date);
        this.plannedEndDate = new Date(this.task.project1.end_date);
        // --
        // Parent task dates
        if (this.task.parent_task_id != 0) {
            this.getParentTask(this.task.parent_task_id);
        }
        else {
            this.isPageLoaded = true;
        }
    };
    Object.defineProperty(TaskEditComponent.prototype, "taskControl", {
        get: function () { return this.editTaskForm.controls; },
        enumerable: true,
        configurable: true
    });
    TaskEditComponent.prototype.loadSubtaskForm = function (parentTask) {
        this.parentTask = parentTask;
        this.plannedStartDate = new Date(parentTask.planned_start_date);
        this.plannedEndDate = new Date(parentTask.planned_end_date);
        this.isPageLoaded = true;
    };
    TaskEditComponent.prototype.getTaskStatus = function (status) {
        return 'tasks.status' + status;
    };
    TaskEditComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProject()
            .subscribe(function (data) {
            _this.projects = data;
        });
    };
    TaskEditComponent.prototype.getParentTask = function (parentTaskId) {
        var _this = this;
        this.taskService.getParentTask(parentTaskId)
            .subscribe(function (data) {
            _this.loadSubtaskForm(data);
        });
    };
    TaskEditComponent.prototype.projectChange = function (event) {
        this.userIds = [];
        if (this.editTaskForm.value.project_id == undefined || this.editTaskForm.value.project_id == null || this.editTaskForm.value.project_id == '') {
            this.editTaskForm.patchValue({ project_version: null });
            this.projectVersions = null;
            this.editTaskForm.patchValue({ assign_to: null });
            this.users = null;
            return;
        }
        this.projectVersions = event.project_version.split(",");
        // --
        // Project users
        this.users = event.users;
        for (var i = 0; i < this.users.length; i++) {
            this.userIds.push({ "id": this.users[i].id });
        }
        this.editTaskForm.patchValue({ users: this.userIds });
        // --
        // Dates
        this.plannedStartDate = new Date(event.start_date);
        this.plannedEndDate = new Date(event.end_date);
    };
    TaskEditComponent.prototype.clearVersionValues = function () {
        this.editTaskForm.patchValue({ project_version: null });
    };
    TaskEditComponent.prototype.planstartDateChange = function (event) {
        this.editTaskForm.patchValue({ planned_end_date: event });
    };
    TaskEditComponent.prototype.taskstartDateChange = function (event) {
        this.editTaskForm.patchValue({ task_end_date: event });
    };
    TaskEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        this.isHoursValid = false;
        if (this.editTaskForm.invalid) {
            return;
        }
        // --
        // Hours validation
        if (this.editTaskForm.value.estimated_hours && this.task.project1.estimated_hours) {
            var projectHours = this.task.project1.estimated_hours.replace(/:/g, '.'), taskHours = this.editTaskForm.value.estimated_hours.replace(/:/g, '.');
            if (parseInt(projectHours) < parseInt(taskHours)) {
                this.isHoursValid = true;
                return;
            }
        }
        // --
        // Date format
        this.editTaskForm.patchValue({ planned_start_date: this.datePipe.transform(this.editTaskForm.value.planned_start_date, 'yyyy-MM-dd') });
        this.editTaskForm.patchValue({ planned_end_date: this.datePipe.transform(this.editTaskForm.value.planned_end_date, 'yyyy-MM-dd') });
        this.editTaskForm.patchValue({ task_start_date: this.datePipe.transform(this.editTaskForm.value.task_start_date, 'yyyy-MM-dd') });
        this.editTaskForm.patchValue({ task_end_date: this.datePipe.transform(this.editTaskForm.value.task_end_date, 'yyyy-MM-dd') });
        this.taskService.update(this.editTaskForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.update'), _this.translate.instant('tasks.title'));
            _this.event.emit({ data: _this.editTaskForm.value });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    TaskEditComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditTaskModalRef.hide();
    };
    TaskEditComponent = __decorate([
        Component({
            selector: 'app-task-edit',
            templateUrl: './task-edit.component.html',
            styleUrls: ['./task-edit.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            DatePipe,
            FormBuilder,
            ToastrService,
            TaskService,
            ProjectService,
            UserService])
    ], TaskEditComponent);
    return TaskEditComponent;
}());
export { TaskEditComponent };
//# sourceMappingURL=task-edit.component.js.map