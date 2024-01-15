import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ProjectPlannerSprintService } from './../../../.././../core/services/project-planner-sprint.service';
import { UserService } from './../../../.././../core/services/user.service';
var CreateSprintModalComponent = /** @class */ (function () {
    function CreateSprintModalComponent(translate, bsCreateProjectSprintModalRef, formBuilder, toastr, projectPlannerSprintService, userService) {
        this.translate = translate;
        this.bsCreateProjectSprintModalRef = bsCreateProjectSprintModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectPlannerSprintService = projectPlannerSprintService;
        this.userService = userService;
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
    CreateSprintModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForms();
        this.getProjectUsers();
    };
    CreateSprintModalComponent.prototype.loadForms = function () {
        this.projectStartDate = new Date(this.project.start_date);
        this.projectEndDate = new Date(this.project.end_date);
        this.createProjectSprintForm = this.formBuilder.group({
            project_id: [this.project.id],
            sprint_name: ['', [Validators.required, Validators.maxLength(255)]],
            sprint_members: [null],
            start_date: [null],
            end_date: [null],
            status: [1, Validators.required],
            hours: ['', Validators.pattern(/^[0-9]+\:[0-5][0-9]$/)],
            description: ['']
        });
        this.isPageLoaded = true;
    };
    Object.defineProperty(CreateSprintModalComponent.prototype, "projectSprintControl", {
        get: function () {
            return this.createProjectSprintForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    CreateSprintModalComponent.prototype.getProjectUsers = function () {
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
    CreateSprintModalComponent.prototype.startDateChange = function (event) {
        this.createProjectSprintForm.patchValue({ end_date: event });
    };
    CreateSprintModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        this.isHoursValid = false;
        if (this.createProjectSprintForm.invalid) {
            return;
        }
        if (this.createProjectSprintForm.value.hours && this.project.estimated_hours) {
            var projectHours = this.project.estimated_hours.replace(/:/g, '.'), sprintHours = this.createProjectSprintForm.value.hours.replace(/:/g, '.');
            if (parseInt(projectHours) < parseInt(sprintHours)) {
                this.isHoursValid = true;
                return;
            }
        }
        this.projectPlannerSprintService.create(this.createProjectSprintForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('project_planner.sprint.messages.create'), _this.translate.instant('project_planner.sprint.title'));
            _this.event.emit({ data: data });
            _this.onCancel();
        });
    };
    CreateSprintModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateProjectSprintModalRef.hide();
    };
    CreateSprintModalComponent = __decorate([
        Component({
            selector: 'app-create-sprint-modal',
            templateUrl: './create-sprint-modal.component.html',
            styleUrls: ['./create-sprint-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            ProjectPlannerSprintService,
            UserService])
    ], CreateSprintModalComponent);
    return CreateSprintModalComponent;
}());
export { CreateSprintModalComponent };
//# sourceMappingURL=create-sprint-modal.component.js.map