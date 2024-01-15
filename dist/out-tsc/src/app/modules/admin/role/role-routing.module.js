import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoleComponent } from './pages/role/role.component';
var routes = [
    {
        path: '',
        component: RoleComponent
    }
];
var RoleRoutingModule = /** @class */ (function () {
    function RoleRoutingModule() {
    }
    RoleRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], RoleRoutingModule);
    return RoleRoutingModule;
}());
export { RoleRoutingModule };
//# sourceMappingURL=role-routing.module.js.map