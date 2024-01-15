import { async, TestBed } from '@angular/core/testing';
import { UserAvatarModalComponent } from './user-avatar-modal.component';
describe('UserAvatarModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UserAvatarModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UserAvatarModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-avatar-modal.component.spec.js.map