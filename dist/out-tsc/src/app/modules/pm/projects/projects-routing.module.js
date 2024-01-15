import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectCreateComponent } from './pages/project-create/project-create.component';
import { ProjectEditComponent } from './pages/project-edit/project-edit.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [NgxPermissionsGuard],
                component: ProjectListComponent,
                data: {
                    permissions: {
                        only: ['admin', 'super_admin', 'projects_view']
                    }
                }
            },
            {
                path: 'create',
                canActivate: [NgxPermissionsGuard],
                component: ProjectCreateComponent,
                data: {
                    breadcrumbs: {
                        text: "common.create",
                        icon: "fa fa-product-hunt",
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'projects_create']
                    }
                }
            },
            {
                path: 'edit/:id',
                canActivate: [NgxPermissionsGuard],
                component: ProjectEditComponent,
                data: {
                    breadcrumbs: {
                        text: "common.edit",
                        icon: "fa fa-product-hunt",
                        hasParams: true,
                        show: true,
                        isHome: true
                    }
                }
            },
            {
                path: 'detail/:id',
                canActivate: [NgxPermissionsGuard],
                component: ProjectDetailComponent,
                data: {
                    breadcrumbs: {
                        text: "common.detail",
                        icon: "fa fa-product-hunt",
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'projects_view']
                    }
                }
            },
            {
                path: ':statusId',
                component: ProjectListComponent
            }
        ]
    }
];
var ProjectsRoutingModule = /** @class */ (function () {
    function ProjectsRoutingModule() {
    }
    ProjectsRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ProjectsRoutingModule);
    return ProjectsRoutingModule;
}());
export { ProjectsRoutingModule };
//# sourceMappingURL=projects-routing.module.js.map