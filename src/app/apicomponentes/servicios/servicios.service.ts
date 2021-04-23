import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subitem, Vehiculos } from '../interfaces/interface_vehiculos';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
 

  constructor(private http:HttpClient) { 
   this.buscarVehiculo();
  }

  arrayVehiculos:Subitem[]=[];
  vehiculos:Vehiculos[]=[];
  

 buscarVehiculo(){

  
  
    this.http.get<Vehiculos[]>(`https://integrador.processoft.com.co/api/menutest`)
    .subscribe((respuesta)=>{
      this.vehiculos=respuesta
      this.arrayVehiculos=this.vehiculos[1].subitems;
      console.log(this.vehiculos[1].subitems);
    })
  




 }

}


