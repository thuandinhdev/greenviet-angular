import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ModalModule, TooltipModule, BsDropdownModule } from 'ngx-bootstrap';
import { ExportAsModule } from 'ngx-export-as';
import { NgxEditorModule } from 'ngx-editor';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ColorPickerModule } from 'ngx-color-picker';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DataTablesModule } from 'angular-datatables';
import { ProvidersRoutingModule } from './providers-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { ProvidersListComponent } from './pages/providers-list/providers-list.component';
import { CreateProviderComponent } from './components/create-provider/create-provider.component';
import { EditProviderComponent } from './components/edit-provider/edit-provider.component';
var ProvidersModule = /** @class */ (function () {
    function ProvidersModule() {
    }
    ProvidersModule = __decorate([
        NgModule({
            declarations: [
                ProvidersListComponent,
                CreateProviderComponent,
                EditProviderComponent
            ],
            imports: [
                CommonModule,
                ProvidersRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                NgxPermissionsModule,
                DataTablesModule,
                ExportAsModule,
                NgxEditorModule,
                ColorPickerModule,
                ModalModule.forRoot(),
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
            entryComponents: [
                CreateProviderComponent,
                EditProviderComponent
            ],
            providers: []
        })
    ], ProvidersModule);
    return ProvidersModule;
}());
export { ProvidersModule };
// Required for AOT compilation
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
//# sourceMappingURL=providers.module.js.map