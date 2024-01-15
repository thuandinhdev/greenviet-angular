import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgxRolesService } from 'ngx-permissions';
import { DefectService } from '../../../../../core/services/defect.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { environment } from '../../../../../../environments/environment';
var DefectDetailComponent = /** @class */ (function () {
    function DefectDetailComponent(route, ngxRolesService, defectService, authenticationService) {
        var _this = this;
        this.route = route;
        this.ngxRolesService = ngxRolesService;
        this.defectService = defectService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.isPageLoaded = false;
        this.permission = false;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.getById(params.get('id'));
        });
    }
    DefectDetailComponent.prototype.ngOnInit = function () { };
    DefectDetailComponent.prototype.getCheckPermission = function (defect) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            this.permission = true;
        }
        else if (defect.assign_member == this.loginUser.id || defect.create_user_id == this.loginUser.id) {
            this.permission = true;
        }
    };
    DefectDetailComponent.prototype.getById = function (defectId) {
        var _this = this;
        this.defectService.getById(defectId).subscribe(function (data) {
            _this.defect = data;
            _this.getCheckPermission(_this.defect);
            _this.isPageLoaded = true;
        });
    };
    DefectDetailComponent = __decorate([
        Component({
            selector: 'app-defect-detail',
            templateUrl: './defect-detail.component.html',
            styleUrls: ['./defect-detail.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            NgxRolesService,
            DefectService,
            AuthenticationService])
    ], DefectDetailComponent);
    return DefectDetailComponent;
}());
export { DefectDetailComponent };
//# sourceMappingURL=defect-detail.component.js.map