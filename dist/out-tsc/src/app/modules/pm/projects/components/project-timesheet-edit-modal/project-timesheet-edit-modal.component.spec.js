import { async, TestBed } from '@angular/core/testing';
import { ProjectTimesheetEditModalComponent } from './project-timesheet-edit-modal.component';
describe('ProjectTimesheetEditModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProjectTimesheetEditModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProjectTimesheetEditModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=project-timesheet-edit-modal.component.spec.js.map