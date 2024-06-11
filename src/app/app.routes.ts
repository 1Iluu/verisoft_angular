import { Routes } from '@angular/router';

import { LandinpageComponent } from './components/landinpage/landinpage.component';
import { LoginComponent } from './components/login/login.component';

import { PacienteComponent } from './components/paciente/paciente.component';
import { segGuard } from './guard/seguridad.guard';
import { HomeComponent } from './components/home/home.component';
import { ListarsegurosComponent } from './components/paciente/seguro/listarseguros/listarseguros.component';
import { CrearseguroComponent } from './components/paciente/seguro/crearseguro/crearseguro.component';
import { SeguroComponent } from './components/paciente/seguro/seguro.component';

export const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'landing', pathMatch: 'full'
  },
  {
    path: 'landing', component: LandinpageComponent
  },
  {
    path: 'login', component: LoginComponent,
    
  },


  {
    path: 'home',component: HomeComponent,
    canActivate: [segGuard], // solo construcciones, se debe agregar a cada uno
    
  },

  {
    path:'seguros',component:SeguroComponent,
    children:[
            {path:'nuevo',component:CrearseguroComponent},
            {path:'ediciones/:id',component:CrearseguroComponent}
                   
    ],
    canActivate: [segGuard], // solo construcciones, se debe agregar a cada uno

}




    
];
