import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { KnowledgeBaseService } from './../../../../../../core/services/knowledge-base.service';
var CategoryArticlesTreeComponent = /** @class */ (function () {
    function CategoryArticlesTreeComponent(router, route, knowledgeBaseService) {
        this.router = router;
        this.route = route;
        this.knowledgeBaseService = knowledgeBaseService;
        this.basURL = window.location.origin;
    }
    CategoryArticlesTreeComponent.prototype.ngOnInit = function () {
        this.getAllCategoryArticles();
    };
    CategoryArticlesTreeComponent.prototype.getAllCategoryArticles = function () {
        var _this = this;
        this.knowledgeBaseService.getAllCategory()
            .subscribe(function (data) {
            _this.categoryLists = data;
            setTimeout(function () {
                $('#jstree1').jstree({
                    'core': {
                        'themes': {
                            'name': 'default',
                            'responsive': true
                        },
                        'check_callback': true
                    }
                }).bind("changed.jstree", function (e, data) {
                    if (data.node) {
                        document.location = data.node.a_attr.href;
                    }
                });
            });
        });
    };
    CategoryArticlesTreeComponent = __decorate([
        Component({
            selector: 'category-articles-tree',
            templateUrl: './category-articles-tree.component.html',
            styleUrls: ['./category-articles-tree.component.scss']
        }),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute,
            KnowledgeBaseService])
    ], CategoryArticlesTreeComponent);
    return CategoryArticlesTreeComponent;
}());
export { CategoryArticlesTreeComponent };
//# sourceMappingURL=category-articles-tree.component.js.map