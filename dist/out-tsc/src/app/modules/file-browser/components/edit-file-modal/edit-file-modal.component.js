import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { FileBrowserService } from '../../../../core/services/file-browser.service';
var EditFileModalComponent = /** @class */ (function () {
    function EditFileModalComponent(translate, bsEditFileModalRef, formBuilder, fbService, toastr) {
        this.translate = translate;
        this.bsEditFileModalRef = bsEditFileModalRef;
        this.formBuilder = formBuilder;
        this.fbService = fbService;
        this.toastr = toastr;
        this.isSubmitted = false;
        this.renameFileFailederrors = [];
    }
    EditFileModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForm();
    };
    EditFileModalComponent.prototype.loadForm = function () {
        this.editFileForm = this.formBuilder.group({
            id: [this.file.id],
            file_name: [this.file.file_name, Validators.required]
        });
    };
    Object.defineProperty(EditFileModalComponent.prototype, "fileControl", {
        get: function () { return this.editFileForm.controls; },
        enumerable: false,
        configurable: true
    });
    EditFileModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.editFileForm.invalid) {
            return;
        }
        this.fbService.updateFile(this.editFileForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('file_browser.messages.update_file'), _this.translate.instant('file_browser.title'));
            _this.onCancel();
        });
    };
    EditFileModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditFileModalRef.hide();
    };
    EditFileModalComponent = __decorate([
        Component({
            selector: 'app-edit-file-modal',
            templateUrl: './edit-file-modal.component.html',
            styleUrls: ['./edit-file-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            FileBrowserService,
            ToastrService])
    ], EditFileModalComponent);
    return EditFileModalComponent;
}());
export { EditFileModalComponent };
//# sourceMappingURL=edit-file-modal.component.js.map