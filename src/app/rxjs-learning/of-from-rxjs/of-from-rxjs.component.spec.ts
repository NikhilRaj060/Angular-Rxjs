import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfFromRxjsComponent } from './of-from-rxjs.component';

describe('OfFromRxjsComponent', () => {
  let component: OfFromRxjsComponent;
  let fixture: ComponentFixture<OfFromRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfFromRxjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfFromRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
