import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ProjectService } from '../../../../../core/services/project.service';
import { ClientService } from '../../../../../core/services/client.service';
import { TeamService } from '../../../../../core/services/team.service';
import { CustomFieldsService } from '../../../../../core/services/custom-fields.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { ProjectLogos } from '../../../../../core/helpers/pm-helper';
import { environment } from '../../../../../../environments/environment';
import * as Dropzone from 'dropzone';
var ProjectCreateComponent = /** @class */ (function () {
    function ProjectCreateComponent(translate, datepipe, router, formBuilder, toastr, projectService, clientService, teamService, customFieldsService, authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectService = projectService;
        this.clientService = clientService;
        this.teamService = teamService;
        this.customFieldsService = customFieldsService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.client_id = null;
        this.clients = [];
        this.teams = [];
        this.teamsMembers = [];
        this.teamsMembersId = [];
        this.teamsMemberIds = [];
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
    }
    ProjectCreateComponent.prototype.ngOnInit = function () {
        if (this.loginUser.is_client) {
            this.client_id = this.loginUser.id;
        }
        else {
            this.getClients();
        }
        this.getTeams();
        this.loadForms();
        this.getCustomFieldByForm();
    };
    ProjectCreateComponent.prototype.loadForms = function () {
        var that = this;
        this.createProjectForm = this.formBuilder.group({
            project_name: ['', [Validators.required, Validators.maxLength(255)]],
            project_version: ['1.0', [Validators.required, Validators.pattern(/^[0-9]{1,2}(?:\.[0-9]{1,2})?$/)]],
            client_id: [this.client_id],
            demo_url: ['', Validators.pattern(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/)],
            start_date: [new Date(), Validators.required],
            end_date: [new Date(), Validators.required],
            billing_type: [null],
            price_rate: ['', [Validators.minLength(0.1), Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]],
            status: [1, Validators.required],
            estimated_hours: ['', Validators.pattern(/^[0-9]+\:[0-5][0-9]$/)],
            assign_to: [null],
            assign_members: [null],
            progress: [0],
            project_hours: [false],
            project_logo: [''],
            description: [''],
            users: [],
            custom_field: this.formBuilder.array([]),
            custom_fields: [null]
        });
        // if (this.loginUser.is_client) {
        // 	this.createProjectForm.patchValue({ client_id: this.loginUser.id });
        // }
        setTimeout(function () {
            that.loadDropzone();
        });
    };
    ProjectCreateComponent.prototype.setLogos = function (project_logo) {
        if (project_logo === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = project_logo;
        }
        this.createProjectForm.patchValue({ project_logo: this.selected });
    };
    ProjectCreateComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    Object.defineProperty(ProjectCreateComponent.prototype, "projectControl", {
        get: function () { return this.createProjectForm.controls; },
        enumerable: false,
        configurable: true
    });
    ProjectCreateComponent.prototype.loadDropzone = function () {
        var that = this;
        new Dropzone(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = Dropzone.createElement("<button class=\'btn btn-sm btn-block\'>" + that.translate.instant('common.remove_file') + "</button>");
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
                            that.createProjectForm.patchValue({ project_logo: reader_1.result });
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.createProjectForm.patchValue({ project_logo: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    ProjectCreateComponent.prototype.loadCustomFields = function () {
        var arr = this.createProjectForm.value.custom_field;
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
        this.createProjectForm.patchValue({ custom_fields: obj });
    };
    ProjectCreateComponent.prototype.getCustomFieldByForm = function () {
        var _this_1 = this;
        this.customFieldsService.getCustomFieldByForm(1)
            .subscribe(function (data) {
            _this_1.customFields = data;
            if (_this_1.customFields.length > 0) {
                _this_1.addDynamicField(_this_1.customFields);
            }
        });
    };
    ProjectCreateComponent.prototype.addDynamicField = function (fieldList) {
        var _this_1 = this;
        fieldList.forEach(function (element) {
            var _a;
            var control = _this_1.createProjectForm.controls.custom_field;
            var validators = null;
            if (element.is_required == 1) {
                validators = [Validators.required];
            }
            control.push(_this_1.formBuilder.group((_a = {},
                _a[element.field_column] = [null, validators],
                _a)));
        });
    };
    ProjectCreateComponent.prototype.getClients = function () {
        var _this_1 = this;
        this.clientService.getAll()
            .subscribe(function (data) {
            _this_1.clients = data;
        });
    };
    ProjectCreateComponent.prototype.getTeams = function () {
        var _this_1 = this;
        this.teamService.getAll()
            .subscribe(function (data) {
            _this_1.teams = data;
        });
    };
    ProjectCreateComponent.prototype.startDateChange = function (event) {
        this.createProjectForm.patchValue({ end_date: event });
    };
    ProjectCreateComponent.prototype.assignGroupChange = function (event) {
        this.teamsMembers = null;
        this.teamsMemberIds = [];
        this.createProjectForm.patchValue({ assign_members: null });
        if (event) {
            this.teamsMembers = event.members;
            for (var i = 0; i < this.teamsMembers.length; i++) {
                this.teamsMembersId = this.teamsMembers[i].id;
                this.teamsMemberIds.push(this.teamsMembersId);
            }
        }
        this.createProjectForm.patchValue({ users: this.teamsMemberIds });
    };
    ProjectCreateComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.createProjectForm.invalid) {
            return;
        }
        if (this.customFields.length > 0) {
            this.loadCustomFields();
        }
        this.projectService.create(this.createProjectForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('projects.messages.create'), _this_1.translate.instant('projects.title'));
            _this_1.router.navigate(['projects']);
        });
    };
    __decorate([
        ViewChild('logodropzone', { static: false }),
        __metadata("design:type", ElementRef)
    ], ProjectCreateComponent.prototype, "logodropzone", void 0);
    ProjectCreateComponent = __decorate([
        Component({
            selector: 'app-project-create',
            templateUrl: './project-create.component.html',
            styleUrls: ['./project-create.component.scss'],
            preserveWhitespaces: true
        }),
        __metadata("design:paramtypes", [TranslateService,
            DatePipe,
            Router,
            FormBuilder,
            ToastrService,
            ProjectService,
            ClientService,
            TeamService,
            CustomFieldsService,
            AuthenticationService])
    ], ProjectCreateComponent);
    return ProjectCreateComponent;
}());
export { ProjectCreateComponent };
//# sourceMappingURL=project-create.component.js.map