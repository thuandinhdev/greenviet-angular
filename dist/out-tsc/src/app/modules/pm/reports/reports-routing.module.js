import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ReportsComponent } from './pages/reports/reports.component';
var routes = [
    {
        path: '',
        canActivate: [NgxPermissionsGuard],
        component: ReportsComponent,
        data: {
            permissions: {
                only: ['reports_view']
            }
        }
    }
];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());
export { ReportsRoutingModule };
//# sourceMappingURL=reports-routing.module.js.map