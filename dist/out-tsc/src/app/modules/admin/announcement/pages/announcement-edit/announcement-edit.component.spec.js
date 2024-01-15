import { async, TestBed } from '@angular/core/testing';
import { AnnouncementEditComponent } from './announcement-edit.component';
describe('AnnouncementEditComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AnnouncementEditComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AnnouncementEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=announcement-edit.component.spec.js.map