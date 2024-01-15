import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { UserService } from '../../../../../core/services/user.service';
var ChangeEmailModalComponent = /** @class */ (function () {
    function ChangeEmailModalComponent(translate, bsModalRef, formBuilder, toastr, userService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
    }
    ChangeEmailModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForms();
    };
    ChangeEmailModalComponent.prototype.loadForms = function () {
        this.changeUserEmailForm = this.formBuilder.group({
            id: this.user.id,
            email: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required]
        });
    };
    Object.defineProperty(ChangeEmailModalComponent.prototype, "userControl", {
        get: function () { return this.changeUserEmailForm.controls; },
        enumerable: false,
        configurable: true
    });
    ChangeEmailModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.changeUserEmailForm.invalid) {
            return;
        }
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // this.onCancel();
        // return;
        this.userService.changeEmail(this.changeUserEmailForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('users.messages.email_change'), _this.translate.instant('users.title'));
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    ChangeEmailModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    ChangeEmailModalComponent = __decorate([
        Component({
            selector: 'app-change-email-modal',
            templateUrl: './change-email-modal.component.html',
            styleUrls: ['./change-email-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            UserService])
    ], ChangeEmailModalComponent);
    return ChangeEmailModalComponent;
}());
export { ChangeEmailModalComponent };
//# sourceMappingURL=change-email-modal.component.js.map