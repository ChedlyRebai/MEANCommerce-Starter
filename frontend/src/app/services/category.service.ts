import { Category } from './../model/category.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  url="http://localhost:4000/category";
  constructor(private http:HttpClient) {}
  getAllCategorys(){
    return this.http.get<Category[]>(`${this.url}/getAll`)
  }

  deleteCategory(id:any){
    return this.http.delete(`${this.url}/${id}`).subscribe((data)=>{console.log(data)})
  }

  addCategory(newCategory:Category){
   return this.http.post(`${this.url}/create`,newCategory)
  }

  getCategoryById(id:String){
    return this.http.get<Category>(`${this.url}/getByid/${id}`)
  }

  updateCategory(id:any,data:any){
    return this.http.put<Category>(`${this.url}/update/${id}`,data)
  }
}
