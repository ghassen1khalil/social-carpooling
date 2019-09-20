import {Component, NgZone, OnInit} from '@angular/core';
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

  latitude: number;
  latitude1: number;
  longitude: number;
  longitude1: number;
  zoom: number;


  address: Object;
  formattedAddress: string;

  markers = [{latitude: 51.678418, longitude: 7.809007}, {latitude: 52.678418, longitude: 8.809007}];

  constructor(private formBuilder: FormBuilder,
              private tripService: TripService,
              public zone: NgZone) {
  }

  ngOnInit() {
    this.zoom = 10;

    this.rideForm = this.formBuilder.group({
      driverOrPassenger: [''],
      availablePlaces: [''],
      from: [''],
      rdv: [''],
      destination: [''],
      date: [''],
      time: [''],
      airConditionner: [''],
      smoking: [''],
      music: [''],
      luggage: [''],
    });
  }

  onClick() {
    const trip = new Trip();
    trip.availablePlaces = +this.rideForm.controls['availablePlaces'].value;
    trip.from = this.rideForm.controls['from'].value;
    trip.rdv = this.rideForm.controls['rdv'].value;
    trip.destination = this.rideForm.controls['destination'].value;
    trip.date = this.rideForm.controls['date'].value;
    trip.time = this.rideForm.controls['time'].value;

    console.log(trip);

    this.tripService.saveTrip(trip).subscribe(res => {
      console.log('Trip created successfully ID = ' + res);
    });
  }

  toggle(checked: boolean, obj: string) {
    if (obj === 'airConditionner') {
      this.isAirConditionned = checked;
    } else if (obj === 'smoking') {
      this.isSmoking = checked;
    } else if (obj === 'music') {
      this.isMusic = checked;
    } else if (obj === 'luggage') {
      this.isLuggage = checked;
    }
  }

  getAddress(place: object) {
    this.address = place['formatted_address'];
    this.formattedAddress = place['formatted_address'];
    this.zone.run(() => this.formattedAddress = place['formatted_address']);
  }

}
