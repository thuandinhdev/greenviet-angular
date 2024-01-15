import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ProjectPlannerSprintService } from './../../../.././../core/services/project-planner-sprint.service';
var EditSprintModalComponent = /** @class */ (function () {
    function EditSprintModalComponent(translate, bsEditProjectSprintModalRef, datepipe, formBuilder, toastr, projectPlannerSprintService) {
        this.translate = translate;
        this.bsEditProjectSprintModalRef = bsEditProjectSprintModalRef;
        this.datepipe = datepipe;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectPlannerSprintService = projectPlannerSprintService;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isHoursValid = false;
        this.users = [];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    EditSprintModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.getProjectSprintById(this.sprintId);
    };
    EditSprintModalComponent.prototype.loadForms = function () {
        this.projectStartDate = new Date(this.project.start_date);
        this.projectEndDate = new Date(this.project.end_date);
        this.setDateFormat();
        this.editProjectSprintForm = this.formBuilder.group({
            id: [this.sprint.id],
            project_id: [this.sprint.project_id],
            sprint_name: [this.sprint.sprint_name, [Validators.required, Validators.maxLength(255)]],
            sprint_members: [this.sprint.sprint_members],
            start_date: [this.sprint.start_date],
            end_date: [this.sprint.end_date],
            status: [this.sprint.status, Validators.required],
            hours: [this.sprint.hours, Validators.pattern(/^[0-9]+\:[0-5][0-9]$/)],
            description: [this.sprint.description]
        });
        this.getProjectUsers();
        this.isPageLoaded = true;
    };
    EditSprintModalComponent.prototype.setDateFormat = function () {
        if (this.sprint.start_date) {
            this.sprint.start_date = new Date(this.sprint.start_date);
        }
        if (this.sprint.end_date) {
            this.sprint.end_date = new Date(this.sprint.end_date);
        }
    };
    Object.defineProperty(EditSprintModalComponent.prototype, "projectSprintControl", {
        get: function () {
            return this.editProjectSprintForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    EditSprintModalComponent.prototype.getProjectUsers = function () {
        if (this.project.assign_members == 'Unassign' || this.project.assign_members == null) {
        }
        else {
            var userArr = this.project.assign_members.split(',');
            for (var iRow in userArr) {
                for (var jRow in this.project.users) {
                    if (this.project.users[jRow].id == userArr[iRow]) {
                        this.users.push(this.project.users[jRow]);
                    }
                }
            }
        }
    };
    EditSprintModalComponent.prototype.startDateChange = function (event) {
        this.editProjectSprintForm.patchValue({ end_date: this.editProjectSprintForm.value.start_date });
    };
    EditSprintModalComponent.prototype.getProjectSprintById = function (sprintID) {
        var _this = this;
        this.projectPlannerSprintService.getProjectSprintById(sprintID)
            .subscribe(function (data) {
            _this.sprint = data;
            _this.loadForms();
        });
    };
    EditSprintModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        this.isHoursValid = false;
        if (this.editProjectSprintForm.invalid) {
            return;
        }
        // --
        // Hours validation
        if (this.editProjectSprintForm.value.hours && this.project.estimated_hours) {
            var projectHours = this.project.estimated_hours.replace(/:/g, '.'), sprintHours = this.editProjectSprintForm.value.hours.replace(/:/g, '.');
            if (parseInt(projectHours) < parseInt(sprintHours)) {
                this.isHoursValid = true;
                return;
            }
        }
        // --
        // Date format
        this.editProjectSprintForm.value.start_date = this.datepipe.transform(this.editProjectSprintForm.value.start_date, 'yyyy-MM-dd');
        this.editProjectSprintForm.value.end_date = this.datepipe.transform(this.editProjectSprintForm.value.end_date, 'yyyy-MM-dd');
        this.projectPlannerSprintService.update(this.editProjectSprintForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('project_planner.sprint.messages.update'), _this.translate.instant('project_planner.sprint.title'));
            _this.editProjectSprintForm.patchValue({ sprint_members: _this.editProjectSprintForm.value.sprint });
            _this.event.emit({ data: data });
            _this.onCancel();
        });
    };
    EditSprintModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditProjectSprintModalRef.hide();
    };
    EditSprintModalComponent = __decorate([
        Component({
            selector: 'app-edit-sprint-modal',
            templateUrl: './edit-sprint-modal.component.html',
            styleUrls: ['./edit-sprint-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            DatePipe,
            FormBuilder,
            ToastrService,
            ProjectPlannerSprintService])
    ], EditSprintModalComponent);
    return EditSprintModalComponent;
}());
export { EditSprintModalComponent };
//# sourceMappingURL=edit-sprint-modal.component.js.map