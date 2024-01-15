import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { SettingService } from '../../../../core/services/setting.service';
var SystemUpdateComponent = /** @class */ (function () {
    function SystemUpdateComponent(translate, toastr, settingService) {
        this.translate = translate;
        this.toastr = toastr;
        this.settingService = settingService;
    }
    SystemUpdateComponent.prototype.ngOnInit = function () { };
    SystemUpdateComponent.prototype.saveSystemSettings = function () {
        var _this = this;
        this.settingService.create(this.settings)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.messages.update'), _this.translate.instant('settings.title'));
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SystemUpdateComponent.prototype, "settings", void 0);
    SystemUpdateComponent = __decorate([
        Component({
            selector: 'app-system-update',
            templateUrl: './system-update.component.html',
            styleUrls: ['./system-update.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            SettingService])
    ], SystemUpdateComponent);
    return SystemUpdateComponent;
}());
export { SystemUpdateComponent };
//# sourceMappingURL=system-update.component.js.map