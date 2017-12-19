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
	return this._http.get('/api/login').map(res=>res.json()).toPromise();
	}
	allUsers(){
		console.log("admin allusers");
		return this._http.get('/api/allusers').map(res=>res.json()).toPromise();
	}
	//Jerseys
	newJersey(jersey){
		console.log("create a jersey");
		return this._http.post('/api/createjersey', jersey).map(res=>res.json()).toPromise();
	}
	allJerseys(){
		console.log("all jerseys");
		return this._http.get('/api/alljerseys').map(res=>res.json()).toPromise();
	}
	getJersey(j_id){
		console.log('hit getJersey in service');
		return this._http.post('/api/getJersey', {j_id: j_id}).map(res=>res.json()).toPromise();
	}
	deleteJersey(jersey){
		return this._http.post('/api/jersey/destroy', jersey).map(res=>res.json()).toPromise();
	}

}
