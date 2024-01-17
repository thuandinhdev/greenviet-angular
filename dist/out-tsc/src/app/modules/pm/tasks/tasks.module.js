import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule, DatepickerModule, BsDatepickerModule, ModalModule, BsDropdownModule, TabsModule, ButtonsModule, AccordionModule } from 'ngx-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ExportAsModule } from 'ngx-export-as';
import { NgxEditorModule } from 'ngx-editor';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DataTablesModule } from 'angular-datatables';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { ResizableModule } from 'angular-resizable-element';
import { Ng5SliderModule } from 'ng5-slider';
import { TasksRoutingModule } from './task-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { TodoModule } from '../../admin/todo/todo.module';
import { TaskCreateComponent } from './pages/task-create/task-create.component';
import { TaskEditComponent } from './pages/task-edit/task-edit.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskActivitiesComponent } from './components/task-activities/task-activities.component';
import { TaskAttachmentsComponent } from './components/task-attachments/task-attachments.component';
import { TaskCommentsComponent } from './components/task-comments/task-comments.component';
import { TaskImportModalComponent } from './components/task-import-modal/task-import-modal.component';
import { TaskNotesComponent } from './components/task-notes/task-notes.component';
import { CreateAttachmentModalComponent } from './components/create-attachment-modal/create-attachment-modal.component';
import { TimesheetModule } from '../../timesheet/timesheet.module';
var TasksModule = /** @class */ (function () {
    function TasksModule() {
    }
    TasksModule = __decorate([
        NgModule({
            declarations: [
                TaskCreateComponent,
                TaskEditComponent,
                TaskListComponent,
                TaskDetailComponent,
                TaskDetailsComponent,
                TaskActivitiesComponent,
                TaskAttachmentsComponent,
                TaskCommentsComponent,
                TaskImportModalComponent,
                TaskNotesComponent,
                CreateAttachmentModalComponent,
            ],
            imports: [
                CommonModule,
                TasksRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                NgSelectModule,
                DataTablesModule,
                ExportAsModule,
                BsDropdownModule,
                NgxEditorModule,
                DragAndDropModule,
                ResizableModule,
                Ng5SliderModule,
                PerfectScrollbarModule,
                ProgressbarModule.forRoot(),
                NgxPermissionsModule,
                TooltipModule.forRoot(),
                DatepickerModule.forRoot(),
                BsDatepickerModule.forRoot(),
                ModalModule.forRoot(),
                TabsModule.forRoot(),
                ButtonsModule.forRoot(),
                AccordionModule.forRoot(),
                TranslateModule.forChild({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (HttpLoaderFactory),
                        deps: [HttpClient]
                    }
                }),
                TodoModule,
                TimesheetModule,
                SharedModule
            ],
            entryComponents: [CreateAttachmentModalComponent, TaskImportModalComponent]
        })
    ], TasksModule);
    return TasksModule;
}());
export { TasksModule };
// Required for AOT compilation
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
//# sourceMappingURL=tasks.module.js.map