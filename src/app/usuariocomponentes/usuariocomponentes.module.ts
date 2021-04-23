import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing-modulo';
import { DatosuserComponent } from './datosuser/datosuser.component';
import { LogoutComponent } from './logout/logout.component';
import {MatSelectModule} from '@angular/material/select';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    DatosuserComponent,
    LogoutComponent 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule
  ],
  

})
export class UsuariocomponentesModule { }
