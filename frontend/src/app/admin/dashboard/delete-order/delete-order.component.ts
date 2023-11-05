import { OrderService } from './../../../services/order.service';
import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeleteOrderComponent implements OnInit {

  constructor(private OrderService:OrderService,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<DeleteOrderComponent>) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close({data:'no'});
  }

  deleteOrder(){
    console.log(this.data)
    this.OrderService.deleteById(this.data).subscribe((data)=>{console.log(data)})
    this.dialogRef.close({ data: 'ok' })
  }
}
