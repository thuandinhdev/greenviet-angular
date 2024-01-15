import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { SettingService } from '../../services/setting.service';
import { detectBody } from '../../../core/helpers/app.helper';
var BasicLayoutComponent = /** @class */ (function () {
    /**
     *	@class BasicLayoutComponent
     *	@constructor
    */
    function BasicLayoutComponent(settingService) {
        this.settingService = settingService;
        this.getSettings();
    }
    /**
     *	Invoked only once when the component/directive is instantiated.
     *
     *	@class BasicLayoutComponent
     *	@method ngOnInit
    */
    BasicLayoutComponent.prototype.ngOnInit = function () {
        detectBody();
    };
    /**
     *	Invoked only when browser resize
     *
     *	@class BasicLayoutComponent
     *	@method onResize
    */
    BasicLayoutComponent.prototype.onResize = function () {
        detectBody();
    };
    BasicLayoutComponent.prototype.getSettings = function () {
        var _this = this;
        this.settingService.getAll()
            .subscribe(function (data) {
            _this.settings = data;
            _this.isSettingsLoad = true;
        });
    };
    BasicLayoutComponent = __decorate([
        Component({
            selector: 'app-basic-layout',
            templateUrl: './basic-layout.component.html',
            styleUrls: ['./basic-layout.component.scss'],
            host: {
                '(window:resize)': 'onResize()'
            }
        }),
        __metadata("design:paramtypes", [SettingService])
    ], BasicLayoutComponent);
    return BasicLayoutComponent;
}());
export { BasicLayoutComponent };
//# sourceMappingURL=basic-layout.component.js.map