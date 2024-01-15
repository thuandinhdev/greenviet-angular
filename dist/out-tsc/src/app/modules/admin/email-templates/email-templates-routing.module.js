import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmailTemplateComponent } from './pages/email-template/email-template.component';
var routes = [
    {
        path: '',
        component: EmailTemplateComponent
    }
];
var EmailTemplatesRoutingModule = /** @class */ (function () {
    function EmailTemplatesRoutingModule() {
    }
    EmailTemplatesRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], EmailTemplatesRoutingModule);
    return EmailTemplatesRoutingModule;
}());
export { EmailTemplatesRoutingModule };
//# sourceMappingURL=email-templates-routing.module.js.map