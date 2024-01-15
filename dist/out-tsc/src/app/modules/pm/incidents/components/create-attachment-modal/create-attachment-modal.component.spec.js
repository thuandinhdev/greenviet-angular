import { async, TestBed } from '@angular/core/testing';
import { CreateAttachmentModalComponent } from './create-attachment-modal.component';
describe('CreateAttachmentModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CreateAttachmentModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CreateAttachmentModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=create-attachment-modal.component.spec.js.map