import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
var ErrorDialogComponent = /** @class */ (function () {
    function ErrorDialogComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.onClose = new Subject();
    }
    ErrorDialogComponent.prototype.ngOnInit = function () { };
    ErrorDialogComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    ErrorDialogComponent = __decorate([
        Component({
            selector: 'app-error-dialog',
            templateUrl: './error-dialog.component.html',
            styleUrls: ['./error-dialog.component.scss']
        }),
        __metadata("design:paramtypes", [BsModalRef])
    ], ErrorDialogComponent);
    return ErrorDialogComponent;
}());
export { ErrorDialogComponent };
//# sourceMappingURL=error-dialog.component.js.map