import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';

// const routes: Routes = [{ path: 'productlist', loadChildren: () => import('./productlist/productlist.module').then(m => m.ProductlistModule) }, { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) }];
const routes: Routes = [
  {path:'admin',loadChildren:()=>import("./admin/admin.module").then(mod=>mod.AdminModule),canActivate:[AdminGuard] },
  {path:'',loadChildren:()=>import("./user/user.module").then(mod=>mod.UserModule) },
  { path: 'shoppingcart', loadChildren: () => import('./user/shoppingcart/shoppingcart.module').then(m => m.ShoppingcartModule) },
  { path: 'contact', loadChildren: () => import('./user/contact/contact.module').then(m => m.ContactModule) },
 
   
  { path: 'orderdetails', loadChildren: () => import('./admin/dashboard/order-details/order-details.module').then(m => m.OrderDetailsModule) },
  { path: 'deleteorder', loadChildren: () => import('./admin/dashboard/delete-order/delete-order.module').then(m => m.DeleteOrderModule) },

  { path: 'forbidden', loadChildren: () => import('./forbidden/forbidden.module').then(m => m.ForbiddenModule) },
    { path: '**', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
