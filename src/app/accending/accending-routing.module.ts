import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccendingPage } from './accending.page';

const routes: Routes = [
  {
    path: '',
    component: AccendingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccendingPageRoutingModule {}
