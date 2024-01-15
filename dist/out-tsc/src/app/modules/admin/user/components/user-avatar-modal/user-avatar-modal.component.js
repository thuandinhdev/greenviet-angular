import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../../../../core/services/user.service';
import { UserAvatars } from '../../../../../core/helpers/admin.helper';
import { environment } from '../../../../../../environments/environment';
import * as Dropzone from 'dropzone';
var UserAvatarModalComponent = /** @class */ (function () {
    function UserAvatarModalComponent(translate, bsModalRef, toastr, userService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.toastr = toastr;
        this.userService = userService;
        this.event = new EventEmitter();
        this.apiUrl = environment.apiUrl;
        this.avatars = UserAvatars;
        this.isFormSubmitted = false;
        this.isProfileUploded = false;
        this.isProfileLoaded = true;
    }
    UserAvatarModalComponent.prototype.ngOnInit = function () {
        this.usersData = Object.assign({}, this.user);
        this.onClose = new Subject();
        this.loadDropzone();
        this.setAvatar(this.usersData.avatar);
    };
    UserAvatarModalComponent.prototype.loadDropzone = function () {
        var that = this;
        new Dropzone(this.profileDropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = Dropzone.createElement("<button class=\'btn btn-sm btn-block\'>" + that.translate.instant('common.remove_file') + "</button>");
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        reader_1.onload = function (e) {
                            that.isProfileUploded = true;
                            that.usersData.avatar = reader_1.result;
                            that.isProfileLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.usersData.avatar = null;
                    that.isProfileLoaded = false;
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    UserAvatarModalComponent.prototype.removeDropzoneImage = function () {
        this.isProfileUploded = true;
        this.isProfileLoaded = false;
        this.usersData.avatar = null;
    };
    UserAvatarModalComponent.prototype.setAvatar = function (avatar) {
        if (avatar === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = avatar;
        }
        this.usersData.avatar = this.selected;
    };
    UserAvatarModalComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    UserAvatarModalComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.usersData.type = "list";
        this.usersData.UserAvatars = this.avatars;
        this.userService.update(this.usersData).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('users.messages.avatar'), _this_1.translate.instant('users.title'));
            _this_1.event.emit({ data: true });
            _this_1.onCancel();
        }, function (error) {
            _this_1.onCancel();
        });
    };
    UserAvatarModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    __decorate([
        ViewChild('profileDropzone', { static: true }),
        __metadata("design:type", ElementRef)
    ], UserAvatarModalComponent.prototype, "profileDropzone", void 0);
    UserAvatarModalComponent = __decorate([
        Component({
            selector: 'app-user-avatar-modal',
            templateUrl: './user-avatar-modal.component.html',
            styleUrls: ['./user-avatar-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            ToastrService,
            UserService])
    ], UserAvatarModalComponent);
    return UserAvatarModalComponent;
}());
export { UserAvatarModalComponent };
//# sourceMappingURL=user-avatar-modal.component.js.map