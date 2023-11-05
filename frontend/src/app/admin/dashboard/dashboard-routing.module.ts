import { ListCategoryComponent } from './list-category/list-category.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { DashboardmenuComponent } from './dashboardmenu/dashboardmenu.component';
import { MenuComponent } from './../../menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './../orders/orders.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users/users.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';

const routes: Routes = [
  {path: "", redirectTo: "users", pathMatch: "full" },
  {path: 'orders', component: OrdersComponent },
  {path: 'categlist', component: ListCategoryComponent },
  {path: 'updatecateg', component: UpdateCategoryComponent },
  {path: 'products', component: ProductsComponent },
  {path: 'users', component: UsersComponent },
  {path: 'adminnav', component: DashboardmenuComponent },
  {path:'orderlist',component:OrdersListComponent},
  { path: 'orderdetails', loadChildren: () => import('./order-details/order-details.module').then(m => m.OrderDetailsModule) },
  { path: 'deleteorder', loadChildren: () => import('./delete-order/delete-order.module').then(m => m.DeleteOrderModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
