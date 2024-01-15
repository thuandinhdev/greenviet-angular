import { async, TestBed } from '@angular/core/testing';
import { EditDepartmentModalComponent } from './edit-department-modal.component';
describe('EditDepartmentModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EditDepartmentModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EditDepartmentModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-department-modal.component.spec.js.map