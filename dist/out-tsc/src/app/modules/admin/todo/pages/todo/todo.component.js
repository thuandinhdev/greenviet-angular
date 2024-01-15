import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
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
var TodoComponent = /** @class */ (function () {
    function TodoComponent(translate, ngxRolesService, modalService, http, toastr, todoService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.modalService = modalService;
        this.http = http;
        this.toastr = toastr;
        this.todoService = todoService;
        this.authenticationService = authenticationService;
        this.datepickerConfigs = { dateInputFormat: 'YYYY-MM-DD' };
        this.isPageloaded = false;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.todoParams = {
            'length': 10,
            'module_id': 6,
            'module_related_id': 0
        };
        this.getTodos();
    };
    TodoComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        this.changeTodosStatus();
    };
    TodoComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getAllTodos({ 'length': 10 })
            .subscribe(function (data) {
            _this.todos = data;
            _this.isPageloaded = true;
        }, function (error) { });
    };
    TodoComponent.prototype.changeTodosStatus = function () {
        var _this = this;
        this.todoService.changeTodosStatus(this.todos)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.status'), _this.translate.instant('todos.title'));
            _this.getTodos();
        }, function (error) { });
    };
    TodoComponent.prototype.openTodoCreateModal = function () {
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
    TodoComponent.prototype.openTodoEditModal = function (todo) {
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
    TodoComponent.prototype.deleteTodo = function (id) {
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
    TodoComponent.prototype.saveTodosDetail = function (todo, index, value) {
        var _this = this;
        todo[index] = value;
        this.todoService.update(todo)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.update'), _this.translate.instant('todos.title'));
            _this.getTodos();
        });
    };
    TodoComponent = __decorate([
        Component({
            selector: 'app-todo',
            templateUrl: './todo.component.html',
            styleUrls: ['./todo.component.scss'],
            providers: [DatePipe]
        }),
        __metadata("design:paramtypes", [TranslateService,
            NgxRolesService,
            BsModalService,
            HttpClient,
            ToastrService,
            TodoService,
            AuthenticationService])
    ], TodoComponent);
    return TodoComponent;
}());
export { TodoComponent };
//# sourceMappingURL=todo.component.js.map