import { async, TestBed } from '@angular/core/testing';
import { PmDashboardAnnouncementsComponent } from './pm-dashboard-announcements.component';
describe('PmDashboardAnnouncementsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PmDashboardAnnouncementsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PmDashboardAnnouncementsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pm-dashboard-announcements.component.spec.js.map