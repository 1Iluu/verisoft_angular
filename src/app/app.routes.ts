import { Routes } from '@angular/router';
import { LandinpageComponent } from './components/landinpage/landinpage.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CrearseguroComponent } from './components/paciente/seguro/crearseguro/crearseguro.component';
import { SeguroComponent } from './components/paciente/seguro/seguro.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { ListarcirugiasComponent } from './components/paciente/listarcirugias/listarcirugias.component';
import { CreaeditacirugiasComponent } from './components/paciente/creaeditacirugias/creaeditacirugias.component';
import { CreaeditaalergiasComponent } from './components/oncologo/creaeditaalergias/creaeditaalergias.component';
import { ListaralergiasComponent } from './components/oncologo/listaralergias/listaralergias.component';
import { DashboardLayoutComponent } from './components/layouts/dashboard-layout/dashboard-layout.component';
import { EspecialidadComponent } from './components/oncologo/especialidad/especialidad.component';
import { CrearEditarEspecialidadComponent } from './components/oncologo/especialidad/crear-editar-especialidad/crear-editar-especialidad.component';
import { TipoTratamientoComponent } from './components/paciente/tipo-tratamiento/tipo-tratamiento.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: LandinpageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'seguros',
        component: SeguroComponent,
        children: [
          { path: 'nuevo', component: CrearseguroComponent },
          { path: 'ediciones/:id', component: CrearseguroComponent },
        ],
      },
      {
        path: 'alergias',
        component: ListaralergiasComponent,
        children: [
          { path: 'nuevo', component: CreaeditaalergiasComponent },
          { path: 'ediciones/:id', component: CreaeditaalergiasComponent },
        ],
      },
      {
        path: 'cirugias',
        component: ListarcirugiasComponent,
      },
      {
        path: 'cirugias',
        component: PacienteComponent,
        children: [
          { path: 'nuevo', component: CreaeditacirugiasComponent },
          { path: 'ediciones/:id', component: CreaeditacirugiasComponent },
        ],
      },
      {
        path: 'especialidades',
        component: EspecialidadComponent,
        children: [
          { path: 'nuevo', component: CrearEditarEspecialidadComponent },
          { path: 'ediciones/:id', component: CrearEditarEspecialidadComponent },
        ]
      },
      {
        path: 'tipos-tratamiento',
        component: TipoTratamientoComponent
      }
    ],
  },
];
