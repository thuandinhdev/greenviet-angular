import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ProviderService } from '../../../../../core/services/provider.service';
var CreateProviderComponent = /** @class */ (function () {
    function CreateProviderComponent(translate, bsCreateProviderModalRef, formBuilder, toastr, providerService) {
        this.translate = translate;
        this.bsCreateProviderModalRef = bsCreateProviderModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.providerService = providerService;
        this.event = new EventEmitter();
        this.isSubmitted = false;
    }
    CreateProviderComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.loadForm();
    };
    CreateProviderComponent.prototype.loadForm = function () {
        this.createProviderForm = this.formBuilder.group({
            firstname: [null, [Validators.required, Validators.maxLength(50)]],
            lastname: [null, [Validators.required, Validators.maxLength(50)]],
            email: [null, [Validators.required, Validators.email]],
            color: [null, Validators.required],
        });
    };
    Object.defineProperty(CreateProviderComponent.prototype, "providerControl", {
        get: function () { return this.createProviderForm.controls; },
        enumerable: false,
        configurable: true
    });
    CreateProviderComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.createProviderForm.invalid) {
            return;
        }
        this.providerService.create(this.createProviderForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('providers.messages.create'), _this.translate.instant('providers.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    CreateProviderComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateProviderModalRef.hide();
    };
    CreateProviderComponent = __decorate([
        Component({
            selector: 'app-create-provider',
            templateUrl: './create-provider.component.html',
            styleUrls: ['./create-provider.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            ProviderService])
    ], CreateProviderComponent);
    return CreateProviderComponent;
}());
export { CreateProviderComponent };
//# sourceMappingURL=create-provider.component.js.map