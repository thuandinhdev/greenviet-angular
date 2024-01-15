import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ProjectService } from '../../../../../core/services/project.service';
import { ProjectCommentsService } from '../../../../../core/services/project-comments.service';
import * as Dropzone from 'dropzone';
var ProjectCommentsComponent = /** @class */ (function () {
    function ProjectCommentsComponent(translate, router, route, formBuilder, toastr, projectCommentsService, projectService) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.projectCommentsService = projectCommentsService;
        this.projectService = projectService;
        this.isPageLoaded = false;
        this.isCommentFormSubmitted = false;
        this.isReplayFormSubmitted = false;
        this.commentFiles = [];
        this.parentChild = [];
        this.selectedFiles = [];
        this.projectId = this.route.snapshot.params.id;
        this.customClass = 'comment-collapse';
        this.oneAtATime = true;
    }
    ProjectCommentsComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.loadForms();
        this.getComment(this.projectId);
        this.loadReplyForm();
        setTimeout(function () {
            _this_1.loadDropzone();
        });
    };
    ProjectCommentsComponent.prototype.loadForms = function () {
        this.projectCommentsForm = this.formBuilder.group({
            project_id: [this.projectId],
            comment: ['', Validators.required],
            files: [null]
        });
    };
    ProjectCommentsComponent.prototype.loadReplyForm = function () {
        this.projectCommentsReplyForm = this.formBuilder.group({
            project_id: [this.projectId],
            replay_comment: [''],
            parent_id: [null],
        });
    };
    Object.defineProperty(ProjectCommentsComponent.prototype, "commentControl", {
        get: function () { return this.projectCommentsForm.controls; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectCommentsComponent.prototype, "replyCommentControl", {
        get: function () { return this.projectCommentsReplyForm.controls; },
        enumerable: false,
        configurable: true
    });
    ProjectCommentsComponent.prototype.loadDropzone = function () {
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
                            that.projectCommentsForm.patchValue({ files: _this_1.files });
                        };
                        reader.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.projectCommentsForm.patchValue({ files: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    ProjectCommentsComponent.prototype.onSubmit = function () {
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
        this.projectCommentsForm.patchValue({ files: this.selectedFiles });
        if (this.projectCommentsForm.invalid) {
            return;
        }
        this.projectCommentsService.create(this.projectCommentsForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('comments.messages.create'), _this_1.translate.instant('comments.title'));
            _this_1.dropzoneObj.removeAllFiles();
            _this_1.getComment(_this_1.projectId);
            _this_1.commentFormReset();
            _this_1.loadForms();
        });
    };
    ProjectCommentsComponent.prototype.replyFormReset = function () {
        this.projectCommentsReplyForm.patchValue({ replay_comment: '' });
        this.projectCommentsReplyForm.patchValue({ files: '' });
        this.projectCommentsReplyForm.patchValue({ attachments: '' });
    };
    ProjectCommentsComponent.prototype.commentFormReset = function () {
        this.isCommentFormSubmitted = false;
        this.commentControl.comment.reset();
        this.projectCommentsForm.patchValue({ attachments: null });
    };
    ProjectCommentsComponent.prototype.showReplayCommentBox = function (id) {
        $('#comment_replay_' + id).removeClass('d-none');
    };
    ProjectCommentsComponent.prototype.getComment = function (projectID) {
        var _this_1 = this;
        this.projectService.getById(projectID).subscribe(function (data) {
            _this_1.projectData = data;
            _this_1.projectData.comments = _this_1.getNestedChildren(_this_1.projectData.comments, 0);
            _this_1.comments = _this_1.projectData.comments;
        });
    };
    ProjectCommentsComponent.prototype.getNestedChildren = function (comment, parent) {
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
    ProjectCommentsComponent.prototype.postReplayComment = function (comment) {
        var _this_1 = this;
        if (this.projectCommentsReplyForm.value.replay_comment) {
            this.isReplayFormSubmitted = true;
            comment.parent_id = comment.id;
            comment.files = "";
            comment.comment = this.projectCommentsReplyForm.value.replay_comment;
            this.projectCommentsReplyForm.patchValue({ attachments: '' });
            var replyCommentValues = {
                comment: this.projectCommentsReplyForm.value.replay_comment,
                parent_id: comment.parent_id,
                project_id: comment.project_id,
                user: comment.user,
                user_id: comment.user_id,
                files: "",
                attachments: "",
                replay_comment: this.projectCommentsReplyForm.value.replay_comment
            };
            if (this.projectCommentsReplyForm.invalid) {
                return;
            }
            this.projectCommentsService.create(replyCommentValues)
                .subscribe(function (resp) {
                _this_1.toastr.success(_this_1.translate.instant('comments.messages.create'), _this_1.translate.instant('comments.title'));
                _this_1.getComment(_this_1.projectId);
                _this_1.replyFormReset();
                _this_1.loadForms();
            });
        }
        else {
            this.toastr.error(this.translate.instant('comments.create.error_messages.message4'), this.translate.instant('comments.title'));
            return false;
        }
    };
    ProjectCommentsComponent.prototype.commentDelete = function (commentId) {
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
                _this_1.projectCommentsService.delete(commentId)
                    .subscribe(function (data) {
                    _this_1.toastr.success(_this_1.translate.instant('comments.messages.delete'), _this_1.translate.instant('projects.title'));
                    _this_1.getComment(_this_1.projectId);
                });
            }
        });
    };
    ProjectCommentsComponent.prototype.saveComments = function (comment, index, value) {
        var _this_1 = this;
        comment[index] = value;
        this.projectCommentsService.update(comment).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('comments.messages.update'), _this_1.translate.instant('tasks.title'));
            _this_1.getComment(_this_1.projectId);
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectCommentsComponent.prototype, "permissions", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectCommentsComponent.prototype, "apiUrl", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectCommentsComponent.prototype, "loginUser", void 0);
    __decorate([
        ViewChild('commentdropzone', { static: false }),
        __metadata("design:type", ElementRef)
    ], ProjectCommentsComponent.prototype, "commentdropzone", void 0);
    ProjectCommentsComponent = __decorate([
        Component({
            selector: 'app-project-comments',
            templateUrl: './project-comments.component.html',
            styleUrls: ['./project-comments.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            Router,
            ActivatedRoute,
            FormBuilder,
            ToastrService,
            ProjectCommentsService,
            ProjectService])
    ], ProjectCommentsComponent);
    return ProjectCommentsComponent;
}());
export { ProjectCommentsComponent };
//# sourceMappingURL=project-comments.component.js.map