import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  imports: [],
  templateUrl: './rxjs-learning.component.html',
  styleUrl: './rxjs-learning.component.scss',
  standalone: true
})
export class RxjsLearningComponent implements OnInit {

  observable$: Observable<number[]> = of([]);
  numberArray: any[] = [];

  ngOnInit(): void {
    of([1, 2, 3]).subscribe({
      next: (value) => {
        console.log(value);
        this.numberArray.push(value)
      }
    })

    from([1, 2, 3]).subscribe({
      next: (value) => {
        console.log(value);
        this.numberArray.push(value)
      }
    })
  }

  trackByFn(index: number) {
    return index
  }
}
