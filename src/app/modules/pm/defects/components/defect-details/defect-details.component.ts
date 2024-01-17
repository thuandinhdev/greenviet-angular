import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

import { DefectService } from '../../../../../core/services/defect.service';
import { TimesheetService } from '../../../../../core/services/timesheet.service';

import { defect_status_key_value, defect_severity_key_value } from "./../../../../../core/helpers/pm-helper";
import * as moment from 'moment';

@Component({
	selector: 'app-defect-details',
	templateUrl: './defect-details.component.html',
	styleUrls: ['./defect-details.component.scss']
})

export class DefectDetailsComponent implements OnInit, OnDestroy {
	@Input() defect;
	@Input() loginUser: any;
	@Input() permission;
	@Input() apiUrl;
	timeLogs: any;
	timerInterval: any;
	timerInterval1: any;
	startDateTime: any
	totalHours: any;
	totalMinutes: any;
	totalSeconds: any;
	showTimer = false;
	isTimerStarted = false;
	defectstatusKeyValue = defect_status_key_value;
	defectSeveritiesKeyValue = defect_severity_key_value;
	isDefectTab = 1;
	activeDefectTab = '1';

	constructor(
		public translate: TranslateService,
		private toastr: ToastrService,
		private defectService: DefectService,
		private timesheetService: TimesheetService
	) { }

	ngOnInit() {
		this.totalHours = "00";
		this.totalMinutes = "00";
		this.totalSeconds = "00";

		this.getTimeLogs();
		this.timerInterval1 = setInterval(() => {
			if(this.loginUser) {
				this.getTimeLogs(false);
			}
		}, 1000);
	}

	setActiveDefectTab($event) {
		this.activeDefectTab = $event.id;
	}

	getActiveDefectTab(tab) {
		return this.activeDefectTab === tab;
	}

	getDefectById(defectId) {
		this.defectService.getById(defectId).subscribe(data => {
			this.defect = data;
		});
	}

	getTranslateStatus(statusKey) {
		return this.defectstatusKeyValue[statusKey];
	}

	getTranslateSeverities(statusKey) {
		return this.defectSeveritiesKeyValue[statusKey];
	}

	changeDefectStatus(defectId: any, status: any) {
		this.defectService.changeStatus({
			id: defectId,
			status: status.id
		}).subscribe(data => {
			this.toastr.success(this.translate.instant('defects.messages.status'), this.translate.instant('defects.title'));
			this.getDefectById(this.defect.id);
		});
	}

	changeDefectSeverity(defectId: any, severity: any) {
		this.defectService.changeSeverity({
			id: defectId,
			severity: severity.id
		}).subscribe(data => {
			this.toastr.success(this.translate.instant('defects.messages.severity'), this.translate.instant('defects.title'));
			this.getDefectById(this.defect.id);
		});
	}

	getParseArray(string) {
		return JSON.parse(string);
	}

	saveDefectDetail(name, value) {
		this.defect[name] = value;
		this.defectService.update(this.defect).subscribe(data => {
			this.toastr.success(this.translate.instant('defects.messages.update'), this.translate.instant('defects.title'));
			this.getDefectById(this.defect.id);
		});
	}

	getTimeLogs(isLoad = true) {
		this.timesheetService.getTimeLogs()
			.subscribe(
				data => {
					this.timeLogs = data;
					if(isLoad) {
						this.loadTimer();
					}
				});
	}

	loadTimer() {
		this.totalHours = "00";
		this.totalMinutes = "00";
		this.totalSeconds = "00";

		if((this.timeLogs && this.timeLogs.is_defect_timer) && (this.timeLogs.reference_id == this.defect.id)) {
			this.showTimer = true;
			this.isTimerStarted = this.timeLogs.is_defect_timer;
			this.startDateTime = this.timeLogs.start_time;

			this.startTimer(false);
		}

		if(this.timeLogs && (this.timeLogs.is_task_timer || this.timeLogs.is_incident_timer)) {
			this.showTimer = false;
		}

		if(!this.timeLogs) {
			this.showTimer = true;
		}
	}

