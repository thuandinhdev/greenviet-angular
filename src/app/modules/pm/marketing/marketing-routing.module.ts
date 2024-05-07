import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { MarketingComponent } from './pages/marketing/marketing.component';
import { MarketingDetailComponent } from './pages/marketing-detail/marketing-detail.component';

const routes: Routes = [
	{
		path: '',
		component: MarketingComponent
	},
	{
		path: 'detail',
		canActivate: [NgxPermissionsGuard],
		component: MarketingDetailComponent,
		data: {
			breadcrumbs: {
				text: "common.detail",
				icon: "fa fa-product-hunt",
				show: true,
				isHome: true
			}
		}
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class MarketingRoutingModule { }
