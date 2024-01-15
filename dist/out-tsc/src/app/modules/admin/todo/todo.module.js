import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ModalModule, TooltipModule, DatepickerModule, BsDatepickerModule, BsDropdownModule } from 'ngx-bootstrap';
import { ExportAsModule } from 'ngx-export-as';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPermissionsModule } from 'ngx-permissions';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DataTablesModule } from 'angular-datatables';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '../../../shared/shared.module';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './pages/todo/todo.component';
import { CreateTodoModalComponent } from './components/create-todo-modal/create-todo-modal.component';
import { EditTodoModalComponent } from './components/edit-todo-modal/edit-todo-modal.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
var TodoModule = /** @class */ (function () {
    function TodoModule() {
    }
    TodoModule = __decorate([
        NgModule({
            declarations: [
                TodoComponent,
                CreateTodoModalComponent,
                EditTodoModalComponent,
                TodoDetailComponent
            ],
            imports: [
                CommonModule,
                TodoRoutingModule,
                NgSelectModule,
                FormsModule,
                ReactiveFormsModule,
                NgxPermissionsModule,
                DataTablesModule,
                ExportAsModule,
                DragDropModule,
                ModalModule.forRoot(),
                TooltipModule.forRoot(),
                DatepickerModule.forRoot(),
                BsDatepickerModule.forRoot(),
                BsDropdownModule.forRoot(),
                TranslateModule.forChild({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (HttpLoaderFactory),
                        deps: [HttpClient]
                    }
                }),
                SharedModule
            ],
            exports: [TodoDetailComponent],
            entryComponents: [CreateTodoModalComponent, EditTodoModalComponent]
        })
    ], TodoModule);
    return TodoModule;
}());
export { TodoModule };
// Required for AOT compilation
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
//# sourceMappingURL=todo.module.js.map