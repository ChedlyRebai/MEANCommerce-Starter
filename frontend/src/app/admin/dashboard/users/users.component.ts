import { UpdateuserComponent } from './../updateuser/updateuser.component';
import { DeleteuserComponent } from './../deleteuser/deleteuser.component';
import { UsersService } from './../../../services/users.service';
import { User } from 'src/app/model/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users?:User[];
  user?:User;
  constructor(private dialog: MatDialog,private UsersService:UsersService,private auth:AuthService,private  dialogRef : MatDialog) {
      this.UsersService.getAllUsers().subscribe((data)=>{this.users=data})
   }

   registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),

    role: new FormControl('', [Validators.required ])
  });

  registre(){
    this.ngOnInit()
    this.registerForm.value;
    this.user=this.registerForm.value
    console.log(this.user)
    this.auth.register(this.registerForm.value).subscribe((data)=> console.log(data))
    this.auth.register(this.user).subscribe((data)=> console.log(data))
    this.ngOnInit()
  }

  ngOnInit(): void {
    this.UsersService.getAllUsers().subscribe((data)=>{this.users=data})
  }

  searchByName(searchName:String){
    if(searchName==""){
     this.UsersService.getAllUsers().subscribe((data) => { this.users = data })
    }else{
     this.users=this.users?.filter(user=>user.name?.toLowerCase().includes(searchName.toLowerCase()))
    }
   }


   openDialog(id:any){
    let dialogRef = this.dialog.open(DeleteuserComponent, {
      data: id
    })
    dialogRef.afterClosed().subscribe(res => {
      // received data from dialog-component
      if (res.data=='ok'){
        this.UsersService.getAllUsers().subscribe((data)=>{this.users=data})
      }
    })
  }
   openupdateDialog(id:any){
    let dialogRef = this.dialog.open(UpdateuserComponent, {
      data: id
    })
    dialogRef.afterClosed().subscribe(res => {
      // received data from dialog-component
      if (res.data=='ok'){
        this.UsersService.getAllUsers().subscribe((data)=>{this.users=data})
      }
    })
  }

}
