import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardDetailsComponent } from './dashboard-details.component';

const routes: Routes = [{ path: '', component: DashboardDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardDetailsRoutingModule { }
