import { Routes } from '@angular/router';

import { LandinpageComponent } from './components/landinpage/landinpage.component';
import { LoginComponent } from './components/login/login.component';
import { ListarsegurosComponent } from './components/paciente/listarseguros/listarseguros.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { CrearpacienteComponent } from './components/paciente/crearpaciente/crearpaciente.component';

export const routes: Routes = [
    
  {
    path: '',
    redirectTo: 'landing', pathMatch: 'full'
  },
{
    path:'landin',
    component:LandinpageComponent
},
{
    path:'',component:LandinpageComponent
},
{
    path:'seguros',component:PacienteComponent ,
    children:[
      {
          path:'nuevo',component:CrearpacienteComponent
      },
      {
          path:'ediciones/:id',component:CrearpacienteComponent
      },

  ]

},
{
    path:'login',component:LoginComponent
}

    
];
