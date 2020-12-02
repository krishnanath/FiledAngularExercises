import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';
import { ListPaymentComponent } from './list-payment/list-payment.component';



@NgModule({
  declarations: [AddPaymentComponent, EditPaymentComponent, ListPaymentComponent],
  imports: [
    CommonModule
  ]
})
export class NgrxPaymentModule { }
