import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser, respuesta } from '../interfaces/interface_login';
import { UserInterface } from '../interfaces/interface_user';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient,private router:Router) { }

  respuesta_api:respuesta={

    "token":'',
    "id":0,
    "message":'',
    "nombre":'',
    "ciudad":'',
    "direccion":'',
  }

  get respuesta(){

    return this.respuesta_api;
  }


   registroUsuarios(user:UserInterface){

    this.http.post<respuesta>('http://localhost:8000/api/store',user)
    .subscribe((response)=>{
     if(response){
        alert('El usuario se registro corectamente');
     }
      console.log(response);
     })
     
   }
   validaLogin(data:LoginUser){
    
      
      this.http.post<respuesta>('http://localhost:8000/api/login',data)
      .subscribe((response)=>{
       this.respuesta_api=response;
       if(response.token){
        alert('Bienvenido');
        localStorage.setItem('token',JSON.stringify(response.token));
        localStorage.setItem('usuario',JSON.stringify(response));
        this.router.navigate(['catalogo']);
       }
      
        console.log(response);
        
        
       })
   }
 
   modificarUsuario(data:respuesta){
    
      
    this.http.put<respuesta>('http://localhost:8000/api/update',data)
    .subscribe((response)=>{
     this.respuesta_api=response;
     alert('El usuario se actuaizo corectamente');
      console.log(this.respuesta);
      
      
      
     })
 }
  
}
