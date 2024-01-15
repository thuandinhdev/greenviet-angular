import { async, TestBed } from '@angular/core/testing';
import { DatabaseBackupComponent } from './database-backup.component';
describe('DatabaseBackupComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DatabaseBackupComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DatabaseBackupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=database-backup.component.spec.js.map