import { TestBed } from '@angular/core/testing';
import { DefectService } from './defect.service';
describe('DefectService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DefectService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=defect.service.spec.js.map