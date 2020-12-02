import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';
import { ListPaymentComponent } from './list-payment/list-payment.component';
import { NgrxPaymentComponent } from './ngrx-payment/ngrx-payment.component';

const ngrxpaymentRoutes: Routes = [
  { path: '', component: NgrxPaymentComponent },

];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ngrxpaymentRoutes)],
  declarations: [
    AddPaymentComponent,
    EditPaymentComponent,
    ListPaymentComponent,
    NgrxPaymentComponent
  ]
})
export class NgrxPaymentModule {}
