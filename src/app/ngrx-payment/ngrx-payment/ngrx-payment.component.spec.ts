import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxPaymentComponent } from './ngrx-payment.component';

describe('NgrxPaymentComponent', () => {
  let component: NgrxPaymentComponent;
  let fixture: ComponentFixture<NgrxPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
