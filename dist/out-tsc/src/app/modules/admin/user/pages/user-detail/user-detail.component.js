import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxRolesService } from 'ngx-permissions';
import { UserService } from '../../../../../core/services/user.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { environment } from '../../../../../../environments/environment';
var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(ngxRolesService, route, router, toastr, userService, authenticationService) {
        var _this = this;
        this.ngxRolesService = ngxRolesService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.userActiveTab = '1';
        this.isPageLoaded = false;
        this.permission = false;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.getUserById(params.get('id'));
        });
    }
    UserDetailComponent.prototype.ngOnInit = function () { };
    UserDetailComponent.prototype.setActiveUserTab = function ($event) {
        this.userActiveTab = $event.id;
    };
    UserDetailComponent.prototype.getActiveUserTab = function (tab) {
        return this.userActiveTab === tab;
    };
    UserDetailComponent.prototype.checkUserHavePermission = function (user) {
        var roleName = this.ngxRolesService.getRole('admin');
        if ((roleName && roleName.name == 'admin') || this.loginUser.is_super_admin) {
            this.permission = true;
        }
        else if ((this.checkDepartmentsRoles(user) || user.is_super_admin) && user.id == this.loginUser.id) {
            this.permission = true;
        }
        else if ((this.checkDepartmentsRoles(user) || user.is_super_admin) && user.id != this.loginUser.id) {
            this.permission = false;
        }
        else if (user.id == this.loginUser.id) {
            this.permission = true;
        }
        else if (!user.permission) {
            this.permission = false;
        }
        else {
            if (user.permission == 'all') {
                for (var iRow in this.assignUserPermissions) {
                    if (this.assignUserPermissions[iRow].id == this.loginUser.id) {
                        this.permission = true;
                    }
                }
            }
            else {
                if (typeof user.permission == "string") {
                    var loginUserPermissions = JSON.parse(user.permission);
                    if (loginUserPermissions[this.loginUser.id]) {
                        for (var iRow in loginUserPermissions[this.loginUser.id]) {
                            if (loginUserPermissions[this.loginUser.id][iRow] == "edit") {
                                this.permission = true;
                            }
                        }
                    }
                }
                else {
                    this.permission = false;
                }
            }
        }
        this.isPageLoaded = true;
    };
    UserDetailComponent.prototype.checkDepartmentsRoles = function (user) {
        var isAdmin = false;
        for (var iRow in user.departments) {
            for (var jRow in user.departments[iRow].roles) {
                if (user.departments[iRow].roles[jRow].id == 1) {
                    isAdmin = true;
                }
            }
        }
        return isAdmin;
    };
    UserDetailComponent.prototype.getAssignUserPermissions = function () {
        var _this = this;
        this.userService.getUserPermissions()
            .subscribe(function (data) {
            _this.assignUserPermissions = data;
            _this.checkUserHavePermission(_this.user);
        });
    };
    UserDetailComponent.prototype.getUserById = function (userId) {
        var _this = this;
        this.userService.getById(userId)
            .subscribe(function (data) {
            _this.user = data;
            _this.getAssignUserPermissions();
        });
    };
    UserDetailComponent = __decorate([
        Component({
            selector: 'app-user-detail',
            templateUrl: './user-detail.component.html',
            styleUrls: ['./user-detail.component.scss']
        }),
        __metadata("design:paramtypes", [NgxRolesService,
            ActivatedRoute,
            Router,
            ToastrService,
            UserService,
            AuthenticationService])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
export { UserDetailComponent };
//# sourceMappingURL=user-detail.component.js.map