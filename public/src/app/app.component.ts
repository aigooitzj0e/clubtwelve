import { Component, DoCheck } from '@angular/core';
import { ApiService } from './api.service';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
	session: any;

	constructor(private _apiservice: ApiService, private _router: Router,
	private _route: ActivatedRoute) {
		this.session = sessionStorage.getItem('session');
	}

	ngDoCheck(){
		this.session = sessionStorage.getItem('session');
	}

	logout() {
		console.log('logoff()');
		this._apiservice.logout()
		.then((data) => {
			sessionStorage.removeItem('session');
			this.session = "";
			this._router.navigate(['']);
		})
		.catch((err)=> console.log("logout", err))
	}
}
