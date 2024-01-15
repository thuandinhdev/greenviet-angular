import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ProjectService } from '../../../../../core/services/project.service';
import { ClientService } from '../../../../../core/services/client.service';
import { TeamService } from '../../../../../core/services/team.service';
import { CustomFieldsService } from '../../../../../core/services/custom-fields.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { ProjectLogos } from '../../../../../core/helpers/pm-helper';
import { environment } from '../../../../../../environments/environment';
import * as Dropzone from 'dropzone';
var CreateProjectModalComponent = /** @class */ (function () {
    function CreateProjectModalComponent(translate, datepipe, bsCreateProjectModalRef, router, route, formBuilder, toastr, projectService, clientService, teamService, customFieldsService, authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.bsCreateProjectModalRef = bsCreateProjectModalRef;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectService = projectService;
        this.clientService = clientService;
        this.teamService = teamService;
        this.customFieldsService = customFieldsService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.event = new EventEmitter();
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.client_id = null;
        this.clients = [];
        this.teams = [];
        this.teamsMembers = [];
        this.teamMemberId = [];
        this.teamMemberIds = [];
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
    CreateProjectModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
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
    CreateProjectModalComponent.prototype.loadForms = function () {
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
            estimated_hours: ['', [Validators.pattern(/^[0-9]+\:[0-5][0-9]$/)]],
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
        setTimeout(function () {
            that.loadDropzone();
        });
    };
    CreateProjectModalComponent.prototype.setLogos = function (project_logo) {
        if (project_logo === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = project_logo;
        }
        this.createProjectForm.patchValue({ project_logo: this.selected });
    };
    CreateProjectModalComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    Object.defineProperty(CreateProjectModalComponent.prototype, "projectControl", {
        get: function () { return this.createProjectForm.controls; },
        enumerable: false,
        configurable: true
    });
    CreateProjectModalComponent.prototype.loadDropzone = function () {
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
    CreateProjectModalComponent.prototype.loadCustomFields = function () {
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
    CreateProjectModalComponent.prototype.getCustomFieldByForm = function () {
        var _this_1 = this;
        this.customFieldsService.getCustomFieldByForm(1)
            .subscribe(function (data) {
            _this_1.customFields = data;
            if (_this_1.customFields.length > 0) {
                _this_1.addDynamicField(_this_1.customFields);
            }
        });
    };
    CreateProjectModalComponent.prototype.addDynamicField = function (fieldList) {
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
    CreateProjectModalComponent.prototype.getClients = function () {
        var _this_1 = this;
        this.clientService.getAll()
            .subscribe(function (data) {
            _this_1.clients = data;
        });
    };
    CreateProjectModalComponent.prototype.getTeams = function () {
        var _this_1 = this;
        this.teamService.getAll()
            .subscribe(function (data) {
            _this_1.teams = data;
        });
    };
    CreateProjectModalComponent.prototype.startDateChange = function (event) {
        this.createProjectForm.patchValue({ end_date: event });
    };
    CreateProjectModalComponent.prototype.assignGroupChange = function (event) {
        this.teamsMembers = null;
        this.teamMemberIds = [];
        this.createProjectForm.patchValue({ assign_members: null });
        if (event) {
            this.teamsMembers = event.members;
            for (var i = 0; i < this.teamsMembers.length; i++) {
                this.teamMemberId = this.teamsMembers[i].id;
                this.teamMemberIds.push(this.teamMemberId);
            }
        }
        this.createProjectForm.patchValue({ users: this.teamMemberIds });
    };
    CreateProjectModalComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.createProjectForm.invalid) {
            return;
        }
        if (this.customFields.length > 0) {
            this.loadCustomFields();
        }
        this.projectService.create(this.createProjectForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('projects.messages.create'), _this_1.translate.instant('projects.title'));
            _this_1.event.emit({ data: data });
            _this_1.onCancel();
        });
    };
    CreateProjectModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateProjectModalRef.hide();
    };
    __decorate([
        ViewChild('logodropzone', { static: false }),
        __metadata("design:type", ElementRef)
    ], CreateProjectModalComponent.prototype, "logodropzone", void 0);
    CreateProjectModalComponent = __decorate([
        Component({
            selector: 'app-create-project-modal',
            templateUrl: './create-project-modal.component.html',
            styleUrls: ['./create-project-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            DatePipe,
            BsModalRef,
            Router,
            ActivatedRoute,
            FormBuilder,
            ToastrService,
            ProjectService,
            ClientService,
            TeamService,
            CustomFieldsService,
            AuthenticationService])
    ], CreateProjectModalComponent);
    return CreateProjectModalComponent;
}());
export { CreateProjectModalComponent };
//# sourceMappingURL=create-project-modal.component.js.map