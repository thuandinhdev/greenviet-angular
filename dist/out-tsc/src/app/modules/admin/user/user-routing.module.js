import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { UserComponent } from './pages/user/user.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserGuard } from '../../../core/guards/user.guard';
var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [UserGuard],
                component: UserComponent
            },
            {
                path: 'create',
                canActivate: [UserGuard],
                data: {
                    breadcrumbs: {
                        text: "common.create",
                        icon: "fa fa-user-circle",
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'users_create']
                    }
                },
                component: UserCreateComponent,
            },
            {
                path: 'edit/:id',
                canActivate: [UserGuard],
                data: {
                    breadcrumbs: {
                        text: "common.edit",
                        icon: "fa fa-user-circle",
                        hasParams: true,
                        show: true,
                        isHome: true
                    }
                },
                component: UserEditComponent
            },
            {
                path: 'profile/:id',
                canActivate: [NgxPermissionsGuard],
                data: {
                    breadcrumbs: {
                        text: "common.profile",
                        icon: "fa fa-user-circle",
                        hasParams: true,
                        show: true,
                        isHome: true
                    }
                },
                component: UserDetailComponent
            },
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());
export { UserRoutingModule };
//# sourceMappingURL=user-routing.module.js.map