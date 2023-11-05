import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category.model';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';
import { UpdateCategoryComponent } from '../update-category/update-category.component';
@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  categorys?:Category[]
  newCategory:Category={};
  constructor(private CategoryService:CategoryService,private dialog: MatDialog) {
    this.CategoryService.getAllCategorys().subscribe((data)=>{this.categorys=data;console.log(data)})
   }

  ngOnInit(): void {
  }

  addForm=new FormGroup({
    nomCategorie: new FormControl('',[Validators.required]),
    gamme:new FormControl('',[Validators.required])
  })

  addNewCategory(){
      console.log(this.newCategory)
      this.CategoryService.addCategory(this.newCategory).subscribe((data)=>{
        console.log(data);
        this.CategoryService.getAllCategorys().subscribe((newData)=>this.categorys=newData)


      })
  }
  openDialog(id:any){
    let dialogRef = this.dialog.open(DeleteCategoryComponent, {
      data: id
    })
    dialogRef.afterClosed().subscribe(res => {
      // received data from dialog-component
      if (res.data=='ok'){
        this.CategoryService.getAllCategorys().subscribe((data)=>{this.categorys=data})
      }
    })
  }
  openupdateDialog(id:any){
    let dialogRef = this.dialog.open(UpdateCategoryComponent, {
      data: id
    })
    dialogRef.afterClosed().subscribe(res => {
      // received data from dialog-component
      if (res.data=='ok'){
        this.CategoryService.getAllCategorys().subscribe((data)=>{this.categorys=data})
      }
    })
  }


  searchByName(searchName:String){
    if(searchName==""){
     this.CategoryService.getAllCategorys().subscribe((data) => { this.categorys = data })
    }else{
     this.categorys=this.categorys?.filter(category=>category.name?.toLowerCase().includes(searchName.toLowerCase()))
    }
   }
}
