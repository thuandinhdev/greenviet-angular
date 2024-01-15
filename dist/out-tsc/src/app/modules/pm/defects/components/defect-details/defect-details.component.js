import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { DefectService } from '../../../../../core/services/defect.service';
import { defect_status_key_value, defect_severity_key_value } from "./../../../../../core/helpers/pm-helper";
var DefectDetailsComponent = /** @class */ (function () {
    function DefectDetailsComponent(translate, toastr, defectService) {
        this.translate = translate;
        this.toastr = toastr;
        this.defectService = defectService;
        this.defectstatusKeyValue = defect_status_key_value;
        this.defectSeveritiesKeyValue = defect_severity_key_value;
        this.isDefectTab = 1;
        this.activeDefectTab = '1';
    }
    DefectDetailsComponent.prototype.ngOnInit = function () { };
    DefectDetailsComponent.prototype.setActiveDefectTab = function ($event) {
        this.activeDefectTab = $event.id;
    };
    DefectDetailsComponent.prototype.getActiveDefectTab = function (tab) {
        return this.activeDefectTab === tab;
    };
    DefectDetailsComponent.prototype.getDefectById = function (defectId) {
        var _this = this;
        this.defectService.getById(defectId).subscribe(function (data) {
            _this.defect = data;
        });
    };
    DefectDetailsComponent.prototype.getTranslateStatus = function (statusKey) {
        return this.defectstatusKeyValue[statusKey];
    };
    DefectDetailsComponent.prototype.getTranslateSeverities = function (statusKey) {
        return this.defectSeveritiesKeyValue[statusKey];
    };
    DefectDetailsComponent.prototype.changeDefectStatus = function (defectId, status) {
        var _this = this;
        this.defectService.changeStatus({
            id: defectId,
            status: status.id
        }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('defects.messages.status'), _this.translate.instant('defects.title'));
            _this.getDefectById(_this.defect.id);
        });
    };
    DefectDetailsComponent.prototype.changeDefectSeverity = function (defectId, severity) {
        var _this = this;
        this.defectService.changeSeverity({
            id: defectId,
            severity: severity.id
        }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('defects.messages.severity'), _this.translate.instant('defects.title'));
            _this.getDefectById(_this.defect.id);
        });
    };
    DefectDetailsComponent.prototype.getParseArray = function (string) {
        return JSON.parse(string);
    };
    DefectDetailsComponent.prototype.saveDefectDetail = function (name, value) {
        var _this = this;
        this.defect[name] = value;
        this.defectService.update(this.defect).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('defects.messages.update'), _this.translate.instant('defects.title'));
            _this.getDefectById(_this.defect.id);
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DefectDetailsComponent.prototype, "defect", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DefectDetailsComponent.prototype, "loginUser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DefectDetailsComponent.prototype, "permission", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DefectDetailsComponent.prototype, "apiUrl", void 0);
    DefectDetailsComponent = __decorate([
        Component({
            selector: 'app-defect-details',
            templateUrl: './defect-details.component.html',
            styleUrls: ['./defect-details.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            DefectService])
    ], DefectDetailsComponent);
    return DefectDetailsComponent;
}());
export { DefectDetailsComponent };
//# sourceMappingURL=defect-details.component.js.map