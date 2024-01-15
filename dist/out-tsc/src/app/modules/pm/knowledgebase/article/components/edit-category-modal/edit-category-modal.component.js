import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { KnowledgeBaseService } from './../../../../../../core/services/knowledge-base.service';
import { environment } from '../../../../../../../environments/environment';
import * as Dropzone from 'dropzone';
var EditCategoryModalComponent = /** @class */ (function () {
    function EditCategoryModalComponent(translate, formBuilder, bsCreateCategoryModalRef, toastr, knowledgeBaseService) {
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.bsCreateCategoryModalRef = bsCreateCategoryModalRef;
        this.toastr = toastr;
        this.knowledgeBaseService = knowledgeBaseService;
        this.apiUrl = environment.apiUrl;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isCompanyLogoUploaded = false;
    }
    EditCategoryModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForms();
    };
    EditCategoryModalComponent.prototype.loadForms = function () {
        var _this_1 = this;
        this.categoryEditForm = this.formBuilder.group({
            id: [this.category.id],
            category_name: [this.category.category_name, [Validators.required, Validators.maxLength(50)]],
            file: [this.category.category_logo, Validators.required],
            file_extension: ['']
        });
        if (this.category.category_logo) {
            this.categoryEditForm.patchValue({ file_extension: this.category.category_logo.split('.').pop() });
            this.isCompanyLogoUploaded = true;
        }
        setTimeout(function () {
            _this_1.loadDropzone();
        });
        this.isPageLoaded = true;
    };
    Object.defineProperty(EditCategoryModalComponent.prototype, "categoryControl", {
        get: function () {
            return this.categoryEditForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    EditCategoryModalComponent.prototype.loadDropzone = function () {
        var that = this;
        this.logoDropzone = new Dropzone(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var _this_1 = this;
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
                            that.categoryEditForm.patchValue({ file: reader_1.result });
                            that.categoryEditForm.patchValue({ file_extension: file.name.split('.').pop() });
                            _this_1.isCompanyLogoUploaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.categoryEditForm.patchValue({ file: null });
                    that.categoryEditForm.patchValue({ file_extension: null });
                    this.isCompanyLogoUploaded = false;
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    EditCategoryModalComponent.prototype.removeDropzoneFiles = function () {
        this.categoryEditForm.patchValue({ file: null });
        this.categoryEditForm.patchValue({ file_extension: null });
        this.logoDropzone.removeAllFiles(true);
        this.isCompanyLogoUploaded = false;
        $("#dropZoneFile").html("");
    };
    EditCategoryModalComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.categoryEditForm.invalid) {
            return;
        }
        if (this.isCompanyLogoUploaded) {
            if (this.category.category_logo) {
                this.categoryEditForm.patchValue({ file: this.isCompanyLogoUploaded });
                this.categoryEditForm.patchValue({ file_extension: this.category.category_logo.split('.').pop() });
            }
        }
        this.knowledgeBaseService.updateCategory(this.categoryEditForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('knowledge_base.category.messages.update'), _this_1.translate.instant('knowledge_base.title'));
            _this_1.event.emit({ data: data });
            _this_1.onCancel();
        });
    };
    EditCategoryModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateCategoryModalRef.hide();
    };
    __decorate([
        ViewChild('logodropzone', { static: false }),
        __metadata("design:type", ElementRef)
    ], EditCategoryModalComponent.prototype, "logodropzone", void 0);
    EditCategoryModalComponent = __decorate([
        Component({
            selector: 'app-edit-category-modal',
            templateUrl: './edit-category-modal.component.html',
            styleUrls: ['./edit-category-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            FormBuilder,
            BsModalRef,
            ToastrService,
            KnowledgeBaseService])
    ], EditCategoryModalComponent);
    return EditCategoryModalComponent;
}());
export { EditCategoryModalComponent };
//# sourceMappingURL=edit-category-modal.component.js.map