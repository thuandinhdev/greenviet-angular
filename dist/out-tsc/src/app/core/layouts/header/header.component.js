import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../../core/services/authentication.service';
// import { DashboardService } from '../../../core/services/dashboard.service';
// import { MailService } from '../../../core/services/mail.service';
import { HelperService } from '../../../core/services/helper.service';
import { TranslationService } from '../../../core/services/translation.service';
import { UserService } from '../../../core/services/user.service';
import { environment } from './../../../../environments/environment';
var HeaderComponent = /** @class */ (function () {
    // interval: any;
    function HeaderComponent(translate, toastr, authenticationService, helperService, 
    // private dashboardService: DashboardService,
    // private mailService: MailService,
    translationService, userService) {
        var _this = this;
        this.translate = translate;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.helperService = helperService;
        this.translationService = translationService;
        this.userService = userService;
        this.apiUrl = environment.apiUrl;
        this.scrollConfig = {};
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        if (this.loginUser) {
            this.selectedLanguage = this.loginUser.language;
        }
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // this.getTodayActivities(8);
        // this.getUnReadMails(8);
        this.getAllActiveTranslations();
        // --
        // Interval
        // this.interval = timer(60000, 30000).pipe().subscribe(x => {
        // 	this.getUnReadMails(8);
        // });
    };
    HeaderComponent.prototype.settingMenutoggle = function () {
        jQuery(".settings-menu").slideToggle(400);
    };
    // getTodayActivities(length) {
    // 	this.dashboardService.getTodayActivities(length).subscribe(data => {
    // 		this.todaysActivities = data;
    // 	}, error => {
    // 		this.interval.unsubscribe();
    // 	});
    // }
    // getUnReadMails(length) {
    // 	this.mailService.getUnReadMails(length).subscribe(data => {
    // 		this.mails = data;
    // 	}, error => {
    // 		this.interval.unsubscribe();
    // 	});
    // }
    // executeCronJob(){
    // 	this.helperService.executeCronJob().subscribe(data => {})
    // }
    HeaderComponent.prototype.logout = function () {
        // this.interval.unsubscribe();
        this.authenticationService.logout();
    };
    HeaderComponent.prototype.getAllActiveTranslations = function () {
        var _this = this;
        this.translationService.getAllActiveTranslations().subscribe(function (data) {
            _this.translations = data;
        });
    };
    HeaderComponent.prototype.changeLanguage = function (language) {
        this.translate.use(language);
        this.changeLocale(language);
    };
    HeaderComponent.prototype.changeLocale = function (locale) {
        this.selectedLanguage = locale;
        this.userService.changeLocale(locale).subscribe(function (data) { });
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            AuthenticationService,
            HelperService,
            TranslationService,
            UserService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map