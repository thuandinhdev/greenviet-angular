import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule, DatepickerModule, BsDatepickerModule, ModalModule, TabsModule } from 'ngx-bootstrap';
import { ExportAsModule } from 'ngx-export-as';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../../../shared/shared.module';
import { ReportsRoutingModule } from './reports-routing.module';
import { ProjectReportsComponent } from './components/project-reports/project-reports.component';
import { TaskReportsComponent } from './components/task-reports/task-reports.component';
import { DefectReportsComponent } from './components/defect-reports/defect-reports.component';
import { IncidentReportsComponent } from './components/incident-reports/incident-reports.component';
;
import { ReportsComponent } from './pages/reports/reports.component';
var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = __decorate([
        NgModule({
            declarations: [
                ProjectReportsComponent,
                TaskReportsComponent,
                DefectReportsComponent,
                IncidentReportsComponent,
                ReportsComponent
            ],
            imports: [
                CommonModule,
                ReportsRoutingModule,
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                NgSelectModule,
                DataTablesModule,
                ExportAsModule,
                TooltipModule.forRoot(),
                DatepickerModule.forRoot(),
                BsDatepickerModule.forRoot(),
                ModalModule.forRoot(),
                TabsModule.forRoot(),
                TranslateModule.forChild({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (HttpLoaderFactory),
                        deps: [HttpClient]
                    }
                }),
                SharedModule
            ]
        })
    ], ReportsModule);
    return ReportsModule;
}());
export { ReportsModule };
// Required for AOT compilation
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
//# sourceMappingURL=reports.module.js.map