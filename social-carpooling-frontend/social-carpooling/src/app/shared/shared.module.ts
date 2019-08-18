import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FacebookService} from '../core/services/facebook.service';
import {HttpClientModule} from '@angular/common/http';
import {NebularComponentsModule} from './nebular-components.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NebularComponentsModule,
  ],
  providers: [FacebookService],
  exports: [NebularComponentsModule]
})
export class SharedModule {
}
