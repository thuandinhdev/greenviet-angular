import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { DepartmentService } from '../../../../../core/services/department.service';
import { UserService } from '../../../../../core/services/user.service';
import { ClientService } from '../../../../../core/services/client.service';
import { HelperService } from '../../../../../core/services/helper.service';
import { TranslationService } from '../../../../../core/services/translation.service';
import { MustMatch } from './../../../../../core/helpers/must-match.validator';
import { UserAvatars } from '../../../../../core/helpers/admin.helper';
import { environment } from '../../../../../../environments/environment';
import * as Dropzone from 'dropzone';
var ClientCreateComponent = /** @class */ (function () {
    function ClientCreateComponent(translate, router, formBuilder, toastr, departmentService, userService, clientService, helperService, translationService) {
        this.translate = translate;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.departmentService = departmentService;
        this.userService = userService;
        this.clientService = clientService;
        this.helperService = helperService;
        this.translationService = translationService;
        this.apiUrl = environment.apiUrl;
        this.avatars = UserAvatars;
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
    }
    ClientCreateComponent.prototype.ngOnInit = function () {
        this.getDepartments();
        this.getCountries();
        this.getLanguages();
    };
    ClientCreateComponent.prototype.loadForms = function () {
        var that = this;
        this.createClientForm = this.formBuilder.group({
            user_generated_id: ['USR0001', Validators.required],
            username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^\S*$/)]],
            firstname: ['', [Validators.required, Validators.maxLength(20)]],
            lastname: ['', [Validators.required, Validators.maxLength(20)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            password_confirmation: ['', Validators.required],
            skype: [''],
            country: [null],
            mobile: ['', Validators.pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
            language: ['en'],
            phone: ['', Validators.pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
            avatar: [null],
            department_roles: ['', Validators.required],
            clients: this.formBuilder.group({
                company_name: [''],
                company_email: ['', [Validators.email]],
                company_phone: ['', Validators.pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
                company_mobile: ['', [Validators.pattern(/^(?:[+])?(\d[ -]?){1,15}$/)]],
                company_zipcode: [''],
                company_city: [''],
                company_country: [null],
                company_fax: [''],
                company_address: [''],
                website: ['', Validators.pattern(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/)],
                skype_id: [''],
                facebook: [''],
                twitter: [''],
                linkedin: [''],
                hosting_company: [''],
                host_name: [''],
                host_username: [''],
                host_password: [''],
                host_port: ['']
            })
        }, {
            validator: MustMatch('password', 'password_confirmation')
        });
        this.getUserGeneratedId();
        this.isPageLoaded = true;
        setTimeout(function () {
            that.loadDropzone();
        });
    };
    Object.defineProperty(ClientCreateComponent.prototype, "clientControl", {
        get: function () {
            return this.createClientForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    ClientCreateComponent.prototype.loadDropzone = function () {
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
                            that.createClientForm.patchValue({ avatar: reader_1.result });
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.createClientForm.patchValue({ avatar: '' });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    ClientCreateComponent.prototype.setAvatar = function (avatar) {
        if (avatar === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = avatar;
        }
        this.createClientForm.patchValue({ avatar: this.selected });
    };
    ClientCreateComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    ClientCreateComponent.prototype.departmentRolesChange = function (event) {
        this.selectedDepartmentRoles = event;
    };
    ClientCreateComponent.prototype.getDepartments = function () {
        var _this_1 = this;
        this.departmentService.getDepartmentsClientsRoles()
            .subscribe(function (data) {
            _this_1.departmentsRoles = data;
            _this_1.loadForms();
        });
    };
    ClientCreateComponent.prototype.getLanguages = function () {
        var _this_1 = this;
        this.translationService.getAllActiveTranslations()
            .subscribe(function (data) {
            _this_1.languages = data;
        });
    };
    ClientCreateComponent.prototype.getCountries = function () {
        var _this_1 = this;
        this.helperService.getCountries()
            .subscribe(function (data) {
            _this_1.countries = data;
        });
    };
    ClientCreateComponent.prototype.getUserGeneratedId = function () {
        var _this_1 = this;
        this.userService.getUserGeneratedId().subscribe(function (data) {
            _this_1.createClientForm.patchValue({ user_generated_id: data });
        });
    };
    ClientCreateComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.createClientForm.value.department_roles = [];
        this.isFormSubmitted = true;
        if (this.createClientForm.invalid) {
            return;
        }
        if (this.selectedDepartmentRoles) {
            for (var iRow in this.selectedDepartmentRoles) {
                if (this.selectedDepartmentRoles[iRow].pivot) {
                    this.createClientForm.value.department_roles.push(this.selectedDepartmentRoles[iRow].pivot);
                }
            }
        }
        this.clientService.create(this.createClientForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('clients.messages.create'), _this_1.translate.instant('clients.title'));
            _this_1.router.navigate(['clients']);
        });
    };
    __decorate([
        ViewChild('profiledropzone', { static: false }),
        __metadata("design:type", ElementRef)
    ], ClientCreateComponent.prototype, "profiledropzone", void 0);
    ClientCreateComponent = __decorate([
        Component({
            selector: 'app-client-create',
            templateUrl: './client-create.component.html',
            styleUrls: ['./client-create.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            Router,
            FormBuilder,
            ToastrService,
            DepartmentService,
            UserService,
            ClientService,
            HelperService,
            TranslationService])
    ], ClientCreateComponent);
    return ClientCreateComponent;
}());
export { ClientCreateComponent };
//# sourceMappingURL=client-create.component.js.map