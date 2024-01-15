import { __decorate, __metadata } from "tslib";
import { Component, Renderer2 } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxPermissionsService } from 'ngx-permissions';
import { SettingService } from '../../../core/services/setting.service';
import { sidebarBGDefaultImages, sidebarBGGradientColors, sidebarBGColors, transparentBGColors, transparentBGImages } from '../../../core/helpers/pm-helper';
import { environment } from 'src/environments/environment';
var ColorPalettesComponent = /** @class */ (function () {
    /**
     *	@class ColorPalettesComponent
     *	@constructor
    */
    function ColorPalettesComponent(renderer, ngxPermissionsService, toastr, settingService) {
        var _this = this;
        this.renderer = renderer;
        this.ngxPermissionsService = ngxPermissionsService;
        this.toastr = toastr;
        this.settingService = settingService;
        this.scrollConfig = {};
        this.apiUrl = environment.apiUrl;
        this.itemsPerSlide = 3;
        this.showIndicator = true;
        this.is_settings_loaded = false;
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
    /**
     *	Invoked only once when the component/directive is instantiated.
     *
     *	@class ColorPalettesComponent
     *	@method ngOnInit
    */
    ColorPalettesComponent.prototype.ngOnInit = function () {
        var body = $('body'), default_sidebar_bg_color = $('.app-sidebar').attr('data-background-color'), default_sidebar_bg_image = $('.app-sidebar').attr('data-image');
        // --
        // Default select colors/Background image
        $('.sidebar-bg-color span[data-bg-color="' + default_sidebar_bg_color + '"]').addClass('selected');
        $('.sidebar-bg-image img[src$="' + default_sidebar_bg_image + '"]').addClass('selected');
        // --
        // Toggle colors sidebar
        $('.color-palettes-toggle').on('click', function () {
            $('.color-palettes').toggleClass('open');
        });
        $('.color-palettes-close').on('click', function () {
            $('.color-palettes').removeClass('open');
        });
        this.getSettings();
    };
    /**
     *	Change layout options [Dark, Light, Transparent]
     *
     *	@class ColorPalettesComponent
     *	@method changeBGColorLayout
     *	@param {newValue} value
    */
    ColorPalettesComponent.prototype.changeBGColorLayout = function (newValue) {
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
    ColorPalettesComponent.prototype.setThemeLayout = function (layout, isLoaded) {
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
    ColorPalettesComponent.prototype.selectSidebarBGGradientColor = function (bgColor) {
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
    ColorPalettesComponent.prototype.setSidebarBGImageColor = function (settings) {
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
    ColorPalettesComponent.prototype.selectSidebarBGColor = function (bgColor) {
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
    ColorPalettesComponent.prototype.selectSidebarBGImage = function (index) {
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
    ColorPalettesComponent.prototype.selectTransparentBGColor = function (bgColor) {
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
    ColorPalettesComponent.prototype.selectTrasparentBGImage = function (bgImage) {
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
    ColorPalettesComponent.prototype.selectTransparentBGImage = function (settings) {
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
    ColorPalettesComponent.prototype.removeTransparentColors = function () {
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
    ColorPalettesComponent.prototype.changeSidebarTransparentColors = function ($event) {
        $('.sidebar-background').css('display', 'none');
        $('.app-sidebar').css('background-color', $event);
    };
    ColorPalettesComponent.prototype.selectSidebarTransparentFontColor = function (bgColor) {
        this.settings.sidebar_font_color = bgColor;
        if (this.saveSettings(this.settings)) {
            $('.app-sidebar').attr('data-background-color', bgColor);
        }
    };
    ColorPalettesComponent.prototype.selectSidebarTransparentColors = function ($event) {
        this.settings.sidebar_bg_custom_color = $event;
        if (this.saveSettings(this.settings)) {
            $('.sidebar-background').css('display', 'none');
            $('.app-sidebar').css('background-color', $event);
        }
    };
    ColorPalettesComponent.prototype.setCustomSidebarColorFonts = function (settings) {
        $('.sidebar-background').css('display', 'none');
        $('.app-sidebar').css('background-color', settings.sidebar_bg_custom_color);
        $('.app-sidebar').attr('data-background-color', settings.sidebar_font_color);
    };
    // --
    // Others
    ColorPalettesComponent.prototype.removeBackgroundColor = function () {
        $('.sidebar-background').css('display', 'block');
        $('.app-sidebar').css('background-color', '');
    };
    ColorPalettesComponent.prototype.changeBGImage = function (event) {
        if (this.saveSettings(this.settings)) {
            this.setBgImage(this.settings.is_sidebar_background);
        }
    };
    ColorPalettesComponent.prototype.setBgImage = function (isImageSelect) {
        if (isImageSelect) {
            $('.sidebar-background').css('display', 'block');
        }
        else {
            $('.sidebar-background').css('display', 'none');
        }
    };
    ColorPalettesComponent.prototype.getSettings = function () {
        var _this = this;
        this.settingService.getAll()
            .subscribe(function (data) {
            _this.settings = data;
            _this.setBGImages();
        });
    };
    ColorPalettesComponent.prototype.setBGImages = function () {
        var _this = this;
        if (this.settings.sidebar_background_imges && typeof this.settings.sidebar_background_imges == "string") {
            JSON.parse(this.settings.sidebar_background_imges).forEach(function (element) {
                var imgUrl = _this.apiUrl + "/uploads/sidebar_background_imges/" + element;
                _this.sidebarBGImages.push({ image: imgUrl });
            });
        }
        else {
            this.sidebarBGImages = this.sidebarBGDefaultImages;
        }
        this.setThemeLayout(this.settings.theme_layout, true);
        this.is_settings_loaded = true;
    };
    ColorPalettesComponent.prototype.saveSettings = function (settings) {
        var _this = this;
        if (!this.permissions.themesettings_create || !this.permissions.themesettings_edit) {
            return false;
        }
        return this.settingService.create(settings).subscribe(function (data) {
            return true;
            _this.toastr.success('Setting updated successfully.', 'Settings');
        }, function (data) {
            return false;
        });
    };
    ColorPalettesComponent = __decorate([
        Component({
            selector: 'app-color-palettes',
            templateUrl: './color-palettes.component.html',
            styleUrls: ['./color-palettes.component.scss']
        }),
        __metadata("design:paramtypes", [Renderer2,
            NgxPermissionsService,
            ToastrService,
            SettingService])
    ], ColorPalettesComponent);
    return ColorPalettesComponent;
}());
export { ColorPalettesComponent };
//# sourceMappingURL=color-palettes.component.js.map