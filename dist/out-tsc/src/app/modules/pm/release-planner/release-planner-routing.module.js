import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ReleasePlannerListingComponent } from './pages/release-planner-listing/release-planner-listing.component';
var routes = [
    {
        path: '',
        canActivate: [NgxPermissionsGuard],
        component: ReleasePlannerListingComponent,
        data: {
            permissions: {
                only: ['releaseplanner_view']
            }
        }
    }
];
var ReleasePlannerRoutingModule = /** @class */ (function () {
    function ReleasePlannerRoutingModule() {
    }
    ReleasePlannerRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ReleasePlannerRoutingModule);
    return ReleasePlannerRoutingModule;
}());
export { ReleasePlannerRoutingModule };
//# sourceMappingURL=release-planner-routing.module.js.map