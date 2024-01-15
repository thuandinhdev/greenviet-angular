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
var EditArticleModalComponent = /** @class */ (function () {
    function EditArticleModalComponent(translate, bsEditArticalModalRef, formBuilder, toastr, knowledgeBaseService) {
        this.translate = translate;
        this.bsEditArticalModalRef = bsEditArticalModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.knowledgeBaseService = knowledgeBaseService;
        this.apiUrl = environment.apiUrl;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.categories = [];
    }
    EditArticleModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.getAllCategory();
        this.loadForms();
    };
    EditArticleModalComponent.prototype.loadForms = function () {
        var _this_1 = this;
        this.articleEditForm = this.formBuilder.group({
            id: [this.article.id],
            article_title: [this.article.article_title, [Validators.required, Validators.maxLength(255)]],
            category_id: [this.article.category_id, Validators.required],
            description: [this.article.description, Validators.required],
            file: [this.article.file_name],
            file_name: [this.article.file_name],
            file_extension: ['']
        });
        if (this.article.file_name) {
            this.articleEditForm.patchValue({ file_extension: this.article.file_name.split('.').pop() });
        }
        this.isPageLoaded = true;
        setTimeout(function () {
            _this_1.loadDropzone();
        });
    };
    Object.defineProperty(EditArticleModalComponent.prototype, "articleControl", {
        get: function () {
            return this.articleEditForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    EditArticleModalComponent.prototype.loadDropzone = function () {
        var that = this;
        this.logoDropzone = new Dropzone(this.logodropzone.nativeElement, {
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
                            that.articleEditForm.patchValue({ file: reader_1.result });
                            that.articleEditForm.patchValue({ file_extension: file.name.split('.').pop() });
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.articleEditForm.patchValue({ file: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    EditArticleModalComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.articleEditForm.invalid) {
            return;
        }
        this.knowledgeBaseService.updateArticle(this.articleEditForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('knowledge_base.article.messages.update'), _this_1.translate.instant('knowledge_base.title'));
            _this_1.event.emit({ data: data });
            _this_1.onCancel();
        });
    };
    EditArticleModalComponent.prototype.removeDropzoneFiles = function () {
        this.articleEditForm.patchValue({ file: null });
        this.articleEditForm.patchValue({ file_extension: null });
        this.articleEditForm.patchValue({ file_name: null });
        this.logoDropzone.removeAllFiles(true);
        $("#dropZoneFile").html("");
    };
    EditArticleModalComponent.prototype.getExtension = function (fileName) {
        return fileName.substr(fileName.lastIndexOf('.') + 1);
    };
    EditArticleModalComponent.prototype.getAllCategory = function () {
        var _this_1 = this;
        this.knowledgeBaseService.getAllCategory()
            .subscribe(function (data) {
            _this_1.categories = data;
        });
    };
    EditArticleModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditArticalModalRef.hide();
    };
    __decorate([
        ViewChild('logodropzone', { static: false }),
        __metadata("design:type", ElementRef)
    ], EditArticleModalComponent.prototype, "logodropzone", void 0);
    EditArticleModalComponent = __decorate([
        Component({
            selector: 'app-edit-article-modal',
            templateUrl: './edit-article-modal.component.html',
            styleUrls: ['./edit-article-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            KnowledgeBaseService])
    ], EditArticleModalComponent);
    return EditArticleModalComponent;
}());
export { EditArticleModalComponent };
//# sourceMappingURL=edit-article-modal.component.js.map