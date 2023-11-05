import { Cart } from './../model/cart.model';
import { CartService } from './../services/cart.service';
import { ShoppingCartComponent } from './../shopping-cart/shopping-cart.component';
import { ShoppingcartComponent } from './../user/shoppingcart/shoppingcart.component';


import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  itemsNum?:any ;
  constructor(public auth:AuthService,private  dialogRef : MatDialog,public CartService:CartService) {
    if(this.auth.getDataFromToken()){
      console.log(this.auth.getDataFromToken()._id)
      this.CartService.getById(this.auth.getDataFromToken()._id).subscribe((data)=>{
        console.log(data.length);
        this.itemsNum=data.length
      })
    }

  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.CartService.getById(this.auth.getDataFromToken()._id).subscribe((data)=>{console.log(data);console.log(data.items?.length) })
    // }, 2000);
  }

  openDialog(){
    this.dialogRef.open(ShoppingCartComponent);
  }
}
