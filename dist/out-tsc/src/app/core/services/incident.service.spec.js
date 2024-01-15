import { TestBed } from '@angular/core/testing';
import { IncidentService } from './incident.service';
describe('IncidentService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(IncidentService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=incident.service.spec.js.map