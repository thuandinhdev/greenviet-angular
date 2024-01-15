import { TestBed } from '@angular/core/testing';
import { TimesheetService } from './timesheet.service';
describe('TimesheetService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(TimesheetService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=timesheet.service.spec.js.map