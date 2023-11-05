import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

import { DashboardmenuComponent } from './dashboardmenu/dashboardmenu.component';
import { DeleteComponent } from './delete/delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';

import { ListCategoryComponent } from './list-category/list-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';

@NgModule({
  declarations: [
    DashboardComponent,

    ProductsComponent,
    UsersComponent,

    DashboardmenuComponent,
    DeleteComponent,
    DeleteuserComponent,
    UpdateuserComponent,
    OrdersListComponent,
    UpdateCategoryComponent,
    AddCategoryComponent,

    ListCategoryComponent,
     DeleteCategoryComponent,



  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatDialogModule,FormsModule,
    ReactiveFormsModule,MatTabsModule

  ]
})
export class DashboardModule { }
