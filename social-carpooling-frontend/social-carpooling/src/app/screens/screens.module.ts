import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {NebularComponentsModule} from '../shared/nebular-components.module';
import {HomeComponent} from './home/home.component';
import {PartialsModule} from '../partials/partials.module';
import { RideComponent } from './ride/ride.component';
import {FormsModule} from '@angular/forms';
import {NbDatepickerModule} from '@nebular/theme';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    RideComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NebularComponentsModule,
    PartialsModule,
  ],
  exports: [
    LoginComponent,
    HomeComponent,
    RideComponent,

  ]
})
export class ScreensModule {
}
