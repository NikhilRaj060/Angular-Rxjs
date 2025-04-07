import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RxjsLearningComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-rxjs';
}
