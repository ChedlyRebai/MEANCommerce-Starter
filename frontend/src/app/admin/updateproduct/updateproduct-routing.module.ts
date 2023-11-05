import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateproductComponent } from './updateproduct.component';

const routes: Routes = [{ path: '', component: UpdateproductComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateproductRoutingModule { }
