import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProvidersService } from './services/providers.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {Brightness} from '@ionic-native/brightness/ngx';
import { AuthGuard } from './guard/auth.guard';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NoopAnimationsModule,
    MatNativeDateModule,
    MatTableModule
  ],
  providers: [
    ProvidersService,
    HttpClient,
    Brightness,
    AuthGuard,
    NativeGeocoder,
    Geolocation,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
