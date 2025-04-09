import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rxjs-list',
  imports: [],
  templateUrl: './rxjs-list.component.html',
  styleUrl: './rxjs-list.component.scss',
  standalone: true
})
export class RxjsListComponent {

  rxjsOprators: string[] = [
    'of-from',
    'toArry',
    'map',
    'tap',
    'custom',
    'pluck',
  ]
  router: Router = inject(Router);

  routeTo(route: string) { 
    this.router.navigate(['rxjs' , route])
   }
}
