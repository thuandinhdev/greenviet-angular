import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorDialogService } from '../services/error-dialog.service';
import { AuthenticationService } from '../services/authentication.service';
var HttpConfigInterceptor = /** @class */ (function () {
    /**
     *	@class HttpConfigInterceptor
     *	@constructor
    */
    function HttpConfigInterceptor(translate, router, errorDialogService, toastrService, authenticationService) {
        this.translate = translate;
        this.router = router;
        this.errorDialogService = errorDialogService;
        this.toastrService = toastrService;
        this.authenticationService = authenticationService;
    }
    /**
     *	Transform the outgoing request before passing it to the next interceptor in the chain, by calling next.handle() method
     *
     *	@class HttpConfigInterceptor
     *	@method intercept
     *	@param {request} request
     *	@param {next} httpHandler
    */
    HttpConfigInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var loginToken = this.authenticationService.currentTokenValue;
        // --
        // Check expiration token
        if (loginToken) {
            if (loginToken.expires_in && (Date.now() > (Date.now() + loginToken.expires_in))) {
                this.toastrService.error(this.translate.instant('common.error_messages.message2'));
                this.authenticationService.logout();
            }
            request = request.clone({ headers: request.headers.set('Authorization', loginToken.token_type + ' ' + loginToken.token) });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        return next.handle(request).pipe(map(function (event) {
            if (event instanceof HttpResponse) {
            }
            return event;
        }), catchError(function (error) {
            var errorMessages = [];
            switch (error.status) {
                case 200:
                    break;
                case 400:
                    if (error.error.error) {
                        _this.toastrService.error(error.error.error, _this.translate.instant('common.errors_keys.key2'));
                    }
                    break;
                case 401:
                    // this.toastrService.error(this.translate.instant('common.error_messages.message3'), this.translate.instant('common.errors_keys.key3'));
                    _this.authenticationService.logout(false);
                    break;
                case 403:
                    _this.toastrService.error(_this.translate.instant('common.error_messages.message1'), _this.translate.instant('common.errors_keys.key4'));
                    break;
                case 404:
                    _this.toastrService.error(_this.translate.instant('common.error_messages.message4'), _this.translate.instant('common.errors_keys.key5'));
                    break;
                case 422:
                    if (error.error.error) {
                        _this.toastrService.error(error.error.error, _this.translate.instant('common.errors_keys.key6'));
                    }
                    else {
                        for (var iRow in error.error.errors) {
                            for (var jRow in error.error.errors[iRow]) {
                                errorMessages.push(error.error.errors[iRow][jRow]);
                            }
                        }
                        _this.errorDialogService.openDialog(error, errorMessages);
                    }
                    break;
                case 500:
                    errorMessages.push(error.error.message);
                    // this.errorDialogService.openDialog(error, errorMessages);
                    _this.toastrService.error(error.error.error, _this.translate.instant('common.error_messages.message5'));
                    break;
                default:
                    // this.errorDialogService.openDialog(error, errorMessages);
                    break;
            }
            return throwError(error);
        }));
    };
    HttpConfigInterceptor = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [TranslateService,
            Router,
            ErrorDialogService,
            ToastrService,
            AuthenticationService])
    ], HttpConfigInterceptor);
    return HttpConfigInterceptor;
}());
export { HttpConfigInterceptor };
//# sourceMappingURL=http-config.interceptor.js.map