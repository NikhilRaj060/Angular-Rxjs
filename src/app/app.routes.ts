import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/rxjs', pathMatch: 'full' },
  {
    path: 'rxjs',
    loadChildren: () =>
      import('./rxjs-learning/rxjs-learning.routes').then(
        (m) => m.rxjsLearningRoutes
      ),
  },
];
