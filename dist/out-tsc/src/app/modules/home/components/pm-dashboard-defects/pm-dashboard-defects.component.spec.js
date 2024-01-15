import { async, TestBed } from '@angular/core/testing';
import { PmDashboardDefectsComponent } from './pm-dashboard-defects.component';
describe('PmDashboardDefectsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PmDashboardDefectsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PmDashboardDefectsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pm-dashboard-defects.component.spec.js.map