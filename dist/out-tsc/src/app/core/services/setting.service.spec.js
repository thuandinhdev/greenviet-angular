import { TestBed } from '@angular/core/testing';
import { SettingService } from './setting.service';
describe('SettingService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(SettingService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=setting.service.spec.js.map