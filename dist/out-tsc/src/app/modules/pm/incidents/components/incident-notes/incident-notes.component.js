import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { IncidentService } from '../../../../../core/services/incident.service';
var IncidentNotesComponent = /** @class */ (function () {
    function IncidentNotesComponent(translate, formBuilder, toastr, incidentService) {
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.incidentService = incidentService;
        this.isFormSubmitted = false;
    }
    IncidentNotesComponent.prototype.ngOnInit = function () {
        this.editNoteForm = this.formBuilder.group({
            id: [this.incident.id],
            notes: [this.incident.notes]
        });
    };
    IncidentNotesComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editNoteForm.invalid) {
            return;
        }
        this.incidentService.updateNotes(this.editNoteForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('notes.messages.update'), _this.translate.instant('incidents.title'));
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IncidentNotesComponent.prototype, "incident", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IncidentNotesComponent.prototype, "permission", void 0);
    IncidentNotesComponent = __decorate([
        Component({
            selector: 'app-incident-notes',
            templateUrl: './incident-notes.component.html',
            styleUrls: ['./incident-notes.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            FormBuilder,
            ToastrService,
            IncidentService])
    ], IncidentNotesComponent);
    return IncidentNotesComponent;
}());
export { IncidentNotesComponent };
//# sourceMappingURL=incident-notes.component.js.map