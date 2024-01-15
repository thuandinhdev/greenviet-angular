import { TestBed } from '@angular/core/testing';
import { CustomFieldsService } from './custom-fields.service';
describe('CustomFieldsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CustomFieldsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=custom-fields.service.spec.js.map