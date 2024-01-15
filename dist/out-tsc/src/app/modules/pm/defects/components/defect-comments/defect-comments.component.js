import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { DefectService } from '../../../../../core/services/defect.service';
import { DefectCommentsService } from '../../../../../core/services/defect-comments.service';
import * as Dropzone from 'dropzone';
var DefectCommentsComponent = /** @class */ (function () {
    function DefectCommentsComponent(translate, router, route, formBuilder, toastr, defectCommentsService, defectService) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.defectCommentsService = defectCommentsService;
        this.defectService = defectService;
        this.isPageLoaded = false;
        this.isCommentFormSubmitted = false;
        this.isReplayFormSubmitted = false;
        this.commentFiles = [];
        this.parentChild = [];
        this.selectedFiles = [];
        this.defectId = this.route.snapshot.params.id;
        this.customClass = 'comment-collapse';
        this.oneAtATime = true;
    }
    DefectCommentsComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.loadForms();
        this.getComment(this.defectId);
        this.loadReplyForm();
        setTimeout(function () {
            _this_1.loadDropzone();
        });
    };
    DefectCommentsComponent.prototype.loadForms = function () {
        var that = this;
        this.defectCommentsForm = this.formBuilder.group({
            defect_id: [this.defectId],
            comment: ['', Validators.required],
            files: [null]
        });
    };
    DefectCommentsComponent.prototype.loadReplyForm = function () {
        this.defectCommentsReplyForm = this.formBuilder.group({
            defect_id: [this.defectId],
            replay_comment: [''],
            parent_id: [null],
        });
    };
    Object.defineProperty(DefectCommentsComponent.prototype, "commentControl", {
        get: function () { return this.defectCommentsForm.controls; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefectCommentsComponent.prototype, "replyCommentControl", {
        get: function () {
            return this.defectCommentsReplyForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    DefectCommentsComponent.prototype.loadDropzone = function () {
        var that = this;
        this.dropzoneObj = new Dropzone(this.commentdropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 5,
            clickable: true,
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var _this_1 = this;
                    var removeButton = Dropzone.createElement("<button class=\'btn btn-sm btn-block\'>" + that.translate.instant('common.remove_file') + "</button>");
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            that.defectCommentsForm.patchValue({ files: _this_1.files });
                        };
                        reader.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.defectCommentsForm.patchValue({ files: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    DefectCommentsComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isCommentFormSubmitted = true;
        this.commentControl.files;
        this.selectedFiles = [];
        if (this.commentControl.files.value != null) {
            for (var iRow = 0; iRow < this.commentControl.files.value.length; iRow++) {
                var thisfile = {
                    file: this.commentControl.files.value[iRow].dataURL,
                    name: this.commentControl.files.value[iRow].name,
                    size: this.commentControl.files.value[iRow].size,
                    extension: this.commentControl.files.value[iRow].name.split('.').pop()
                };
                this.selectedFiles.push(thisfile);
            }
        }
        this.defectCommentsForm.patchValue({ files: this.selectedFiles });
        if (this.defectCommentsForm.invalid) {
            return;
        }
        this.defectCommentsService.create(this.defectCommentsForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('comments.messages.create'), _this_1.translate.instant('comments.title'));
            _this_1.dropzoneObj.removeAllFiles();
            _this_1.getComment(_this_1.defectId);
            _this_1.commentFormReset();
            _this_1.loadForms();
        });
    };
    DefectCommentsComponent.prototype.replyFormReset = function () {
        this.defectCommentsReplyForm.patchValue({ replay_comment: '' });
        this.defectCommentsReplyForm.patchValue({ files: '' });
        this.defectCommentsReplyForm.patchValue({ attachments: '' });
    };
    DefectCommentsComponent.prototype.commentFormReset = function () {
        this.isCommentFormSubmitted = false;
        this.commentControl.comment.reset();
        this.defectCommentsForm.patchValue({ attachments: null });
    };
    DefectCommentsComponent.prototype.showReplayCommentBox = function (id) {
        $('#comment_replay_' + id).removeClass('d-none');
    };
    DefectCommentsComponent.prototype.getComment = function (defectId) {
        var _this_1 = this;
        this.defectService.getById(defectId).subscribe(function (data) {
            _this_1.defectData = data;
            _this_1.defectData.comments = _this_1.getNestedChildren(_this_1.defectData.comments, 0);
            _this_1.comments = _this_1.defectData.comments;
        });
    };
    DefectCommentsComponent.prototype.getNestedChildren = function (comment, parent) {
        var parentChild = [];
        for (var i in comment) {
            if (comment[i].attachments && ($.type(comment[i].attachments) === "string")) {
                var jsonParse = JSON.parse(comment[i].attachments);
                comment[i].attachments = jsonParse;
            }
            if (comment[i].parent_id == parent) {
                var child = this.getNestedChildren(comment, comment[i].id);
                if (child.length) {
                    comment[i].child = child;
                }
                parentChild.push(comment[i]);
            }
        }
        return parentChild;
    };
    DefectCommentsComponent.prototype.postReplayComment = function (comment) {
        var _this_1 = this;
        if (this.defectCommentsReplyForm.value.replay_comment) {
            this.isReplayFormSubmitted = true;
            comment.parent_id = comment.id;
            comment.files = "";
            comment.comment = this.defectCommentsReplyForm.value.replay_comment;
            this.defectCommentsReplyForm.patchValue({ attachments: '' });
            var replyCommentValues = {
                comment: this.defectCommentsReplyForm.value.replay_comment,
                parent_id: comment.parent_id,
                defect_id: comment.defect_id,
                user: comment.user,
                user_id: comment.user_id,
                files: "",
                attachments: "",
                replay_comment: this.defectCommentsReplyForm.value.replay_comment
            };
            if (this.defectCommentsReplyForm.invalid) {
                return;
            }
            this.defectCommentsService.create(replyCommentValues)
                .subscribe(function (resp) {
                _this_1.toastr.success(_this_1.translate.instant('comments.messages.create'), _this_1.translate.instant('comments.title'));
                _this_1.getComment(_this_1.defectId);
                _this_1.replyFormReset();
                _this_1.loadForms();
            });
        }
        else {
            this.toastr.error(this.translate.instant('comments.create.error_messages.message4'), this.translate.instant('comments.title'));
            return false;
        }
    };
    DefectCommentsComponent.prototype.commentDelete = function (commentId) {
        var _this_1 = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this_1.defectCommentsService.delete(commentId)
                    .subscribe(function (data) {
                    _this_1.toastr.success(_this_1.translate.instant('comments.messages.delete'), _this_1.translate.instant('defects.title'));
                    _this_1.getComment(_this_1.defectId);
                });
            }
        });
    };
    DefectCommentsComponent.prototype.saveComments = function (comment, index, value) {
        var _this_1 = this;
        comment[index] = value;
        this.defectCommentsService.update(comment).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('comments.messages.update'), _this_1.translate.instant('defects.title'));
            _this_1.getComment(_this_1.defectId);
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DefectCommentsComponent.prototype, "permission", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DefectCommentsComponent.prototype, "apiUrl", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DefectCommentsComponent.prototype, "loginUser", void 0);
    __decorate([
        ViewChild('commentdropzone', { static: false }),
        __metadata("design:type", ElementRef)
    ], DefectCommentsComponent.prototype, "commentdropzone", void 0);
    DefectCommentsComponent = __decorate([
        Component({
            selector: 'app-defect-comments',
            templateUrl: './defect-comments.component.html',
            styleUrls: ['./defect-comments.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            Router,
            ActivatedRoute,
            FormBuilder,
            ToastrService,
            DefectCommentsService,
            DefectService])
    ], DefectCommentsComponent);
    return DefectCommentsComponent;
}());
export { DefectCommentsComponent };
//# sourceMappingURL=defect-comments.component.js.map