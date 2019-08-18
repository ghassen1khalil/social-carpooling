import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {NebularComponentsModule} from '../shared/nebular-components.module';
import {HomeComponent} from './home/home.component';
import {PartialsModule} from '../partials/partials.module';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    NebularComponentsModule,
    PartialsModule,
  ],
  exports: [
    LoginComponent,
    HomeComponent,

  ]
})
export class ScreensModule {
}
