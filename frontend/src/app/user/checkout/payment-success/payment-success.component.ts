import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {
  time=5;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<PaymentSuccessComponent>,private route:Router) {
      setInterval(()=>{
        this.time -=1
    },1000)
      setTimeout(() => {

        this.dialogRef.close()
        this.route.navigate(['productlist'])
      }, 5000);

   }

  ngOnInit(): void {
  }





  close(){

    this.dialogRef.close({data:'no'});
  }

}
