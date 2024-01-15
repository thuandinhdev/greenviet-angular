import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AnnouncementService } from '../../../../../core/services/announcement.service';
var AnnouncementEditComponent = /** @class */ (function () {
    function AnnouncementEditComponent(translate, datePipe, route, router, formBuilder, toastr, announcementService) {
        var _this = this;
        this.translate = translate;
        this.datePipe = datePipe;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.announcementService = announcementService;
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.loadDatepicker = false;
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red'
        };
        this.route.paramMap.subscribe(function (params) {
            _this.getAnnouncementById(params.get('id'));
        });
    }
    AnnouncementEditComponent.prototype.ngOnInit = function () { };
    AnnouncementEditComponent.prototype.getAnnouncementById = function (id) {
        var _this = this;
        this.announcementService.getById(id)
            .subscribe(function (data) {
            _this.announcementData = data;
            _this.loadForms();
        });
    };
    AnnouncementEditComponent.prototype.loadForms = function () {
        if (this.announcementData.status == 1) {
            this.announcementData.status = '1';
        }
        else {
            this.announcementData.status = '0';
        }
        if (this.announcementData.all_client == 0) {
            this.announcementData.all_client = false;
        }
        else {
            this.announcementData.all_client = true;
        }
        this.editAnnouncementForm = this.formBuilder.group({
            id: [this.announcementData.id],
            title: [this.announcementData.title, [Validators.required, Validators.maxLength(100)]],
            start_date: [new Date(this.announcementData.start_date), Validators.required],
            end_date: [new Date(this.announcementData.end_date), Validators.required],
            status: [this.announcementData.status, Validators.required],
            all_client: [this.announcementData.all_client],
            description: [this.announcementData.description],
        });
        this.isPageLoaded = true;
    };
    Object.defineProperty(AnnouncementEditComponent.prototype, "announcementControl", {
        get: function () { return this.editAnnouncementForm.controls; },
        enumerable: false,
        configurable: true
    });
    AnnouncementEditComponent.prototype.startDateChange = function (event) {
        this.editAnnouncementForm.patchValue({ end_date: event });
    };
    AnnouncementEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editAnnouncementForm.invalid) {
            return;
        }
        if (this.editAnnouncementForm.value.start_date instanceof Date) {
            this.editAnnouncementForm.value.start_date = this.datePipe.transform(this.editAnnouncementForm.value.start_date, "yyyy-MM-dd h:mm:ss a");
        }
        if (this.editAnnouncementForm.value.end_date instanceof Date) {
            this.editAnnouncementForm.value.end_date = this.datePipe.transform(this.editAnnouncementForm.value.end_date, "yyyy-MM-dd h:mm:ss a");
        }
        this.announcementService.update(this.editAnnouncementForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('announcements.messages.update'), _this.translate.instant('announcements.title'));
            _this.router.navigate(['announcements']);
        });
    };
    AnnouncementEditComponent = __decorate([
        Component({
            selector: 'app-announcement-edit',
            templateUrl: './announcement-edit.component.html',
            styleUrls: ['./announcement-edit.component.scss'],
            providers: [DatePipe]
        }),
        __metadata("design:paramtypes", [TranslateService,
            DatePipe,
            ActivatedRoute,
            Router,
            FormBuilder,
            ToastrService,
            AnnouncementService])
    ], AnnouncementEditComponent);
    return AnnouncementEditComponent;
}());
export { AnnouncementEditComponent };
//# sourceMappingURL=announcement-edit.component.js.map