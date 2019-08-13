import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './core/routing/app-routing.module';
import { AppComponent } from './app.component';
import {NbButtonModule, NbLayoutModule, NbThemeModule} from '@nebular/theme';
import {ScreensModule} from './screens/screens.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {NebularComponentsModule} from './shared/nebular-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ScreensModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
