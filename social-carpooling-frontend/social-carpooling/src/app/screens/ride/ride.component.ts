import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Trip} from '../../core/model/trip';
import {TripService} from '../../core/services/trip.service';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.scss']
})
export class RideComponent implements OnInit {

  public rideForm: FormGroup;

  public driverOrPassenger: string;
  public nbPlaces: string;
  public from: string;
  public destination: string;
  public rdv: string;
  public isAirConditionned: boolean = false;
  public isSmoking: boolean = false;
  public isMusic: boolean = false;
  public isLuggage: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private tripService: TripService) {
  }

  ngOnInit() {
    this.rideForm = this.formBuilder.group({
      driverOrPassenger: [''],
      availablePlaces: [''],
      from: [''],
      rdv: [''],
      destination: [''],
      date: [''],
      time: this.formBuilder.group({
        hour: [''],
        minute: ['']
      }),
      airConditionner: [''],
      smoking: [''],
      music: [''],
      luggage: [''],
    })
  }

  onClick() {
    let trip = new Trip();
    trip.availablePlaces = +this.rideForm.controls['availablePlaces'].value;
    trip.from = this.rideForm.controls['from'].value;
    trip.rdv = this.rideForm.controls['rdv'].value;
    trip.destination = this.rideForm.controls['destination'].value;
    trip.date = this.rideForm.controls['date'].value;
    trip.time = this.rideForm.controls['time'].value;

    console.log(trip);

    this.tripService.saveTrip(trip).subscribe(res => {
      console.log("Trip created successfully ID = " + res);
    })

    /*Object.keys(this.rideForm.controls).forEach( key => {
      console.log(this.rideForm.controls[key].value);
    });*/
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
    //console.log(obj);
  }

}
