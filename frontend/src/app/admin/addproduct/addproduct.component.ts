import { HttpClient } from '@angular/common/http';
import { CategoryService } from './../../services/category.service';
import { Category } from './../../model/category.model';
import { ProductService } from './../../services/product.service';
import { Product } from './../../model/product.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateFile } from 'src/app/shared/validatefile';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  categorys?:Category[];
  newCtageory?:Category;
  newproduct?:any;
  constructor(private productService:ProductService,
              private categoryService:CategoryService,
              private http:HttpClient,
              private route:Router) {
                this.categoryService.getAllCategorys().subscribe((data)=>{this.categorys=data;console.log(data+"cons")} );

  }

  product:any={
    name:'',
    price: 0,
    description:'',
    category:'',
  }




  image?:any;

  select(e:any){
    this.image=e.target.files[0];
  }

  save(){
   let fd=new FormData()
   fd.append('name',this.product.name)
   fd.append('description',this.product.description)
   fd.append('price',this.product.price)
   fd.append('category',this.product.category)
   fd.append('image',this.image)

   this.productService.addProduct(fd).subscribe((data)=>{
     this.route.navigate(['productlist'])
   })
  }

  ngOnInit(): void {
    this.categoryService.getAllCategorys().subscribe((data)=>{this.categorys=data;console.log(data+"ngonit")} );
  }



  addCategoryForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  addForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required,Validators.min(0)]),
    category: new FormControl('', [Validators.required]),
    image: new FormControl(null, [Validators.required]),
    //image: new FormControl('', [validateImage])
  });

/*
  onFileChange(event) {
    const file = event.target.files[0];
    this.addForm.get('image').setValue(file);
  }*/


  saveProduct(){
      //this.newproduct.image=this.image
      this.productService.addProduct(this.newproduct).subscribe((data)=>{console.log(data)})
      console.log(this.image);
  }

  /*addCategory(){
    this.ngOnInit();
      this.newCtageory=this.addCategoryForm.value;
      this.categoryService.addCategory(this.newCtageory)
      this.ngOnInit();
  }*/

 deleteCategory(id:any){
      this.ngOnInit();
      this.categoryService.deleteCategory(id)
      console.log(id);
      this.ngOnInit();
  }




}
