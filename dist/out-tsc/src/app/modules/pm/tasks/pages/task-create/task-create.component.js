import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { TaskService } from '../../../../../core/services/task.service';
import { CustomFieldsService } from '../../../../../core/services/custom-fields.service';
import { ProjectService } from '../../../../../core/services/project.service';
var TaskCreateComponent = /** @class */ (function () {
    function TaskCreateComponent(translate, router, route, formBuilder, toastr, taskService, projectService, customFieldsService, datepipe) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.taskService = taskService;
        this.projectService = projectService;
        this.customFieldsService = customFieldsService;
        this.datepipe = datepipe;
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isHoursValid = false;
        this.projectVersions = [];
        this.users = [];
        this.userIds = [];
        this.parent_task_id = this.route.snapshot.params.id;
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
        if (this.parent_task_id == '' || this.parent_task_id == null) {
            this.parent_task_id = 0;
        }
        this.getProjects();
    };
    TaskCreateComponent.prototype.loadForms = function (parentTaskId) {
        if (parentTaskId == 0) {
            this.createTaskForm = this.formBuilder.group({
                parent_task_id: [parentTaskId],
                name: ['', [Validators.required, Validators.maxLength(255)]],
                generated_id: ['T0001', Validators.required],
                project_id: [null, Validators.required],
                project_version: [null],
                planned_start_date: [null],
                planned_end_date: [null],
                task_start_date: [null],
                task_end_date: [null],
                assign_to: [null],
                status: [1, Validators.required],
                priority: [4, Validators.required],
                estimated_hours: ['', Validators.pattern(/^[0-9]+\:[0-5][0-9]$/)],
                progress: [0],
                description: [''],
                users: [],
                custom_field: this.formBuilder.array([]),
                custom_fields: [null],
            });
            this.getGeneratedId();
            this.getCustomFieldByForm();
            this.isPageLoaded = true;
        }
        else {
            this.getParentTask(this.parent_task_id);
        }
    };
    TaskCreateComponent.prototype.loadSubtaskForm = function (parentTask) {
        this.parentTask = parentTask;
        this.project = this.parentTask.project1;
        // --
        // Project users
        this.users = this.project.users;
        for (var i = 0; i < this.users.length; i++) {
            this.userIds.push(this.users[i].id);
        }
        this.createTaskForm = this.formBuilder.group({
            parent_task_id: [parentTask.id],
            name: ['', [Validators.required, Validators.maxLength(255)]],
            generated_id: ['', Validators.required],
            project_id: [this.project.id],
            project_version: [this.project.project_version],
            planned_start_date: [null],
            planned_end_date: [null],
            task_start_date: [null],
            task_end_date: [null],
            assign_to: [null],
            status: [parentTask.status, Validators.required],
            priority: [4, Validators.required],
            estimated_hours: ['', Validators.pattern(/^[0-9]+\:[0-5][0-9]$/)],
            progress: [0],
            description: [''],
            users: [this.userIds],
            custom_field: this.formBuilder.array([]),
            custom_fields: [null],
        });
        this.getSubTaskGeneratedId(parentTask.id);
        this.getCustomFieldByForm();
        this.isPageLoaded = true;
    };
    Object.defineProperty(TaskCreateComponent.prototype, "taskControl", {
        get: function () { return this.createTaskForm.controls; },
        enumerable: false,
        configurable: true
    });
    TaskCreateComponent.prototype.getCustomFieldByForm = function () {
        var _this = this;
        this.customFieldsService.getCustomFieldByForm(2)
            .subscribe(function (data) {
            _this.customFields = data;
            if (_this.customFields.length > 0) {
                _this.addDynamicField(_this.customFields);
            }
        });
    };
    TaskCreateComponent.prototype.getTaskStatus = function () {
        if (this.parent_task_id == 0) {
            return 'tasks.status';
        }
        else {
            return 'tasks.parent_status' + this.parentTask.status;
        }
    };
    TaskCreateComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProject()
            .subscribe(function (data) {
            _this.projects = data;
            _this.loadForms(_this.parent_task_id);
        });
    };
    TaskCreateComponent.prototype.getGeneratedId = function () {
        var _this = this;
        this.taskService.getGeneratedId().subscribe(function (data) {
            _this.createTaskForm.patchValue({ generated_id: data });
        });
    };
    TaskCreateComponent.prototype.getSubTaskGeneratedId = function (parentTaskId) {
        var _this = this;
        this.taskService.getsubTaskCountByParent(parentTaskId).subscribe(function (data) {
            _this.createTaskForm.patchValue({ generated_id: _this.parentTask.generated_id + '.' + data });
        });
    };
    TaskCreateComponent.prototype.getParentTask = function (parentTaskId) {
        var _this = this;
        this.taskService.getParentTask(parentTaskId)
            .subscribe(function (data) {
            _this.loadSubtaskForm(data);
        });
    };
    TaskCreateComponent.prototype.projectChange = function (event) {
        this.userIds = [];
        this.createTaskForm.patchValue({ project_version: null });
        this.createTaskForm.patchValue({ assign_to: null });
        this.createTaskForm.patchValue({ planned_start_date: null });
        this.createTaskForm.patchValue({ planned_end_date: null });
        this.createTaskForm.patchValue({ task_start_date: null });
        this.createTaskForm.patchValue({ task_end_date: null });
        if (this.createTaskForm.value.project_id == undefined || this.createTaskForm.value.project_id == null || this.createTaskForm.value.project_id == '') {
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
        this.project = event;
    };
    TaskCreateComponent.prototype.addDynamicField = function (fieldList) {
        var _this = this;
        fieldList.forEach(function (element) {
            var _a;
            var control = _this.createTaskForm.controls.custom_field;
            var validators = null;
            if (element.is_required == 1) {
                validators = [Validators.required];
            }
            control.push(_this.formBuilder.group((_a = {},
                _a[element.field_column] = [null, validators],
                _a)));
        });
    };
    TaskCreateComponent.prototype.setCustomFields = function () {
        var arr = this.createTaskForm.value.custom_field, obj = {}, iRow = 0, that = this;
        arr.forEach(function (item) {
            var key = Object.keys(item)[0];
            obj[key] = item[key];
            if (that.customFields[iRow++].field_type == "date") {
                obj[key] = that.datepipe.transform(item[key], 'yyyy-MM-dd');
            }
        });
        this.createTaskForm.patchValue({ custom_fields: obj });
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
        if (this.customFields.length > 0) {
            this.setCustomFields();
        }
        this.createTaskForm.value.planned_start_date = this.datepipe.transform(this.createTaskForm.value.planned_start_date, 'yyyy-MM-dd');
        this.createTaskForm.value.planned_end_date = this.datepipe.transform(this.createTaskForm.value.planned_end_date, 'yyyy-MM-dd');
        this.createTaskForm.value.task_start_date = this.datepipe.transform(this.createTaskForm.value.task_start_date, 'yyyy-MM-dd');
        this.createTaskForm.value.task_end_date = this.datepipe.transform(this.createTaskForm.value.task_end_date, 'yyyy-MM-dd');
        this.taskService.create(this.createTaskForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.create'), _this.translate.instant('tasks.title'));
            _this.router.navigate(['tasks']);
        });
    };
    TaskCreateComponent = __decorate([
        Component({
            selector: 'app-task-create',
            templateUrl: './task-create.component.html',
            styleUrls: ['./task-create.component.scss'],
            preserveWhitespaces: true
        }),
        __metadata("design:paramtypes", [TranslateService,
            Router,
            ActivatedRoute,
            FormBuilder,
            ToastrService,
            TaskService,
            ProjectService,
            CustomFieldsService,
            DatePipe])
    ], TaskCreateComponent);
    return TaskCreateComponent;
}());
export { TaskCreateComponent };
//# sourceMappingURL=task-create.component.js.map