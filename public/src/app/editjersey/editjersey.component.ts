import { Component, OnInit } from '@angular/core';
import { Jersey } from './../jersey';
import { ApiService } from './../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editjersey',
  templateUrl: './editjersey.component.html',
  styleUrls: ['./editjersey.component.css']
})
export class EditjerseyComponent implements OnInit {
	thisJersey: object;
	j_id = '';


  constructor(private _apiservice: ApiService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
		this.getJersey();
  }

	getJersey(){
		this._route.paramMap.subscribe(params => {
			this.j_id = params.get('id');
			console.log(this.j_id);
		})
		console.log('grabbing jersey..');
		this._apiservice.getJersey(this.j_id)
		.then((data)=> {
			console.log(data);
			this.thisJersey = data;
		})
	}

}
