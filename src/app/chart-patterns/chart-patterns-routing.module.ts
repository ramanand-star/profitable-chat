import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartPatternsPage } from './chart-patterns.page';

const routes: Routes = [
  {
    path: '',
    component: ChartPatternsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartPatternsPageRoutingModule {}
