import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"; //importar modulos de rutas de angular
import { CabeceraComponent } from "./cabecera/cabecera.component";
import { BodyComponent } from "./body/body.component";


const routes: Routes = [
  //aquí pondremos el orden de rutas de los componentes a visualizar en la app




];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule{}
