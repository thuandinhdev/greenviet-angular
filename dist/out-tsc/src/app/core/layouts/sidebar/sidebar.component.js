import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { SettingService } from '../../services/setting.service';
import { sidebarCollpasedMenu } from '../../../core/helpers/app.helper';
import { environment } from '../../../../environments/environment';
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, route, toastr, authenticationService, settingService) {
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.settingService = settingService;
        this.scrollConfig = {};
        this.apiUrl = environment.apiUrl;
        this.menuItems = this.route.snapshot.data.sidebarMenu.menus;
        this.authenticationService.setLoginUser(this.route.snapshot.data.sidebarMenu.loginUser);
        this.loginUser = this.route.snapshot.data.sidebarMenu.loginUser;
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            sidebarCollpasedMenu();
        });
    };
    SidebarComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "settings", void 0);
    SidebarComponent = __decorate([
        Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss']
        }),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute,
            ToastrService,
            AuthenticationService,
            SettingService])
    ], SidebarComponent);
    return SidebarComponent;
}());
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map