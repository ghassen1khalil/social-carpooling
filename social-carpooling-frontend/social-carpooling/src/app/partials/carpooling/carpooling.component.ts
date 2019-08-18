import {Component, Input, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

}
