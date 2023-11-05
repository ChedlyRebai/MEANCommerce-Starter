import { Product } from './../../model/product.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})

export class UpdateproductComponent implements OnInit {


  updateProductForm?: FormGroup | any;
    categorys?:Category[];
    newCtageory?:Category;
    newproduct?:any;

    uptproduct?:Product ;


    product:any={
      __id:'',
      name:'',
      price: 0,
      description:'',
      category:'',
      image:''
    }
    constructor(private productService:ProductService,
                private categoryService:CategoryService,
                private activatedRoute: ActivatedRoute,
                private formBuilder: FormBuilder,
                private http:HttpClient,
                private route:Router) {
                  this.productService.getProductBySlug(this.activatedRoute.snapshot.params['slug']).subscribe((data)=>this.product=data)
                  this.productService.getProductBySlug(this.activatedRoute.snapshot.params['slug']).subscribe((data)=>this.uptproduct=data)
                  this.image=this.product.image
                  console.log(this.activatedRoute.snapshot.params['slug']);
                  this.categoryService.getAllCategorys().subscribe((data)=>{this.categorys=data;console.log(data+"cons")} );
    }
    image?:any;

    select(e:any){
      this.image=e.target.files[0];
    }
    onImageSelect(event:any) {
      this.updateProductForm?.patchValue({
        image: event.target.files[0]
      });
    }

    update(id:any){
     let fd=new FormData()
     fd.append('name',this.product.name)
     fd.append('description',this.product.description)
     fd.append('price',this.product.price)
     fd.append('category',this.product.category)
     fd.append('image',this.image)

     this.productService.updateProduct(id,fd).subscribe((data)=>{
       //this.route.navigate(['productlist'])
     })
     console.log(this.product._id);

    }
    updateProduct() {
      const formData = new FormData();
      formData.append('name', this.updateProductForm.get('name').value);
      formData.append('description', this.updateProductForm.get('description').value);
      formData.append('category', this.updateProductForm.get('category').value);
      formData.append('price', this.updateProductForm.get('price').value);
      formData.append('image', this.updateProductForm.get('image').value);
      this.productService.updateProduct(this.uptproduct?._id,formData).subscribe((data)=>{console.log(data)})
    }

    ngOnInit(): void {
      setTimeout(() => {
        console.log(this.product);
        console.log(this.uptproduct);
      }, 2000);
      this.categoryService.getAllCategorys().subscribe((data)=>{this.categorys=data;console.log(data+"ngonit")} );

      this.updateProductForm = this.formBuilder.group({
        name: [this.product.name],
        description: [this.product.description],
        price: [this.product.price],
      category: [this.product.category]
      });
    }



    /*addCategoryForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      description: new FormControl('', [Validators.required]),
    });*/

    addForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required,Validators.min(0)]),
      category: new FormControl('', [Validators.required]),
      image: new FormControl('', ),
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

  /*  addCategory(){
      this.ngOnInit();
        this.newCtageory=this.addCategoryForm.value;
        this.categoryService.addCategory(this.newCtageory)
        this.ngOnInit();
    }*/

 /*  deleteCategory(id:any){
        this.ngOnInit();
        this.categoryService.deleteCategory(id)
        console.log(id);
        this.ngOnInit();
    }*/








}
