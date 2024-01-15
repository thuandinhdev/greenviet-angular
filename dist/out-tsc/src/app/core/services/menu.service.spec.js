import { TestBed } from '@angular/core/testing';
import { MenuService } from './menu.service';
describe('MenuService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(MenuService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=menu.service.spec.js.map