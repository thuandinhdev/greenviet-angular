import { TestBed } from '@angular/core/testing';
import { EmailTemplateService } from './email-template.service';
describe('EmailTemplateService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(EmailTemplateService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=email-template.service.spec.js.map