import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { DepartmentComponent } from './pages/department/department.component';
import { DepartmentDetailComponent } from './pages/department-detail/department-detail.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: DepartmentComponent
            },
            {
                path: 'detail/:id/:roleId',
                canActivate: [NgxPermissionsGuard],
                data: {
                    breadcrumbs: {
                        text: "common.detail",
                        icon: "fa fa-lock",
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'departments_view']
                    }
                },
                component: DepartmentDetailComponent
            }
        ]
    }
];
var DepartmentRoutingModule = /** @class */ (function () {
    function DepartmentRoutingModule() {
    }
    DepartmentRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], DepartmentRoutingModule);
    return DepartmentRoutingModule;
}());
export { DepartmentRoutingModule };
//# sourceMappingURL=department-routing.module.js.map