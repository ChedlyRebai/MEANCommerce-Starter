import { OrderService } from './../../services/order.service';
import { Order } from './../../model/order.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Item } from 'src/app/model/item.model';
import { Product } from 'src/app/model/product.model';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { validateFile } from 'src/app/shared/validatefile';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart?:any;
  items?:Item[];
  products?:Product[]
  order:Order ={};
  newOrder:any;
  constructor(private auth:AuthService,private cartService:CartService,private OrderService:OrderService,private  dialogRef : MatDialog,private dialog: MatDialog) {
    console.log(this.auth.getDataFromToken()._id)
    console.log(this.auth.getDataFromToken().email)
    this.cartService.getById(this.auth.getDataFromToken()._id).subscribe(async (data)=>{
      this.cart=  data;
      //this.order.total= data.total
     // this.items= data.items
     // this.order.items= data.items
      //console.log(this.cart);
      let newa:any=[]
     newa=data
     for (let index = 0; index < newa.length; index++) {

      for (const key in newa[index]) {

        if(key=='total'){
          this.order.total=newa[index][key]
        }
        if(key=='items'){
          let newItems:any=newa[index][key]
          this.order.items=newItems
          console.log(this.order.items)
          console.log(newItems)
         console.log(newa[index][key]);
        }
         // console.log(newa[index][key] + key);
      }
     }
      })

      this.order.email=this.auth.getDataFromToken().email.email;

      console.log(this.auth.getDataFromToken().email.email)
   }



  ngOnInit(): void {

  }

  checkoutForm = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    pays: new FormControl('', [Validators.required]),

    ntlf: new FormControl('', [Validators.required,Validators.min(8)]),
    adresserue: new FormControl('', [Validators.required]),
    ville: new FormControl('', [Validators.required]),
    etat: new FormControl('', [Validators.required]),
    codepostal: new FormControl('', [Validators.required]),
    //image: new FormControl('', [validateImage])
  });

  async passeCommande(){
      console.log(this.order)
      console.log(this.checkoutForm.value)

      this.OrderService.addOrder(this.order).subscribe((data)=>{console.log(data);this.openDialog()})
  }


  openDialog(){
    // this.dialogRef.open(DeleteComponent,{
    //   data : {
    //     id : id
    //   }
    // });
    // this.ProductService.deleteId=id
    let dialogRef = this.dialog.open(PaymentSuccessComponent, {

    })
    dialogRef.afterClosed().subscribe(res => {
      // received data from dialog-component

    })
  }

}
