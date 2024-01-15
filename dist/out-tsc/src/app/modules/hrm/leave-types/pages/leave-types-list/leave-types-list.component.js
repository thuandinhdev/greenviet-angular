import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { NgxRolesService } from 'ngx-permissions';
import Swal from 'sweetalert2';
import { LeavetypeService } from '../../../../../core/services/leavetype.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
var LeaveTypesListComponent = /** @class */ (function () {
    function LeaveTypesListComponent(translate, ngxRolesService, http, toastr, formBuilder, authenticationService, leavetypeService) {
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.leavetypeService = leavetypeService;
        this.leaveTypes = [];
        this.isSubmitted = false;
    }
    LeaveTypesListComponent.prototype.ngOnInit = function () {
        this.getLeaveTypes();
        this.loadForms();
    };
    LeaveTypesListComponent.prototype.loadForms = function () {
        this.createLeaveTypeForm = this.formBuilder.group({
            leave_type: [null, [Validators.required, Validators.maxLength(20)]],
            color: ['#1ab394'],
            no_of_leaves: [null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
        });
    };
    Object.defineProperty(LeaveTypesListComponent.prototype, "leavetypeControl", {
        get: function () { return this.createLeaveTypeForm.controls; },
        enumerable: false,
        configurable: true
    });
    LeaveTypesListComponent.prototype.getLeaveTypes = function () {
        var _this = this;
        this.leavetypeService.getAll()
            .subscribe(function (data) {
            _this.leaveTypes = data;
        });
    };
    LeaveTypesListComponent.prototype.saveLeaveTypeDetail = function (index, name, value) {
        var _this = this;
        this.leaveTypes[index][name] = value;
        this.leavetypeService.update(this.leaveTypes[index])
            .subscribe(function (data) {
            _this.toastr.success('Leavetype Updated Succesfully.', 'Leave Types');
            _this.getLeaveTypes();
        });
    };
    LeaveTypesListComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.createLeaveTypeForm.invalid) {
            return;
        }
        this.leavetypeService.create(this.createLeaveTypeForm.value)
            .subscribe(function (data) {
            _this.toastr.success('Leavetype Created Succesfully.', 'Leave Types');
            _this.getLeaveTypes();
        });
    };
    LeaveTypesListComponent.prototype.deleteLeaveType = function (id) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.leavetypeService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success('Leavetype Deleted Succesfully.', 'Leave Types');
                    _this.getLeaveTypes();
                });
            }
        });
    };
    LeaveTypesListComponent = __decorate([
        Component({
            selector: 'app-leave-types-list',
            templateUrl: './leave-types-list.component.html',
            styleUrls: ['./leave-types-list.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            NgxRolesService,
            HttpClient,
            ToastrService,
            FormBuilder,
            AuthenticationService,
            LeavetypeService])
    ], LeaveTypesListComponent);
    return LeaveTypesListComponent;
}());
export { LeaveTypesListComponent };
//# sourceMappingURL=leave-types-list.component.js.map