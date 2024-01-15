import { async, TestBed } from '@angular/core/testing';
import { EditSprintTaskModalComponent } from './edit-sprint-task-modal.component';
describe('EditSprintTaskModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EditSprintTaskModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EditSprintTaskModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-sprint-task-modal.component.spec.js.map