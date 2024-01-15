import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeamComponent } from './pages/team/team.component';
var routes = [
    {
        path: '',
        component: TeamComponent
    }
];
var TeamRoutingModule = /** @class */ (function () {
    function TeamRoutingModule() {
    }
    TeamRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], TeamRoutingModule);
    return TeamRoutingModule;
}());
export { TeamRoutingModule };
//# sourceMappingURL=team-routing.module.js.map