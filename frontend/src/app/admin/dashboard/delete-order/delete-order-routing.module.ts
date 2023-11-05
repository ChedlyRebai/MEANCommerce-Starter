import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteOrderComponent } from './delete-order.component';

const routes: Routes = [{ path: '', component: DeleteOrderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteOrderRoutingModule { }
