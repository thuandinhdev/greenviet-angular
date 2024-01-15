import { TestBed } from '@angular/core/testing';
import { KnowledgeBaseService } from './knowledge-base.service';
describe('KnowledgeBaseService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(KnowledgeBaseService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=knowledge-base.service.spec.js.map