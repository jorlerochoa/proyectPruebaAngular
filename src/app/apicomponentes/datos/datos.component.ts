import { Output } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, EventEmitter } from '@angular/core';
import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html'
})
export class DatosComponent  {

  constructor(private vehiculos:ServiciosService) { }

  @ViewChild('img') img!:ElementRef;
  @ViewChild('tituloencabezado') tituloencabezado!:ElementRef<HTMLInputElement>;
  @ViewChild('nombre') nombre!:ElementRef<HTMLInputElement>;
  @ViewChild('precio') precio!:ElementRef;
  @ViewChild('especificacion') especificacion!:ElementRef<HTMLInputElement>;
 
  @ViewChild('tablehidden') tablehidden!:ElementRef<HTMLInputElement>;
  
  @Input() PresentarVehiculo:string=''; 
  @Input() valorindice:number=-1;
  indice:number=0;
  valorhidden:string='hidden';

  get vehiculo(){

    return this.vehiculos.arrayVehiculos
  }
  cargarInfo(){
    this.valorhidden=''; 

   
    
    this.vehiculo.forEach((element)=> {
     console.log(element.subtitle+ "--"+ this.PresentarVehiculo);
     
        if(element.subtitle== this.PresentarVehiculo){
          
          this.img.nativeElement.src=element.img;
          this.tituloencabezado.nativeElement.innerText=element.subtitle;
          this.nombre.nativeElement.innerText=element.subtitle;
          this.precio.nativeElement.innerText=element.price;
          this.especificacion.nativeElement.innerHTML="<a href="+element.action+">"+element.action+ "</a>";
         
          this.tablehidden.nativeElement.hidden=false;
        }
        
      });
     
      
   }

}
