import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  //@Input() title: string;

  constructor(protected ref: NbDialogRef<LoginModalComponent>) {
  }

  ngOnInit() {
  }

  dismiss() {
    this.ref.close();
  }

}
