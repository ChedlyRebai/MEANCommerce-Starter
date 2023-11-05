import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Cart } from '../model/cart.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {


  url="http://localhost:4000/cart"

  constructor(private http: HttpClient,private auth:AuthService) { }

  //_id= this.auth.getDataFromToken()._id
  addToCart(productId: String, quantity: Number,_id:String,price:Number,image:String,name:String,category:String) {

    let data = {
      _id: _id,
      productId: productId,
      name: name,
      price: price,
      quantity: quantity,
      image: image,
      category: category
    }
    console.log(typeof( _id))
    console.log(productId)
    this.http.post(`${this.url}/addToCart`,data).subscribe((response) => {
      console.log(response);
    });
  }

  // return this.http.post(`${this.url}/addToCart`, { productId, quantity,_id,price,image,name,category});

  //http://localhost:4000/cart/63d17c223e86e63e51e11c6c
  deleteFromCart(Id:any) {
  console.log("service "+Id)
  //console.log("service iduser "+this._id)
  const _id= this.auth.getDataFromToken()._id
  console.log("id user "+_id)
  return this.http.delete(`${this.url}/${Id}/${_id}`)
  }

  getCart() {
    return this.http.get<Cart[]>(`${this.url}/getAllCards`);
  }

  getById(id:any){
    return this.http.get<Cart>(`${this.url}/${id}`)
  }
}
