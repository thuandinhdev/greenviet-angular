import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { UserService } from '../../../../../core/services/user.service';
var ImportUserComponent = /** @class */ (function () {
    function ImportUserComponent(translate, bsImportUserModalRef, toastr, userService) {
        this.translate = translate;
        this.bsImportUserModalRef = bsImportUserModalRef;
        this.toastr = toastr;
        this.userService = userService;
        this.event = new EventEmitter();
        this.fileAttached = false;
        this.isPageLoaded = false;
        this.isFormSubmitted = false;
        this.csvFileSelected = false;
    }
    ImportUserComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
    };
    ImportUserComponent.prototype.fileUpload = function (files) {
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
                    _this.toastr.error(_this.translate.instant('users.create.error_messages.message22'), _this.translate.instant('users.title'));
                    _this.csvFileSelected = false;
                    return;
                }
                var newLinebrk = csvdata.split("\n");
                var columnNames = newLinebrk[0].split(",");
                _this.csvFileColumnName = columnNames;
            };
        }
    };
    ImportUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        this.userService.import({ csv_file: this.csvData })
            .subscribe(function (data) {
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    ImportUserComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsImportUserModalRef.hide();
    };
    ImportUserComponent = __decorate([
        Component({
            selector: 'app-import-user',
            templateUrl: './import-user.component.html',
            styleUrls: ['./import-user.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            ToastrService,
            UserService])
    ], ImportUserComponent);
    return ImportUserComponent;
}());
export { ImportUserComponent };
//# sourceMappingURL=import-user.component.js.map