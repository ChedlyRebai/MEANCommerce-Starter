import { CategoryService } from './../../../services/category.service';
import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from './../../../services/users.service';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UpdateCategoryComponent implements OnInit {

  updateCateg:Category={};
  id?:String;
  constructor(private CategoryService:CategoryService,private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<UpdateCategoryComponent>
    ) {
    this.CategoryService.getCategoryById(this.data).subscribe((data)=>{
      this.updateCateg=data
      this.id=data._id
    })
   }

  ngOnInit(): void {
  }

  updateForm=new FormGroup({
    nomCategorie: new FormControl('',[Validators.required]),
    gamme:new FormControl('',[Validators.required])
  })

  updateCategory(){
     this.CategoryService.updateCategory(this.id,this.updateCateg).subscribe((data)=>{
      this.dialogRef.close({ data: 'ok' })
      console.log(data)
     })
  }

  close(){
    this.dialogRef.close({data:'no'});
  }


}
