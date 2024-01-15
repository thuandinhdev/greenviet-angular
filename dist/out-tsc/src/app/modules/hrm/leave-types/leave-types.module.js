import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TooltipModule, BsDropdownModule } from 'ngx-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxPermissionsModule } from 'ngx-permissions';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LeaveTypesRoutingModule } from './leave-types-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { LeaveTypesListComponent } from './pages/leave-types-list/leave-types-list.component';
var LeaveTypesModule = /** @class */ (function () {
    function LeaveTypesModule() {
    }
    LeaveTypesModule = __decorate([
        NgModule({
            declarations: [LeaveTypesListComponent],
            imports: [
                CommonModule,
                LeaveTypesRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                NgxPermissionsModule,
                ColorPickerModule,
                TooltipModule.forRoot(),
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
            exports: [
                LeaveTypesListComponent
            ]
        })
    ], LeaveTypesModule);
    return LeaveTypesModule;
}());
export { LeaveTypesModule };
// Required for AOT compilation
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
//# sourceMappingURL=leave-types.module.js.map