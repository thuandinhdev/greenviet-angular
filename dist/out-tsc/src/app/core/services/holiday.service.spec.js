import { TestBed } from '@angular/core/testing';
import { HolidayService } from './holiday.service';
describe('HolidayService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(HolidayService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=holiday.service.spec.js.map