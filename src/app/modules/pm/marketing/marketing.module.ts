import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
	ModalModule,
	TooltipModule,
	DatepickerModule,
	BsDatepickerModule,
	BsDropdownModule
} from 'ngx-bootstrap';
import { ExportAsModule } from 'ngx-export-as';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPermissionsModule } from 'ngx-permissions';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DataTablesModule } from 'angular-datatables';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { SharedModule } from '../../../shared/shared.module';
import { MarketingRoutingModule } from './marketing-routing.module';

import { MarketingComponent } from './pages/marketing/marketing.component';
import { CreateMarketingModalComponent } from './components/create-marketing-modal/create-marketing-modal.component';
import { EditMarketingModalComponent } from './components/edit-marketing-modal/edit-marketing-modal.component';
import { MarketingDetailComponent } from './pages/marketing-detail/marketing-detail.component';

@NgModule({
	declarations: [
		MarketingComponent,
		CreateMarketingModalComponent,
		EditMarketingModalComponent,
		MarketingDetailComponent
	],
	imports: [
		CommonModule,
		MarketingRoutingModule,
		NgSelectModule,
		FormsModule,
		ReactiveFormsModule,
		NgxPermissionsModule,
		DataTablesModule,
		ExportAsModule,
		DragDropModule,
		ModalModule.forRoot(),
		TooltipModule.forRoot(),
		DatepickerModule.forRoot(),
		BsDatepickerModule.forRoot(),
		BsDropdownModule.forRoot(),
		TranslateModule.forChild({
			loader: {
				provide: TranslateLoader,
				useFactory: (HttpLoaderFactory),
				deps: [HttpClient]
			}
		}),
		SharedModule
	],
	exports: [MarketingDetailComponent],
	entryComponents: [CreateMarketingModalComponent, EditMarketingModalComponent]
})

export class MarketingModule { }

// Required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
