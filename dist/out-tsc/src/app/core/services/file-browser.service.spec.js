import { TestBed } from '@angular/core/testing';
import { FileBrowserService } from './file-browser.service';
describe('FileBrowserService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(FileBrowserService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=file-browser.service.spec.js.map