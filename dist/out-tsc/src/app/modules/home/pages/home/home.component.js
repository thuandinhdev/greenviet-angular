import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SettingService } from 'src/app/core/services/setting.service';
import { DashboardService } from './../../../../core/services/dashboard.service';
import { AuthenticationService } from './../../../../core/services/authentication.service';
import { UserService } from './../../../../core/services/user.service';
import { environment } from '../../../../../environments/environment';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(modalService, authenticationService, dashboardService, userService, settingService) {
        var _this = this;
        this.modalService = modalService;
        this.authenticationService = authenticationService;
        this.dashboardService = dashboardService;
        this.userService = userService;
        this.settingService = settingService;
        this.apiUrl = environment.apiUrl;
        this.isPageLoaded = false;
        this.length = 5;
        this.userLists = [];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getSettings();
        this.getDashboardCounts(this.length);
        this.getUsers();
    };
    HomeComponent.prototype.getSettings = function () {
        var _this = this;
        this.settingService.getAll()
            .subscribe(function (data) {
            _this.settings = data;
        });
    };
    HomeComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUserkeyBy().subscribe(function (data) {
            _this.userLists = data;
        });
    };
    HomeComponent.prototype.getDashboardCounts = function (length) {
        var _this = this;
        this.dashboardService.getDashboardCounts(length)
            .subscribe(function (data) {
            _this.dashboardLists = data;
            _this.getDashboardLists(_this.length);
        });
    };
    HomeComponent.prototype.getDashboardLists = function (length) {
        var _this = this;
        this.dashboardService.getDashboardLists(length)
            .subscribe(function (data) {
            _this.dashboardLists1 = data;
            _this.isPageLoaded = true;
        });
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        }),
        __metadata("design:paramtypes", [BsModalService,
            AuthenticationService,
            DashboardService,
            UserService,
            SettingService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map