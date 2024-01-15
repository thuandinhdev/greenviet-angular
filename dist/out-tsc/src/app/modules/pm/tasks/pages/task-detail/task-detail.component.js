import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgxRolesService } from 'ngx-permissions';
import { TaskService } from '../../../../../core/services/task.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { environment } from '../../../../../../environments/environment';
var TaskDetailComponent = /** @class */ (function () {
    function TaskDetailComponent(route, router, ngxRolesService, taskService, authenticationService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.ngxRolesService = ngxRolesService;
        this.taskService = taskService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.isPageLoaded = false;
        this.permission = false;
        this.route.paramMap.subscribe(function (params) {
            _this.getById(params.get('id'));
        });
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TaskDetailComponent.prototype.ngOnInit = function () { };
    TaskDetailComponent.prototype.getCheckPermission = function (task) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            this.permission = true;
        }
        else if (task.assign_to == this.loginUser.id || task.created_by == this.loginUser.id) {
            this.permission = true;
        }
    };
    TaskDetailComponent.prototype.getById = function (taskId) {
        var _this = this;
        this.taskService.getById(taskId).subscribe(function (data) {
            _this.task = data;
            _this.getCheckPermission(_this.task);
            _this.isPageLoaded = true;
        });
    };
    TaskDetailComponent = __decorate([
        Component({
            selector: 'app-task-detail',
            templateUrl: './task-detail.component.html',
            styleUrls: ['./task-detail.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            NgxRolesService,
            TaskService,
            AuthenticationService])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());
export { TaskDetailComponent };
//# sourceMappingURL=task-detail.component.js.map