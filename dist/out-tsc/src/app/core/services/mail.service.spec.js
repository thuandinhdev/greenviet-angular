import { TestBed } from '@angular/core/testing';
import { MailService } from './mail.service';
describe('MailService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(MailService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=mail.service.spec.js.map