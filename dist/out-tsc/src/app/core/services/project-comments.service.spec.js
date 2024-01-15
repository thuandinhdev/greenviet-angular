import { TestBed } from '@angular/core/testing';
import { ProjectCommentsService } from './project-comments.service';
describe('ProjectCommentsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ProjectCommentsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=project-comments.service.spec.js.map