import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { SettingService } from '../../../../core/services/setting.service';
var CompanyDetailComponent = /** @class */ (function () {
    function CompanyDetailComponent(translate, formBuilder, toastr, settingService) {
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.settingService = settingService;
        this.isFormSubmitted = false;
    }
    CompanyDetailComponent.prototype.ngOnInit = function () {
        this.loadForm();
    };
    CompanyDetailComponent.prototype.loadForm = function () {
        this.settingsForm = this.formBuilder.group({
            form_for: ['company_detail'],
            company_name: [this.settings.company_name, [Validators.required, Validators.maxLength(50)]],
            company_legal_name: [this.settings.company_legal_name, [Validators.maxLength(50)]],
            company_short_name: [this.settings.company_short_name, [Validators.required, Validators.maxLength(10)]],
            company_address: [this.settings.company_address, Validators.required],
            company_country: [this.settings.company_country],
            company_city: [this.settings.company_city],
            company_zipcode: [this.settings.company_zipcode, [Validators.pattern(/^[0-9]{1,10}$/)]],
            company_email: [this.settings.company_email, [Validators.required, Validators.email]],
            company_website: [this.settings.company_website, Validators.pattern(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/)],
            company_phone: [this.settings.company_phone, Validators.pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
            contact_person: [this.settings.contact_person],
        });
    };
    Object.defineProperty(CompanyDetailComponent.prototype, "companyDetail", {
        get: function () { return this.settingsForm.controls; },
        enumerable: false,
        configurable: true
    });
    CompanyDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.settingsForm.invalid) {
            return;
        }
        this.settingService.create(this.settingsForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.messages.update'), _this.translate.instant('settings.title'));
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CompanyDetailComponent.prototype, "settings", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CompanyDetailComponent.prototype, "countries", void 0);
    CompanyDetailComponent = __decorate([
        Component({
            selector: 'app-company-detail',
            templateUrl: './company-detail.component.html',
            styleUrls: ['./company-detail.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            FormBuilder,
            ToastrService,
            SettingService])
    ], CompanyDetailComponent);
    return CompanyDetailComponent;
}());
export { CompanyDetailComponent };
//# sourceMappingURL=company-detail.component.js.map