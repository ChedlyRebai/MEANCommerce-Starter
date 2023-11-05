import { CategoryService } from './../../../services/category.service';
import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeleteCategoryComponent implements OnInit {

  constructor(private CategoryService:CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<DeleteCategoryComponent>) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close({data:'no'});
  }

  deleteCategory(){
    console.log(this.data)
    this.CategoryService.deleteCategory(this.data)
    //this.CategoryService.deleteCategory(this.data).subscribe((data)=>{console.log(data)})
    this.dialogRef.close({ data: 'ok' })
  }

}
