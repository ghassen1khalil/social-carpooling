import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { } from 'googlemaps';


@Component({
  selector: 'app-address-autocomplete',
  templateUrl: './address-autocomplete.component.html',
  styleUrls: ['./address-autocomplete.component.scss']
})
export class AddressAutocompleteComponent implements OnInit, AfterViewInit {

  @Input() adressType: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('addresstext', {static: true}) addresstext;

  autocompleteInput: string;


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }

  private getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
      {
        componentRestrictions: { country: 'TN' },
        types: [this.adressType]  // 'establishment' / 'address' / 'geocode'
      });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      this.invokeEvent(place);
    });
  }

  invokeEvent(place: Object) {
    this.setAddress.emit(place);
  }

}
