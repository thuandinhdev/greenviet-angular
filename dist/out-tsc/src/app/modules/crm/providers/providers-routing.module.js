import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ProvidersListComponent } from './pages/providers-list/providers-list.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [NgxPermissionsGuard],
                component: ProvidersListComponent
            }
        ]
    }
];
var ProvidersRoutingModule = /** @class */ (function () {
    function ProvidersRoutingModule() {
    }
    ProvidersRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ProvidersRoutingModule);
    return ProvidersRoutingModule;
}());
export { ProvidersRoutingModule };
//# sourceMappingURL=providers-routing.module.js.map