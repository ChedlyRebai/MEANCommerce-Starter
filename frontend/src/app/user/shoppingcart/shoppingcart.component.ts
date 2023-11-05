
import { Product } from './../../model/product.model';
import { Cart } from './../../model/cart.model';
import { CartService } from './../../services/cart.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.model';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  cart?:any;
  items?:Item[];
  products?:Product[]
  constructor(private auth:AuthService,private cartService:CartService) {
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

}
