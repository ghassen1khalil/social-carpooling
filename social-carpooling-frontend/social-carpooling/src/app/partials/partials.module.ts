import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarpoolingComponent} from './carpooling/carpooling.component';
import {NebularComponentsModule} from '../shared/nebular-components.module';
import {HeaderComponent} from './header/header.component';
import {LoginModalComponent} from './login-modal/login-modal.component';


@NgModule({
  declarations: [
    CarpoolingComponent,
    HeaderComponent,
    LoginModalComponent,
  ],
  imports: [
    CommonModule,
    NebularComponentsModule,
  ],
  exports: [
    CarpoolingComponent,
    HeaderComponent,
    LoginModalComponent,
  ]
})
export class PartialsModule {
}
