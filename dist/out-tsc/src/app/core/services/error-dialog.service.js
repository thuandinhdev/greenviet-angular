import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
var ErrorDialogService = /** @class */ (function () {
    function ErrorDialogService(modalService) {
        this.modalService = modalService;
    }
    ErrorDialogService.prototype.ngOnInit = function () { };
    ErrorDialogService.prototype.openDialog = function (error, errorMessages) {
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered animated zoomIn",
            initialState: {
                error: error,
                errorMessages: errorMessages
            }
        };
        this.modalRef = this.modalService.show(ErrorDialogComponent, modalConfigs);
        this.modalRef.content.onClose.subscribe(function (result) { });
    };
    ErrorDialogService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [BsModalService])
    ], ErrorDialogService);
    return ErrorDialogService;
}());
export { ErrorDialogService };
//# sourceMappingURL=error-dialog.service.js.map