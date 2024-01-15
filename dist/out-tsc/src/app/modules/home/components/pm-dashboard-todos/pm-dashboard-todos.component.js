import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxRolesService } from 'ngx-permissions';
import { TranslateService } from '@ngx-translate/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TodoService } from './../../../../core/services/todo.service';
var PmDashboardTodosComponent = /** @class */ (function () {
    function PmDashboardTodosComponent(translate, ngxRolesService, modalService, http, toastr, todoService) {
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.modalService = modalService;
        this.http = http;
        this.toastr = toastr;
        this.todoService = todoService;
        this.scrollConfig = {};
        this.isPageloaded = false;
        this.datepickerConfigs = { dateInputFormat: 'YYYY-MM-DD' };
    }
    PmDashboardTodosComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    PmDashboardTodosComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        this.changeTodosStatus();
    };
    PmDashboardTodosComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getAllTodos({ 'length': 10 })
            .subscribe(function (data) {
            _this.todos = data;
            _this.isPageloaded = true;
        }, function (error) { });
    };
    PmDashboardTodosComponent.prototype.changeTodosStatus = function () {
        var _this = this;
        this.todoService.changeTodosStatus(this.todos)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.status'), _this.translate.instant('todos.title'));
        });
    };
    PmDashboardTodosComponent.prototype.changeStatus = function (todo, status) {
        var _this = this;
        todo.status = status;
        this.todoService.update(todo)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.update'), _this.translate.instant('todos.title'));
            _this.getTodos();
        });
    };
    PmDashboardTodosComponent.prototype.saveTodosDetail = function (todo, index, value) {
        var _this = this;
        todo[index] = value;
        this.todoService.update(todo)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.update'), _this.translate.instant('todos.title'));
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PmDashboardTodosComponent.prototype, "loginUser", void 0);
    PmDashboardTodosComponent = __decorate([
        Component({
            selector: 'app-pm-dashboard-todos',
            templateUrl: './pm-dashboard-todos.component.html',
            styleUrls: ['./pm-dashboard-todos.component.scss'],
            providers: [DatePipe]
        }),
        __metadata("design:paramtypes", [TranslateService,
            NgxRolesService,
            BsModalService,
            HttpClient,
            ToastrService,
            TodoService])
    ], PmDashboardTodosComponent);
    return PmDashboardTodosComponent;
}());
export { PmDashboardTodosComponent };
//# sourceMappingURL=pm-dashboard-todos.component.js.map