import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TooltipModule, BsDropdownModule, ButtonsModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPermissionsModule } from 'ngx-permissions';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TaskBoardRoutingModule } from './task-board-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { TaskBoardComponent } from './pages/task-board/task-board.component';
var TaskBoardModule = /** @class */ (function () {
    function TaskBoardModule() {
    }
    TaskBoardModule = __decorate([
        NgModule({
            declarations: [
                TaskBoardComponent
            ],
            imports: [
                CommonModule,
                TaskBoardRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                NgSelectModule,
                NgxPermissionsModule,
                OrderModule,
                DragDropModule,
                TooltipModule.forRoot(),
                BsDropdownModule.forRoot(),
                ButtonsModule.forRoot(),
                TranslateModule.forChild({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (HttpLoaderFactory),
                        deps: [HttpClient]
                    }
                }),
                SharedModule,
            ],
            entryComponents: []
        })
    ], TaskBoardModule);
    return TaskBoardModule;
}());
export { TaskBoardModule };
// Required for AOT compilation
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
//# sourceMappingURL=task-board.module.js.map