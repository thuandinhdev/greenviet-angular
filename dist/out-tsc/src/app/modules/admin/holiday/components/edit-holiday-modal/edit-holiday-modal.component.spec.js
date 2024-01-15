import { async, TestBed } from '@angular/core/testing';
import { EditHolidayModalComponent } from './edit-holiday-modal.component';
describe('EditHolidayModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EditHolidayModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EditHolidayModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-holiday-modal.component.spec.js.map