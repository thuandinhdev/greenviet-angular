import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { TeamService } from '../../../../../core/services/team.service';
import { ProjectService } from '../../../../../core/services/project.service';
import { DefectService } from '../../../../../core/services/defect.service';
import { CustomFieldsService } from '../../../../../core/services/custom-fields.service';
import * as Dropzone from 'dropzone';
var DefectCreateComponent = /** @class */ (function () {
    function DefectCreateComponent(translate, datepipe, router, formBuilder, toastr, defectService, projectService, teamService, customFieldsService) {
        this.translate = translate;
        this.datepipe = datepipe;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.defectService = defectService;
        this.projectService = projectService;
        this.teamService = teamService;
        this.customFieldsService = customFieldsService;
        this.customFields = { length: 0 };
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.clients = [];
        this.teams = [];
        this.teamsMembers = [];
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    DefectCreateComponent.prototype.ngOnInit = function () {
        this.getTeams();
        this.loadForms();
        this.getProjects();
        this.getCustomFieldByForm();
    };
    DefectCreateComponent.prototype.loadForms = function () {
        var that = this;
        this.createDefectForm = this.formBuilder.group({
            generated_id: ['DEF0001', Validators.required],
            project_id: [null, Validators.required],
            project_version: [null],
            defect_name: ['', [Validators.required, Validators.maxLength(255)]],
            start_date: [null],
            end_date: [null],
            status: [1, Validators.required],
            severity: [2, Validators.required],
            estimated_hours: ['', Validators.pattern(/^[0-9]+\:[0-5][0-9]$/)],
            assigned_group_id: [null],
            assign_member: [null],
            defect_type: [1, Validators.required],
            file: [''],
            file_extension: [''],
            attachment: [''],
            description: [''],
            custom_field: this.formBuilder.array([]),
            custom_fields: [null],
        });
        this.isPageLoaded = true;
        this.getDefectGeneratedId();
        setTimeout(function () {
            that.loadDropzone();
        });
    };
    Object.defineProperty(DefectCreateComponent.prototype, "defectControl", {
        get: function () { return this.createDefectForm.controls; },
        enumerable: false,
        configurable: true
    });
    DefectCreateComponent.prototype.loadDropzone = function () {
        var that = this;
        new Dropzone(this.logoropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
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
                            that.createDefectForm.patchValue({ file: reader_1.result });
                            that.createDefectForm.patchValue({ attachment: file.name });
                            that.createDefectForm.patchValue({ file_extension: file.name.split('.').pop() });
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.createDefectForm.patchValue({ file: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    DefectCreateComponent.prototype.getProjects = function () {
        var _this_1 = this;
        this.projectService.getMyProjects().subscribe(function (data) {
            _this_1.projects = data;
        });
    };
    DefectCreateComponent.prototype.projectChange = function (event) {
        this.createDefectForm.patchValue({ project_version: null });
        this.createDefectForm.patchValue({ start_date: null });
        this.createDefectForm.patchValue({ end_date: null });
        if (this.createDefectForm.value.project_id == undefined || this.createDefectForm.value.project_id == null || this.createDefectForm.value.project_id == '') {
            this.projectVersion = null;
            return;
        }
        this.projectVersion = event.project_version.split(",");
        // --
        // Dates
        this.projectStartDate = new Date(event.start_date);
    };
    DefectCreateComponent.prototype.startDateChange = function (event) {
        this.createDefectForm.patchValue({ end_date: event });
    };
    DefectCreateComponent.prototype.getTeams = function () {
        var _this_1 = this;
        this.teamService.getAll().subscribe(function (data) {
            _this_1.teams = data;
        });
    };
    DefectCreateComponent.prototype.assignGroupChange = function (event) {
        if (this.createDefectForm.value.assigned_group_id == undefined || this.createDefectForm.value.assigned_group_id == null || this.createDefectForm.value.assigned_group_id == '') {
            this.createDefectForm.patchValue({ assign_member: null });
            this.teamsMembers = null;
            return;
        }
        this.teamsMembers = event.members;
    };
    DefectCreateComponent.prototype.getDefectGeneratedId = function () {
        var _this_1 = this;
        this.defectService.getDefectGeneratedId().subscribe(function (data) {
            _this_1.createDefectForm.patchValue({ generated_id: data });
        });
    };
    DefectCreateComponent.prototype.getCustomFieldByForm = function () {
        var _this_1 = this;
        this.customFieldsService.getCustomFieldByForm(3).subscribe(function (data) {
            _this_1.customFields = data;
            if (_this_1.customFields.length > 0) {
                _this_1.addDynamicField(_this_1.customFields);
            }
        });
    };
    DefectCreateComponent.prototype.addDynamicField = function (fieldList) {
        var _this_1 = this;
        fieldList.forEach(function (element) {
            var _a;
            var control = _this_1.createDefectForm.controls.custom_field;
            var validators = null;
            if (element.is_required == 1) {
                validators = [Validators.required];
            }
            control.push(_this_1.formBuilder.group((_a = {},
                _a[element.field_column] = [null, validators],
                _a)));
        });
    };
    DefectCreateComponent.prototype.setCustomFields = function () {
        var arr = this.createDefectForm.value.custom_field, obj = {}, iRow = 0, that = this;
        arr.forEach(function (item) {
            var key = Object.keys(item)[0];
            obj[key] = item[key];
            if (that.customFields[iRow++].field_type == "date") {
                obj[key] = that.datepipe.transform(item[key], 'yyyy-MM-dd');
            }
        });
        this.createDefectForm.patchValue({ custom_fields: obj });
    };
    DefectCreateComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.createDefectForm.invalid) {
            return;
        }
        if (this.customFields.length > 0) {
            this.setCustomFields();
        }
        this.defectService.create(this.createDefectForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('defects.messages.create'), _this_1.translate.instant('defects.title'));
            _this_1.router.navigate(['defects']);
        });
    };
    __decorate([
        ViewChild('logoropzone', { static: false }),
        __metadata("design:type", ElementRef)
    ], DefectCreateComponent.prototype, "logoropzone", void 0);
    DefectCreateComponent = __decorate([
        Component({
            selector: 'app-defect-create',
            templateUrl: './defect-create.component.html',
            styleUrls: ['./defect-create.component.scss'],
            preserveWhitespaces: true
        }),
        __metadata("design:paramtypes", [TranslateService,
            DatePipe,
            Router,
            FormBuilder,
            ToastrService,
            DefectService,
            ProjectService,
            TeamService,
            CustomFieldsService])
    ], DefectCreateComponent);
    return DefectCreateComponent;
}());
export { DefectCreateComponent };
//# sourceMappingURL=defect-create.component.js.map