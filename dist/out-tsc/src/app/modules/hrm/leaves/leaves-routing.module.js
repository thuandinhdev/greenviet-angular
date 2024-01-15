import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { LeavesListComponent } from './pages/leaves-list/leaves-list.component';
import { CalendarViewComponent } from './pages/calendar-view/calendar-view.component';
import { ListViewComponent } from './pages/list-view/list-view.component';
import { LeavesReportComponent } from './pages/leaves-report/leaves-report.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [NgxPermissionsGuard],
                component: LeavesListComponent
            },
            {
                path: 'calendar',
                canActivate: [NgxPermissionsGuard],
                component: CalendarViewComponent,
                data: {
                    breadcrumbs: {
                        text: "Calendar",
                        icon: "fa fa-suitcase",
                        show: true,
                        isHome: true
                    }
                }
            },
            {
                path: 'list',
                canActivate: [NgxPermissionsGuard],
                component: ListViewComponent,
                data: {
                    breadcrumbs: {
                        text: "List",
                        icon: "fa fa-suitcase",
                        show: true,
                        isHome: true
                    }
                }
            },
            {
                path: 'report',
                canActivate: [NgxPermissionsGuard],
                component: LeavesReportComponent,
                data: {
                    breadcrumbs: {
                        text: "List",
                        icon: "fa fa-suitcase",
                        show: true,
                        isHome: true
                    }
                }
            },
        ]
    }
];
var LeavesRoutingModule = /** @class */ (function () {
    function LeavesRoutingModule() {
    }
    LeavesRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], LeavesRoutingModule);
    return LeavesRoutingModule;
}());
export { LeavesRoutingModule };
//# sourceMappingURL=leaves-routing.module.js.map