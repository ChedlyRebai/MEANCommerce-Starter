import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardDetailsRoutingModule } from './dashboard-details-routing.module';
import { DashboardDetailsComponent } from './dashboard-details.component';


@NgModule({
  declarations: [
    DashboardDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardDetailsRoutingModule
  ]
})
export class DashboardDetailsModule { }
