
import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';
import { HttpClient } from '@angular/common/http';
import { Product } from './../../model/product.model';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { MatDialog } from '@angular/material/dialog';
import { PruductdetailsComponent } from '../pruductdetails/pruductdetails.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  categorys?: Category[]
  products ?:Product[];
  constructor(private http:HttpClient,public productservice:ProductService,
              private categoryService:CategoryService,private dialog: MatDialog
              ) {

   this.productservice.getAllProducts().subscribe((data) => { this.products = data })
   this.categoryService.getAllCategorys().subscribe((data) => {this.categorys=data})
  }

  //searchName!:String;
  searchByName(searchName:String){
   if(searchName==""){
    this.productservice.getAllProducts().subscribe((data) => { this.products = data })
   }else{
    this.products=this.products?.filter(prod=>prod.name?.toLowerCase().includes(searchName.toLowerCase()))
   }
  }


  searchByCategory(categ:any){

  if(categ=='all'){
    console.log(categ);
    this.productservice.getAllProducts().subscribe((data) => { this.products = data })
  }
    this.products=this.products?.filter(prod=> prod.category==categ)
  }

  openDialog(id:any){
    console.log(id)
    let dialogRef = this.dialog.open(PruductdetailsComponent, {
      data: id
    })
    //dialogRef.afterClosed().subscribe(res => {
      // received data from dialog-component
     /* if (res.data=='ok'){
        this.UsersService.getAllUsers().subscribe((data)=>{this.users=data})
      }*/
   // })
  }

  ngOnInit(): void {


  }


}
