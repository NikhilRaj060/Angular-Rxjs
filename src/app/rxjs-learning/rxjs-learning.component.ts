import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  imports: [RouterModule,RouterOutlet,CommonModule],
  templateUrl: './rxjs-learning.component.html',
  styleUrl: './rxjs-learning.component.scss',
  standalone: true
})
export class RxjsLearningComponent implements OnInit {

  router: Router = inject(Router);

  ngOnInit(): void {
    this.router.navigate(['rxjs','list'])
  }
}
