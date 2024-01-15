import { async, TestBed } from '@angular/core/testing';
import { PmDashboardMeetingsComponent } from './pm-dashboard-meetings.component';
describe('PmDashboardMeetingsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PmDashboardMeetingsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PmDashboardMeetingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pm-dashboard-meetings.component.spec.js.map