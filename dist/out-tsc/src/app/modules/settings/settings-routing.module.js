import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './pages/settings/settings.component';
var routes = [
    {
        path: '',
        component: SettingsComponent
    }
];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());
export { SettingsRoutingModule };
//# sourceMappingURL=settings-routing.module.js.map