import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { TaskService } from '../../../../../core/services/task.service';
import { TaskCommentsService } from '../../../../../core/services/task-comments.service';
import * as Dropzone from 'dropzone';
var TaskCommentsComponent = /** @class */ (function () {
    function TaskCommentsComponent(translate, router, route, formBuilder, toastr, taskCommentsService, taskService) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.taskCommentsService = taskCommentsService;
        this.taskService = taskService;
        this.isPageLoaded = false;
        this.isCommentFormSubmitted = false;
        this.isReplayFormSubmitted = false;
        this.commentFiles = [];
        this.parentChild = [];
        this.selectedFiles = [];
        this.taskId = this.route.snapshot.params.id;
        this.customClass = 'comment-collapse';
        this.oneAtATime = true;
    }
    TaskCommentsComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.loadForms();
        this.getComment(this.taskId);
        this.loadReplyForm();
        setTimeout(function () {
            _this_1.loadDropzone();
        });
    };
    TaskCommentsComponent.prototype.loadForms = function () {
        var that = this;
        this.taskCommentsForm = this.formBuilder.group({
            task_id: [this.taskId],
            comment: ['', Validators.required],
            files: [null]
        });
    };
    TaskCommentsComponent.prototype.loadReplyForm = function () {
        this.taskCommentsReplyForm = this.formBuilder.group({
            task_id: [this.taskId],
            replay_comment: [''],
            parent_id: [null],
        });
    };
    Object.defineProperty(TaskCommentsComponent.prototype, "commentControl", {
        get: function () { return this.taskCommentsForm.controls; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TaskCommentsComponent.prototype, "replyCommentControl", {
        get: function () {
            return this.taskCommentsReplyForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    TaskCommentsComponent.prototype.loadDropzone = function () {
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
                            that.taskCommentsForm.patchValue({ files: _this_1.files });
                        };
                        reader.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.taskCommentsForm.patchValue({ files: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    TaskCommentsComponent.prototype.onSubmit = function () {
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
        this.taskCommentsForm.patchValue({ files: this.selectedFiles });
        if (this.taskCommentsForm.invalid) {
            return;
        }
        this.taskCommentsService.create(this.taskCommentsForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('comments.messages.create'), _this_1.translate.instant('comments.title'));
            _this_1.dropzoneObj.removeAllFiles();
            _this_1.getComment(_this_1.taskId);
            _this_1.commentFormReset();
            _this_1.loadForms();
        });
    };
    TaskCommentsComponent.prototype.replyFormReset = function () {
        this.taskCommentsReplyForm.patchValue({ replay_comment: '' });
        this.taskCommentsReplyForm.patchValue({ files: '' });
        this.taskCommentsReplyForm.patchValue({ attachments: '' });
    };
    TaskCommentsComponent.prototype.commentFormReset = function () {
        this.isCommentFormSubmitted = false;
        this.commentControl.comment.reset();
        this.taskCommentsForm.patchValue({ attachments: null });
    };
    TaskCommentsComponent.prototype.showReplayCommentBox = function (id) {
        $('#comment_replay_' + id).removeClass('d-none');
    };
    TaskCommentsComponent.prototype.getComment = function (taskID) {
        var _this_1 = this;
        this.taskService.getById(taskID).subscribe(function (data) {
            _this_1.taskData = data;
            _this_1.taskData.comments = _this_1.getNestedChildren(_this_1.taskData.comments, 0);
            _this_1.comments = _this_1.taskData.comments;
        });
    };
    TaskCommentsComponent.prototype.getNestedChildren = function (comment, parent) {
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
    TaskCommentsComponent.prototype.postReplayComment = function (comment) {
        var _this_1 = this;
        if (this.taskCommentsReplyForm.value.replay_comment) {
            this.isReplayFormSubmitted = true;
            comment.parent_id = comment.id;
            comment.files = "";
            comment.comment = this.taskCommentsReplyForm.value.replay_comment;
            this.taskCommentsReplyForm.patchValue({ attachments: '' });
            var replyCommentValues = {
                comment: this.taskCommentsReplyForm.value.replay_comment,
                parent_id: comment.parent_id,
                task_id: comment.task_id,
                user: comment.user,
                user_id: comment.user_id,
                files: "",
                attachments: "",
                replay_comment: this.taskCommentsReplyForm.value.replay_comment
            };
            if (this.taskCommentsReplyForm.invalid) {
                return;
            }
            this.taskCommentsService.create(replyCommentValues)
                .subscribe(function (resp) {
                _this_1.toastr.success(_this_1.translate.instant('comments.messages.create'), _this_1.translate.instant('comments.title'));
                _this_1.getComment(_this_1.taskId);
                _this_1.replyFormReset();
                _this_1.loadForms();
            });
        }
        else {
            this.toastr.error(this.translate.instant('comments.create.error_messages.message4'), this.translate.instant('comments.title'));
            return false;
        }
    };
    TaskCommentsComponent.prototype.commentDelete = function (commentId) {
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
                _this_1.taskCommentsService.delete(commentId)
                    .subscribe(function (data) {
                    _this_1.toastr.success(_this_1.translate.instant('comments.messages.delete'), _this_1.translate.instant('tasks.title'));
                    _this_1.getComment(_this_1.taskId);
                });
            }
        });
    };
    TaskCommentsComponent.prototype.saveComments = function (comment, index, value) {
        var _this_1 = this;
        comment[index] = value;
        this.taskCommentsService.update(comment).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('comments.messages.update'), _this_1.translate.instant('tasks.title'));
            _this_1.getComment(_this_1.taskId);
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TaskCommentsComponent.prototype, "permission", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TaskCommentsComponent.prototype, "apiUrl", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TaskCommentsComponent.prototype, "loginUser", void 0);
    __decorate([
        ViewChild('commentdropzone', { static: false }),
        __metadata("design:type", ElementRef)
    ], TaskCommentsComponent.prototype, "commentdropzone", void 0);
    TaskCommentsComponent = __decorate([
        Component({
            selector: 'app-task-comments',
            templateUrl: './task-comments.component.html',
            styleUrls: ['./task-comments.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            Router,
            ActivatedRoute,
            FormBuilder,
            ToastrService,
            TaskCommentsService,
            TaskService])
    ], TaskCommentsComponent);
    return TaskCommentsComponent;
}());
export { TaskCommentsComponent };
//# sourceMappingURL=task-comments.component.js.map