
import { Output } from '@angular/core';
import { Component, EventEmitter } from '@angular/core';
import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  constructor(private vehiculos:ServiciosService) { }

  @Output() Nuevo:EventEmitter<string>= new EventEmitter<string>()

  get vehiculo(){
    return this.vehiculos.arrayVehiculos;
  }
  MostrarDatos(datos:string){
    this.Nuevo.emit(datos);
  }
}
