import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ProjectPlannerSprintService } from './../../../.././../core/services/project-planner-sprint.service';
var CreateTaskModalComponent = /** @class */ (function () {
    function CreateTaskModalComponent(translate, bsCreateProjectSprintTaskModalRef, formBuilder, toastr, projectPlannerSprintService) {
        this.translate = translate;
        this.bsCreateProjectSprintTaskModalRef = bsCreateProjectSprintTaskModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectPlannerSprintService = projectPlannerSprintService;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.users = [];
        this.statusLists = [];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    CreateTaskModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.setStatus();
        this.loadForms();
        this.getUsers();
    };
    CreateTaskModalComponent.prototype.loadForms = function () {
        // if (this.sprint.start_date) {
        // 	this.sprintStartDate = new Date(this.sprint.start_date);
        // }
        // if (this.sprint.end_date) {
        // 	this.sprintEndDate = new Date(this.sprint.end_date);
        // }
        this.createProjectSprintTaskForm = this.formBuilder.group({
            project_id: [this.project.id],
            type: [this.project.type],
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
    Object.defineProperty(CreateTaskModalComponent.prototype, "projectSprintTaskControl", {
        get: function () {
            return this.createProjectSprintTaskForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    CreateTaskModalComponent.prototype.setStatus = function () {
        if (this.project.type == "Story") {
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
    CreateTaskModalComponent.prototype.getUsers = function () {
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
    CreateTaskModalComponent.prototype.startDateChange = function (event) {
        this.createProjectSprintTaskForm.patchValue({ end_date: event });
    };
    CreateTaskModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createProjectSprintTaskForm.invalid) {
            return;
        }
        this.projectPlannerSprintService.createTask(this.createProjectSprintTaskForm.value).subscribe(function (data) {
            _this.toastr.success(_this.createProjectSprintTaskForm.value.type + _this.translate.instant('project_planner.sprint_task.messages.create'), _this.translate.instant('project_planner.title'));
            _this.event.emit({ data: data });
            _this.onCancel();
        });
    };
    CreateTaskModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateProjectSprintTaskModalRef.hide();
    };
    CreateTaskModalComponent = __decorate([
        Component({
            selector: 'app-create-task-modal',
            templateUrl: './create-task-modal.component.html',
            styleUrls: ['./create-task-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            ProjectPlannerSprintService])
    ], CreateTaskModalComponent);
    return CreateTaskModalComponent;
}());
export { CreateTaskModalComponent };
//# sourceMappingURL=create-task-modal.component.js.map