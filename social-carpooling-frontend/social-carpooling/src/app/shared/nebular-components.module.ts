import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  NbButtonModule,
  NbCardModule, NbCheckboxModule,
  NbDatepickerModule, NbDialogModule, NbIconModule,
  NbInputModule,
  NbLayoutModule, NbSelectModule, NbSpinnerModule, NbStepperModule,
  NbThemeModule, NbUserModule
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';


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
    NbUserModule,
    NbEvaIconsModule,
    NbIconModule,
    NbDialogModule.forRoot(),
    NbSelectModule,
    NbCheckboxModule,
    NbStepperModule,
    NbSpinnerModule,


  ],
  exports: [
    NbThemeModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbDatepickerModule,
    NbInputModule,
    NbUserModule,
    NbEvaIconsModule,
    NbIconModule,
    NbDialogModule,
    NbSelectModule,
    NbCheckboxModule,
    NbStepperModule,
    NbSpinnerModule,

  ]
})
export class NebularComponentsModule {
}
