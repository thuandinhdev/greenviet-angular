import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../../../core/services/client.service';
var ClientDetailComponent = /** @class */ (function () {
    function ClientDetailComponent(route, router, clientService) {
        this.route = route;
        this.router = router;
        this.clientService = clientService;
        this.isPageLoaded = false;
    }
    ClientDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.getClientById(params.get('id'));
        });
    };
    ClientDetailComponent.prototype.getClientById = function (id) {
        var _this = this;
        this.clientService.getById(id)
            .subscribe(function (data) {
            _this.client = data;
            _this.isPageLoaded = true;
        });
    };
    ClientDetailComponent = __decorate([
        Component({
            selector: 'app-client-detail',
            templateUrl: './client-detail.component.html',
            styleUrls: ['./client-detail.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            ClientService])
    ], ClientDetailComponent);
    return ClientDetailComponent;
}());
export { ClientDetailComponent };
//# sourceMappingURL=client-detail.component.js.map