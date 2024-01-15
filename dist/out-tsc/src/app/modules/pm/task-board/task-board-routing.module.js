import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { TaskBoardComponent } from './pages/task-board/task-board.component';
var routes = [
    {
        path: '',
        canActivate: [NgxPermissionsGuard],
        component: TaskBoardComponent,
        data: {
            permissions: {
                only: ['admin', 'super_admin', 'tasks_view']
            }
        }
    }
];
var TaskBoardRoutingModule = /** @class */ (function () {
    function TaskBoardRoutingModule() {
    }
    TaskBoardRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], TaskBoardRoutingModule);
    return TaskBoardRoutingModule;
}());
export { TaskBoardRoutingModule };
//# sourceMappingURL=task-board-routing.module.js.map