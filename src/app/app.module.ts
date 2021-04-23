import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ApicomponentesModule } from './apicomponentes/apicomponentes.module';
import { UsuariocomponentesModule } from './usuariocomponentes/usuariocomponentes.module';
import { AppRoutingModule } from './app-routing-modulo';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field/form-field-module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   ApicomponentesModule,
   UsuariocomponentesModule,
   AppRoutingModule,
   ReactiveFormsModule,
   FormsModule,
   BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
