import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var KnowledgeBaseService = /** @class */ (function () {
    function KnowledgeBaseService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    KnowledgeBaseService.prototype.create = function (knowledgeBase) {
        return this.http.post(this.apiUrl + "/api/knowledgebase-category", knowledgeBase);
    };
    KnowledgeBaseService.prototype.getAllCategory = function () {
        return this.http.get(this.apiUrl + "/api/knowledgebase-category");
    };
    KnowledgeBaseService.prototype.getCategoryById = function (id) {
        return this.http.get(this.apiUrl + "/api/knowledgebase-category/" + id);
    };
    KnowledgeBaseService.prototype.getArticalByCategoryId = function (categoryId) {
        return this.http.get(this.apiUrl + "/api/knowledgebase-category/" + categoryId);
    };
    KnowledgeBaseService.prototype.updateCategory = function (knowledgeBase) {
        return this.http.put(this.apiUrl + "/api/knowledgebase-category/" + knowledgeBase.id, knowledgeBase);
    };
    KnowledgeBaseService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/knowledgebase-category/" + id);
    };
    KnowledgeBaseService.prototype.search = function (search) {
        return this.http.get(this.apiUrl + "/api/knowledgebase-category/search?search=" + search);
    };
    KnowledgeBaseService.prototype.createArtical = function (articles) {
        return this.http.post(this.apiUrl + "/api/knowledgebase-article", articles);
    };
    KnowledgeBaseService.prototype.getArticleById = function (id) {
        return this.http.get(this.apiUrl + "/api/knowledgebase-article/" + id);
    };
    KnowledgeBaseService.prototype.updateArticle = function (articles) {
        return this.http.put(this.apiUrl + "/api/knowledgebase-article/" + articles.id, articles);
    };
    KnowledgeBaseService.prototype.deleteArticle = function (id) {
        return this.http.delete(this.apiUrl + "/api/knowledgebase-article/" + id);
    };
    KnowledgeBaseService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], KnowledgeBaseService);
    return KnowledgeBaseService;
}());
export { KnowledgeBaseService };
//# sourceMappingURL=knowledge-base.service.js.map