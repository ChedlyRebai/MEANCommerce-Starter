import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { UpdateproductRoutingModule } from './updateproduct-routing.module';
import { UpdateproductComponent } from './updateproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddproductRoutingModule } from '../addproduct/addproduct-routing.module';


@NgModule({
  declarations: [
    UpdateproductComponent
  ],
  imports: [
    CommonModule,
    UpdateproductRoutingModule,
    AngularEditorModule,
    AddproductRoutingModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule
  ]
})
export class UpdateproductModule { }
