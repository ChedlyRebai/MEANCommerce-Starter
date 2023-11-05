import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ConnectGuard } from '../guards/connect.guard';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path:"",loadChildren:()=>import("./productlist/productlist.module").then(mod=>mod.ProductlistModule) },
  {path:'acc',loadChildren:()=>import("./accueil/accueil.module").then(mod=>mod.AccueilModule) },
  {path:"login",loadChildren:()=>import("./login/login.module").then(mod=>mod.LoginModule) },

  {path:"register",loadChildren:()=>import("./register/register.module").then(mod=>mod.RegisterModule) },
  {path:"productlist",loadChildren:()=>import("./productlist/productlist.module").then(mod=>mod.ProductlistModule) },
  {path:"checkout",loadChildren:()=>import("./checkout/checkout.module").then(mod=>mod.CheckoutModule),canActivate:[ConnectGuard]},
  {path:"contact",loadChildren:()=>import("./contact/contact.module").then(mod=>mod.ContactModule)},
  {path:"details/:slug",loadChildren:()=>import("./pruductdetails/pruductdetails.module").then(mod=>mod.PruductdetailsModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
