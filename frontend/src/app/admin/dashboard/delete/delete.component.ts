import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeleteComponent implements OnInit {
id:any;
  constructor(private ProductService:ProductService,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<DeleteComponent>) {

   }

  close(){
    this.dialogRef.close({data:'no'});
  }

  deleteproduct(){
    console.log(this.data)
    this.ProductService.deleteProduct(this.data).subscribe((data)=>{console.log(data)})
    this.dialogRef.close({ data: 'ok' })
  }

  ngOnInit(): void {
  }


}
