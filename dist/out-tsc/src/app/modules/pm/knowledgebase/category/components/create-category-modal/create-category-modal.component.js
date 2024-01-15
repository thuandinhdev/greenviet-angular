import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { KnowledgeBaseService } from './../../../../../../core/services/knowledge-base.service';
import * as Dropzone from 'dropzone';
var CreateCategoryModalComponent = /** @class */ (function () {
    function CreateCategoryModalComponent(translate, formBuilder, bsCreateCategoryModalRef, toastr, knowledgeBaseService) {
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.bsCreateCategoryModalRef = bsCreateCategoryModalRef;
        this.toastr = toastr;
        this.knowledgeBaseService = knowledgeBaseService;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
    }
    CreateCategoryModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForms();
    };
    CreateCategoryModalComponent.prototype.loadForms = function () {
        var _this_1 = this;
        this.categoryCreateForm = this.formBuilder.group({
            category_name: ['', [Validators.required, Validators.maxLength(50)]],
            file: ['', Validators.required],
            file_extension: ['']
        });
        this.isPageLoaded = true;
        setTimeout(function () {
            _this_1.loadDropzone();
        });
    };
    Object.defineProperty(CreateCategoryModalComponent.prototype, "categoryControl", {
        get: function () {
            return this.categoryCreateForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    CreateCategoryModalComponent.prototype.loadDropzone = function () {
        var that = this;
        new Dropzone(this.pdfdropzone.nativeElement, {
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
                        var reader_1 = new FileReader(), fileName_1 = file.name;
                        if (fileName_1) {
                            fileName_1 = fileName_1.split('.').pop();
                        }
                        reader_1.onload = function (e) {
                            that.categoryCreateForm.patchValue({ file: reader_1.result });
                            that.categoryCreateForm.patchValue({ file_extension: fileName_1 });
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.categoryCreateForm.patchValue({ file: null });
                    that.categoryCreateForm.patchValue({ file_extension: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    CreateCategoryModalComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.categoryCreateForm.invalid) {
            return;
        }
        this.knowledgeBaseService.create(this.categoryCreateForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('knowledge_base.category.messages.create'), _this_1.translate.instant('knowledge_base.title'));
            _this_1.event.emit({ data: data });
            _this_1.onCancel();
        });
    };
    CreateCategoryModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateCategoryModalRef.hide();
    };
    __decorate([
        ViewChild('pdfdropzone', { static: false }),
        __metadata("design:type", ElementRef)
    ], CreateCategoryModalComponent.prototype, "pdfdropzone", void 0);
    CreateCategoryModalComponent = __decorate([
        Component({
            selector: 'app-create-category-modal',
            templateUrl: './create-category-modal.component.html',
            styleUrls: ['./create-category-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            FormBuilder,
            BsModalRef,
            ToastrService,
            KnowledgeBaseService])
    ], CreateCategoryModalComponent);
    return CreateCategoryModalComponent;
}());
export { CreateCategoryModalComponent };
//# sourceMappingURL=create-category-modal.component.js.map