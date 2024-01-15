import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FileUploader } from 'ng2-file-upload';
import { Subject } from 'rxjs';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { FileBrowserService } from '../../../../core/services/file-browser.service';
import { environment } from '../../../../../environments/environment';
var UploadFilesModelComponent = /** @class */ (function () {
    function UploadFilesModelComponent(translate, bsCreateFileModalRef, toastr, fbService, authenticationService) {
        this.translate = translate;
        this.bsCreateFileModalRef = bsCreateFileModalRef;
        this.toastr = toastr;
        this.fbService = fbService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.attachmentsArr = [];
        this.loginToken = this.authenticationService.currentTokenValue;
    }
    UploadFilesModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader = new FileUploader({
            url: this.apiUrl + '/api/files/upload',
            authToken: this.loginToken.token_type + ' ' + this.loginToken.token,
            additionalParameter: { folder: this.current_folder },
            method: 'post',
            removeAfterUpload: false,
            autoUpload: true,
            isHTML5: true,
        });
        this.hasBaseDropZoneOver = false;
        this.onClose = new Subject();
        this.uploader.onBeforeUploadItem = function (item) {
            item.withCredentials = false;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var obj = JSON.parse(response);
            if (obj.success) {
                _this.attachmentsArr.push(obj.id);
                _this.toastr.success(_this.translate.instant('file_browser.messages.upload_file'), _this.translate.instant('file_browser.title'));
            }
        };
    };
    UploadFilesModelComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    UploadFilesModelComponent.prototype.uploaderRemove = function (id) {
        var _this = this;
        var index = this.attachmentsArr.indexOf(id);
        if (index > -1) {
            var dataObj = {
                id: id,
            };
            this.fbService.removeAttachments(dataObj).subscribe(function (data) {
                _this.toastr.success(_this.translate.instant('file_browser.messages.delete_file'), _this.translate.instant('file_browser.title'));
            });
            this.attachmentsArr.splice(index, 1);
        }
    };
    UploadFilesModelComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateFileModalRef.hide();
    };
    UploadFilesModelComponent = __decorate([
        Component({
            selector: 'app-upload-files-model',
            templateUrl: './upload-files-model.component.html',
            styleUrls: ['./upload-files-model.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            ToastrService,
            FileBrowserService,
            AuthenticationService])
    ], UploadFilesModelComponent);
    return UploadFilesModelComponent;
}());
export { UploadFilesModelComponent };
//# sourceMappingURL=upload-files-model.component.js.map