
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

const routes: Routes = [{ path: '', component: CheckoutComponent }, {path:'success',component:PaymentSuccessComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
