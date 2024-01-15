import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { DepartmentService } from '../../../../../core/services/department.service';
import { ClientService } from '../../../../../core/services/client.service';
import { HelperService } from '../../../../../core/services/helper.service';
import { TranslationService } from '../../../../../core/services/translation.service';
import { UserAvatars } from '../../../../../core/helpers/admin.helper';
import { environment } from '../../../../../../environments/environment';
import * as Dropzone from 'dropzone';
var ClientEditComponent = /** @class */ (function () {
    function ClientEditComponent(translate, route, router, formBuilder, toastr, departmentService, clientService, helperService, translationService) {
        this.translate = translate;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.departmentService = departmentService;
        this.clientService = clientService;
        this.helperService = helperService;
        this.translationService = translationService;
        this.apiUrl = environment.apiUrl;
        this.avatars = UserAvatars;
        this.isFormSubmitted = false;
        this.departmentsRoles = [];
        this.departmentsObj = [];
        this.isPageLoaded = false;
        this.isProfileLoaded = true;
    }
    ClientEditComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.route.paramMap.subscribe(function (params) {
            _this_1.getClientById(params.get('id'));
        });
        this.getCountries();
        this.getLanguages();
    };
    ClientEditComponent.prototype.loadForms = function () {
        this.editClientForm = this.formBuilder.group({
            id: [this.client.id],
            user_generated_id: [this.client.user_generated_id, Validators.required],
            username: [this.client.username, [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^\S*$/)]],
            firstname: [this.client.firstname, [Validators.required, Validators.maxLength(20)]],
            lastname: [this.client.lastname, [Validators.required, Validators.maxLength(20)]],
            email: [this.client.email, [Validators.required, Validators.email]],
            skype: [this.client.skype],
            country: [this.client.country],
            mobile: [this.client.mobile, Validators.pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
            language: [this.client.language],
            phone: [this.client.phone, Validators.pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
            avatar: [this.client.avatar],
            department_roles: [this.departmentsObj, Validators.required],
            clients: this.formBuilder.group({
                company_name: [this.client.clients.company_name],
                company_email: [this.client.clients.company_email, [Validators.email]],
                company_phone: [this.client.clients.company_phone, [Validators.pattern(/^(?:[+])?(\d[ -]?){1,15}$/)]],
                company_mobile: [this.client.clients.company_mobile, [Validators.pattern(/^(?:[+])?(\d[ -]?){1,15}$/)]],
                company_zipcode: [this.client.clients.company_zipcode],
                company_city: [this.client.clients.company_city],
                company_country: [this.client.clients.company_country],
                company_fax: [this.client.clients.company_fax],
                company_address: [this.client.clients.company_address],
                website: [this.client.clients.website, Validators.pattern(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/)],
                skype_id: [this.client.clients.skype_id],
                facebook: [this.client.clients.facebook],
                twitter: [this.client.clients.twitter],
                linkedin: [this.client.clients.linkedin],
                hosting_company: [this.client.clients.hosting_company],
                host_name: [this.client.clients.host_name],
                host_username: [this.client.clients.host_username],
                host_password: [this.client.clients.host_password],
                host_port: [this.client.clients.host_port]
            })
        });
        this.setAvatar(this.client.avatar);
        this.selectedDepartmentRoles = this.removeUnderscoreIds(this.departmentsObj);
        this.isPageLoaded = true;
    };
    Object.defineProperty(ClientEditComponent.prototype, "clientControl", {
        get: function () {
            return this.editClientForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    ClientEditComponent.prototype.loadDropzone = function () {
        var that = this;
        new Dropzone(this.profiledropzone.nativeElement, {
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
                            that.editClientForm.patchValue({ avatar: reader_1.result });
                            that.isProfileLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.editClientForm.patchValue({ avatar: null });
                    that.isProfileLoaded = false;
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    ClientEditComponent.prototype.removeDropzoneImage = function () {
        this.isProfileLoaded = false;
        this.editClientForm.patchValue({ avatar: null });
    };
    ClientEditComponent.prototype.setAvatar = function (avatar) {
        if (avatar === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = avatar;
        }
        this.editClientForm.patchValue({ avatar: this.selected });
    };
    ClientEditComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    ClientEditComponent.prototype.getClientById = function (id) {
        var _this_1 = this;
        this.clientService.getById(id)
            .subscribe(function (data) {
            _this_1.client = data;
            _this_1.getDepartments();
        });
    };
    ClientEditComponent.prototype.getDepartments = function () {
        var _this_1 = this;
        this.departmentService.getDepartmentsClientsRoles()
            .subscribe(function (data) {
            _this_1.getDepartmentsRoles(data);
        });
    };
    ClientEditComponent.prototype.getLanguages = function () {
        var _this_1 = this;
        this.translationService.getAllActiveTranslations()
            .subscribe(function (data) {
            _this_1.languages = data;
        });
    };
    ClientEditComponent.prototype.getCountries = function () {
        var _this_1 = this;
        this.helperService.getCountries()
            .subscribe(function (data) {
            _this_1.countries = data;
        });
    };
    ClientEditComponent.prototype.departmentRolesChange = function (event) {
        this.selectedDepartmentRoles = event;
    };
    ClientEditComponent.prototype.removeUnderscoreIds = function (ids) {
        var idsObj = [];
        for (var iRow in ids) {
            var splitIds = ids[iRow].split("_");
            idsObj.push({
                department_id: splitIds[0],
                role_id: splitIds[1],
            });
        }
        return idsObj;
    };
    ClientEditComponent.prototype.getDepartmentsRoles = function (departments) {
        var that = this;
        for (var iRow in departments) {
            for (var jRow in departments[iRow].roles) {
                this.departmentsRoles.push({
                    id: departments[iRow].id + '_' + departments[iRow].roles[jRow].id,
                    role_id: departments[iRow].roles[jRow].id,
                    name: departments[iRow].roles[jRow].name,
                    department_id: departments[iRow].id,
                    department_name: departments[iRow].name
                });
            }
        }
        for (var iRow in this.client.departments) {
            for (var jRow in this.client.departments[iRow].roles) {
                this.departmentsObj.push(this.client.departments[iRow].id + '_' + this.client.departments[iRow].roles[jRow].id);
            }
        }
        this.loadForms();
        setTimeout(function () {
            that.loadDropzone();
        });
    };
    ClientEditComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.editClientForm.invalid) {
            return;
        }
        // // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // this.router.navigate(['clients']);
        // return;
        this.editClientForm.value.department_roles = this.selectedDepartmentRoles;
        this.editClientForm.value.UserAvatars = this.avatars;
        this.clientService.update(this.editClientForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('clients.messages.update'), _this_1.translate.instant('clients.title'));
            _this_1.router.navigate(['clients']);
        });
    };
    __decorate([
        ViewChild('profiledropzone', { static: false }),
        __metadata("design:type", ElementRef)
    ], ClientEditComponent.prototype, "profiledropzone", void 0);
    ClientEditComponent = __decorate([
        Component({
            selector: 'app-client-edit',
            templateUrl: './client-edit.component.html',
            styleUrls: ['./client-edit.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ActivatedRoute,
            Router,
            FormBuilder,
            ToastrService,
            DepartmentService,
            ClientService,
            HelperService,
            TranslationService])
    ], ClientEditComponent);
    return ClientEditComponent;
}());
export { ClientEditComponent };
//# sourceMappingURL=client-edit.component.js.map