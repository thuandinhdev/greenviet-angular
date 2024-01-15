import { async, TestBed } from '@angular/core/testing';
import { EditMeetingModalComponent } from './edit-meeting-modal.component';
describe('EditMeetingModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EditMeetingModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EditMeetingModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-meeting-modal.component.spec.js.map