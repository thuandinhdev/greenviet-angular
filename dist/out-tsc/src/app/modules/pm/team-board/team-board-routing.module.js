import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { TeamBoardComponent } from './pages/team-board/team-board.component';
var routes = [
    {
        path: '',
        canActivate: [NgxPermissionsGuard],
        component: TeamBoardComponent,
        data: {
            permissions: {
                only: ['teams_view']
            }
        }
    }
];
var TeamBoardRoutingModule = /** @class */ (function () {
    function TeamBoardRoutingModule() {
    }
    TeamBoardRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], TeamBoardRoutingModule);
    return TeamBoardRoutingModule;
}());
export { TeamBoardRoutingModule };
//# sourceMappingURL=team-board-routing.module.js.map