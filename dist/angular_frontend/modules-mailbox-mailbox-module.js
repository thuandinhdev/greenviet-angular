(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-mailbox-mailbox-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mailbox/pages/mailbox/mailbox.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mailbox/pages/mailbox/mailbox.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"mailbox-page\">\n\t<div class=\"card pl-2 pr-2\">\n\t\t<div class=\"row\">\n\t\t\t<!-- Sidebar -->\n\t\t\t<div class=\"col-lg-3\">\n\t\t\t\t<div class=\"sidebar-content\">\n\t\t\t\t\t<div class=\"card-header pl-0\">\n\t\t\t\t\t\t<h4 class=\"card-title\">{{'mailbox.title' | translate}} {{tableData.length}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button class=\"btn btn-create\" (click)=\"composeMail()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'mailbox_create']\"><i class=\"fa fa-plus\"></i><span>{{'mailbox.title2' | translate}}</span></button>\n\t\t\t\t\t<div class=\"list-group-mail\" [perfectScrollbar]=\"scrollConfig\">\n\t\t\t\t\t\t<h5>{{'mailbox.title19' | translate}}</h5>\n\t\t\t\t\t\t<div class=\"list-group list-group-messages no-border\">\n\t\t\t\t\t\t\t<a class=\"list-group-item no-border\" (click)=\"getMail('inbox', 'inbox')\" [ngClass]=\"{'active': tableParams.trashType == 'inbox'}\"><i class=\"ft-inbox mr-1\"></i> {{'mailbox.title4' | translate}}<span class=\"badge badge-dark badge-pill float-right\">{{tableData.countUnRead}}</span></a>\n\t\t\t\t\t\t\t<a class=\"list-group-item list-group-item-action no-border\" (click)=\"getMail('sent', 'sent')\" [ngClass]=\"{'active': tableParams.trashType == 'sent'}\"><i class=\"fa fa-paper-plane-o mr-1\"></i> {{'mailbox.title5' | translate}}</a>\n\t\t\t\t\t\t\t<a class=\"list-group-item list-group-item-action no-border\" (click)=\"getMail('draft', 'draft')\" [ngClass]=\"{'active': tableParams.trashType == 'draft'}\"><i class=\"ft-file mr-1\"></i> {{'mailbox.title6' | translate}}</a>\n\t\t\t\t\t\t\t<a class=\"list-group-item list-group-item-action no-border\" (click)=\"getMail('favourite', 'favourite')\" [ngClass]=\"{'active': tableParams.trashType == 'favourite'}\"><i class=\"ft-star mr-1\"></i> {{'mailbox.title7' | translate}}<span class=\"badge badge-danger badge-pill float-right\">{{tableData.countDraft}}</span></a>\n\t\t\t\t\t\t\t<a class=\"list-group-item list-group-item-action no-border\" (click)=\"getMail('trash', 'inbox')\" [ngClass]=\"{'active': tableParams.trashType == 'trash'}\"><i class=\"ft-trash-2 mr-1\"></i> {{'mailbox.title8' | translate}}</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<!-- Inbox -->\n\t\t\t<div class=\"col-lg-9 pr-4 pl-sm-3 pl-3 border-left\" *ngIf=\"mailboxViewable\">\n\t\t\t\t<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t\t\t\t\t<h4 class=\"card-title mt-3\" *ngIf=\"tableParams.emailType == 'inbox'\">{{tableParams.emailType | titlecase }} ({{tableData.countUnRead}})</h4>\n\t\t\t\t\t<h4 class=\"card-title mt-3\" *ngIf=\"tableParams.emailType != 'inbox'\">{{tableParams.emailType | titlecase }} ({{tableData.totalData}})</h4>\n\t\t\t\t\t<!-- Search -->\n\t\t\t\t\t<div class=\"card-buttons d-flex\" *ngIf=\"tableData.totalData != 0\">\n\t\t\t\t\t\t<div class=\"btn-round-search mr-1\">\n\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t<div class=\"input-group mb-0\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"{{'mailbox.title1' | translate}}\" aria-describedby=\"button-addon2\" name=\"txtSearch\" [(ngModel)]='txtSearch'>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-raised btn-round\" type=\"button\" type=\"submit\" (click)=\"search()\"><i class=\"fa fa-search\"></i></button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mail-box-header\" *ngIf=\"tableData.totalData != 0\">\n\t\t\t\t\t<div class=\"mail-tools d-flex justify-content-between\">\n\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t<button class=\"btn\" tooltip=\"{{'mailbox.title12' | translate}}\" (click)=\"referesh()\"><i class=\"fa fa-refresh\"></i></button>\n\t\t\t\t\t\t\t<!-- Trash -->\n\t\t\t\t\t\t\t<ng-container *ngIf=\"tableParams.emailType == 'trash'\">\n\t\t\t\t\t\t\t\t<button class=\"btn\" tooltip=\"{{'mailbox.title4' | translate}}\" (click)=\"getMail('trash', 'inbox')\" [ngClass]=\"{'active': tableParams.trashType == 'inbox'}\"><i class=\"ft-inbox\"></i></button>\n\t\t\t\t\t\t\t\t<button class=\"btn\" tooltip=\"{{'mailbox.title5' | translate}}\" (click)=\"getMail('trash', 'sent')\" [ngClass]=\"{'active': tableParams.trashType == 'sent'}\"><i class=\"fa fa-paper-plane-o\"></i></button>\n\t\t\t\t\t\t\t\t<button class=\"btn\" tooltip=\"{{'mailbox.title6' | translate}}\" (click)=\"getMail('trash', 'draft')\" [ngClass]=\"{'active': tableParams.trashType == 'draft'}\"><i class=\"ft-star\"></i></button>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<!-- Inbox -->\n\t\t\t\t\t\t\t<ng-container *ngIf=\"tableParams.emailType == 'inbox'\">\n\t\t\t\t\t\t\t\t<button class=\"btn\" tooltip=\"{{'mailbox.title13' | translate}}\" (click)=\"markAsRead()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'mailbox_edit']\"><i class=\"fa fa-eye\"></i></button>\n\t\t\t\t\t\t\t\t<button class=\"btn\" tooltip=\"{{'mailbox.title14' | translate}}\" (click)=\"markAsFavourite()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'mailbox_edit']\"><i class=\"fa fa-exclamation\"></i></button>\n\t\t\t\t\t\t\t\t<button class=\"btn\" tooltip=\"{{'mailbox.title15' | translate}}\" (click)=\"moveToTrash()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'mailbox_delete']\"><i class=\"fa fa-trash-o\"></i></button>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- Pagination -->\n\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t<button class=\"btn\" [ngClass]=\"{disabled:tableParams.currentPage === 1 || tableData.totalPage === 0}\" (click)=\"setPage(tableParams.currentPage - 1)\"><i class=\"fa fa-arrow-left\"></i></button>\n\t\t\t\t\t\t\t<button class=\"btn\" [ngClass]=\"{disabled:tableParams.currentPage === tableData.totalPage ||  tableData.totalPage === 0}\" (click)=\"setPage(tableParams.currentPage + 1)\"><i class=\"fa fa-arrow-right\"></i></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Email list -->\n\t\t\t\t<div class=\"mail-box\">\n\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t<table class=\"table table-hover table-mail\">\n\t\t\t\t\t\t\t<tbody *ngIf=\"tableData.totalData != 0\">\n\t\t\t\t\t\t\t\t<tr class=\"unread\" class=\"{{ ( mail.view_status == 1 ) ? 'read' : 'unread' }}\" *ngFor=\"let mail of tableData.listData; index as i\">\n\t\t\t\t\t\t\t\t\t<td *ngIf=\"tableParams.emailType == 'inbox'\" class=\"check-mail\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-container\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-control\" [(checklist)]=\"mail_checked\" [checklistValue]=\"mail.id\" name=\"mail_check_{{i}}\" />\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"mail.favourites == 1 && tableParams.emailType != 'trash'\">\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"setUnFavouriteMail(mail.id)\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'mailbox_edit']\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star fa-lg text-warning\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td class=\"mail-contact\">\n\t\t\t\t\t\t\t\t\t\t<div *ngxPermissionsOnly=\"['admin', 'super_admin', 'mailbox_view']; else elseBlock1; then thenBlock1\"></div>\n\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock1></ng-template>\n\t\t\t\t\t\t\t\t\t\t<ng-template #thenBlock1>\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"tableParams.emailType == 'inbox' || tableParams.emailType == 'favourite'\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"mailView(mail.id, 'inbox')\" tooltip=\"{{ getSentUser(mail.from) | titlecase }}\" placement=\"bottom\" [tooltipAnimation]=\"true\">{{ getSentUser(mail.from) | titlecase }}</a>\t\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"tableParams.emailType == 'sent'\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"mailView(mail.id, 'sent')\" tooltip=\"{{ getSentUser(mail.to) | titlecase }}\" placement=\"bottom\" [tooltipAnimation]=\"true\">{{ getSentUser(mail.to) | titlecase }}</a>\t\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template *ngIf=\"tableParams.emailType == 'draft' || tableParams.emailType == 'trash'\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"mailView(mail.id, 'draft')\" tooltip=\"{{ getSentUser(mail.user.email) | titlecase }}\" placement=\"bottom\" [tooltipAnimation]=\"true\">{{ getSentUser(mail.user.email) | titlecase }}</a>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td class=\"mail-subject\">\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"tableParams.emailType == 'trash'\" tooltip=\"{{ mail.subject }}\" placement=\"bottom\" [tooltipAnimation]=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t{{mail.subject}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"tableParams.emailType != 'trash'\">\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"mailView(mail.id)\" tooltip=\"{{ mail.subject }}\" placement=\"bottom\" [tooltipAnimation]=\"true\">{{mail.subject}}</a>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"tableParams.emailType != 'trash'\">\n\t\t\t\t\t\t\t\t\t\t\t<i *ngIf=\"mail.attachments?.length\" class=\"fa fa-paperclip\" (click)=\"mailView(mail.id)\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-right mail-date\" >\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"tableParams.emailType == 'trash'\">\n\t\t\t\t\t\t\t\t\t\t\t{{ mail.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"tableParams.emailType != 'trash'\">\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"mailView(mail.id)\">{{ mail.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}</a>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t<tbody *ngIf=\"tableData.totalData == 0\" class=\"tfoot_dt\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td colspan=\"6\" class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/norecord-img.png\" width=\"50\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"mt-1\">{{'common.empty_message.mails' | translate}}</p>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<!-- Compose mail -->\n\t\t\t<div class=\"col-lg-9 pr-4 pl-sm-3 pl-3 border-left\" *ngIf=\"composeViewable\">\n\t\t\t\t<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t\t\t\t\t<h4 class=\"card-title mt-2\">{{'mailbox.title3' | translate}}</h4>\n\t\t\t\t\t<div class=\"card-buttons\">\n\t\t\t\t\t\t<button class=\"btn btn-cancel btn-sm mb-0\" (click)=\"onSubmit('draft')\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'mailbox_create']\" tooltip=\"{{'mailbox.title16' | translate}}\"><i class=\"fa fa-pencil\"></i> {{'mailbox.title6' | translate}}</button>\n\t\t\t\t\t\t<button class=\"btn btn-submit btn-sm mb-0\" (click)=\"getMail('inbox')\" tooltip=\"{{'mailbox.title17' | translate}}\"><i class=\"fa fa-times\"></i> {{'mailbox.title9' | translate}}</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"compose-box pt-3\">\n\t\t\t\t\t<form [formGroup]=\"composeMailForm\" (ngSubmit)=\"onSubmit('inbox')\">\n\t\t\t\t\t\t<div class=\"mail-body\">\n\t\t\t\t\t\t\t<div class=\"form-group row\" [ngClass]=\"{ 'is-invalid': submitted && mailForm.to.errors }\">\n\t\t\t\t\t\t\t\t<label class=\"col-sm-2\">{{'mailbox.compose.fields.to' | translate}}:</label>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t[items]=\"mailboxUsers\"\n\t\t\t\t\t\t\t\t\t\t[multiple]=\"true\"\n\t\t\t\t\t\t\t\t\t\t[closeOnSelect]=\"true\"\n\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\tbindValue=\"value\"\n\t\t\t\t\t\t\t\t\t\tlabelForId=\"to\"\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'mailbox.compose.placeholders.placeholder1' | translate}}\"\n\t\t\t\t\t\t\t\t\t\tformControlName=\"to\">\n\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && mailForm.to.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"mailForm.to.errors.required\">{{'mailbox.compose.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-sm-2\">{{'mailbox.compose.fields.subject' | translate}}:</label>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"subject\" id=\"subject\" placeholder=\"{{'mailbox.compose.placeholders.placeholder2' | translate}}\" [ngClass]=\"{ 'is-invalid': submitted && mailForm.subject.errors }\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && mailForm.subject.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"mailForm.subject.errors.required\">{{'mailbox.compose.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t<app-ngx-editor [config]=\"editorConfig\" formControlName=\"message_body\" id=\"message_body\"></app-ngx-editor>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t<!-- Attachements -->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t<label class=\"btn btn-raised btn-info round btn-file\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple class=\"d-none\" />\n\t\t\t\t\t\t\t\t\t\t<span class=\"fa fa-paperclip\">&nbsp;{{'mailbox.title11' | translate}}</span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\" *ngIf=\"uploader.queue.length != 0\">\n\t\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-hover b4-datatable\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th width=\"50%\">{{'mailbox.compose.columns.name' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'mailbox.compose.columns.size' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'mailbox.compose.columns.progress' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'mailbox.compose.columns.status' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'mailbox.compose.columns.actions' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of uploader.queue; index as i\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><strong>{{ item?.file?.name }}</strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"uploader.options.isHTML5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<progressbar max=\"100\" [value]=\"item.progress\" [animate]=\"true\" [striped]=\"true\"></progressbar>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"item.isSuccess\" class=\"completed\">{{'common.status.success' | translate}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"item.isCancel\" class=\"cancel\">{{'common.status.cancel' | translate}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"item.isError\" class=\"closed\">{{'common.status.error' | translate}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"actions-dropdown\">\n\t\t\t\t\t\t\t                            <div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t                                <button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t                                <ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n\t\t\t\t\t\t\t                                    <li role=\"menuitem\">\n\t\t\t\t\t\t\t                                        <a (click)=\"item.remove();uploaderRemove(attachmentsArr[i])\" class=\"dropdown-item btn btn-danger btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t                                    </li>\n\t\t\t\t\t\t\t                                </ul>\n\t\t\t\t\t\t\t                            </div>\n\t\t\t\t\t\t\t                        </td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mail-foote text-right\">\n\t\t\t\t\t\t\t<button class=\"btn btn-submit btn-sm\" tooltip=\"{{'mailbox.title10' | translate}}\"><i class=\"fa fa-reply\"></i> {{'mailbox.title10' | translate}}</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<!-- Mail view -->\n\t\t\t<div class=\"col-lg-9 pr-4 pl-sm-3 pl-3 border-left\" *ngIf=\"mailviewViewable && isMailLoaded\">\n\t\t\t\t<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t\t\t\t\t<h4 class=\"card-title mt-2\">{{'mailbox.title18' | translate}}</h4>\n\t\t\t\t\t<div class=\"card-buttons\">\n\t\t\t\t\t\t<button class=\"btn btn-submit btn-action-icon mb-0 btn-round\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'mailbox_delete']\" (click)='deleteMail(mailDetails.id)' tooltip=\"{{'mailbox.title17' | translate}}\"><i class=\"fa fa-trash-o\"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"mail-tools-head d-flex justify-content-between pt-3\">\n\t\t\t\t\t\t<div class=\"mail-head-sub\">\n\t\t\t\t\t\t\t<h2><span>{{'mailbox.compose.fields.subject' | translate}}: </span>{{ mailDetails.subject }}</h2>\n\t\t\t\t\t\t\t<ng-container *ngIf=\"mailboxType == 'inbox'\">\n\t\t\t\t\t\t\t\t<h6><span>{{'mailbox.compose.fields.from' | translate}}: </span>{{ getSentUser(mailDetails.from) }}</h6>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-container *ngIf=\"mailboxType == 'sent'\">\n\t\t\t\t\t\t\t\t<h6><span>{{'mailbox.compose.fields.from' | translate}}: </span>{{ getSentUser(mailDetails.to) }}</h6>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-container *ngIf=\"mailboxType == 'draft'\">\n\t\t\t\t\t\t\t\t<h6><span>{{'mailbox.compose.fields.from' | translate}}: </span>{{ getSentUser(mailDetails.user.email) }}</h6>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mail-head-time\">\n\t\t\t\t\t\t\t<span>{{ mailDetails.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mail-message\">\n\t\t\t\t\t\t<div [innerHTML]=\"mailDetails.message_body\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mail-attachment\">\n\t\t\t\t\t\t<p class=\"mail-attachment-child\">\n\t\t\t\t\t\t\t<span><i class=\"fa fa-paperclip\"></i> {{ mailDetails.attachments?.length || '0' }} {{'mailbox.title11' | translate}}</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-xl-4 col-md-6\" *ngFor=\"let mail of mailDetails.attachments; index as i\">\n\t\t\t\t\t\t\t\t<div class=\"file-browser\">\n\t\t\t\t\t\t\t\t\t<div class=\"file-box\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"files\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"{{ apiUrl }}/uploads/mailbox/{{mail.file_hash}}\" download=\"{{mail.file_name}}\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"mail.file_extension == 'jpg' || mail.file_extension == 'png'; else elseBlock\" class=\"image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"image\" class=\"img-fluid height-100\" src=\"{{ apiUrl }}/uploads/mailbox/{{mail.file_hash}}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon docx\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-file\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"file-name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>{{ mail.file_name }}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Added: {{ mail.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"corner\"></span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>");

/***/ }),

