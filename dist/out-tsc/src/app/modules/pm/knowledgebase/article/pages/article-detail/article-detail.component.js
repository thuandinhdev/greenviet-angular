import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BsModalService } from 'ngx-bootstrap/modal';
import { KnowledgeBaseService } from '../../../../../../core/services/knowledge-base.service';
import { EditArticleModalComponent } from './../../../article/components/edit-article-modal/edit-article-modal.component';
import { AuthenticationService } from '../../../../../../core/services/authentication.service';
import { environment } from '../../../../../../../environments/environment';
var ArticleDetailComponent = /** @class */ (function () {
    function ArticleDetailComponent(route, knowledgeBaseService, modalService, authenticationService) {
        var _this = this;
        this.route = route;
        this.knowledgeBaseService = knowledgeBaseService;
        this.modalService = modalService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.isPageLoaded = false;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    ArticleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.articleId = params.get('aid');
            _this.getArticleById(params.get('aid'));
        });
    };
    ArticleDetailComponent.prototype.getArticleById = function (articleId) {
        var _this = this;
        this.knowledgeBaseService.getArticleById(articleId)
            .subscribe(function (data) {
            _this.article = data;
            _this.isPageLoaded = true;
        });
    };
    ArticleDetailComponent.prototype.openEditArticleModal = function (articleData) {
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
            _this.getArticleById(_this.articleId);
        });
    };
    ArticleDetailComponent = __decorate([
        Component({
            selector: 'app-article-detail',
            templateUrl: './article-detail.component.html',
            styleUrls: ['./article-detail.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            KnowledgeBaseService,
            BsModalService,
            AuthenticationService])
    ], ArticleDetailComponent);
    return ArticleDetailComponent;
}());
export { ArticleDetailComponent };
//# sourceMappingURL=article-detail.component.js.map