import { TestBed } from '@angular/core/testing';
import { TaskCommentsService } from './task-comments.service';
describe('TaskCommentsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(TaskCommentsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=task-comments.service.spec.js.map