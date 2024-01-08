import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CradlePage } from './cradle.page';

const routes: Routes = [
  {
    path: '',
    component: CradlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CradlePageRoutingModule {}
