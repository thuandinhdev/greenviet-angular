import { async, TestBed } from '@angular/core/testing';
import { InlineMultiDatepickerComponent } from './inline-multi-datepicker.component';
describe('InlineMultiDatepickerComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InlineMultiDatepickerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InlineMultiDatepickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=inline-multi-datepicker.component.spec.js.map