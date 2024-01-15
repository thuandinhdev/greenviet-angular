import { async, TestBed } from '@angular/core/testing';
import { IncidentKanbanComponent } from './incident-kanban.component';
describe('IncidentKanbanComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [IncidentKanbanComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(IncidentKanbanComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=incident-kanban.component.spec.js.map