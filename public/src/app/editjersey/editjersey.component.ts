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

  constructor(private _apiservice: ApiService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }

	updateJersey
}
