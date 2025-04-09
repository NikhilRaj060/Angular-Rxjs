import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, of, Subscription, take, timer, toArray } from 'rxjs';

@Component({
  selector: 'app-of-from-rxjs',
  imports: [CommonModule],
  templateUrl: './of-from-rxjs.component.html',
  styleUrl: './of-from-rxjs.component.scss',
  standalone: true
})
export class OfFromRxjsComponent implements OnInit {
  obs1$: Observable<any> = from([])
  obs1: any[] = [];

  obs2$: Observable<any> = of([
    { name: 'Apple', value: 1 },
    { name: 'Banana', value: 2 },
    { name: 'Cherry', value: 3 },
  ]);

  obs2: any[] = [];

  subscriptions: Subscription[] = [];
  obs3: any[] = [];
  obs4: any[] = [];

  ngOnInit(): void {

    let intObs$ = interval(1000);

    const sub = intObs$.pipe(take(10)).subscribe((data) => {
      this.obs1 = [...this.obs1, data];
      console.log(data);
    });

    this.subscriptions.push(sub);

    // this.obs1$.subscribe((data) => {
    //   console.log(data);
    //   this.obs1.push(data);;
    // });

    const sub2 = this.obs2$.subscribe((data) => {
      console.log(data);
      this.obs2 = data;
    });

    this.subscriptions.push(sub2);

    let intObs2$ = timer(3000 , 1000);

    const sub3 = intObs2$.pipe(take(3) , toArray()).subscribe((data) => {
      this.obs3 = data;
      console.log(data);
    });

    this.subscriptions.push(sub3);

    let intObs3$ = timer(10000 , 3000);

    const sub4 = intObs3$.pipe(take(3)).subscribe((data) => {
      console.log(data, "data 4");
      this.obs4.push(data);
    });

    this.subscriptions.push(sub4);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
