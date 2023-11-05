import { Category } from 'src/app/model/category.model';
import { Product } from './../model/product.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  deleteId?:any;
  products?:Product[]
  url="http://localhost:4000/products";
  constructor(private http: HttpClient) {
     this.http.get<Product[]>(`${this.url}`).subscribe((data)=>{this.products=data})
   }

  getAllProducts(){
    return this.http.get<Product[]>(`${this.url}`)
  }

  addProduct(product:any){
    return this.http.post(`${this.url}/create`,product)
  }

  getProductBySlug(slug:String){
    return this.http.get(`${this.url}/${slug}`)
  }

  updateProduct(id:any,product:any){
    return this.http.put(`${this.url}/${id}`,product)
  }

  deleteProduct(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }

  //http://localhost:4000/products/search/name/newproduct
  searchByName(name:any){
    return this.http.get<Product[]>(`${this.url}/search/name/${name}`)
  }

  //http://localhost:4000/products/search/categ?categ=lapin
  searchByCateg(category:any){
    return this.http.get(`${this.url}/search/categ/categ/${category}`)
  }


}
