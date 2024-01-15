import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MailboxComponent } from './pages/mailbox/mailbox.component';
var routes = [
    {
        path: '',
        children: [
            { path: '', component: MailboxComponent },
        ]
    }
];
var MailboxRoutingModule = /** @class */ (function () {
    function MailboxRoutingModule() {
    }
    MailboxRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], MailboxRoutingModule);
    return MailboxRoutingModule;
}());
export { MailboxRoutingModule };
//# sourceMappingURL=mailbox-routing.module.js.map