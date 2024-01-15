import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { UserService } from '../../../../../core/services/user.service';
import { TeamService } from '../../../../../core/services/team.service';
var TeamCreateModalComponent = /** @class */ (function () {
    function TeamCreateModalComponent(translate, bsModalRef, formBuilder, toastr, userService, teamService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.teamService = teamService;
        this.event = new EventEmitter();
        this.isFormSubmitted = false;
        this.isPageLoaded = false;
        this.users = [];
        this.teamLeaders = [];
    }
    TeamCreateModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.getUsers();
        this.loadForms();
    };
    TeamCreateModalComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll()
            .subscribe(function (data) {
            _this.users = data;
            _this.isPageLoaded = true;
        });
    };
    TeamCreateModalComponent.prototype.loadForms = function () {
        this.createTeamForm = this.formBuilder.group({
            team_name: [null, [Validators.required, Validators.maxLength(30)]],
            members: [null, Validators.required],
            team_leader: [null, Validators.required],
            description: ['']
        });
    };
    Object.defineProperty(TeamCreateModalComponent.prototype, "teamControl", {
        get: function () { return this.createTeamForm.controls; },
        enumerable: false,
        configurable: true
    });
    TeamCreateModalComponent.prototype.teamMemberChange = function (event) {
        this.teamLeaders = event;
    };
    TeamCreateModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createTeamForm.invalid) {
            return;
        }
        this.teamService.create(this.createTeamForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('teams.messages.create'), _this.translate.instant('teams.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    TeamCreateModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    TeamCreateModalComponent = __decorate([
        Component({
            selector: 'app-team-create-modal',
            templateUrl: './team-create-modal.component.html',
            styleUrls: ['./team-create-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            UserService,
            TeamService])
    ], TeamCreateModalComponent);
    return TeamCreateModalComponent;
}());
export { TeamCreateModalComponent };
//# sourceMappingURL=team-create-modal.component.js.map