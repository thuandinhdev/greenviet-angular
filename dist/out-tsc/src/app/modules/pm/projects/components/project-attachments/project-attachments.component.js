import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { CreateAttachmentModalComponent } from '../../components/create-attachment-modal/create-attachment-modal.component';
import { ProjectAttachmentService } from '../../../../../core/services/project-attachment.service';
var ProjectAttachmentsComponent = /** @class */ (function () {
    function ProjectAttachmentsComponent(translate, toastr, route, modalService, projectAttachmentService) {
        this.translate = translate;
        this.toastr = toastr;
        this.route = route;
        this.modalService = modalService;
        this.projectAttachmentService = projectAttachmentService;
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                projectId: this.route.snapshot.params.id,
            }
        };
        this.getAllAttachment(this.route.snapshot.params.id);
    }
    ProjectAttachmentsComponent.prototype.ngOnInit = function () { };
    ProjectAttachmentsComponent.prototype.getAllAttachment = function (projectId, isLoad) {
        var _this = this;
        if (isLoad === void 0) { isLoad = true; }
        this.projectAttachmentService.getAllAttachmentById(projectId).subscribe(function (data) {
            _this.attachments = data;
        });
    };
    ProjectAttachmentsComponent.prototype.attachmentDelete = function (attachmentId) {
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
                _this.projectAttachmentService.delete(attachmentId)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('attachments.messages.delete'), _this.translate.instant('projects.title'));
                    _this.getAllAttachment(_this.project.id, false);
                });
            }
        });
    };
    ProjectAttachmentsComponent.prototype.openAttachmentCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(CreateAttachmentModalComponent, this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getAllAttachment(_this.project.id, false);
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectAttachmentsComponent.prototype, "project", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectAttachmentsComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectAttachmentsComponent.prototype, "permissions", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectAttachmentsComponent.prototype, "apiUrl", void 0);
    ProjectAttachmentsComponent = __decorate([
        Component({
            selector: 'app-project-attachments',
            templateUrl: './project-attachments.component.html',
            styleUrls: ['./project-attachments.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            ActivatedRoute,
            BsModalService,
            ProjectAttachmentService])
    ], ProjectAttachmentsComponent);
    return ProjectAttachmentsComponent;
}());
export { ProjectAttachmentsComponent };
//# sourceMappingURL=project-attachments.component.js.map