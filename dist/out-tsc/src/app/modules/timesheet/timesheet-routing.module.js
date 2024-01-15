import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { MyTimesheetComponent } from './pages/my-timesheet/my-timesheet.component';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [NgxPermissionsGuard],
                component: MyTimesheetComponent,
                data: {
                    permissions: {
                        only: ['admin', 'super_admin', 'timesheet_view']
                    }
                }
            },
            {
                path: 'all',
                canActivate: [NgxPermissionsGuard],
                component: TimesheetComponent,
                data: {
                    permissions: {
                        only: ['admin', 'super_admin', 'reports_view']
                    }
                }
            }
        ]
    }
];
var TimesheetRoutingModule = /** @class */ (function () {
    function TimesheetRoutingModule() {
    }
    TimesheetRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], TimesheetRoutingModule);
    return TimesheetRoutingModule;
}());
export { TimesheetRoutingModule };
//# sourceMappingURL=timesheet-routing.module.js.map