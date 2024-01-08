import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoundingTopPage } from './rounding-top.page';

const routes: Routes = [
  {
    path: '',
    component: RoundingTopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoundingTopPageRoutingModule {}
