import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { TodoService } from '../../../../../core/services/todo.service';
var CreateTodoModalComponent = /** @class */ (function () {
    function CreateTodoModalComponent(translate, datepipe, bsModalRef, formBuilder, toastr, todoService) {
        this.translate = translate;
        this.datepipe = datepipe;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.todoService = todoService;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    CreateTodoModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.minDate = new Date();
        this.loadForms();
    };
    CreateTodoModalComponent.prototype.loadForms = function () {
        this.createTodoForm = this.formBuilder.group({
            description: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
            due_date: [new Date(), Validators.required],
            module_id: [this.todoParams.module_id],
            module_related_id: [this.todoParams.module_related_id]
        });
    };
    Object.defineProperty(CreateTodoModalComponent.prototype, "todoControl", {
        get: function () { return this.createTodoForm.controls; },
        enumerable: false,
        configurable: true
    });
    CreateTodoModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createTodoForm.invalid) {
            return;
        }
        this.createTodoForm.value.due_date = this.datepipe.transform(this.createTodoForm.value.due_date, 'yyyy-MM-dd');
        this.todoService.create(this.createTodoForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.create'), _this.translate.instant('todos.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    CreateTodoModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CreateTodoModalComponent.prototype, "todoParams", void 0);
    CreateTodoModalComponent = __decorate([
        Component({
            selector: 'app-create-todo-modal',
            templateUrl: './create-todo-modal.component.html',
            styleUrls: ['./create-todo-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            DatePipe,
            BsModalRef,
            FormBuilder,
            ToastrService,
            TodoService])
    ], CreateTodoModalComponent);
    return CreateTodoModalComponent;
}());
export { CreateTodoModalComponent };
//# sourceMappingURL=create-todo-modal.component.js.map