import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxRolesService } from 'ngx-permissions';
import { TranslateService } from '@ngx-translate/core';
import { CustomFieldsService } from '../../../../../core/services/custom-fields.service';
import { TaskService } from '../../../../../core/services/task.service';
import { ProjectService } from '../../../../../core/services/project.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
var TaskEditComponent = /** @class */ (function () {
    function TaskEditComponent(translate, datepipe, route, router, ngxRolesService, formBuilder, toastr, taskService, projectService, customFieldsService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.route = route;
        this.router = router;
        this.ngxRolesService = ngxRolesService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.taskService = taskService;
        this.projectService = projectService;
        this.customFieldsService = customFieldsService;
        this.authenticationService = authenticationService;
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isHoursValid = false;
        this.users = [];
        this.userIds = [];
        this.projectVersions = [];
        this.progressOptions = {
            floor: 0,
            ceil: 100
        };
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.route.paramMap.subscribe(function (params) {
            _this.getTaskById(params.get('id'));
        });
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TaskEditComponent.prototype.ngOnInit = function () {
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
            planned_start_date: [this.task.planned_start_date],
            planned_end_date: [this.task.planned_end_date],
            task_start_date: [this.task.task_start_date],
            task_end_date: [this.task.task_end_date],
            assign_to: [this.task.assign_to],
            status: [this.task.status, Validators.required],
            priority: [this.task.priority, Validators.required],
            estimated_hours: [this.task.estimated_hours, Validators.pattern(/^[0-9]+\:[0-5][0-9]$/)],
            progress: [parseInt(this.task.progress)],
            description: [this.task.description],
            users: [],
            custom_field: this.formBuilder.array([]),
            custom_fields: [null],
        });
        // --
        // Project Version
        this.projectVersions = this.task.project1.project_version.split(",");
        // --
        // Project users
        this.users = this.task.project1.users;
        for (var i = 0; i < this.users.length; i++) {
            this.userIds.push({ "id": this.users[i].id });
        }
        this.editTaskForm.patchValue({ users: this.userIds });
        // --
        // Custom fields
        this.getCustomFieldByForm();
        // --
        // Parent task dates
        if (this.task.parent_task_id != 0) {
            this.getParentTask(this.task.parent_task_id);
        }
        else {
            this.isPageLoaded = true;
        }
    };
    TaskEditComponent.prototype.loadSubtaskForm = function (parentTask) {
        this.parentTask = parentTask;
        this.isPageLoaded = true;
    };
    Object.defineProperty(TaskEditComponent.prototype, "taskControl", {
        get: function () { return this.editTaskForm.controls; },
        enumerable: false,
        configurable: true
    });
    TaskEditComponent.prototype.getTaskStatus = function (status) {
        return 'tasks.status' + status;
    };
    TaskEditComponent.prototype.getCustomFieldByForm = function () {
        var _this = this;
        this.customFieldsService.getCustomFieldByForm(2)
            .subscribe(function (data) {
            _this.customFields = data;
            if (_this.customFields.length > 0) {
                _this.addDynamicField(_this.customFields);
            }
        });
    };
    TaskEditComponent.prototype.addDynamicField = function (fieldList) {
        var _this = this;
        fieldList.forEach(function (element) {
            var _a, _b;
            var control = _this.editTaskForm.controls.custom_field;
            var validators = null;
            if (element.is_required == 1) {
                validators = [Validators.required];
            }
            if (element.field_type == 'date' && _this.task[element.field_column] != null) {
                control.push(_this.formBuilder.group((_a = {},
                    _a[element.field_column] = [new Date(_this.task[element.field_column]), validators],
                    _a)));
            }
            else {
                control.push(_this.formBuilder.group((_b = {},
                    _b[element.field_column] = [_this.task[element.field_column], validators],
                    _b)));
            }
        });
    };
    TaskEditComponent.prototype.getCheckPermission = function (task) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
        }
        else if (task.assign_to == this.loginUser.id || task.created_by == this.loginUser.id) {
        }
        else {
            this.router.navigate(['tasks']);
        }
    };
    TaskEditComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProject().subscribe(function (data) {
            _this.projects = data;
        });
    };
    TaskEditComponent.prototype.getTaskById = function (taskId) {
        var _this = this;
        this.taskService.getById(taskId)
            .subscribe(function (data) {
            _this.task = data;
            _this.getCheckPermission(_this.task);
            _this.setDateFormat();
            _this.loadForms();
        });
    };
    TaskEditComponent.prototype.setDateFormat = function () {
        if (this.task.planned_start_date) {
            this.task.planned_start_date = new Date(this.task.planned_start_date);
        }
        if (this.task.planned_end_date) {
            this.task.planned_end_date = new Date(this.task.planned_end_date);
        }
        if (this.task.task_start_date) {
            this.task.task_start_date = new Date(this.task.task_start_date);
        }
        if (this.task.task_end_date) {
            this.task.task_end_date = new Date(this.task.task_end_date);
        }
    };
    TaskEditComponent.prototype.getParentTask = function (parentTaskId) {
        var _this = this;
        this.taskService.getParentTask(parentTaskId)
            .subscribe(function (data) {
            _this.loadSubtaskForm(data);
        });
    };
    TaskEditComponent.prototype.setCustomFields = function () {
        var arr = this.editTaskForm.value.custom_field;
        var obj = {};
        var iRow = 0;
        var that = this;
        arr.forEach(function (item) {
            var key = Object.keys(item)[0];
            obj[key] = item[key];
            if (that.customFields[iRow++].field_type == "date") {
                obj[key] = that.datepipe.transform(item[key], 'yyyy-MM-dd');
            }
        });
        this.editTaskForm.patchValue({ custom_fields: obj });
    };
    TaskEditComponent.prototype.projectChange = function (event) {
        this.userIds = [];
        this.editTaskForm.patchValue({ project_version: null });
        this.editTaskForm.patchValue({ assign_to: null });
        this.editTaskForm.patchValue({ planned_start_date: null });
        this.editTaskForm.patchValue({ planned_end_date: null });
        this.editTaskForm.patchValue({ task_start_date: null });
        this.editTaskForm.patchValue({ task_end_date: null });
        if (this.editTaskForm.value.project_id == undefined || this.editTaskForm.value.project_id == null || this.editTaskForm.value.project_id == '') {
            this.projectVersions = null;
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
    };
    TaskEditComponent.prototype.clearVersionValues = function () {
        this.editTaskForm.patchValue({ project_version: null });
    };
    TaskEditComponent.prototype.planstartDateChange = function (event) {
        this.editTaskForm.patchValue({ planned_end_date: this.editTaskForm.value.planned_start_date });
    };
    TaskEditComponent.prototype.taskstartDateChange = function (event) {
        this.editTaskForm.patchValue({ task_end_date: this.editTaskForm.value.task_start_date });
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
        if (this.customFields.length > 0) {
            this.setCustomFields();
        }
        this.editTaskForm.value.planned_start_date = this.datepipe.transform(this.editTaskForm.value.planned_start_date, 'yyyy-MM-dd');
        this.editTaskForm.value.planned_end_date = this.datepipe.transform(this.editTaskForm.value.planned_end_date, 'yyyy-MM-dd');
        this.editTaskForm.value.task_start_date = this.datepipe.transform(this.editTaskForm.value.task_start_date, 'yyyy-MM-dd');
        this.editTaskForm.value.task_end_date = this.datepipe.transform(this.editTaskForm.value.task_end_date, 'yyyy-MM-dd');
        this.taskService.update(this.editTaskForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.update'), _this.translate.instant('tasks.title'));
            _this.router.navigate(['tasks']);
        });
    };
    TaskEditComponent = __decorate([
        Component({
            selector: 'app-task-edit',
            templateUrl: './task-edit.component.html',
            styleUrls: ['./task-edit.component.scss'],
            preserveWhitespaces: true
        }),
        __metadata("design:paramtypes", [TranslateService,
            DatePipe,
            ActivatedRoute,
            Router,
            NgxRolesService,
            FormBuilder,
            ToastrService,
            TaskService,
            ProjectService,
            CustomFieldsService,
            AuthenticationService])
    ], TaskEditComponent);
    return TaskEditComponent;
}());
export { TaskEditComponent };
//# sourceMappingURL=task-edit.component.js.map