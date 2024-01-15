import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { UserService } from '../../../../../core/services/user.service';
import { ClientService } from '../../../../../core/services/client.service';
import { MeetingService } from '../../../../../core/services/meeting.service';
import { environment } from '../../../../../../environments/environment';
import * as moment from 'moment';
var CreateMeetingModalComponent = /** @class */ (function () {
    function CreateMeetingModalComponent(translate, bsModalRef, formBuilder, toastr, userService, clientService, meetingService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.clientService = clientService;
        this.meetingService = meetingService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.users = [];
        this.clients = [];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    CreateMeetingModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.getUsers();
        this.getClients();
        this.loadForms();
    };
    CreateMeetingModalComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (data) {
            _this.users = data;
            _this.isPageLoaded = true;
        });
    };
    CreateMeetingModalComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getAll().subscribe(function (data) {
            _this.clients = data;
        });
    };
    CreateMeetingModalComponent.prototype.loadForms = function () {
        this.createMeetingForm = this.formBuilder.group({
            organizer_id: [null],
            title: [null, [Validators.required, Validators.maxLength(255)]],
            description: [''],
            members: [null, Validators.required],
            client_id: [null],
            start_date: [null, Validators.required],
            end_date: [null, Validators.required],
            location: ['']
        });
    };
    Object.defineProperty(CreateMeetingModalComponent.prototype, "meetingControl", {
        get: function () { return this.createMeetingForm.controls; },
        enumerable: false,
        configurable: true
    });
    CreateMeetingModalComponent.prototype.startDateChange = function (start_date) {
        this.createMeetingForm.patchValue({ end_date: new Date(start_date.value) });
    };
    CreateMeetingModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createMeetingForm.invalid) {
            return;
        }
        this.createMeetingForm.value.start_date = moment(this.createMeetingForm.value.start_date).format('YYYY-MM-DD HH:mm:ss');
        this.createMeetingForm.value.end_date = moment(this.createMeetingForm.value.end_date).format('YYYY-MM-DD HH:mm:ss');
        // --
        // Check dates
        if ((this.createMeetingForm.value.start_date == this.createMeetingForm.value.end_date) || (this.createMeetingForm.value.start_date > this.createMeetingForm.value.end_date)) {
            this.toastr.error(this.translate.instant('meetings.create.error_messages.message6'), this.translate.instant('meetings.title'));
            return false;
        }
        this.meetingService.create(this.createMeetingForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('meetings.messages.create'), _this.translate.instant('meetings.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    CreateMeetingModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    CreateMeetingModalComponent = __decorate([
        Component({
            selector: 'app-create-meeting-modal',
            templateUrl: './create-meeting-modal.component.html',
            styleUrls: ['./create-meeting-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            UserService,
            ClientService,
            MeetingService,
            AuthenticationService])
    ], CreateMeetingModalComponent);
    return CreateMeetingModalComponent;
}());
export { CreateMeetingModalComponent };
//# sourceMappingURL=create-meeting-modal.component.js.map