import { async, TestBed } from '@angular/core/testing';
import { PmDashboardActivityComponent } from './pm-dashboard-activity.component';
describe('PmDashboardActivityComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PmDashboardActivityComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PmDashboardActivityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pm-dashboard-activity.component.spec.js.map