/***/ "./src/app/core/services/mail.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/mail.service.ts ***!
  \***********************************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var MailService = /** @class */ (function () {
    function MailService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    MailService.prototype.create = function (emailCompose) {
        return this.http.post(this.apiUrl + "/api/mailbox", emailCompose);
    };
    MailService.prototype.getAll = function (reqObj) {
        return this.http.post(this.apiUrl + "/api/all-mailbox", reqObj);
    };
    MailService.prototype.findById = function (id) {
        return this.http.get(this.apiUrl + "/api/mailbox/" + id);
    };
    MailService.prototype.destroy = function (id) {
        return this.http.delete(this.apiUrl + "/api/mailbox/" + id);
    };
    MailService.prototype.markAsRead = function (mailObj) {
        return this.http.post(this.apiUrl + "/api/mailbox/reads", mailObj);
    };
    MailService.prototype.markAsFavourite = function (mailObj) {
        return this.http.post(this.apiUrl + "/api/mailbox/favourite", mailObj);
    };
    MailService.prototype.removeMarkMails = function (mailObj) {
        return this.http.post(this.apiUrl + "/api/mailbox/remove", mailObj);
    };
    MailService.prototype.removeAttachments = function (dataObj) {
        return this.http.post(this.apiUrl + "/api/mailbox/attachment/remove", dataObj);
    };
    MailService.prototype.setUnFavouriteMail = function (dataObj) {
        return this.http.post(this.apiUrl + "/api/mailbox/unfavourite", dataObj);
    };
    MailService.prototype.getUnReadMails = function (length) {
        return this.http.post(this.apiUrl + "/api/mailbox/unread-emails", { length: length });
    };
    MailService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MailService);
    return MailService;
}());



