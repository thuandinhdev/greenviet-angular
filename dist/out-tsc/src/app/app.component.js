import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from './core/services/authentication.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(translate, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.authenticationService = authenticationService;
        this.title = 'vipsPM';
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        translate.setDefaultLang('en');
        translate.use('en');
        if (this.loginUser) {
            translate.setDefaultLang(this.loginUser.language);
            translate.use(this.loginUser.language);
        }
        if (localStorage.getItem("permissions") != 'undefined' && localStorage.getItem("permissions") != null) {
            authenticationService.setUserPermissions(JSON.parse(localStorage.getItem("permissions")));
        }
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            AuthenticationService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map