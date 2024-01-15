import { TestBed, inject } from '@angular/core/testing';
import { UserGuard } from './user.guard';
describe('UserGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [UserGuard]
        });
    });
    it('should ...', inject([UserGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=user.guard.spec.js.map