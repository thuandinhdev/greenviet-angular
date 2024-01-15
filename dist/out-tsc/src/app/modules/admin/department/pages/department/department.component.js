import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { DepartmentService } from '../../../../../core/services/department.service';
import { CreateDepartmentModalComponent } from '../../components/create-department-modal/create-department-modal.component';
import { EditDepartmentModalComponent } from '../../components/edit-department-modal/edit-department-modal.component';
var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent(translate, http, modalService, toastr, departmentService) {
        this.translate = translate;
        this.http = http;
        this.modalService = modalService;
        this.toastr = toastr;
        this.departmentService = departmentService;
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn"
        };
    }
    DepartmentComponent.prototype.ngOnInit = function () {
        this.getDepartments();
    };
    DepartmentComponent.prototype.getDepartments = function () {
        var _this = this;
        this.departmentService.getAll()
            .subscribe(function (data) {
            _this.departments = data;
        });
    };
    DepartmentComponent.prototype.openDepartmentCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(CreateDepartmentModalComponent, this.modalConfigs);
        this.modalRef.content.onClose.subscribe(function (result) {
            _this.getDepartments();
        });
    };
    DepartmentComponent.prototype.openDepartmentEditModal = function (department) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                department: department
            }
        };
        this.modalRef = this.modalService.show(EditDepartmentModalComponent, modalConfig);
        this.modalRef.content.onClose.subscribe(function (result) {
            _this.getDepartments();
        });
    };
    DepartmentComponent.prototype.deleteDepartment = function (departmentId) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                // // --
                // this.toastr.error(this.translate.instant('common.not_allowed'));
                // return;
                _this.departmentService.delete(departmentId)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('departments.messages.update'), _this.translate.instant('departments.title'));
                    _this.getDepartments();
                });
            }
        });
    };
    DepartmentComponent.prototype.deleteDepartmentRole = function (departmentId, roleId) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + " " + this.translate.instant('departments.title2').toLowerCase(),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                // // --
                // this.toastr.error(this.translate.instant('common.not_allowed'));
                // return;
                _this.departmentService.deleteDepartmentRole(departmentId, roleId)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('roles.messages.delete'), _this.translate.instant('departments.title'));
                    _this.getDepartments();
                });
            }
        });
    };
    DepartmentComponent = __decorate([
        Component({
            selector: 'app-department',
            templateUrl: './department.component.html',
            styleUrls: ['./department.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            HttpClient,
            BsModalService,
            ToastrService,
            DepartmentService])
    ], DepartmentComponent);
    return DepartmentComponent;
}());
export { DepartmentComponent };
//# sourceMappingURL=department.component.js.map