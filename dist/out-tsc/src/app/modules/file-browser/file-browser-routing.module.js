import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FileBrowserComponent } from './pages/file-browser/file-browser.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: FileBrowserComponent
            },
        ]
    }
];
var FileBrowserRoutingModule = /** @class */ (function () {
    function FileBrowserRoutingModule() {
    }
    FileBrowserRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], FileBrowserRoutingModule);
    return FileBrowserRoutingModule;
}());
export { FileBrowserRoutingModule };
//# sourceMappingURL=file-browser-routing.module.js.map