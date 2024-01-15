import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var TeamService = /** @class */ (function () {
    function TeamService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    TeamService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/teams");
    };
    TeamService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/teams/" + id);
    };
    TeamService.prototype.create = function (team) {
        return this.http.post(this.apiUrl + "/api/teams", team);
    };
    TeamService.prototype.update = function (team) {
        return this.http.put(this.apiUrl + "/api/teams/" + team.id, team);
    };
    TeamService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/teams/" + id);
    };
    TeamService.prototype.getTeamForTeamBoard = function () {
        return this.http.get(this.apiUrl + "/api/teams/teamboard");
    };
    TeamService.prototype.import = function (importTeams) {
        return this.http.post(this.apiUrl + "/api/teams/import", importTeams);
    };
    TeamService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], TeamService);
    return TeamService;
}());
export { TeamService };
//# sourceMappingURL=team.service.js.map