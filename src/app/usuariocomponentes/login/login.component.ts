
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginUser } from '../interfaces/interface_login';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private users:ServicioService) { }

  formLogin:FormGroup=this.fb.group({

    email: '',
    password: ''
  })

  user:LoginUser={
    email: '',
    password: ''
  }

  ngOnInit(): void {
  }

  validaLogin(){


    const formdata=this.formLogin.value;
  
    this.user={

      email: formdata.email,
      password: formdata.password
      
    }
    this.users.validaLogin(this.user);

     
}

}
