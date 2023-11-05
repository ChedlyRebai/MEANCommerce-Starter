
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isconnected:Boolean=false;
  isadmin:Boolean=false;
  UserCourant?:any;
  userName?:String;
  users?:User[]
  url="http://localhost:4000";
  constructor(private http: HttpClient) { }

  login(user:User){
     return this.http.post(`${this.url}/login`,user)
  }

  register(user:User){
   return  this.http.post(`${this.url}/register`, user )
  }

  logout(){
    localStorage.removeItem('token')
  }

  islogged(){
    let token=localStorage.getItem('token')
    if(token){
      return true
    }
    return false
  }

  isAdmin(){
    let token=localStorage.getItem('token')
    if(token){
      let data=JSON.parse(window.atob(token.split('.')[1]))
      if(data.role=='admin'){
        return true;
      }
      return false;
    }
    return false;
  }

  getDataFromToken(){
      let token=localStorage.getItem('token')
      if(token){
        let data=JSON.parse(window.atob(token.split('.')[1]))
        return data;
      }else{
      return false;
  }
}
}
