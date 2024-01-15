import { TestBed } from '@angular/core/testing';
import { LeaveService } from './leave.service';
describe('LeaveService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(LeaveService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=leave.service.spec.js.map