	startTimer(isSaved = true) {
		if(isSaved) {
			if(this.timeLogs && (this.timeLogs.is_task_timer || this.timeLogs.is_defect_timer || this.timeLogs.is_incident_timer)) {
				this.toastr.error(this.translate.instant('timer_logs.error_messages.message1'), this.translate.instant('defects.title'));
				return false;
			}
		}

		this.timerInterval = setInterval(() => {
			this.startTimerWatch();
		}, 1000);

		if(isSaved) {
			this.isTimerStarted = true;
			this.saveTimeLogs();
		}
	}

	startTimerWatch() {
		let time = this.startDateTime ? this.startDateTime : this.getDateTime();

		let endDate = new Date(),
			startDate = new Date(time),
			dateDiff = endDate.getTime() - startDate.getTime();

		let hours = Math.floor((dateDiff / 36e5) % 24),
			minutes = Math.floor((dateDiff / 6e4) % 60),
			seconds = Math.floor((dateDiff / 1e3) % 60);

		this.totalHours = hours < 10 ? "0" + hours : hours ,
		this.totalMinutes = minutes < 10 ? "0" + minutes: minutes,
		this.totalSeconds = seconds < 10 ? "0" + seconds : seconds;
	}

	getDateTime() {
		let date = new Date(),
			fullDate = date.getDate() < 10 ? "0" + date.getDate() :date.getDate(),
			months = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1,
			hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
			minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
			seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

		return date.getFullYear() + "-" + months + "-" + fullDate + " " + hours + ":" + minutes + ":" + seconds;
	}

	saveTimeLogs() {
		this.timesheetService.createTimeLog({
			"project_id": this.defect.project_id,
			"reference_id": this.defect.id,
			"is_task_timer": false,
			"is_defect_timer": true,
			"is_incident_timer": false,
			"start_time": moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
		}).subscribe(data => {
			this.startDateTime = new Date();
		});
	}

	stopTimer(isSaved) {
		let endDate = new Date(),
			startDate = new Date(this.startDateTime),
			dateDiff = endDate.getTime() - startDate.getTime();

			let diffHrs = Math.floor((dateDiff % 86400000) / 3600000); // hours
			let diffMins = Math.round(((dateDiff % 86400000) % 3600000) / 60000);

			// --
			// Check 
			if(diffMins < 1) {
				this.toastr.error(this.translate.instant('timer_logs.error_messages.message2'), this.translate.instant('timesheet.title'));
				isSaved = false;
				// this.setClearInterval();
				// return false;
			}
			
			if(this.getStartFutureDate(this.startDateTime, this.getDateTime()) > 720) {
				this.toastr.error(this.translate.instant('timer_logs.error_messages.message3'), this.translate.instant('timesheet.title'));
				isSaved = false;
				// this.setClearInterval();
				// return false;
			}

		this.deleteTimesheet(isSaved);
	}

	getStartFutureDate(startDate, endDate) {
        (startDate = new Date(startDate)), (endDate = new Date(endDate));

        let diff = (startDate.getTime() - endDate.getTime()) / 1e3;
        return (diff /= 60), Math.abs(Math.round(diff));
    }

	setClearInterval() {
		clearInterval(this.timerInterval);
		this.getTimeLogs();
		this.isTimerStarted = false;
		this.startDateTime = null;
	}

	saveTimesheet() {
		this.timesheetService.create({
			"project_id": this.defect.project_id,
			"module_id": 3,
			"module_related_id": this.defect.id,
			"start_time": moment(new Date(this.startDateTime)).format("YYYY-MM-DD HH:mm:ss"),
			"end_time": moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
		}).subscribe(data => {
			this.toastr.success(this.translate.instant('timesheet.messages.create'), this.translate.instant('timesheet.title'));
			this.setClearInterval();
		});
	}

	deleteTimesheet(isSaved) {
		this.timesheetService.deleteTimeLog(this.loginUser.id)
			.subscribe(data => {
				if(isSaved) {
					this.saveTimesheet();
				} else {
					this.setClearInterval();
				}
			});
	}

	ngOnDestroy() {
		clearInterval(this.timerInterval);
		clearInterval(this.timerInterval1);
	}
}