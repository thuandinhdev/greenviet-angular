import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { NgxRolesService } from 'ngx-permissions';
import { ProjectService } from '../../../../../core/services/project.service';
import { ClientService } from '../../../../../core/services/client.service';
import { TeamService } from '../../../../../core/services/team.service';
import { CustomFieldsService } from '../../../../../core/services/custom-fields.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { ProjectLogos } from '../../../../../core/helpers/pm-helper';
import { environment } from '../../../../../../environments/environment';
import * as Dropzone from 'dropzone';
var ProjectEditComponent = /** @class */ (function () {
    function ProjectEditComponent(translate, toastr, datepipe, ngxRolesService, formBuilder, route, router, projectService, clientService, teamService, customFieldsService, authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.toastr = toastr;
        this.datepipe = datepipe;
        this.ngxRolesService = ngxRolesService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.projectService = projectService;
        this.clientService = clientService;
        this.teamService = teamService;
        this.customFieldsService = customFieldsService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.customFields = { length: 0 };
        this.permissions = [];
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isLogoLoaded = true;
        this.isButtonShow = false;
        this.clients = [];
        this.teams = [];
        this.teamsMembers = [];
        this.teamsMembersId = [];
        this.teamsMemberIds = [];
        this.assign_members = [];
        this.user = [];
        this.userIds = [];
        this.userId = [];
        this.logos = ProjectLogos;
        this.progressOptions = {
            floor: 0,
            ceil: 100
        };
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this_1.getCheckPermission(params);
        });
    }
    ProjectEditComponent.prototype.ngOnInit = function () { };
    ProjectEditComponent.prototype.getCheckPermission = function (params) {
        var _this_1 = this;
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            this.getProjectById(params.get('id'));
        }
        else {
            this.projectService.getProjectPermission(params.get('id')).subscribe(function (res) {
                _this_1.permissions = res;
                if (_this_1.permissions.edit) {
                    _this_1.getProjectById(params.get('id'));
                }
                else {
                    _this_1.router.navigate(['projects']);
                }
            }, function (error) {
                _this_1.router.navigate(['projects']);
            });
        }
    };
    ProjectEditComponent.prototype.loadProjectForms = function () {
        this.editProjectForm = this.formBuilder.group({
            id: [this.project.id],
            generated_id: [this.project.generated_id],
            project_name: [this.project.project_name, [Validators.required, Validators.maxLength(255)]],
            project_version: [this.project.project_version, [Validators.required, Validators.pattern(/^[0-9]{1,2}(?:\.[0-9]{1,2})?$/)]],
            client_id: [this.project.client_id],
            demo_url: [this.project.demo_url, Validators.pattern(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/)],
            start_date: [new Date(this.project.start_date), Validators.required],
            end_date: [new Date(this.project.end_date), Validators.required],
            billing_type: [this.project.billing_type],
            price_rate: [this.project.price_rate, [Validators.minLength(0.1), Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]],
            status: [this.project.status, Validators.required],
            estimated_hours: [this.project.estimated_hours, [Validators.pattern(/^[0-9]+\:[0-5][0-9]$/)]],
            assign_to: [this.project.assign_to],
            assign_members: [this.project.assign_members],
            progress: [this.project.progress],
            project_hours: [this.project.project_hours],
            project_logo: [this.project.project_logo],
            description: [this.project.description],
            users: [],
            custom_field: this.formBuilder.array([]),
            custom_fields: [null]
        });
        this.getCustomFieldByForm();
        this.setLogos(this.project.project_logo);
        this.isPageLoaded = true;
    };
    Object.defineProperty(ProjectEditComponent.prototype, "projectControl", {
        get: function () { return this.editProjectForm.controls; },
        enumerable: false,
        configurable: true
    });
    ProjectEditComponent.prototype.loadDropzone = function () {
        var that = this;
        new Dropzone(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var _this_1 = this;
                    var removeButton = Dropzone.createElement('<button class=\'btn btn-sm btn-block\'>Remove file</button>');
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        reader_1.onload = function (e) {
                            that.editProjectForm.patchValue({ project_logo: reader_1.result });
                            _this_1.isLogoLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.editProjectForm.patchValue({ project_logo: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    ProjectEditComponent.prototype.setLogos = function (project_logo) {
        if (project_logo === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = project_logo;
        }
        this.editProjectForm.patchValue({ project_logo: this.selected });
    };
    ProjectEditComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    ProjectEditComponent.prototype.getClients = function () {
        var _this_1 = this;
        this.clientService.getAll()
            .subscribe(function (data) {
            _this_1.clients = data;
        });
    };
    ProjectEditComponent.prototype.getTeams = function () {
        var _this_1 = this;
        this.teamService.getAll()
            .subscribe(function (data) {
            _this_1.teams = data;
            _this_1.getTeamMembers();
        });
    };
    ProjectEditComponent.prototype.getTeamMembers = function () {
        if (this.teams) {
            for (var iRow in this.teams) {
                if (this.teams[iRow].id == this.project.assign_to) {
                    this.teamsMembers = this.teams[iRow].members;
                    for (var i = 0; i < this.teamsMembers.length; i++) {
                        this.userIds.push({ "id": this.teamsMembers[i].id });
                    }
                    this.editProjectForm.patchValue({ users: this.userIds });
                }
            }
        }
    };
    ProjectEditComponent.prototype.getCustomFieldByForm = function () {
        var _this_1 = this;
        this.customFieldsService.getCustomFieldByForm(1)
            .subscribe(function (data) {
            _this_1.customFields = data;
            if (_this_1.customFields.length > 0) {
                _this_1.addDynamicField(_this_1.customFields);
            }
        });
    };
    ProjectEditComponent.prototype.addDynamicField = function (fieldList) {
        var _this_1 = this;
        fieldList.forEach(function (element) {
            var _a, _b;
            var control = _this_1.editProjectForm.controls.custom_field;
            var validators = null;
            if (element.is_required == 1) {
                validators = [Validators.required];
            }
            if (element.field_type == 'date' && _this_1.project[element.field_column] != null) {
                control.push(_this_1.formBuilder.group((_a = {},
                    _a[element.field_column] = [new Date(_this_1.project[element.field_column]), validators],
                    _a)));
            }
            else {
                control.push(_this_1.formBuilder.group((_b = {},
                    _b[element.field_column] = [_this_1.project[element.field_column], validators],
                    _b)));
            }
        });
    };
    ProjectEditComponent.prototype.getProjectById = function (projectId) {
        var _this_1 = this;
        this.projectService.getById(projectId).subscribe(function (data) {
            _this_1.project = data;
            var projectAllVersion = _this_1.project.project_version;
            var lastIndex = projectAllVersion.lastIndexOf(",");
            _this_1.oldVersion = projectAllVersion.substring(0, lastIndex);
            _this_1.currentVersion = projectAllVersion.substring(lastIndex + 1);
            _this_1.project.project_version = _this_1.currentVersion;
            _this_1.loadProjectForms();
            setTimeout(function () {
                _this_1.loadDropzone();
            });
            _this_1.getTeams();
            if (!_this_1.loginUser.is_client) {
                _this_1.getClients();
            }
        });
    };
    ProjectEditComponent.prototype.removeDropzoneImage = function () {
        this.isLogoLoaded = false;
        this.editProjectForm.patchValue({ project_logo: null });
    };
    ProjectEditComponent.prototype.startDateChange = function (event) {
        this.editProjectForm.patchValue({ end_date: this.editProjectForm.value.start_date });
    };
    ProjectEditComponent.prototype.assignGroupChange = function (event) {
        this.teamsMembers = null;
        this.teamsMemberIds = [];
        this.editProjectForm.patchValue({ assign_members: null });
        if (event) {
            this.teamsMembers = event.members;
            for (var i = 0; i < this.teamsMembers.length; i++) {
                this.teamsMembersId = this.teamsMembers[i].id;
                this.teamsMemberIds.push({ "id": this.teamsMembersId });
            }
        }
        this.editProjectForm.patchValue({ users: this.teamsMemberIds });
    };
    ProjectEditComponent.prototype.loadCustomFields = function () {
        var arr = this.editProjectForm.value.custom_field;
        var obj = {};
        var iRow = 0;
        var that = this;
        arr.forEach(function (item) {
            var key = Object.keys(item)[0];
            obj[key] = item[key];
            if (that.customFields[iRow++].field_type == "date") {
                obj[key] = that.datepipe.transform(item[key], 'yyyy-MM-dd');
            }
        });
        this.editProjectForm.patchValue({ custom_fields: obj });
    };
    ProjectEditComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.editProjectForm.invalid) {
            return;
        }
        if (this.customFields.length > 0) {
            this.loadCustomFields();
        }
        this.editProjectForm.value.ProjectLogos = this.logos;
        this.projectService.update(this.editProjectForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('projects.messages.update'), _this_1.translate.instant('projects.title'));
            _this_1.router.navigate(['projects']);
        });
    };
    __decorate([
        ViewChild('logodropzone', { static: false }),
        __metadata("design:type", ElementRef)
    ], ProjectEditComponent.prototype, "logodropzone", void 0);
    ProjectEditComponent = __decorate([
        Component({
            selector: 'app-project-edit',
            templateUrl: './project-edit.component.html',
            styleUrls: ['./project-edit.component.scss'],
            preserveWhitespaces: true
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            DatePipe,
            NgxRolesService,
            FormBuilder,
            ActivatedRoute,
            Router,
            ProjectService,
            ClientService,
            TeamService,
            CustomFieldsService,
            AuthenticationService])
    ], ProjectEditComponent);
    return ProjectEditComponent;
}());
export { ProjectEditComponent };
//# sourceMappingURL=project-edit.component.js.map