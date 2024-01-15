import { async, TestBed } from '@angular/core/testing';
import { InlineEditTextareaComponent } from './inline-edit-textarea.component';
describe('InlineEditTextareaComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InlineEditTextareaComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InlineEditTextareaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=inline-edit-textarea.component.spec.js.map