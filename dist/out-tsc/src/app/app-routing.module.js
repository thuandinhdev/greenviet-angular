import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { BlankLayoutComponent } from './core/layouts/blank-layout/blank-layout.component';
import { BasicLayoutComponent } from './core/layouts/basic-layout/basic-layout.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './modules/reset-password/reset-password.component';
import { AuthGuard } from './core/guards/auth.guard';
import { MenuResolver } from './core/services/menu-resolver';
var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '', component: BlankLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: 'reset-password/:email/:token', component: ResetPasswordComponent },
        ]
    },
    {
        path: '',
        canActivate: [AuthGuard],
        component: BasicLayoutComponent,
        data: {
            breadcrumbs: { text: 'Home' }
        },
        resolve: {
            sidebarMenu: MenuResolver
        },
        children: [
            {
                path: 'dashboard',
                pathMatch: 'full',
                loadChildren: function () { return import('./modules/home/home.module').then(function (m) { return m.HomeModule; }); },
                data: {
                    title: 'breadcrumbs.dashboard.title'
                }
            },
            {
                path: 'announcements',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.announcements.title",
                    breadcrumbs: {
                        text: "breadcrumbs.announcements.text",
                        icon: "fa fa-bullhorn",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'announcements_view']
                    }
                },
                loadChildren: function () { return import('./modules/admin/announcement/announcement.module').then(function (m) { return m.AnnouncementModule; }); }
            },
            {
                path: 'timesheet',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "Timesheet",
                    breadcrumbs: {
                        text: "Timesheet",
                        icon: "fa fa-clock-o",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'timesheet_view']
                    }
                },
                loadChildren: function () { return import('./modules/timesheet/timesheet.module').then(function (m) { return m.TimesheetModule; }); }
            },
            {
                path: 'todos',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.todos.title",
                    breadcrumbs: {
                        text: "breadcrumbs.todos.title",
                        icon: "fa fa-list-ul",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'todos_view']
                    }
                },
                loadChildren: function () { return import('./modules/admin/todo/todo.module').then(function (m) { return m.TodoModule; }); }
            },
            {
                path: 'users',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.users.title",
                    breadcrumbs: {
                        text: "breadcrumbs.users.title",
                        icon: "fa fa-user-circle",
                        show: false,
                        isHome: false
                    }
                },
                loadChildren: function () { return import('./modules/admin/user/user.module').then(function (m) { return m.UserModule; }); }
            },
            {
                path: 'departments',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.departments.title",
                    breadcrumbs: {
                        text: "breadcrumbs.departments.title",
                        icon: "fa fa-lock",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin']
                    }
                },
                loadChildren: function () { return import('./modules/admin/department/department.module').then(function (m) { return m.DepartmentModule; }); }
            },
            {
                path: 'roles',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.roles.title",
                    breadcrumbs: {
                        text: "breadcrumbs.roles.title",
                        icon: "fa fa-lock",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin']
                    }
                },
                loadChildren: function () { return import('./modules/admin/role/role.module').then(function (m) { return m.RoleModule; }); }
            },
            {
                path: 'mailbox',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.mailbox.title",
                    breadcrumbs: {
                        text: "breadcrumbs.mailbox.title",
                        icon: "fa fa-envelope-o",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'mailbox_view']
                    }
                },
                loadChildren: function () { return import('./modules/mailbox/mailbox.module').then(function (m) { return m.MailboxModule; }); }
            },
            {
                path: 'file-browser',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.file_browser.title",
                    breadcrumbs: {
                        text: "breadcrumbs.file_browser.title",
                        icon: "fa fa-folder",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'filemanager_view']
                    }
                },
                loadChildren: function () { return import('./modules/file-browser/file-browser.module').then(function (m) { return m.FileBrowserModule; }); }
            },
            {
                path: 'teams',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.teams.title",
                    breadcrumbs: {
                        text: "breadcrumbs.teams.title",
                        icon: "fa fa-universal-access",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin']
                    }
                },
                loadChildren: function () { return import('./modules/admin/team/team.module').then(function (m) { return m.TeamModule; }); }
            },
            {
                path: 'holidays',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.holidays.title",
                    breadcrumbs: {
                        text: "breadcrumbs.holidays.title",
                        icon: "fa fa-calendar-plus-o",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'holidays_view']
                    }
                },
                loadChildren: function () { return import('./modules/admin/holiday/holiday.module').then(function (m) { return m.HolidayModule; }); }
            },
            {
                path: 'meetings',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.meetings.title",
                    breadcrumbs: {
                        text: "breadcrumbs.meetings.title",
                        icon: "fa fa-briefcase",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'meetings_view']
                    }
                },
                loadChildren: function () { return import('./modules/admin/meeting/meeting.module').then(function (m) { return m.MeetingModule; }); }
            },
            {
                path: 'clients',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.clients.title",
                    breadcrumbs: {
                        text: "breadcrumbs.clients.title",
                        icon: "fa fa-user-circle",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'clients_view']
                    }
                },
                loadChildren: function () { return import('./modules/admin/client/client.module').then(function (m) { return m.ClientModule; }); }
            },
            {
                path: 'settings',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.settings.title",
                    breadcrumbs: {
                        text: "breadcrumbs.settings.title",
                        icon: "fa fa-cogs",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'settings_view']
                    }
                },
                loadChildren: function () { return import('./modules/settings/settings.module').then(function (m) { return m.SettingsModule; }); }
            },
            {
                path: 'calendar',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.calendar.title",
                    breadcrumbs: {
                        text: "breadcrumbs.calendar.title",
                        icon: "fa fa-calendar",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'calendar_view']
                    }
                },
                loadChildren: function () { return import('./modules/calendar-pm/calendar-pm.module').then(function (m) { return m.CalendarPmModule; }); }
            },
            {
                path: 'projects',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.projects.title",
                    breadcrumbs: {
                        text: "breadcrumbs.projects.title",
                        icon: "fa fa-product-hunt",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'projects_view']
                    }
                },
                loadChildren: function () { return import('./modules/pm/projects/projects.module').then(function (m) { return m.ProjectsModule; }); }
            },
            {
                path: 'tasks',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.tasks.title",
                    breadcrumbs: {
                        text: "breadcrumbs.tasks.title",
                        icon: "fa fa-tasks",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'tasks_view']
                    }
                },
                loadChildren: function () { return import('./modules/pm/tasks/tasks.module').then(function (m) { return m.TasksModule; }); }
            },
            {
                path: 'defects',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.defects.title",
                    breadcrumbs: {
                        text: "breadcrumbs.defects.title",
                        icon: "fa fa-bug",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'defects_view']
                    }
                },
                loadChildren: function () { return import('./modules/pm/defects/defects.module').then(function (m) { return m.DefectsModule; }); }
            },
            {
                path: 'incidents',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.incidents.title",
                    breadcrumbs: {
                        text: "breadcrumbs.incidents.title",
                        icon: "fa fa-ticket",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'incidents_view']
                    }
                },
                loadChildren: function () { return import('./modules/pm/incidents/incidents.module').then(function (m) { return m.IncidentsModule; }); }
            },
            {
                path: 'taskboard',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.taskboard.title",
                    breadcrumbs: {
                        text: "breadcrumbs.taskboard.title",
                        icon: "fa fa-clipboard",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'tasks_view']
                    }
                },
                loadChildren: function () { return import('./modules/pm/task-board/task-board.module').then(function (m) { return m.TaskBoardModule; }); }
            },
            {
                path: 'teamboard',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.teamboard.title",
                    breadcrumbs: {
                        text: "breadcrumbs.teamboard.title",
                        icon: "fa fa-universal-access",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'teams_view']
                    }
                },
                loadChildren: function () { return import('./modules/pm/team-board/team-board.module').then(function (m) { return m.TeamBoardModule; }); }
            },
            {
                path: 'projects-planner',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.projects_planner.title",
                    breadcrumbs: {
                        text: "breadcrumbs.projects_planner.title",
                        icon: "fa fa-american-sign-language-interpreting",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'projectplanner_view']
                    }
                },
                loadChildren: function () { return import('./modules/pm/project-planner/project-planner.module').then(function (m) { return m.ProjectPlannerModule; }); }
            },
            {
                path: 'knowledgebase',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.knowledgebase.title",
                    breadcrumbs: {
                        text: "breadcrumbs.knowledgebase.title",
                        icon: "fa fa-graduation-cap",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'knowledgebase_view']
                    }
                },
                loadChildren: function () { return import('./modules/pm/knowledgebase/knowledgebase.module').then(function (m) { return m.KnowledgebaseModule; }); }
            },
            {
                path: 'reports',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.reports.title",
                    breadcrumbs: {
                        text: "breadcrumbs.reports.title",
                        icon: "fa fa-bar-chart",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'reports_view']
                    }
                },
                loadChildren: function () { return import('./modules/pm/reports/reports.module').then(function (m) { return m.ReportsModule; }); }
            },
            {
                path: 'appointments',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.appointments.title",
                    breadcrumbs: {
                        text: "breadcrumbs.appointments.title",
                        icon: "fa fa-calendar-times-o",
                        show: false,
                        isHome: false
                    }
                },
                loadChildren: function () { return import('./modules/crm/appointments/appointments.module').then(function (m) { return m.AppointmentsModule; }); }
            },
            {
                path: 'providers',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "breadcrumbs.providers.title",
                    breadcrumbs: {
                        text: "breadcrumbs.providers.title",
                        icon: "fa fa-lock",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin']
                    }
                },
                loadChildren: function () { return import('./modules/crm/providers/providers.module').then(function (m) { return m.ProvidersModule; }); }
            },
            {
                path: 'leaves',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "Leaves",
                    breadcrumbs: {
                        text: "Leaves",
                        icon: "fa fa-suitcase",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin']
                    }
                },
                loadChildren: function () { return import('./modules/hrm/leaves/leaves.module').then(function (m) { return m.LeavesModule; }); }
            },
            {
                path: 'leave-types',
                canLoad: [NgxPermissionsGuard],
                data: {
                    title: "Leave Types",
                    breadcrumbs: {
                        text: "Leave Types",
                        icon: "fa fa-suitcase",
                        show: false,
                        isHome: false
                    },
                    permissions: {
                        only: ['admin', 'super_admin']
                    }
                },
                loadChildren: function () { return import('./modules/hrm/leave-types/leave-types.module').then(function (m) { return m.LeaveTypesModule; }); }
            }
        ]
    },
    // // Handle all other routes
    { path: '**', redirectTo: '' }
];
var config = {
    useHash: true,
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes, config)],
            exports: [RouterModule],
            providers: [MenuResolver]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map