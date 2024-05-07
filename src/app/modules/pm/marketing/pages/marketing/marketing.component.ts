import {
	AfterViewInit,
	Component,
	OnDestroy,
	OnInit,
	ViewChild
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxRolesService } from 'ngx-permissions';
import { TranslateService } from '@ngx-translate/core';
import {
	CdkDragDrop,
	moveItemInArray,
	transferArrayItem
} from '@angular/cdk/drag-drop';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

import { MarketingService } from '../../../../../core/services/marketing.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';

import { CreateMarketingModalComponent } from '../../components/create-marketing-modal/create-marketing-modal.component';
import { EditMarketingModalComponent } from '../../components/edit-marketing-modal/edit-marketing-modal.component';

@Component({
	selector: 'app-marketing',
	templateUrl: './marketing.component.html',
	styleUrls: ['./marketing.component.scss'],
	providers:[DatePipe]
})

export class MarketingComponent implements OnInit {
	public modalRef: BsModalRef;
	marketings: any;
	marketingParams: any;
	loginUser: any;
	datepickerConfigs = { dateInputFormat: 'YYYY-MM-DD' }
	isPageloaded = false;

	constructor(
		public translate: TranslateService,
		public ngxRolesService: NgxRolesService,
		private modalService: BsModalService,
		private http: HttpClient,
		private toastr: ToastrService,
		private marketingService: MarketingService,
		private authenticationService: AuthenticationService
	) {
		this.authenticationService.loginUser.subscribe(x => this.loginUser = x);
	}

	ngOnInit() {
		this.marketingParams = {
			'length': 10,
			'module_id': 6,
			'module_related_id': 0
		}

		this.getMarketings();
	}

	drop(event: CdkDragDrop<string[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
		}

		this.changeMarketingsStatus();
	}

	getMarketings() {
		this.marketingService.getAllMarketings({'length': 10})
			.subscribe(
				data => {
					this.marketings = data;
					this.isPageloaded = true;
				}, error => {});
	}

	changeMarketingsStatus() {
		this.marketingService.changeMarketingsStatus(this.marketings)
			.subscribe(
				data => {
					this.toastr.success(this.translate.instant('marketings.messages.status'), this.translate.instant('marketings.title'));
					this.getMarketings();
				}, error => {});
	}

	openMarketingCreateModal() {
		let modalConfigs = {
			animated: true,
			keyboard: true,
			backdrop: true,
			ignoreBackdropClick: false,
			class: "inmodal modal-dialog-centered modal-md animated fadeIn",
			initialState: {
				marketingParams: this.marketingParams
			}
		};

		this.modalRef = this.modalService.show(CreateMarketingModalComponent, modalConfigs);
		this.modalRef.content.event.subscribe(data => {
			this.getMarketings();
		});
	}

	openMarketingEditModal(marketing) {
		let modalConfigs = {
			animated: true,
			keyboard: true,
			backdrop: true,
			ignoreBackdropClick: false,
			class: "inmodal modal-dialog-centered modal-md animated fadeIn",
			initialState: {
				marketing: marketing
			}
		};
		this.modalRef = this.modalService.show(EditMarketingModalComponent, modalConfigs);
		this.modalRef.content.event.subscribe(data => {
			this.getMarketings();
		});
	}

	deleteMarketing(id) {
		Swal.fire({
			title: this.translate.instant('common.swal.title'),
			text: this.translate.instant('common.swal.text'),
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
			cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
		}).then((result) => {
			if (result.value) {
				this.marketingService.delete(id)
				.subscribe(
					data => {
						this.toastr.success(this.translate.instant('marketings.messages.delete'), this.translate.instant('marketings.title'));
						this.getMarketings();
					});
			}
		});
	}

	saveMarketingsDetail(marketing, index, value) {
		marketing[index] = value;
		this.marketingService.update(marketing)
			.subscribe(
				data => {
					this.toastr.success(this.translate.instant('marketings.messages.update'), this.translate.instant('marketings.title'));
					this.getMarketings();
				});
	}

}
