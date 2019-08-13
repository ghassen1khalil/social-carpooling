import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {NbButtonModule, NbLayoutModule, NbThemeModule} from '@nebular/theme';
import {NebularComponentsModule} from '../shared/nebular-components.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [LoginComponent, HomeComponent],
  imports: [
    CommonModule,
    NebularComponentsModule,
  ],
  exports: [
    LoginComponent,
  ]
})
export class ScreensModule { }
