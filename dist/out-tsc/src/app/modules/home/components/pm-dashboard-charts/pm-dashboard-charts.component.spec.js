import { async, TestBed } from '@angular/core/testing';
import { PmDashboardChartsComponent } from './pm-dashboard-charts.component';
describe('PmDashboardChartsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PmDashboardChartsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PmDashboardChartsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pm-dashboard-charts.component.spec.js.map