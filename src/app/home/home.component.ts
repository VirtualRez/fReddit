import { Component, OnInit } from '@angular/core';
//SERVICES
import {ApiService} from '../services/api.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
data:object[] = [{}];
subs: any;
  constructor(public _api:ApiService, public _user:UserService) { }

  ngOnInit() {
//GET
this.subs = this._api.get("https://cors-anywhere.herokuapp.com/https://www.reddit.com/r/pathofexile/new.json")
  .subscribe((apiResult) => {
    console.log(apiResult);
    this.data = apiResult["data"]["children"];//el array no está dentro del database, con lo cual tengo que meterme: apiResult["data"]["children"]
  }
  );

}
}
