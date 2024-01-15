import { async, TestBed } from '@angular/core/testing';
import { CreateHolidayModalComponent } from './create-holiday-modal.component';
describe('CreateHolidayModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CreateHolidayModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CreateHolidayModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=create-holiday-modal.component.spec.js.map