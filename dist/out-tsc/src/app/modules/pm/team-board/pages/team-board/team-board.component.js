import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamService } from './../../../../../core/services/team.service';
import { environment } from '../../../../../../environments/environment';
var TeamBoardComponent = /** @class */ (function () {
    function TeamBoardComponent(teamService, http) {
        this.teamService = teamService;
        this.http = http;
        this.apiUrl = environment.apiUrl;
        this.isPageLoaded = false;
    }
    TeamBoardComponent.prototype.ngOnInit = function () {
        this.getTeamForTeamBoard();
    };
    TeamBoardComponent.prototype.getTeamForTeamBoard = function () {
        var _this = this;
        this.teamService.getTeamForTeamBoard()
            .subscribe(function (data) {
            _this.teams = data;
            _this.isPageLoaded = true;
        });
    };
    TeamBoardComponent = __decorate([
        Component({
            selector: 'app-team-board',
            templateUrl: './team-board.component.html',
            styleUrls: ['./team-board.component.scss']
        }),
        __metadata("design:paramtypes", [TeamService,
            HttpClient])
    ], TeamBoardComponent);
    return TeamBoardComponent;
}());
export { TeamBoardComponent };
//# sourceMappingURL=team-board.component.js.map