import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { RoleService } from '../../../../../core/services/role.service';
import { DepartmentService } from '../../../../../core/services/department.service';
var CreateDepartmentModalComponent = /** @class */ (function () {
    function CreateDepartmentModalComponent(translate, bsCreateModalRef, formBuilder, toastr, roleService, departmentService) {
        this.translate = translate;
        this.bsCreateModalRef = bsCreateModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.roleService = roleService;
        this.departmentService = departmentService;
        this.isSubmitted = false;
        this.department_roles = [];
    }
    CreateDepartmentModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForm();
        this.getRoles();
    };
    CreateDepartmentModalComponent.prototype.loadForm = function () {
        this.createDepartmentForm = this.formBuilder.group({
            department_name: ['', Validators.required]
        });
    };
    Object.defineProperty(CreateDepartmentModalComponent.prototype, "departmentControl", {
        get: function () { return this.createDepartmentForm.controls; },
        enumerable: false,
        configurable: true
    });
    CreateDepartmentModalComponent.prototype.getRoles = function () {
        var _this = this;
        this.roleService.getAll()
            .subscribe(function (data) {
            _this.roles = data;
        });
    };
    CreateDepartmentModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.createDepartmentForm.invalid || this.department_roles.length == 0) {
            return;
        }
        var roleObj = {
            name: this.createDepartmentForm.value.department_name,
            department_roles: this.department_roles
        };
        this.departmentService.create(roleObj)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('departments.messages.create'), _this.translate.instant('departments.title'));
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    CreateDepartmentModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateModalRef.hide();
    };
    CreateDepartmentModalComponent = __decorate([
        Component({
            selector: 'app-create-department-modal',
            templateUrl: './create-department-modal.component.html',
            styleUrls: ['./create-department-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            RoleService,
            DepartmentService])
    ], CreateDepartmentModalComponent);
    return CreateDepartmentModalComponent;
}());
export { CreateDepartmentModalComponent };
//# sourceMappingURL=create-department-modal.component.js.map