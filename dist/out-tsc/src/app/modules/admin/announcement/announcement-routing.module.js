import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { AnnouncementComponent } from './pages/announcement/announcement.component';
import { AnnouncementCreateComponent } from './pages/announcement-create/announcement-create.component';
import { AnnouncementEditComponent } from './pages/announcement-edit/announcement-edit.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: AnnouncementComponent
            },
            {
                path: 'create',
                canActivate: [NgxPermissionsGuard],
                data: {
                    breadcrumbs: {
                        text: "common.create",
                        icon: "fa fa-bullhorn",
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'announcements_create']
                    }
                },
                component: AnnouncementCreateComponent
            },
            {
                path: 'edit/:id',
                canActivate: [NgxPermissionsGuard],
                data: {
                    breadcrumbs: {
                        text: "common.edit",
                        icon: "fa fa-bullhorn",
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'announcements_edit']
                    }
                },
                component: AnnouncementEditComponent
            }
        ]
    }
];
var AnnouncementRoutingModule = /** @class */ (function () {
    function AnnouncementRoutingModule() {
    }
    AnnouncementRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], AnnouncementRoutingModule);
    return AnnouncementRoutingModule;
}());
export { AnnouncementRoutingModule };
//# sourceMappingURL=announcement-routing.module.js.map