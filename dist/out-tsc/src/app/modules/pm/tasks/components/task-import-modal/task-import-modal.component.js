import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ImportTaskService } from '../../../../../core/services/import-task.service';
var TaskImportModalComponent = /** @class */ (function () {
    function TaskImportModalComponent(translate, bsImportTaskModalRef, toastr, importTaskService) {
        this.translate = translate;
        this.bsImportTaskModalRef = bsImportTaskModalRef;
        this.toastr = toastr;
        this.importTaskService = importTaskService;
        this.event = new EventEmitter();
        this.fileAttached = false;
        this.isPageLoaded = false;
        this.isFormSubmitted = false;
        this.csvFileSelected = false;
    }
    TaskImportModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
    };
    TaskImportModalComponent.prototype.fileUpload = function (files) {
        var _this = this;
        if (files && files.length > 0) {
            var file = files.item(0);
            var reader_1 = new FileReader();
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
    TaskImportModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        this.importTaskService.create({ csv_file: this.csvData })
            .subscribe(function (data) {
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    TaskImportModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsImportTaskModalRef.hide();
    };
    TaskImportModalComponent = __decorate([
        Component({
            selector: 'app-task-import-modal',
            templateUrl: './task-import-modal.component.html',
            styleUrls: ['./task-import-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            ToastrService,
            ImportTaskService])
    ], TaskImportModalComponent);
    return TaskImportModalComponent;
}());
export { TaskImportModalComponent };
//# sourceMappingURL=task-import-modal.component.js.map