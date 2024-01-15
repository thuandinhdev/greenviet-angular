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
import { LeaveTypeModalComponent } from '../../components/leave-type-modal/leave-type-modal.component';
import { leaves_status } from '../../../../../core/helpers/hrm.helper';
var EditLeaveComponent = /** @class */ (function () {
    function EditLeaveComponent(translate, bsModalRef, formBuilder, modalService, toastr, datepipe, leaveService, leavetypeService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.toastr = toastr;
        this.datepipe = datepipe;
        this.leaveService = leaveService;
        this.leavetypeService = leavetypeService;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.isPageLoad = false;
        this.isFormLoad = false;
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
    }
    EditLeaveComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.getLeaveTypes(true);
    };
    EditLeaveComponent.prototype.loadForm = function () {
        this.editLeaveForm = this.formBuilder.group({
            id: [this.leave.id],
            user_id: [this.leave.user_id],
            leave_type_id: [this.leave.leave_type_id, Validators.required],
            duration: [this.leave.duration],
            leave_date: [new Date(this.leave.leave_date), Validators.required],
            reason: [this.leave.reason, Validators.required],
            status: [this.leave.status],
        });
        this.isPageLoad = true;
    };
    Object.defineProperty(EditLeaveComponent.prototype, "leaveControl", {
        get: function () { return this.editLeaveForm.controls; },
        enumerable: false,
        configurable: true
    });
    EditLeaveComponent.prototype.getLeaveTypes = function (isFormload) {
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
    EditLeaveComponent.prototype.openLeadTypeModal = function () {
        var _this = this;
        this.bsModalRef = this.modalService.show(LeaveTypeModalComponent, this.modalConfigs);
        this.bsModalRef.content.event.subscribe(function (data) {
            _this.getLeaveTypes();
        });
        return false;
    };
    EditLeaveComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editLeaveForm.invalid) {
            return;
        }
        this.editLeaveForm.value.leave_date = this.datepipe.transform(this.editLeaveForm.value.leave_date, 'yyyy-MM-dd');
        this.leaveService.update(this.editLeaveForm.value)
            .subscribe(function (data) {
            _this.toastr.success('Leave Updated Successfully.', 'Leaves');
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    EditLeaveComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    EditLeaveComponent = __decorate([
        Component({
            selector: 'app-edit-leave',
            templateUrl: './edit-leave.component.html',
            styleUrls: ['./edit-leave.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            BsModalService,
            ToastrService,
            DatePipe,
            LeaveService,
            LeavetypeService])
    ], EditLeaveComponent);
    return EditLeaveComponent;
}());
export { EditLeaveComponent };
//# sourceMappingURL=edit-leave.component.js.map