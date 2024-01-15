import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ProjectPlannerSprintService } from './../../../.././../core/services/project-planner-sprint.service';
var CreateSprintTaskModalComponent = /** @class */ (function () {
    function CreateSprintTaskModalComponent(translate, bsCreateProjectSprintTaskModalRef, formBuilder, toastr, projectPlannerSprintService) {
        this.translate = translate;
        this.bsCreateProjectSprintTaskModalRef = bsCreateProjectSprintTaskModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectPlannerSprintService = projectPlannerSprintService;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isHoursValid = false;
        this.users = [];
        this.statusLists = [];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    CreateSprintTaskModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.setStatus();
        this.loadForms();
        this.getUsers();
    };
    CreateSprintTaskModalComponent.prototype.loadForms = function () {
        if (this.sprint.start_date) {
            this.sprintStartDate = new Date(this.sprint.start_date);
        }
        if (this.sprint.end_date) {
            this.sprintEndDate = new Date(this.sprint.end_date);
        }
        this.createProjectSprintTaskForm = this.formBuilder.group({
            project_sprint_id: [this.sprint.id],
            type: [this.sprint.type],
            name: ['', [Validators.required, Validators.maxLength(255)]],
            assign_to: [null],
            start_date: [null],
            end_date: [null],
            status: [1, Validators.required],
            estimated_hours: ['', Validators.pattern(/^[0-9]+\:[0-5][0-9]$/)],
            description: ['']
        });
        this.isPageLoaded = true;
    };
    Object.defineProperty(CreateSprintTaskModalComponent.prototype, "projectSprintTaskControl", {
        get: function () {
            return this.createProjectSprintTaskForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    CreateSprintTaskModalComponent.prototype.setStatus = function () {
        if (this.sprint.type == "Story") {
            this.statusLists = [
                { id: 1, name: this.translate.instant('common.status.open') },
                { id: 2, name: this.translate.instant('common.status.in_progress') },
                { id: 3, name: this.translate.instant('common.status.closed') }
            ];
        }
        else {
            this.statusLists = [
                { id: 1, name: this.translate.instant('common.status.open') },
                { id: 2, name: this.translate.instant('common.status.on_hold') },
                { id: 3, name: this.translate.instant('common.status.closed') }
            ];
        }
    };
    CreateSprintTaskModalComponent.prototype.getUsers = function () {
        this.users = this.sprint.sprint_members;
    };
    CreateSprintTaskModalComponent.prototype.startDateChange = function (event) {
        this.createProjectSprintTaskForm.patchValue({ end_date: event });
    };
    CreateSprintTaskModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        this.isHoursValid = false;
        if (this.createProjectSprintTaskForm.invalid) {
            return;
        }
        // --
        // Hours validation
        if (this.createProjectSprintTaskForm.value.estimated_hours && this.sprint.hours) {
            var projectHours = this.sprint.hours.replace(/:/g, '.'), sprintHours = this.createProjectSprintTaskForm.value.estimated_hours.replace(/:/g, '.');
            if (parseInt(projectHours) < parseInt(sprintHours)) {
                this.isHoursValid = true;
                return;
            }
        }
        this.projectPlannerSprintService.createTask(this.createProjectSprintTaskForm.value).subscribe(function (data) {
            _this.toastr.success(_this.createProjectSprintTaskForm.value.type + _this.translate.instant('project_planner.sprint_task.messages.create'), _this.translate.instant('project_planner.title'));
            _this.event.emit({ data: data });
            _this.onCancel();
        });
    };
    CreateSprintTaskModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateProjectSprintTaskModalRef.hide();
    };
    CreateSprintTaskModalComponent = __decorate([
        Component({
            selector: 'app-create-sprint-task-modal',
            templateUrl: './create-sprint-task-modal.component.html',
            styleUrls: ['./create-sprint-task-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            ProjectPlannerSprintService])
    ], CreateSprintTaskModalComponent);
    return CreateSprintTaskModalComponent;
}());
export { CreateSprintTaskModalComponent };
//# sourceMappingURL=create-sprint-task-modal.component.js.map