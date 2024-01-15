import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { UserService } from '../../../../../core/services/user.service';
import { ClientService } from '../../../../../core/services/client.service';
import { MeetingService } from '../../../../../core/services/meeting.service';
import { environment } from '../../../../../../environments/environment';
import * as moment from 'moment';
var EditMeetingModalComponent = /** @class */ (function () {
    function EditMeetingModalComponent(translate, bsModalRef, formBuilder, toastr, userService, clientService, meetingService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.clientService = clientService;
        this.meetingService = meetingService;
        this.apiUrl = environment.apiUrl;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.users = [];
        this.clients = [];
        this.teamMembers = [];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    EditMeetingModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.getUsers();
        this.getClients();
    };
    EditMeetingModalComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (data) {
            _this.users = data;
            _this.loadForms();
        });
    };
    EditMeetingModalComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getAll().subscribe(function (data) {
            _this.clients = data;
        });
    };
    EditMeetingModalComponent.prototype.loadForms = function () {
        for (var iRow in this.meeting.members) {
            if (!this.meeting.members[iRow].is_client && this.meeting.members[iRow].member_id != this.meeting.organizer_id) {
                this.teamMembers.push(this.meeting.members[iRow].member_id);
            }
        }
        this.editMeetingForm = this.formBuilder.group({
            id: [this.meeting.id],
            title: [this.meeting.title, [Validators.required, Validators.maxLength(255)]],
            organizer_id: [this.meeting.organizer_id],
            description: [this.meeting.description],
            members: [this.teamMembers, Validators.required],
            client_id: [this.meeting.client_id],
            start_date: [new Date(this.meeting.start_date), Validators.required],
            end_date: [new Date(this.meeting.end_date), Validators.required],
            location: [this.meeting.location],
            status: [this.meeting.status, Validators.required],
        });
        this.isPageLoaded = true;
    };
    Object.defineProperty(EditMeetingModalComponent.prototype, "meetingControl", {
        get: function () { return this.editMeetingForm.controls; },
        enumerable: false,
        configurable: true
    });
    EditMeetingModalComponent.prototype.startDateChange = function (start_date) {
        this.editMeetingForm.patchValue({ end_date: new Date(start_date.value) });
    };
    EditMeetingModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editMeetingForm.invalid) {
            return;
        }
        this.editMeetingForm.value.start_date = moment(this.editMeetingForm.value.start_date).format('YYYY-MM-DD HH:mm:ss');
        this.editMeetingForm.value.end_date = moment(this.editMeetingForm.value.end_date).format('YYYY-MM-DD HH:mm:ss');
        // --
        // Check dates
        if ((this.editMeetingForm.value.start_date == this.editMeetingForm.value.end_date) || (this.editMeetingForm.value.start_date > this.editMeetingForm.value.end_date)) {
            this.toastr.error(this.translate.instant('meetings.create.error_messages.message6'), this.translate.instant('meetings.title'));
            return false;
        }
        this.meetingService.update(this.editMeetingForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('meetings.messages.update'), _this.translate.instant('meetings.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    EditMeetingModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    EditMeetingModalComponent = __decorate([
        Component({
            selector: 'app-edit-meeting-modal',
            templateUrl: './edit-meeting-modal.component.html',
            styleUrls: ['./edit-meeting-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            UserService,
            ClientService,
            MeetingService])
    ], EditMeetingModalComponent);
    return EditMeetingModalComponent;
}());
export { EditMeetingModalComponent };
//# sourceMappingURL=edit-meeting-modal.component.js.map