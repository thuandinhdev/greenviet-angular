import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from './../../../.././../core/services/project.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { environment } from '../../../../../../environments/environment';
var ReleasePlannerListingComponent = /** @class */ (function () {
    // users = [];
    function ReleasePlannerListingComponent(http, projectService, authenticationService) {
        var _this = this;
        this.http = http;
        this.projectService = projectService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.isPageLoaded = false;
        this.hideElements = [];
        this.hideElementsChild = [];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    ReleasePlannerListingComponent.prototype.ngOnInit = function () {
        this.getAllReleasePlanner();
    };
    ReleasePlannerListingComponent.prototype.getAllReleasePlanner = function () {
        var _this = this;
        this.projectService.getReleasePlanner().subscribe(function (data) {
            _this.releasePlanners = data;
            _this.isPageLoaded = true;
        });
    };
    ReleasePlannerListingComponent.prototype.changeProjectId = function (index) {
        this.hideElements[index] = !this.hideElements[index];
    };
    ReleasePlannerListingComponent.prototype.changeTaskId = function (index) {
        this.hideElementsChild[index] = !this.hideElementsChild[index];
    };
    ReleasePlannerListingComponent = __decorate([
        Component({
            selector: 'app-release-planner-listing',
            templateUrl: './release-planner-listing.component.html',
            styleUrls: ['./release-planner-listing.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient,
            ProjectService,
            AuthenticationService])
    ], ReleasePlannerListingComponent);
    return ReleasePlannerListingComponent;
}());
export { ReleasePlannerListingComponent };
//# sourceMappingURL=release-planner-listing.component.js.map