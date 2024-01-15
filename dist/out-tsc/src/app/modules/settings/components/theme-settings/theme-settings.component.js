import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { SettingService } from '../../../../core/services/setting.service';
import { environment } from '../../../../../environments/environment';
import { collapsedMenu } from '../../../../core/helpers/app.helper';
import * as Dropzone from 'dropzone';
var ThemeSettingsComponent = /** @class */ (function () {
    function ThemeSettingsComponent(translate, toastr, settingService) {
        this.translate = translate;
        this.toastr = toastr;
        this.settingService = settingService;
        this.apiUrl = environment.apiUrl;
        this.isCompanyLogoUploaded = false;
        this.isCompanySidebarLogoUploaded = false;
        this.isLoginBgUploaded = false;
        this.isSidebarBgsUploaded = false;
    }
    ThemeSettingsComponent.prototype.ngOnInit = function () {
        if (this.settings.company_logo) {
            this.company_logo = this.settings.company_logo;
            this.isCompanyLogoUploaded = true;
        }
        if (this.settings.company_sidebar_logo) {
            this.company_sidebar_logo = this.settings.company_sidebar_logo;
            this.isCompanySidebarLogoUploaded = true;
        }
        if (this.settings.login_background) {
            this.login_background = this.settings.login_background;
            this.isLoginBgUploaded = true;
        }
        if (this.settings.sidebar_background_images) {
            this.settings.sidebar_background_images = this.convertStringToArray(this.settings.sidebar_background_images);
            this.isSidebarBgsUploaded = true;
        }
        // --
        // Toggle
        $('.theme-settings-toggle').on('click', function () {
            $('.theme-settings').toggleClass('open');
        });
        $('.theme-settings-close').on('click', function () {
            $('.theme-settings').removeClass('open');
        });
        this.setSidebarWidth(this.settings.sidebar_width);
        this.setCollapsedMenu(this.settings.is_collapsed_menu);
        this.loadDropzones();
    };
    // --
    // Collapsed menu
    ThemeSettingsComponent.prototype.changeCollapsedMenu = function ($event) {
        if (this.saveSettings({ 'is_collapsed_menu': this.settings.is_collapsed_menu })) {
            this.setCollapsedMenu(this.settings.is_collapsed_menu);
        }
        else {
            return false;
        }
    };
    ThemeSettingsComponent.prototype.setCollapsedMenu = function (isCollapsed) {
        var collapsedValue = false;
        if (isCollapsed || isCollapsed == 1) {
            collapsedValue = true;
        }
        collapsedMenu(collapsedValue);
        if (isCollapsed) {
            $('.app-sidebar').trigger('mouseleave');
        }
    };
    // --
    // Sidebar width
    ThemeSettingsComponent.prototype.changeSidebarWidth = function ($event) {
        if (this.saveSettings({ 'sidebar_width': this.settings.sidebar_width })) {
            this.setSidebarWidth(this.settings.sidebar_width);
        }
        else {
            return false;
        }
    };
    ThemeSettingsComponent.prototype.setSidebarWidth = function (width) {
        var wrapper = $('.wrapper');
        switch (width) {
            case "small":
                $(wrapper).removeClass('sidebar-lg').addClass('sidebar-sm');
                break;
            case "large":
                $(wrapper).removeClass('sidebar-sm').addClass('sidebar-lg');
                break;
            default:
                $(wrapper).removeClass('sidebar-sm sidebar-lg');
                break;
        }
    };
    ThemeSettingsComponent.prototype.loadDropzones = function () {
        var that = this;
        new Dropzone(this.logoDropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var _this_1 = this;
                    var removeButton = Dropzone.createElement('<button class=\'btn btn-sm btn-block\'>Remove file</button>');
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
                            that.company_logo = reader_1.result;
                            _this_1.isCompanyLogoUploaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.company_logo = null;
                    this.isCompanyLogoUploaded = false;
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
        new Dropzone(this.loginbg.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = Dropzone.createElement('<button class=\'btn btn-sm btn-block\'>Remove file</button>');
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_2 = new FileReader();
                        reader_2.onload = function (e) {
                            that.login_background = reader_2.result;
                            that.isLoginBgUploaded = false;
                        };
                        reader_2.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.login_background = null;
                    that.isLoginBgUploaded = false;
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
        //Color Pallets
        new Dropzone(this.colorpaletts.nativeElement, {
            url: 'https://httpbin.org/post',
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var _this_1 = this;
                    var removeButton = Dropzone.createElement('<button class=\'btn btn-sm btn-block\'>Remove file</button>');
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file, 'test');
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            that.sidebar_background_images_obj = _this_1.files;
                        };
                        reader.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file, param) {
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
        new Dropzone(this.sidebardropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = Dropzone.createElement('<button class=\'btn btn-sm btn-block\'>Remove file</button>');
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_3 = new FileReader();
                        reader_3.onload = function (e) {
                            that.company_sidebar_logo = reader_3.result;
                            that.isCompanySidebarLogoUploaded = false;
                        };
                        reader_3.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.company_sidebar_logo = null;
                    that.isCompanySidebarLogoUploaded = false;
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    ThemeSettingsComponent.prototype.convertStringToArray = function (value) {
        if (typeof value == "string") {
            value = value.replace('[', '');
            value = value.replace(']', '');
            while (value.indexOf('"') > -1) {
                value = value.replace('"', '');
            }
            return value.split(',');
        }
        else {
            return null;
        }
    };
    ThemeSettingsComponent.prototype.removeImage = function (array, item) {
        for (var i in array) {
            if (array[i] == item) {
                array.splice(i, 1);
                break;
            }
        }
    };
    ThemeSettingsComponent.prototype.removeCompanyLogo = function () {
        this.company_logo = null;
        this.isCompanyLogoUploaded = false;
    };
    ThemeSettingsComponent.prototype.removeCompanySidebarLogo = function () {
        this.company_sidebar_logo = null;
        this.isCompanySidebarLogoUploaded = false;
    };
    ThemeSettingsComponent.prototype.removeLoginBg = function () {
        this.login_background = null;
        this.isLoginBgUploaded = false;
    };
    ThemeSettingsComponent.prototype.removeSidebarBgImage = function (image) {
        this.sidebar_background_images = null;
        this.removeImage(this.settings.sidebar_background_images, image);
        if (this.settings.sidebar_background_images.length == 0) {
            this.isSidebarBgsUploaded = false;
        }
    };
    ThemeSettingsComponent.prototype.saveSettings = function (settings) {
        var _this_1 = this;
        return this.settingService.create(settings).subscribe(function (data) {
            return true;
            _this_1.toastr.success(_this_1.translate.instant('settings.messages.update'), _this_1.translate.instant('settings.title'));
        }, function (data) {
            return false;
        });
    };
    ThemeSettingsComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        var sidebar_bg_imgs = [];
        if (this.sidebar_background_images_obj) {
            for (var iRow = 0; iRow < this.sidebar_background_images_obj.length; iRow++) {
                var thisfile = {
                    file: this.sidebar_background_images_obj[iRow].dataURL,
                    name: this.sidebar_background_images_obj[iRow].name,
                    size: this.sidebar_background_images_obj[iRow].size,
                    extension: this.sidebar_background_images_obj[iRow].name.split('.').pop()
                };
                sidebar_bg_imgs.push(thisfile);
            }
        }
        // --
        // Manage images
        this.settings.form_for = 'theme_setting';
        this.settings.settings_images = {
            company_logo: this.company_logo,
            company_sidebar_logo: this.company_sidebar_logo,
            login_background: this.login_background,
            sidebar_background_images: this.settings.sidebar_background_images,
            sidebar_background_images_obj: sidebar_bg_imgs
        };
        this.settingService.create(this.settings).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('settings.messages.update'), _this_1.translate.instant('settings.title'));
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThemeSettingsComponent.prototype, "settings", void 0);
    __decorate([
        ViewChild('logodropzone', { static: true }),
        __metadata("design:type", ElementRef)
    ], ThemeSettingsComponent.prototype, "logoDropzone", void 0);
    __decorate([
        ViewChild('sidebardropzone', { static: true }),
        __metadata("design:type", ElementRef)
    ], ThemeSettingsComponent.prototype, "sidebardropzone", void 0);
    __decorate([
        ViewChild('loginbg', { static: true }),
        __metadata("design:type", ElementRef)
    ], ThemeSettingsComponent.prototype, "loginbg", void 0);
    __decorate([
        ViewChild('colorpaletts', { static: true }),
        __metadata("design:type", ElementRef)
    ], ThemeSettingsComponent.prototype, "colorpaletts", void 0);
    ThemeSettingsComponent = __decorate([
        Component({
            selector: 'app-theme-settings',
            templateUrl: './theme-settings.component.html',
            styleUrls: ['./theme-settings.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            SettingService])
    ], ThemeSettingsComponent);
    return ThemeSettingsComponent;
}());
export { ThemeSettingsComponent };
//# sourceMappingURL=theme-settings.component.js.map