import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxEditorModule } from 'ngx-editor';
import { TooltipModule } from 'ngx-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { NgxPermissionsModule } from 'ngx-permissions';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FileUploadModule } from "ng2-file-upload";
import { ChecklistModule } from 'angular-checklist';
import { SharedModule } from '../../shared/shared.module';
import { MailboxRoutingModule } from './mailbox-routing.module';
import { MailboxComponent } from './pages/mailbox/mailbox.component';
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var MailboxModule = /** @class */ (function () {
    function MailboxModule() {
    }
    MailboxModule = __decorate([
        NgModule({
            declarations: [MailboxComponent],
            imports: [
                CommonModule,
                MailboxRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                NgxEditorModule,
                ChecklistModule,
                HttpClientModule,
                FileUploadModule,
                NgSelectModule,
                PerfectScrollbarModule,
                NgxPermissionsModule,
                TooltipModule.forRoot(),
                ProgressbarModule.forRoot(),
                TranslateModule.forChild({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (HttpLoaderFactory),
                        deps: [HttpClient]
                    }
                }),
                SharedModule
            ],
            providers: [{
                    provide: PERFECT_SCROLLBAR_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }]
        })
    ], MailboxModule);
    return MailboxModule;
}());
export { MailboxModule };
// Required for AOT compilation
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
//# sourceMappingURL=mailbox.module.js.map