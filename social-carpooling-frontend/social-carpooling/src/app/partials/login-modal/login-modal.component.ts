import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {FacebookService} from '../../core/services/facebook.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  constructor(protected ref: NbDialogRef<LoginModalComponent>,
              private facebookService: FacebookService) {
  }

  ngOnInit() {
  }

  dismiss() {
    this.ref.close();
  }

  doLogin() {
    this.facebookService.login().subscribe(result => {
      //this.facebookService.getConnectedUserName().subscribe(result => {
      console.log(result);
    });
  }

}
