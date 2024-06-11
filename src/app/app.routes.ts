import { Routes } from '@angular/router';
import { PacienteComponent } from './components/paciente/paciente.component';
import { LandinpageComponent } from './components/landinpage/landinpage.component';
import { LoginComponent } from './components/login/login.component';
import { oncologoComponent } from './components/oncologo/oncologo.component';
import { ListarcirugiasComponent } from './components/paciente/listarcirugias/listarcirugias.component';
import { CreaeditacirugiasComponent } from './components/paciente/creaeditacirugias/creaeditacirugias.component';
import { CreaeditaalergiasComponent } from './components/oncologo/creaeditaalergias/creaeditaalergias.component';
import { ListaralergiasComponent } from './components/oncologo/listaralergias/listaralergias.component';


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
        path:'alergias',component:ListaralergiasComponent,
        
    },
    {
        path:'alergias',component:oncologoComponent,
        children:[
            {path:'nuevo',component: CreaeditaalergiasComponent},
            {path:'ediciones/:id',component:CreaeditaalergiasComponent}
        ]
    },
    {
        path:'cirugias',component: ListarcirugiasComponent, 
    },
    {
        path:'cirugias',component: PacienteComponent, 
        children:[
            {path:'nuevo', component:CreaeditacirugiasComponent},
            {path:'ediciones/:id',component:CreaeditacirugiasComponent}
            
        ]
    }
    
];
