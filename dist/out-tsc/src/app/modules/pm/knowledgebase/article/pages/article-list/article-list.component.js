import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { KnowledgeBaseService } from './../../../../../../core/services/knowledge-base.service';
import { CreateArticalModalComponent } from './../../../article/components/create-artical-modal/create-artical-modal.component';
import { EditArticleModalComponent } from './../../../article/components/edit-article-modal/edit-article-modal.component';
import { EditCategoryModalComponent } from './../../components/edit-category-modal/edit-category-modal.component';
var ArticleListComponent = /** @class */ (function () {
    function ArticleListComponent(translate, toastr, router, http, route, modalService, knowledgeBaseService) {
        this.translate = translate;
        this.toastr = toastr;
        this.router = router;
        this.http = http;
        this.route = route;
        this.modalService = modalService;
        this.knowledgeBaseService = knowledgeBaseService;
        this.isPageLoaded = false;
    }
    ArticleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.getArticalByCategoryId(params.get('id'));
        });
    };
    ArticleListComponent.prototype.openCreateArticleModal = function (categoryData) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                category: categoryData,
            }
        };
        this.modalRef = this.modalService.show(CreateArticalModalComponent, modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getArticalByCategoryId(_this.category.id);
        });
    };
    ArticleListComponent.prototype.openEditArticleModal = function (articleData) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered animated fadeIn",
            initialState: {
                article: articleData,
            }
        };
        this.modalRef = this.modalService.show(EditArticleModalComponent, modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getArticalByCategoryId(articleData.category_id);
        });
    };
    ArticleListComponent.prototype.getArticalByCategoryId = function (categoryId) {
        var _this = this;
        this.knowledgeBaseService.getArticalByCategoryId(categoryId)
            .subscribe(function (data) {
            _this.category = data;
            _this.isPageLoaded = true;
        });
    };
    ArticleListComponent.prototype.getCategoryById = function (categoryId) {
        var _this = this;
        this.knowledgeBaseService.getCategoryById(categoryId)
            .subscribe(function (data) {
            _this.category = data;
            _this.isPageLoaded = true;
        });
    };
    ArticleListComponent.prototype.editCategory = function (category) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered animated fadeIn",
            initialState: {
                category: category,
            }
        };
        this.modalRef = this.modalService.show(EditCategoryModalComponent, modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getCategoryById(category.id);
        });
    };
    ArticleListComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('knowledge_base.category.title1'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.knowledgeBaseService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('knowledge_base.category.messages.delete'), _this.translate.instant('knowledge_base.category.title'));
                    _this.router.navigate(['/knowledgebase']);
                });
            }
        });
    };
    ArticleListComponent.prototype.deleteArticle = function (id) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('knowledge_base.article.title2'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.knowledgeBaseService.deleteArticle(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('knowledge_base.article.messages.delete'), _this.translate.instant('knowledge_base.article.title'));
                    _this.router.navigate(['/knowledgebase']);
                });
            }
        });
    };
    ArticleListComponent = __decorate([
        Component({
            selector: 'app-article-list',
            templateUrl: './article-list.component.html',
            styleUrls: ['./article-list.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            Router,
            HttpClient,
            ActivatedRoute,
            BsModalService,
            KnowledgeBaseService])
    ], ArticleListComponent);
    return ArticleListComponent;
}());
export { ArticleListComponent };
//# sourceMappingURL=article-list.component.js.map