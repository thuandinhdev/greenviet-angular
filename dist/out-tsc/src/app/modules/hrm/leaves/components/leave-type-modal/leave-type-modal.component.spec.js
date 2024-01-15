import { async, TestBed } from '@angular/core/testing';
import { LeaveTypeModalComponent } from './leave-type-modal.component';
describe('LeaveTypeModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [LeaveTypeModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(LeaveTypeModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=leave-type-modal.component.spec.js.map