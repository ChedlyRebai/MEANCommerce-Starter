import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order } from './../../../model/order.model';
import { OrderService } from './../../../services/order.service';
import { OrderDetailsComponent } from './../order-details/order-details.component';
import { DeleteOrderComponent } from './../delete-order/delete-order.component';
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  search?:Order[]
  orders?:Order[]
  constructor(private OrderService:OrderService,private dialog: MatDialog,private  dialogRef : MatDialog) {
    this.OrderService.getAllOrders().subscribe((data)=>{this.orders=data;console.log(data)})
   }

  ngOnInit(): void {
    this.OrderService.getAllOrders().subscribe((data)=>{this.orders=data;console.log(data)})
  }

  openDialog(id:any){
    let dialogRef = this.dialog.open(DeleteOrderComponent, {
      data: id
    })
    dialogRef.afterClosed().subscribe(res => {
      // received data from dialog-component
      if (res.data=='ok'){
        this.OrderService.getAllOrders().subscribe((data)=>{this.orders=data})
      }
    })
  }

  openDetailDialog(id:any){
    let dialogRef = this.dialog.open(OrderDetailsComponent, {
      data: id
    })
    dialogRef.afterClosed().subscribe(res => {
      // received data from dialog-component
      if (res.data=='ok'){
        this.OrderService.getAllOrders().subscribe((data)=>{this.orders=data})
      }
    })
  }

  searchByName(searchName:String){
    if(searchName==""){
     this.OrderService.getAllOrders().subscribe((data) => { this.orders = data })
    }else{
    const searchParNom=this.orders?.filter(prod=>prod.nom?.toLowerCase().includes(searchName.toLowerCase()))
    const searchParPrenom =this.orders?.filter(prod=>prod.prenom?.toLowerCase().includes(searchName.toLowerCase()))
    this.orders=[...searchParNom! , ...searchParPrenom!]
    }
  }


}
