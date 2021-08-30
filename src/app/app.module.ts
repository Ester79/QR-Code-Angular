import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // añadimos la importación del módulo de rutas (orden de visualización de los componentes)

import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angular2-qrcode';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    BodyComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QRCodeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
