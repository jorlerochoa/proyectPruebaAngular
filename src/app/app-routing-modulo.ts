import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstructuracionapiComponent } from './apicomponentes/estructuracionapi/estructuracionapi.component';
import { DatosuserComponent } from './usuariocomponentes/datosuser/datosuser.component';
import { LoginComponent } from './usuariocomponentes/login/login.component';
import { LogoutComponent } from './usuariocomponentes/logout/logout.component';
import { RegistroComponent } from './usuariocomponentes/registro/registro.component';


const routes: Routes = [
    {
        path: 'catalogo',
        component: EstructuracionapiComponent,
        pathMatch:'full'
    },
    {
        path: '',
        component: LoginComponent,
        pathMatch:'full'
    },
    {
        path: 'registro',
        component: RegistroComponent,
        pathMatch:'full'
    },
    {
        path: 'datos',
        component: DatosuserComponent,
        pathMatch:'full'
    },

    {
        path: 'logout',
        component: LogoutComponent,
        pathMatch:'full'
    },
    {
        path: '**',
        component: LoginComponent
        
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
