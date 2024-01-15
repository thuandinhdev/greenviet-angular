import { async, TestBed } from '@angular/core/testing';
import { EditTimesheetModalComponent } from './edit-timesheet-modal.component';
describe('EditTimesheetModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EditTimesheetModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EditTimesheetModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-timesheet-modal.component.spec.js.map