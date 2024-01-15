import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { DefectAttachmentService } from '../../../../../core/services/defect-attachment.service';
import { CreateAttachmentModalComponent } from '../../components/create-attachment-modal/create-attachment-modal.component';
var DefectAttachmentComponent = /** @class */ (function () {
    function DefectAttachmentComponent(translate, toastr, modalService, route, defectAttachmentService) {
        this.translate = translate;
        this.toastr = toastr;
        this.modalService = modalService;
        this.route = route;
        this.defectAttachmentService = defectAttachmentService;
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered animated fadeIn",
            initialState: {
                defectId: this.route.snapshot.params.id,
            }
        };
        this.getAllAttachments(this.route.snapshot.params.id);
    }
    DefectAttachmentComponent.prototype.ngOnInit = function () { };
    DefectAttachmentComponent.prototype.getAllAttachments = function (defectId, isLoad) {
        var _this = this;
        if (isLoad === void 0) { isLoad = true; }
        this.defectAttachmentService.getAllAttachmentById(defectId).subscribe(function (data) {
            _this.attachments = data;
        });
    };
    DefectAttachmentComponent.prototype.openAttachmentCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(CreateAttachmentModalComponent, this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getAllAttachments(_this.defect.id, false);
        });
    };
    DefectAttachmentComponent.prototype.attachmentDelete = function (attachmentId) {
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
                _this.defectAttachmentService.delete(attachmentId).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('attachments.messages.delete'), _this.translate.instant('defects.title'));
                    _this.getAllAttachments(_this.defect.id, false);
                });
            }
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DefectAttachmentComponent.prototype, "defect", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DefectAttachmentComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DefectAttachmentComponent.prototype, "permission", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DefectAttachmentComponent.prototype, "apiUrl", void 0);
    DefectAttachmentComponent = __decorate([
        Component({
            selector: 'app-defect-attachment',
            templateUrl: './defect-attachment.component.html',
            styleUrls: ['./defect-attachment.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            BsModalService,
            ActivatedRoute,
            DefectAttachmentService])
    ], DefectAttachmentComponent);
    return DefectAttachmentComponent;
}());
export { DefectAttachmentComponent };
//# sourceMappingURL=defect-attachment.component.js.map