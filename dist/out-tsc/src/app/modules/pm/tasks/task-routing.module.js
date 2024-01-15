import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { TaskCreateComponent } from './pages/task-create/task-create.component';
import { TaskEditComponent } from './pages/task-edit/task-edit.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [NgxPermissionsGuard],
                component: TaskListComponent,
                data: {
                    permissions: {
                        only: ['admin', 'super_admin', 'tasks_view']
                    }
                }
            },
            {
                path: 'create',
                canActivate: [NgxPermissionsGuard],
                component: TaskCreateComponent,
                data: {
                    breadcrumbs: {
                        text: "common.create",
                        icon: "fa fa-tasks",
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'tasks_create']
                    }
                }
            },
            {
                path: 'edit/:id',
                canActivate: [NgxPermissionsGuard],
                component: TaskEditComponent,
                data: {
                    breadcrumbs: {
                        text: "common.edit",
                        icon: "fa fa-tasks",
                        hasParams: true,
                        show: true,
                        isHome: true
                    }
                }
            },
            {
                path: 'create/:id',
                component: TaskCreateComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    breadcrumbs: {
                        text: "common.create",
                        icon: "fa fa-tasks",
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'tasks_create']
                    }
                }
            },
            {
                path: 'detail/:id',
                component: TaskDetailComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    breadcrumbs: {
                        text: "common.detail",
                        icon: "fa fa-tasks",
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'tasks_view']
                    }
                }
            },
            {
                path: ':statusId/:taskFilterKey',
                component: TaskListComponent
            }
        ]
    }
];
var TasksRoutingModule = /** @class */ (function () {
    function TasksRoutingModule() {
    }
    TasksRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], TasksRoutingModule);
    return TasksRoutingModule;
}());
export { TasksRoutingModule };
//# sourceMappingURL=task-routing.module.js.map