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

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule,  IonicModule.forRoot(), AppRoutingModule],
  providers: [
    ProvidersService,
    HttpClient,
    Brightness,
    AuthGuard,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
