import { Routes } from '@angular/router';
import { JobResolver } from './core/services/job.resolver';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path:'',
    loadComponent:()=>
      import('./features/home/pages/home-page/home-page').then(m=>m.HomePage),
    resolve: {
      jobs: JobResolver
    }
  }
];
