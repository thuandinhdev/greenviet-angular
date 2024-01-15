import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { MeetingService } from '../../../../../core/services/meeting.service';
import { meeting_status_key_value } from "../../../../../core/helpers/admin.helper";
var MeetingDetailsComponent = /** @class */ (function () {
    function MeetingDetailsComponent(translate, toastr, meetingService) {
        this.translate = translate;
        this.toastr = toastr;
        this.meetingService = meetingService;
        this.meetingstatusKeyValue = meeting_status_key_value;
    }
    MeetingDetailsComponent.prototype.ngOnInit = function () { };
    MeetingDetailsComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.meetingstatusKeyValue[statusKey];
    };
    MeetingDetailsComponent.prototype.changeMeetingStatus = function (meetingIDs, status) {
        var _this = this;
        var params = {
            ids: meetingIDs,
            status: status.id
        };
        this.meetingService.changeStatus(params).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('meetings.messages.status'), _this.translate.instant('meetings.title'));
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MeetingDetailsComponent.prototype, "meeting", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MeetingDetailsComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MeetingDetailsComponent.prototype, "apiUrl", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MeetingDetailsComponent.prototype, "permission", void 0);
    MeetingDetailsComponent = __decorate([
        Component({
            selector: 'app-meeting-details',
            templateUrl: './meeting-details.component.html',
            styleUrls: ['./meeting-details.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            MeetingService])
    ], MeetingDetailsComponent);
    return MeetingDetailsComponent;
}());
export { MeetingDetailsComponent };
//# sourceMappingURL=meeting-details.component.js.map