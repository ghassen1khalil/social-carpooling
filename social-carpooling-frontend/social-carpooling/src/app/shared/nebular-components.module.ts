import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule, NbDialogModule, NbIconModule,
  NbInputModule,
  NbLayoutModule,
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

  ]
})
export class NebularComponentsModule {
}
