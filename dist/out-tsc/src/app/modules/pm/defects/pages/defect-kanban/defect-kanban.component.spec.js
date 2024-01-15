import { async, TestBed } from '@angular/core/testing';
import { DefectKanbanComponent } from './defect-kanban.component';
describe('DefectKanbanComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DefectKanbanComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DefectKanbanComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=defect-kanban.component.spec.js.map