/***/ }),

/***/ "./src/app/modules/mailbox/mailbox-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/mailbox/mailbox-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MailboxRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailboxRoutingModule", function() { return MailboxRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/mailbox/mailbox.component */ "./src/app/modules/mailbox/pages/mailbox/mailbox.component.ts");




var routes = [
    {
        path: '',
        children: [
            { path: '', component: _pages_mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_3__["MailboxComponent"] },
        ]
    }
];
var MailboxRoutingModule = /** @class */ (function () {
    function MailboxRoutingModule() {
    }
    MailboxRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MailboxRoutingModule);
    return MailboxRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/mailbox/mailbox.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/mailbox/mailbox.module.ts ***!
  \***************************************************/
/*! exports provided: MailboxModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailboxModule", function() { return MailboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var angular_checklist__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-checklist */ "./node_modules/angular-checklist/dist/index.js");
/* harmony import */ var angular_checklist__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular_checklist__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _mailbox_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mailbox-routing.module */ "./src/app/modules/mailbox/mailbox-routing.module.ts");
/* harmony import */ var _pages_mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/mailbox/mailbox.component */ "./src/app/modules/mailbox/pages/mailbox/mailbox.component.ts");


















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var MailboxModule = /** @class */ (function () {
    function MailboxModule() {
    }
    MailboxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_17__["MailboxComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _mailbox_routing_module__WEBPACK_IMPORTED_MODULE_16__["MailboxRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_6__["NgxEditorModule"],
                angular_checklist__WEBPACK_IMPORTED_MODULE_14__["ChecklistModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__["FileUploadModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_9__["NgxPermissionsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_8__["ProgressbarModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"]
            ],
            providers: [{
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }]
        })
    ], MailboxModule);
    return MailboxModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/mailbox/pages/mailbox/mailbox.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/mailbox/pages/mailbox/mailbox.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbGJveC9wYWdlcy9tYWlsYm94L21haWxib3guY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/mailbox/pages/mailbox/mailbox.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/mailbox/pages/mailbox/mailbox.component.ts ***!
  \********************************************************************/
/*! exports provided: MailboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailboxComponent", function() { return MailboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_mail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/mail.service */ "./src/app/core/services/mail.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");












var MailboxComponent = /** @class */ (function () {
    function MailboxComponent(translate, authenticationService, mailService, userService, toastr, formBuilder) {
        var _this = this;
        this.translate = translate;
        this.authenticationService = authenticationService;
        this.mailService = mailService;
        this.userService = userService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].apiUrl;
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
        this.editorConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_10__["editorConfig"];
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
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({
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
            to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message_body: [''],
        });
    };
    Object.defineProperty(MailboxComponent.prototype, "mailForm", {
        get: function () { return this.composeMailForm.controls; },
        enumerable: true,
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
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
    MailboxComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
        { type: _core_services_mail_service__WEBPACK_IMPORTED_MODULE_8__["MailService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    MailboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mailbox',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mailbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mailbox/pages/mailbox/mailbox.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mailbox.component.scss */ "./src/app/modules/mailbox/pages/mailbox/mailbox.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
            _core_services_mail_service__WEBPACK_IMPORTED_MODULE_8__["MailService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], MailboxComponent);
    return MailboxComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-mailbox-mailbox-module.js.map