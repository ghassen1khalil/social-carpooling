import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { } from 'googlemaps';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';


@Component({
  selector: 'app-address-autocomplete',
  templateUrl: './address-autocomplete.component.html',
  styleUrls: ['./address-autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AddressAutocompleteComponent,
      multi: true
    }
  ]
})
export class AddressAutocompleteComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  @Input()
  adressType: string;
  // @Output() setAddress: EventEmitter<any> = new EventEmitter();
  setAddress: string;
  @ViewChild('addresstext', {static: true}) addresstext;

  autocompleteInput: string;
  private onChange: (value: string) => void;


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
      // this.invokeEvent(place);
      this.writeValue(place);
      this.onChange(place.formatted_address);
    });
  }

  /*invokeEvent(place: any) {
    this.setAddress = (place);
  }*/

  registerOnChange(onChange: (value: string) => void) {
    this.onChange = onChange;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(place: any): void {
    // here
    this.setAddress = place;
  }

}
