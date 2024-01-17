import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapseModule, BsDropdownModule, CarouselModule, TooltipModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPermissionsModule } from 'ngx-permissions';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { ColorPickerModule } from 'ngx-color-picker';
import { UiSwitchModule } from 'ngx-ui-switch';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { ThemeSettingsComponent } from './theme-settings/theme-settings.component';
import { ToggleFullscreenDirective } from '../../shared/directives/toggle-fullscreen.directive';
import { SharedModule } from '../../shared/shared.module';
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var LayoutsModule = /** @class */ (function () {
    function LayoutsModule() {
    }
    LayoutsModule = __decorate([
        NgModule({
            declarations: [
                BlankLayoutComponent,
                HeaderComponent,
                FooterComponent,
                SidebarComponent,
                BasicLayoutComponent,
                BreadcrumbComponent,
                ThemeSettingsComponent,
                ToggleFullscreenDirective
            ],
            imports: [
                BrowserModule,
                RouterModule,
                FormsModule,
                ReactiveFormsModule,
                NgxPermissionsModule,
                PerfectScrollbarModule,
                NgSelectModule,
                ColorPickerModule,
                CollapseModule.forRoot(),
                BsDropdownModule.forRoot(),
                CarouselModule.forRoot(),
                TooltipModule.forRoot(),
                UiSwitchModule.forRoot({
                    checkedLabel: 'Active',
                    uncheckedLabel: 'Inactive',
                    color: 'rgb(0, 189, 99)',
                    switchColor: '#FFFFFF',
                    defaultBgColor: '#c6c6c6',
                    defaultBoColor: '#c39ef8'
                }),
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
                BlankLayoutComponent,
                BreadcrumbComponent,
                ToggleFullscreenDirective
            ],
            providers: [{
                    provide: PERFECT_SCROLLBAR_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }]
        })
    ], LayoutsModule);
    return LayoutsModule;
}());
export { LayoutsModule };
// required for AOT compilation
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
//# sourceMappingURL=layouts.module.js.map