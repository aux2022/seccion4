import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { contadorComponent } from './contador/contador.component';
import { HeroeComponents } from './heroes/heroe/heroe.component';


@NgModule({
  declarations: [
    AppComponent,
    contadorComponent,
    HeroeComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
