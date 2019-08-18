import {Component, Input, OnInit} from '@angular/core';
import {LoginModalComponent} from '../login-modal/login-modal.component';
import {NbDialogService} from '@nebular/theme';

@Component({
  selector: 'app-carpooling',
  templateUrl: './carpooling.component.html',
  styleUrls: ['./carpooling.component.scss']
})
export class CarpoolingComponent implements OnInit {

  @Input()
  nbAvailablesPlaces: string;

  @Input()
  from: string;

  @Input()
  destination: string;

  @Input()
  time: string;

  @Input()
  rdv: string;

  @Input()
  driver: string;

  constructor(private dialogService: NbDialogService) {
  }

  ngOnInit() {
  }

  open() {
    this.dialogService.open(LoginModalComponent);
  }

}
