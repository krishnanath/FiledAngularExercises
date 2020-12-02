import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path:'ngrx-payment',
    loadChildren: '../app/ngrx-payment/ngrx-payment.module#Ngrx-paymentModule'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
