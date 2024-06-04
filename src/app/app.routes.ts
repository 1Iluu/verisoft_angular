import { Routes } from '@angular/router';

import { LandinpageComponent } from './components/landinpage/landinpage.component';
import { LoginComponent } from './components/login/login.component';

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
];
