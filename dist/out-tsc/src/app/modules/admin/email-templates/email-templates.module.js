import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap';
import { NgxPermissionsModule } from 'ngx-permissions';
import { EmailTemplatesRoutingModule } from './email-templates-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { EmailTemplateComponent } from './pages/email-template/email-template.component';
var EmailTemplatesModule = /** @class */ (function () {
    function EmailTemplatesModule() {
    }
    EmailTemplatesModule = __decorate([
        NgModule({
            declarations: [EmailTemplateComponent],
            imports: [
                CommonModule,
                EmailTemplatesRoutingModule,
                NgxPermissionsModule,
                TooltipModule.forRoot(),
                SharedModule
            ]
        })
    ], EmailTemplatesModule);
    return EmailTemplatesModule;
}());
export { EmailTemplatesModule };
//# sourceMappingURL=email-templates.module.js.map