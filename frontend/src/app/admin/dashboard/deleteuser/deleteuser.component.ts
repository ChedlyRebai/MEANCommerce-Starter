import { UsersService } from './../../../services/users.service';
import { Component, OnInit,Inject } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeleteuserComponent implements OnInit {

  constructor(private UsersService:UsersService,@Inject(MAT_DIALOG_DATA) public data: string,
  private dialogRef: MatDialogRef<DeleteuserComponent>) { }

  ngOnInit(): void {
  }

  deleteUser(){
    this.UsersService.deleteUser(this.data).subscribe((data)=>{console.log(data)})
    this.dialogRef.close({ data: 'ok' })

  }

  close(){
    this.dialogRef.close({data:'no'});
  }

}
