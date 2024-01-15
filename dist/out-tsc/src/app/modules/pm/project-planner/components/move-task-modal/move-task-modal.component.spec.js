import { async, TestBed } from '@angular/core/testing';
import { MoveTaskModalComponent } from './move-task-modal.component';
describe('MoveTaskModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MoveTaskModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MoveTaskModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=move-task-modal.component.spec.js.map