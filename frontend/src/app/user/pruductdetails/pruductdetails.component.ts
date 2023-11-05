import { AuthService } from './../../services/auth.service';
import { CartService } from './../../services/cart.service';
import { Product } from './../../model/product.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-pruductdetails',
  templateUrl: './pruductdetails.component.html',
  styleUrls: ['./pruductdetails.component.css'],

})
export class PruductdetailsComponent implements OnInit {


    qte:Number;
    product:any;
    userid:String;
    imagesrc:any="e";

    constructor(


    private route:Router,
    private cartService:CartService,
    private activatedRoute: ActivatedRoute,
    private http:HttpClient,
    private auth:AuthService,
    private prodcutService:ProductService) {
      this.qte=1;
      this.userid=this.auth.getDataFromToken()._id;
      //console.log(this.activatedRoute.snapshot.params['slug']);
      //this.prodcutService.getProductBySlug(this.activatedRoute.snapshot.params['slug']).subscribe((data)=>{this.product=data; })
      this.prodcutService.getProductBySlug(this.activatedRoute.snapshot.params['slug']).subscribe((data)=>{this.product=data; console.log(data) })

   }



  show(n:any){
        console.log(n);
  }

  image?:any;
  select(e:any){
    this.qte=e.target.value;
  }

   addToCart(){
   // ,product.price,product.category
    this.cartService.addToCart(this.product._id,this.qte,this.userid,this.product.price,this.product.image,this.product.name,this.product.category)
  }
  ngOnInit(): void {

  }



}
