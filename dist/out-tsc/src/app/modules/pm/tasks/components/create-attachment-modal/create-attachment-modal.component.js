import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { TaskAttachmentService } from './../../../../../core/services/task-attachment.service';
import * as Dropzone from 'dropzone';
var CreateAttachmentModalComponent = /** @class */ (function () {
    function CreateAttachmentModalComponent(translate, bsCreateAttachmentModalRef, formBuilder, toastr, taskAttachmentService, route, router) {
        this.translate = translate;
        this.bsCreateAttachmentModalRef = bsCreateAttachmentModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.taskAttachmentService = taskAttachmentService;
        this.route = route;
        this.router = router;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.isfileUploded = false;
        this.isfileLoaded = true;
    }
    CreateAttachmentModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForms();
    };
    CreateAttachmentModalComponent.prototype.loadForms = function () {
        var _this_1 = this;
        this.createAttachmentForm = this.formBuilder.group({
            task_id: [this.taskId],
            file_name: ['', [Validators.required, Validators.maxLength(255)]],
            file: ['', Validators.required],
            file_extension: [this.fileName],
            file_description: ['']
        });
        setTimeout(function () {
            _this_1.loadDropzone();
        });
    };
    Object.defineProperty(CreateAttachmentModalComponent.prototype, "attachment", {
        get: function () {
            return this.createAttachmentForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    CreateAttachmentModalComponent.prototype.loadDropzone = function () {
        var that = this;
        new Dropzone(this.logodropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = Dropzone.createElement("<button class=\'btn btn-sm btn-block\'>" + that.translate.instant('common.remove_file') + "</button>");
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        that.fileName = file.name;
                        if (that.fileName) {
                            that.fileName = that.fileName.split('.').pop();
                        }
                        reader_1.onload = function (e) {
                            that.createAttachmentForm.patchValue({ file: reader_1.result });
                            that.createAttachmentForm.patchValue({ file_extension: that.fileName });
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.createAttachmentForm.patchValue({ file: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    CreateAttachmentModalComponent.prototype.removeDropzoneImage = function () {
        this.isfileUploded = true;
        this.isfileLoaded = false;
    };
    CreateAttachmentModalComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.createAttachmentForm.invalid) {
            return;
        }
        this.taskAttachmentService.create(this.createAttachmentForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('attachments.messages.create'), _this_1.translate.instant('attachments.title'));
            _this_1.event.emit({ data: data });
            _this_1.onCancel();
        });
    };
    CreateAttachmentModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateAttachmentModalRef.hide();
    };
    __decorate([
        ViewChild('logodropzone', { static: false }),
        __metadata("design:type", ElementRef)
    ], CreateAttachmentModalComponent.prototype, "logodropzone", void 0);
    CreateAttachmentModalComponent = __decorate([
        Component({
            selector: 'app-create-attachment-modal',
            templateUrl: './create-attachment-modal.component.html',
            styleUrls: ['./create-attachment-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            TaskAttachmentService,
            ActivatedRoute,
            Router])
    ], CreateAttachmentModalComponent);
    return CreateAttachmentModalComponent;
}());
export { CreateAttachmentModalComponent };
//# sourceMappingURL=create-attachment-modal.component.js.map