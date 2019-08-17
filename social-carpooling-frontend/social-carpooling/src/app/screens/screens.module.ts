import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {NebularComponentsModule} from '../shared/nebular-components.module';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import { CarpoolingComponent } from './carpooling/carpooling.component';


@NgModule({
  declarations: [LoginComponent, HomeComponent, HeaderComponent, CarpoolingComponent],
  imports: [
    CommonModule,
    NebularComponentsModule,
  ],
  exports: [
    LoginComponent,
    HeaderComponent,
  ]
})
export class ScreensModule {
}
