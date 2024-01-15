import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { DepartmentService } from '../../../../../core/services/department.service';
import { loadDepartmentMenu } from '../../../../../core/helpers/app.helper';
import * as _ from "lodash";
var DepartmentDetailComponent = /** @class */ (function () {
    function DepartmentDetailComponent(translate, route, router, http, toastr, departmentService) {
        var _this = this;
        this.translate = translate;
        this.route = route;
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.departmentService = departmentService;
        this.isDepartmentLoaded = false;
        this.route.paramMap.subscribe(function (params) {
            _this.getDepartments(params.get('id'), params.get('roleId'));
        });
    }
    DepartmentDetailComponent.prototype.ngOnInit = function () { };
    DepartmentDetailComponent.prototype.getDepartments = function (departmentId, roleId) {
        var _this = this;
        this.departmentId = departmentId;
        this.roleId = roleId;
        this.departmentService.getDepartmentDetail(departmentId, roleId)
            .subscribe(function (data) {
            _this.isDepartmentLoaded = true;
            _this.departmentInfo = data;
            setTimeout(function () {
                loadDepartmentMenu();
            });
        });
    };
    DepartmentDetailComponent.prototype.selectAllPermissions = function (event) {
        $(':checkbox').prop('checked', event.target.checked);
    };
    DepartmentDetailComponent.prototype.selectAllViewPermissions = function (event) {
        var that = this;
        $(".view input").prop('checked', event.target.checked);
        // --
        // All parent/nested parent selected
        if ($(".view input").prop("checked") == true) {
            that.checkParentPermission(1);
        }
        else {
            that.uncheckParentPermission(1, 2);
        }
    };
    DepartmentDetailComponent.prototype.selectAllCreatePermissions = function (event) {
        var that = this;
        $(".create input").prop('checked', event.target.checked);
        // --
        // All parent/nested parent selected
        if ($(".create input").prop("checked") == true) {
            that.checkParentPermission(1);
        }
        else {
            that.uncheckParentPermission(1, 3);
        }
    };
    DepartmentDetailComponent.prototype.selectAllEditPermissions = function (event) {
        var that = this;
        $(".edit input").prop('checked', event.target.checked);
        // --
        // All parent/nested parent selected
        if ($(".edit input").prop("checked") == true) {
            that.checkParentPermission(1);
        }
        else {
            that.uncheckParentPermission(1, 4);
        }
    };
    DepartmentDetailComponent.prototype.selectAllDeletePermissions = function (event) {
        var that = this;
        $(".delete input").prop('checked', event.target.checked);
        // --
        // All parent/nested parent selected
        if ($(".delete input").prop("checked") == true) {
            that.checkParentPermission(1);
        }
        else {
            that.uncheckParentPermission(1, 5);
        }
    };
    // --
    // Check permissions
    DepartmentDetailComponent.prototype.checkParentPermission = function (key) {
        // --
        // Parent
        $('.parent').each(function () {
            $(this).parent().parent().children('td').eq(key).find('input').prop('checked', true);
        });
        // --
        // Nested parent
        $('.nested_parent').each(function () {
            $(this).parent().parent().children('td').eq(key).find('input').prop('checked', true);
        });
        // --
        // Nested parent child
        $('.nested_parent_child').each(function () {
            $(this).parent().parent().children('td').eq(key).find('input').prop('checked', true);
        });
    };
    // --
    // Uncheck permissions
    DepartmentDetailComponent.prototype.uncheckParentPermission = function (key, key1) {
        // --
        // Parent
        $('.parent').each(function () {
            if ($(this).parent().parent().find('input:checked').not($(this).parent().parent().children('td').eq(key).find('input')).not($(this).parent().parent().children('td').eq(key1).find('input')).length == 0) {
                $(this).parent().parent().children('td').eq(key).find('input').prop('checked', false);
            }
        });
        // --
        // Nested parent
        $('.nested_parent').each(function () {
            if ($(this).parent().parent().find('input:checked').not($(this).parent().parent().children('td').eq(key).find('input')).not($(this).parent().parent().children('td').eq(key1).find('input')).length == 0) {
                $(this).parent().parent().children('td').eq(key).find('input').prop('checked', false);
            }
        });
        // --
        // Nested parent child
        $('.nested_parent_child').each(function () {
            if ($(this).parent().parent().find('input:checked').not($(this).parent().parent().children('td').eq(key).find('input')).not($(this).parent().parent().children('td').eq(key1).find('input')).length == 0) {
                $(this).parent().parent().children('td').eq(key).find('input').prop('checked', false);
            }
        });
    };
    DepartmentDetailComponent.prototype.getPermissionChecked = function (permissionKey, key) {
        if (this.departmentInfo.permissions[permissionKey]) {
            switch (key) {
                case 'view':
                    return this.departmentInfo.permissions[permissionKey].view == permissionKey;
                    break;
                case 'created':
                    return this.departmentInfo.permissions[permissionKey].created == permissionKey;
                    break;
                case 'edited':
                    return this.departmentInfo.permissions[permissionKey].edited == permissionKey;
                    break;
                case 'deleted':
                    return this.departmentInfo.permissions[permissionKey].deleted == permissionKey;
                    break;
                default:
                    return this.departmentInfo.permissions[permissionKey].id == permissionKey;
                    break;
            }
        }
        else {
            return false;
        }
    };
    DepartmentDetailComponent.prototype.isObjectEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    DepartmentDetailComponent.prototype.expandRow = function (index) {
        this.expandedIndex = index === this.expandedIndex ? -1 : index;
    };
    DepartmentDetailComponent.prototype.saveDepartment = function () {
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // this.router.navigate(['departments']);
        // return;
        var _this = this;
        var submenu = [], menu = [], childMenu = [], finalSubmenus = [];
        if ($('form#departmentForm').serializeArray()) {
            submenu = $('form#departmentForm').serializeArray();
        }
        $(".menus_selected input:checkbox:checked").map(function () {
            menu.push($(this).val());
        }).get();
        $(".child input:checkbox:checked").map(function () {
            childMenu.push($(this).val());
        }).get();
        // --
        // Submenus
        if (submenu) {
            for (var iRow in submenu) {
                if (!finalSubmenus[submenu[iRow].value]) {
                    finalSubmenus[submenu[iRow].value] = {
                        'view': 0,
                        'created': 0,
                        'edited': 0,
                        'deleted': 0
                    };
                }
                if (submenu[iRow].name.indexOf('view') == 0) {
                    finalSubmenus[submenu[iRow].value].view = parseInt(submenu[iRow].value);
                }
                if (submenu[iRow].name.indexOf('create') == 0) {
                    finalSubmenus[submenu[iRow].value].created = parseInt(submenu[iRow].value);
                }
                if (submenu[iRow].name.indexOf('edit') == 0) {
                    finalSubmenus[submenu[iRow].value].edited = parseInt(submenu[iRow].value);
                }
                if (submenu[iRow].name.indexOf('delete') == 0) {
                    finalSubmenus[submenu[iRow].value].deleted = parseInt(submenu[iRow].value);
                }
            }
        }
        this.departmentService.updateDepartmentDetail(this.departmentId, this.roleId, { 'menu': _.union(menu, childMenu), 'submenu': finalSubmenus }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('departments.messages.update'), _this.translate.instant('departments.title'));
            _this.router.navigate(['departments']);
        });
    };
    DepartmentDetailComponent = __decorate([
        Component({
            selector: 'app-department-detail',
            templateUrl: './department-detail.component.html',
            styleUrls: ['./department-detail.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ActivatedRoute,
            Router,
            HttpClient,
            ToastrService,
            DepartmentService])
    ], DepartmentDetailComponent);
    return DepartmentDetailComponent;
}());
export { DepartmentDetailComponent };
//# sourceMappingURL=department-detail.component.js.map