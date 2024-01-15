import { async, TestBed } from '@angular/core/testing';
import { PmDashboardTodosComponent } from './pm-dashboard-todos.component';
describe('PmDashboardTodosComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PmDashboardTodosComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PmDashboardTodosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pm-dashboard-todos.component.spec.js.map