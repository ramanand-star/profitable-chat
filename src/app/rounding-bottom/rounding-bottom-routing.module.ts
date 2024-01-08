import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoundingBottomPage } from './rounding-bottom.page';

const routes: Routes = [
  {
    path: '',
    component: RoundingBottomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoundingBottomPageRoutingModule {}
