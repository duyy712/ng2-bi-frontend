import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login.component';
import {GetReportComponent} from './get-report.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'report',
    component: GetReportComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

// - Updated Export
export const routing = RouterModule.forRoot(routes);