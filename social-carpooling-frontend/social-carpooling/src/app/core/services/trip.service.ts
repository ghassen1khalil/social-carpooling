import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Trip} from '../model/trip';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }


  public saveTrip(trip: Trip): Observable<string> {
    console.log(environment.context + 'trip/save');
    return this.http.post<string>(environment.context + 'trip/save', trip);
  }
}
