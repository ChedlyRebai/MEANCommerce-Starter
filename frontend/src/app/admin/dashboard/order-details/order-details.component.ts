import { Order } from './../../../model/order.model';
import { OrderService } from './../../../services/order.service';
import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrderDetailsComponent implements OnInit {

  order?:Order;
  constructor(private OrderService:OrderService,@Inject(MAT_DIALOG_DATA) public data: string,
  private dialogRef: MatDialogRef<OrderDetailsComponent>) {
    this.OrderService.getOrderById(this.data).subscribe((data)=>{this.order=data; console.log(data)})
  }

  ngOnInit(): void {
  }

  getOrder(){
    this.OrderService.getOrderById(this.data).subscribe((data)=>{console.log(data)})
    this.dialogRef.close()
  }

  close(){
    this.dialogRef.close();
  }

}
