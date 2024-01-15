import { async, TestBed } from '@angular/core/testing';
import { CreateSprintTaskModalComponent } from './create-sprint-task-modal.component';
describe('CreateSprintTaskModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CreateSprintTaskModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CreateSprintTaskModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=create-sprint-task-modal.component.spec.js.map