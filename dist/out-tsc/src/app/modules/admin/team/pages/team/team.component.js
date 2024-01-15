import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { ExportAsService } from 'ngx-export-as';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { TeamService } from '../../../../../core/services/team.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { TeamCreateModalComponent } from '../../components/team-create-modal/team-create-modal.component';
import { TeamEditModalComponent } from '../../components/team-edit-modal/team-edit-modal.component';
import { ImportTeamComponent } from '../../components/import-team/import-team.component';
import { environment } from '../../../../../../environments/environment';
import 'datatables.net';
import 'datatables.net-bs4';
var TeamComponent = /** @class */ (function () {
    function TeamComponent(translate, modalService, router, route, http, exportAsService, toastr, teamService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.teamService = teamService;
        this.authenticationService = authenticationService;
        this.apiUrl = environment.apiUrl;
        this.dtTrigger = new Subject();
        this.dtOptions = {};
        this.teams = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementId: 'team_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.loadRoleDatatable();
    };
    TeamComponent.prototype.loadRoleDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            columns: [{
                    'sortable': false,
                    'width': "2%",
                    'target': [0]
                }, {
                    'sortable': true,
                    'target': [1]
                }, {
                    'sortable': false,
                    'target': [2]
                }, {
                    'sortable': true,
                    'width': "5%",
                    'target': [3]
                }, {
                    'sortable': false,
                    'width': "5%",
                    'target': [4]
                }
            ],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('teams.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('teams.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('teams.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }],
            language: {
                "sEmptyTable": this.translate.instant('common.datatable.sEmptyTable'),
                "sInfo": this.translate.instant('common.datatable.sInfo'),
                "sInfoEmpty": this.translate.instant('common.datatable.sInfoEmpty'),
                "sSearch": "",
                "sInfoPostFix": this.translate.instant('common.datatable.sInfoPostFix'),
                "sInfoThousands": this.translate.instant('common.datatable.sInfoThousands'),
                "sLengthMenu": this.translate.instant('common.datatable.sLengthMenu'),
                "sLoadingRecords": this.translate.instant('common.datatable.sLoadingRecords'),
                "sProcessing": this.translate.instant('common.datatable.sProcessing'),
                "sZeroRecords": this.translate.instant('common.datatable.sZeroRecords'),
                "sSearchPlaceholder": this.translate.instant('common.datatable.sSearchPlaceholder'),
                "oPaginate": {
                    "sFirst": this.translate.instant('common.datatable.oPaginate.sFirst'),
                    "sLast": this.translate.instant('common.datatable.oPaginate.sLast'),
                    "sNext": this.translate.instant('common.datatable.oPaginate.sNext'),
                    "sPrevious": this.translate.instant('common.datatable.oPaginate.sPrevious')
                },
                "oAria": {
                    "sSortAscending": this.translate.instant('common.datatable.oAria.sSortAscending'),
                    "sSortDescending": this.translate.instant('common.datatable.oAria.sSortDescending')
                }
            },
            ajax: function (dataTablesParameters, callback) {
                _this.http
                    .post(_this.apiUrl + '/api/all-teams', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.teams = resp.data;
                    }
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    TeamComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('teams.title')).subscribe(function () { });
    };
    TeamComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    TeamComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    TeamComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.teams.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    TeamComponent.prototype.openTeamCreateModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(TeamCreateModalComponent, this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    TeamComponent.prototype.openTeamEditModal = function (team) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                team: team
            }
        };
        this.modalRef = this.modalService.show(TeamEditModalComponent, modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.rerender();
        });
    };
    TeamComponent.prototype.openTeamImportModal = function () {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered animated fadeIn"
        };
        this.modalRef = this.modalService.show(ImportTeamComponent, modalConfig);
        this.modalRef.content.event.subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('teams.messages.import'), _this.translate.instant('teams.title'));
            _this.rerender();
        });
    };
    TeamComponent.prototype.removeTeam = function (id) {
        var _this = this;
        Swal.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                // --
                // this.toastr.error(this.translate.instant('common.not_allowed'));
                // return;
                _this.teamService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('teams.messages.delete'), _this.translate.instant('teams.title'));
                    _this.rerender();
                });
            }
        });
    };
    TeamComponent.prototype.saveTeamDetail = function (index, name, value) {
        var _this = this;
        this.teams[index][name] = value;
        var members = [];
        for (var iRow in this.teams[index].members) {
            members.push(this.teams[index].members[iRow].id);
        }
        var team = {
            id: this.teams[index].id,
            team_name: this.teams[index].team_name,
            members: members,
            team_leader: this.teams[index].team_leader,
            description: this.teams[index].description
        };
        this.teamService.update(team)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('teams.messages.update'), _this.translate.instant('teams.title'));
            _this.rerender();
        });
    };
    __decorate([
        ViewChild(DataTableDirective, { static: true }),
        __metadata("design:type", DataTableDirective)
    ], TeamComponent.prototype, "dtElement", void 0);
    TeamComponent = __decorate([
        Component({
            selector: 'app-team',
            templateUrl: './team.component.html',
            styleUrls: ['./team.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalService,
            Router,
            ActivatedRoute,
            HttpClient,
            ExportAsService,
            ToastrService,
            TeamService,
            AuthenticationService])
    ], TeamComponent);
    return TeamComponent;
}());
export { TeamComponent };
//# sourceMappingURL=team.component.js.map