import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { CategoryListComponent } from './../knowledgebase/pages/category-list/category-list.component';
import { ArticleDetailComponent } from './../knowledgebase/article/pages/article-detail/article-detail.component';
import { ArticleListComponent } from './../knowledgebase/article/pages/article-list/article-list.component';
var routes = [
    {
        path: '',
        component: CategoryListComponent,
        canLoad: [NgxPermissionsGuard],
        data: {
            breadcrumbs: {
                text: "breadcrumbs.knowledgebase.title",
                icon: "fa fa-graduation-cap",
                show: false,
                isHome: false
            },
            permissions: {
                only: ['admin', 'super_admin', 'knowledgebase_view']
            }
        }
    },
    {
        path: 'category/:id',
        component: ArticleListComponent,
        data: {
            breadcrumbs: {
                text: "breadcrumbs.category.title",
                icon: "fa fa-graduation-cap",
                show: false,
                isHome: false
            },
            permissions: {
                only: ['admin', 'super_admin', 'knowledgebase_view']
            }
        }
    },
    {
        path: 'category/:id/article/:aid',
        component: ArticleDetailComponent,
        data: {
            breadcrumbs: {
                text: "breadcrumbs.article.title",
                icon: "fa fa-graduation-cap",
                show: false,
                isHome: false
            },
            permissions: {
                only: ['admin', 'super_admin', 'knowledgebase_view']
            }
        }
    },
];
var KnowledgebaseRoutingModule = /** @class */ (function () {
    function KnowledgebaseRoutingModule() {
    }
    KnowledgebaseRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], KnowledgebaseRoutingModule);
    return KnowledgebaseRoutingModule;
}());
export { KnowledgebaseRoutingModule };
//# sourceMappingURL=knowledgebase-routing.module.js.map