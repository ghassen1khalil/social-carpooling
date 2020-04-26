import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {LoginModalComponent} from '../../partials/login-modal/login-modal.component';
import {ProfilePreferencesComponent} from '../../partials/profile-preferences/profile-preferences.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialogService: NbDialogService) {
  }

  ngOnInit() {
    // TODO check if user already set his preferences
    this.dialogService.open(ProfilePreferencesComponent);
  }

}
