import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { NgxRolesService } from 'ngx-permissions';
import { LeaveService } from '../../../../../core/services/leave.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { leaves_status, leave_status_key_value } from '../../../../../core/helpers/hrm.helper';
var ListViewComponent = /** @class */ (function () {
    function ListViewComponent(translate, ngxRolesService, http, toastr, authenticationService, leaveService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.http = http;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.leaveService = leaveService;
        this.leavesStatus = leaves_status;
        this.leaveStatusKeyValue = leave_status_key_value;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    ListViewComponent.prototype.ngOnInit = function () {
        this.getLeaves();
    };
    ListViewComponent.prototype.getLeaves = function () {
        var _this = this;
        this.leaveService.getAll().subscribe(function (data) {
            _this.leaves = data;
        });
    };
    ListViewComponent.prototype.changeLeaveStatus = function (leaveId, statusId) {
        var _this = this;
        var changeLeave = {
            id: leaveId,
            status: statusId
        };
        this.leaveService.changeStatus(changeLeave)
            .subscribe(function (data) {
            _this.toastr.success('Status Changed Successfully.', 'Leaves');
            _this.getLeaves();
        });
    };
    ListViewComponent = __decorate([
        Component({
            selector: 'app-list-view',
            templateUrl: './list-view.component.html',
            styleUrls: ['./list-view.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            NgxRolesService,
            HttpClient,
            ToastrService,
            AuthenticationService,
            LeaveService])
    ], ListViewComponent);
    return ListViewComponent;
}());
export { ListViewComponent };
//# sourceMappingURL=list-view.component.js.map