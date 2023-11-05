import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingcartRoutingModule } from './shoppingcart-routing.module';
import { ShoppingcartComponent } from './shoppingcart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShoppingcartComponent
  ],
  imports: [
    CommonModule,
    ShoppingcartRoutingModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule,

  ]
})
export class ShoppingcartModule { }
