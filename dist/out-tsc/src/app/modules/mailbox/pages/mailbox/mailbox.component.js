import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { FileUploader } from 'ng2-file-upload';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { MailService } from '../../../../core/services/mail.service';
import { UserService } from '../../../../core/services/user.service';
import { environment } from '../../../../../environments/environment';
var MailboxComponent = /** @class */ (function () {
    function MailboxComponent(translate, authenticationService, mailService, userService, toastr, formBuilder) {
        var _this = this;
        this.translate = translate;
        this.authenticationService = authenticationService;
        this.mailService = mailService;
        this.userService = userService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.apiUrl = environment.apiUrl;
        this.scrollConfig = {};
        this.resData = {};
        this.mailDetails = {};
        this.mailboxData = {};
        this.tableData = {};
        this.tableParams = {};
        this.mail_checked = [];
        this.submitted = false;
        this.isMailLoaded = false;
        this.attachmentsArr = [];
        this.mailboxUsers = [];
        this.mailboxEmailsUsers = [];
        this.loginToken = this.authenticationService.currentTokenValue;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.toggle(true, false, false);
        this.loadFileUploader();
    }
    MailboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setTableParams();
        this.tableParams.length = 5;
        this.tableParams.emailType = 'inbox';
        this.tableParams.trashType = 'inbox';
        this.getMail(this.tableParams.emailType);
        this.uploader.onBeforeUploadItem = function (item) {
            item.withCredentials = false;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            if (!isNaN(response)) {
                _this.attachmentsArr.push(response);
                _this.toastr.success(_this.translate.instant('mailbox.messages.message'), _this.translate.instant('mailbox.title'));
            }
        };
        this.userService.getMailUsers().subscribe(function (resp) {
            _this.mailboxEmailsUsers = resp;
            resp.forEach(function (user) {
                _this.mailboxUsers.push({ value: user.id, label: user.firstname + ' ' + user.lastname });
            });
        });
    };
    MailboxComponent.prototype.loadFileUploader = function () {
        this.uploader = new FileUploader({
            url: this.apiUrl + '/api/mailbox/files/upload',
            method: 'post',
            authToken: this.loginToken.token_type + ' ' + this.loginToken.token,
            removeAfterUpload: false,
            autoUpload: true,
            isHTML5: true,
        });
        this.hasBaseDropZoneOver = false;
    };
    MailboxComponent.prototype.getMail = function (emailType, trashType) {
        var _this = this;
        if (trashType === void 0) { trashType = this.tableParams.trashType; }
        this.toggle(true, false, false);
        if (emailType != this.tableParams.emailType) {
            this.tableParams.emailType = emailType;
            this.setTableParams();
        }
        if (trashType != this.tableParams.trashType && trashType != '') {
            this.tableParams.trashType = trashType;
            this.setTableParams();
        }
        var reqObj = {
            type: this.tableParams.emailType,
            trashType: this.tableParams.trashType,
            search: this.txtSearch,
            currentPage: this.tableParams.currentPage,
            length: this.tableParams.length,
            start: (this.tableParams.currentPage - 1) * this.tableParams.length,
        };
        this.mailService.getAll(reqObj).subscribe(function (resp) {
            _this.mailboxData = resp;
            _this.tableData = {
                listData: _this.mailboxData.mailbox,
                countUnRead: _this.mailboxData.countUnRead,
                countDraft: _this.mailboxData.countDraft,
                totalPage: _this.mailboxData.totalPage,
                totalData: _this.mailboxData.totalData,
            };
        });
    };
    MailboxComponent.prototype.search = function () {
        this.setTableParams();
        this.getMail(this.tableParams.emailType);
    };
    MailboxComponent.prototype.setPage = function (currentPage) {
        var isPageSet = true;
        if (currentPage < 1) {
            currentPage = 1;
            isPageSet = false;
        }
        else if (currentPage > this.tableData.totalPage) {
            currentPage = this.tableData.totalPage;
            isPageSet = false;
        }
        this.tableParams.currentPage = currentPage;
        if (isPageSet) {
            this.getMail(this.tableParams.emailType);
        }
    };
    MailboxComponent.prototype.setTableParams = function () {
        this.tableParams.start = 0;
        this.tableParams.currentPage = 1;
    };
    MailboxComponent.prototype.markAsRead = function () {
        var _this = this;
        var mailObj = {
            ids: this.mail_checked
        };
        if (this.mail_checked.length <= 0) {
            this.toastr.error(this.translate.instant('mailbox.messages.message2'), this.translate.instant('mailbox.title'));
            return false;
        }
        this.mailService.markAsRead(mailObj).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('mailbox.messages.message8'), _this.translate.instant('mailbox.title'));
            _this.referesh();
        });
    };
    MailboxComponent.prototype.markAsFavourite = function () {
        var _this = this;
        var mailObj = {
            ids: this.mail_checked
        };
        if (this.mail_checked.length <= 0) {
            this.toastr.error(this.translate.instant('mailbox.messages.message2'), this.translate.instant('mailbox.title'));
            return false;
        }
        this.mailService.markAsFavourite(mailObj).subscribe(function (data) {
            _this.toastr.success(_this.mail_checked.length + _this.translate.instant('mailbox.messages.message7'), _this.translate.instant('mailbox.title'));
            _this.referesh();
        });
    };
    MailboxComponent.prototype.setUnFavouriteMail = function (id) {
        var _this = this;
        var mailObj = {
            id: id
        };
        this.mailService.setUnFavouriteMail(mailObj).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('mailbox.messages.message6'), _this.translate.instant('mailbox.title'));
            _this.referesh();
        });
    };
    MailboxComponent.prototype.moveToTrash = function () {
        var _this = this;
        var mailObj = {
            ids: this.mail_checked
        };
        if (this.mail_checked.length <= 0) {
            this.toastr.error(this.translate.instant('mailbox.messages.message2'), this.translate.instant('mailbox.title'));
            return false;
        }
        this.mailService.removeMarkMails(mailObj).subscribe(function (data) {
            _this.toastr.success(_this.mail_checked.length + _this.translate.instant('mailbox.messages.message5'), _this.translate.instant('mailbox.title'));
            _this.referesh();
        });
    };
    MailboxComponent.prototype.composeMail = function () {
        this.toggle(false, true, false);
        this.attachmentsArr = [];
        this.composeMailForm = this.formBuilder.group({
            to: ['', Validators.required],
            subject: ['', Validators.required],
            message_body: [''],
        });
    };
    Object.defineProperty(MailboxComponent.prototype, "mailForm", {
        get: function () { return this.composeMailForm.controls; },
        enumerable: false,
        configurable: true
    });
    MailboxComponent.prototype.onSubmit = function (type) {
        var _this = this;
        this.submitted = true;
        if (this.composeMailForm.invalid) {
            return;
        }
        var mailComObj = {
            type: type,
            to: this.composeMailForm.value.to,
            subject: this.composeMailForm.value.subject,
            message_body: this.composeMailForm.value.message_body,
            attachments: this.attachmentsArr,
        };
        this.mailService.create(mailComObj).subscribe(function (data) {
            if (type == 'draft') {
                _this.toastr.success(_this.translate.instant('mailbox.messages.message9'), _this.translate.instant('mailbox.title'));
            }
            else {
                _this.toastr.success(_this.translate.instant('mailbox.messages.message3'), _this.translate.instant('mailbox.title'));
            }
            _this.toggle(true, false, false);
        });
    };
    // View mail.
    MailboxComponent.prototype.mailView = function (id, type) {
        var _this = this;
        this.isMailLoaded = false;
        this.mailboxType = type;
        this.mailService.findById(id).subscribe(function (resp) {
            _this.resData = resp;
            _this.mailDetails = _this.resData.mailbox;
            _this.toggle(false, false, true);
            _this.isMailLoaded = true;
        });
    };
    MailboxComponent.prototype.deleteMail = function (id) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('mailbox.title20'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.mailService.destroy(id).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('mailbox.messages.message4'), _this.translate.instant('mailbox.title'));
                    _this.getMail(_this.tableParams.emailType);
                });
            }
        });
    };
    MailboxComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    MailboxComponent.prototype.uploaderRemove = function (id) {
        var _this = this;
        var index = this.attachmentsArr.indexOf(id);
        if (index > -1) {
            var dataObj = {
                id: id,
            };
            this.mailService.removeAttachments(dataObj).subscribe(function (data) {
                _this.toastr.success(_this.translate.instant('mailbox.messages.message1'), _this.translate.instant('mailbox.title'));
            });
            this.attachmentsArr.splice(index, 1);
        }
    };
    MailboxComponent.prototype.toggle = function (mailboxViewable, composeViewable, mailviewViewable) {
        this.mailboxViewable = mailboxViewable;
        this.composeViewable = composeViewable;
        this.mailviewViewable = mailviewViewable;
    };
    MailboxComponent.prototype.referesh = function () {
        this.mail_checked = [];
        this.getMail(this.tableParams.emailType);
    };
    MailboxComponent.prototype.getSentUser = function (email) {
        for (var iRow in this.mailboxEmailsUsers) {
            if (this.mailboxEmailsUsers[iRow].email == email) {
                return this.mailboxEmailsUsers[iRow].firstname + ' ' + this.mailboxEmailsUsers[iRow].lastname;
            }
        }
    };
    MailboxComponent = __decorate([
        Component({
            selector: 'app-mailbox',
            templateUrl: './mailbox.component.html',
            styleUrls: ['./mailbox.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            AuthenticationService,
            MailService,
            UserService,
            ToastrService,
            FormBuilder])
    ], MailboxComponent);
    return MailboxComponent;
}());
export { MailboxComponent };
//# sourceMappingURL=mailbox.component.js.map