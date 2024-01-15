import { TestBed } from '@angular/core/testing';
import { AppointmentsService } from './appointments.service';
describe('AppointmentsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(AppointmentsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=appointments.service.spec.js.map