import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { FileBrowserService } from '../../../../core/services/file-browser.service';
var EditFolderModalComponent = /** @class */ (function () {
    function EditFolderModalComponent(translate, bsEditFolderModalRef, formBuilder, fbService, toastr) {
        this.translate = translate;
        this.bsEditFolderModalRef = bsEditFolderModalRef;
        this.formBuilder = formBuilder;
        this.fbService = fbService;
        this.toastr = toastr;
        this.isSubmitted = false;
    }
    EditFolderModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForm();
    };
    EditFolderModalComponent.prototype.loadForm = function () {
        this.editFolderForm = this.formBuilder.group({
            id: [this.folder.id],
            folder_name: [this.folder.folder_name, Validators.required],
            folder_desc: [this.folder.folder_desc]
        });
    };
    Object.defineProperty(EditFolderModalComponent.prototype, "folderControl", {
        get: function () { return this.editFolderForm.controls; },
        enumerable: false,
        configurable: true
    });
    EditFolderModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.editFolderForm.invalid) {
            return;
        }
        this.fbService.updateFolder(this.editFolderForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('file_browser.messages.update_folder'), _this.translate.instant('file_browser.title'));
            _this.onCancel();
        });
    };
    EditFolderModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditFolderModalRef.hide();
    };
    EditFolderModalComponent = __decorate([
        Component({
            selector: 'app-edit-folder-modal',
            templateUrl: './edit-folder-modal.component.html',
            styleUrls: ['./edit-folder-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            FileBrowserService,
            ToastrService])
    ], EditFolderModalComponent);
    return EditFolderModalComponent;
}());
export { EditFolderModalComponent };
//# sourceMappingURL=edit-folder-modal.component.js.map