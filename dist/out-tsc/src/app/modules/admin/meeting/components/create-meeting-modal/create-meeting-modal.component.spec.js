import { async, TestBed } from '@angular/core/testing';
import { CreateMeetingModalComponent } from './create-meeting-modal.component';
describe('CreateMeetingModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CreateMeetingModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CreateMeetingModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=create-meeting-modal.component.spec.js.map