import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarpoolingComponent} from './carpooling/carpooling.component';
import {NebularComponentsModule} from '../shared/nebular-components.module';
import {HeaderComponent} from './header/header.component';
import {LoginModalComponent} from './login-modal/login-modal.component';
import {TimeSelectorComponent} from './time-selector/time-selector.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddressAutocompleteComponent } from './address-autocomplete/address-autocomplete.component';


@NgModule({
  declarations: [
    CarpoolingComponent,
    HeaderComponent,
    LoginModalComponent,
    TimeSelectorComponent,
    AddressAutocompleteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NebularComponentsModule,
  ],
  exports: [
    CarpoolingComponent,
    HeaderComponent,
    LoginModalComponent,
    TimeSelectorComponent,
    AddressAutocompleteComponent,
  ],
  entryComponents: [
    LoginModalComponent,
  ],
})
export class PartialsModule {
}
