import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { UserService } from '../../../../../core/services/user.service';
import { TodoService } from '../../../../../core/services/todo.service';
var EditTodoModalComponent = /** @class */ (function () {
    function EditTodoModalComponent(translate, bsModalRef, formBuilder, toastr, userService, todoService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.todoService = todoService;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.users = [];
        this.assignMembers = [];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    EditTodoModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForms();
    };
    EditTodoModalComponent.prototype.loadForms = function () {
        this.editTodoForm = this.formBuilder.group({
            id: [this.todo.id],
            description: [this.todo.description, [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
            status: [this.todo.status, Validators.required],
            due_date: [new Date(this.todo.due_date), Validators.required],
            module_id: [this.todo.module_id],
            module_related_id: [this.todo.module_related_id]
        });
    };
    Object.defineProperty(EditTodoModalComponent.prototype, "todoControl", {
        get: function () { return this.editTodoForm.controls; },
        enumerable: false,
        configurable: true
    });
    EditTodoModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editTodoForm.invalid) {
            return;
        }
        this.todoService.update(this.editTodoForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.update'), _this.translate.instant('todos.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    EditTodoModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    EditTodoModalComponent = __decorate([
        Component({
            selector: 'app-edit-todo-modal',
            templateUrl: './edit-todo-modal.component.html',
            styleUrls: ['./edit-todo-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            UserService,
            TodoService])
    ], EditTodoModalComponent);
    return EditTodoModalComponent;
}());
export { EditTodoModalComponent };
//# sourceMappingURL=edit-todo-modal.component.js.map