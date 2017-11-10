import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  // AppComponent
	logout(){
		console.log('logout service');
		return this._http.get('/api/logout').map(res=>res.json()).toPromise();
	}
  // Login
	register(user){
		return this._http.post('/api/register', user).map(res=>res.json()).toPromise();
	}
	login(user){
		console.log("in service's login method", user);
		return this._http.post('/api/login', user).map(res=>res.json()).toPromise();
	}
  // Admin
	admin(){
	console.log("admin users");
	return this._http.get('/api/login', user).map(res=>res.json()).toPromise();
	}
	allUsers(){
		console.log("admin allusers");
		return this._http.get('/api/allusers').map(res=>res.json()).toPromise();
	}
}
