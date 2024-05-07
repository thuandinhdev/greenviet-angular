import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
	FormGroup,
	FormBuilder,
	FormControl,
	Validators
} from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgOption } from '@ng-select/ng-select';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

import { datepickerConfig } from '../../../../../core/helpers/admin.helper';

import { MarketingService } from '../../../../../core/services/marketing.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';

@Component({
	selector: 'app-create-marketing-modal',
	templateUrl: './create-marketing-modal.component.html',
	styleUrls: ['./create-marketing-modal.component.scss']
})

export class CreateMarketingModalComponent implements OnInit {
	public event: EventEmitter<any> = new EventEmitter();
	public onClose: Subject<boolean>;
	createMarketingForm: FormGroup;
	@Input() marketingParams: any;
	minDate: Date;
	loginUser: any;
	isFormSubmitted = false;
	datepickerConfig = datepickerConfig;

	constructor (
		public translate: TranslateService,
		public datepipe: DatePipe,
		public bsModalRef: BsModalRef,
		private formBuilder: FormBuilder,
		private toastr: ToastrService,
		private marketingService: MarketingService,
		private authenticationService: AuthenticationService
	) {
		this.authenticationService.loginUser.subscribe(x => this.loginUser = x);
		this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
	}

	ngOnInit() {
		this.onClose = new Subject();
		this.minDate = new Date();

		this.loadForms();
	}

	loadForms() {
		this.createMarketingForm = this.formBuilder.group({
			description: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
			due_date: [null],
			module_id: [this.marketingParams.module_id],
			module_related_id: [this.marketingParams.module_related_id]
		});
	}

	get marketingControl() { return this.createMarketingForm.controls; }

	onSubmit() {
		this.isFormSubmitted = true;
		if (this.createMarketingForm.invalid) {
			return;
		}
		this.createMarketingForm.value.due_date = this.datepipe.transform(this.createMarketingForm.value.due_date, 'yyyy-MM-dd');
		this.marketingService.create(this.createMarketingForm.value)
			.subscribe(
				data => {
					this.toastr.success(this.translate.instant('marketings.messages.create'), this.translate.instant('marketings.title'));
					this.event.emit({ data: true });
					this.onCancel();
				}, error => {
					this.onCancel();
				});
	}

	onCancel() {
		this.onClose.next(false);
		this.bsModalRef.hide();
	}

}
