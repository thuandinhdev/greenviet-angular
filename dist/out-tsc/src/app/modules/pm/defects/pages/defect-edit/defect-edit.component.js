import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxRolesService } from 'ngx-permissions';
import { TranslateService } from '@ngx-translate/core';
import { TeamService } from '../../../../../core/services/team.service';
import { ProjectService } from '../../../../../core/services/project.service';
import { DefectService } from '../../../../../core/services/defect.service';
import { CustomFieldsService } from '../../../../../core/services/custom-fields.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { environment } from '../../../../../../environments/environment';
import * as Dropzone from 'dropzone';
var DefectEditComponent = /** @class */ (function () {
    function DefectEditComponent(translate, datepipe, ngxRolesService, router, route, formBuilder, toastr, defectService, projectService, customFieldsService, teamService, authenticationService) {
        var _this_1 = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.ngxRolesService = ngxRolesService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.defectService = defectService;
        this.projectService = projectService;
        this.customFieldsService = customFieldsService;
        this.teamService = teamService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isLogoUploaded = false;
        this.isLogoLoaded = true;
        this.clients = [];
        this.teams = [];
        this.teamsMembers = [];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.route.paramMap.subscribe(function (params) {
            _this_1.getDefectById(params.get('id'));
        });
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
    }
    DefectEditComponent.prototype.ngOnInit = function () {
    };
    DefectEditComponent.prototype.loadForms = function () {
        // --
        // Dates
        this.projectStartDate = new Date(this.defect.project.start_date);
        if (this.defect.start_date) {
            this.defect.start_date = new Date(this.defect.start_date);
        }
        this.editDefectForm = this.formBuilder.group({
            id: [this.defect.id],
            generated_id: [this.defect.generated_id, Validators.required],
            project_id: [this.defect.project_id, Validators.required],
            project_version: [this.defect.project_version],
            defect_name: [this.defect.defect_name, [Validators.required, Validators.maxLength(255)]],
            start_date: [this.defect.start_date],
            end_date: [this.defect.end_date],
            status: [this.defect.status, Validators.required],
            severity: [this.defect.severity, Validators.required],
            estimated_hours: [this.defect.estimated_hours, Validators.pattern(/^[0-9]+\:[0-5][0-9]$/)],
            assigned_group_id: [this.defect.assigned_group_id],
            assign_member: [this.defect.assign_member],
            defect_type: [this.defect.defect_type, Validators.required],
            file: [this.defect.file],
            file_extension: [this.defect.file_extension],
            attachment: [this.defect.attachment],
            description: [this.defect.description],
            custom_field: this.formBuilder.array([]),
            custom_fields: [null],
        });
        this.isPageLoaded = true;
        this.getCustomFieldByForm();
        if (!this.defect.file) {
            this.isLogoUploaded = true;
        }
    };
    Object.defineProperty(DefectEditComponent.prototype, "defectControl", {
        get: function () { return this.editDefectForm.controls; },
        enumerable: false,
        configurable: true
    });
    DefectEditComponent.prototype.loadDropzone = function () {
        var that = this;
        new Dropzone(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: '*',
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
                            that.editDefectForm.patchValue({ file: reader_1.result });
                            that.editDefectForm.patchValue({ attachment: file.name });
                            that.editDefectForm.patchValue({ file_extension: file.name.split('.').pop() });
                            that.isLogoLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.editDefectForm.patchValue({ file: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    DefectEditComponent.prototype.removeDropzoneImage = function () {
        this.isLogoUploaded = true;
        this.isLogoLoaded = false;
        this.editDefectForm.patchValue({ attachment_hash: null });
        this.editDefectForm.patchValue({ file: null });
        this.editDefectForm.patchValue({ attachment: null });
        this.editDefectForm.patchValue({ file_extension: null });
    };
    DefectEditComponent.prototype.getCheckPermission = function (defect) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        else if (defect.assign_member == this.loginUser.id || defect.create_user_id == this.loginUser.id) {
            return true;
        }
        else {
            this.router.navigate(['defects']);
        }
    };
    DefectEditComponent.prototype.getProjects = function () {
        var _this_1 = this;
        this.projectService.getMyProjects().subscribe(function (data) {
            _this_1.projects = data;
            var selectedProject = _this_1.projects.find(function (i) { return i.id == _this_1.defect.project_id; });
            _this_1.projectVersion = selectedProject.project_version.split(",");
        });
    };
    DefectEditComponent.prototype.getTeams = function () {
        var _this_1 = this;
        this.teamService.getAll().subscribe(function (data) {
            _this_1.teams = data;
            var selectedTeam = _this_1.teams.find(function (i) { return i.id == _this_1.defect.assigned_group_id; });
            _this_1.assignGroupChange(selectedTeam);
        });
    };
    DefectEditComponent.prototype.getDefectById = function (defectId) {
        var _this_1 = this;
        this.defectService.getById(defectId).subscribe(function (data) {
            _this_1.defect = data;
            _this_1.getCheckPermission(_this_1.defect);
            _this_1.getProjects();
            _this_1.loadForms();
            _this_1.getTeams();
            setTimeout(function () {
                _this_1.loadDropzone();
            });
        });
    };
    DefectEditComponent.prototype.getCustomFieldByForm = function () {
        var _this_1 = this;
        this.customFieldsService.getCustomFieldByForm(3).subscribe(function (data) {
            _this_1.customFields = data;
            if (_this_1.customFields.length > 0) {
                _this_1.addDynamicField(_this_1.customFields);
            }
        });
    };
    DefectEditComponent.prototype.addDynamicField = function (fieldList) {
        var _this_1 = this;
        fieldList.forEach(function (element) {
            var _a, _b;
            var control = _this_1.editDefectForm.controls.custom_field;
            var validators = null;
            if (element.is_required == 1) {
                validators = [Validators.required];
            }
            if (element.field_type == 'date' && _this_1.defect[element.field_column] != null) {
                control.push(_this_1.formBuilder.group((_a = {},
                    _a[element.field_column] = [new Date(_this_1.defect[element.field_column]), validators],
                    _a)));
            }
            else {
                control.push(_this_1.formBuilder.group((_b = {},
                    _b[element.field_column] = [_this_1.defect[element.field_column], validators],
                    _b)));
            }
        });
    };
    DefectEditComponent.prototype.assignGroupChange = function (event) {
        if (this.editDefectForm.value.assigned_group_id == undefined || this.editDefectForm.value.assigned_group_id == null || this.editDefectForm.value.assigned_group_id == '') {
            this.editDefectForm.patchValue({ assign_member: null });
            this.teamsMembers = null;
            return;
        }
        this.teamsMembers = event.members;
    };
    DefectEditComponent.prototype.projectChange = function (event) {
        this.editDefectForm.patchValue({ project_version: null });
        this.editDefectForm.patchValue({ start_date: null });
        this.editDefectForm.patchValue({ end_date: null });
        if (this.editDefectForm.value.project_id == undefined || this.editDefectForm.value.project_id == null || this.editDefectForm.value.project_id == '') {
            this.projectVersion = null;
            return;
        }
        this.projectVersion = event.project_version.split(",");
        // --
        // Dates
        this.projectStartDate = new Date(event.start_date);
    };
    DefectEditComponent.prototype.startDateChange = function () {
        this.editDefectForm.patchValue({ end_date: this.editDefectForm.value.start_date });
    };
    DefectEditComponent.prototype.setCustomField = function () {
        var arr = this.editDefectForm.value.custom_field, obj = {}, iRow = 0, that = this;
        arr.forEach(function (item) {
            var key = Object.keys(item)[0];
            obj[key] = item[key];
            if (that.customFields[iRow++].field_type == "date") {
                obj[key] = that.datepipe.transform(item[key], 'yyyy-MM-dd');
            }
        });
        this.editDefectForm.patchValue({ custom_fields: obj });
    };
    DefectEditComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.editDefectForm.invalid) {
            return;
        }
        if (this.customFields.length > 0) {
            this.setCustomField();
        }
        this.editDefectForm.value.start_date = this.datepipe.transform(this.editDefectForm.value.start_date, 'yyyy-MM-dd');
        this.editDefectForm.value.end_date = this.datepipe.transform(this.editDefectForm.value.end_date, 'yyyy-MM-dd');
        this.defectService.update(this.editDefectForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('defects.messages.update'), _this_1.translate.instant('defects.title'));
            _this_1.router.navigate(['defects']);
        });
    };
    __decorate([
        ViewChild('logodropzone', { static: false }),
        __metadata("design:type", ElementRef)
    ], DefectEditComponent.prototype, "logodropzone", void 0);
    DefectEditComponent = __decorate([
        Component({
            selector: 'app-defect-edit',
            templateUrl: './defect-edit.component.html',
            styleUrls: ['./defect-edit.component.scss'],
            preserveWhitespaces: true
        }),
        __metadata("design:paramtypes", [TranslateService,
            DatePipe,
            NgxRolesService,
            Router,
            ActivatedRoute,
            FormBuilder,
            ToastrService,
            DefectService,
            ProjectService,
            CustomFieldsService,
            TeamService,
            AuthenticationService])
    ], DefectEditComponent);
    return DefectEditComponent;
}());
export { DefectEditComponent };
//# sourceMappingURL=defect-edit.component.js.map