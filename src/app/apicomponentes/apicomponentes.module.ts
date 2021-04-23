import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ListadoComponent } from './listado/listado.component';
import { DatosComponent } from './datos/datos.component';
import { EstructuracionapiComponent } from './estructuracionapi/estructuracionapi.component';



@NgModule({
  declarations: [
    BusquedaComponent,
    ListadoComponent,
    DatosComponent,
    EstructuracionapiComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EstructuracionapiComponent
  ]
})
export class ApicomponentesModule { }
