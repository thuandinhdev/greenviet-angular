import { async, TestBed } from '@angular/core/testing';
import { CategoryArticlesTreeComponent } from './category-articles-tree.component';
describe('CategoryArticlesTreeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CategoryArticlesTreeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CategoryArticlesTreeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=category-articles-tree.component.spec.js.map