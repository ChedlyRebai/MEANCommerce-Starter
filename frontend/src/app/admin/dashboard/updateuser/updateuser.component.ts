import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from './../../../services/users.service';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UpdateuserComponent implements OnInit {

  user?:User;
  constructor(private dialog: MatDialog,private UsersService:UsersService,private auth:AuthService,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<UpdateuserComponent>
    ) {
        this.UsersService.getUser(this.data).subscribe((data)=>{this.user=data; console.log(data)})
   }

  ngOnInit(): void {
  }

  updateForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
    role: new FormControl('', [Validators.required ])
  });

  update(){
     this.UsersService.updateUser(this.user?._id,this.user).subscribe((data)=>console.log(data))
     console.log(this.user)
     this.dialogRef.close({ data: 'ok' })
  }

  close(){
    this.dialogRef.close({data:'no'});
  }
}
