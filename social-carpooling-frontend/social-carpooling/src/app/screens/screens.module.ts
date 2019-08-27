import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NebularComponentsModule} from '../shared/nebular-components.module';
import {HomeComponent} from './home/home.component';
import {PartialsModule} from '../partials/partials.module';
import { RideComponent } from './ride/ride.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    RideComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NebularComponentsModule,
    PartialsModule,
  ],
  exports: [
    HomeComponent,
    RideComponent,

  ]
})
export class ScreensModule {
}
