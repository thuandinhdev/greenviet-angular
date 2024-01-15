import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { LeaveService } from '../../../../../core/services/leave.service';
import { LeavetypeService } from '../../../../../core/services/leavetype.service';
import { UserService } from '../../../../../core/services/user.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { LeaveTypeModalComponent } from '../../components/leave-type-modal/leave-type-modal.component';
import { leaves_status } from '../../../../../core/helpers/hrm.helper';
var CreateLeaveComponent = /** @class */ (function () {
    function CreateLeaveComponent(translate, bsModalRef, formBuilder, toastr, modalService, datepipe, leaveService, leavetypeService, userService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.modalService = modalService;
        this.datepipe = datepipe;
        this.leaveService = leaveService;
        this.leavetypeService = leavetypeService;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.isPageLoad = false;
        this.dateSelected = [];
        this.selectedClass = [];
        this.leaveStatus = leaves_status;
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-lg animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    CreateLeaveComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.getLeaveTypes(true);
        this.getUsers();
    };
    CreateLeaveComponent.prototype.loadForm = function () {
        if (this.loginUser.is_admin || this.loginUser.is_super_admin) {
            this.createLeaveForm = this.formBuilder.group({
                user_id: [null, Validators.required],
                leave_type_id: [null, Validators.required],
                duration: ['single'],
                multi_date: [null],
                leave_date: [null],
                reason: [null, Validators.required],
                status: [null, Validators.required],
            });
        }
        else {
            this.createLeaveForm = this.formBuilder.group({
                user_id: [this.loginUser.id],
                leave_type_id: [null, Validators.required],
                duration: ['single'],
                multi_date: [null],
                leave_date: [null],
                reason: [null, Validators.required],
                status: [1],
            });
        }
        this.changeDuration();
        this.isPageLoad = true;
    };
    Object.defineProperty(CreateLeaveComponent.prototype, "leaveControl", {
        get: function () { return this.createLeaveForm.controls; },
        enumerable: false,
        configurable: true
    });
    CreateLeaveComponent.prototype.changeDuration = function ($event) {
        if ($event === void 0) { $event = []; }
        if (this.createLeaveForm.value.duration == 'multiple') {
            this.selectedClass = [];
            this.dateSelected = [];
            this.createLeaveForm.get('multi_date').setValidators([Validators.required]);
            this.createLeaveForm.get('multi_date').updateValueAndValidity();
            this.createLeaveForm.get('leave_date').clearValidators();
            this.createLeaveForm.get('leave_date').updateValueAndValidity();
        }
        else {
            this.createLeaveForm.get('leave_date').setValidators([Validators.required]);
            this.createLeaveForm.get('leave_date').updateValueAndValidity();
            this.createLeaveForm.get('multi_date').clearValidators();
            this.createLeaveForm.get('multi_date').updateValueAndValidity();
        }
    };
    CreateLeaveComponent.prototype.getLeaveTypes = function (isFormload) {
        var _this = this;
        if (isFormload === void 0) { isFormload = false; }
        this.leavetypeService.getAll()
            .subscribe(function (data) {
            _this.leavetypes = data;
            if (isFormload) {
                _this.loadForm();
            }
        });
    };
    CreateLeaveComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll()
            .subscribe(function (data) {
            _this.users = data;
        });
    };
    CreateLeaveComponent.prototype.getDateItem = function (date) {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    };
    CreateLeaveComponent.prototype.onValueChange = function (event) {
        var _this = this;
        if (event && event.length === undefined) {
            var date_1 = this.getDateItem(event);
            var index = this.dateSelected.findIndex(function (item) {
                var testDate = _this.getDateItem(item);
                return testDate === date_1;
            });
            if (index < 0) {
                this.dateSelected.push(event);
            }
            else {
                this.dateSelected.splice(index, 1);
            }
        }
        if (this.dateSelected.length > 0) {
            this.selectedClass = this.dateSelected.map(function (date) {
                return {
                    date: date,
                    classes: ['custom-selected-date']
                };
            });
        }
    };
    CreateLeaveComponent.prototype.renderDates = function () {
        var dateArray = [];
        if (this.dateSelected) {
            for (var i in this.dateSelected) {
                dateArray.push(this.datepipe.transform(this.dateSelected[i], 'yyyy-MM-dd'));
            }
        }
        return dateArray;
    };
    CreateLeaveComponent.prototype.openLeadTypeModal = function () {
        var _this = this;
        this.bsModalRef = this.modalService.show(LeaveTypeModalComponent, this.modalConfigs);
        this.bsModalRef.content.event.subscribe(function (data) {
            _this.getLeaveTypes();
        });
    };
    CreateLeaveComponent.prototype.onSubmit = function () {
        var _this = this;
        this.createLeaveForm.value.leave_date = this.datepipe.transform(this.createLeaveForm.value.leave_date, 'yyyy-MM-dd');
        this.createLeaveForm.value.multi_date = this.renderDates();
        this.isFormSubmitted = true;
        if (this.createLeaveForm.invalid) {
            return;
        }
        this.leaveService.create(this.createLeaveForm.value)
            .subscribe(function (data) {
            _this.toastr.success('Leave Created Successfully.', 'Leaves');
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    CreateLeaveComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    CreateLeaveComponent = __decorate([
        Component({
            selector: 'app-create-leave',
            templateUrl: './create-leave.component.html',
            styleUrls: ['./create-leave.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            BsModalService,
            DatePipe,
            LeaveService,
            LeavetypeService,
            UserService,
            AuthenticationService])
    ], CreateLeaveComponent);
    return CreateLeaveComponent;
}());
export { CreateLeaveComponent };
//# sourceMappingURL=create-leave.component.js.map