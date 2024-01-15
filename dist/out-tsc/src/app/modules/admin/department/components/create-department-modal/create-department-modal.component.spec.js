import { async, TestBed } from '@angular/core/testing';
import { CreateDepartmentModalComponent } from './create-department-modal.component';
describe('CreateDepartmentModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CreateDepartmentModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CreateDepartmentModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=create-department-modal.component.spec.js.map