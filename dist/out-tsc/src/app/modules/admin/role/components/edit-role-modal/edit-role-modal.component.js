import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { RoleService } from '../../../../../core/services/role.service';
var EditRoleModalComponent = /** @class */ (function () {
    function EditRoleModalComponent(translate, bsEditRoleModalRef, formBuilder, roleService, toastr) {
        this.translate = translate;
        this.bsEditRoleModalRef = bsEditRoleModalRef;
        this.formBuilder = formBuilder;
        this.roleService = roleService;
        this.toastr = toastr;
        this.event = new EventEmitter();
        this.isSubmitted = false;
    }
    EditRoleModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForm();
    };
    EditRoleModalComponent.prototype.loadForm = function () {
        this.editRoleForm = this.formBuilder.group({
            id: [this.role.id],
            name: [this.role.name, [Validators.required, Validators.maxLength(50)]],
            slug: [this.role.slug, [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z\_]+$/)]],
            description: [this.role.description]
        });
    };
    Object.defineProperty(EditRoleModalComponent.prototype, "roleControl", {
        get: function () { return this.editRoleForm.controls; },
        enumerable: false,
        configurable: true
    });
    EditRoleModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.editRoleForm.invalid) {
            return;
        }
        this.roleService.update(this.editRoleForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('roles.messages.update'), _this.translate.instant('roles.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    EditRoleModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditRoleModalRef.hide();
    };
    EditRoleModalComponent = __decorate([
        Component({
            selector: 'app-edit-role-modal',
            templateUrl: './edit-role-modal.component.html',
            styleUrls: ['./edit-role-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            RoleService,
            ToastrService])
    ], EditRoleModalComponent);
    return EditRoleModalComponent;
}());
export { EditRoleModalComponent };
//# sourceMappingURL=edit-role-modal.component.js.map