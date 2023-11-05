import { Order } from './../model/order.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url="http://localhost:4000/order"
  constructor(private http:HttpClient) {

  }
  


  getAllOrders(){
    return this.http.get<Order[]>(`${this.url}/getAllOrders`)
  }

  getOrderById(id:any){
    return this.http.get<Order>(`${this.url}/${id}`)
  }

  deleteById(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }

  addOrder(order:any){
    return this.http.post(`${this.url}/create`,order)
  }
}
