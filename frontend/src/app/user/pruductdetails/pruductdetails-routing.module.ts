import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruductdetailsComponent } from './pruductdetails.component';

const routes: Routes = [{ path: '', component: PruductdetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruductdetailsRoutingModule { }
