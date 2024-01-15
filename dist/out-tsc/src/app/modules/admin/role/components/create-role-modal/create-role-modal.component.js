import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { RoleService } from '../../../../../core/services/role.service';
var CreateRoleModalComponent = /** @class */ (function () {
    function CreateRoleModalComponent(translate, bsCreateRoleModalRef, formBuilder, roleService, toastr) {
        this.translate = translate;
        this.bsCreateRoleModalRef = bsCreateRoleModalRef;
        this.formBuilder = formBuilder;
        this.roleService = roleService;
        this.toastr = toastr;
        this.event = new EventEmitter();
        this.isSubmitted = false;
    }
    CreateRoleModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForm();
    };
    CreateRoleModalComponent.prototype.loadForm = function () {
        this.createRoleForm = this.formBuilder.group({
            name: [null, [Validators.required, Validators.maxLength(50)]],
            slug: [null, [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z\_]+$/)]],
            description: ['']
        });
    };
    Object.defineProperty(CreateRoleModalComponent.prototype, "roleControl", {
        get: function () { return this.createRoleForm.controls; },
        enumerable: false,
        configurable: true
    });
    CreateRoleModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.createRoleForm.invalid) {
            return;
        }
        this.roleService.create(this.createRoleForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('roles.messages.create'), _this.translate.instant('roles.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    CreateRoleModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateRoleModalRef.hide();
    };
    CreateRoleModalComponent = __decorate([
        Component({
            selector: 'app-create-role-modal',
            templateUrl: './create-role-modal.component.html',
            styleUrls: ['./create-role-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            RoleService,
            ToastrService])
    ], CreateRoleModalComponent);
    return CreateRoleModalComponent;
}());
export { CreateRoleModalComponent };
//# sourceMappingURL=create-role-modal.component.js.map