import { __decorate, __metadata } from "tslib";
import { Component } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import "rxjs/add/operator/filter";
import { AuthenticationService } from '../../../core/services/authentication.service';
var BreadcrumbComponent = /** @class */ (function () {
    /**
     *	@class BreadcrumbComponent
     *	@constructor
    */
    function BreadcrumbComponent(translate, activatedRoute, router, titleService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.titleService = titleService;
        this.authenticationService = authenticationService;
        this.show = false;
        this.appTitle = 'VipsPM';
        this.breadcrumbs = [];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        if (this.loginUser.settings.company_short_name) {
            this.appTitle = this.loginUser.settings.company_short_name;
        }
    }
    /**
     *	Invoked only once when the component/directive is instantiated.
     *
     *	@class BreadcrumbComponent
     *	@method ngOnInit
    */
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.breadcrumbs = this.getBreadcrumbs(this.activatedRoute.root);
        this.router.events.filter(function (event) { return event instanceof NavigationEnd; }).subscribe(function (event) {
            var root = _this.activatedRoute.root;
            _this.breadcrumbs = _this.getBreadcrumbs(root);
        });
    };
    /**
     *	Returns array of IBreadcrumb objects that represent the breadcrumb
     *
     *	@class BreadcrumbComponent
     *	@method getBreadcrumbs
     *	@param {ActivateRoute} route
     *	@param {string} url
     *	@param {IBreadcrumb[]} breadcrumbs
    */
    BreadcrumbComponent.prototype.getBreadcrumbs = function (route, url, breadcrumbs) {
        var _this = this;
        if (url === void 0) { url = ""; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        var ROUTE_DATA_BREADCRUMB = "text";
        var ROUTE_DATA_ICON = "icon";
        // --
        // get the child routes
        var children = route.children;
        // --
        // Return if there are no more children
        if (children.length === 0) {
            return breadcrumbs;
        }
        // --
        // Iterate over each children
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            // --
            // Verify primary route
            if (child.outlet !== PRIMARY_OUTLET) {
                continue;
            }
            // --
            // Set page title
            if (!child.snapshot.data.title) {
                this.titleService.setTitle("" + this.appTitle);
            }
            else {
                this.translate.get("" + child.snapshot.data.title).subscribe(function (value) {
                    _this.titleService.setTitle(value + " | " + _this.appTitle);
                    _this.parentTitle = value;
                });
            }
            // --
            // Check for breadcrums
            if (!child.snapshot.data.breadcrumbs) {
                continue;
            }
            // --
            // Verify the custom data property "breadcrumb" is specified on the route
            if (!child.snapshot.data.breadcrumbs.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }
            this.show = child.snapshot.data.breadcrumbs.hasOwnProperty('show');
            // this.icon = child.snapshot.data.breadcrumbs[ROUTE_DATA_ICON];
            // this.label = child.snapshot.data.breadcrumbs[ROUTE_DATA_BREADCRUMB];
            // --
            // Get the route's URL segment
            var routeURL = child.snapshot.url.map(function (segment) { return segment.path; }).join("/");
            if (child.snapshot.url.map(function (segment) { return segment.path; }).length === 0) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }
            // --
            // Append route URL to URL
            url += "/" + routeURL;
            // --
            // Add breadcrumb
            this.translate.get("" + child.snapshot.data.breadcrumbs[ROUTE_DATA_BREADCRUMB]).subscribe(function (value) {
                _this.label = value;
            });
            var breadcrumb = {
                label: this.label,
                params: child.snapshot.params,
                url: url,
                hasParams: child.snapshot.data.breadcrumbs.hasOwnProperty('hasParams'),
                isHome: child.snapshot.data.breadcrumbs.hasOwnProperty('isHome'),
            };
            breadcrumbs.push(breadcrumb);
            // --
            // Recursive
            return this.getBreadcrumbs(child, url, breadcrumbs);
        }
    };
    BreadcrumbComponent = __decorate([
        Component({
            selector: 'app-breadcrumb',
            templateUrl: './breadcrumb.component.html',
            styleUrls: ['./breadcrumb.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ActivatedRoute,
            Router,
            Title,
            AuthenticationService])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());
export { BreadcrumbComponent };
//# sourceMappingURL=breadcrumb.component.js.map