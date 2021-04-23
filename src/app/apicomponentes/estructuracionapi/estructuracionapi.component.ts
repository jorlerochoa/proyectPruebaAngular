import { Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-estructuracionapi',
  templateUrl: './estructuracionapi.component.html'
})
export class EstructuracionapiComponent  {

  constructor(private router:Router) {

    if(!localStorage.getItem('token')){
      
      alert('Debes iniciar sesion');
      this.router.navigate(['']);
    }
   }

  PresentarVehiculo:string='';
 
}
