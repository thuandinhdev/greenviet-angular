import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { TaskAttachmentService } from '../../../../../core/services/task-attachment.service';
import { CreateAttachmentModalComponent } from '../../components/create-attachment-modal/create-attachment-modal.component';
var TaskAttachmentsComponent = /** @class */ (function () {
    function TaskAttachmentsComponent(translate, toastr, route, http, modalService, taskAttachmentService) {
        this.translate = translate;
        this.toastr = toastr;
        this.route = route;
        this.http = http;
        this.modalService = modalService;
        this.taskAttachmentService = taskAttachmentService;
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                taskId: this.route.snapshot.params.id,
            }
        };
        this.getAllAttachment(this.route.snapshot.params.id);
    }
    TaskAttachmentsComponent.prototype.ngOnInit = function () { };
    TaskAttachmentsComponent.prototype.getAllAttachment = function (taskId) {
        var _this = this;
        this.taskAttachmentService.getAllAttachmentById(taskId).subscribe(function (data) {
            _this.attachments = data;
        });
    };
    TaskAttachmentsComponent.prototype.openAttachmentCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(CreateAttachmentModalComponent, this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getAllAttachment(_this.task.id);
        });
    };
    TaskAttachmentsComponent.prototype.attachmentDelete = function (attachmentId) {
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
                _this.taskAttachmentService.delete(attachmentId).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('attachments.messages.delete'), _this.translate.instant('tasks.title'));
                    _this.getAllAttachment(_this.task.id);
                });
            }
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TaskAttachmentsComponent.prototype, "task", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TaskAttachmentsComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TaskAttachmentsComponent.prototype, "permission", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TaskAttachmentsComponent.prototype, "apiUrl", void 0);
    TaskAttachmentsComponent = __decorate([
        Component({
            selector: 'app-task-attachments',
            templateUrl: './task-attachments.component.html',
            styleUrls: ['./task-attachments.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            ActivatedRoute,
            HttpClient,
            BsModalService,
            TaskAttachmentService])
    ], TaskAttachmentsComponent);
    return TaskAttachmentsComponent;
}());
export { TaskAttachmentsComponent };
//# sourceMappingURL=task-attachments.component.js.map