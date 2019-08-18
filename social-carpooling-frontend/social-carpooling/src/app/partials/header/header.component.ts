import { Component, OnInit } from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {LoginModalComponent} from '../login-modal/login-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
  }

  open() {
    this.dialogService.open(LoginModalComponent, {
      context: {
        title: 'This is a title passed to the dialog component',
      },
    });
  }

}
