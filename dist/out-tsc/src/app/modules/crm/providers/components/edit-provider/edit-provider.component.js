import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ProviderService } from '../../../../../core/services/provider.service';
var EditProviderComponent = /** @class */ (function () {
    function EditProviderComponent(translate, bsEditProviderModalRef, formBuilder, providerService, toastr) {
        this.translate = translate;
        this.bsEditProviderModalRef = bsEditProviderModalRef;
        this.formBuilder = formBuilder;
        this.providerService = providerService;
        this.toastr = toastr;
        this.event = new EventEmitter();
        this.isSubmitted = false;
    }
    EditProviderComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForm();
    };
    EditProviderComponent.prototype.loadForm = function () {
        this.editProviderForm = this.formBuilder.group({
            id: [this.provider.id],
            firstname: [this.provider.firstname, [Validators.required, Validators.maxLength(50)]],
            lastname: [this.provider.lastname, [Validators.required, Validators.maxLength(50)]],
            email: [this.provider.email, [Validators.required, Validators.email]],
            color: [this.provider.color, Validators.required]
        });
    };
    Object.defineProperty(EditProviderComponent.prototype, "providerControl", {
        get: function () { return this.editProviderForm.controls; },
        enumerable: false,
        configurable: true
    });
    EditProviderComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.editProviderForm.invalid) {
            return;
        }
        this.providerService.update(this.editProviderForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('providers.messages.edit'), _this.translate.instant('providers.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    EditProviderComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditProviderModalRef.hide();
    };
    EditProviderComponent = __decorate([
        Component({
            selector: 'app-edit-provider',
            templateUrl: './edit-provider.component.html',
            styleUrls: ['./edit-provider.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ProviderService,
            ToastrService])
    ], EditProviderComponent);
    return EditProviderComponent;
}());
export { EditProviderComponent };
//# sourceMappingURL=edit-provider.component.js.map