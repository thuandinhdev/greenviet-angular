import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { UserService } from '../../../../../core/services/user.service';
import { TeamService } from '../../../../../core/services/team.service';
var TeamEditModalComponent = /** @class */ (function () {
    function TeamEditModalComponent(translate, bsModalRef, formBuilder, toastr, userService, teamService) {
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
        this.members = [];
    }
    TeamEditModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.getUsers();
    };
    TeamEditModalComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll()
            .subscribe(function (data) {
            _this.users = data;
            _this.loadForms();
        });
    };
    TeamEditModalComponent.prototype.loadForms = function () {
        for (var iRow in this.team.members) {
            this.members.push(this.team.members[iRow].id);
        }
        this.teamLeaders = this.team.members;
        this.editTeamForm = this.formBuilder.group({
            id: [this.team.id],
            team_name: [this.team.team_name, [Validators.required, Validators.maxLength(30)]],
            members: [this.members, Validators.required],
            team_leader: [this.team.team_leader, Validators.required],
            description: [this.team.description]
        });
        this.isPageLoaded = true;
    };
    Object.defineProperty(TeamEditModalComponent.prototype, "teamControl", {
        get: function () { return this.editTeamForm.controls; },
        enumerable: false,
        configurable: true
    });
    TeamEditModalComponent.prototype.teamMemberChange = function (event) {
        this.editTeamForm.patchValue({ team_leader: null });
        this.teamLeaders = event;
    };
    TeamEditModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editTeamForm.invalid) {
            return;
        }
        // // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // this.onCancel();
        // return;
        this.teamService.update(this.editTeamForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('teams.messages.update'), _this.translate.instant('teams.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    TeamEditModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    TeamEditModalComponent = __decorate([
        Component({
            selector: 'app-team-edit-modal',
            templateUrl: './team-edit-modal.component.html',
            styleUrls: ['./team-edit-modal.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            UserService,
            TeamService])
    ], TeamEditModalComponent);
    return TeamEditModalComponent;
}());
export { TeamEditModalComponent };
//# sourceMappingURL=team-edit-modal.component.js.map