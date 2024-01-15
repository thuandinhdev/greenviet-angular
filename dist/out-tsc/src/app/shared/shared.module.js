import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxEditorModule } from 'ngx-editor';
import { DatepickerModule, BsDatepickerModule, TooltipModule } from 'ngx-bootstrap';
import { NgxPermissionsModule } from 'ngx-permissions';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { InlineEditInputComponent } from './components/inline-edit-input/inline-edit-input.component';
import { InlineEditHoursComponent } from './components/inline-edit-hours/inline-edit-hours.component';
import { InlineEditSelectComponent } from './components/inline-edit-select/inline-edit-select.component';
import { InlineEditDateComponent } from './components/inline-edit-date/inline-edit-date.component';
import { InlineEditTextareaComponent } from './components/inline-edit-textarea/inline-edit-textarea.component';
import { InlineEditTextEditorComponent } from './components/inline-edit-text-editor/inline-edit-text-editor.component';
import { InlineMultiDatepickerComponent } from './components/inline-multi-datepicker/inline-multi-datepicker.component';
import { ShowCustomFieldElementComponent } from './components/show-custom-field-element/show-custom-field-element.component';
import { ShortNamePipe } from './pipes/short-name.pipe';
import { StringToArrayFilterPipe } from './pipes/string-to-array-filter.pipe';
import { DecimalToColonPipe } from './pipes/decimal-to-colon.pipe';
import { AsDatePipe } from './pipes/as-date.pipe';
import { CreateShortNamePipe } from './pipes/create-short-name.pipe';
import { RoundNumberPipe } from './pipes/round-number.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { FilterUniquePipe } from './pipes/filter-unique.pipe';
import { UndersocreToSpacePipe } from './pipes/undersocre-to-space.pipe';
import { ObjToArPipe } from './pipes/obj-to-ar.pipe';
import { DateTimeFormatFilterPipe } from './pipes/date-time-format-filter.pipe';
import { UcfirstPipe } from './pipes/ucfirst.pipe';
import { StrToFirstLetterPipe } from './pipes/str-to-first-letter.pipe';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        NgModule({
            providers: [DatePipe, UndersocreToSpacePipe, DateTimeFormatFilterPipe],
            declarations: [
                InlineEditInputComponent,
                InlineEditHoursComponent,
                InlineEditSelectComponent,
                InlineEditDateComponent,
                InlineEditTextareaComponent,
                InlineEditTextEditorComponent,
                InlineMultiDatepickerComponent,
                ShowCustomFieldElementComponent,
                ShortNamePipe,
                StringToArrayFilterPipe,
                DecimalToColonPipe,
                AsDatePipe,
                CreateShortNamePipe,
                RoundNumberPipe,
                KeysPipe,
                ObjToArPipe,
                FilterUniquePipe,
                UndersocreToSpacePipe,
                DateTimeFormatFilterPipe,
                UcfirstPipe,
                StrToFirstLetterPipe
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                CommonModule,
                NgSelectModule,
                NgxEditorModule,
                NgxPermissionsModule,
                DatepickerModule.forRoot(),
                BsDatepickerModule.forRoot(),
                TooltipModule.forRoot(),
                TranslateModule.forChild({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (HttpLoaderFactory),
                        deps: [HttpClient]
                    }
                })
            ],
            exports: [
                InlineEditInputComponent,
                InlineEditHoursComponent,
                InlineEditSelectComponent,
                InlineEditDateComponent,
                InlineEditTextareaComponent,
                InlineEditTextEditorComponent,
                InlineMultiDatepickerComponent,
                ShowCustomFieldElementComponent,
                ShortNamePipe,
                StringToArrayFilterPipe,
                DecimalToColonPipe,
                AsDatePipe,
                CreateShortNamePipe,
                RoundNumberPipe,
                KeysPipe,
                ObjToArPipe,
                FilterUniquePipe,
                UndersocreToSpacePipe,
                DateTimeFormatFilterPipe,
                StrToFirstLetterPipe,
                UcfirstPipe
            ],
            entryComponents: [ShowCustomFieldElementComponent]
        })
    ], SharedModule);
    return SharedModule;
}());
export { SharedModule };
// Required for AOT compilation
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
//# sourceMappingURL=shared.module.js.map