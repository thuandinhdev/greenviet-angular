import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ProjectService } from '../../../../../core/services/project.service';
var ProjectNotesComponent = /** @class */ (function () {
    function ProjectNotesComponent(translate, toastr, formBuilder, projectService) {
        this.translate = translate;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.projectService = projectService;
        this.isFormSubmitted = false;
    }
    ProjectNotesComponent.prototype.ngOnInit = function () {
        this.editNoteForm = this.formBuilder.group({
            id: [this.project.id],
            notes: [this.project.notes]
        });
    };
    ProjectNotesComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editNoteForm.invalid) {
            return;
        }
        this.projectService.updateNotes(this.editNoteForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('notes.messages.update'), _this.translate.instant('projects.title'));
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectNotesComponent.prototype, "project", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProjectNotesComponent.prototype, "permissions", void 0);
    ProjectNotesComponent = __decorate([
        Component({
            selector: 'app-project-notes',
            templateUrl: './project-notes.component.html',
            styleUrls: ['./project-notes.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            FormBuilder,
            ProjectService])
    ], ProjectNotesComponent);
    return ProjectNotesComponent;
}());
export { ProjectNotesComponent };
//# sourceMappingURL=project-notes.component.js.map