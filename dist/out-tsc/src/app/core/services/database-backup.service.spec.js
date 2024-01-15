import { TestBed } from '@angular/core/testing';
import { DatabaseBackupService } from './database-backup.service';
describe('DatabaseBackupService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DatabaseBackupService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=database-backup.service.spec.js.map