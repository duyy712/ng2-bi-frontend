import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login.component';
import {ReportComponent} from './report.component';
import {ReportDetailComponent} from './report-detail.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
    {
    path: 'detail/:id',
    component: ReportDetailComponent
  },

];

// - Updated Export
export const routing = RouterModule.forRoot(routes);