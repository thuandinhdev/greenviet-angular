import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { IncidentAttachmentService } from '../../../../../core/services/incident-attachment.service';
import { CreateAttachmentModalComponent } from '../../components/create-attachment-modal/create-attachment-modal.component';
import { environment } from '../../../../../../environments/environment';
var IncidentAttachmentComponent = /** @class */ (function () {
    function IncidentAttachmentComponent(translate, toastr, route, modalService, incidentAttachmentService) {
        this.translate = translate;
        this.toastr = toastr;
        this.route = route;
        this.modalService = modalService;
        this.incidentAttachmentService = incidentAttachmentService;
        this.apiUrl = environment.apiUrl;
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                incidentId: this.route.snapshot.params.id,
            }
        };
        this.getAttachments(this.route.snapshot.params.id);
    }
    IncidentAttachmentComponent.prototype.ngOnInit = function () { };
    IncidentAttachmentComponent.prototype.getAttachments = function (incidentId, isLoad) {
        var _this = this;
        if (isLoad === void 0) { isLoad = true; }
        this.incidentAttachmentService.getAllAttachmentById(incidentId).subscribe(function (data) {
            _this.attachments = data;
        });
    };
    IncidentAttachmentComponent.prototype.openAttachmentCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(CreateAttachmentModalComponent, this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getAttachments(_this.incident.id, false);
        });
    };
    IncidentAttachmentComponent.prototype.attachmentDelete = function (attachmentId) {
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
                _this.incidentAttachmentService.delete(attachmentId).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('attachments.messages.delete'), _this.translate.instant('incidents.title'));
                    _this.getAttachments(_this.incident.id, false);
                });
            }
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IncidentAttachmentComponent.prototype, "incident", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IncidentAttachmentComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IncidentAttachmentComponent.prototype, "permission", void 0);
    IncidentAttachmentComponent = __decorate([
        Component({
            selector: 'app-incident-attachment',
            templateUrl: './incident-attachment.component.html',
            styleUrls: ['./incident-attachment.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            ActivatedRoute,
            BsModalService,
            IncidentAttachmentService])
    ], IncidentAttachmentComponent);
    return IncidentAttachmentComponent;
}());
export { IncidentAttachmentComponent };
//# sourceMappingURL=incident-attachment.component.js.map