import { async, TestBed } from '@angular/core/testing';
import { ProjectPlannerDetailComponent } from './project-planner-detail.component';
describe('ProjectPlannerDetailComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProjectPlannerDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProjectPlannerDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=project-planner-detail.component.spec.js.map