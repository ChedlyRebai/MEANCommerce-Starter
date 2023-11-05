import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruductdetailsRoutingModule } from './pruductdetails-routing.module';
import { PruductdetailsComponent } from './pruductdetails.component';

import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    PruductdetailsComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    PruductdetailsRoutingModule
  ]
})
export class PruductdetailsModule { }
