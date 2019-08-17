import { Component, OnInit } from '@angular/core';
import {FacebookService} from '../../shared/services/facebook.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private facebookService: FacebookService) { }

  ngOnInit() {
  }

  public handleConnectClick(){
    this.facebookService.login().subscribe(result => {
    //this.facebookService.getConnectedUserName().subscribe(result => {
      console.log(result);
    });
  }

}
