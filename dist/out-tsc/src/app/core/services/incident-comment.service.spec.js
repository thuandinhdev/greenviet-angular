import { TestBed } from '@angular/core/testing';
import { IncidentCommentService } from './incident-comment.service';
describe('IncidentCommentService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(IncidentCommentService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=incident-comment.service.spec.js.map