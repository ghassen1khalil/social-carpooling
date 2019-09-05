import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NebularComponentsModule} from '../shared/nebular-components.module';
import {HomeComponent} from './home/home.component';
import {PartialsModule} from '../partials/partials.module';
import {RideComponent} from './ride/ride.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';


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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBoNKbANJRmOlG28C1iYsHkWmd0scwf-cA',
      libraries: ['places']
    })
  ],
  exports: [
    HomeComponent,
    RideComponent,

  ]
})
export class ScreensModule {
}
