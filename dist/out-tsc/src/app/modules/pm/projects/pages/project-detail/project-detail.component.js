import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgxRolesService } from 'ngx-permissions';
import { ProjectService } from '../../../../../core/services/project.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { environment } from '../../../../../../environments/environment';
var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(ngxRolesService, route, router, projectService, authenticationService) {
        var _this = this;
        this.ngxRolesService = ngxRolesService;
        this.route = route;
        this.router = router;
        this.projectService = projectService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.permissions = [];
        this.isProjectTab = 1;
        this.activeProjectTab = '1';
        this.isPageLoaded = false;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.getCheckPermission(params);
        });
    }
    ProjectDetailComponent.prototype.ngOnInit = function () { };
    ProjectDetailComponent.prototype.getCheckPermission = function (params) {
        var _this = this;
        var role = this.ngxRolesService.getRole('admin');
        this.permissions['project_permission'] = false;
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            this.permissions['project_permission'] = true;
            this.permissions['edit_delete_permission'] = {
                view: true,
                edit: true,
                delete: true
            };
            this.getById(params.get('id'));
        }
        else {
            this.projectService.getProjectPermission(params.get('id')).subscribe(function (res) {
                _this.permissions['edit_delete_permission'] = res;
                if (_this.permissions.edit_delete_permission.view) {
                    _this.getById(params.get('id'));
                }
                else {
                    _this.router.navigate(['projects']);
                }
            }, function (error) {
                _this.router.navigate(['projects']);
            });
        }
    };
    ProjectDetailComponent.prototype.setActiveProjectTab = function ($event) {
        this.activeProjectTab = $event.id;
    };
    ProjectDetailComponent.prototype.getActiveProjectTab = function (tab) {
        return this.activeProjectTab === tab;
    };
    ProjectDetailComponent.prototype.isComponentload = function (tab) {
        return this.isProjectTab === tab;
    };
    ProjectDetailComponent.prototype.getById = function (projectId) {
        var _this = this;
        this.projectService.getById(projectId)
            .subscribe(function (data) {
            _this.project = data;
            _this.isPageLoaded = true;
        });
    };
    ProjectDetailComponent = __decorate([
        Component({
            selector: 'app-project-detail',
            templateUrl: './project-detail.component.html',
            styleUrls: ['./project-detail.component.scss']
        }),
        __metadata("design:paramtypes", [NgxRolesService,
            ActivatedRoute,
            Router,
            ProjectService,
            AuthenticationService])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());
export { ProjectDetailComponent };
//# sourceMappingURL=project-detail.component.js.map