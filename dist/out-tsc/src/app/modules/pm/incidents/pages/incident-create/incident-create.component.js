import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { TeamService } from '../../../../../core/services/team.service';
import { ProjectService } from '../../../../../core/services/project.service';
import { IncidentService } from '../../../../../core/services/incident.service';
import { CustomFieldsService } from '../../../../../core/services/custom-fields.service';
var IncidentCreateComponent = /** @class */ (function () {
    function IncidentCreateComponent(translate, datepipe, router, formBuilder, toastr, teamService, projectService, incidentService, customFieldsService) {
        this.translate = translate;
        this.datepipe = datepipe;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.teamService = teamService;
        this.projectService = projectService;
        this.incidentService = incidentService;
        this.customFieldsService = customFieldsService;
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.teams = [];
        this.teamsMembers = [];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    IncidentCreateComponent.prototype.ngOnInit = function () {
        this.getTeams();
        this.getProjects();
        this.getCustomFieldByForm();
        this.loadForms();
    };
    IncidentCreateComponent.prototype.loadForms = function () {
        this.createIncidentForm = this.formBuilder.group({
            generated_id: ['INC0001', Validators.required],
            incident_name: ['', [Validators.required, Validators.maxLength(255)]],
            project_id: [null],
            project_version: [null],
            start_date: [null],
            end_date: [null],
            priority: [2, Validators.required],
            estimated_hours: ['', Validators.pattern(/^[0-9]+\:[0-5][0-9]$/)],
            incident_type: [1, Validators.required],
            assigned_group_id: [null],
            assign_to: [null],
            status: [1, Validators.required],
            description: [''],
            custom_field: this.formBuilder.array([]),
            custom_fields: [null]
        });
        this.isPageLoaded = true;
        this.getIncidentGeneratedId();
    };
    Object.defineProperty(IncidentCreateComponent.prototype, "incidentControl", {
        get: function () { return this.createIncidentForm.controls; },
        enumerable: false,
        configurable: true
    });
    IncidentCreateComponent.prototype.getCustomFieldByForm = function () {
        var _this = this;
        this.customFieldsService.getCustomFieldByForm(4)
            .subscribe(function (data) {
            _this.customFields = data;
            if (_this.customFields.length > 0) {
                _this.addDynamicField(_this.customFields);
            }
        });
    };
    IncidentCreateComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getMyProjects().subscribe(function (data) {
            _this.projects = data;
        });
    };
    IncidentCreateComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamService.getAll().subscribe(function (data) {
            _this.teams = data;
        });
    };
    IncidentCreateComponent.prototype.getIncidentGeneratedId = function () {
        var _this = this;
        this.incidentService.getIncidentGeneratedId().subscribe(function (data) {
            _this.createIncidentForm.patchValue({ generated_id: data });
        });
    };
    IncidentCreateComponent.prototype.projectChange = function (event) {
        this.createIncidentForm.patchValue({ project_version: null });
        this.createIncidentForm.patchValue({ start_date: null });
        this.createIncidentForm.patchValue({ end_date: null });
        if (this.createIncidentForm.value.project_id == undefined || this.createIncidentForm.value.project_id == null || this.createIncidentForm.value.project_id == '') {
            this.projectVersions = null;
            return;
        }
        this.projectVersions = event.project_version.split(",");
        // --
        // Dates
        this.projectStartDate = new Date(event.start_date);
    };
    IncidentCreateComponent.prototype.startDateChange = function (event) {
        this.createIncidentForm.patchValue({ end_date: event });
    };
    IncidentCreateComponent.prototype.addDynamicField = function (fieldList) {
        var _this = this;
        fieldList.forEach(function (element) {
            var _a;
            var control = _this.createIncidentForm.controls.custom_field;
            var validators = null;
            if (element.is_required == 1) {
                validators = [Validators.required];
            }
            control.push(_this.formBuilder.group((_a = {},
                _a[element.field_column] = [null, validators],
                _a)));
        });
    };
    IncidentCreateComponent.prototype.assignGroupChange = function (event) {
        if (this.createIncidentForm.value.assigned_group_id == undefined || this.createIncidentForm.value.assigned_group_id == null || this.createIncidentForm.value.assigned_group_id == '') {
            this.createIncidentForm.patchValue({ assign_to: null });
            this.teamsMembers = null;
            return;
        }
        this.teamsMembers = event.members;
    };
    IncidentCreateComponent.prototype.setCustomFields = function () {
        var arr = this.createIncidentForm.value.custom_field, obj = {}, iRow = 0, that = this;
        arr.forEach(function (item) {
            var key = Object.keys(item)[0];
            obj[key] = item[key];
            if (that.customFields[iRow++].field_type == "date") {
                obj[key] = that.datepipe.transform(item[key], 'yyyy-MM-dd');
            }
        });
        this.createIncidentForm.patchValue({ custom_fields: obj });
    };
    IncidentCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createIncidentForm.invalid) {
            return;
        }
        if (this.customFields.length > 0) {
            this.setCustomFields();
        }
        this.incidentService.create(this.createIncidentForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('incidents.messages.create'), _this.translate.instant('incidents.title'));
            _this.router.navigate(['incidents']);
        });
    };
    IncidentCreateComponent = __decorate([
        Component({
            selector: 'app-incident-create',
            templateUrl: './incident-create.component.html',
            styleUrls: ['./incident-create.component.scss'],
            preserveWhitespaces: true
        }),
        __metadata("design:paramtypes", [TranslateService,
            DatePipe,
            Router,
            FormBuilder,
            ToastrService,
            TeamService,
            ProjectService,
            IncidentService,
            CustomFieldsService])
    ], IncidentCreateComponent);
    return IncidentCreateComponent;
}());
export { IncidentCreateComponent };
//# sourceMappingURL=incident-create.component.js.map