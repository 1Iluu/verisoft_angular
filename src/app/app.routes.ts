import { Routes } from '@angular/router';

import { LandinpageComponent } from './components/landinpage/landinpage.component';
import { LoginComponent } from './components/login/login.component';

import { PacienteComponent } from './components/paciente/paciente.component';

import { HomeComponent } from './components/home/home.component';
import { ListarsegurosComponent } from './components/paciente/seguro/listarseguros/listarseguros.component';

export const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'landing', pathMatch: 'full'
  },
  {
    path: 'landing', component: LandinpageComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home',component: HomeComponent
    
  },

  {
    path:'paciente',component:PacienteComponent,
    children:[
        {
            path:'seguros',component:ListarsegurosComponent
        },
        

    ]

}




    
];
