import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  deleteId?:any;
  users?:User[];
  url="http://localhost:4000";
  constructor(private http:HttpClient) {
    this.http.get<User[]>(`${this.url}`).subscribe((data)=>{this.users=data})
   }

  updateUser(id:any,user:any){
    return this.http.put(`${this.url}/upt/${id}`,user)
  }

  getAllUsers(){
   return this.http.get<User[]>(`${this.url}`)
  }

  deleteUser(id:any){
   return this.http.delete(`${this.url}/${id}`)
  }

  getUser(id:any){
    return this.http.get<User>(`${this.url}/${id}`)
  }
}
