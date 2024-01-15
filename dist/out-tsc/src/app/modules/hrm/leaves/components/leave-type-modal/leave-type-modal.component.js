import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
var LeaveTypeModalComponent = /** @class */ (function () {
    function LeaveTypeModalComponent(bsModalRef1, modalService) {
        this.bsModalRef1 = bsModalRef1;
        this.modalService = modalService;
        this.event = new EventEmitter();
    }
    LeaveTypeModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
    };
    LeaveTypeModalComponent.prototype.onCancel = function () {
        this.event.emit({ data: true });
        this.onClose.next(false);
        this.bsModalRef1.hide();
    };
    LeaveTypeModalComponent = __decorate([
        Component({
            selector: 'app-leave-type-modal',
            templateUrl: './leave-type-modal.component.html',
            styleUrls: ['./leave-type-modal.component.scss']
        }),
        __metadata("design:paramtypes", [BsModalRef,
            BsModalService])
    ], LeaveTypeModalComponent);
    return LeaveTypeModalComponent;
}());
export { LeaveTypeModalComponent };
//# sourceMappingURL=leave-type-modal.component.js.map