import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { TranslationService } from '../../../../../../core/services/translation.service';
import { environment } from '../../../../../../../environments/environment';
import * as Dropzone from 'dropzone';
var EditTranslationComponent = /** @class */ (function () {
    function EditTranslationComponent(translate, bsModalRef, formBuilder, translationService, toastr) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.translationService = translationService;
        this.toastr = toastr;
        this.apiUrl = environment.apiUrl;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.isFormLoaded = false;
        this.isProfileUploded = false;
        this.isProfileLoaded = true;
    }
    EditTranslationComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForm();
    };
    Object.defineProperty(EditTranslationComponent.prototype, "getTranslationControl", {
        get: function () { return this.editTranslationForm.controls; },
        enumerable: false,
        configurable: true
    });
    EditTranslationComponent.prototype.loadForm = function () {
        this.editTranslationForm = this.formBuilder.group({
            id: [this.translation.id],
            status: [this.translation.status],
            icon: [this.translation.icon, Validators.required],
            language: [this.translation.language, Validators.required]
        });
        this.loadDropzone();
        this.isFormLoaded = true;
    };
    EditTranslationComponent.prototype.loadDropzone = function () {
        var that = this;
        new Dropzone(this.translateDropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = Dropzone.createElement('<button class=\'btn btn-sm btn-block\'>Remove file</button>');
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
                            that.editTranslationForm.patchValue({ icon: reader_1.result });
                            that.isProfileLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.editTranslationForm.patchValue({ icon: null });
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
    EditTranslationComponent.prototype.removeDropzoneImage = function () {
        this.isProfileUploded = true;
        this.isProfileLoaded = false;
        this.editTranslationForm.patchValue({ icon: null });
    };
    EditTranslationComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.editTranslationForm.invalid) {
            return;
        }
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // this.onCancel();
        // return;
        this.translationService.update(this.editTranslationForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('settings.translations.messages.update'), _this_1.translate.instant('settings.translations.title'));
            _this_1.event.emit({ data: true });
            _this_1.onCancel();
        });
    };
    EditTranslationComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    __decorate([
        ViewChild('translateDropzone', { static: true }),
        __metadata("design:type", ElementRef)
    ], EditTranslationComponent.prototype, "translateDropzone", void 0);
    EditTranslationComponent = __decorate([
        Component({
            selector: 'app-edit-translation',
            templateUrl: './edit-translation.component.html',
            styleUrls: ['./edit-translation.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            TranslationService,
            ToastrService])
    ], EditTranslationComponent);
    return EditTranslationComponent;
}());
export { EditTranslationComponent };
//# sourceMappingURL=edit-translation.component.js.map