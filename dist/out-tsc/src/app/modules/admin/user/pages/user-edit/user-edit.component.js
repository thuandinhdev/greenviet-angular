import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { NgxRolesService } from 'ngx-permissions';
import { UserService } from '../../../../../core/services/user.service';
import { DepartmentService } from '../../../../../core/services/department.service';
import { HelperService } from '../../../../../core/services/helper.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { TranslationService } from '../../../../../core/services/translation.service';
import { AssignUserComponent } from '../../components/assign-user/assign-user.component';
import { UserAvatars } from '../../../../../core/helpers/admin.helper';
import { environment } from '../../../../../../environments/environment';
import * as Dropzone from 'dropzone';
var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(translate, ngxRolesService, route, router, formBuilder, modalService, toastr, authenticationService, departmentService, userService, helperService, translationService) {
        var _this_1 = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.departmentService = departmentService;
        this.userService = userService;
        this.helperService = helperService;
        this.translationService = translationService;
        this.apiUrl = environment.apiUrl;
        this.users = [];
        this.avatars = UserAvatars;
        this.isFormSubmitted = false;
        this.isPermissionRequired = false;
        this.departmentsRoles = [];
        this.departmentsObj = [];
        this.isPageLoaded = false;
        this.isProfileLoaded = true;
        this.isButtonShow = false;
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this_1.getUserById(params.get('id'));
        });
    }
    UserEditComponent.prototype.ngOnInit = function () {
        this.getCountries();
        this.getLanguages();
        this.getUsers();
    };
    UserEditComponent.prototype.checkUserHavePermission = function (user) {
        var roleName = this.ngxRolesService.getRole('admin'), isEditable = false;
        if (roleName && roleName.name == 'admin' || this.loginUser.is_super_admin) {
            isEditable = true;
        }
        else if (!user.permission) {
            isEditable = false;
        }
        else {
            if (user.permission == 'all') {
                for (var iRow in this.assignUserPermissions) {
                    if (this.assignUserPermissions[iRow].id == this.loginUser.id) {
                        isEditable = true;
                    }
                }
            }
            else {
                if (typeof user.permission == "string") {
                    var loginUserPermissions = JSON.parse(user.permission);
                    if (loginUserPermissions[this.loginUser.id]) {
                        for (var iRow in loginUserPermissions[this.loginUser.id]) {
                            if (loginUserPermissions[this.loginUser.id][iRow] == "edit") {
                                isEditable = true;
                            }
                        }
                    }
                }
                else {
                    isEditable = false;
                }
            }
        }
        if (!isEditable) {
            this.router.navigate(['users']);
        }
    };
    UserEditComponent.prototype.getAssignUserPermissions = function () {
        var _this_1 = this;
        this.userService.getUserPermissions()
            .subscribe(function (data) {
            _this_1.assignUserPermissions = data;
            _this_1.checkUserHavePermission(_this_1.user);
        });
    };
    UserEditComponent.prototype.getUserById = function (userId) {
        var _this_1 = this;
        this.userService.getById(userId)
            .subscribe(function (data) {
            _this_1.user = data;
            _this_1.getAssignUserPermissions();
            _this_1.getDepartments();
        });
    };
    UserEditComponent.prototype.getDepartments = function () {
        var _this_1 = this;
        this.departmentService.getAll()
            .subscribe(function (data) {
            _this_1.getDepartmentsRoles(data);
        });
    };
    UserEditComponent.prototype.getLanguages = function () {
        var _this_1 = this;
        this.translationService.getAllActiveTranslations()
            .subscribe(function (data) {
            _this_1.languages = data;
        });
    };
    UserEditComponent.prototype.getUsers = function () {
        var _this_1 = this;
        this.userService.getAll().subscribe(function (data) {
            _this_1.users = data;
        });
    };
    UserEditComponent.prototype.getCountries = function () {
        var _this_1 = this;
        this.helperService.getCountries()
            .subscribe(function (data) {
            _this_1.countries = data;
        });
    };
    UserEditComponent.prototype.getDepartmentsRoles = function (departments) {
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
        for (var iRow in this.user.departments) {
            for (var jRow in this.user.departments[iRow].roles) {
                this.departmentsObj.push(this.user.departments[iRow].id + '_' + this.user.departments[iRow].roles[jRow].id);
            }
        }
        this.loadUserForm();
        setTimeout(function () {
            that.loadDropzone();
        });
    };
    UserEditComponent.prototype.loadUserForm = function () {
        this.editUserForm = this.formBuilder.group({
            id: [this.user.id],
            user_generated_id: [this.user.user_generated_id, Validators.required],
            emp_id: [this.user.emp_id, Validators.required],
            username: [this.user.username, [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^\S*$/)]],
            firstname: [this.user.firstname, [Validators.required, Validators.maxLength(20)]],
            lastname: [this.user.lastname, [Validators.required, Validators.maxLength(20)]],
            email: [this.user.email, [Validators.required, Validators.email]],
            skype: [this.user.skype],
            country: [this.user.country],
            mobile: [this.user.mobile, Validators.pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
            language: [this.user.language],
            primary_manager: [this.user.primary_manager],
            secondary_manager: [this.user.secondary_manager],
            phone: [this.user.phone, Validators.pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
            is_super_admin: [this.user.is_super_admin],
            avatar: [this.user.avatar],
            assign_permission: ['all'],
            department_roles: [this.departmentsObj, Validators.required],
            permission: ['']
        });
        if (this.user.permission !== 'all') {
            this.isButtonShow = true;
            this.editUserForm.patchValue({ assign_permission: 'cutomize' });
            this.user.permission = JSON.parse(this.user.permission);
            this.editUserForm.patchValue({ permission: this.user.permission });
        }
        this.setAvatar(this.user.avatar);
        this.selectedDepartmentRoles = this.removeUnderscoreIds(this.departmentsObj);
        this.isPageLoaded = true;
    };
    Object.defineProperty(UserEditComponent.prototype, "userControl", {
        get: function () { return this.editUserForm.controls; },
        enumerable: false,
        configurable: true
    });
    UserEditComponent.prototype.openAssignUserModal = function ($event) {
        var _this_1 = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                assignPermissions: this.user.permission
            }
        };
        this.modalRef = this.modalService.show(AssignUserComponent, modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this_1.editUserForm.patchValue({ permission: data.permissions });
        });
        return false;
    };
    UserEditComponent.prototype.loadDropzone = function () {
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
                            that.editUserForm.patchValue({ avatar: reader_1.result });
                            that.isProfileLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.editUserForm.patchValue({ avatar: null });
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
    UserEditComponent.prototype.removeDropzoneImage = function () {
        this.isProfileLoaded = false;
        this.editUserForm.patchValue({ avatar: null });
    };
    UserEditComponent.prototype.setAvatar = function (avatar) {
        if (avatar === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = avatar;
        }
        this.editUserForm.patchValue({ avatar: this.selected });
    };
    UserEditComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    UserEditComponent.prototype.changePermission = function (event) {
        this.isPermissionRequired = false;
        if (event.target.value == 'cutomize') {
            this.user.permission = [];
        }
    };
    UserEditComponent.prototype.departmentRolesChange = function (event) {
        this.selectedDepartmentRoles = event;
    };
    UserEditComponent.prototype.removeUnderscoreIds = function (ids) {
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
    UserEditComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.editUserForm.invalid) {
            return;
        }
        if (this.userControl.assign_permission.value == "cutomize" && this.editUserForm.value.permission.length == 0) {
            this.isPermissionRequired = true;
            return false;
        }
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // this.router.navigate(['users']);
        // return;
        this.editUserForm.value.department_roles = this.selectedDepartmentRoles;
        this.editUserForm.value.UserAvatars = this.avatars;
        this.userService.update(this.editUserForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('users.messages.update'), _this_1.translate.instant('users.title'));
            _this_1.router.navigate(['users']);
        });
    };
    __decorate([
        ViewChild('pdfDropzone', { static: false }),
        __metadata("design:type", ElementRef)
    ], UserEditComponent.prototype, "pdfDropzone", void 0);
    UserEditComponent = __decorate([
        Component({
            selector: 'app-user-edit',
            templateUrl: './user-edit.component.html',
            styleUrls: ['./user-edit.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            NgxRolesService,
            ActivatedRoute,
            Router,
            FormBuilder,
            BsModalService,
            ToastrService,
            AuthenticationService,
            DepartmentService,
            UserService,
            HelperService,
            TranslationService])
    ], UserEditComponent);
    return UserEditComponent;
}());
export { UserEditComponent };
//# sourceMappingURL=user-edit.component.js.map