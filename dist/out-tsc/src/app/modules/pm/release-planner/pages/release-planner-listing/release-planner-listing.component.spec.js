import { async, TestBed } from '@angular/core/testing';
import { ReleasePlannerListingComponent } from './release-planner-listing.component';
describe('ReleasePlannerListingComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReleasePlannerListingComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReleasePlannerListingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=release-planner-listing.component.spec.js.map