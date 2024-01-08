import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymmatricalPage } from './symmatrical.page';

const routes: Routes = [
  {
    path: '',
    component: SymmatricalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymmatricalPageRoutingModule {}
