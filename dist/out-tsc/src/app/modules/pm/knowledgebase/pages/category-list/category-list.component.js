import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CreateCategoryModalComponent } from './../../category/components/create-category-modal/create-category-modal.component';
import { KnowledgeBaseService } from './../../../../../core/services/knowledge-base.service';
import { environment } from '../../../../../../environments/environment';
var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(modalService, formBuilder, knowledgeBaseService) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.knowledgeBaseService = knowledgeBaseService;
        this.apiUrl = environment.apiUrl;
        this.isPageLoaded = false;
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered animated fadeIn"
        };
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        this.getAllCategory();
    };
    CategoryListComponent.prototype.loadForms = function () {
        this.searchForm = this.formBuilder.group({
            search: ['']
        });
        this.isPageLoaded = true;
    };
    Object.defineProperty(CategoryListComponent.prototype, "searchControl", {
        get: function () {
            return this.searchForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    CategoryListComponent.prototype.getAllCategory = function () {
        var _this = this;
        this.knowledgeBaseService.getAllCategory()
            .subscribe(function (data) {
            _this.categories = data;
            _this.loadForms();
        });
    };
    CategoryListComponent.prototype.openCreateCategoryModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(CreateCategoryModalComponent, this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getAllCategory();
        });
    };
    CategoryListComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.searchForm.invalid) {
            return;
        }
        this.knowledgeBaseService.search(this.searchControl.search.value)
            .subscribe(function (data) {
            _this.categories = data;
        });
    };
    CategoryListComponent = __decorate([
        Component({
            selector: 'app-category-list',
            templateUrl: './category-list.component.html',
            styleUrls: ['./category-list.component.scss']
        }),
        __metadata("design:paramtypes", [BsModalService,
            FormBuilder,
            KnowledgeBaseService])
    ], CategoryListComponent);
    return CategoryListComponent;
}());
export { CategoryListComponent };
//# sourceMappingURL=category-list.component.js.map