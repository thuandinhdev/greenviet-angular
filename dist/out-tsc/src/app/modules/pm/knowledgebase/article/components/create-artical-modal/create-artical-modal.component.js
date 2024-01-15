import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { KnowledgeBaseService } from './../../../../../../core/services/knowledge-base.service';
import * as Dropzone from 'dropzone';
var CreateArticalModalComponent = /** @class */ (function () {
    function CreateArticalModalComponent(translate, formBuilder, bsCreateArticalModalRef, toastr, knowledgeBaseService) {
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.bsCreateArticalModalRef = bsCreateArticalModalRef;
        this.toastr = toastr;
        this.knowledgeBaseService = knowledgeBaseService;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.categories = [];
    }
    CreateArticalModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForms();
        this.loadDropzone();
    };
    CreateArticalModalComponent.prototype.loadForms = function () {
        this.articleCreateForm = this.formBuilder.group({
            article_title: ['', [Validators.required, Validators.maxLength(255)]],
            category_id: [null, Validators.required],
            description: ['', Validators.required],
            file: [''],
            file_extension: ['']
        });
        this.getAllCategory();
    };
    Object.defineProperty(CreateArticalModalComponent.prototype, "articleControl", {
        get: function () {
            return this.articleCreateForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    CreateArticalModalComponent.prototype.loadDropzone = function () {
        var that = this;
        new Dropzone(this.logodropzone.nativeElement, {
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
                            that.articleCreateForm.patchValue({ file: reader_1.result });
                            that.articleCreateForm.patchValue({ file_extension: file.name.split('.').pop() });
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.articleCreateForm.patchValue({ file: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    CreateArticalModalComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.articleCreateForm.invalid) {
            return;
        }
        this.knowledgeBaseService.createArtical(this.articleCreateForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('knowledge_base.article.messages.create'), _this_1.translate.instant('knowledge_base.title'));
            _this_1.event.emit({ data: data });
            _this_1.onCancel();
        });
    };
    CreateArticalModalComponent.prototype.getAllCategory = function () {
        var _this_1 = this;
        this.knowledgeBaseService.getAllCategory()
            .subscribe(function (data) {
            _this_1.categories = data;
            _this_1.isPageLoaded = true;
        });
    };
    CreateArticalModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateArticalModalRef.hide();
    };
    __decorate([
        ViewChild('logodropzone', { static: true }),
        __metadata("design:type", ElementRef)
    ], CreateArticalModalComponent.prototype, "logodropzone", void 0);
    CreateArticalModalComponent = __decorate([
        Component({
            selector: 'app-create-artical-modal',
            templateUrl: './create-artical-modal.component.html',
            styleUrls: ['./create-artical-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            FormBuilder,
            BsModalRef,
            ToastrService,
            KnowledgeBaseService])
    ], CreateArticalModalComponent);
    return CreateArticalModalComponent;
}());
export { CreateArticalModalComponent };
//# sourceMappingURL=create-artical-modal.component.js.map