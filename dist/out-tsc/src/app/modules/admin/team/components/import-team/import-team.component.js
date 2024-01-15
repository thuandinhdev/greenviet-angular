import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { TeamService } from '../../../../../core/services/team.service';
var ImportTeamComponent = /** @class */ (function () {
    function ImportTeamComponent(translate, bsImportUserModalRef, toastr, teamService) {
        this.translate = translate;
        this.bsImportUserModalRef = bsImportUserModalRef;
        this.toastr = toastr;
        this.teamService = teamService;
        this.event = new EventEmitter();
        this.fileAttached = false;
        this.isPageLoaded = false;
        this.isFormSubmitted = false;
        this.csvFileSelected = false;
    }
    ImportTeamComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
    };
    ImportTeamComponent.prototype.fileUpload = function (files) {
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
                    _this.toastr.error(_this.translate.instant('teams.create.error_messages.message6'), _this.translate.instant('teams.title'));
                    _this.csvFileSelected = false;
                    return;
                }
                var newLinebrk = csvdata.split("\n");
                var columnNames = newLinebrk[0].split(",");
                _this.csvFileColumnName = columnNames;
            };
        }
    };
    ImportTeamComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (!this.csvFileSelected) {
            return false;
        }
        this.teamService.import({ csv_file: this.csvData })
            .subscribe(function (data) {
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    ImportTeamComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsImportUserModalRef.hide();
    };
    ImportTeamComponent = __decorate([
        Component({
            selector: 'app-import-team',
            templateUrl: './import-team.component.html',
            styleUrls: ['./import-team.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            ToastrService,
            TeamService])
    ], ImportTeamComponent);
    return ImportTeamComponent;
}());
export { ImportTeamComponent };
//# sourceMappingURL=import-team.component.js.map