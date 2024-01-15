import { async, TestBed } from '@angular/core/testing';
import { CreateTimesheetModalComponent } from './create-timesheet-modal.component';
describe('CreateTimesheetModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CreateTimesheetModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CreateTimesheetModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=create-timesheet-modal.component.spec.js.map