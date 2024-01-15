import { async, TestBed } from '@angular/core/testing';
import { ShowCustomFieldElementComponent } from './show-custom-field-element.component';
describe('ShowCustomFieldElementComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ShowCustomFieldElementComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ShowCustomFieldElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=show-custom-field-element.component.spec.js.map