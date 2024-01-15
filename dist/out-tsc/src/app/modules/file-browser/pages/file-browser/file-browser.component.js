import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
;
import { ToastrService } from 'ngx-toastr';
import { FileSaverService } from 'ngx-filesaver';
import Swal from 'sweetalert2';
import { FileBrowserService } from '../../../../core/services/file-browser.service';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { UploadFilesModelComponent } from '../../components/upload-files-model/upload-files-model.component';
import { EditFileModalComponent } from '../../components/edit-file-modal/edit-file-modal.component';
import { CreateFolderModelComponent } from '../../components/create-folder-model/create-folder-model.component';
import { EditFolderModalComponent } from '../../components/edit-folder-modal/edit-folder-modal.component';
import { environment } from '../../../../../environments/environment';
var FileBrowserComponent = /** @class */ (function () {
    function FileBrowserComponent(translate, modalService, toastr, fbService, _http, _FileSaverService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.modalService = modalService;
        this.toastr = toastr;
        this.fbService = fbService;
        this._http = _http;
        this._FileSaverService = _FileSaverService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.current_folder = 0;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    FileBrowserComponent.prototype.ngOnInit = function () {
        this.getFolderBreadcrumb();
        this.getFolders();
        this.getFiles();
    };
    FileBrowserComponent.prototype.getFileFolders = function (id) {
        this.current_folder = id;
        this.getFolderBreadcrumb();
        this.getFolders();
        this.getFiles();
    };
    FileBrowserComponent.prototype.getFolderBreadcrumb = function () {
        var _this = this;
        var reqObj = { folder: this.current_folder };
        this.fbService.getFolderBreadcrumb(reqObj).subscribe(function (resp) {
            _this.breadcrumbs = resp;
        });
    };
    FileBrowserComponent.prototype.getFolders = function () {
        var _this = this;
        var reqObj = { folder: this.current_folder };
        this.fbService.getFolders(reqObj).subscribe(function (resp) {
            _this.folders = resp;
        });
    };
    FileBrowserComponent.prototype.isEmptyObject = function (obj) {
        return (obj && (Object.keys(obj).length === 0));
    };
    FileBrowserComponent.prototype.getFiles = function () {
        var _this = this;
        var reqObj = { folder: this.current_folder };
        this.fbService.getFiles(reqObj).subscribe(function (resp) {
            _this.files = resp;
            if (_this.files) {
                // --
                // Render files based on file type
                for (var iRow in _this.files) {
                    switch (_this.files[iRow].file_extension) {
                        case 'txt':
                            _this.files[iRow].icon = 'fa fa-file-text';
                            break;
                        case 'mp3':
                        case 'wav':
                        case 'raw':
                        case 'tta':
                            _this.files[iRow].icon = 'fa fa-music';
                            break;
                        case 'webm':
                        case 'flv':
                        case 'ogg':
                        case 'mov':
                        case 'mp4':
                        case 'm4p':
                        case 'mpeg':
                        case 'f4v':
                        case '3gp':
                            _this.files[iRow].icon = 'fa fa-film';
                            break;
                        case 'pdf':
                            _this.files[iRow].icon = 'fa fa-file-pdf-o';
                            break;
                        case 'jpeg':
                        case 'jpg':
                        case 'png':
                        case 'gif':
                        case 'bmp':
                        case 'svg':
                            _this.files[iRow].isImageFile = true;
                            break;
                        default:
                            _this.files[iRow].isImageFile = false;
                            _this.files[iRow].icon = 'fa fa-file';
                            break;
                    }
                }
            }
        });
    };
    FileBrowserComponent.prototype.getParentFolderId = function () {
        var _this = this;
        this.fbService.getById(this.current_folder).subscribe(function (resp) {
            _this.current_folder = resp;
            _this.getFileFolders(_this.current_folder);
        });
    };
    FileBrowserComponent.prototype.uploadFileModal = function () {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                current_folder: this.current_folder
            }
        };
        this.modalRef = this.modalService.show(UploadFilesModelComponent, modalConfig);
        this.modalRef.content.onClose.subscribe(function (result) {
            _this.getFileFolders(_this.current_folder);
        });
    };
    FileBrowserComponent.prototype.opneFileEditModal = function (file) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                file: file
            }
        };
        this.modalRef = this.modalService.show(EditFileModalComponent, modalConfig);
        this.modalRef.content.onClose.subscribe(function (result) {
            _this.getFileFolders(_this.current_folder);
        });
    };
    FileBrowserComponent.prototype.openFolderCreateModal = function () {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                current_folder: this.current_folder
            }
        };
        this.modalRef = this.modalService.show(CreateFolderModelComponent, modalConfig);
        this.modalRef.content.onClose.subscribe(function (result) {
            _this.getFileFolders(_this.current_folder);
        });
    };
    FileBrowserComponent.prototype.openFolderEditModal = function (folder) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                folder: folder
            }
        };
        this.modalRef = this.modalService.show(EditFolderModalComponent, modalConfig);
        this.modalRef.content.onClose.subscribe(function (result) {
            _this.getFileFolders(_this.current_folder);
        });
    };
    FileBrowserComponent.prototype.deleteFolder = function (id) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('file_browser.title6'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.fbService.deleteFolder(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('file_browser.messages.delete_folder'), _this.translate.instant('file_browser.title'));
                    _this.getFileFolders(_this.current_folder);
                });
            }
        });
    };
    FileBrowserComponent.prototype.deleteFile = function (id) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('file_browser.title5'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.fbService.deleteFile(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('file_browser.messages.delete_file'), _this.translate.instant('file_browser.title'));
                    _this.getFileFolders(_this.current_folder);
                });
            }
        });
    };
    FileBrowserComponent = __decorate([
        Component({
            selector: 'app-file-browser',
            templateUrl: './file-browser.component.html',
            styleUrls: ['./file-browser.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalService,
            ToastrService,
            FileBrowserService,
            HttpClient,
            FileSaverService,
            AuthenticationService])
    ], FileBrowserComponent);
    return FileBrowserComponent;
}());
export { FileBrowserComponent };
//# sourceMappingURL=file-browser.component.js.map