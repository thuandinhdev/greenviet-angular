import { async, TestBed } from '@angular/core/testing';
import { InlineEditTextEditorComponent } from './inline-edit-text-editor.component';
describe('InlineEditTextEditorComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InlineEditTextEditorComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InlineEditTextEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=inline-edit-text-editor.component.spec.js.map