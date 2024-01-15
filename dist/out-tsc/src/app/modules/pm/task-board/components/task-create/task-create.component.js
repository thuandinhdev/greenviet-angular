import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { TaskService } from '../../../../../core/services/task.service';
import { ProjectService } from '../../../../../core/services/project.service';
import { UserService } from '../../../../../core/services/user.service';
var TaskCreateComponent = /** @class */ (function () {
    function TaskCreateComponent(translate, bsCreateTaskModalRef, router, route, formBuilder, toastr, taskService, projectService, userService) {
        this.translate = translate;
        this.bsCreateTaskModalRef = bsCreateTaskModalRef;
        this.router = router;
        this.route = route;
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
        this.projectVersions = [];
        this.users = [];
        this.userIds = [];
        this.progressOptions = {
            floor: 0,
            ceil: 100
        };
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    TaskCreateComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForms();
        this.getProjects();
    };
    TaskCreateComponent.prototype.loadForms = function () {
        this.createTaskForm = this.formBuilder.group({
            parent_task_id: [0],
            name: ['', [Validators.required, Validators.maxLength(255)]],
            generated_id: ['T0001', Validators.required],
            project_id: [null, Validators.required],
            project_version: [null, Validators.required],
            planned_start_date: [null, Validators.required],
            planned_end_date: [null, Validators.required],
            task_start_date: [null, Validators.required],
            task_end_date: [null, Validators.required],
            assign_to: [null, Validators.required],
            status: [null, Validators.required],
            priority: [null, Validators.required],
            estimated_hours: ['', Validators.pattern(/^[0-9]+\:[0-5][0-9]$/)],
            progress: [0],
            description: [''],
            users: [],
            custom_field: this.formBuilder.array([]),
            custom_fields: [null],
        });
        this.getTaskLastId();
        this.isPageLoaded = true;
    };
    Object.defineProperty(TaskCreateComponent.prototype, "taskControl", {
        get: function () { return this.createTaskForm.controls; },
        enumerable: true,
        configurable: true
    });
    TaskCreateComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProject()
            .subscribe(function (data) {
            _this.projects = data;
        });
    };
    TaskCreateComponent.prototype.getTaskLastId = function () {
        var _this = this;
        this.taskService.getLastId()
            .subscribe(function (data) {
            _this.createTaskGenerateId(data);
        });
    };
    TaskCreateComponent.prototype.projectChange = function (event) {
        this.userIds = [];
        if (this.createTaskForm.value.project_id == undefined || this.createTaskForm.value.project_id == null || this.createTaskForm.value.project_id == '') {
            this.createTaskForm.patchValue({ project_version: null });
            this.createTaskForm.patchValue({ assign_to: null });
            this.projectVersions = null;
            this.users = null;
            return;
        }
        // --
        // Project version
        this.projectVersions = event.project_version.split(",");
        // --
        // Project users
        this.users = event.users;
        for (var i = 0; i < this.users.length; i++) {
            this.userIds.push(this.users[i].id);
        }
        this.createTaskForm.patchValue({ users: this.userIds });
        // --
        // Dates
        this.plannedStartDate = new Date(event.start_date);
        this.plannedEndDate = new Date(event.end_date);
        this.project = event;
    };
    TaskCreateComponent.prototype.createTaskGenerateId = function (id) {
        var taskGeneratedId = 'T0001', lastId = parseInt(id) + 1;
        switch (id.toString().length) {
            case 1:
                taskGeneratedId = 'T000' + lastId;
                break;
            case 2:
                taskGeneratedId = 'T00' + lastId;
                break;
            case 3:
                taskGeneratedId = 'T0' + lastId;
                break;
            default:
                taskGeneratedId = 'T' + lastId;
                break;
        }
        this.createTaskForm.patchValue({ generated_id: taskGeneratedId });
    };
    TaskCreateComponent.prototype.planstartDateChange = function (event) {
        this.createTaskForm.patchValue({ planned_end_date: event });
    };
    TaskCreateComponent.prototype.taskstartDateChange = function (event) {
        this.createTaskForm.patchValue({ task_end_date: event });
    };
    TaskCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        this.isHoursValid = false;
        if (this.createTaskForm.invalid) {
            return;
        }
        // --
        // Hours validation
        if (this.createTaskForm.value.estimated_hours && this.project.estimated_hours) {
            var projectHours = this.project.estimated_hours.replace(/:/g, '.'), taskHours = this.createTaskForm.value.estimated_hours.replace(/:/g, '.');
            if (parseInt(projectHours) < parseInt(taskHours)) {
                this.isHoursValid = true;
                return;
            }
        }
        this.taskService.create(this.createTaskForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.create'), _this.translate.instant('tasks.title'));
            _this.event.emit({ data: data });
            _this.onCancel();
        });
    };
    TaskCreateComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateTaskModalRef.hide();
    };
    TaskCreateComponent = __decorate([
        Component({
            selector: 'app-task-create',
            templateUrl: './task-create.component.html',
            styleUrls: ['./task-create.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            Router,
            ActivatedRoute,
            FormBuilder,
            ToastrService,
            TaskService,
            ProjectService,
            UserService])
    ], TaskCreateComponent);
    return TaskCreateComponent;
}());
export { TaskCreateComponent };
//# sourceMappingURL=task-create.component.js.map