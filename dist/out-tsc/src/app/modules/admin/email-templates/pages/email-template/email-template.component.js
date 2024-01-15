import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { EmailTemplateService } from '../../../../../core/services/email-template.service';
var EmailTemplateComponent = /** @class */ (function () {
    function EmailTemplateComponent(emailTemplateService) {
        this.emailTemplateService = emailTemplateService;
    }
    EmailTemplateComponent.prototype.ngOnInit = function () {
        this.getEmailTemplates();
        this.expandedIndex = false;
    };
    EmailTemplateComponent.prototype.expandRow = function (index) {
        this.expandedIndex = index === this.expandedIndex ? -1 : index;
    };
    EmailTemplateComponent.prototype.getEmailTemplates = function () {
        var _this = this;
        this.emailTemplateService.getAll()
            .subscribe(function (data) {
            _this.emailGroups = data;
        });
    };
    EmailTemplateComponent = __decorate([
        Component({
            selector: 'app-email-template',
            templateUrl: './email-template.component.html',
            styleUrls: ['./email-template.component.scss']
        }),
        __metadata("design:paramtypes", [EmailTemplateService])
    ], EmailTemplateComponent);
    return EmailTemplateComponent;
}());
export { EmailTemplateComponent };
//# sourceMappingURL=email-template.component.js.map