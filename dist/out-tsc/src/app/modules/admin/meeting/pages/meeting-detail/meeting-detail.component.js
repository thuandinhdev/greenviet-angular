import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MeetingService } from '../../../../../core/services/meeting.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { environment } from '../../../../../../environments/environment';
var MeetingDetailComponent = /** @class */ (function () {
    function MeetingDetailComponent(route, router, meetingService, authenticationService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.meetingService = meetingService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.isPageLoaded = false;
        this.activeMeetingTab = '1';
        this.route.paramMap.subscribe(function (params) {
            _this.getById(params.get('id'));
        });
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    MeetingDetailComponent.prototype.ngOnInit = function () { };
    MeetingDetailComponent.prototype.getById = function (taskId) {
        var _this = this;
        this.meetingService.getById(taskId).subscribe(function (data) {
            _this.meeting = data;
            _this.isPageLoaded = true;
        });
    };
    MeetingDetailComponent = __decorate([
        Component({
            selector: 'app-meeting-detail',
            templateUrl: './meeting-detail.component.html',
            styleUrls: ['./meeting-detail.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            MeetingService,
            AuthenticationService])
    ], MeetingDetailComponent);
    return MeetingDetailComponent;
}());
export { MeetingDetailComponent };
//# sourceMappingURL=meeting-detail.component.js.map