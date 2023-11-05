import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';


const routes: Routes = [
  {path:"",loadChildren:()=>import("./dashboard/dashboard.module").then(mod=>mod.DashboardModule) },
  { path: 'dashboardDetails', loadChildren: () => import('./dashboard-details/dashboard-details.module').then(m => m.DashboardDetailsModule) },
  {path:"addproduct",loadChildren:()=>import("./addproduct/addproduct.module").then(mod=>mod.AddproductModule) },
  {path:"orders",loadChildren:()=>import("./orders/orders.module").then(mod=>mod.OrdersModule) },
  {path:"updateProduct/:slug",loadChildren:()=>import("./updateproduct/updateproduct.module").then(mod=>mod.UpdateproductModule) },
  {path:"dashboard",loadChildren:()=>import("./dashboard-details/dashboard-details.module").then(mod=>mod.DashboardDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
