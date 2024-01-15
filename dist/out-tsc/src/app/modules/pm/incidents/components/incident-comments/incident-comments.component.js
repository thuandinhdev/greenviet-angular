import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { IncidentService } from '../../../../../core/services/incident.service';
import { IncidentCommentService } from '../../../../../core/services/incident-comment.service';
import * as Dropzone from 'dropzone';
var IncidentCommentsComponent = /** @class */ (function () {
    function IncidentCommentsComponent(translate, router, route, formBuilder, toastr, incidentCommentsService, incidentService) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.incidentCommentsService = incidentCommentsService;
        this.incidentService = incidentService;
        this.isPageLoaded = false;
        this.isCommentFormSubmitted = false;
        this.isReplayFormSubmitted = false;
        this.commentFiles = [];
        this.parentChild = [];
        this.selectedFiles = [];
        this.incidentId = this.route.snapshot.params.id;
        this.customClass = 'comment-collapse';
        this.oneAtATime = true;
    }
    IncidentCommentsComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.loadForms();
        this.getComment(this.incidentId);
        this.loadReplyForm();
        setTimeout(function () {
            _this_1.loadDropzone();
        });
    };
    IncidentCommentsComponent.prototype.loadForms = function () {
        var that = this;
        this.incidentCommentsForm = this.formBuilder.group({
            incident_id: [this.incidentId],
            comment: ['', Validators.required],
            files: [null]
        });
    };
    IncidentCommentsComponent.prototype.loadReplyForm = function () {
        this.incidentCommentsReplyForm = this.formBuilder.group({
            incident_id: [this.incidentId],
            replay_comment: [''],
            parent_id: [null],
        });
    };
    Object.defineProperty(IncidentCommentsComponent.prototype, "commentControl", {
        get: function () { return this.incidentCommentsForm.controls; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IncidentCommentsComponent.prototype, "replyCommentControl", {
        get: function () {
            return this.incidentCommentsReplyForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    IncidentCommentsComponent.prototype.loadDropzone = function () {
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
                            that.incidentCommentsForm.patchValue({ files: _this_1.files });
                        };
                        reader.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.incidentCommentsForm.patchValue({ files: null });
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    IncidentCommentsComponent.prototype.onSubmit = function () {
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
        this.incidentCommentsForm.patchValue({ files: this.selectedFiles });
        if (this.incidentCommentsForm.invalid) {
            return;
        }
        this.incidentCommentsService.create(this.incidentCommentsForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('comments.messages.create'), _this_1.translate.instant('comments.title'));
            _this_1.dropzoneObj.removeAllFiles();
            _this_1.getComment(_this_1.incidentId);
            _this_1.commentFormReset();
            _this_1.loadForms();
        });
    };
    IncidentCommentsComponent.prototype.replyFormReset = function () {
        this.incidentCommentsReplyForm.patchValue({ replay_comment: '' });
        this.incidentCommentsReplyForm.patchValue({ files: '' });
        this.incidentCommentsReplyForm.patchValue({ attachments: '' });
    };
    IncidentCommentsComponent.prototype.commentFormReset = function () {
        this.isCommentFormSubmitted = false;
        this.commentControl.comment.reset();
        this.incidentCommentsForm.patchValue({ attachments: null });
    };
    IncidentCommentsComponent.prototype.showReplayCommentBox = function (id) {
        $('#comment_replay_' + id).removeClass('d-none');
    };
    IncidentCommentsComponent.prototype.getComment = function (incidentId) {
        var _this_1 = this;
        this.incidentService.getById(incidentId).subscribe(function (data) {
            _this_1.incidentData = data;
            _this_1.incidentData.comments = _this_1.getNestedChildren(_this_1.incidentData.comments, 0);
            _this_1.comments = _this_1.incidentData.comments;
        });
    };
    IncidentCommentsComponent.prototype.getNestedChildren = function (comment, parent) {
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
    IncidentCommentsComponent.prototype.postReplayComment = function (comment) {
        var _this_1 = this;
        if (this.incidentCommentsReplyForm.value.replay_comment) {
            this.isReplayFormSubmitted = true;
            comment.parent_id = comment.id;
            comment.files = "";
            comment.comment = this.incidentCommentsReplyForm.value.replay_comment;
            this.incidentCommentsReplyForm.patchValue({ attachments: '' });
            var replyCommentValues = {
                comment: this.incidentCommentsReplyForm.value.replay_comment,
                parent_id: comment.parent_id,
                incident_id: comment.incident_id,
                user: comment.user,
                user_id: comment.user_id,
                files: "",
                attachments: "",
                replay_comment: this.incidentCommentsReplyForm.value.replay_comment
            };
            if (this.incidentCommentsReplyForm.invalid) {
                return;
            }
            this.incidentCommentsService.create(replyCommentValues)
                .subscribe(function (resp) {
                _this_1.toastr.success(_this_1.translate.instant('comments.messages.create'), _this_1.translate.instant('comments.title'));
                _this_1.getComment(_this_1.incidentId);
                _this_1.replyFormReset();
                _this_1.loadForms();
            });
        }
        else {
            this.toastr.error(this.translate.instant('comments.create.error_messages.message4'), this.translate.instant('comments.title'));
            return false;
        }
    };
    IncidentCommentsComponent.prototype.commentDelete = function (commentId) {
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
                _this_1.incidentCommentsService.delete(commentId)
                    .subscribe(function (data) {
                    _this_1.toastr.success(_this_1.translate.instant('comments.messages.delete'), _this_1.translate.instant('incidents.title'));
                    _this_1.getComment(_this_1.incidentId);
                });
            }
        });
    };
    IncidentCommentsComponent.prototype.saveComments = function (comment, index, value) {
        var _this_1 = this;
        comment[index] = value;
        this.incidentCommentsService.update(comment).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('comments.messages.update'), _this_1.translate.instant('tasks.title'));
            _this_1.getComment(_this_1.incidentId);
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IncidentCommentsComponent.prototype, "permission", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IncidentCommentsComponent.prototype, "apiUrl", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IncidentCommentsComponent.prototype, "loginUser", void 0);
    __decorate([
        ViewChild('commentdropzone', { static: false }),
        __metadata("design:type", ElementRef)
    ], IncidentCommentsComponent.prototype, "commentdropzone", void 0);
    IncidentCommentsComponent = __decorate([
        Component({
            selector: 'app-incident-comments',
            templateUrl: './incident-comments.component.html',
            styleUrls: ['./incident-comments.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            Router,
            ActivatedRoute,
            FormBuilder,
            ToastrService,
            IncidentCommentService,
            IncidentService])
    ], IncidentCommentsComponent);
    return IncidentCommentsComponent;
}());
export { IncidentCommentsComponent };
//# sourceMappingURL=incident-comments.component.js.map