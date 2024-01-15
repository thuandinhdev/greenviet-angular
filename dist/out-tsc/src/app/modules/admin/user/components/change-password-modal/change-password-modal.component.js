import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { UserService } from '../../../../../core/services/user.service';
import { MustMatch } from './../../../../../core/helpers/must-match.validator';
var ChangePasswordModalComponent = /** @class */ (function () {
    function ChangePasswordModalComponent(translate, bsModalRef, formBuilder, toastr, userService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
    }
    ChangePasswordModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForms();
    };
    ChangePasswordModalComponent.prototype.loadForms = function () {
        this.changeUserPasswordForm = this.formBuilder.group({
            id: this.user.id,
            old_password: [null, Validators.required],
            password: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            password_confirmation: [null, Validators.required],
        }, {
            validator: MustMatch('password', 'password_confirmation')
        });
    };
    Object.defineProperty(ChangePasswordModalComponent.prototype, "userControl", {
        get: function () { return this.changeUserPasswordForm.controls; },
        enumerable: false,
        configurable: true
    });
    ChangePasswordModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.changeUserPasswordForm.invalid) {
            return;
        }
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // this.onCancel();
        // return;
        this.userService.changePassword(this.changeUserPasswordForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('users.messages.password_change'), _this.translate.instant('users.title'));
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    ChangePasswordModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    ChangePasswordModalComponent = __decorate([
        Component({
            selector: 'app-change-password-modal',
            templateUrl: './change-password-modal.component.html',
            styleUrls: ['./change-password-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            UserService])
    ], ChangePasswordModalComponent);
    return ChangePasswordModalComponent;
}());
export { ChangePasswordModalComponent };
//# sourceMappingURL=change-password-modal.component.js.map