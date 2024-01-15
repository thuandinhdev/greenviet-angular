import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { DefectService } from '../../../../../core/services/defect.service';
var DefectNotesComponent = /** @class */ (function () {
    function DefectNotesComponent(translate, formBuilder, toastr, defectService) {
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.defectService = defectService;
        this.isFormSubmitted = false;
    }
    DefectNotesComponent.prototype.ngOnInit = function () {
        this.editNoteForm = this.formBuilder.group({
            id: [this.defect.id],
            notes: [this.defect.notes]
        });
    };
    DefectNotesComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editNoteForm.invalid) {
            return;
        }
        this.defectService.updateNotes(this.editNoteForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('notes.messages.update'), _this.translate.instant('defects.title'));
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DefectNotesComponent.prototype, "defect", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DefectNotesComponent.prototype, "permission", void 0);
    DefectNotesComponent = __decorate([
        Component({
            selector: 'app-defect-notes',
            templateUrl: './defect-notes.component.html',
            styleUrls: ['./defect-notes.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            FormBuilder,
            ToastrService,
            DefectService])
    ], DefectNotesComponent);
    return DefectNotesComponent;
}());
export { DefectNotesComponent };
//# sourceMappingURL=defect-notes.component.js.map