import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxRolesService } from 'ngx-permissions';
import { TranslateService } from '@ngx-translate/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import Swal from 'sweetalert2';
import { TodoService } from '../../../../../core/services/todo.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { CreateTodoModalComponent } from '../../components/create-todo-modal/create-todo-modal.component';
import { EditTodoModalComponent } from '../../components/edit-todo-modal/edit-todo-modal.component';
var TodoDetailComponent = /** @class */ (function () {
    function TodoDetailComponent(translate, ngxRolesService, modalService, http, toastr, todoService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.modalService = modalService;
        this.http = http;
        this.toastr = toastr;
        this.todoService = todoService;
        this.authenticationService = authenticationService;
        this.isPageloaded = false;
        this.datepickerConfigs = { dateInputFormat: 'YYYY-MM-DD' };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TodoDetailComponent.prototype.ngOnInit = function () {
        this.todoParams = {
            'length': 10,
            'module_id': this.module_id,
            'module_related_id': this.module_related_id
        };
        this.getTodos();
    };
    TodoDetailComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        this.changeTodosStatus();
    };
    TodoDetailComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getAllTodos(this.todoParams)
            .subscribe(function (data) {
            _this.todos = data;
            _this.isPageloaded = true;
        }, function (error) { });
    };
    TodoDetailComponent.prototype.changeTodosStatus = function () {
        var _this = this;
        this.todoService.changeTodosStatus(this.todos)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.status'), _this.translate.instant('todos.title'));
        }, function (error) { });
    };
    TodoDetailComponent.prototype.changeStatus = function (todo, status) {
        var _this = this;
        todo.status = status;
        this.todoService.update(todo)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.update'), _this.translate.instant('todos.title'));
            _this.getTodos();
        });
    };
    TodoDetailComponent.prototype.openTodoCreateModal = function () {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                todoParams: this.todoParams
            }
        };
        this.modalRef = this.modalService.show(CreateTodoModalComponent, modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTodos();
        });
    };
    TodoDetailComponent.prototype.openTodoEditModal = function (todo) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                todo: todo
            }
        };
        this.modalRef = this.modalService.show(EditTodoModalComponent, modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTodos();
        });
    };
    TodoDetailComponent.prototype.deleteTodo = function (id) {
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
                _this.todoService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('todos.messages.delete'), _this.translate.instant('todos.title'));
                    _this.getTodos();
                });
            }
        });
    };
    TodoDetailComponent.prototype.saveTodosDetail = function (todo, index, value) {
        var _this = this;
        todo[index] = value;
        this.todoService.update(todo)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.update'), _this.translate.instant('todos.title'));
            _this.getTodos();
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TodoDetailComponent.prototype, "module_id", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TodoDetailComponent.prototype, "module_related_id", void 0);
    TodoDetailComponent = __decorate([
        Component({
            selector: 'app-todo-detail',
            templateUrl: './todo-detail.component.html',
            styleUrls: ['./todo-detail.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            NgxRolesService,
            BsModalService,
            HttpClient,
            ToastrService,
            TodoService,
            AuthenticationService])
    ], TodoDetailComponent);
    return TodoDetailComponent;
}());
export { TodoDetailComponent };
//# sourceMappingURL=todo-detail.component.js.map