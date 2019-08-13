import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NbButtonModule, NbCardModule, NbLayoutModule, NbThemeModule} from '@nebular/theme';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
  ],
  exports: [
    NbThemeModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
  ]
})
export class NebularComponentsModule { }
