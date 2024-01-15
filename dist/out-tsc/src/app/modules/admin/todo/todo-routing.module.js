import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { TodoComponent } from './pages/todo/todo.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
var routes = [
    {
        path: '',
        component: TodoComponent
    },
    {
        path: 'detail',
        canActivate: [NgxPermissionsGuard],
        component: TodoDetailComponent,
        data: {
            breadcrumbs: {
                text: "common.detail",
                icon: "fa fa-product-hunt",
                show: true,
                isHome: true
            }
        }
    },
];
var TodoRoutingModule = /** @class */ (function () {
    function TodoRoutingModule() {
    }
    TodoRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], TodoRoutingModule);
    return TodoRoutingModule;
}());
export { TodoRoutingModule };
//# sourceMappingURL=todo-routing.module.js.map