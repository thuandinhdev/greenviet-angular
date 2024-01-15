import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from '../../../shared/shared.module';
import { ReleasePlannerRoutingModule } from './release-planner-routing.module';
import { ReleasePlannerListingComponent } from './pages/release-planner-listing/release-planner-listing.component';
var ReleasePlannerModule = /** @class */ (function () {
    function ReleasePlannerModule() {
    }
    ReleasePlannerModule = __decorate([
        NgModule({
            declarations: [ReleasePlannerListingComponent],
            imports: [
                CommonModule,
                ReleasePlannerRoutingModule,
                TooltipModule.forRoot(),
                TranslateModule.forChild({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (HttpLoaderFactory),
                        deps: [HttpClient]
                    }
                }),
                SharedModule
            ]
        })
    ], ReleasePlannerModule);
    return ReleasePlannerModule;
}());
export { ReleasePlannerModule };
// Required for AOT compilation
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
//# sourceMappingURL=release-planner.module.js.map