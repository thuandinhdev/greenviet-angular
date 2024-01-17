import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ModalModule, TooltipModule, DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CollapseModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { NgxPermissionsModule } from 'ngx-permissions';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CountUpModule } from 'countup.js-angular2';
import { SharedModule } from './../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PmDashboardWidgetsComponent } from './components/pm-dashboard-widgets/pm-dashboard-widgets.component';
import { PmDashboardChartsComponent } from './components/pm-dashboard-charts/pm-dashboard-charts.component';
import { PmDashboardTasksComponent } from './components/pm-dashboard-tasks/pm-dashboard-tasks.component';
import { PmDashboardDefectsComponent } from './components/pm-dashboard-defects/pm-dashboard-defects.component';
import { PmDashboardIncidentsComponent } from './components/pm-dashboard-incidents/pm-dashboard-incidents.component';
import { PmDashboardMeetingsComponent } from './components/pm-dashboard-meetings/pm-dashboard-meetings.component';
import { PmDashboardActivityComponent } from './components/pm-dashboard-activity/pm-dashboard-activity.component';
import { PmDashboardAnnouncementsComponent } from './components/pm-dashboard-announcements/pm-dashboard-announcements.component';
import { PmDashboardProjectsComponent } from './components/pm-dashboard-projects/pm-dashboard-projects.component';
import { PmDashboardTodosComponent } from './components/pm-dashboard-todos/pm-dashboard-todos.component';
import { PmDashboardChart1Component } from './components/pm-dashboard-chart1/pm-dashboard-chart1.component';
import { PmDashboardChart2Component } from './components/pm-dashboard-chart2/pm-dashboard-chart2.component';
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        NgModule({
            declarations: [
                HomeComponent,
                PmDashboardWidgetsComponent,
                PmDashboardChartsComponent,
                PmDashboardTasksComponent,
                PmDashboardDefectsComponent,
                PmDashboardIncidentsComponent,
                PmDashboardMeetingsComponent,
                PmDashboardActivityComponent,
                PmDashboardAnnouncementsComponent,
                PmDashboardProjectsComponent,
                PmDashboardTodosComponent,
                PmDashboardChart1Component,
                PmDashboardChart2Component
            ],
            imports: [
                CommonModule,
                HomeRoutingModule,
                CountUpModule,
                CollapseModule,
                NgSelectModule,
                FormsModule,
                ReactiveFormsModule,
                ChartistModule,
                ChartsModule,
                NgxChartsModule,
                PerfectScrollbarModule,
                NgxPermissionsModule,
                DragDropModule,
                TooltipModule.forRoot(),
                BsDropdownModule.forRoot(),
                ModalModule.forRoot(),
                DatepickerModule.forRoot(),
                BsDatepickerModule.forRoot(),
                TranslateModule.forChild({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (HttpLoaderFactory),
                        deps: [HttpClient]
                    }
                }),
                SharedModule
            ],
            entryComponents: [],
            providers: [{
                    provide: PERFECT_SCROLLBAR_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }]
        })
    ], HomeModule);
    return HomeModule;
}());
export { HomeModule };
// required for AOT compilation
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
//# sourceMappingURL=home.module.js.map