import { Routes } from '@angular/router';
import { PacienteComponent } from './components/paciente/paciente.component';
import { LandinpageComponent } from './components/landinpage/landinpage.component';
import { LoginComponent } from './components/login/login.component';
import { oncologoComponent } from './components/oncologo/oncologo.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'landing', pathMatch: 'full'
      },
    {
        path:'landin',component:LandinpageComponent
    },

    {
        path:'',component:LandinpageComponent
    },
    {
        path:'seguros',component:PacienteComponent 
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'alergias',component:oncologoComponent 
    },
    {
        path:'cirugias',component:PacienteComponent 
    },
    
];
