import { __decorate, __metadata } from "tslib";
import { Component, Renderer2, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxPermissionsService } from 'ngx-permissions';
import { TranslateService } from '@ngx-translate/core';
import { SettingService } from '../../../core/services/setting.service';
import { sidebarBGDefaultImages, sidebarBGGradientColors, sidebarBGColors, transparentBGColors, transparentBGImages } from '../../../core/helpers/pm-helper';
import { collapsedMenu } from '../../../core/helpers/app.helper';
import { environment } from 'src/environments/environment';
var ThemeSettingsComponent = /** @class */ (function () {
    function ThemeSettingsComponent(translate, renderer, ngxPermissionsService, toastr, settingService) {
        var _this = this;
        this.translate = translate;
        this.renderer = renderer;
        this.ngxPermissionsService = ngxPermissionsService;
        this.toastr = toastr;
        this.settingService = settingService;
        this.scrollConfig = {};
        this.apiUrl = environment.apiUrl;
        this.itemsPerSlide = 3;
        this.showIndicator = true;
        this.sidebarBGImages = [];
        this.sidebarBGDefaultImages = sidebarBGDefaultImages;
        this.sidebarBGGradientColors = sidebarBGGradientColors;
        this.sidebarBGColors = sidebarBGColors;
        this.transparentBGColors = transparentBGColors;
        this.transparentBGImages = transparentBGImages;
        var permissions = this.ngxPermissionsService.getPermissions();
        this.ngxPermissionsService.permissions$.subscribe(function (permissions) {
            _this.permissions = permissions;
        });
    }
    ThemeSettingsComponent.prototype.ngOnInit = function () {
        // --
        // Toggle
        $('.theme-settings-toggle').on('click', function () {
            $('.theme-settings').toggleClass('open');
        });
        $('.theme-settings-close').on('click', function () {
            $('.theme-settings').removeClass('open');
        });
        var body = $('body'), default_sidebar_bg_color = $('.app-sidebar').attr('data-background-color'), default_sidebar_bg_image = $('.app-sidebar').attr('data-image');
        // --
        // Default select colors/Background image
        $('.sidebar-bg-color span[data-bg-color="' + default_sidebar_bg_color + '"]').addClass('selected');
        $('.sidebar-bg-image img[src$="' + default_sidebar_bg_image + '"]').addClass('selected');
        this.getSettings();
    };
    // --
    // Collapsed menu
    ThemeSettingsComponent.prototype.changeCollapsedMenu = function ($event) {
        if (this.saveSettings(this.settings)) {
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
        if (this.saveSettings(this.settings)) {
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
    /**
     *	Change layout options [Dark, Light, Transparent]
     *
     *	@class ColorPalettesComponent
     *	@method changeBGColorLayout
     *	@param {newValue} value
    */
    ThemeSettingsComponent.prototype.changeBGColorLayout = function (newValue) {
        if (this.saveSettings(this.settings)) {
            this.setThemeLayout(newValue.key);
        }
    };
    /**
     *	Change layout options
     *
     *	@class ColorPalettesComponent
     *	@method changeBGColorLayout
     *	@param {layout} [Dark, Light, Transparent]
     *	@param {isLoaded} boolean
    */
    ThemeSettingsComponent.prototype.setThemeLayout = function (layout, isLoaded) {
        if (isLoaded === void 0) { isLoaded = false; }
        switch (layout) {
            case "light":
                this.removeBackgroundColor();
                this.removeTransparentColors();
                this.renderer.removeClass(document.body, 'dark-layout');
                this.renderer.removeClass(document.body, 'transparent-layout');
                if (isLoaded) {
                    this.setSidebarBGImageColor(this.settings);
                }
                break;
            case "dark-layout":
                this.removeBackgroundColor();
                this.removeTransparentColors();
                this.renderer.removeClass(document.body, 'transparent-layout');
                this.renderer.addClass(document.body, 'dark-layout');
                if (isLoaded) {
                    this.setSidebarBGImageColor(this.settings);
                }
                break;
            case "transparent-layout":
                this.removeBackgroundColor();
                this.removeTransparentColors();
                this.renderer.addClass(document.body, 'dark-layout');
                this.renderer.addClass(document.body, 'transparent-layout');
                if (isLoaded) {
                    this.selectTransparentBGImage(this.settings);
                }
                break;
            case "custom-colors":
                this.removeTransparentColors();
                $('.app-sidebar').attr('data-background-color', 'black');
                this.renderer.removeClass(document.body, 'dark-layout');
                this.renderer.removeClass(document.body, 'transparent-layout');
                if (isLoaded) {
                    this.setCustomSidebarColorFonts(this.settings);
                }
                break;
            default:
                break;
        }
    };
    /**
     *	Change sidebar gradient color
     *
     *	@class ColorPalettesComponent
     *	@method selectSidebarBGGradientColor
     *	@param {bgColor} color
    */
    ThemeSettingsComponent.prototype.selectSidebarBGGradientColor = function (bgColor) {
        this.settings.sidebar_bg_color = bgColor;
        if (this.saveSettings(this.settings)) {
            $('.app-sidebar').attr('data-background-color', bgColor);
        }
    };
    /**
     *	Set sidebar background image
     *
     *	@class ColorPalettesComponent
     *	@method setSidebarBGImageColor
     *	@param {settings} settings
    */
    ThemeSettingsComponent.prototype.setSidebarBGImageColor = function (settings) {
        $('.app-sidebar').attr('data-background-color', settings.sidebar_bg_color);
        if (settings.sidebar_bg_color == 'white') {
            $('.logo-img img').attr('src', 'assets/img/logos/vipspm-dark-logo.png');
        }
        else {
            if ($('.logo-img img').attr('src') == 'assets/img/logos/vipspm-dark-logo.png') {
                $('.logo-img img').attr('src', 'assets/img/logos/vipspm-white-logo.png');
            }
        }
        if (this.sidebarBGImages[settings.sidebar_bg_image]) {
            this.setBgImage(settings.is_sidebar_background);
            $('.sidebar-background').css('background-image', 'url(' + this.sidebarBGImages[settings.sidebar_bg_image].image + ')');
        }
    };
    /**
     *	Change sidebar background color
     *
     *	@class ColorPalettesComponent
     *	@method selectSidebarBGColor
     *	@param {bgColor} color
    */
    ThemeSettingsComponent.prototype.selectSidebarBGColor = function (bgColor) {
        this.settings.sidebar_bg_color = bgColor;
        if (this.saveSettings(this.settings)) {
            $('.app-sidebar').attr('data-background-color', bgColor);
            if (bgColor == 'white') {
                $('.logo-img img').attr('src', 'assets/img/logos/vipspm-dark-logo.png');
            }
            else {
                if ($('.logo-img img').attr('src') == 'assets/img/logos/vipspm-dark-logo.png') {
                    $('.logo-img img').attr('src', 'assets/img/logos/vipspm-white-logo.png');
                }
            }
        }
    };
    /**
     *	Change sidebar background image
     *
     *	@class ColorPalettesComponent
     *	@method selectSidebarBGImage
     *	@param {index} index number
    */
    ThemeSettingsComponent.prototype.selectSidebarBGImage = function (index) {
        this.settings.sidebar_bg_image = index;
        if (this.saveSettings(this.settings)) {
            $('.sidebar-background').css('background-image', 'url(' + this.sidebarBGImages[index].image + ')');
        }
    };
    /**
     *	Select trasparent background
     *
     *	@class ColorPalettesComponent
     *	@method selectTransparentBGColor
     *	@param {bgColor} color
    */
    ThemeSettingsComponent.prototype.selectTransparentBGColor = function (bgColor) {
        this.settings.sidebar_bg_color = bgColor;
        if (this.saveSettings(this.settings)) {
            this.removeTransparentColors();
            this.renderer.addClass(document.body, bgColor);
        }
    };
    /**
     *	Change trasparent background image
     *
     *	@class ColorPalettesComponent
     *	@method selectTrasparentBGImage
     *	@param {bgImage} image
    */
    ThemeSettingsComponent.prototype.selectTrasparentBGImage = function (bgImage) {
        this.settings.sidebar_transparent_bg_image = bgImage;
        if (this.saveSettings(this.settings)) {
            this.removeTransparentColors();
            this.renderer.addClass(document.body, bgImage);
        }
    };
    /**
     *	Set trasparent background image
     *
     *	@class ColorPalettesComponent
     *	@method selectTransparentBGImage
     *	@param {settings} settings
    */
    ThemeSettingsComponent.prototype.selectTransparentBGImage = function (settings) {
        this.removeTransparentColors();
        this.renderer.addClass(document.body, settings.sidebar_bg_color);
        this.renderer.addClass(document.body, settings.sidebar_transparent_bg_image);
    };
    /**
     *	Remove trasparent background color
     *
     *	@class ColorPalettesComponent
     *	@method removeTransparentColors
    */
    ThemeSettingsComponent.prototype.removeTransparentColors = function () {
        for (var iRow in this.transparentBGColors) {
            this.renderer.removeClass(document.body, this.transparentBGColors[iRow].key);
        }
        for (var iRow in this.transparentBGImages) {
            this.renderer.removeClass(document.body, this.transparentBGImages[iRow].class);
        }
    };
    /**
     *	Change sidebar
     *
     *	@class ColorPalettesComponent
     *	@method changeSidebarTransparentColors
    */
    ThemeSettingsComponent.prototype.changeSidebarTransparentColors = function ($event) {
        $('.sidebar-background').css('display', 'none');
        $('.app-sidebar').css('background-color', $event);
    };
    ThemeSettingsComponent.prototype.selectSidebarTransparentFontColor = function (bgColor) {
        this.settings.sidebar_font_color = bgColor;
        if (this.saveSettings(this.settings)) {
            $('.app-sidebar').attr('data-background-color', bgColor);
        }
    };
    ThemeSettingsComponent.prototype.selectSidebarTransparentColors = function ($event) {
        this.settings.sidebar_bg_custom_color = $event;
        if (this.saveSettings(this.settings)) {
            $('.sidebar-background').css('display', 'none');
            $('.app-sidebar').css('background-color', $event);
        }
    };
    ThemeSettingsComponent.prototype.setCustomSidebarColorFonts = function (settings) {
        $('.sidebar-background').css('display', 'none');
        $('.app-sidebar').css('background-color', settings.sidebar_bg_custom_color);
        $('.app-sidebar').attr('data-background-color', settings.sidebar_font_color);
    };
    // --
    // Others
    ThemeSettingsComponent.prototype.removeBackgroundColor = function () {
        $('.sidebar-background').css('display', 'block');
        $('.app-sidebar').css('background-color', '');
    };
    ThemeSettingsComponent.prototype.changeBGImage = function (event) {
        if (this.saveSettings(this.settings)) {
            this.setBgImage(this.settings.is_sidebar_background);
        }
    };
    ThemeSettingsComponent.prototype.setBgImage = function (isImageSelect) {
        if (isImageSelect) {
            $('.sidebar-background').css('display', 'block');
        }
        else {
            $('.sidebar-background').css('display', 'none');
        }
    };
    ThemeSettingsComponent.prototype.setBGImages = function () {
        var _this = this;
        if (this.settings.sidebar_background_images && typeof this.settings.sidebar_background_images == "string") {
            JSON.parse(this.settings.sidebar_background_images).forEach(function (element) {
                var imgUrl = _this.apiUrl + "/uploads/sidebar_background_images/" + element;
                _this.sidebarBGImages.push({ image: imgUrl });
            });
        }
        else {
            this.sidebarBGImages = this.sidebarBGDefaultImages;
        }
        this.setThemeLayout(this.settings.theme_layout, true);
        if (this.sidebarBGImages[this.settings.sidebar_bg_image] && this.sidebarBGImages[this.settings.sidebar_bg_image].image) {
            $('.sidebar-background').css('background-image', 'url(' + this.sidebarBGImages[this.settings.sidebar_bg_image].image + ')');
        }
    };
    // --
    // Others
    ThemeSettingsComponent.prototype.getSettings = function () {
        this.setSidebarWidth(this.settings.sidebar_width);
        this.setCollapsedMenu(this.settings.is_collapsed_menu);
        this.setBGImages();
    };
    ThemeSettingsComponent.prototype.saveSettings = function (settings) {
        var _this = this;
        if (!this.permissions.themesettings_create || !this.permissions.themesettings_edit) {
            return false;
        }
        return this.settingService.create(settings).subscribe(function (data) {
            return true;
            _this.toastr.success(_this.translate.instant('settings.messages.update'), _this.translate.instant('settings.title'));
        }, function (data) {
            return false;
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThemeSettingsComponent.prototype, "settings", void 0);
    ThemeSettingsComponent = __decorate([
        Component({
            selector: 'app-theme-settings',
            templateUrl: './theme-settings.component.html',
            styleUrls: ['./theme-settings.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            Renderer2,
            NgxPermissionsService,
            ToastrService,
            SettingService])
    ], ThemeSettingsComponent);
    return ThemeSettingsComponent;
}());
export { ThemeSettingsComponent };
//# sourceMappingURL=theme-settings.component.js.map