import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { FileBrowserService } from '../../../../core/services/file-browser.service';
var CreateFolderModelComponent = /** @class */ (function () {
    function CreateFolderModelComponent(translate, bsCreateFolderModalRef, formBuilder, fbService, toastr) {
        this.translate = translate;
        this.bsCreateFolderModalRef = bsCreateFolderModalRef;
        this.formBuilder = formBuilder;
        this.fbService = fbService;
        this.toastr = toastr;
        this.isSubmitted = false;
    }
    CreateFolderModelComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForm();
    };
    CreateFolderModelComponent.prototype.loadForm = function () {
        this.createFolderForm = this.formBuilder.group({
            parent_folder: [this.current_folder, Validators.required],
            folder_name: ['', Validators.required],
            folder_desc: ['']
        });
    };
    Object.defineProperty(CreateFolderModelComponent.prototype, "folderControl", {
        get: function () { return this.createFolderForm.controls; },
        enumerable: false,
        configurable: true
    });
    CreateFolderModelComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.createFolderForm.invalid) {
            return;
        }
        this.fbService.createFolder(this.createFolderForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('file_browser.messages.create_folder'), _this.translate.instant('file_browser.title'));
            _this.onCancel();
        });
    };
    CreateFolderModelComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateFolderModalRef.hide();
    };
    CreateFolderModelComponent = __decorate([
        Component({
            selector: 'app-create-folder-model',
            templateUrl: './create-folder-model.component.html',
            styleUrls: ['./create-folder-model.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            FileBrowserService,
            ToastrService])
    ], CreateFolderModelComponent);
    return CreateFolderModelComponent;
}());
export { CreateFolderModelComponent };
//# sourceMappingURL=create-folder-model.component.js.map