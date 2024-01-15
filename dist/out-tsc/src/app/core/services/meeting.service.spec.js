import { TestBed } from '@angular/core/testing';
import { MeetingService } from './meeting.service';
describe('MeetingService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(MeetingService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=meeting.service.spec.js.map