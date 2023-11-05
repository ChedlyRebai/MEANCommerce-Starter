import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { CartService } from './../services/cart.service';
import { AuthService } from './../services/auth.service';

import { Item } from 'src/app/model/item.model';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { Product } from '../model/product.model';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingCartComponent implements OnInit {

  cart?:any;
  items?:Item[];
  products?:Product[]
  constructor(private auth:AuthService,private  dialogRef : MatDialog ,private cartService:CartService) {
    console.log(this.auth.getDataFromToken()._id)
    this.cartService.getById(this.auth.getDataFromToken()._id).subscribe((data)=>{
      this.cart=data;
      this.items=data.items
      console.log(this.cart);
      console.log(data);
      })
   }

   deleteItem(id:any){
    this.cartService.deleteFromCart(id).subscribe((data)=>{
      this.ngOnInit()

    })

   }

  ngOnInit(): void {
    this.cartService.getById(this.auth.getDataFromToken()._id).subscribe((data)=>{
      this.cart=data;
      this.items=data.items
      console.log(this.cart);
      console.log(data);
      })
  }



  close(){
    this.dialogRef.closeAll();
  }

}
