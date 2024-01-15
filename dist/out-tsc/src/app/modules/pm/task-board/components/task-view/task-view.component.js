import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { TaskService } from '../../../../../core/services/task.service';
import { TaskEditComponent } from './../task-edit/task-edit.component';
import { task_status_key_value } from "./../../../../../core/helpers/pm-helper";
import { environment } from '../../../../../../environments/environment';
var TaskViewComponent = /** @class */ (function () {
    function TaskViewComponent(translate, bsCreateTaskModalRef, bsViewTaskModalRef, modalService, toastr, taskService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.bsCreateTaskModalRef = bsCreateTaskModalRef;
        this.bsViewTaskModalRef = bsViewTaskModalRef;
        this.modalService = modalService;
        this.toastr = toastr;
        this.taskService = taskService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.event = new EventEmitter();
        this.taskstatusKeyValue = task_status_key_value;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TaskViewComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
    };
    TaskViewComponent.prototype.getTaskStatus = function (status) {
        return 'tasks.status' + status;
    };
    TaskViewComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.taskstatusKeyValue[statusKey];
    };
    TaskViewComponent.prototype.changeTaskStatus = function (taskId, status) {
        var _this = this;
        var changeTask = {
            id: taskId,
            status: status.id
        };
        this.taskService.changeStatus(changeTask)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.status'), _this.translate.instant('tasks.title'));
        });
    };
    TaskViewComponent.prototype.openTaskEditModal = function (taskdata) {
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn",
            initialState: {
                task: taskdata,
            }
        };
        this.modalRef = this.modalService.show(TaskEditComponent, modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
        });
    };
    TaskViewComponent.prototype.deleteTask = function (id) {
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
                _this.taskService.delete(id)
                    .subscribe(function (data) {
                    _this.onCancel();
                });
            }
        });
    };
    TaskViewComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsViewTaskModalRef.hide();
    };
    TaskViewComponent = __decorate([
        Component({
            selector: 'app-task-view',
            templateUrl: './task-view.component.html',
            styleUrls: ['./task-view.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            BsModalRef,
            BsModalService,
            ToastrService,
            TaskService,
            AuthenticationService])
    ], TaskViewComponent);
    return TaskViewComponent;
}());
export { TaskViewComponent };
//# sourceMappingURL=task-view.component.js.map