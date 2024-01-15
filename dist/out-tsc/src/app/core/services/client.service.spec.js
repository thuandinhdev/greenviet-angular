import { TestBed } from '@angular/core/testing';
import { ClientService } from './client.service';
describe('ClientService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ClientService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=client.service.spec.js.map