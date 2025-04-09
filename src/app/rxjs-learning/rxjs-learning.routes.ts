import { Routes } from '@angular/router';
import { RxjsLearningComponent } from './rxjs-learning.component';
import { OfFromRxjsComponent } from './of-from-rxjs/of-from-rxjs.component';
import { RxjsListComponent } from './rxjs-list/rxjs-list.component';

export const rxjsLearningRoutes: Routes = [
  {
    path: '',
    component: RxjsLearningComponent,
    children: [
      { path: 'list', component: RxjsListComponent },
      { path: 'of-from', component: OfFromRxjsComponent },
      { path: 'toArry', component: OfFromRxjsComponent },
      { path: 'map', component: OfFromRxjsComponent },
      { path: 'pluck', component: OfFromRxjsComponent },
      { path: 'custom', component: OfFromRxjsComponent },
      { path: 'tap', component: OfFromRxjsComponent },
      { path: 'merge', component: OfFromRxjsComponent },
      { path: 'filter', component: OfFromRxjsComponent },
      { path: 'catchError', component: OfFromRxjsComponent },
    ],
  },
];