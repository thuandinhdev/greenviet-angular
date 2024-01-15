import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { TranslationService } from '../../../../../../core/services/translation.service';
import { HelperService } from '../../../../../../core/services/helper.service';
import * as Dropzone from 'dropzone';
var CreateTranslationComponent = /** @class */ (function () {
    function CreateTranslationComponent(translate, bsModalRef, formBuilder, translationService, helperService, toastr) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.translationService = translationService;
        this.helperService = helperService;
        this.toastr = toastr;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.isFormLoaded = false;
    }
    CreateTranslationComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.getLanguages();
        this.loadForm();
    };
    Object.defineProperty(CreateTranslationComponent.prototype, "getTranslationControl", {
        get: function () { return this.createTranslationForm.controls; },
        enumerable: false,
        configurable: true
    });
    CreateTranslationComponent.prototype.getLanguages = function () {
        var _this_1 = this;
        this.helperService.getLanguages()
            .subscribe(function (data) {
            _this_1.languages = data;
        });
    };
    CreateTranslationComponent.prototype.loadForm = function () {
        this.createTranslationForm = this.formBuilder.group({
            icon: [null, Validators.required],
            language: [null, Validators.required]
        });
        this.loadDropzone();
        this.isFormLoaded = true;
    };
    CreateTranslationComponent.prototype.loadDropzone = function () {
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
                            that.createTranslationForm.patchValue({ icon: reader_1.result });
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.createTranslationForm.patchValue({ icon: '' });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    CreateTranslationComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.createTranslationForm.invalid) {
            return;
        }
        this.translationService.create(this.createTranslationForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('settings.translations.messages.create'), _this_1.translate.instant('settings.translations.title'));
            _this_1.event.emit({ data: true });
            _this_1.onCancel();
        });
    };
    CreateTranslationComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    __decorate([
        ViewChild('translateDropzone', { static: true }),
        __metadata("design:type", ElementRef)
    ], CreateTranslationComponent.prototype, "translateDropzone", void 0);
    CreateTranslationComponent = __decorate([
        Component({
            selector: 'app-create-translation',
            templateUrl: './create-translation.component.html',
            styleUrls: ['./create-translation.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            TranslationService,
            HelperService,
            ToastrService])
    ], CreateTranslationComponent);
    return CreateTranslationComponent;
}());
export { CreateTranslationComponent };
//# sourceMappingURL=create-translation.component.js.map