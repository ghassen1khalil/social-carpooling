import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbInputModule,
  NbLayoutModule,
  NbThemeModule
} from '@nebular/theme';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbDatepickerModule.forRoot(),
    NbInputModule,
  ],
  exports: [
    NbThemeModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbDatepickerModule,
    NbInputModule,
  ]
})
export class NebularComponentsModule { }
