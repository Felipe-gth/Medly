import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonApp, IonRouterOutlet, IonicRouteStrategy, provideIonicAngular } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared-module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonApp, IonRouterOutlet, AppRoutingModule, SharedModule],
  providers: [
    provideIonicAngular(),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
