import {Component, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {FacebookService} from '../../core/services/facebook.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {


  constructor(protected ref: NbDialogRef<LoginModalComponent>,
              private facebookService: FacebookService,
              private http: HttpClient) {
  }

  ngOnInit() {
  }

  dismiss() {
    this.ref.close();
  }

  doLogin() {
    this.facebookService.login().subscribe(result => {
      window.open(result, '_self');
    });
  }

}
