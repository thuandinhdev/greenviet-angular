import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NgxRolesService } from 'ngx-permissions';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { TaskService } from '../../../../../core/services/task.service';
import { ProjectService } from '../../../../../core/services/project.service';
import { environment } from '../../../../../../environments/environment';
var TaskBoardComponent = /** @class */ (function () {
    function TaskBoardComponent(translate, ngxRolesService, toastr, taskService, projectService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.toastr = toastr;
        this.taskService = taskService;
        this.projectService = projectService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.filter = "my";
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TaskBoardComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    TaskBoardComponent.prototype.getCheckPermission = function (task) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        else if (task.assign_to == this.loginUser.id || task.created_by == this.loginUser.id) {
            return true;
        }
        else {
            return false;
        }
    };
    TaskBoardComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getMyProjects().subscribe(function (data) {
            _this.projects = data;
            _this.getTaskForTaskBoard();
        });
    };
    TaskBoardComponent.prototype.getTasks = function (project) {
        if (project) {
            this.getTaskForTaskBoard(project.id);
        }
    };
    TaskBoardComponent.prototype.getTaskForTaskBoard = function (projectId, filter) {
        var _this = this;
        if (projectId === void 0) { projectId = null; }
        if (filter === void 0) { filter = "my"; }
        var params = {};
        if (projectId == null) {
            params = {
                'filter': filter
            };
        }
        else {
            params = {
                'project_id': projectId,
                'filter': filter
            };
        }
        this.project_id = projectId;
        this.openTasks = [];
        this.inprogressTasks = [];
        this.completedTasks = [];
        this.taskService.getTaskForTaskBoard(params).subscribe(function (data) {
            _this.tasks = data;
            _this.setTasks();
        });
    };
    TaskBoardComponent.prototype.setTasks = function () {
        if (this.tasks) {
            for (var iRow in this.tasks) {
                if (this.tasks[iRow].status == 1) {
                    this.openTasks.push(this.tasks[iRow]);
                }
                if (this.tasks[iRow].status == 2 || this.tasks[iRow].status == 3 || this.tasks[iRow].status == 4) {
                    this.inprogressTasks.push(this.tasks[iRow]);
                }
                if (this.tasks[iRow].status == 6 || this.tasks[iRow].status == 5) {
                    this.completedTasks.push(this.tasks[iRow]);
                }
            }
        }
    };
    TaskBoardComponent.prototype.drop = function (event) {
        // this.data = JSON.stringify(event.previousContainer.data);
        // this.data = JSON.parse(this.data);
        // console.log(this.data);
        // console.log(this.data[0].id);
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        var statusTask = [{
                status: 1,
                list: this.converToArray(this.openTasks)
            },
            {
                status: 2,
                list: this.converToArray(this.inprogressTasks)
            },
            {
                status: 6,
                list: this.converToArray(this.completedTasks)
            }];
        this.updateStatusList(statusTask);
    };
    TaskBoardComponent.prototype.updateStatusList = function (task) {
        // if(this.getCheckPermission(task)) {
        var _this = this;
        // } else {
        // 	this.toastr.error(this.translate.instant('common.error_messages.message1'), this.translate.instant('common.errors_keys.key1'));
        // }
        this.taskService.updateStatusList(task).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.status'), _this.translate.instant('tasks.title'));
            _this.getTaskForTaskBoard(_this.project_id);
        });
    };
    TaskBoardComponent.prototype.converToArray = function (list) {
        var status_list = [];
        list.forEach(function (element) {
            status_list.push(parseInt(element.id));
        });
        return status_list;
    };
    TaskBoardComponent = __decorate([
        Component({
            selector: 'app-task-board',
            templateUrl: './task-board.component.html',
            styleUrls: ['./task-board.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            NgxRolesService,
            ToastrService,
            TaskService,
            ProjectService,
            AuthenticationService])
    ], TaskBoardComponent);
    return TaskBoardComponent;
}());
export { TaskBoardComponent };
//# sourceMappingURL=task-board.component.js.map