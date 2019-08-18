import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.scss']
})
export class RideComponent implements OnInit {

  public driverOrPassenger: string;
  public nbPlaces: string;
  public from: string;
  public destination: string;
  public rdv: string;
  public isAirConditionned: boolean = false;
  public isSmoking: boolean = false;
  public isMusic: boolean = false;
  public isLuggage: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onClick(event) {
    console.log('Time ' + event);
  }

  toggle(checked: boolean, obj: string) {
    if (obj === 'airConditionner'){
      this.isAirConditionned = checked;
    } else if (obj === 'smoking'){
      this.isSmoking = checked;
    } else if (obj === 'music'){
      this.isMusic = checked;
    } else if (obj === 'luggage'){
      this.isLuggage = checked;
    }
    console.log(obj);
  }

}
