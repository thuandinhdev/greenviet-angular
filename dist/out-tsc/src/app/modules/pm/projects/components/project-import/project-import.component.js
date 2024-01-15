import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ImportProjectService } from '../../../../../core/services/import-project.service';
var ProjectImportComponent = /** @class */ (function () {
    function ProjectImportComponent(translate, bsImportProjectModalRef, toastr, importprojectService) {
        this.translate = translate;
        this.bsImportProjectModalRef = bsImportProjectModalRef;
        this.toastr = toastr;
        this.importprojectService = importprojectService;
        this.event = new EventEmitter();
        this.fileAttached = false;
        this.isPageLoaded = false;
        this.isFormSubmitted = false;
        this.csvFileSelected = false;
    }
    ProjectImportComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
    };
    ProjectImportComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        this.importprojectService.create({ csv_file: this.csvData })
            .subscribe(function (data) {
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    ProjectImportComponent.prototype.fileUpload = function (files) {
        var _this = this;
        if (files && files.length > 0) {
            var file = files.item(0), reader_1 = new FileReader();
            reader_1.readAsText(file);
            reader_1.onload = function (event) {
                var csvdata = reader_1.result;
                _this.csvData = csvdata;
                _this.fileAttached = true;
                if (_this.csvData != undefined) {
                    _this.csvFileSelected = true;
                }
                else {
                    _this.csvFileSelected = false;
                }
                var filename = files[0].name;
                var ext = filename.substr(filename.lastIndexOf('.') + 1);
                if (ext != 'csv') {
                    _this.toastr.error(_this.translate.instant('teams.create.error_messages.message15'), _this.translate.instant('teams.title'));
                    _this.csvFileSelected = false;
                    return;
                }
                var newLinebrk = csvdata.split("\n");
                var columnNames = newLinebrk[0].split(",");
                _this.csvFileColumnName = columnNames;
            };
        }
    };
    ProjectImportComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsImportProjectModalRef.hide();
    };
    ProjectImportComponent = __decorate([
        Component({
            selector: 'app-project-import',
            templateUrl: './project-import.component.html',
            styleUrls: ['./project-import.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            ToastrService,
            ImportProjectService])
    ], ProjectImportComponent);
    return ProjectImportComponent;
}());
export { ProjectImportComponent };
//# sourceMappingURL=project-import.component.js.map