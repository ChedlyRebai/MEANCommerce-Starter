import { DeleteComponent } from './../delete/delete.component';
import { Product } from './../../../model/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products?:Product[];
  constructor(private  dialogRef : MatDialog,private ProductService:ProductService,private dialog: MatDialog) {
    this.ProductService.getAllProducts().subscribe((data)=>{this.products=data})

   }


   openDialog(id:any){
    // this.dialogRef.open(DeleteComponent,{
    //   data : {
    //     id : id
    //   }
    // });
    // this.ProductService.deleteId=id
    let dialogRef = this.dialog.open(DeleteComponent, {
      data: id
    })
    dialogRef.afterClosed().subscribe(res => {
      // received data from dialog-component
      if (res.data=='ok'){
        this.ProductService.getAllProducts().subscribe((data)=>{this.products=data})
      }
    })
  }

   searchByName(searchName:String){
    if(searchName==""){
     this.ProductService.getAllProducts().subscribe((data) => { this.products = data })
    }else{
     this.products=this.products?.filter(prod=>prod.name?.toLowerCase().includes(searchName.toLowerCase()))
    }
   }
  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.ProductService.products);
      console.log(this.products);

    }, 2000);
  }

}
