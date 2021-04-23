
import { Component, OnInit } from '@angular/core';
import {  Locate,array_Antioquia,array_Bogota,array_Valle } from '../interfaces/interface_location';
import { UserInterface } from '../interfaces/interface_user';
import { ServicioService } from '../servicios/servicio.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent {

  constructor(private users:ServicioService) { }

  departamento:Locate[]=[
    {id:1,nombre:'Antioquia'},
    {id:2,nombre:'Valle'},
    {id:3,nombre:'Bogota D.C.'}
  ];

  ciudad:Locate[]=[];
  depSelect:string='';

  user:UserInterface={

    nombre: '',
    email: '',
    password: '',
    ciudad: '',
    direccion: '',
    fecha_nacimiento: new Date()

  };

array:string='';
  submit(){
//console.log(this.user);

    this.users.registroUsuarios(this.user);
  }

  CambioDepartamento(e:any){
   
    if(e=='Antioquia'){
      this.ciudad=array_Antioquia;
    }
    else if(e=='Valle'){
      this.ciudad=array_Valle;
    }
    else{
      this.ciudad=array_Bogota;
    }
    //var t=eval("array_"+e);
    console.log("array_" + e);
    //this.array="array_" + e;
   

}

}
