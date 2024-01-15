import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../../../../core/services/user.service';
import { HelperService } from '../../../../../core/services/helper.service';
import { TranslationService } from '../../../../../core/services/translation.service';
import { UserAvatarModalComponent } from '../../components/user-avatar-modal/user-avatar-modal.component';
import { ChangeEmailModalComponent } from '../../components/change-email-modal/change-email-modal.component';
import { ChangePasswordModalComponent } from '../../components/change-password-modal/change-password-modal.component';
var UserDetailUpdateComponent = /** @class */ (function () {
    function UserDetailUpdateComponent(translate, route, datePipe, modalService, toastr, userService, helperService, translationService) {
        this.translate = translate;
        this.route = route;
        this.datePipe = datePipe;
        this.modalService = modalService;
        this.toastr = toastr;
        this.userService = userService;
        this.helperService = helperService;
        this.translationService = translationService;
        this.countries = [];
        this.languages = [];
        this.users = [];
        this.modalConfigs = {};
        this.datepickerConfigs = { dateInputFormat: 'YYYY-MM-DD' };
        this.isPageLoad = false;
    }
    UserDetailUpdateComponent.prototype.ngOnInit = function () {
        this.getLanguages();
        this.getUsers();
        this.loadForms(this.user);
    };
    UserDetailUpdateComponent.prototype.loadForms = function (user) {
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                user: user
            }
        };
    };
    UserDetailUpdateComponent.prototype.getUserById = function (userId) {
        var _this = this;
        this.userService.getById(userId)
            .subscribe(function (data) {
            _this.loadForms(data);
        });
    };
    UserDetailUpdateComponent.prototype.getLanguages = function () {
        var that = this;
        that.translationService.getAllActiveTranslations()
            .subscribe(function (data) {
            for (var iRow in data) {
                that.languages.push({
                    label: data[iRow].name,
                    value: data[iRow].language
                });
            }
            that.getCountries();
        });
    };
    UserDetailUpdateComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (data) {
            for (var iRow in data) {
                _this.users.push({
                    label: data[iRow].firstname + ' ' + data[iRow].lastname,
                    value: data[iRow].id
                });
            }
        });
    };
    UserDetailUpdateComponent.prototype.getCountries = function () {
        var _this = this;
        this.helperService.getCountries()
            .subscribe(function (data) {
            for (var iRow in data) {
                _this.countries.push({
                    label: data[iRow].name,
                    value: data[iRow].id
                });
            }
            _this.isPageLoad = true;
        });
    };
    UserDetailUpdateComponent.prototype.openAvatarChangeModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(UserAvatarModalComponent, this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getUserById(_this.user.id);
        });
    };
    UserDetailUpdateComponent.prototype.changeEmail = function () {
        this.modalRef = this.modalService.show(ChangeEmailModalComponent, this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) { });
    };
    UserDetailUpdateComponent.prototype.changePassword = function () {
        this.modalRef = this.modalService.show(ChangePasswordModalComponent, this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) { });
    };
    UserDetailUpdateComponent.prototype.saveUserDetail = function (name, value) {
        var _this = this;
        if (value instanceof Date) {
            value = this.datePipe.transform(value, "yyyy-MM-dd");
        }
        this.user[name] = value;
        this.user.type = "list";
        this.userService.update(this.user)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('users.messages.update'), _this.translate.instant('users.title'));
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UserDetailUpdateComponent.prototype, "user", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UserDetailUpdateComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UserDetailUpdateComponent.prototype, "permission", void 0);
    UserDetailUpdateComponent = __decorate([
        Component({
            selector: 'app-user-detail-update',
            templateUrl: './user-detail-update.component.html',
            styleUrls: ['./user-detail-update.component.scss'],
            providers: [DatePipe]
        }),
        __metadata("design:paramtypes", [TranslateService,
            ActivatedRoute,
            DatePipe,
            BsModalService,
            ToastrService,
            UserService,
            HelperService,
            TranslationService])
    ], UserDetailUpdateComponent);
    return UserDetailUpdateComponent;
}());
export { UserDetailUpdateComponent };
//# sourceMappingURL=user-detail-update.component.js.map