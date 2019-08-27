import {Driver} from './driver';

export class Trip {
  id: string;
  date: string;
  time: string;
  from: string;
  destination: string;
  availablePlaces: number
  rdv: string;
  driver: Driver;

  constructor(){}


  /*constructor(date: string, time: string, from: string, destination: string, availablePlaces: number, rdv: string, driver: Driver) {
    this.date = date;
    this.time = time;
    this.from = from;
    this.destination = destination;
    this.availablePlaces = availablePlaces;
    this.rdv = rdv;
    this.driver = driver;
  }*/


}
