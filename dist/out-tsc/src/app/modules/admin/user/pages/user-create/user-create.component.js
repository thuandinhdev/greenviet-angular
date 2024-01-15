import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TranslateService } from '@ngx-translate/core';
import { DepartmentService } from '../../../../../core/services/department.service';
import { UserService } from '../../../../../core/services/user.service';
import { HelperService } from '../../../../../core/services/helper.service';
import { TranslationService } from '../../../../../core/services/translation.service';
import { AssignUserComponent } from '../../components/assign-user/assign-user.component';
import { MustMatch } from './../../../../../core/helpers/must-match.validator';
import * as Dropzone from 'dropzone';
import { RegExpEnum } from '../../../../../core/helpers/app.helper';
import { UserAvatars } from '../../../../../core/helpers/admin.helper';
import { environment } from '../../../../../../environments/environment';
var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(translate, router, formBuilder, modalService, toastr, departmentService, userService, helperService, translationService) {
        this.translate = translate;
        this.router = router;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.toastr = toastr;
        this.departmentService = departmentService;
        this.userService = userService;
        this.helperService = helperService;
        this.translationService = translationService;
        this.apiUrl = environment.apiUrl;
        this.users = [];
        this.avatars = UserAvatars;
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isPermissionRequired = false;
        this.isProfileLoaded = true;
        this.isProfileUploded = false;
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn"
        };
    }
    UserCreateComponent.prototype.ngOnInit = function () {
        this.getDepartments();
        this.getCountries();
        this.getLanguages();
        this.getUserGeneratedId();
        this.getUsers();
        this.loadForms();
    };
    UserCreateComponent.prototype.loadForms = function () {
        var that = this;
        this.createUserForm = this.formBuilder.group({
            user_generated_id: ['USR0001', Validators.required],
            emp_id: ['', Validators.required],
            username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^\S*$/)]],
            firstname: ['', [Validators.required, Validators.maxLength(20)]],
            lastname: ['', [Validators.required, Validators.maxLength(20)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            password_confirmation: ['', Validators.required],
            skype: [''],
            country: [null],
            mobile: ['', Validators.pattern(RegExpEnum.phone_regular_expression)],
            language: ['en'],
            primary_manager: [null],
            secondary_manager: [null],
            phone: ['', Validators.pattern(RegExpEnum.phone_regular_expression)],
            is_super_admin: [false],
            avatar: [null],
            assign_permission: ['all'],
            department_roles: ['', Validators.required],
            permission: ['']
        }, {
            validator: MustMatch('password', 'password_confirmation')
        });
        this.isPageLoaded = true;
        setTimeout(function () {
            that.loadDropzone();
        });
    };
    Object.defineProperty(UserCreateComponent.prototype, "userControl", {
        get: function () { return this.createUserForm.controls; },
        enumerable: false,
        configurable: true
    });
    UserCreateComponent.prototype.loadDropzone = function () {
        var that = this;
        new Dropzone(this.pdfDropzone.nativeElement, {
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
                            that.createUserForm.patchValue({ avatar: reader_1.result });
                            that.isProfileLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.createUserForm.patchValue({ avatar: null });
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
    UserCreateComponent.prototype.removeDropzoneImage = function () {
        this.isProfileUploded = true;
        this.isProfileLoaded = false;
        this.createUserForm.patchValue({ avatar: null });
    };
    UserCreateComponent.prototype.setAvatar = function (avatar) {
        if (avatar === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = avatar;
        }
        this.createUserForm.patchValue({ avatar: this.selected });
    };
    UserCreateComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    UserCreateComponent.prototype.getDepartments = function () {
        var _this_1 = this;
        this.departmentService.getAll()
            .subscribe(function (data) {
            _this_1.departmentsRoles = data;
        });
    };
    UserCreateComponent.prototype.getLanguages = function () {
        var _this_1 = this;
        this.translationService.getAllActiveTranslations()
            .subscribe(function (data) {
            _this_1.languages = data;
        });
    };
    UserCreateComponent.prototype.getCountries = function () {
        var _this_1 = this;
        this.helperService.getCountries()
            .subscribe(function (data) {
            _this_1.countries = data;
        });
    };
    UserCreateComponent.prototype.getUserGeneratedId = function () {
        var _this_1 = this;
        this.userService.getUserGeneratedId().subscribe(function (data) {
            _this_1.createUserForm.patchValue({ user_generated_id: data });
        });
    };
    UserCreateComponent.prototype.getUsers = function () {
        var _this_1 = this;
        this.userService.getAll().subscribe(function (data) {
            _this_1.users = data;
        });
    };
    UserCreateComponent.prototype.departmentRolesChange = function (event) {
        this.selectedDepartmentRoles = event;
    };
    UserCreateComponent.prototype.changePermission = function (event) {
        var _this_1 = this;
        this.isPermissionRequired = false;
        if (event.target.value == 'cutomize') {
            this.modalRef = this.modalService.show(AssignUserComponent, this.modalConfigs);
            this.modalRef.content.event.subscribe(function (data) {
                _this_1.createUserForm.patchValue({ permission: data.permissions });
            });
        }
    };
    UserCreateComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.createUserForm.value.department_roles = [];
        this.isFormSubmitted = true;
        if (this.userControl.assign_permission.value == "cutomize" && this.createUserForm.value.permission.length == 0) {
            this.isPermissionRequired = true;
            return false;
        }
        if (this.createUserForm.invalid) {
            return;
        }
        if (this.selectedDepartmentRoles) {
            for (var iRow in this.selectedDepartmentRoles) {
                if (this.selectedDepartmentRoles[iRow].pivot) {
                    this.createUserForm.value.department_roles.push(this.selectedDepartmentRoles[iRow].pivot);
                }
            }
        }
        this.userService.create(this.createUserForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('users.messages.create'), _this_1.translate.instant('users.title'));
            _this_1.router.navigate(['users']);
        });
    };
    __decorate([
        ViewChild('pdfDropzone', { static: false }),
        __metadata("design:type", ElementRef)
    ], UserCreateComponent.prototype, "pdfDropzone", void 0);
    UserCreateComponent = __decorate([
        Component({
            selector: 'app-user-create',
            templateUrl: './user-create.component.html',
            styleUrls: ['./user-create.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            Router,
            FormBuilder,
            BsModalService,
            ToastrService,
            DepartmentService,
            UserService,
            HelperService,
            TranslationService])
    ], UserCreateComponent);
    return UserCreateComponent;
}());
export { UserCreateComponent };
//# sourceMappingURL=user-create.component.js.map