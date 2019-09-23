import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Trip} from '../../core/model/trip';
import {TripService} from '../../core/services/trip.service';
import LatLng = google.maps.LatLng;
import {Coordinates} from '../../core/model/coordinates';
import {Marker} from '../../core/model/marker';

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
  longitude: number;
  zoom: number;

  /*public fromMarker: Coordinates;
  public destinationMarker: Coordinates;*/
  public markers: Marker[] = [];


  constructor(private formBuilder: FormBuilder,
              private tripService: TripService,
              public zone: NgZone) {
  }

  ngOnInit() {
    this.latitude = 36.81897;
    this.longitude = 10.16579;
    this.zoom = 5;
    this.buildForm();
  }

  private buildForm() {
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

  setCoordinates(coordinates: Coordinates, type: number) {
    let marker: Marker = new Marker();
    marker.coordinates = coordinates;
    marker.type = type;
    if (this.markers.length > 0) {
      let index: number = -1;
      for (let m of this.markers) {
        if (m.type === marker.type) {
          index = this.markers.indexOf(m);
        }
      }
      if (index !== -1) {
        this.markers.splice(index, 1);
        this.markers.push(marker);
      } else {
        this.markers.push(marker);
      }
    } else {
      this.markers.push(marker);
    }
  }

}
