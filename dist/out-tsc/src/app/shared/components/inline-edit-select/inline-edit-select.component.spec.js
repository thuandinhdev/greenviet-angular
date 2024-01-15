import { async, TestBed } from '@angular/core/testing';
import { InlineEditSelectComponent } from './inline-edit-select.component';
describe('InlineEditSelectComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InlineEditSelectComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InlineEditSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=inline-edit-select.component.spec.js.map