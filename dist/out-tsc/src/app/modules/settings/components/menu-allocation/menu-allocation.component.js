import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { MenuService } from '../../../../core/services/menu.service';
var MenuAllocationComponent = /** @class */ (function () {
    function MenuAllocationComponent(translate, menuService, toastr) {
        this.translate = translate;
        this.menuService = menuService;
        this.toastr = toastr;
        this.activeInactiveMenu = {
            active_menu: {},
            inactive_menu: {}
        };
    }
    MenuAllocationComponent.prototype.ngOnInit = function () {
        this.getMenus();
    };
    MenuAllocationComponent.prototype.getMenus = function () {
        var _this = this;
        this.menuService.getAll()
            .subscribe(function (data) {
            _this.activeInactiveMenu = data;
            _this.loadMenu();
        });
    };
    MenuAllocationComponent.prototype.updateOutput = function (e) {
        var list = e.length ? e : $(e.target), output = list.data('output');
        output.val(JSON.stringify(list.nestable('serialize')));
    };
    MenuAllocationComponent.prototype.expandAll = function () {
        $('.dd').nestable('expandAll');
    };
    MenuAllocationComponent.prototype.collapseAll = function () {
        $('.dd').nestable('collapseAll');
    };
    MenuAllocationComponent.prototype.loadMenu = function () {
        var _this = this;
        setTimeout(function () {
            var activeMenu = $('#nestable').nestable({
                group: 2,
                maxDepth: 2
            }).on('change', _this.updateOutput);
            // --
            // Activate nestable for list 1
            var inActiveMenu = $('#nestable2').nestable({
                group: 2,
                maxDepth: 2
            }).on('change', _this.updateOutput);
            _this.updateOutput(activeMenu.data('output', $('#nestable-output')));
            _this.updateOutput(inActiveMenu.data('output', $('#nestable2-output')));
        }, 200);
    };
    MenuAllocationComponent.prototype.saveMenu = function () {
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // return;
        var _this = this;
        var menus = {
            'all_active_menu': $('#nestable-output').val(),
            'all_inactive_menu': $('#nestable2-output').val()
        };
        this.menuService.create(menus)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.menu_allocation.messages.update'), _this.translate.instant('settings.menu_allocation.title'));
        });
    };
    MenuAllocationComponent = __decorate([
        Component({
            selector: 'app-menu-allocation',
            templateUrl: './menu-allocation.component.html',
            styleUrls: ['./menu-allocation.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            MenuService,
            ToastrService])
    ], MenuAllocationComponent);
    return MenuAllocationComponent;
}());
export { MenuAllocationComponent };
//# sourceMappingURL=menu-allocation.component.js.map