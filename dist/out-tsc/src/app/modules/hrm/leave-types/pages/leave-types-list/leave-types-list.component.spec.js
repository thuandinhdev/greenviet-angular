import { async, TestBed } from '@angular/core/testing';
import { LeaveTypesListComponent } from './leave-types-list.component';
describe('LeaveTypesListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [LeaveTypesListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(LeaveTypesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=leave-types-list.component.spec.js.map