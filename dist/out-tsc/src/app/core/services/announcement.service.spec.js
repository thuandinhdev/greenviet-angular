import { TestBed } from '@angular/core/testing';
import { AnnouncementService } from './announcement.service';
describe('AnnouncementService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(AnnouncementService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=announcement.service.spec.js.map