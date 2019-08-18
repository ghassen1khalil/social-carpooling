import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ScreensModule} from './screens/screens.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {PartialsModule} from './partials/partials.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ScreensModule,
    SharedModule,
    PartialsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
