import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { LeaveTypesListComponent } from './pages/leave-types-list/leave-types-list.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [NgxPermissionsGuard],
                component: LeaveTypesListComponent
            }
        ]
    }
];
var LeaveTypesRoutingModule = /** @class */ (function () {
    function LeaveTypesRoutingModule() {
    }
    LeaveTypesRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], LeaveTypesRoutingModule);
    return LeaveTypesRoutingModule;
}());
export { LeaveTypesRoutingModule };
//# sourceMappingURL=leave-types-routing.module.js.map