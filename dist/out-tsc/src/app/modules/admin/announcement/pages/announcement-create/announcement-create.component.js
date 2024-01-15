import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AnnouncementService } from '../../../../../core/services/announcement.service';
var AnnouncementCreateComponent = /** @class */ (function () {
    function AnnouncementCreateComponent(translate, datePipe, router, formBuilder, toastr, announcementService) {
        this.translate = translate;
        this.datePipe = datePipe;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.announcementService = announcementService;
        this.isFormSubmitted = false;
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
    }
    AnnouncementCreateComponent.prototype.ngOnInit = function () {
        this.loadForms();
    };
    AnnouncementCreateComponent.prototype.loadForms = function () {
        this.createAnnouncementForm = this.formBuilder.group({
            title: [null, [Validators.required, Validators.maxLength(100)]],
            start_date: [new Date(), Validators.required],
            end_date: [new Date(), Validators.required],
            status: ['1', Validators.required],
            all_client: [false],
            description: [''],
        });
    };
    Object.defineProperty(AnnouncementCreateComponent.prototype, "announcementControl", {
        get: function () { return this.createAnnouncementForm.controls; },
        enumerable: false,
        configurable: true
    });
    AnnouncementCreateComponent.prototype.startDateChange = function (event) {
        this.createAnnouncementForm.patchValue({ end_date: event });
    };
    AnnouncementCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createAnnouncementForm.invalid) {
            return;
        }
        if (this.createAnnouncementForm.value.start_date instanceof Date) {
            this.createAnnouncementForm.value.start_date = this.datePipe.transform(this.createAnnouncementForm.value.start_date, "yyyy-MM-dd h:mm:ss a");
        }
        if (this.createAnnouncementForm.value.end_date instanceof Date) {
            this.createAnnouncementForm.value.end_date = this.datePipe.transform(this.createAnnouncementForm.value.end_date, "yyyy-MM-dd h:mm:ss a");
        }
        this.announcementService.create(this.createAnnouncementForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('announcements.messages.create'), _this.translate.instant('announcements.title'));
            _this.router.navigate(['announcements']);
        });
    };
    AnnouncementCreateComponent = __decorate([
        Component({
            selector: 'app-announcement-create',
            templateUrl: './announcement-create.component.html',
            styleUrls: ['./announcement-create.component.scss'],
            providers: [DatePipe]
        }),
        __metadata("design:paramtypes", [TranslateService,
            DatePipe,
            Router,
            FormBuilder,
            ToastrService,
            AnnouncementService])
    ], AnnouncementCreateComponent);
    return AnnouncementCreateComponent;
}());
export { AnnouncementCreateComponent };
//# sourceMappingURL=announcement-create.component.js.map