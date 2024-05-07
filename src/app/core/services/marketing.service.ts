import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Marketing } from '../../shared/models/marketing.model';

import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root'
})

export class MarketingService {
	private apiUrl = environment.apiUrl;

	constructor(private http: HttpClient) { }

	getAllMarketings(params) {
		return this.http.post(`${this.apiUrl}/api/marketing/list`, params);
	}

	changeMarketingsStatus(marketings) {
		return this.http.post(`${this.apiUrl}/api/marketing/update-list`, marketings);
	}

	getAll() {
		return this.http.get<Marketing[]>(`${this.apiUrl}/api/marketing`);
	}

	getById(id: number) {
		return this.http.get(`${this.apiUrl}/api/marketing/${id}`);
	}

	create(marketing: Marketing) {
		return this.http.post(`${this.apiUrl}/api/marketing`, marketing);
	}

	update(marketing: Marketing) {
		return this.http.put(`${this.apiUrl}/api/marketing/${marketing.id}`, marketing);
	}

	delete(id: number) {
		return this.http.delete(`${this.apiUrl}/api/marketing/${id}`);
	}
}
