import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { UserService } from '../../../../../core/services/user.service';
var AssignUserComponent = /** @class */ (function () {
    function AssignUserComponent(bsModalRef, toastr, userService) {
        this.bsModalRef = bsModalRef;
        this.toastr = toastr;
        this.userService = userService;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.permissions = [];
        this.permissionsUsers = [];
        this.assignPermissions = [];
        this.hideElements = [];
        this.isModalLoaded = false;
    }
    AssignUserComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.getAssignUserPermissions();
    };
    AssignUserComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    AssignUserComponent.prototype.getAssignUserPermissions = function () {
        var _this = this;
        this.userService.getUserPermissions()
            .subscribe(function (data) {
            _this.assignUserPermissions = data;
            _this.setAssignUserPermissions();
            _this.isModalLoaded = true;
        });
    };
    AssignUserComponent.prototype.setAssignUserPermissions = function () {
        for (var iRow in this.assignUserPermissions) {
            this.permissions[this.assignUserPermissions[iRow].id] = ['view', 'delete', 'edit'];
            this.permissionsUsers[this.assignUserPermissions[iRow].id] = {
                'name': this.assignUserPermissions[iRow].firstname + ' ' + this.assignUserPermissions[iRow].lastname
            };
        }
    };
    AssignUserComponent.prototype.changePermissions = function (index, key) {
        this.hideElements[index] = !this.hideElements[index];
        if (this.hideElements[index]) {
            this.assignPermissions[key] = ['view'];
        }
        else {
            delete this.assignPermissions[key];
        }
    };
    AssignUserComponent.prototype.checkObjectKeys = function () {
        return Object.keys(this.assignPermissions).length == 0;
    };
    AssignUserComponent.prototype.isPermissionChecked = function (key, permission, index) {
        if (permission[key]) {
            this.hideElements[index] = true;
            return true;
        }
        else {
            return false;
        }
    };
    AssignUserComponent.prototype.onSubmit = function () {
        this.isFormSubmitted = true;
        if (this.checkObjectKeys()) {
            return false;
        }
        this.event.emit({ permissions: this.assignPermissions });
        this.onCancel();
    };
    AssignUserComponent = __decorate([
        Component({
            selector: 'app-assign-user',
            templateUrl: './assign-user.component.html',
            styleUrls: ['./assign-user.component.scss']
        }),
        __metadata("design:paramtypes", [BsModalRef,
            ToastrService,
            UserService])
    ], AssignUserComponent);
    return AssignUserComponent;
}());
export { AssignUserComponent };
//# sourceMappingURL=assign-user.component.js.map