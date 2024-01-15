import { async, TestBed } from '@angular/core/testing';
import { PmDashboardWidgetsComponent } from './pm-dashboard-widgets.component';
describe('PmDashboardWidgetsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PmDashboardWidgetsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PmDashboardWidgetsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pm-dashboard-widgets.component.spec.js.map