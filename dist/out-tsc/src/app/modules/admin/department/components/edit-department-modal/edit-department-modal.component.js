import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { RoleService } from '../../../../../core/services/role.service';
import { DepartmentService } from '../../../../../core/services/department.service';
var EditDepartmentModalComponent = /** @class */ (function () {
    function EditDepartmentModalComponent(translate, bsEditModalRef, formBuilder, toastr, roleService, departmentService) {
        this.translate = translate;
        this.bsEditModalRef = bsEditModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.roleService = roleService;
        this.departmentService = departmentService;
        this.isSubmitted = false;
        this.department_roles = [];
    }
    EditDepartmentModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.getRoles();
        this.loadForm();
    };
    EditDepartmentModalComponent.prototype.loadForm = function () {
        this.editDepartmentForm = this.formBuilder.group({
            department_name: [this.department.name, Validators.required]
        });
        if (this.department && this.department.roles.length > 0) {
            for (var iRow in this.department.roles) {
                this.department_roles.push(this.department.roles[iRow].id);
            }
        }
    };
    Object.defineProperty(EditDepartmentModalComponent.prototype, "departmentControl", {
        get: function () { return this.editDepartmentForm.controls; },
        enumerable: false,
        configurable: true
    });
    EditDepartmentModalComponent.prototype.getRoles = function () {
        var _this = this;
        this.roleService.getAll()
            .subscribe(function (data) {
            _this.roles = data;
        });
    };
    EditDepartmentModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.editDepartmentForm.invalid || this.department_roles.length == 0) {
            return;
        }
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // this.onCancel();
        // return;
        var roleObj = {
            id: this.department.id,
            name: this.editDepartmentForm.value.department_name,
            department_roles: this.department_roles
        };
        this.departmentService.update(roleObj)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('departments.messages.update'), _this.translate.instant('departments.title'));
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    EditDepartmentModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditModalRef.hide();
    };
    EditDepartmentModalComponent = __decorate([
        Component({
            selector: 'app-edit-department-modal',
            templateUrl: './edit-department-modal.component.html',
            styleUrls: ['./edit-department-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            RoleService,
            DepartmentService])
    ], EditDepartmentModalComponent);
    return EditDepartmentModalComponent;
}());
export { EditDepartmentModalComponent };
//# sourceMappingURL=edit-department-modal.component.js.map