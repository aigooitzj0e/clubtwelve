import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { ApiService } from './../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Jersey } from './../jersey';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	userList: User[] = [];
	adminUser: User = new User;
	newJersey: Jersey = new Jersey();
	errors: Array<string> = [];

  constructor(private _apiservice: ApiService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
		this.admin();
  }

  admin(){
  	this._apiservice.admin()
  	.then((data)=>{
  		data.errors ? (
  			console.log("admin not found"),
  			this._router.navigate([''])
  		) : (
  			this.adminUser = data
 		)
  	})
  	.catch((err)=> console.log(err))
  }

	allUsers(){
		console.log("grabbing all them users");
		this._apiservice.allUsers()
		.then((data)=>{
			console.log(data)
			this.userList = data;
		})
		.catch((err)=>{
			console.log(err, "allUsers catch error")
		})
	}



}
