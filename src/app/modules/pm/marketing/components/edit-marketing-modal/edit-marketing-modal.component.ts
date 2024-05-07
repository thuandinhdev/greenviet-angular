import { Component, OnInit, EventEmitter } from '@angular/core';
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

import { Marketing } from '../../../../../shared/models/marketing.model';

import { datepickerConfig } from '../../../../../core/helpers/admin.helper';

import { UserService } from '../../../../../core/services/user.service';
import { MarketingService } from '../../../../../core/services/marketing.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';

@Component({
	selector: 'app-edit-marketing-modal',
	templateUrl: './edit-marketing-modal.component.html',
	styleUrls: ['./edit-marketing-modal.component.scss']
})

export class EditMarketingModalComponent implements OnInit {
	public event: EventEmitter<any> = new EventEmitter();
	public onClose: Subject<boolean>;
	editMarketingForm: FormGroup;
	marketing: Marketing;
	loginUser: any;
	isFormSubmitted = false;
	users = [];
	assignMembers = [];
	datepickerConfig = datepickerConfig;

	constructor (
		public translate: TranslateService,
		public bsModalRef: BsModalRef,
		private formBuilder: FormBuilder,
		private toastr: ToastrService,
		private userService: UserService,
		private marketingService: MarketingService,
		private authenticationService: AuthenticationService
	) {
		this.authenticationService.loginUser.subscribe(x => this.loginUser = x);
		this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
	}

	ngOnInit() {
		this.onClose = new Subject();

		this.loadForms();
	}

	loadForms() {

		if(this.marketing.due_date){
			this.marketing.due_date = new Date(this.marketing.due_date);
		}

		this.editMarketingForm = this.formBuilder.group({
			id: [this.marketing.id],
			description: [this.marketing.description, [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
			status: [this.marketing.status, Validators.required],
			due_date: [this.marketing.due_date],
			module_id: [this.marketing.module_id],
			module_related_id: [this.marketing.module_related_id]
		});
	}

	get marketingControl() { return this.editMarketingForm.controls; }

	onSubmit() {
		this.isFormSubmitted = true;
		if (this.editMarketingForm.invalid) {
			return;
		}

		this.marketingService.update(this.editMarketingForm.value)
			.subscribe(
				data => {
					this.toastr.success(this.translate.instant('marketings.messages.update'), this.translate.instant('marketings.title'));
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
