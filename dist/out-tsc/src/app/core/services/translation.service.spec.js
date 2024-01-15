import { TestBed } from '@angular/core/testing';
import { TranslationService } from './translation.service';
describe('TranslationService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(TranslationService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=translation.service.spec.js.map