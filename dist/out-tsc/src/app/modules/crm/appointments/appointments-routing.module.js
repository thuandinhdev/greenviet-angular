import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { AppointmentsListComponent } from './pages/appointments-list/appointments-list.component';
import { AppointmentsDetailComponent } from './pages/appointments-detail/appointments-detail.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [NgxPermissionsGuard],
                component: AppointmentsComponent
            },
            {
                path: 'list',
                canActivate: [NgxPermissionsGuard],
                component: AppointmentsListComponent,
                data: {
                    breadcrumbs: {
                        text: "common.list",
                        icon: "fa fa-calendar-times-o",
                        hasParams: true,
                        show: true,
                        isHome: true
                    }
                }
            },
            {
                path: 'detail/:id',
                canActivate: [NgxPermissionsGuard],
                component: AppointmentsDetailComponent,
                data: {
                    breadcrumbs: {
                        text: "common.detail",
                        icon: "fa fa-bug",
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'appointment_view']
                    }
                }
            },
            {
                path: 'list/:statusId',
                component: AppointmentsListComponent
            }
        ]
    }
];
var AppointmentsRoutingModule = /** @class */ (function () {
    function AppointmentsRoutingModule() {
    }
    AppointmentsRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], AppointmentsRoutingModule);
    return AppointmentsRoutingModule;
}());
export { AppointmentsRoutingModule };
//# sourceMappingURL=appointments-routing.module.js.map