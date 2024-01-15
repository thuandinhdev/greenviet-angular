import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { EmailTemplateService } from '../../../../core/services/email-template.service';
var EmailTemplatesComponent = /** @class */ (function () {
    function EmailTemplatesComponent(translate, emailTemplateService, toastr) {
        this.translate = translate;
        this.emailTemplateService = emailTemplateService;
        this.toastr = toastr;
        this.emailGroupTemplates = [];
        this.email_group_id = 1;
    }
    EmailTemplatesComponent.prototype.ngOnInit = function () {
        this.getEmailTemplates();
    };
    EmailTemplatesComponent.prototype.getEmailTemplates = function () {
        var _this = this;
        this.emailTemplateService.getAll()
            .subscribe(function (data) {
            _this.emailGroups = data;
            _this.loadEmailTemplates();
        });
    };
    EmailTemplatesComponent.prototype.loadEmailTemplates = function () {
        for (var iRow in this.emailGroups) {
            this.emailGroupTemplates[this.emailGroups[iRow].id] = this.emailGroups[iRow].templates;
        }
    };
    EmailTemplatesComponent.prototype.saveEmailtemplate = function (emailTemplate) {
        var _this = this;
        this.emailTemplateService.update(emailTemplate)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.email_templates.messages.update'), _this.translate.instant('settings.email_templates.title'));
        });
    };
    EmailTemplatesComponent = __decorate([
        Component({
            selector: 'app-email-templates',
            templateUrl: './email-templates.component.html',
            styleUrls: ['./email-templates.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            EmailTemplateService,
            ToastrService])
    ], EmailTemplatesComponent);
    return EmailTemplatesComponent;
}());
export { EmailTemplatesComponent };
//# sourceMappingURL=email-templates.component.js.map