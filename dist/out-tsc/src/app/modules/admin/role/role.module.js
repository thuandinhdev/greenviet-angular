import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ModalModule, TooltipModule, BsDropdownModule } from 'ngx-bootstrap';
import { ExportAsModule } from 'ngx-export-as';
import { NgxEditorModule } from 'ngx-editor';
import { NgxPermissionsModule } from 'ngx-permissions';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../../../shared/shared.module';
import { RoleComponent } from './pages/role/role.component';
import { RoleRoutingModule } from './role-routing.module';
import { CreateRoleModalComponent } from './components/create-role-modal/create-role-modal.component';
import { EditRoleModalComponent } from './components/edit-role-modal/edit-role-modal.component';
var RoleModule = /** @class */ (function () {
    function RoleModule() {
    }
    RoleModule = __decorate([
        NgModule({
            declarations: [
                RoleComponent,
                CreateRoleModalComponent,
                EditRoleModalComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                RoleRoutingModule,
                NgxPermissionsModule,
                DataTablesModule,
                ExportAsModule,
                NgxEditorModule,
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
            entryComponents: [CreateRoleModalComponent, EditRoleModalComponent],
            providers: []
        })
    ], RoleModule);
    return RoleModule;
}());
export { RoleModule };
// Required for AOT compilation
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
//# sourceMappingURL=role.module.js.map