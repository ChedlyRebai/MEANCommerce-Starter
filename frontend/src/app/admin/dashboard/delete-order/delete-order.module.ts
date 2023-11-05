import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteOrderRoutingModule } from './delete-order-routing.module';
import { DeleteOrderComponent } from './delete-order.component';


@NgModule({
  declarations: [
    DeleteOrderComponent
  ],
  imports: [
    CommonModule,
    DeleteOrderRoutingModule
  ]
})
export class DeleteOrderModule { }
