import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { ResizableModule } from 'angular-resizable-element';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarPmRoutingModule } from './calendar-pm-routing.module';
import { CalendarListComponent } from './pages/calendar-list/calendar-list.component';
var CalendarPmModule = /** @class */ (function () {
    function CalendarPmModule() {
    }
    CalendarPmModule = __decorate([
        NgModule({
            declarations: [CalendarListComponent],
            imports: [
                CommonModule,
                CalendarPmRoutingModule,
                DragAndDropModule,
                ResizableModule,
                CalendarModule.forRoot({
                    provide: DateAdapter,
                    useFactory: adapterFactory
                }),
                TranslateModule.forChild({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (HttpLoaderFactory),
                        deps: [HttpClient]
                    }
                }),
            ]
        })
    ], CalendarPmModule);
    return CalendarPmModule;
}());
export { CalendarPmModule };
// Required for AOT compilation
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
//# sourceMappingURL=calendar-pm.module.js.map