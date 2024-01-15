import { TestBed } from '@angular/core/testing';
import { DefectCommentsService } from './defect-comments.service';
describe('DefectCommentsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DefectCommentsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=defect-comments.service.spec.js.map