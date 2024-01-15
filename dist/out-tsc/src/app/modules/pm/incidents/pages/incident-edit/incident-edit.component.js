import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxRolesService } from 'ngx-permissions';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { TeamService } from '../../../../../core/services/team.service';
import { ProjectService } from '../../../../../core/services/project.service';
import { IncidentService } from '../../../../../core/services/incident.service';
import { CustomFieldsService } from '../../../../../core/services/custom-fields.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
var IncidentEditComponent = /** @class */ (function () {
    function IncidentEditComponent(translate, datepipe, ngxRolesService, router, route, formBuilder, toastr, teamService, projectService, incidentService, customFieldsService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.ngxRolesService = ngxRolesService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.teamService = teamService;
        this.projectService = projectService;
        this.incidentService = incidentService;
        this.customFieldsService = customFieldsService;
        this.authenticationService = authenticationService;
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.teams = [];
        this.teamsMembers = [];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this.getIncidentById(params.get('id'));
        });
    }
    IncidentEditComponent.prototype.ngOnInit = function () { };
    IncidentEditComponent.prototype.loadForms = function () {
        // --
        // Dates
        if (this.incident.project) {
            this.projectStartDate = new Date(this.incident.project.start_date);
        }
        if (this.incident.start_date) {
            this.incident.start_date = new Date(this.incident.start_date);
        }
        this.editIncidentForm = this.formBuilder.group({
            id: [this.incident.id],
            generated_id: [this.incident.generated_id, Validators.required],
            incident_name: [this.incident.incident_name, [Validators.required, Validators.maxLength(255)]],
            start_date: [this.incident.start_date],
            end_date: [this.incident.end_date],
            project_id: [this.incident.project_id],
            project_version: [this.incident.project_version],
            status: [this.incident.status, Validators.required],
            priority: [this.incident.priority, Validators.required],
            estimated_hours: [this.incident.estimated_hours, Validators.pattern(/^[0-9]+\:[0-5][0-9]$/)],
            assigned_group_id: [this.incident.assigned_group_id],
            assign_to: [this.incident.assign_to],
            incident_type: [this.incident.incident_type, Validators.required],
            description: [this.incident.description],
            custom_field: this.formBuilder.array([]),
            custom_fields: [null],
        });
        this.getCustomFieldByForm();
        this.isPageLoaded = true;
    };
    Object.defineProperty(IncidentEditComponent.prototype, "incidentControl", {
        get: function () {
            return this.editIncidentForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    IncidentEditComponent.prototype.getCheckPermission = function (incident) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
        }
        else if (incident.assign_to == this.loginUser.id || incident.create_user_id == this.loginUser.id) {
        }
        else {
            this.router.navigate(['incidents']);
        }
    };
    IncidentEditComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getMyProjects().subscribe(function (data) {
            _this.projects = data;
            _this.getProjectVersions();
        });
    };
    IncidentEditComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamService.getAll().subscribe(function (data) {
            _this.teams = data;
            var selectedTeam = _this.teams.find(function (i) { return i.id == _this.incident.assigned_group_id; });
            _this.getProjects();
            _this.loadForms();
            _this.assignGroupChange(selectedTeam);
        });
    };
    IncidentEditComponent.prototype.getProjectVersions = function () {
        for (var iRow in this.projects) {
            if (this.projects[iRow].id == this.incident.project_id) {
                this.projectVersions = this.projects[iRow].project_version.split(",");
            }
        }
    };
    IncidentEditComponent.prototype.getCustomFieldByForm = function () {
        var _this = this;
        this.customFieldsService.getCustomFieldByForm(4)
            .subscribe(function (data) {
            _this.customFields = data;
            if (_this.customFields.length > 0) {
                _this.addDynamicField(_this.customFields);
            }
        });
    };
    IncidentEditComponent.prototype.addDynamicField = function (fieldList) {
        var _this = this;
        fieldList.forEach(function (element) {
            var _a, _b;
            var control = _this.editIncidentForm.controls.custom_field;
            var validators = null;
            if (element.is_required == 1) {
                validators = [Validators.required];
            }
            if (element.field_type == 'date' && _this.incident[element.field_column] != null) {
                control.push(_this.formBuilder.group((_a = {},
                    _a[element.field_column] = [new Date(_this.incident[element.field_column]), validators],
                    _a)));
            }
            else {
                control.push(_this.formBuilder.group((_b = {},
                    _b[element.field_column] = [_this.incident[element.field_column], validators],
                    _b)));
            }
        });
    };
    IncidentEditComponent.prototype.assignGroupChange = function (event) {
        if (this.editIncidentForm.value.assigned_group_id == undefined || this.editIncidentForm.value.assigned_group_id == null || this.editIncidentForm.value.assigned_group_id == '') {
            this.editIncidentForm.patchValue({ assign_to: null });
            this.teamsMembers = null;
            return;
        }
        this.teamsMembers = event.members;
    };
    IncidentEditComponent.prototype.projectChange = function (event) {
        this.editIncidentForm.patchValue({ project_version: null });
        this.editIncidentForm.patchValue({ start_date: null });
        this.editIncidentForm.patchValue({ end_date: null });
        if (this.editIncidentForm.value.project_id == undefined || this.editIncidentForm.value.project_id == null || this.editIncidentForm.value.project_id == '') {
            this.projectVersions = null;
            return;
        }
        this.projectVersions = event.project_version.split(",");
        // --
        // Dates
        this.projectStartDate = new Date(event.start_date);
    };
    IncidentEditComponent.prototype.startDateChange = function () {
        this.editIncidentForm.patchValue({ end_date: this.editIncidentForm.value.start_date });
    };
    IncidentEditComponent.prototype.getIncidentById = function (incidentId) {
        var _this = this;
        this.incidentService.getById(incidentId)
            .subscribe(function (data) {
            _this.incident = data;
            _this.getCheckPermission(_this.incident);
            _this.getTeams();
        });
    };
    IncidentEditComponent.prototype.setCustomFields = function () {
        var arr = this.editIncidentForm.value.custom_field, obj = {}, iRow = 0, that = this;
        arr.forEach(function (item) {
            var key = Object.keys(item)[0];
            obj[key] = item[key];
            if (that.customFields[iRow++].field_type == "date") {
                obj[key] = that.datepipe.transform(item[key], 'yyyy-MM-dd');
            }
        });
        this.editIncidentForm.patchValue({ custom_fields: obj });
    };
    IncidentEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editIncidentForm.invalid) {
            return;
        }
        if (this.customFields.length > 0) {
            this.setCustomFields();
        }
        if (this.editIncidentForm.invalid) {
            return;
        }
        this.editIncidentForm.value.start_date = this.datepipe.transform(this.editIncidentForm.value.start_date, 'yyyy-MM-dd');
        this.editIncidentForm.value.end_date = this.datepipe.transform(this.editIncidentForm.value.end_date, 'yyyy-MM-dd');
        this.incidentService.update(this.editIncidentForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('incidents.messages.update'), _this.translate.instant('incidents.title'));
            _this.router.navigate(['incidents']);
        });
    };
    IncidentEditComponent = __decorate([
        Component({
            selector: 'app-incident-edit',
            templateUrl: './incident-edit.component.html',
            styleUrls: ['./incident-edit.component.scss'],
            preserveWhitespaces: true
        }),
        __metadata("design:paramtypes", [TranslateService,
            DatePipe,
            NgxRolesService,
            Router,
            ActivatedRoute,
            FormBuilder,
            ToastrService,
            TeamService,
            ProjectService,
            IncidentService,
            CustomFieldsService,
            AuthenticationService])
    ], IncidentEditComponent);
    return IncidentEditComponent;
}());
export { IncidentEditComponent };
//# sourceMappingURL=incident-edit.component.js.map