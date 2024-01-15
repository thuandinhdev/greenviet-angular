import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxRolesService } from 'ngx-permissions';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { TaskService } from '../../../../../core/services/task.service';
import { task_status_key_value, task_priority_key_value } from "./../../../../../core/helpers/pm-helper";
var TaskDetailsComponent = /** @class */ (function () {
    function TaskDetailsComponent(ngxRolesService, translate, taskService, toastr) {
        this.ngxRolesService = ngxRolesService;
        this.translate = translate;
        this.taskService = taskService;
        this.toastr = toastr;
        this.taskstatusKeyValue = task_status_key_value;
        this.taskPriorityKeyValue = task_priority_key_value;
        this.knOptions = {
            readOnly: true,
            size: 150,
            unit: '%',
            textColor: '#000000',
            fontSize: '32',
            valueformat: 'percent',
            value: 0,
            max: 100,
            trackWidth: 19,
            barWidth: 20,
            trackColor: '#D8D8D8',
            barColor: '#FF6F17'
        };
    }
    TaskDetailsComponent.prototype.ngOnInit = function () { };
    TaskDetailsComponent.prototype.getTaskById = function (taskId) {
        var _this = this;
        this.taskService.getById(taskId)
            .subscribe(function (data) {
            _this.task = data;
        });
    };
    TaskDetailsComponent.prototype.getTaskStatus = function (status) {
        return 'tasks.status' + status;
    };
    TaskDetailsComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.taskstatusKeyValue[statusKey];
    };
    TaskDetailsComponent.prototype.getTranslatePriorities = function (priorityKey) {
        return this.taskPriorityKeyValue[priorityKey];
    };
    TaskDetailsComponent.prototype.changeTaskPriority = function (taskId, priority) {
        var _this = this;
        this.taskService.changePriority({ id: taskId, priority: priority.id }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.priority'), _this.translate.instant('tasks.title'));
            _this.getTaskById(_this.task.id);
        });
    };
    TaskDetailsComponent.prototype.changeTaskStatus = function (taskID, status) {
        var _this = this;
        var changeTask = {
            id: taskID,
            status: status.id
        };
        this.taskService.changeStatus(changeTask).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.status'), _this.translate.instant('tasks.title'));
            _this.getTaskById(_this.task.id);
        });
    };
    TaskDetailsComponent.prototype.getParseArray = function (string) {
        return JSON.parse(string);
    };
    TaskDetailsComponent.prototype.saveTaskDetail = function (name, value) {
        var _this = this;
        this.task[name] = value;
        this.taskService.update(this.task)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.update'), _this.translate.instant('tasks.title'));
            _this.getTaskById(_this.task.id);
        });
    };
    TaskDetailsComponent.prototype.saveSubTaskDetail = function (subTask, name, value) {
        var _this = this;
        subTask[name] = value;
        this.taskService.update(subTask).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.update'), _this.translate.instant('tasks.title'));
            _this.getTaskById(_this.task.id);
        });
    };
    TaskDetailsComponent.prototype.getCheckPermission = function (sub_task) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        else if (sub_task.assign_to == this.loginUser.id || sub_task.created_by == this.loginUser.id) {
            return true;
        }
        else {
            return false;
        }
    };
    TaskDetailsComponent.prototype.deleteSubTask = function (id) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.taskService.delete(id).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('tasks.messages.delete'), _this.translate.instant('tasks.title'));
                    _this.getTaskById(_this.task.id);
                });
            }
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TaskDetailsComponent.prototype, "task", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TaskDetailsComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TaskDetailsComponent.prototype, "permission", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TaskDetailsComponent.prototype, "apiUrl", void 0);
    TaskDetailsComponent = __decorate([
        Component({
            selector: 'app-task-details',
            templateUrl: './task-details.component.html',
            styleUrls: ['./task-details.component.scss']
        }),
        __metadata("design:paramtypes", [NgxRolesService,
            TranslateService,
            TaskService,
            ToastrService])
    ], TaskDetailsComponent);
    return TaskDetailsComponent;
}());
export { TaskDetailsComponent };
//# sourceMappingURL=task-details.component.js.map