import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { respuesta } from '../interfaces/interface_login';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-datosuser',
  templateUrl: './datosuser.component.html',
  styleUrls: ['./datosuser.component.css']
})
export class DatosuserComponent  {

  constructor(private datosservice:ServicioService,private fb:FormBuilder,private router:Router) {

    if(!localStorage.getItem('token')){
      
      alert('Debes iniciar sesion');
      this.router.navigate(['']);
    }
    this. datosInit();
   }

   

  get respuesta(){

    return this.datosservice.respuesta_api;
  }

  formLogin:FormGroup=this.fb.group({

    id: this.respuesta.id,
    nombre:this.respuesta.nombre,
    ciudad:'',
    direccion:'',
    message:''
  })

  


  datos:respuesta={

   
    "id":0,
    "nombre":'',
    "ciudad":'',
    "direccion":'',
    "message":''
  }


  modificar(){

    
    const formdata=this.formLogin.value;
  
    this.datos={

      id: this.respuesta.id,
      nombre:formdata.nombre,
      ciudad:formdata.ciudad,
      direccion:formdata.direccion,
      message:''
      
    }
    this.datosservice.modificarUsuario(this.datos);
  }

  datosInit(){
    this.formLogin.patchValue({ nombre:this.respuesta.nombre, 
      ciudad:this.respuesta.ciudad, 
      direccion:this.respuesta.direccion});

  }
  

}
