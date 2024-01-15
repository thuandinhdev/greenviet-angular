import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgxRolesService } from 'ngx-permissions';
import { IncidentService } from '../../../../../core/services/incident.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { environment } from '../../../../../../environments/environment';
var IncidentDetailComponent = /** @class */ (function () {
    function IncidentDetailComponent(ngxRolesService, route, router, incidentService, authenticationService) {
        var _this = this;
        this.ngxRolesService = ngxRolesService;
        this.route = route;
        this.router = router;
        this.incidentService = incidentService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.IncidentTab = 1;
        this.isPageLoaded = false;
        this.activeIncidentTab = '1';
        this.permission = false;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.getById(params.get('id'));
        });
    }
    IncidentDetailComponent.prototype.ngOnInit = function () { };
    IncidentDetailComponent.prototype.getCheckPermission = function (incident) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            this.permission = true;
        }
        else if (incident.assign_to == this.loginUser.id || incident.create_user_id == this.loginUser.id) {
            this.permission = true;
        }
    };
    IncidentDetailComponent.prototype.getActiveIncidentTab = function (tab) {
        return this.activeIncidentTab = tab;
    };
    IncidentDetailComponent.prototype.setActiveIncidentTab = function (tab) {
        return this.activeIncidentTab === tab;
    };
    IncidentDetailComponent.prototype.getById = function (incidentId) {
        var _this = this;
        this.incidentService.getById(incidentId)
            .subscribe(function (data) {
            _this.incident = data;
            _this.getCheckPermission(_this.incident);
            _this.isPageLoaded = true;
        });
    };
    IncidentDetailComponent = __decorate([
        Component({
            selector: 'app-incident-detail',
            templateUrl: './incident-detail.component.html',
            styleUrls: ['./incident-detail.component.scss']
        }),
        __metadata("design:paramtypes", [NgxRolesService,
            ActivatedRoute,
            Router,
            IncidentService,
            AuthenticationService])
    ], IncidentDetailComponent);
    return IncidentDetailComponent;
}());
export { IncidentDetailComponent };
//# sourceMappingURL=incident-detail.component.js.map